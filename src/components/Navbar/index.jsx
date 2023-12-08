
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from 'axios';
import SidebarMenu from '../SidebarMenu'
import "./styles.css";

import vfbclogo from '../../assets/logo.png';

export const Navbar = () => {

  const [logo, setLogo] = useState(null);

  // useEffect(() => {
  //   axios.get('http://localhost:1337/api/landing-pages?populate=logo', {
  //     headers: {
  //       'Authorization': `Bearer 9796f074c975694fb46024ecdf38c6c950b4dc4f0932cda956a0f34821b819928f7bb1739fe810303f182be35efff8d013f024c0968ba398af6c0bb6bb03c0c0999a93a6457e7c913e5852b1c085b4fc7c79b33ce7ed60358b74a7d35f4a1519371e4f954f17d71936beb7130386ca2fa1a1cbcaaa15aad52119c63e56e7fed3`
  //     }
  //   })
  //   .then((res) => {
  //     setLogo(res.data.data[0].attributes.logo.data.attributes);
  //   })
  //   .catch((error) => {
  //     console.error(error)
  //   })
  // }, []);


  // /navbar scroll when active state
  const [navbar, setNavbar] = useState(false)

  //logo scroll when active
  const [navColor, setNavbarLogo] = useState('transparent')

  //navbar scroll changeBackground function
  const changeBackground = () => {
    if (window.scrollY >= 96) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }

  useEffect(() => {
    changeBackground()
    // adding the event when scroll change background
    window.addEventListener("scroll", changeBackground)
  })

  //logo scroll function
  const changeLogo = () => {
    if (window.scrollY >= 500) {
      setNavbarLogo('rgba(0,0,0,0.8)')
    } else {
      setNavbarLogo('transparent')
    }
  }

  useEffect(() => {
    changeLogo()
    // adding the event when scroll change Logo
    window.addEventListener("scroll", changeLogo)
  })

    return (
        <nav
          style={{
            backgroundColor: navColor
          }}
        >
          <Link to="/">
            {vfbclogo && <img src={vfbclogo} alt=""/>}
          </Link>
          {/* <ul>
            <li>
              <Link to="/destination">Destination</Link>
            </li>
            <li>
              <Link to="/blog">Contact Us</Link>
            </li>
            <li>
                
            </li>
          </ul> */}
         <div className="sidebar"> <SidebarMenu /></div>
      </nav>
    )
}