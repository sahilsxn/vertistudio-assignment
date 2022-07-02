import {React, useState} from 'react'
import PostBlock from './PostBlock'
import "./select.css"

const App = () => {

  const postData =
    [
      {"id": 1, "title": "The Car Wash", "author":"admin", "category":"uncategorized",
        "postContent": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        "date": "July 2, 2022", "image": "https://images.unsplash.com/photo-1608506375591-b90e1f955e4b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80"
      },
      {"id": 2, "title": "Life in Goa", "author":"admin1", "category":"uncategorized",
        "postContent": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." ,
        "date": "July 2, 2022", "image":"https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
      },
      {"id": 3, "title": "My Holiday Place", "author":"admin2", "category":"uncategorized",
      "postContent": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      "date": "July 2, 2022", "image":"https://images.unsplash.com/photo-1545048702-79362596cdc9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
      }
    ]
  
  const [postTitle, setPostTitle] = useState('')
  const [postItem, setPostItem] = useState({})

  const handlePostTitleChange = (e) => {
    
    e.preventDefault()
    setPostTitle(e.target.value)
    
    const getPostItem = postData.find(ele=>ele.title===e.target.value)
    
    setPostItem(getPostItem)

  }

  return (
    <div>
      <h1 style={{marginLeft:"24px", fontFamily: "arial", fontFamily:"sans-serif"}}>My Blog</h1>
      <form>
        <select value={postTitle} onChange={handlePostTitleChange}>
          <option value="">Select a Post</option>
          {postData.map(post=>{
            return (
                <option key={post.id} value={post.title}>{post.title}</option>
            )
        })}
        </select>
      </form>
      <PostBlock postItem={postItem}/>
    </div>
  )
}

export default App