import { ListItemType } from "@/lib/types";
import { Link } from "react-router-dom";

type itemType = {
    data: ListItemType | undefined
}


const Lastst: React.FC<itemType> = ({data}) => {
    const {gmt_modified,
        article_id,
        title,
        sub_title,
        visits} = data ?? {}
    return (
        <div className="mb-[10rem]">
            <div className="mb-2 text-base text-blue-600/100 ">Latest — {gmt_modified}</div>
            <h2 className="text-6xl font-semibold">
                <Link to={`/detail/${article_id}`}>{title}</Link>
            </h2>
            <div className="max-w-4xl mt-3 text-2xl"> {sub_title}</div>
            <div className="mt-4 text-base text-zinc-400">{visits} READ</div>
        </div>
    )
}

export default Lastst