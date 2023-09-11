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
    article_type: string;
    content: string;
    cover_url: string;
    gmt_create: string;
};



const DetailPage: React.FC<ArticleTypeProps> = ({ post }) => {
    const [somePostData, setSomePostData] = useState<ArticleType | null>({
        article_id: '',
        article_type: '',
        content: '',
        cover_url: '',
        gmt_create: ''
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
                        article_id: articleId + 'article_id',
                        article_type: articleId + 'article_type',
                        content: articleId + 'content',
                        cover_url: articleId + 'cover_url',
                        gmt_create: articleId + 'gmt_create',
                    } as ArticleType)
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
        <div>
            <h1>{somePostData.article_id}</h1>
            <p>{somePostData.article_type}</p>
            <p>{somePostData.cover_url}</p>
            <div dangerouslySetInnerHTML={{ __html: somePostData.content }} />
        </div>
    );
};

export default DetailPage;
