import React from 'react';
import {IGraphicView} from "./Models";

export const GraphicView: React.FC<IGraphicView> = ({className = "", width = 24, height = 24, children}) => {

    const stylesVar = {
        width: width + 'px',
        height: height + 'px'
    }

    return (
        <div className={`ts--graphic-view ` + className} style={stylesVar}>
            {children}
        </div>
);
}
