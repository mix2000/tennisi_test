import React, {lazy, Suspense, useMemo} from "react";
import {IIcons} from "./Models";
import {GraphicView} from "../graphic-view/GraphicView";

export const NewIcon = ({className, width, height, fill, strokeWidth, type}: IIcons): JSX.Element => {
    const Child = useMemo(() =>lazy(() => import(`./items/${type}`)), [type]);

    return (
            <Suspense fallback={<div>Loading...</div>}>
                <GraphicView className={className} width={width} height={height}>
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <Child fill={fill} strokeWidth={strokeWidth} type={type}/>
                    </svg>
                </GraphicView>
            </Suspense>
    );
}