import React from 'react';
import {IButton} from "./Models";
import {EButtonColor} from "./Enums";

// стандартная кнопка
export const Button: React.FC<IButton> =
    ({
         title,
         className,
         href,
         btnColor,
         disabled = false
     }):JSX.Element => {

        const buttonClass = ['ts--btn'];

        if (className) {
            buttonClass.push(className);
        }

        if (disabled) {
            buttonClass.push('disabled');
        }

        if (btnColor === EButtonColor.LIGHT_COLOR) {
            buttonClass.push('ts--btn_light')
        } else if (btnColor === EButtonColor.DARK_COLOR) {
            buttonClass.push('ts--btn_dark')
        } else if (btnColor === EButtonColor.BRAND_COLOR) {
            buttonClass.push('ts--btn_brand')
        } else if (btnColor === EButtonColor.DARKEN_COLOR) {
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
