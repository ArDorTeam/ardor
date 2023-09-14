// import { Button } from '@/components/ui/button';

import Lastst from "@/pages/home/components/latest";
import Content from "@/pages/home/components/content";


export function Home() {
    return (
        <main className="flex-col items-center justify-between min-h-screen mx-auto max-w-7xl py-[8rem] flex">
            <Lastst></Lastst>
            <Content></Content>
        </main>
    )
}



