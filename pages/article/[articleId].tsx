import Header from "@/components/header";
import { ArticleType } from "@/lib/types";
import { fetchAPI } from "@/utils/request";
import { Viewer } from '@bytemd/react';
import 'bytemd/dist/index.css';
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import './article.css';

type ArticleTypeProps = {
    post?: { id: string } | null;
};

const Article: React.FC<ArticleTypeProps> = () => {
    const [ articleDetail, setArticleDetail] = useState<ArticleType>();
    const router = useRouter()

    // 定义一个异步函数来获取博客详情数据
    const fetchDetailData = async (articleId:string) =>  {
        try {
            if (articleId) {
                // 如果有传入 id，则发起 API 请求
                const options = {
                    method: 'POST' as const, // POST 请求
                    data: { article_id: articleId } // 请求参数
                };
                const response = await fetchAPI(`/api/v1/article/getArticleDetail`, options);

                if (response.success) {
                    setArticleDetail(response.data as ArticleType);
                } else {
                    console.error('获取数据失败：', response.error);
                }
            }
        } catch (error: any) {
            console.error('获取数据失败：', error.message);
        }
    }

    useEffect(() => {
        if (router.isReady) {
            const { articleId } = router.query
            fetchDetailData(articleId as string);
        }
    }, [router.isReady, router.query]);

    if (!articleDetail) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <Header />
            <header className="pt-10 w-[1200px] mx-auto">
                <h1 className='text-6xl font-semibold leading-none'>{articleDetail.title}</h1>
                <h2 className='text-2xl leading-none text-right'>{articleDetail.sub_title}</h2>
            </header>
            <section className="mt-8 break-word w-[1200px] mx-auto flex">
                {
                    articleDetail.isHtml ?
                        (<div className="hl-edior3" dangerouslySetInnerHTML={{ __html: articleDetail.content }} />)
                        : (<div className="hl-edior3 Article_CSS_Doc" id="Article_CSS">
                            <Viewer value={articleDetail.content}></Viewer>
                        </div>)
                }
            </section>
        </div>
    );
};

export default Article;
