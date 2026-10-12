import "./Mainfeatures.css"
import { DCard } from "../../Components";
import { DiMysql,DiJavascript1 } from "react-icons/di";
import { FaLaravel  } from "react-icons/fa";

export default function Mainfeatures() {
  return (
    <div className="c mainContainer mainFeaturesContainer_c flex flex-col justify-center gap-5">
        <p className="sectionTitle sectionExampleTitle">TECHNOS</p>
        <div className="features_c flex flex-wrap justify-center items-center gap-4">
            <DCard icon={<DiMysql />} title="MySQL"/>
            <DCard icon={<FaLaravel />} title="Laravel"/>
            <DCard icon={<DiJavascript1 />} title="Javascript"/>
        </div>
    </div>
  )
}
