import React from 'react';
import {Ibutton} from "./Models";

// стандартная кнопка
export const Button: React.FC<Ibutton> =
    ({
         title,
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
           <button className={buttonClass}>
               <a href={href}>
                   <span>{title}</span>
               </a>
           </button>
       </>
    )
}
