import React from 'react';
import {NewIcon} from "../../icons";
import {EIconName} from "../../icons/Enums";

export const FooterSocials = ():JSX.Element => {
    return (
        <div className={'footer-socials'}>
            <div className="footer-socials__item">
                <a href="">
                    <NewIcon fill={'#9F9FB0'} type={EIconName.VK}/>
                </a>
            </div>
            <div className="footer-socials__item">
                <a href="">
                    <NewIcon fill={'#9F9FB0'} type={EIconName.FACEBOOK}/>
                </a>
            </div>
            <div className="footer-socials__item">
                <a href="">
                    <NewIcon fill={'#9F9FB0'} type={EIconName.TELEGRAM}/>
                </a>
            </div>
            <div className="footer-socials__item">
                <a href="">
                    <NewIcon fill={'#9F9FB0'} type={EIconName.TWITTER}/>
                </a>
            </div>
            <div className="footer-socials__item">
                <a href="">
                    <NewIcon fill={'#9F9FB0'} type={EIconName.INSTAGRAM}/>
                </a>
            </div>
            <div className="footer-socials__item">
                <a href="">
                    <NewIcon fill={'#9F9FB0'} type={EIconName.YOUTUBE}/>
                </a>
            </div>
        </div>
    );
};
