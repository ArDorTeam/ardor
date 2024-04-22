import styles from "./home.module.scss";

interface ItemProps {
  info: {
    date: string;
    title: string;
    content: string;
    readTime: string;
  };
  mini?: boolean;
}

export function Item({ info, mini = false }: ItemProps) {
  const itemClassName = `${styles.item} ${mini ? styles.miniItem : ""}`;
  const titleClassName = `${mini ? "text-2xl" : "text-4xl"} font-semibold break-words`;
  const contentClassName = `${mini ? "text-base text-gray-500" : "text-2xl"} mt-4 text-2xl`;

  return (
    <div className={itemClassName}>
      <h2 className={titleClassName}>{info.title}</h2>
      <div className={contentClassName}>{info.content}</div>
      <div className="flex items-center gap-1 mt-6 text-sm">
        <span className="text-blue-600/100">{info.date}</span>
        <span className="text-zinc-400">{info.readTime} READ</span>
      </div>
    </div>
  );
}

export default function More() {
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
    },
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
  ];

  return (
    <div>
      <div className={styles.title}>MORE ISSUES</div>
      {list.map((it) => (
        <Item key={it.date} info={it} />
      ))}
    </div>
  );
}