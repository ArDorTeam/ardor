import { CategoryListType, CategoryType, ListItemType, ListType } from "@/lib/types";
import { fetchAPI } from "@/utils/request";
import { Pagination, PaginationProps } from "antd";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import styles from "./home.module.scss";

export default function Content() {
    const router  = useRouter();
    const [categoryId, setCategoryId] = useState('')
    const [current, setCurrent] = useState(1);
    const [total, setTotal] = useState(0);
    const [blogList, setBlogList] = useState<ListItemType[]>([]);
    const [cateList, setCateList] = useState<CategoryType[]>([]);

    const Category = ({ cate }: { cate: CategoryType} ) => {
        const itemClass = cate.category_id === categoryId ? `${styles['cate-item']} ${styles.actived}` : styles['cate-item']
        return (
            <div className={itemClass} onClick={() => { setCategoryId(cate.category_id) }} >{cate.title}</div>
        )
    }

    const handleClick = (id: string) => {
        router.push(`/article/${id}`)
    }

    const BlogItem = ({blog}: any) => {
        return (
            <div className={styles['blog-item']} onClick={ () => handleClick(blog.article_id) }>
                <div className={styles['blog-item-content']}>
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
                    "categoryId": categoryId,
                    "createTime": [],
                    "updateTime": [],
                    "offset": current,
                    "length": "20"
                }
            };
            const response = await fetchAPI<ListType>(`/api/v1/article/getArticleList`, options);
            if (response.success) {
                if (response.data) {
                    const responseData = response.data;
                    setTotal(responseData.total)
                    setBlogList(responseData.list); // 列表数据
                }
            } else {
                console.error('获取数据失败：', response.error);
            }
        } catch (error: any) {
            console.error('获取数据失败：', error.message);
        }
    }

    const getCateList = async () =>  {
        try {
            const options = {
                method: 'POST' as const,
                data:{}
            };
            const response = await fetchAPI<CategoryListType>(`/api/v1/category/getCategoryList`, options);
            if (response.success) {
                if (response.data) {
                    const responseData = response.data;
                    setCateList([
                        {title: '全部分类', id: 0, category_id:'' },
                        ...responseData.list
                    ]); // 列表数据
                }
            } else {
                console.error('获取数据失败：', response.error);
            }
        } catch (error: any) {
            console.error('获取数据失败：', error.message);
        }
    }

    useEffect(() => {
        getCateList();
    }, []);

    useEffect(() => {
        getList();
    }, [categoryId, current]);

    const onChange: PaginationProps['onChange'] = (page) => {
        setCurrent(page);
    };

    return (
        <>
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
            <Pagination className={styles.pagenation} defaultCurrent={current} total={total} defaultPageSize={ 20 } onChange={ onChange } hideOnSinglePage showSizeChanger={false} />
        </>
    )
}
