import "./Home.css"
import {Hero} from "../../Sections/index"
import { SectionExample } from "../../Components"
import thumb_1 from "../../assets/images/video_thumb_1.jpeg"
import thumb_2 from "../../assets/images/video_thumb_2.jpeg"

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
            thumb={thumb_1}
        />  
        <SectionExample 
            tag="financeSystem"
            title="FINANCE SYSTEM"
            LargeCardTitle = "النظام  المحاسبي"    
            LargeCardText = "مسؤول عن إدارة جميع التعاملات المالية داخل الشركة, بما يشمل الاإيرادات, المصروفات, و أرصدة البنوك والخزائن, بالإضافة إلى إصدار إيصالات استلام العملاء"    
            LargeCardBtn="Read More"
            LargeCardLink="/financeSystem"
            thumb={thumb_2}
        />  
        <SectionExample 
            tag="umreSystem"
            title="UMRE SYSTEM"
            LargeCardTitle = "إدارة أﺳﻌﺎر اﻟﻌﻣرة واﻟﺣﺞ" 
            LargeCardText = "يسمح اﻟﻧظﺎم ﺑﺈدارة ﻋروض وأﺳﻌﺎر العمرة و الحج ﺑﺷﻛل ﻣرن وﻣﺣدث دائما، ﻣﻊ إمكانية رﺑط اﻷﺳﻌﺎر بالرحلات أو المواسم المختلفة."
            LargeCardBtn="Read More"
            LargeCardLink="/umreSystem"
        />  
    </>
  )
}
