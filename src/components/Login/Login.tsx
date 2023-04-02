import React, { useState, useEffect } from 'react';
import Button from '../Button/Button';
import '../Button/Button.css';
import { getAccessToken, redirectToAuthCodeFlow } from '../../utils/authCodeWithPkce';

type ButtonProps = {
    text: string;
    link: string;
}

const clientId = "be9c648239c9405e8e9c4a025f3438cb";

function LoginButton(props: ButtonProps) {

    function handleClick() {
        redirectToAuthCodeFlow(clientId);
    }

    return (
        <button onClick={handleClick} className="button">{props.text}</button>
    );
}

export default LoginButton;