"use client"

import { Button } from "@/components/ui/button"
import React from "react"
import styles from "./home.module.scss"
import { Item } from "./more"

interface TopicProps {
    title: string;
    count: number;
  }

function Introduce() {
    return (
        <>
            <div className="flex items-center">
                <img src="https://journal.ghost.io/content/images/2021/06/Logo.png" alt="The Ardor" className="mr-4" />
                <div>
                    <div className="text-lg font-semibold">The Ardor</div>
                    <div className="text-slate-600">Thoughts,stories and ideas.</div>
                </div>
            </div>
            <div className="mt-8 text-slate-600">Sign up now to get access to the library of members-only issues.</div>
            <Button className="w-full mt-8">Subscribe</Button>
        </>
    )
}

function Topic({ title, count }:TopicProps) {
    const handleClick = () => {
        console.log("Click!")
    }
    return (
        <>
            <div className={styles.topicItem} onClick={handleClick}>
                <div className="text-xl font-semibold">{title}</div>
                <div className="px-2 text-sm border rounded-2xl">{count} issues</div>
            </div>
        </>
    )
}


function SiderItem({ title, children }:{title:string, children:React.ReactNode}) {
    return (
        <>
            <div className={styles.title}>{title}</div>
            {children}
        </>
    )
}

export default function About() {
    const list = [
        {
            date: "JUN 28, 2021",
            title: "Start here for a quick overview of everything you need to know",
            content: "We've crammed the most important information to help you get started with Ghost into this one post. It's your cheat-sheet to get started, and your shortcut to advanced features.",
            readTime: "2 min"
        },
        {
            date: "JUN 28, 2021",
            title: "Start here for a quick overview of everything you need to know",
            content: "We've crammed the most important information to help you get started with Ghost into this one post. It's your cheat-sheet to get started, and your shortcut to advanced features.",
            readTime: "2 min"
        }
    ]
    // 主题列表
    const topicList = [
        {
            title: "Getting Started",
            count: 7
        },
        {
            title: "Speeches",
            count: 1
        }
    ]
    return (
        <div className="sticky pl-12 top-4 h-max">
            <SiderItem title="ABOUT">
                <Introduce></Introduce>
            </SiderItem>
            <SiderItem title="FEATURED">
                {list.map(it => {
                    return <Item info={it} mini={true} />
                })}
            </SiderItem>
            <SiderItem title="TOPICS">
                {topicList.map(it => {
                    return <Topic title={it.title} count={it.count} />
                })}
            </SiderItem>
        </div>
    )
}
