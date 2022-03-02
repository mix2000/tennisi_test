
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
    id?: string,
    className?: string,
}

export interface ITabsControls extends ITabsGeneral {
    isBordered?: boolean
}

export interface ITabsContent extends ITabsGeneral {
    isActive?: boolean
}

export interface ITabsItems extends ITabsGeneral {
    value: string,
    isActive?: boolean
}