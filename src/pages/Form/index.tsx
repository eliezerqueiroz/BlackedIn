import React from 'react';
import Input from '../../components/Input';
import PageHeader from '../../components/PageHeader';
import WarningIcon from '../../assets/images/icons/warning.svg'
import TextArea from '../../components/Textarea';

import '../Form/style.css'
import Select from '../../components/Select';

function Form(){
    return(
        <div id="page-proffy-form" className="container">
        <PageHeader 
        title="Faça parte da maior comunidade de profissionais Afro do Brasil" 
        description="O primeiro passo é fazer o seu cadastro"
        />

        <main>
            <fieldset>
                <legend>Seus dados</legend>


                <Input type="text" label="Nome Completo" name="name"/>
                <Input type="link" label="Foto" name="avatar"/>
                <Select  label="Estado" name="state"/>
                <Select label="Cidade" name="city"/>
                <Input type="text" label="Profissão" name="ocuppation"/>
                <Input type="number" label="WhatsApp" name="whatsapp"/>
                <TextArea label="Biografia" name="bio"/>
                
            </fieldset>

            <fieldset>
                <legend>Formação Acadêmica</legend>

                <Input type="text" label="Instituição de ensino" name="School" />
                <Input type="text" label="Formação" name="formation"/>
                <Input type="text" label="Área de estudo" name="area"/>
                <Input type="date" label="Ano de início" name="initi-year" />
                <Input type="date" label="Ano de término" name="end-year" />

            </fieldset>

            <fieldset>
                <legend>Experiência Profissional</legend>

                <Input type="text" label="Empresa" name="company" />
                <Input type="text" label="Cargo" name="post" />
                <Select label="Tipo de contrato" name="contract" />
                <Input type="date" label="Ano de início" name="initi-year" />
                <Input type="date" label="Ano de término" name="end-year" />

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