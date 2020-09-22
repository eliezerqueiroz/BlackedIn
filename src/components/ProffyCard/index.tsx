import React from 'react'
import whatsButton from '../../assets/images/icons/whatsapp.svg'
import '../ProffyCard/style.css'

function ProffyCard(){
    return(

        <article className="proffy-card">

        <header>
            <img src="https://avatars0.githubusercontent.com/u/60445437?s=460&u=8b553247fcc8a250e2a4e5ca4953404327a9495c&v=4" alt="Eliezer Queiroz"/>

            <div>
                <strong>Eliezer Queiroz</strong>
                <span>Desenvolvedor JavaScript</span>
            </div>
        </header>

         <p>
         Sou Bacharel em Ciência e Tecnologia pela UFBA, desenvolvedor web, professor de tecnologias, especialista em Arduino e educação maker
         </p>

         <footer>
             <p>
                 Experiência
                 <strong> 5 anos</strong>
             </p>

             <button type="button" >
                 <img src={whatsButton} alt="contato"/>
                 Entrar em contato
             </button>
         </footer>

    </article>
    )
}

export default ProffyCard;