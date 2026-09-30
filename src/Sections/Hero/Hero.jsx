import "./Hero.css"
import heroImg from "../../assets/images/heroImg.png"
import { useTranslation } from 'react-i18next';

export default function Hero() {
  const {t} = useTranslation()
  return (


<div className="CP heroContainer g-btn lex flex-col lg:flex-row justify-between items-center gap-3">
        <div className="heroRight">
          <img src={heroImg} alt="" />
        </div>
        <div className="heroLeft text-center lg:text-right flex flex-col items-center lg:items-end gap-8">
          <p className="heroTitle text-3xl font-bold">{t("heroTitle")}</p>
          <p className="heroText text-lg font-medium">{t("heroText")}</p>
          <div className="flex flex-col items-center lg:items-end lg:flex-row gap-4">
            <a href="https://traveldynamicwindows.ifree.page/" className="heroBtn text-xl">Try By Yourself</a>
            <a href="/screenShots" className="heroBtn text-xl">{t("screenShotsBtn")}</a>
          </div>
          <div className="heroInfoBtns w-fit flex flex-col items-center lg:items-end lg:flex-row gap-4 sm:text-sm md:text-lg">
            <p className="heroInfoBtn w-fit">Email:-amrgelno@gmail.com</p>
            <p className="heroInfoBtn w-fit">Password:-@mrgelno26$</p>
          </div>
        </div>        
      </div>
  )
}
