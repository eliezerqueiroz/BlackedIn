import React from 'react';
import PageHeader from '../../components/PageHeader';


import '../ProffyList/style.css'
import ProffyCard from '../../components/ProffyCard';

function ProffyList(){
    return (
        <div id="page-proffy-list" className="container">
           <PageHeader title="Estes são os Proffys disponíveis">

               <form id="search-proffys">
                   <div className="input-block">
                       <label htmlFor="ocuppation">Profissão</label>
                       <input type="text" id="ocuppation"/>
                   </div>

                   <div className="input-block">
                       <label htmlFor="state">Estado</label>
                       <input type="text" id="state"/>
                   </div>

                   <div className="input-block">
                       <label htmlFor="city">Cidade</label>
                       <input type="text" id="city"/>
                   </div>
               </form>

           </PageHeader>

           <main>
                <ProffyCard/>
                <ProffyCard/>
                <ProffyCard/>
           </main>
        </div>
    )
}

export default ProffyList;