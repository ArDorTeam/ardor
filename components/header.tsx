import { Button } from "@/components/ui/button"
import { ROOT_TITLE } from "@/lib/global"
// import { EnvelopeOpenIcon } from "@radix-ui/react-icons"
// import Nav from "./nav"
export default function Header() {
    return (
        <>
            <div className=" w-[1200px] mx-auto items-center flex justify-between h-20">
                <div>Search</div>
                <div className="text-4xl font-bold">{ROOT_TITLE}</div>
                <div>
                    <span className="mr-5 cursor-pointer hover:text-zinc-500">SIGN IN</span>
                    <Button>
                        {/* <EnvelopeOpenIcon className="w-4 h-4 mr-2" /> Subscribe */}
                    </Button>
                </div>
            </div>

            {/* <Nav /> */}

        </>
    )
}
