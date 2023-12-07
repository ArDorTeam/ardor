export type ArticleType = {
    article_id: String,
    article_type: String,
    title: String,
    sub_title: String,
    cover_url: String,
    content: String,
    visits: String,
    is_recommend: Boolean,
    sort_id: String,
    status: Boolean,
    gmt_create: String,
    gmt_modified: String,
    group?: any
};

export type ListItemType = {
    id: String | undefined,
    article_id: String,
    article_type: String,
    title: String,
    sub_title: String,
    cover_url: String,
    visits: String,
    is_recommend: Boolean,
    sort_id: String,
    status: Boolean,
    gmt_create: String,
    gmt_modified: String
}

export type ListType = {
    list: Array<ListItemType>,
    totoal: Number
}
