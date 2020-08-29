import React, { Fragment} from "react"
import Logo from "../../../images/logo.png"
import {Link} from "gatsby"

const Navbar = () => {
  return (
<div>
<div class="text-center logo">
 
  <img src={Logo} className="rounded" />

</div>

    <div className="navbar-link d-flex justify-content-center">

<ul className="nav"><li className="nav-item"><Link className="nav-link" to='/'>Home</Link></li>
<li className="nav-item"><Link  className="nav-link" to='/about'>About</Link></li>
<li className="nav-item"><Link  className="nav-link" to='/form'>Form</Link></li></ul>

    </div>



</div>
      

  )
}

export default Navbar
