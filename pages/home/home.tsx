// import { Button } from '@/components/ui/button';

import { ListItemType, ListType } from "@/lib/types";
import Content from "@/pages/home/components/content";
import Lastst from "@/pages/home/components/latest";
import { fetchAPI } from "@/utils/request";
import { useEffect, useState } from "react";


export function Home() {
    const [List, setList] = useState<ListItemType[]>([]);
    const [LastData, setLastData] = useState<ListItemType>();
    useEffect(() => {
        async function getList() {
            try {
                const options = {
                    method: 'POST' as const,
                    data: {
                        "searchValue": "",
                        "createTime": [],
                        "updateTime": [],
                        "offset": "0",
                        "length": "20"
                    }
                };
                const response = await fetchAPI<ListType>(`/api/v1/article/getArticleList`, options);
                if (response.success) {
                    console.log(response.data);
                    if (response.data) {
                        const responseData = response.data;
                        setList(responseData.list); // 列表数据
                        setLastData(responseData.list?.[0]); // 最新数据
                    }
                } else {
                    console.error('获取数据失败：', response.error);
                }
            } catch (error: any) {
                console.error('获取数据失败：', error.message);
            }
        }

        // 调用 getList 函数来获取数据
        getList();
    }, []);



    return (
        <main className="flex-col items-center justify-between min-h-screen mx-auto max-w-7xl py-[8rem] flex">
            <Lastst data={LastData} ></Lastst>
            <Content list={List}></Content>
        </main>
    )
}



