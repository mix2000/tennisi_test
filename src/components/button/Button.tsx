import React from 'react';
import {Ibutton} from "./Models";

// стандартная кнопка
export const Button: React.FC<Ibutton> =
    ({
         title,
         className,
         href,
         lightColor,
         darkColor,
         brandColor,
         disabled = false
     }):JSX.Element => {

        const buttonClass = ['ts--btn'];

        if (className) {
            buttonClass.push(className);
        }

        if (disabled) {
            buttonClass.push('disabled');
        }

        if (lightColor) {
            buttonClass.push('ts--btn_light')
        } else if (darkColor) {
            buttonClass.push('ts--btn_dark')
        } else if (brandColor) {
            buttonClass.push('ts--btn_brand')
        } else {
            buttonClass.push('ts--btn_darken')
        }

        return (
            <>
                <button className={buttonClass.join(' ')}>
                    <a href={href}>
                        <span>{title}</span>
                    </a>
                </button>
            </>
        )
    }
