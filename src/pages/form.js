
import React, {useState} from "react"
import Layout from "../components/layout/layout"
import { Container, Row, Col } from "reactstrap"

export default function Form() {
  const [formData, setFormData] = useState({})
  const [message, setMessage] = useState("")

  const handleInput = (e) => {
    const copyFormData = { ...formData }
    copyFormData[e.target.name] = e.target.value
    setFormData(copyFormData)
  }
  console.log(formData)

  const myData = {
    fields: formData
  }

  const sendData = async (e) => {
    e.preventDefault()
    try {
      const response = await fetch(
        "https://api.airtable.com/v0/appQNd1ZBLXYdZyId/data?api_key=keyvRuPIeqiVjsCzL",
        {
          method: "post",
          body: JSON.stringify(myData),
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      const json = await response.json()
      console.log("Success:", JSON.stringify(json))
      setMessage("Success")
    } catch (error) {
      console.error("Error:", error)
      setMessage("Error")
    }
  }

  return (
    <Layout>

  <Container>
  <Row className="justify-content-center form-mine">
  <Col className="cwrap" sm="12" md={{ size: 8 }}>
    <div className="d-flex justify-content-center">
      <h4>ফরম পূরণ করার  আগে 01903093095 এই নাম্বার এ যোগাযোগ  করতে হবে।</h4>
    </div>
  <form
        className="input-form"
        id="contact"
        name="contact"
        required
        onSubmit={sendData}
      >
        <input
               
                      onChange={handleInput}
                      type="text"
                      name="name"
                      placeholder="Full Name"
                      required
                      className="form-control cs csh"
                    />
                    <input
             
                      onChange={handleInput}
                      type="text"
                      name="phone"
                      placeholder="Phone Number"
                      required
                      className="form-control cs csh"
                    />
                    <input
                 
                      onChange={handleInput}
                      type="text"
                      name="email"
                      placeholder="Email Address"
                      required
                      className="form-control cs csh"
                    />
                    <input
            
                      onChange={handleInput}
                      type="text"
                      name="institute"
                      placeholder="Institute Name"
                      required
                      className="form-control cs csh"
                    />
                    <input
             
                      onChange={handleInput}
                      type="text"
                      name="father"
                      placeholder="Father Name"
                      required
                      className="form-control cs csh"
                    />
                    <input
           
                      onChange={handleInput}
                      type="text"
                      name="mother"
                      placeholder="Mother Name"
                      required
                      className="form-control cs csh"
                    />
                    
                    <input
               
                      onChange={handleInput}
                      type="text"
                      name="blood"
                      placeholder="Blood Group"
                      className="form-control cs csh"
                    />
                    <input
          
                      onChange={handleInput}
                      type="text"
                      name="facebook"
                      placeholder="Facebook Url"
                      className="form-control cs csh"
                    />
                    <input
        
                      onChange={handleInput}
                      type="text"
                      name="nid"
                      placeholder="NID Number"
                      className="form-control cs csh"
                    />
                    <textarea
               
                      onChange={handleInput}
                      type="text"
                      name="message"
                      placeholder="Any of your comments about our organizations"
                      required
                      className="form-control cs"
                    ></textarea>
                    <h6>Adresss</h6>
                    <input
           
                      onChange={handleInput}
                      type="text"
                      name="ward"
                      placeholder="Ward No."
            
                      className="form-control cs csh"
                    />
                    <input
              
                      onChange={handleInput}
                      type="text"
                      name="village"
                      placeholder="Village"
                   
                      className="form-control cs csh"
                    />
                    <h6>Present Adresss</h6>
                    
                    <input
     
                      onChange={handleInput}
                      type="text"
                      name="present"
                      placeholder="Present Address"
        
                      className="form-control cs csh"
                    />
        <input name="submit" type="submit" value="Send" />
        {message}
      </form>
  </Col>
  </Row>
  
 
  </Container>
      
    </Layout>
    
  )
}


