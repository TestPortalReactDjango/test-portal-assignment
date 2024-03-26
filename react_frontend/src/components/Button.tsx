import React from 'react';

interface props{
    text: string;
}
const Button: React.FC<props>=(props)=> {
    const {text}=props;
    return (
        <button className="bg-blue-500 text-white rounded py-2 px-4 mb-2">{text}</button>
    )
}

export default Button;