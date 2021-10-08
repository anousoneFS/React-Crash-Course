import React, { useState } from "react"
import "./App.css"
import Navbar from "./Navbar"
import Input from "./Input"
import Post from "./Post"
import Category from "./Category"
import ResponsiveGrid from "./Demo"
import { Route, Switch } from "react-router-dom"
import Products from "./Products"
import Fetchapi from "./FetchApi"

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
        <div>
            <Navbar name="Facebook2" />
            <Switch>
                <Route exact path="/">
                    <div className="App">
                        <ResponsiveGrid />
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
                </Route>
                <Route path="/product">
                    <Products />
                </Route>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/category">
                    <Category />
                </Route>
            </Switch>
        </div>
    )
}

function About() {
    return (
        <div>
            <Fetchapi />
        </div>
    )
}

export default App
