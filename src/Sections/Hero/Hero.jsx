import "./Hero.css"
import heroImg from "../../assets/images/heroImg.png"

export default function Hero() {
  return (
    // <div className="hero_c f">
    //     <div className="heroImg">
    //         <img src={heroImg} alt="" />
    //     </div>
    //     <div className="heroContent text-center md:text-right flex flex-col items-center md:items-end gap-8">
    //         <p className="heroTitle text-3xl font-bold">نظام إدارة شركة السياحة الدينية (محاسبي + CRM )</p>
    //         <p className="heroText text-lg font-medium">يهدف النظام إلى إدارة العمليات المالية و الإدارية لشركة السياحة الدينية بشكل متكامل. </p>
    //         <p className="heroBtn text-xl">Try By Yourself</p>
    //     </div>
    // </div>


<div className="CP heroContainer g-btn lex flex-col md:flex-row justify-between items-center gap-4">
        <div className="heroRight">
          <img src={heroImg} alt="" />
        </div>
        <div className="heroLeft text-center md:text-right flex flex-col items-center md:items-end gap-8">
          <p className="heroTitle text-3xl font-bold">نظام إدارة شركات السياحة (محاسبي + CRM )</p>
          <p className="heroText text-lg font-medium">يهدف النظام إلى إدارة العمليات المالية و الإدارية لشركة السياحة الدينية بشكل متكامل. </p>
          <a href="https://traveldynamicwindows.ifree.page/" className="heroBtn text-xl">Try By Yourself</a>
          <div className="heroInfoBtns flex flex-col md:flex-row gap-4 sm:text-sm md:text-lg">
            <p className="heroInfoBtn">Email:-amrgelno@gmail.com</p>
            <p className="heroInfoBtn">Password:-@mrgelno26$</p>
          </div>
        </div>        
      </div>
  )
}
