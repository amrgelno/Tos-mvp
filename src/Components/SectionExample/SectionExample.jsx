import "./SectionExample.css"

export default function SectionExample(props) {
  return (
    <div className="c section_c sectionExample flex flex-col justify-center gap-5 text-right">
        <p className="sectionTitle sectionExampleTitle">
            {props.title}
        </p>
        <div className="sectionLargeCard">
            <div className="sectionLargeCardVideo_c"></div>
            <div className="sectionLargeCardContent_c flex flex-col gap-4 w-1/2">
                <p className="sectionLargeCardTitle text-2xl font-medium">{props.LargeCardTitle}</p>
                <p className="sectionLargeCardText text-lg">{props.LargeCardText}</p>
            </div>
        </div>
        <div className="sectionCards_c">
            <div className="sectionCard">
                <p className="sectionCardTitle">{props.sectionCardTitle}</p>
                <div className="sectionCardList">
                    <p className="sectionCardListItem">
                        
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}
