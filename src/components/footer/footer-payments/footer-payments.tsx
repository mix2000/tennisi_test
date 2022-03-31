import React from 'react';
import { ReactComponent as GooglePaySVG } from '../../../assets/imgs/footer-payments/googlepay.svg';
import { ReactComponent as MastercardSVG } from '../../../assets/imgs/footer-payments/mastercard.svg';
import { ReactComponent as YooMoneySVG } from '../../../assets/imgs/footer-payments/yoomoney.svg';
import { ReactComponent as ApplePaySVG } from '../../../assets/imgs/footer-payments/apple-pay.svg';
import { ReactComponent as CupisSVG } from '../../../assets/imgs/footer-payments/cupis.svg';
import { ReactComponent as WebMoneySVG } from '../../../assets/imgs/footer-payments/webmoney.svg';
import { ReactComponent as QiwiSVG } from '../../../assets/imgs/footer-payments/qiwi.svg';
import { ReactComponent as AlfaBankSVG } from '../../../assets/imgs/footer-payments/alfa-bank.svg';

const FooterPayments = () => {
    return (
        <div className={'footer-payments'}>
            <h4>Способы оплаты</h4>
            <div className="footer-payments__row">
                <GooglePaySVG/>
                <MastercardSVG/>
                <YooMoneySVG/>
                <ApplePaySVG/>
                <CupisSVG/>
                <WebMoneySVG/>
                <QiwiSVG/>
                <AlfaBankSVG/>
            </div>
        </div>
    );
};

export default FooterPayments;