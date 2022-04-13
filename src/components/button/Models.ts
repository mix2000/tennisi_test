/**
 * Интерфейсы Button
 *
 * @param {string} [title] заголовок элемента
 * @param {number} [id] id элемента
 * @param {string} [href] href элемента
 * @param {string} [className] класс элемента
 * @param {boolean} [disabled] активность элемента
 * @param {EButtonColor} btnColor цвет кнопки
 * @param {string} [borderRadius] закругление кнопки
 */
import {EIconName} from "../icons/Enums";
import {EButtonColor, EButtonPosition, EButtonTextPosition} from "./Enums";

export interface IButton {
    title?: string,
    href?: string,
    className?: string,
    disabled?: boolean,
    btnColor: EButtonColor,
    borderRadius?: string
}

/**
 * Интерфейсы Button с текстом
 *
 * @param {EButtonTextPosition} textPosition положение текста в кнопке
 * @param {string} textValue значение доп. текста
 */

export interface IButtonWithAddedText extends IButton {
    textPosition: EButtonTextPosition,
    textValue: string
}

/**
 * Интерфейсы Button с иконкой
 *
 * @param {boolean} [iconPosition] с какой стороны иконка
 * @param {boolean} [isRounded] круглая ли кнопка
 * @param {EIconName} iconType тип иконки
 * @param {number} [iconSize] размер иконки
 * @param {string} [iconFill] цвет иконки
 * @param {string} [iconStrokeWidth] ширина линий иконки
 */

export interface IButtonWithIcon extends IButton {
    iconPosition?: EButtonPosition,
    isRounded?: boolean
    iconType: EIconName,
    iconSize?: number,
    iconFill?: string,
    iconStrokeWidth?: string
}
