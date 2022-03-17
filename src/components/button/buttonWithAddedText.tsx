// кнопка с добавочным текстом слева/справа
import React from "react";
import {IbuttonWithAddedText} from "./Models";

export const ButtonWithAddedText: React.FC<IbuttonWithAddedText> =
    ({
         title,
         href,
         className = "ts--btn",
         lightColor,
         darkColor,
         textRight=true,
         textValue,
         disabled= false}) =>
    {

        let buttonClass = className;

        if (disabled) {
            buttonClass += ' disabled';
        }

        if (lightColor) {
            buttonClass += ' ts--btn_light'
        }else if (darkColor) {
            buttonClass += ' ts--btn_dark'
        }else{
            buttonClass += ' ts--btn_darken'
        }

        let buttonContent;
        if (textRight) {
            buttonClass += ' ts--btn_text-right'

            buttonContent = <>
                <span>{title}</span>
                <span>{textValue}</span>
            </>
        }else{
            buttonClass += ' ts--btn_text-left'

            buttonContent = <>
                <span>{textValue}</span>
                <span>{title}</span>
            </>
        }

        return (
            <>
                <button className={buttonClass}>
                    <a href={href}>
                        {buttonContent}
                    </a>
                </button>
            </>
        )
    }