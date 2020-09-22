import React from 'react';
import {Link} from 'react-router-dom';
import logoImg from '../../assets/images/logo.svg';
import landingImg from '../../assets/images/landing.svg';
import studyIcon from '../../assets/images/icons/study.svg';
import teachIcon from '../../assets/images/icons/give-classes.svg';
import purpleHeart from '../../assets/images/icons/purple-heart.svg';

import '../Landing/style.css';

function Landing() {
    return (
    <div id="page-landing">

        <div id="page-landing-content" className="container">
            
            <div className="logo-container">
                <img src={logoImg} alt="Proffy"/>
                <h2>Encontre Proffysionais que se identificam com você.</h2>
            </div>

            <img src={landingImg} alt="Landing img" className="hero-image"/>

            <div className="buttons-container">
                <Link to="/buscar" className="buscar">
                    <img src={studyIcon} alt="buscar"/>
                    Buscar
                </Link>


                <Link to="/cadastrar" className="casdastrar">
                    <img src={teachIcon} alt="cadastrar"/>
                    Cadastra-se
                </Link>
            </div>

            <span className="total-connections">
                Total de 200 conexões já realizadas 
                <img src={purpleHeart} alt="coração roxo"/>
            </span>

        </div>
    </div>
    )
}

export default Landing;