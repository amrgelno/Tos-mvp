import "./KeyFeatures.css"
import { TbReportAnalytics } from "react-icons/tb";
import { MdOutlineDesignServices,MdOutlineSecurity,MdOutlineIntegrationInstructions} from "react-icons/md";
import { IoMdTime } from "react-icons/io";
import { HiOutlineLightBulb } from "react-icons/hi";
import { HiOutlineRocketLaunch } from "react-icons/hi2"
import { useTranslation } from 'react-i18next';
import { DCard } from "../../Components";


export default function KeyFeatures() {
    const {t} = useTranslation()

    const keyFeatures = t("keyFeatures")
    
  return (
    <div className="c keyFeatures_c flex flex-col justify-center gap-5">
        <p className="sectionTitle sectionExampleTitle">KEY FEATURES</p>
        <div className="keyFeatures flex flex-col md:flex-row flex-wrap gap-5">            
                {keyFeatures.map((item,i)=>{
                    switch (i) {
                      case 0:
                        return <DCard icon={<TbReportAnalytics />} key={i} title={item[1]} desc={item[2]}/>   
                        break;
                      case 1:
                        return <DCard icon={<MdOutlineDesignServices />} key={i} title={item[1]} desc={item[2]}/>   
                        break;
                      case 2:
                        return <DCard icon={<IoMdTime />} key={i} title={item[1]} desc={item[2]}/>   
                        break;
                      case 3:
                        return <DCard icon={<MdOutlineSecurity />} key={i} title={item[1]} desc={item[2]}/>   
                        break;
                      case 4:
                        return <DCard icon={<HiOutlineRocketLaunch />} key={i} title={item[1]} desc={item[2]}/>   
                        break;
                      case 5:
                        return <DCard icon={<HiOutlineLightBulb />} key={i} title={item[1]} desc={item[2]}/>   
                        break;
                      case 6:
                        return <DCard icon={<MdOutlineIntegrationInstructions />} key={i} title={item[1]} desc={item[2]}/>   
                        break;
                      default:
                        return ""
                        break;
                    }
                })}
        </div>
    </div>
  )
}
