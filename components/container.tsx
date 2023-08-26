
"use client";
import { About } from "@/pages/about/about";
import { Article } from "@/pages/article/article";
import { Home } from "@/pages/home/home";
import {
    Route,
    HashRouter as Router,
    Routes,
} from "react-router-dom";

import { Path, SlotID } from "@/app/constant"; // 路由列表



function Screen() {
    return (
        <div>
            {(
                <>
                    <div id={SlotID.AppBody}>
                        <Routes>
                            <Route path={Path.Home} element={<Home />} />
                            <Route path={Path.Article} element={<Article />} />
                            <Route path={Path.About} element={<About />} />
                        </Routes>
                    </div>
                </>
            )}
        </div>
    );
}


export function Container() {
    return (
        <Router>
            <Screen />
        </Router>
    );
}
