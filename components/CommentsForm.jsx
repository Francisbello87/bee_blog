import React, {useRef, useState, useEffect} from 'react'

import { submitComment } from '../services'

const CommentsForm = ({slug}) => {
  const [error, setError] = useState(false)
  const [localStorage, setlocalStorage] = useState(null)
  const [showSuccessMessage, setShowSuccessMessage] = useState(false)
  const commentEl = useRef()
  const nameEl = useRef()
  const emailEl = useRef()
  const storeDataEl = useRef()

  useEffect(() => {
   nameEl.current.value = window.localStorage.getItem('name')
   emailEl.current.value = window.localStorage.getItem('email')
  
  }, [])
  

  const handlePostSubmission = () => {
    setError(false);
    const {value: comment} = commentEl.current
    const {value: name} = nameEl.current
    const {value: email} = emailEl.current
    const {checked: storeData} = storeDataEl.current
    
    if (!name || !email || !comment) {
      setError(true);
      return;
    }
    const commentObj = {
      name,
      email,
      comment,
      slug,
    };
  
    if(storeData) {
      window.localStorage.setItem('name', name)
      window.localStorage.setItem('email', email)
    }else {
      window.localStorage.removeItem('name');
      window.localStorage.removeItem('email');
    }

    submitComment(commentObj)
      .then((res) =>{
        setShowSuccessMessage(true)
        setTimeout(() =>{
          setShowSuccessMessage(false)
        }, 3000)
      })
  }
 
  return (
    <div className='bg-gray-900 shadow-lg rounded-lg p-8 pb-12 mb-8'>
       <h3 className="text-xl mb-8 font-semibold border-b pb-4">
        Leave a reply
        </h3>
         <div className="grid grid-cols-1 gap-4 mb-4">
            <textarea ref={commentEl} 
            className="p-4 outline-none w-full rounded-lg h-40 focus:ring-2 focus:ring-blue-200 bg-gray-600 text-white-700" name="comment" placeholder="Comment" />
         </div>
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
            <input type="text"  className="py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-blue-200 bg-gray-600 text-white-700" placeholder="Name" name="name" ref={nameEl} />
            <input type="email"  className="py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-blue-200 bg-gray-600 text-white-700" placeholder="Email" name="email" ref={emailEl} />
         </div>
         <div className="grid grid-cols-1 gap-4 mb-4">
          <div>
            <input ref={storeDataEl}  type="checkbox" id="storeData" name="storeData" value="true" />
            <label className="text-gray-500 cursor-pointer" htmlFor="storeData"> Save my name, email in this browser for the next time I comment.</label>
          </div>
        </div>
        {error && <p className="text-xs text-red-500">All fields are required.</p>}
        <div className="mt-8">
          <button type="button" onClick={handlePostSubmission} className="transition duration-500 ease hover:bg-red-700 inline-block bg-red-300 text-lg font-medium rounded-full text-white px-8 py-3 cursor-pointer">Post Comment</button>
          {showSuccessMessage && <span className="text-xl float-right font-semibold mt-3 text-green-500">Comment submitted for review</span>}
        </div>
    </div>
  )
}

export default CommentsForm