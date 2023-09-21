import React from "react";
export default function Contacts(props) {
    // console.log(img)
    return (
        <div class="contact-card p-3 mt-2">  
            <img src={props.img} alt=""></img>
            <h3 class="mt-4 mb-4"><b>{props.name}</b></h3>
            <div class="info-group d-flex align-items-center">
                <i class="fa-solid fa-phone mr-2"></i>
                <p class="m-0">{props.phone}</p>
            </div>
            <div class="info-group d-flex align-items-center">
                <i class="fa-solid fa-envelope mr-2"></i>
                <p class="m-0">{props.mail}</p>
            </div>
        </div>
    ) 
}