import React from "react";
import "./Header.css";
import girlPhoto from "../../assets/girlPhoto.jpg"



const Header = () => (
    <header>
        <h2 className="name">Вероника Ростова</h2>
        <h3 className="jobPosition">Менеджер по продажам</h3>
        <p className="headerStatus">Подберу для вас самые лучшие предложения. Мои услуги абсолютно бесплатны</p>
        <div className="imgWrapper"><img className="girlPhoto" src={girlPhoto} alt="girlPhoto"/></div>
    </header>
)
export default Header;
