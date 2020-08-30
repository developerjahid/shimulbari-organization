import React, { useState } from "react"
import Layout from "../components/layout/layout"
import { Container, Row, Col } from "reactstrap"

export default function Form() {
  const [formData, setFormData] = useState({})
  const [message, setMessage] = useState("")

  const handleInput = e => {
    const copyFormData = { ...formData }
    copyFormData[e.target.name] = e.target.value
    setFormData(copyFormData)
  }
  console.log(formData)

  const myData = {
    fields: formData,
  }

  const sendData = async e => {
    e.preventDefault()

    //start spining
    const spining = document.querySelector(".my-spiner")
    spining.classList.add("show")

    //remove button
    document.querySelector(".my-btn").classList.add("hide")

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
      setMessage("You are successfully submitted the form.")

      //remove spining
      spining.classList.remove("show")
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
              <h4>
                ফরম পূরণ করার আগে 01903093095 এই নাম্বার এ যোগাযোগ করতে হবে।
              </h4>
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
                placeholder="Full Name(required)"
                required
                className="form-control cs csh"
              />
              <input
                onChange={handleInput}
                type="text"
                name="phone"
                placeholder="Phone Number(required)"
                required
                className="form-control cs csh"
              />
              <input
                onChange={handleInput}
                type="text"
                name="email"
                placeholder="Email Address(required)"
                required
                className="form-control cs csh"
              />
              <input
                onChange={handleInput}
                type="text"
                name="institute"
                placeholder="Institute Full Name(required)"
                required
                className="form-control cs csh"
              />
              <input
                onChange={handleInput}
                type="text"
                name="father"
                placeholder="Father Name(required)"
                required
                className="form-control cs csh"
              />
              <input
                onChange={handleInput}
                type="text"
                name="mother"
                placeholder="Mother Name(required)"
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
                required
                onChange={handleInput}
                type="text"
                name="facebook"
                placeholder="Facebook Url(required)"
                className="form-control cs csh"
              />

              <h6>Optional</h6>
              <input
                onChange={handleInput}
                type="text"
                name="nid"
                placeholder="NID Number"
                className="form-control cs csh"
              />
              <h6>Compulsory(We'll show every comments to the website)</h6>
              <textarea
                onChange={handleInput}
                type="text"
                name="message"
                placeholder="Any of your comments about our organization(required)"
                required
                className="form-control cs"
              ></textarea>
              <h6>Adresss</h6>
              <input
                onChange={handleInput}
                type="text"
                name="ward"
                placeholder="Ward No.(required)"
                required
                className="form-control cs csh"
              />
              <input
                onChange={handleInput}
                type="text"
                name="village"
                placeholder="Village(required)"
                required
                className="form-control cs csh"
              />
              <h6>Present Adresss</h6>

              <input
                onChange={handleInput}
                type="text"
                name="present"
                placeholder="Present Address(required)"
                className="form-control cs csh"
                required
              />
              <input
                className="my-btn"
                name="submit"
                type="submit"
                value="Send"
              />
              <div className="spinner-border my-spiner" role="status">
                <span className="sr-only">Loading...</span>
              </div>
              {message}
            </form>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}
