import { ListItemType, ListType } from "@/lib/types";
import { fetchAPI } from "@/utils/request";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import styles from "./home.module.scss";

const cateList = [
    { id: 0, value: '', name: '全部类别' },
    { id: 1, value: 'zjsj', name: '最佳实践' }
]

export default function Content() {
    const router  = useRouter();
    const [activeId, setActiveId] = useState(0)
    const [blogList, setBlogList] = useState<ListItemType[]>([]);

    const Category = ({ cate }: any) => {
        const itemClass = cate.id === activeId ? `${styles['cate-item']} ${styles.actived}` : styles['cate-item']
        return (
            <div className={itemClass} onClick={() => { setActiveId(cate.id) }} >{cate.name}</div>
        )
    }

    const handleClick = (id: string) => {
        router.push(`/article/${id}`)
    }

    const BlogItem = ({blog}: any) => {
        return (
            <div className={styles['blog-item']} onClick={ () => handleClick(blog.article_id) }>
                <div className={styles['blog-item-content']}>
                    {/* <img src={"https://resource.helplook.net/docker_production/e4z9fp/article/56PtFk/cover/cover?rand=1602925730"} /> */}
                    <img src={blog.cover_url} />
                    <div className="px-6 pb-5 flex-1 flex flex-col justify-between">
                        <div className="mt-4 text-base font-semibold">{ blog.title }</div>
                        <div className="mt-4 text-[#526373] text-sm line-clamp-5">{ blog.sub_title }</div>
                        <div className="text-xs text-[#9bacbc] mt-3">{ blog.gmt_modified.slice(0, 10) }</div>
                    </div>
                </div>
            </div>
        )
    }

    const getList =  async () =>  {
        try {
            const options = {
                method: 'POST' as const,
                data: {
                    "searchValue": "",
                    "createTime": [],
                    "updateTime": [],
                    "offset": "1",
                    "length": "20"
                }
            };
            const response = await fetchAPI<ListType>(`/api/v1/article/getArticleList`, options);
            if (response.success) {
                console.log(response.data);
                if (response.data) {
                    const responseData = response.data;
                    setBlogList(responseData.list); // 列表数据
                }
            } else {
                console.error('获取数据失败：', response.error);
            }
        } catch (error: any) {
            console.error('获取数据失败：', error.message);
        }
    }

    useEffect(() => {
        // 调用 getList 函数来获取数据
        getList();
    }, []);
    return (
        <>
            <div className={styles.title}>博客</div>
            <div className={styles['cate-list']}>
                {cateList.map((cate) => (
                    <Category cate={ cate } key={ cate.id } />
                ))}
            </div>
            <div className={styles['blog-list']}>
                {blogList.map(blog => (
                    <BlogItem blog={blog} key={blog.article_id} />
                ))}

            </div>
        </>
    )
}
