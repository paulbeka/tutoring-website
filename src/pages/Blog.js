import React from "react";
import "./css/Blog.css";
import { Link } from "react-router-dom";


const Blog = () => {
  
  const posts = [
    {"title": "This is a test", "description": "Lorem ipsum dolor si amet", "id": "test-blog"},
    {"title": "This is a test", "description": "Lorem ipsum dolor si amet"},
    {"title": "This is a test", "description": "Lorem ipsum dolor si amet"},
    {"title": "This is a test", "description": "Lorem ipsum dolor si amet"},
    {"title": "This is a test", "description": "Lorem ipsum dolor si amet"},
    {"title": "This is a test", "description": "Lorem ipsum dolor si amet"},
    {"title": "This is a test", "description": "Lorem ipsum dolor si amet"},
  ];

  return (
    <div className="blog-container">
      <div className="top-title-blog-container">
        <h1>Blog posts</h1>
      </div>
      <div className="blog-posts-container">
        {posts.map((post) => {
          return (
            <Link className="post-box" to={{
              pathname: `/blog-post/${post.id}`
            }}>
              <div>
                <h4>{post.title}</h4>
                <p>{post.description}</p>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default Blog;