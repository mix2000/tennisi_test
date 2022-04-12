// кнопка с добавочным текстом слева/справа
import React from "react";
import {IbuttonWithAddedText} from "./Models";

export const ButtonWithAddedText: React.FC<IbuttonWithAddedText> =
    ({
         title,
         href,
         className,
         lightColor,
         darkColor,
         brandColor,
         textRight = true,
         textValue,
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

        let buttonContent;
        if (textRight) {
            buttonClass.push('ts--btn_text-right')

            buttonContent = <>
                <span>{title}</span>
                <span>{textValue}</span>
            </>
        } else {
            buttonClass.push('ts--btn_text-left')

            buttonContent = <>
                <span>{textValue}</span>
                <span>{title}</span>
            </>
        }

        return (
            <>
                <button className={buttonClass.join(' ')}>
                    <a href={href}>
                        {buttonContent}
                    </a>
                </button>
            </>
        )
    }