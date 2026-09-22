import "./Hero.css"
import heroImg from "../../assets/images/heroImg.png"

export default function Hero() {
  return (
    <div className="hero_c flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="heroImg">
            <img src={heroImg} alt="" />
        </div>
        <div className="heroContent sm:text-center md:text-right flex flex-col sm:items-center md:items-end gap-8">
            <p className="heroTitle text-3xl font-bold">نظام إدارة شركة السياحة الدينية (محاسبي + CRM )</p>
            <p className="heroText text-lg font-medium">يهدف النظام إلى إدارة العمليات المالية و الإدارية لشركة السياحة الدينية بشكل متكامل. </p>
            <p className="heroBtn text-xl">Try By Yourself</p>
        </div>
    </div>

  )
}
