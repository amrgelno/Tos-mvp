import "./Mainfeatures.css"
import { DCard } from "../../Components";
import { DiMysql,DiJavascript1 } from "react-icons/di";
import { FaLaravel  } from "react-icons/fa";

export default function Mainfeatures() {
  return (
    <div class="c mainContainer mainFeaturesContainer_c flex flex-col justify-center gap-5">
        <p class="sectionTitle sectionExampleTitle">TECHNOS</p>
        <div class="features_c flex flex-wrap justify-center items-center gap-4">
            <DCard icon={<DiMysql />} title="MySQL"/>
            <DCard icon={<FaLaravel />} title="Laravel"/>
            <DCard icon={<DiJavascript1 />} title="Javascript"/>
        </div>
    </div>
  )
}
