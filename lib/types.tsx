export type ArticleType = {
    article_id: string,
    article_type: string,
    title: string,
    sub_title: string,
    cover_url: string,
    content: string,
    visits: string,
    is_recommend: boolean,
    sort_id: string,
    status: boolean,
    gmt_create: string,
    gmt_modified: string,
    group?: any
};

export type ListItemType = {
    id?: string;
    article_id?: string;
    article_type?: string;
    title?: string;
    sub_title?: string;
    cover_url?: string;
    visits?: string;
    is_recommend?: boolean;
    sort_id?: string;
    status?: boolean;
    gmt_create?: string;
    gmt_modified?: string;
}

export type ListType = {
    list: Array<ListItemType>,
    totoal: number
}
