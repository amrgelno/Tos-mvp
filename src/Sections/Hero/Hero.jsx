import "./Hero.css"
import heroImg from "../../assets/images/heroImg.png"
import { useTranslation } from 'react-i18next';

export default function Hero() {
  const {t} = useTranslation()
  return (


<div className="CP heroContainer g-btn lex flex-col md:flex-row justify-between items-center gap-4">
        <div className="heroRight">
          <img src={heroImg} alt="" />
        </div>
        <div className="heroLeft text-center md:text-right flex flex-col items-center md:items-end gap-8">
          <p className="heroTitle text-3xl font-bold">{t("heroTitle")}</p>
          <p className="heroText text-lg font-medium">{t("heroText")}</p>
          <a href="https://traveldynamicwindows.ifree.page/" className="heroBtn text-xl">Try By Yourself</a>
          <div className="heroInfoBtns flex flex-col md:flex-row gap-4 sm:text-sm md:text-lg">
            <p className="heroInfoBtn">Email:-amrgelno@gmail.com</p>
            <p className="heroInfoBtn">Password:-@mrgelno26$</p>
          </div>
        </div>        
      </div>
  )
}
