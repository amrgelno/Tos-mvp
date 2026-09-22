import "./Nav.css"
import logo from "../../assets/images/logo.png"

export default function Nav() {
  return (
    <div className='nav flex justify-center items-center gap-12'>
        <div className="logo_c">
            <a href=""><img src={logo} alt="" /></a>
        </div>
        <ul className="navList flex gap-5">
            <li className="navListItem"><a href="/" className="navListItemText">Home</a></li>
            <li className="navListItem"><a href="/" className="navListItemText">Finance System</a></li>
            <li className="navListItem"><a href="/" className="navListItemText">Crm System</a></li>
            <li className="navListItem"><a href="/" className="navListItemText">About</a></li>
        </ul>
    </div>
  )
}
