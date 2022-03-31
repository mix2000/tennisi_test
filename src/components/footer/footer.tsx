import React from 'react';
import FooterMenu from "./footer-menu/footer-menu";
import FooterPartners from "./footer-partners/footer-partners";
import FooterPayments from "./footer-payments/footer-payments";
import FooterCopyright from "./footer-copyright";

const Footer = () => {
    return (
        <div className={'footer'}>
            <FooterMenu/>

            <FooterPartners/>

            <FooterPayments/>

            <FooterCopyright/>
        </div>
    );
};

export default Footer;