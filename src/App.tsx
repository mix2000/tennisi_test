import React from 'react';
import "./assets/styles/ui.css"

import {ComponentsDemo} from "./pages-demo";
import {Header} from "./components/header/header";
import {RightSidebar} from "./components/layout/right-sidebar/right-sidebar";
import {LeftSidebar} from "./components/layout/left-sidebar/left-sidebar";
import {Footer} from "./components/footer/footer";


const App: React.FC = () => {

    return (
        <>
            <Header/>

            <div className="wrapper">
                {/*<LeftSidebar/>*/}
                <div className={'content'}>
                    <ComponentsDemo/>
                    <Footer/>
                </div>
                <RightSidebar/>
            </div>
        </>
    );
}

export default App;
