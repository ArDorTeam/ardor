"use client"
import '@/app/styles/globals.scss';
import { Button } from "@/components/ui/button";
import { ROOT_TITLE } from "@/lib/global";
import { useRouter } from "next/navigation";
// import { EnvelopeOpenIcon } from "@radix-ui/react-icons"
// import Nav from "./nav"
export default function Header() {
    const router = useRouter()
    const login = () => {
        window.open('http://adminardor.ak.xyz/user/login')
    }
    const backHome = () => {
        router.push('/')
    }
    return (
        <>
            <div style={{borderBottom: "1px solid rgb(227, 232, 237)"}}>
                <div className="w-[1200px] mx-auto items-center flex justify-between h-14">
                    <div className="text-4xl font-bold cursor-pointer" onClick={ backHome }>{ROOT_TITLE}</div>
                    <div>
                        <Button onClick={ login }>登 录</Button>
                    </div>
                </div>
            </div>
            {/* <Nav /> */}
        </>
    )
}
