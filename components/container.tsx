
"use client";
import { Path, SlotID } from "@/app/constant"; // 路由列表
import { About } from "@/pages/about/about";
import { Article } from "@/pages/article/article";
import DetailPage from "@/pages/detail/[articleId]";
import { Home } from "@/pages/home/home";
import { useEffect, useState } from "react";
import {
  Route,
  HashRouter as Router,
  Routes,
} from "react-router-dom";


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
              <Route path={Path.Detail} element={<DetailPage />} />
            </Routes>
          </div>
        </>
      )
      }
    </div >
  );
}
export function Loading() {
  return (
    <div>
      loading
    </div>
  );
}


const useHasHydrated = () => {
  const [hasHydrated, setHasHydrated] = useState<boolean>(false);
  useEffect(() => {
    setHasHydrated(true);
  }, []);

  return hasHydrated;
};

export function Container() {
  if (!useHasHydrated()) {
    return <Loading />;
  }
  return (
    <Router>
      <Screen />
    </Router>
  );
}
