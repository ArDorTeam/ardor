import { ListItemType } from "@/lib/types";
import About from "./about";
import More from "./more";

type itemType = {
    list: ListItemType[] | undefined
}


const Content: React.FC<itemType> = ({list})=>{
    return (
        <>
            <div className="grid w-full grid-cols-[2fr_1fr] gap-x-8">
                <More list={list}></More>
                {/* TODO */}
                <About></About>
            </div>
        </>
    )
}

export default Content
