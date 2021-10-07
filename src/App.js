import React, { useState } from "react"
import "./App.css"
import Navbar from "./Navbar"
import Input from "./Input"
import Post from "./Post"

let id = 0
function App() {
    const [posts, setPosts] = useState([])

    function addPost(title) {
        const newPost = { id, title }
        setPosts([newPost, ...posts])
        id += 1
    }

    function deletePost(id) {
        const updatePosts = posts.filter((post) => post.id !== id)
        setPosts(updatePosts)
    }

    return (
        <div className="App">
            <Navbar name="Facebook2" />
            <Input addPost={addPost} />
            {posts.map((post) => (
                <Post
                    key={post.id}
                    deletePost={deletePost}
                    title={post.title}
                    id={post.id}
                />
            ))}
        </div>
    )
}

export default App
