
import './App.css'
import {MobileNav, Nav, SectionExample} from "./Components/index"
import { Home, PageExample, ScreenShots} from './Pages/index';
import { useTranslation } from 'react-i18next';


import { BrowserRouter as Router, Routes, Route,} from "react-router-dom";

function App() {

  const {t} = useTranslation()
  
  const financeSystemCardData = t("financeSystemCardData")
  const crmSystemCardData = t("crmSystemCardData")
  
  
  


  return (
    <>
    <MobileNav />
    <Nav/>
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/financeSystem' element={<PageExample imgPath="/src/assets/images/FinanceSystemImages/" pageTitle="Finance System" pageCardListItem = {financeSystemCardData} iframeLink="https://www.youtube.com/embed/z9KsAhVDCHQ?cc_load_policy=1&cc_lang_pref=en&hl=en"/>}  />
        <Route path='/crmSystem' element={<PageExample imgPath="/src/assets/images/CrmSystemImages/" addSection={true} pageTitle="CRM System" pageCardListItem = {crmSystemCardData} iframeLink="https://www.youtube.com/embed/q9Ez8Ytx5uc?cc_load_policy=1&cc_lang_pref=en&hl=en"/>} />
        <Route path='/screenShots' element={<ScreenShots />} />
      </Routes>
    </Router>
    <p className='footer g-btn bg-gray-200'>Copyright All Reserved {new Date().getFullYear()}</p>
    </>
    
  )
}

export default App
