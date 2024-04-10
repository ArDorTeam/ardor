
"use client";
import { SlotID } from "@/lib/global"; // 路由列表
import Home from "@/pages/home/home";
import { useEffect, useState } from "react";


const Screen = () => {
  return (
    <div className="w-full">
      {(
        // 因为里面有遍历Link,所以要包在router里面
        <>
          {/* <Nav /> */}
          <div className="w-full" id={SlotID.AppBody}>
            <Home />
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
    <Screen />
  );
}
