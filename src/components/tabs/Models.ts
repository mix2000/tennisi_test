/**
 * интерфейс табов
 *
 * @param {string} value значение элемента
 * @param {string} id id элемента
 * @param {string} className класс элемента
 * @param {boolean} isActive активность элемента
 * @param {boolean} isBordered присутствие border у TabsControls
 */

export interface ITabsGeneral {
    className?: string,
}

export interface ITabsControls extends ITabsGeneral {
    isBordered?: boolean
}

export interface ITabsContent extends ITabsGeneral {
    id: number,
    isActive?: boolean
}

export interface ITabsItem extends ITabsGeneral {
    id: number,
    value: string,
    isActive?: boolean,
    onToggle: (id: number) => void,
}