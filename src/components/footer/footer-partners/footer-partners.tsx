import React from 'react';

export const FooterPartners = () => {
    return (
        <div className={'footer-partners'}>
            <h4>Наши партнёры</h4>
            <div className="footer-partners__row">
                <img src={require("../../../assets/imgs/footer-partners/default/spartak.png")} alt="ФК Спартак"/>
                <img src={require("../../../assets/imgs/footer-partners/default/alania.png")} alt="ФК Алания"/>
                <img src={require("../../../assets/imgs/footer-partners/default/souz.png")} alt="Российский футбольный союз"/>
                <img src={require("../../../assets/imgs/footer-partners/default/handball.png")} alt="Федерация Гандбола России"/>
                <img src={require("../../../assets/imgs/footer-partners/default/vfv.png")} alt="Всероссийская федерация волейбола"/>
                <img src={require("../../../assets/imgs/footer-partners/default/mma.png")} alt="Союз ММА России"/>
                <img src={require("../../../assets/imgs/footer-partners/default/polo.png")} alt="Федерация Водного Поло России"/>
                <img src={require("../../../assets/imgs/footer-partners/default/vtb.png")} alt="Единая Лига ВТБ"/>
            </div>
        </div>
    );
};