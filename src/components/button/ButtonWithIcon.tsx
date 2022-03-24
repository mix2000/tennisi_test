// кнопка с добавочной иконкой
import React from "react";
import {IbuttonWithIcon} from "./Models";
import {NewIcon} from "../icons";

export const ButtonWithAddedIcon: React.FC<IbuttonWithIcon> =
    ({
         title,
         href,
         className,
         lightColor,
         darkColor,
         iconRight,
         iconLeft,
         withoutText,
         rounded,
         brandColor,
         iconType,
         iconSize,
         iconFill,
         iconStrokeWidth,
         disabled= false}) =>
    {

        const buttonClass = ['ts-btn'];

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
        if (iconRight) {
            buttonClass.push('ts--btn_icon-right');

            buttonContent = <>
                <span>{title}</span>
                <NewIcon fill={iconFill} strokeWidth={iconStrokeWidth} height={iconSize} width={iconSize} type={iconType} />
            </>
        }

        if (iconLeft){
            buttonClass.push('ts--btn_icon-left');

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
            buttonClass.push('ts--btn_rounded');
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
