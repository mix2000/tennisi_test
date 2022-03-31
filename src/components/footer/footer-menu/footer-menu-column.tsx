import React from 'react';
import FooterMenuItem, {IFooterMenuItem} from "./footer-menu-item";
import FooterSocials from "./footer-socials";

export interface IMenuColumn {
    title: string,
    items: IFooterMenuItem[],
    withSocials?: boolean,
}

const FooterMenuColumn: React.FC<IMenuColumn> = props => {

    if (props.withSocials) {
        return (
            <div className={'footer-menu__column'}>
                <h4 className={'footer-menu__title'}>{props.title}</h4>
                <ul className={'footer-menu__list'}>
                    {props.items.map((menuItem, index) =>
                        <FooterMenuItem key={index}
                            href={menuItem.href}
                            value={menuItem.value}/>
                    )}
                </ul>
                <FooterSocials/>
            </div>
        );
    }else{
        return (
            <div className={'footer-menu__column'}>
                <h4 className={'footer-menu__title'}>{props.title}</h4>
                <ul className={'footer-menu__list'}>
                    {props.items.map((menuItem, index) =>
                        <FooterMenuItem key={index}
                            href={menuItem.href}
                            value={menuItem.value}/>
                    )}
                </ul>
            </div>
        );
    }


    return (
        <div className={'footer-menu__column'}>
            <h4>{props.title}</h4>
            <ul className={'footer-menu__list'}>
                {props.items.map((menuItem) =>
                    <FooterMenuItem
                        href={menuItem.href}
                        value={menuItem.value}/>
                )}
            </ul>
        </div>
    );
};

export default FooterMenuColumn;