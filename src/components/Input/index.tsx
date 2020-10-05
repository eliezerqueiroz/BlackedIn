import React, {InputHTMLAttributes} from 'react'
import './style.css'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    label: string;

    content?:string;
}

const Input: React.FC<InputProps> = ({name, label, content, ...rest}) => {
    return(

        <div className="input-block">
            <label htmlFor={content}>{label}</label>
            <input  id={content} name={name} {...rest} />
        </div>
    )   
}

export default Input