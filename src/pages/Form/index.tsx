import React, { useState } from 'react';
import Input from '../../components/Input';
import PageHeader from '../../components/PageHeader';
import WarningIcon from '../../assets/images/icons/warning.svg'
import TextArea from '../../components/Textarea';

import '../Form/style.css'
import Select from '../../components/Select';

function Form(){

    const [habilityBlocks, setHabilityBlocks] = useState([
        {value: '', level: ''}
    ])
    
    function addHabilityBlock(){
    setHabilityBlocks([
        ...habilityBlocks,
        {value: '', level: ''}
    ])
    }

    
    const [formationBlocks, setFormationBlocks] = useState([
        {school: '', formation: '', area:'', initYear:'', endYear:''}
    ])

    function addFormationBlock(){
    setFormationBlocks([
        ...formationBlocks,
        {school: '', formation: '', area:'', initYear:'', endYear:''}
    ])
    }
    
    const [experienceBlocks, setExperienceBlocks] = useState( [
        {id: '', company: '', post: '', contract:'', initYear:'', endYear:''},
    ])

    

    function addExperienceBlock(){
    
        setExperienceBlocks([
            ...experienceBlocks,
            {id: '', company: '', post: '', contract:'', initYear:'', endYear:''}
        ])
    }


    return(
        <div id="page-proffy-form" className="container">
        <PageHeader 
        title="Faça parte da maior comunidade de profissionais Afro do Brasil" 
        description="O primeiro passo é fazer o seu cadastro"
        />

        <main>
            <fieldset>
                <legend>Seus dados</legend>


                <Input label="Nome Completo" name="name"/>
                {/* criar upload de arquivo para avatar */}
                <Input type="link"  label="Foto" name="avatar" disabled/> 
                <Input  label="Estado" name="state"/>
                <Input label="Cidade" name="city"/>
                <Select  label="Categoria" name="category" options={
                            [
                                {value: 'professional', label: 'Profissional'},
                                {value: 'entrepreneur', label: 'Empresa'},
                            ]
                        }/>
                <Input type="number" label="WhatsApp" name="whatsapp"/>
                <Select  label="Você se declara" name="etinia" options={
                            [
                                {value: 'black', label: 'Preto'},
                                {value: 'pardo', label: 'Pardo'},
                                {value: 'indigena', label: 'Indigena'}
                            ]
                        }/>
                <TextArea label="Biografia" name="bio"/>
                
            </fieldset>

            <fieldset >
                <legend>
                    Habilidades 

                    <button onClick={addHabilityBlock} type="button" > 
                        + Adicionar habilidade 
                    </button>
                </legend>

               {habilityBlocks.map(habilityBlock => {
                   return(
                       
                    <div key={habilityBlock.value} className="hability-block">
                    
                    <div className="input-hability">

                    <Input type="text" label="Habilidade" name="habilityName" content={habilityBlock.value}  />
                    
                    </div>

                    <div className="select-level">

                        <Select  label="Nível" name="level" options={
                            [
                                {value: 'low', label: 'Básico'},
                                {value: 'medium', label: 'Intermediário'},
                                {value: 'high', label: 'Avançado'}
                            ]
                        }/>

                    </div>
                    

                </div>
                   )
               }) }
               

            </fieldset>

            <fieldset>
                <legend>
                    Formação Acadêmica

                    <button onClick={addFormationBlock} type="button"> 
                        + Adicionar formação 
                    </button>
                </legend>
                
                {formationBlocks.map(formationBlock => {
                    return(
                        
                <div key={formationBlock.formation} className="formation-block">

                <Input type="text"  label="Instituição de ensino" name="school" />
                <Input type="text"  label="Formação" name="formation" content={formationBlock.formation}/>
                <Input type="text"  label="Área de estudo" name="area"/>
                <Input type="date"  label="Ano de início" name="initiYear" />
                <Input type="date"  label="Ano de término" name="endYear" />

                </div>
                    )
                })}
               

            </fieldset>

            <fieldset>
                <legend>
                    Experiência Profissional

                    <button onClick={addExperienceBlock} type="button"> 
                        + Adicionar experiência 
                    </button>
                </legend>

               {experienceBlocks.map(experienceBlock => {
                   return(
                    <div key={experienceBlock.id} className="experience-block">
                    
                    <Input type="number" label="" name="companyId" hidden content={experienceBlock.id} />
                    <Input type="text"  label="Empresa" name="company" />
                    <Input type="text"  label="Cargo" name="post" />
                    <Select label="Tipo de contrato" name="contract" options={
                        [
                            {value: 'clt', label: 'CLT'},
                            {value: 'temporário', label: 'Temporário'},
                            {value: 'pj', label: 'PJ'},
                            {value: 'informal', label: 'Informal'},
                            {value: 'voluntario', label: 'Voluntário'}
                        ]
                    } />
                    <Input type="date"  label="Data de início" name="initiYear" />
                    <Input type="date"  label="Data de término" name="endYear" />
                    
                </div>
                   )
               })}
               

            </fieldset>

            <footer>
                
                <p> 
                <img src={WarningIcon} alt="Importante"/>
                Importante<br/> preencha todos os dados</p>       
                <button type="button">Salvar casdastro</button>     
            </footer>

        </main>

       

        </div>
    )
}

export default Form;