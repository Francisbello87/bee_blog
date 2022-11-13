import React, { useEffect, useState } from "react";
import { Layout } from "../components";
import "../styles/globals.scss";
import { motion } from "framer-motion";
import * as ga from "../lib/ga";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps, router }) {
  const routers = useRouter();
  useEffect(() => {
    const handleRouteChange = (url) => {
      ga.pageview(url);
    };
    //When the component is mounted, subscribe to router changes
    //and log those page views
    routers.events.on("routeChangeComplete", handleRouteChange);

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method
    return () => {
      routers.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [routers.events]);
  return (
    <motion.div
      key={router.route}
      initial="pageInitial"
      animate="pageAnimate"
      variants={{
        pageInitial: {
          opacity: 0,
        },
        pageAnimate: {
          opacity: 1,
        },
      }}
    >
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </motion.div>
  );
}

export default MyApp;
