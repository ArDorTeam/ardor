export default function Lastst() {
    const data = {
        date: "JUN 28, 2021",
        title: "Start here for a quick overview of everything you need to know",
        content: "We've crammed the most important information to help you get started with Ghost into this one post. It's your cheat-sheet to get started, and your shortcut to advanced features.",
        readTime: "2 min"
    }
    return (
        <div className="mb-[10rem]">
            <div className="mb-2 text-base text-blue-600/100 ">Latest — {data.date}</div>
            <h2 className="text-6xl font-semibold">{data.title}</h2>
            <div className="max-w-4xl mt-3 text-2xl"> {data.content}</div>
            <div className="mt-4 text-base text-zinc-400">{data.readTime} READ</div>
        </div>
    )
}
