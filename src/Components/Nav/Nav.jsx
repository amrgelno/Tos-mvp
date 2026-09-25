import "./Nav.css"
import logo from "../../assets/images/logo.png"
import { FaBars } from "react-icons/fa";
import { IoCloseCircle } from "react-icons/io5";

export default function Nav() {


  const CloseNavPhone = ()=>{
    if (
      document.querySelector(".nav").classList.contains("openNavHandler")
    ) {
      document.querySelector(".nav").classList.remove("openNavHandler");
      document.querySelector(".nav").classList.add("closeNavHandler");
      document.querySelector(".navOpenIcon").classList.remove("barHidden");
      document.querySelector(".navOpenIcon").classList.add("barShow");
    }
  }

  const OpenNavPhone = ()=>{
    if (
      document.querySelector(".nav").classList.contains("closeNavHandler")
    ) {
      document.querySelector(".nav").classList.remove("closeNavHandler");
      document.querySelector(".nav").classList.add("openNavHandler");
      document.querySelector(".navOpenIcon").classList.remove("barShow");
      document.querySelector(".navOpenIcon").classList.add("barHidden");

    }
  }
  
  

  return (
    <div className='nav navHandler closeNavHandler flex justify-center items-center gap-12'>
        <FaBars onClick={OpenNavPhone} className="navOpenIcon"/>
        <div className="logo_c">
            <a href=""><img src={logo} alt="" /></a>
        </div>
        <ul className="navList flex gap-5">
            <IoCloseCircle onClick={CloseNavPhone} className="navCloseIcon"/>
            <li className="navListItem"><a href="/" className="navListItemText">Home</a></li>
            <li className="navListItem"><a href="/financeSystem" className="navListItemText">Finance System</a></li>
            <li className="navListItem"><a href="/crmSystem" className="navListItemText">Crm System</a></li>
            <li className="navListItem"><a href="/" className="navListItemText">About</a></li>
        </ul>
    </div>
  )
}
