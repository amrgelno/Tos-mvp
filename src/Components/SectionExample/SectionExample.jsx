import { useState } from "react";
import "./SectionExample.css"

export default function SectionExample(props) {
  return (
    <div id={props.tag} className="c section_c sectionExample flex flex-col justify-center gap-5 text-right">
        <p className="sectionTitle sectionExampleTitle">
            {props.title}
        </p>
        <div className="sectionLargeCard g-btn flex flex-col md:flex-row-reverse items-center gap-8">
            {props.thumb
            ?
            <div className="sectionLargeCardVideo_c sm:w-full md:w-1/2">
                <img src={props.thumb} alt="" loading="lazy"/>
            </div>
            :
            ""
            }
            <div className={
                props.thumb ? "sectionLargeCardContent_c flex items-center md:items-end flex-col gap-4 sm:w-full md:w-1/2" 
                            :"sectionLargeCardContent_c flex items-center flex-col gap-4 sm:w-full md:w-full"
                }>
                <p className="sectionLargeCardTitle text-center md:text-right text-2xl font-medium">{props.LargeCardTitle}</p>
                <p className="sectionLargeCardText text-center md:text-right text-lg">{props.LargeCardText}</p>
                {
                    props.LargeCardBtn?<a className="sectionBtn g-btn w-fit" href={props.LargeCardLink}>{props.LargeCardBtn}</a>:""
                }
            </div>
        </div>
    </div>
  )
}
