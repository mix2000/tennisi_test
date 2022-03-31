import React from 'react';
import {EIconName} from "../../icons/Enums";
import {NewIcon} from "../../icons";
import MenuMoreList from "./menu-more-list";

interface IProps {
    isActive: boolean,
    onClick: () => void
}

const MenuMore: React.FC<IProps> = ({
                                            isActive,
                                            onClick
                                        }) => {

    const menuItemMoreClasses = ['menu-more'];

    if (isActive) {
        menuItemMoreClasses.push('active');
    }

    return (
        <li className={menuItemMoreClasses.join(' ')}>
            <div onClick={onClick} className="menu-more__trigger">
                <NewIcon width={32} height={32} fill={'#9F9FB0'} type={EIconName.MORE}/>
            </div>
            <MenuMoreList/>
        </li>
    );
};

export default MenuMore;