import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import "../styles/app.css"
import Layout from "../components/layout/layout"
import Cover from "../images/cover.jpg"

const IndexPage = () => (
  <Layout>
     <div className="container">
     <div className="text-center home">
    <img className="rounded" src={Cover}  alt="Cover"/>
    </div>
     </div>
    
   
  </Layout>
)


export default IndexPage
