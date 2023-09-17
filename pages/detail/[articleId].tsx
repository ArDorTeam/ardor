import { ArticleType } from "@/lib/types";
import { fetchAPI } from "@/utils/request";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

type ArticleTypeProps = {
    post?: { id: string } | null;
};


const DetailPage: React.FC<ArticleTypeProps> = ({ post }) => {
    const [somePostData, setSomePostData] = useState<ArticleType>();
    const { articleId } = useParams(); // 拿路由id
    console.log(articleId);

    useEffect(() => {
        // 定义一个异步函数来获取博客详情数据
        async function fetchDetailData() {
            try {
                if (articleId) {
                    // 如果有传入 id，则发起 API 请求
                    const options = {
                        method: 'POST' as const, // POST 请求
                        data: { article_id: articleId } // 请求参数
                    };
                    const response = await fetchAPI(`/api/v1/article/getArticleDetail`, options);

                    if (response.success) {
                        // setSomePostData(response.data as ArticleType);
                        console.log(response.data);
                    } else {
                        console.error('获取数据失败：', response.error);
                    }

                    // 这里是测试示例
                    setSomePostData(response.data as ArticleType)
                }
            } catch (error: any) {
                console.error('获取数据失败：', error.message);
            }
        }

        // 调用 fetchDetailData 函数来获取数据
        fetchDetailData();
    }, [post]);

    if (!somePostData) {
        return <div>Loading...</div>;
    }

    return (
        <div >
            <header className="px-40 pt-10">
                <div className="text-gray-500  text-lg font-medium leading-none mb-8 uppercase box-border" >
                    By <span className="text-black">{somePostData.article_id}</span> in <span className="text-link-color" >{somePostData.group}</span> —  <span>{somePostData.gmt_modified}</span>
                </div>
                <h1 className='text-7xl font-semibold leading-none'>{somePostData.title}</h1>
                <figure className="mt-10">
                    <img src={somePostData.cover_url} alt="示例图像" />
                </figure>
            </header>
            <section className="mt-16 break-word px-80">
                <div className="min-h-screen" dangerouslySetInnerHTML={{ __html: somePostData.content }} />
            </section>
        </div>
    );
};

export default DetailPage;
