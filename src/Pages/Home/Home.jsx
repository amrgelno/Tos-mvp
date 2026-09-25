import "./Home.css"
import {Hero} from "../../Sections/index"
import { SectionExample } from "../../Components"

export default function Home() {
  return (
    <>
        <Hero/>
        <SectionExample 
            tag="crmSystem"
            title="CRM SYSTEM"
            LargeCardTitle = "نظام إدارة العملاء"    
            LargeCardText = "يتيح النظام إدارة قاعدة بيانات متكاملة لجميع العملاء والمستفيدين من خدمات الشركة، سواء حجزوا فعليًا أو لم يحجزوا بعد. يستخدم النظام التسجيل بيانات العملاء، متابعة حالتهم المالية والإدارية، وربطهم بالحجوزات والإيصالات والتقارير المختلفة"
            LargeCardBtn="Read More"
            LargeCardLink="/crmSystem"
        />  
        <SectionExample 
            tag="financeSystem"
            title="FINANCE SYSTEM"
            LargeCardTitle = "النظام  المحاسبي"    
            LargeCardText = "مسؤول عن إدارة جميع التعاملات المالية داخل الشركة, بما يشمل الاإيرادات, المصروفات, و أرصدة البنوك والخزائن, بالإضافة إلى إصدار إيصالات استلام العملاء"    
            sectionCardTitle = "إدارة الحسابات البنكية"    
            LargeCardBtn="Read More"
            LargeCardLink="/financeSystem"
        />  
    </>
  )
}
