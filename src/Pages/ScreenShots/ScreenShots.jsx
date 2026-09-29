import "./ScreenShots.css"
import img_1 from "../../assets/images/Screenshot/Accounting transactions management.png"
import img_2 from "../../assets/images/Screenshot/Activity_log.png"
import img_3 from "../../assets/images/Screenshot/Bank A_B Management.png"
import img_4 from "../../assets/images/Screenshot/Bank transactions Balances reports.png"
import img_5 from "../../assets/images/Screenshot/Cash A_B Management.png"
import img_6 from "../../assets/images/Screenshot/CRM.png"
import img_7 from "../../assets/images/Screenshot/Login.png"
import img_8 from "../../assets/images/Screenshot/Packages.png"
import img_9 from "../../assets/images/Screenshot/permissions.png"
import img_10 from "../../assets/images/Screenshot/Summary.png"
import img_11 from "../../assets/images/Screenshot/User&info.png"

export default function ScreenShots() {
  const images = [img_1,img_2,img_3,img_4,img_5,img_6,img_7,img_8,img_9,img_10,img_11]
  return (
    <div className='c screenShots_c grid items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
      {
        images.map((item,i)=>{
          return   <div className="img_c"><img key={i} src={item} alt="" /></div>
        })
      }
    </div>
  )
}
