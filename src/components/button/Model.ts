/**
 * Интерфейсы Button
 *
 * @param {string} title заголовок элемента
 * @param {number} id id элемента
 * @param {string} href href элемента
 * @param {string} className класс элемента
 * @param {string} textValue значение доп. текста
 * @param {boolean} disabled активность элемента
 * @param {boolean} lightColor светлая ли кнопка
 * @param {boolean} darkColor тёмная ли кнопка
 * @param {boolean} brandColor красная ли кнопка
 * @param {boolean} textRight справа ли текст
 * @param {string} borderRadius закругление кнопки
 */

export interface Ibutton {
    title?: string,
    id?: string,
    href?: string,
    className?: string,
    disabled?: boolean,
    lightColor?: boolean,
    darkColor?: boolean,
    brandColor?: boolean,
    borderRadius?: string
}

export interface IbuttonWithAddedText extends Ibutton {
    textRight?: boolean,
    textValue: string
}

export interface IbuttonWithIcon extends Ibutton {
    iconRight?: boolean,
    withoutText?: boolean,
}
