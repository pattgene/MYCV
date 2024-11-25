import React from 'react'
import '../css/Contact.css'
import { FaAddressCard } from "react-icons/fa6";
import { FcPhoneAndroid } from "react-icons/fc";
import { MdEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

function Contact() {
    return (
        <div className='contact'>
            <h4><span>C</span>ontact</h4>
            <ul>
                <li>
                    <FaAddressCard />
                    <p>Thai Passport, Student VISA</p>
                </li>
                <li>
                    <FcPhoneAndroid />
                    <p>+856 94751602</p>
                </li>
                <li>
                    <MdEmail />
                    <p>patt.genejj@gmail.com</p>
                    <p>pattgene@connect.hku.hk</p>
                </li>
                <li>
                    <FaGithub />
                    <p>pattgene</p>
                </li>
                <li>
                    <FaLinkedin />
                    <p>Patt Phurtivilai</p>
                </li>
            </ul>
        </div>
    )
}

export default Contact()