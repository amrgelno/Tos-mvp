import React from 'react'

export default function KeyFeaturesCard(props) {
  return (
    <div className="DCard cardEffect">
            {props.icon}
            <p className="DCardTitle">{props.title}</p>
            <p className="DCardDesc">{props.desc}</p>
            {/* <p className="DCardDesc" style={props.desc?{display:"block"}:{display:"none"}}>"Schedule and manage your financial reports regularly and in an orderly way."</p> */}
    </div>
  )
}
