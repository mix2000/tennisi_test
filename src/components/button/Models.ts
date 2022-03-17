/**
 * Интерфейсы Button
 *
 * @param {string} [title] заголовок элемента
 * @param {number} [id] id элемента
 * @param {string} [href] href элемента
 * @param {string} [className] класс элемента
 * @param {boolean} [disabled] активность элемента
 * @param {boolean} [lightColor] светлая ли кнопка
 * @param {boolean} [darkColor] тёмная ли кнопка
 * @param {boolean} [brandColor] красная ли кнопка
 * @param {string} [borderRadius] закругление кнопки
 */
import {EIconName} from "../icons/Enums";

export interface Ibutton {
    title?: string,
    href?: string,
    className?: string,
    disabled?: boolean,
    lightColor?: boolean,
    darkColor?: boolean,
    brandColor?: boolean,
    borderRadius?: string
}

/**
 * Интерфейсы Button с текстом
 *
 * @param {boolean} [textRight] справа ли текст
 * @param {string} textValue значение доп. текста
 */

export interface IbuttonWithAddedText extends Ibutton {
    textRight?: boolean,
    textValue: string
}

/**
 * Интерфейсы Button с иконкой
 *
 * @param {boolean} [iconRight] справа ли иконка
 * @param {string} [withoutText] есть ли текст
 */

export interface IbuttonWithIcon extends Ibutton {
    iconRight?: boolean,
    iconLeft?: boolean,
    withoutText?: boolean,
    rounded?: boolean
    iconType: EIconName,
    iconSize?: number,
    iconFill?: string,
    iconStrokeWidth?: string
}
