import React from 'react';
import {FooterMenu} from "./footer-menu/footer-menu";
import {FooterPartners} from "./footer-partners/footer-partners";
import {FooterPayments} from "./footer-payments/footer-payments";
import {FooterCopyright} from "./footer-copyright";

export const Footer = ():JSX.Element => {
    return (
        <div className={'footer'}>
            <FooterMenu/>

            <FooterPartners/>

            <FooterPayments/>

            <FooterCopyright/>
        </div>
    );
};