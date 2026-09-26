import { useState } from "react";
import "./PageExample.css"
import { SectionExample } from "../../Components";

export default function PageExample(props) {
    
  return (
    
    <div id={props.tag} className="c section_c pageExample flex flex-col justify-center gap-5 text-right">
            <div className="sectionVideo_c w-full flex justify-center">
                {props.iframeLink
                ?
                <iframe
                  src={props.iframeLink}
                  width="900"
                  height="500"
                  title="Example Embed"
                  allow="accelerometer; encrypted-media; gyroscope"
                  referrerPolicy="strict-origin-when-cross-origin"
                />
                :
                ""}
            </div>
            <p className="PageTitle text-3xl w-full text-center font-bold">{props.pageTitle}</p>
            {props.pageCardListItem.map((page, pageIndex) => (
                <div className="pageCards_c grid sm:grid-cols-1 md:grid-cols-5 gap-5 " key={pageIndex}>
                    {
                        page.map((item, itemIndex) => (
                            <div className="pageCard g-btn flex flex-col gap-5" key={itemIndex}>
                                <p className="pageCardTitle font-bold">{item[0]}</p>
                                <ul className="pageCardList flex flex-col gap-5">
                                    {item[1].map((info, infoIndex) => (
                                        <li className="pageCardListItem text-sm" key={infoIndex}>{info}</li>
                                    ))}
                                </ul>
                            </div>
                        ))
                    }
                </div>
            ))}
            {props.addSection
            ?
            <SectionExample 
            tag="umreSystem"
            title="UMRE SYSTEM"
            LargeCardTitle = "إدارة أﺳﻌﺎر" 
            LargeCardText = "يسمح اﻟﻧظﺎم ﺑﺈدارة ﻋروض وأﺳﻌﺎر العمرة و الحج ﺑﺷﻛل ﻣرن وﻣﺣدث دائما، ﻣﻊ إمكانية رﺑط اﻷﺳﻌﺎر بالرحلات أو المواسم المختلفة."
            LargeCardBtn="Read More"
            LargeCardLink="/umreSystem"
            />
            :""
            }
    </div>
  )
}
