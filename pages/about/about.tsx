
import { Link } from "react-router-dom";
import { Path } from "../../app/constant";

export function About() {
    return (
        <div>
            <h3>我是About的内容</h3>
            <Link to={Path.Article}>
                to Article
            </Link>
        </div>
    );
}

