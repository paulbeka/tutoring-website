import React from "react";
import { useParams } from "react-router-dom";


const BlogPage = ({ blogId }) => {

  const { id } = useParams();
  // load the files from a folder
  const fileContent = "";

  return (
    <div style={{ "margin": "3em" }}>
      {fileContent}
    </div>
  )
}

export default BlogPage