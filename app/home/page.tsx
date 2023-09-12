import Content from "@/app/components/content"
import Lastst from "@/app/components/latest"

export default function Home() {
    return (
        <main className="flex-col items-center justify-between min-h-screen mx-auto max-w-7xl py-[8rem] flex">
            <Lastst></Lastst>
            <Content></Content>
        </main>
    )
}
