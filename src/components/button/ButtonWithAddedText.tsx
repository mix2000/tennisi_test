// кнопка с добавочным текстом слева/справа
import React from "react";
import {IButtonWithAddedText} from "./Models";
import {EButtonColor, EButtonTextPosition} from "./Enums";

export const ButtonWithAddedText: React.FC<IButtonWithAddedText> =
    ({
         title,
         href,
         className,
         btnColor,
         textPosition,
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

        if (btnColor === EButtonColor.LIGHT_COLOR) {
            buttonClass.push('ts--btn_light')
        } else if (btnColor === EButtonColor.DARK_COLOR) {
            buttonClass.push('ts--btn_dark')
        } else if (btnColor === EButtonColor.BRAND_COLOR) {
            buttonClass.push('ts--btn_brand')
        } else if (btnColor === EButtonColor.DARKEN_COLOR) {
            buttonClass.push('ts--btn_darken')
        }

        let buttonContent;
        if (textPosition === EButtonTextPosition.RIGHT) {
            buttonClass.push('ts--btn_text-right')

            buttonContent = <>
                <span>{title}</span>
                <span>{textValue}</span>
            </>
        } else if (textPosition === EButtonTextPosition.LEFT) {
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