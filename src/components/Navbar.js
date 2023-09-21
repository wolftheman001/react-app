import React from "react"
export default function Navbar() {
    return (
        <nav class="d-flex justify-content-between">
            <img src="images/Airbnb.png" alt="" class="p-3"></img>
            <div class="align-items-center d-flex mb-0 p-3">
                <h5 class="nav-heading mb-0">Rent a place through Airbnb</h5>
                <i class="fa-solid fa-globe"></i>
                <div class="nav-icon">
                    <i class="fa-solid fa-bars m-2"></i>
                    <i class="fa-solid fa-user m-2"></i>
                </div>
            </div>
        </nav>
    )
}