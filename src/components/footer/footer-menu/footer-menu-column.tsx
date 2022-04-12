import React, {useState} from 'react';
import {FooterMenuItem, IFooterMenuItem} from "./footer-menu-item";
import {FooterSocials} from "../footer-socials/footer-socials";
import {ListArrow} from "../../base/list-arrow";

export interface IMenuColumn {
    title: string,
    items: IFooterMenuItem[],
    withSocials?: boolean,
}

export const FooterMenuColumn: React.FC<IMenuColumn> = props => {

    const classes = ['footer-menu__column'];

    const [isOpen, setIsOpen] = useState(true);

    const handlerClick = () => {
        setIsOpen(!isOpen);
    }

    if (isOpen) {
        classes.push('active');
    }

    return (
        <div className={classes.join(' ')}>
            <div onClick={handlerClick} className="footer-menu__title-row">
                <h4 className={'footer-menu__title'}>{props.title}</h4>
                <ListArrow/>
            </div>
            {isOpen &&
            <>
                <ul className={'footer-menu__list'}>
                    {props.items.map((menuItem, index) =>
                        <FooterMenuItem key={index}
                                        href={menuItem.href}
                                        value={menuItem.value}/>
                    )}
                </ul>
                {props.withSocials && <FooterSocials/>}
            </>
            }
        </div>
    );
};