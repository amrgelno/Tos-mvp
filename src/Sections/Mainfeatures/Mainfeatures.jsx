import "./Mainfeatures.css"
import { DCard } from "../../Components";
import { DiPhp,DiMysql } from "react-icons/di";
import { FaVuejs,FaLaravel  } from "react-icons/fa";

export default function Mainfeatures() {
  return (
    <div class="c mainContainer mainFeaturesContainer_c flex flex-col justify-center gap-5">
        <p class="sectionTitle sectionExampleTitle sm:text-xl lg:text-2xl">TECHNOS</p>
        <div class="features_c flex flex-wrap justify-center items-center gap-4">
            <DCard icon={<DiPhp />} title="Native php"/>
            <DCard icon={<DiMysql />} title="MySQL"/>
            <DCard icon={<FaLaravel />} title="Laravel"/>
            <DCard icon={<FaVuejs />} title="Vuejs"/>
        </div>
    </div>
  )
}
