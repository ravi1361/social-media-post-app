import React, { useState, useEffect } from 'react'
import axios from "axios"

const Feed = () => {

  // const [posts, setPosts] = useState([
  //   {
  //     _id:"1",
  //     image:"https://images.unsplash.com/photo-1706980709179-2ad906cd6f91?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGJhYnklMjBpbWFnZXN8ZW58MHwxfDB8fHww",
  //     caption:"Beautiful scenery"
  //   }
  // ])

  const [posts, setPosts] = useState([])

useEffect(() => {
  // axios.get("http://localhost:3000/posts")
  axios.get("https://social-media-post-backend-e6pkpclox-raviii2.vercel.app/posts")
  .then((res)=>{

      console.log(res.data)
    setPosts(res.data.posts)
    
  })
    .catch((err) => {
      console.log(err)
    })
},[])



  return (
    <section className='feed-section'>
      
      {
        posts.length > 0 ? (
          posts.map( (post)  => ( 
            <div key={post._id} className='post-card'>
              <img src={post.image} alt={post.caption} />
              <p>{post.caption}</p>

            </div>
          ) )
        ) : (
          <h1>No posts available</h1>
        )


      }


    </section>
  )
}

export default Feed
