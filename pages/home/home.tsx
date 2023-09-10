// import { Button } from '@/components/ui/button';

import { Path } from "@/app/constant";
import { fetchAPI } from "@/utils/request";
import { Link } from "react-router-dom";

export function Home() {
    return (
        <div>
            <button onClick={fetchData}>获取数据</button>
            <h3>我是Home的内容</h3>
            <Link to={Path.About}>
                to About
            </Link>
        </div>
    );
}

// 在你的Next.js页面或组件中


type POSTTYPE = {
    id: number;
    name: string;
    email: string;
    // 其他属性...
};



// // 例如，获取数据的示例
const fetchData = async () => {
    try {
        const options = {
            method: 'POST' as const, // POST 请求
        };
        const response = await fetchAPI('/api/v1/article/getArticleList', options); // 替换为实际的 API 端点和数据类型
        if (response.success) {
            console.log('成功获取数据：', response.data);
        } else {
            console.error('获取数据失败：', response.error);
        }
    } catch (error: any) {
        console.error('获取数据失败：', error.message);
    }
};