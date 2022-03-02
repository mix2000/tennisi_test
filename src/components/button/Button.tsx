import React from 'react';
import {Ibutton, IbuttonWithAddedText, IbuttonWithIcon} from "./Model";

// стандартная кнопка
export const Button: React.FC<Ibutton> =
    ({
         title,
         id,
         className = "ts--btn",
         href,
         lightColor,
         darkColor,
         brandColor,
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
    }else if (brandColor){
        buttonClass += ' ts--btn_brand'
    }else{
        buttonClass += ' ts--btn_darken'
    }

    return (
       <>
           <button id={id} className={buttonClass}>
               <a href={href}>
                   <span>{title}</span>
               </a>
           </button>
       </>
    )
}

// кнопка с добавочным текстом слева/справа
export const ButtonWithAddedText: React.FC<IbuttonWithAddedText> =
    ({
         title,
         id,
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
                <button id={id} className={buttonClass}>
                    <a href={href}>
                        {buttonContent}
                    </a>
                </button>
            </>
        )
}


// кнопка с добавочной иконкой
// export const ButtonWithAddedIcon: React.FC<IbuttonWithIcon> =
//     ({
//          title,
//          id,
//          href,
//          className = "ts--btn",
//          lightColor,
//          darkColor,
//          iconRight,
//          withoutText,
//          disabled= false}) =>
//     {
//
//         let buttonClass = className;
//
//         if (disabled) {
//             buttonClass += ' disabled';
//         }
//
//         if (lightColor) {
//             buttonClass += ' ts--btn_light'
//         }else if (darkColor) {
//             buttonClass += ' ts--btn_dark'
//         }else{
//             buttonClass += ' ts--btn_darken'
//         }
//
//         let buttonContent;
//         if (iconRight) {
//             buttonClass += ' ts--btn_text-right'
//
//             buttonContent = <>
//                 <span>{title}</span>
//                 <span>{textValue}</span>
//             </>
//         }else{
//             buttonClass += ' ts--btn_text-left'
//
//             buttonContent = <>
//                 <span>{textValue}</span>
//                 <span>{title}</span>
//             </>
//         }
//
//         return (
//             <>
//                 <button id={id} className={buttonClass}>
//                     <a href={href}>
//                         {buttonContent}
//                     </a>
//                 </button>
//             </>
//         )
//     }
