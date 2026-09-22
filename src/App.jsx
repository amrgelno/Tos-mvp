
import './App.css'
import {Nav, SectionExample} from "./Components/index"
import {Hero} from "./Sections/index"

function App() {
  
  const financeSystemCardData = [
    [
      {title:"إدارة الحسابات البنكية"}, 
      {item_1:"إمكانية إضافة أكثر من حساب بنكي مع بيانات البنك الاسم - رقم الحساب – العملة - الملاحظات)."},
      {item_2:"عرض الرصيد الحالي لكل حساب."},
      {item_3:"تحديث الرصيد تلقائيًا عند إصدار إيصال استلام مرتبط بالحساب."},
      {item_4:". تسجيل عمليات الإيداع أو السحب اليدوية تحويلات داخلية أو مصروفات بنكية)."},
      {item_5:"عرض تقرير تفصيلي بحركات كل حساب خلال فترة معينة تاريخ) - نوع العملية – المبلغ – المستخدم)."},
    ]
  ]

  return (
    <>
    <Nav/>
    <Hero/>
    <SectionExample 
        title="FINANCE SYSTEM"
        LargeCardTitle = "النظام  المحاسبي"    
        LargeCardText = "مسؤول عن إدارة جميع التعاملات المالية داخل الشركة, بما يشمل الاإيرادات, المصروفات, و أرصدة البنوك والخزائن, بالإضافة إلى إصدار إيصالات استلام العملاء"    
        sectionCardTitle = "إدارة الحسابات البنكية"    
        sectionCardListItem = {financeSystemCardData}    
    />
    </>
  )
}

export default App
