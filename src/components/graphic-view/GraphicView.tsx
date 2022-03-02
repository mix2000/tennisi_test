import React from 'react';
import {IGraphicView} from "./Models";

export const GraphicView: React.FC<IGraphicView> = ({width, height, className = "ts--graphic-view" , bg, rounded, children}) => {

    const stylesVar = {
        width: width + 'px',
        height: height + 'px'
    }

    return (
        <div className={className} style={stylesVar}>
            {children}
        </div>
);
}
