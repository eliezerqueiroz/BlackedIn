import React from 'react';
import PageHeader from '../../components/PageHeader';


import '../ProffyList/style.css'
import ProffyCard from '../../components/ProffyCard';
import Input from '../../components/Input';
// import Select from '../../components/Select';



function ProffyList(){
    return (
        <div id="page-proffy-list" className="container">
           <PageHeader title="Encontre os talentos que precisa" >
                
               <form id="search-proffys">

                   <Input label="Profissão" name="ocuppation"/>
                   <Input  label="Estado" name="state"/>
                   <Input  label="Cidade" name="city"/>
                   
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