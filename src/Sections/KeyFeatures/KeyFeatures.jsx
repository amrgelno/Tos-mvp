import "./KeyFeatures.css"
import { TbReportAnalytics } from "react-icons/tb";
import { MdOutlineDesignServices,MdOutlineSecurity } from "react-icons/md";
import { IoMdTime } from "react-icons/io";
import { HiOutlineRocketLaunch } from "react-icons/hi2"
import { useTranslation } from 'react-i18next';
import KeyFeaturesCard from "./KeyFeaturesCard"


export default function KeyFeatures() {
    const {t} = useTranslation()


    const keyFeatures = t("keyFeatures")
    
  return (
    <div className="c keyFeatures_c flex flex-col justify-center gap-5">
        <p className="sectionTitle sectionExampleTitle sm:text-lg md:text-2xl">KEY FEATURES</p>
        <div className="keyFeatures flex flex-col md:flex-row flex-wrap gap-5">            
                <KeyFeaturesCard icon={<TbReportAnalytics />} title="Organized Financial Reports:" desc="Schedule and manage your financial reports regularly and in an orderly way."/>
                <KeyFeaturesCard icon={<MdOutlineDesignServices />} title="Simple and Flexible:" desc="Designed for ease of use with a clean, intuitive interface."/>
                <KeyFeaturesCard icon={<IoMdTime />} title="Real-Time Monitoring:" desc="Track your financial activity anytime, anywhere."/>
                <KeyFeaturesCard icon={<MdOutlineSecurity />} title="Security & Oversight:" desc="Strong protection and monitoring for your financial system."/>
                <KeyFeaturesCard icon={<HiOutlineRocketLaunch />} title="Fast & Accurate:" desc="Delivers high speed and precise performance."/> 
        </div>
    </div>
  )
}
