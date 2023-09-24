import { ListItemType } from "@/lib/types";
import dayjs from 'dayjs';
import { useState } from 'react';
import styles from "./home.module.scss";

interface ItemProps {
  info: ListItemType;
  mini?: boolean;
}

interface listInf {
  list:ListItemType[] | undefined
}

export function Item({ info, mini = false }: ItemProps) {
  const itemClassName = `${styles.item} ${mini ? styles.miniItem : ""}`;
  const titleClassName = `${mini ? "text-2xl" : "text-4xl"} font-semibold break-words`;
  const contentClassName = `${mini ? "text-base text-gray-500" : "text-2xl"} mt-4 text-2xl`;

  return (
    <div className={itemClassName}>
      <h2 className={titleClassName}>{info.title}</h2>
      <div className={contentClassName}>{info.sub_title}</div>
      <div className="flex items-center gap-1 mt-6 text-sm">
        <span className="text-blue-600/100">{dayjs(info.gmt_modified).format('YYYY-MM-DD')}</span>
        <span className="text-zinc-400">{info.visits} READ</span>
      </div>
    </div>
  );
}

export default function More({list}:listInf) {
  const length = 10
  const [offset,setOffset] = useState(1)
  const count = length * offset
  return (
    <div>
      <div className={styles.title}>MORE ISSUES</div>
      {list && list.slice(0,count).map((it) => (
        <Item key={it.id} info={it} />
      ))}
      {list && list.length > count && <div className='mt-6 text-center cursor-pointer text-zinc-400 hover:text-gray-500' onClick={()=>setOffset(offset+1)}>点击加载更多</div>}
    </div>
  );
}