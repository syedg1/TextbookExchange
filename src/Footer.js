import React from 'react';
import { IconFlagCA } from 'material-ui-flags';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
    return (
        <footer className='footer'>
            {/* Logo */}
            <div className="footer__logoContainer">
                    <img className='footer__logo' src='https://brand-resources.mcmaster.ca/asset-bank/servlet/file?contentDispositionFilename=ODgwMzA.png-s.png&signature=4f4843462f32504663724e6550414470614e417356656f6a614d4135416b436c44325079494f6f784a7149576959595466546550656d6a4459547a794a61554f4d6b4d4e76754554353042624f71652b5430334d4d7836372f41442b697a756e3570673833344e73416c343d&contentDisposition=inline&lastModified=2018-06-30T04:00:15Z&contentIdentifier=847/gwMzA.png-s.png&contentStoreIdentifier=3'/>
            </div>
            {/* Country */}
            <div className="footer__country">
                <IconFlagCA className='footer__countryFlag'/>
                <p className='footer__countryName'>
                    <small>Canada</small>
                </p>
            </div>
        </footer>
    )
}

export default Footer