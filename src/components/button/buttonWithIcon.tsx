// кнопка с добавочной иконкой
import React from "react";
import {IbuttonWithIcon} from "./Models";
import {NewIcon} from "../icons";

export const ButtonWithAddedIcon: React.FC<IbuttonWithIcon> =
    ({
         title,
         href,
         className = "ts--btn",
         lightColor,
         darkColor,
         iconRight,
         iconLeft,
         withoutText,
         rounded,
         iconType,
         iconSize,
         iconFill,
         iconStrokeWidth,
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
        if (iconRight) {
            buttonClass += ' ts--btn_icon-right'

            buttonContent = <>
                <span>{title}</span>
                <NewIcon fill={iconFill} strokeWidth={iconStrokeWidth} height={iconSize} width={iconSize} type={iconType} />
            </>
        }

        if (iconLeft){
            buttonClass += ' ts--btn_icon-left'

            buttonContent = <>
                <NewIcon fill={iconFill} strokeWidth={iconStrokeWidth} height={iconSize} width={iconSize} type={iconType} />
                <span>{title}</span>
            </>
        }

        if (withoutText) {
            buttonContent = <>
                <NewIcon fill={iconFill} strokeWidth={iconStrokeWidth} height={iconSize} width={iconSize} type={iconType} />
            </>
        }

        if (rounded) {
            buttonClass += ' ts--btn_rounded'
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
