import articleDetail from "@/mock/articleDetail";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";





type PostId = { id: string };

// ArticleTypeProps可传可不传
type ArticleTypeProps = {
    post?: PostId | null;
};

// 示例
type ArticleType = {
    article_id: string;
    title: string;
    content: string;
    author: string;
    published_at: string;
    group: string;
    tags: Array<string>;
    title_img: string;
};



const DetailPage: React.FC<ArticleTypeProps> = ({ post }) => {
    const [somePostData, setSomePostData] = useState<ArticleType | null>({
        article_id: '',
        title: '',
        content: '',
        author: '',
        published_at: '',
        group: '',
        tags: [],
        title_img: ''
    });
    const { articleId } = useParams(); // 拿路由id
    console.log(articleId);



    useEffect(() => {
        // 定义一个异步函数来获取博客详情数据
        async function fetchDetailData() {
            try {
                if (articleId) {
                    // 如果有传入 id，则发起 API 请求
                    // const options = {
                    //     method: 'POST' as const, // POST 请求
                    // };
                    // const response = await fetchAPI(`/api/v1/article/getArticleDetail?id=${post.id}`, options);

                    // if (response.success) {
                    //     setSomePostData(response.data as ArticleType);
                    // } else {
                    //     console.error('获取数据失败：', response.error);
                    // }

                    // 这里是测试示例
                    setSomePostData({
                        article_id: articleId,
                        title: articleId + "示例博客文章",
                        ...articleDetail // 示例，会删掉
                    } as ArticleType)
                }
            } catch (error: any) {
                console.error('获取数据失败：', error.message);
            }
        }

        // 调用 fetchDetailData 函数来获取数据
        fetchDetailData();
    }, [post, articleId]);

    if (!somePostData) {
        return <div>Loading...</div>;
    }

    return (
        <div >
            <header className="px-40">
                <div className="box-border mb-8 text-lg font-medium leading-none text-gray-500 uppercase" >
                    By <span className="text-black">{somePostData.author}</span> in <span className="text-link-color" >{somePostData.group}</span> —  <span>{somePostData.published_at}</span>
                </div>
                <h1 className='font-semibold leading-none text-7xl'>{somePostData.title}</h1>
                <figure className="mt-10">
                    <img src={somePostData.title_img} alt="示例图像" />
                </figure>
            </header>
            <section className="mt-16 px-80">
                <div className="min-h-screen" dangerouslySetInnerHTML={{ __html: somePostData.content }} />
            </section>
        </div>
    );
};

export default DetailPage;
