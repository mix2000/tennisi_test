// кнопка с добавочной иконкой
import React from "react";
import {IButtonWithIcon} from "./Models";
import {NewIcon} from "../icons";
import {EButtonColor, EButtonPosition} from "./Enums";

export const ButtonWithAddedIcon: React.FC<IButtonWithIcon> =
    ({
         title,
         href,
         className,
         btnColor,
         iconPosition,
         isRounded,
         iconType,
         iconSize,
         iconFill,
         iconStrokeWidth,
         disabled = false
     }): JSX.Element => {

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

        if (isRounded) {
            buttonClass.push('ts--btn_rounded');
        }

        let buttonContent;
        if (iconPosition === EButtonPosition.RIGHT) {
            buttonClass.push('ts--btn_icon-right');

            buttonContent = <>
                <span>{title}</span>
                <NewIcon fill={iconFill} strokeWidth={iconStrokeWidth} height={iconSize} width={iconSize}
                         type={iconType}/>
            </>
        } else if (iconPosition === EButtonPosition.LEFT) {
            buttonClass.push('ts--btn_icon-left');

            buttonContent = <>
                <NewIcon fill={iconFill} strokeWidth={iconStrokeWidth} height={iconSize} width={iconSize}
                         type={iconType}/>
                <span>{title}</span>
            </>
        } else if (iconPosition === EButtonPosition.CENTER) {
            buttonContent =
                <NewIcon fill={iconFill} strokeWidth={iconStrokeWidth} height={iconSize} width={iconSize}
                         type={iconType}/>
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
