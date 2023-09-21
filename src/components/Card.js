import React from "react";
export default function Card(props) {
    let badgeText
    if(props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
        badgeText = "ONLINE"
    }
    return (
        <div class="container p-0">
            <div class="card border-0 mr-4">
                <img src={props.coverImg} alt="" class="card-img"></img>
                {/* {console.log(props)} */}
                {/* {props.open === 0 && <div class="card-sold">SOLD OUT</div>} */}
                {badgeText && <div class="card-sold">{badgeText}</div>}
                <div class="card-body pt-2">
                    <i class="fa-solid fa-star mr-1"></i>
                    <span>{props.stats.rating}</span>
                    <span class="gray">({props.stats.reviewCount}) - </span>
                    <span class="gray">{props.location}</span>
                    <p class="m-0">{props.title}</p>
                    <p class="m-0"><b>From ${props.price}</b> / Person</p>
                </div>
            </div>
        </div>
    )
}