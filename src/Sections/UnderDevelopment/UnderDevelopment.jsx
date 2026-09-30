import React from 'react'
import { useTranslation } from 'react-i18next';
import { DCard } from '../../Components';

export default function UnderDevelopment() {
    const {t} = useTranslation()
    const underDevelopmentList = t("underDevelopment")

  return (
    <div className='c underDevelopment_c flex flex-col justify-center gap-5'>
        <p className="sectionTitle sectionExampleTitle">UNDER DEVELOPMENT</p>
        <div className="underDevelopment flex flex-col md:flex-row flex-wrap gap-5">
            {underDevelopmentList.map((item,i)=>{
                return <DCard title={item}/>
            })}
        </div>
    </div>
  )
}
