import "./Hero.css"
import heroImg from "../../assets/images/heroImg.png"

export default function Hero() {
  return (
    <div className="hero_c flex justify-between items-center gap-4">
        <div className="heroImg">
            <img src={heroImg} alt="" />
        </div>
        <div className="heroContent text-right flex flex-col items-end gap-8">
            <p className="heroTitle text-3xl font-bold">نظام إدارة شركة السياحة الدينية (محاسبي + CRM )</p>
            <p className="heroText text-lg font-medium">يهدف النظام إلى إدارة العمليات المالية و الإدارية لشركة السياحة الدينية بشكل متكامل. </p>
            <p className="heroBtn text-xl">Try By Yourself</p>
        </div>
    </div>

  )
}
