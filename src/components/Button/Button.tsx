import react from 'react';
import './Button.css';

type ButtonProps = {
    text: string;
    link: string;
}

function Button(props: ButtonProps) {

    return (
        <a className='button'
            href={props.link}
        >
        <p>{props.text}</p>
        </a>
    );
}

export default Button;