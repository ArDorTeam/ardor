export type ArticleType = {
    article_id: string,
    article_type: string,
    title: string,
    sub_title: string,
    cover_url: string,
    content: string,
    visits: string,
    is_recommend: Boolean,
    sort_id: string,
    status: Boolean,
    gmt_create: string,
    gmt_modified: string,
    group: string
};

export type ListItemType = {
    id: string | undefined,
    article_id: string,
    article_type: string,
    title: string,
    sub_title: string,
    cover_url: string,
    visits: string,
    is_recommend: Boolean,
    sort_id: string,
    status: Boolean,
    gmt_create: string,
    gmt_modified: string
}

export type ListType = {
    list: Array<ListItemType>,
    totoal: Number
}