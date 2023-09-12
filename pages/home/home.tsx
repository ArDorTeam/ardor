// import { Button } from '@/components/ui/button';

import { Link } from "react-router-dom"
import { Path } from "../../app/constant"

export function Home() {
    return (
        <div>
            <h3>我是Home的内容</h3>
            <Link to={Path.About}>to About</Link>
        </div>
    )
}
