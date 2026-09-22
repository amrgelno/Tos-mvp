import { useState } from "react";
import "./SectionExample.css"

export default function SectionExample(props) {
  return (
    <div id={props.tag} className="c section_c sectionExample flex flex-col justify-center gap-5 text-right">
        <p className="sectionTitle sectionExampleTitle">
            {props.title}
        </p>
        <div className="sectionLargeCard flex sm:flex-col md:flex-row">
            <div className="sectionLargeCardVideo_c"></div>
            <div className="sectionLargeCardContent_c flex flex-col gap-4 sm:w-full md:w-1/2">
                <p className="sectionLargeCardTitle text-2xl font-medium">{props.LargeCardTitle}</p>
                <p className="sectionLargeCardText text-lg">{props.LargeCardText}</p>
            </div>
        </div>

            {props.sectionCardListItem.map((section, sectionIndex) => (
                <div className="sectionCards_c grid sm:grid-cols-1 md:grid-cols-5 gap-5 " key={sectionIndex}>
                    {
                        section.map((item, itemIndex) => (
                            <div className="sectionCard flex flex-col gap-5" key={itemIndex}>
                                <p className="sectionCardTitle font-bold">{item[0]}</p>
                                <ul className="sectionCardList flex flex-col gap-5">
                                    {item[1].map((info, infoIndex) => (
                                        <li className="sectionCardListItem text-sm" key={infoIndex}>{info}</li>
                                    ))}
                                </ul>
                            </div>
                        ))
                    }
                </div>
            ))}
    </div>
  )
}
