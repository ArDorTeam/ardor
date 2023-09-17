import { ListItemType } from "@/lib/types";
import { Link } from "react-router-dom";


const Lastst: React.FC<ListItemType> = (props) => {
    return (
        <div className="mb-[10rem]">
            <div className="mb-2 text-base text-blue-600/100 ">Latest — {props.gmt_modified}</div>
            <h2 className="text-6xl font-semibold">
                <Link to={`/detail/${props.article_id}`}>{props.title}</Link>
            </h2>
            <div className="max-w-4xl mt-3 text-2xl"> {props.sub_title}</div>
            <div className="mt-4 text-base text-zinc-400">{props.visits} READ</div>
        </div>
    )
}

export default Lastst