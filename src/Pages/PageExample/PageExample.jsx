import { useState } from "react";
import "./PageExample.css"
import { SectionExample } from "../../Components";
import { useTranslation } from 'react-i18next';

export default function PageExample(props) {
    const {t} = useTranslation()
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
                  allowFullScreen
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
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
                                <img src={props.imgPath+item[1]} alt="" />
                                <p className="pageCardTitle font-bold">{item[0]}</p>
                                <ul className="pageCardList flex flex-col gap-5">
                                    {item[2].map((info, infoIndex) => (
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
            tag={t("umreSection_1")[0]}
            title={t("umreSection_1")[1]}
            LargeCardTitle = {t("umreSection_1")[2]}
            LargeCardText = {t("umreSection_1")[3]}
            LargeCardLink={t("umreSection_1")[4]}
            />
            :""
            }
    </div>
  )
}
