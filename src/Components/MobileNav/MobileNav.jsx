import "./MobileNav.css"
import logo from "../../assets/images/logo.png"
import { IoCloseCircle } from "react-icons/io5";
import { useTranslation } from "react-i18next";


export default function MobileNav() {
  
  const { t, i18n } = useTranslation();


  const CloseNavPhone = ()=>{
    if (
      document.querySelector(".mobileNav_c").classList.contains("openNavHandler")
    ) {
      document.querySelector(".mobileNav_c").classList.remove("openNavHandler");
      document.querySelector(".mobileNav_c").classList.add("closeNavHandler");
      document.querySelector(".navOpenIcon").classList.remove("barHidden");
      document.querySelector(".navOpenIcon").classList.add("barShow");
    }
  }

  return (
    <div className='mobileNav_c closeNavHandler flex flex-col gap-8'>
        <IoCloseCircle onClick={CloseNavPhone} className="navCloseIcon"/>
        <div className="logo_c">
            <a href=""><img src={logo} alt="" /></a>
        </div>
        <ul className="navList flex flex-col gap-5">            
            <li className="navListItem"><a href="/" className="navListItemText">{t("navList")[0]}</a></li>
            <li className="navListItem"><a href="/financeSystem" className="navListItemText">{t("navList")[1]}</a></li>
            <li className="navListItem"><a href="/crmSystem" className="navListItemText">{t("navList")[2]}</a></li>
            <li className="navListItem"><a href="/screenShots" className="navListItemText">{t("navList")[3]}</a></li>
        </ul>
    </div>
  )
}
