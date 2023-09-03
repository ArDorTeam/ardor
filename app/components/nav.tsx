import { NAV_LISTS } from "@/lib/global"
import Link from "next/link"

export default function Nav() {
    return (
        <div className="flex items-center justify-center border-y h-14">
            <div className="flex" style={{ columnGap: 20 }}>
                {NAV_LISTS.map(it => {
                    return (
                        <Link className="cursor-pointer  hover:text-zinc-500" href={it.value}>
                            {it.label}
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}
