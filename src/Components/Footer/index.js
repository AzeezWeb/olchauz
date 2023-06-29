import React from "react";
import './Footer.css';
import { BsTelegram, BsInstagram, BsFacebook } from "react-icons/bs";
import { MdLocationPin, MdOutlineEmail } from 'react-icons/md';
import { Link } from "react-router-dom";



function Footer() {
  return ( 
   <div className="footer-bg">
     <div className="container">
     <div className="footer">
        <div className="footer-title">
          <h2>Bizning mobil ilovamiz AppGallery, App store va Google play-da</h2>
          <div className="footer-icons">
            <div> 
              <img src="https://olcha.uz/_nuxt/appstore.32a5f67a.svg" alt="app-store"/>
            </div>
            <div> 
              <img src="https://olcha.uz/_nuxt/googleplay.4ba35be8.svg" alt="google-play"/>
            </div>
            <div> 
              <img src="https://olcha.uz/_nuxt/app-gallery.879faacf.svg" alt="app-gallery"/>
            </div>
          </div>
        </div>
        <div className="footer-img">
          <img src="https://olcha.uz/_nuxt/footer-img.745872f8.webp" alt="footer"/>
        </div>
        <hr></hr>
      </div>
      <hr></hr>
      <div className="footer-items">
        <div className="footer-des">
          <div className="footer-logo">
            <Link to="/">
              <img src="https://olcha.uz/_nuxt/logo-red.e48e0ab8.svg" alt="logo"/>
            </Link>
          </div>
          <div className="footer-support">
            <p>Qo'llab quvatlash raqami</p>
            <p>+7 (981) 769 7611</p>
          </div>
          <div className="footer-location">
            <MdLocationPin/>
            <p>Qozitarnov, Toshkent</p>
          </div>
          <div className="footer-email">
            <MdOutlineEmail/>
            <p>xasanboyev283@gmail.com</p>
          </div>
        </div>
        <div className="footer-links">
          <h4>Ma'lumot</h4>
          <ul className="footer-list">
            <li className="footer-item">
              Biz haqimizda
            </li>
            <li className="footer-item">
              Bo'sh ish o'rinlar
            </li>
            <li className="footer-item">
              To'lovni qaytarish va to'lovlarni almashtirish
            </li>
            <li className="footer-item">
              Muddatli to'lov shartlari
            </li>
            <li className="footer-item">
              Yordam
            </li>
            <li className="footer-item">
              Yetkazib berish
            </li>
            <li className="footer-item">
              Eco-friendly
            </li>
            <li className="footer-item">
              Bonus va aksiyalar
            </li>
            <li className="footer-item">
              To'lov va yetkazib berish
            </li>
            <li className="footer-item red">
              olcha da soting
            </li>
            <li className="footer-item">
              Servis markazlari
            </li>
          </ul>
        </div>
        <div className="footer-payments">
          <div>
            <img src="https://api.logobank.uz/media/logos_png/Apelsin-01.png" alt="apelsin"/>
          </div>
          <div>
            <img src="https://api.logobank.uz/media/logos_png/Uzcard-01.png" alt="uzcard"/>
          </div>
          <div>
            <img src="https://api.logobank.uz/media/logos_png/Click-01.png" alt="click"/>
          </div>
          <div>
            <img src="https://api.logobank.uz/media/logos_png/payme-01.png" alt="payme"/>
          </div>
          <div>
            <img src="https://api.logobank.uz/media/logos_png/Humo-01.jpg" alt="humo"/>
          </div>
          <div>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-3jwrRNlbprLXlfBe0eW12HwmalkxkNXiS54kEHaJDg&s" alt="paynet"/>
          </div>
          
        </div>
      </div>
      <div className="footer-bottom">
        <p>20017 2023 OOO "Olcha store</p>
        <p>Ommaviy offerta</p>
        <p> Maxfiylik siyosati</p>
        <div className="footer-social-media__icons">
          <BsFacebook/>
          <BsTelegram/>
          <BsInstagram/>
        </div>
      </div>
     </div>
   </div>
   );
}

export default Footer;