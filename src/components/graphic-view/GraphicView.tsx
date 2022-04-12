import React from 'react';
import {IGraphicView} from "./Models";

export const GraphicView: React.FC<IGraphicView> = ({className, width = 24, height = 24, children}):JSX.Element => {

    const graphicViewClasses = ['ts--graphic-view'];

    if (className) {
        graphicViewClasses.push(className);
    }

    const stylesVar = {
        width: width + 'px',
        height: height + 'px'
    }

    return (
        <div className={graphicViewClasses.join(' ')} style={stylesVar}>
            {children}
        </div>
);
}
