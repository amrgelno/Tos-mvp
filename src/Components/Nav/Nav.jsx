import "./Nav.css"
import { useEffect } from "react";
import logo from "../../assets/images/logo.png"
import { FaBars } from "react-icons/fa";
import { FaEarthAfrica } from "react-icons/fa6";

import { useTranslation } from "react-i18next";
import "../../assets/css/bootstrap.min.css"
import "../../assets/js/bootstrap.bundle.min.js"

export default function Nav() {

  const { t, i18n } = useTranslation();
      
        useEffect(()=>{
          document.documentElement.lang = i18n.language
        },[i18n,i18n.languages])
        const languages = [{code:"en",language:"English"},{code:"ar",language:"العربية"}]
      
        const changeLang = (lang) => {
          setLanguage(lang)
          localStorage.setItem("selectedLanguage",lang)
          i18n.changeLanguage(lang)
        }
      
        const setLanguage = ()=>{
          document.documentElement.lang = "en"
        }


  

  const OpenNavPhone = ()=>{
    if (
      document.querySelector(".mobileNav_c").classList.contains("closeNavHandler")
    ) {
      document.querySelector(".mobileNav_c").classList.remove("closeNavHandler");
      document.querySelector(".mobileNav_c").classList.add("openNavHandler");
      document.querySelector(".navOpenIcon").classList.remove("barShow");
      document.querySelector(".navOpenIcon").classList.add("barHidden");

    }
  }
  
  

  return (
    <div className='nav navHandler closeNavHandler flex justify-between md:justify-center items-center gap-12'>
        <FaBars onClick={OpenNavPhone} className="navOpenIcon"/> 
        <div className="logo_c">
            <a href="/"><img src={logo} alt="" /></a>
        </div>
        <ul className="navList flex gap-5">            
            <li className="navListItem"><a href="/" className="navListItemText">{t("navList")[0]}</a></li>
            <li className="navListItem"><a href="/financeSystem" className="navListItemText">{t("navList")[1]}</a></li>
            <li className="navListItem"><a href="/crmSystem" className="navListItemText">{t("navList")[2]}</a></li>
            <li className="navListItem"><a href="/screenShots" className="navListItemText">{t("navList")[3]}</a></li>
        </ul>
        <div className="dropdown">
          <button className="dropdown-btn flex items-center gap-3" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            <FaEarthAfrica /> <span>Languages</span>
          </button>
          <ul className="dropdown-menu">
            {
              languages.map((lang,i)=>{
                return <button key={i} href="#" className="langBtn dropdown-item block px-4 py-2 text-sm text-gray-300 focus:bg-white/5 focus:text-white focus:outline-hidden" onClick={()=>{changeLang(lang.code)}}>{lang.language}</button>
              })
            }
          </ul>
        </div>
    </div>
  )
}
