

// import { Button } from '@/components/ui/button';

import { Link } from "react-router-dom";
import { Path } from "../../app/constant";

export function Article() {
    return (
        <div>
            <h3>我是Article的内容</h3>
            {/* <Button onClick={goHome}>Ardor Blog</Button> */}
            <Link to={Path.Home}>
                back to home
            </Link>
        </div>
    );
}

