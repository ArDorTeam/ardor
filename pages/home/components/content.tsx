import About from "./about"
import More from "./more"

export default function Content() {
    return (
        <>
            <div className="grid w-full grid-cols-[2fr_1fr] gap-x-8">
                <More></More>
                <About></About>
            </div>
        </>
    )
}
