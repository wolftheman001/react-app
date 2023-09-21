import React from "react";
import Contacts from "./props/contacts";
export default function AppProps() {
    return(
        <div class="contacts d-flex justify-content-between">
            <Contacts 
                img="images/mem.jpg"
                name="MemCho"
                phone="(212) 555-1234"
                mail="membkomachi@gmail.com"
            />
            <Contacts 
                img="images/Makima.jpg"
                name="Makima"
                phone="(84) 562-6778"
                mail="makimademon@gmail.com"
            />
            <Contacts 
                img="images/Shinobu.jpg"
                name="Kochou Shinobu"
                phone="(153) 456-2346"
                mail="demonslayer@gmail.com"
            />
            <Contacts
                img="images/ecchi.jpg"
                name="Ecchi"
                phone="(45) 799-8646"
                mail="notsure@gmail.com"
            />
        </div>
    )
}