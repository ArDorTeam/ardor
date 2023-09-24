// import { NAV_LISTS } from "@/lib/global";
// console.log(NAV_LISTS);
import { Link } from 'react-router-dom'
const arr = [
    {
        label: "HOME",
        value: "/"
    },
    {
        label: "ABOUT",
        value: "/about"
    },
    {
        label: "STYLE GUIDE",
        value: "/styleGuide"
    },
    {
        label: "AUTHOR",
        value: "/author"
    },
    {
        label: "COLLECTION",
        value: "/collection"
    }
]


const Nav = () => {
    return (
        <div className="flex items-center justify-center border-y h-14">
            <div className="flex" style={{ columnGap: 20 }}>
                {arr.map(it => {
                    return (
                        <div key={it.value} className='mx-5'>
                            <Link className="cursor-pointer hover:text-zinc-500" to={it.value} >
                                {it.label}
                            </Link>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
export default Nav
