import "./Home.css"
import {Hero, KeyFeatures} from "../../Sections/index"
import { SectionExample } from "../../Components"
import thumb_1 from "../../assets/images/video_thumb_1.jpeg"
import thumb_2 from "../../assets/images/video_thumb_2.jpeg"
import { useTranslation } from 'react-i18next';

export default function Home() {

  const {t} = useTranslation()

  const homeSection_1  = t("homeSection_1")
  const homeSection_2  = t("homeSection_2")
  return (
    <>
        <Hero/>
        <KeyFeatures />
        <SectionExample 
            tag={homeSection_1[0]}
            title={homeSection_1[1]}
            LargeCardTitle = {homeSection_1[2]}
            LargeCardText = {homeSection_1[3]}
            LargeCardBtn= {homeSection_1[4]}
            LargeCardLink={homeSection_1[5]}
            thumb={thumb_1}
        />  
        <SectionExample 
            tag={homeSection_2[0]}
            title={homeSection_2[1]}
            LargeCardTitle = {homeSection_2[2]}
            LargeCardText = {homeSection_2[3]}
            LargeCardBtn={homeSection_2[4]}
            LargeCardLink={homeSection_2[5]}
            thumb={thumb_2}
        />    
    </>
  )
}
