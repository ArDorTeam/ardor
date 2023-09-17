// root title
export const ROOT_TITLE = "The Aodor"

// nav
export const NAV_LISTS = [
    {
        label: "HOME",
        value: "/home"
    },
    {
        label: "ABOUT",
        value: "/about"
    },
    {
        label: "STYLE GUIDE",
        value: "/styleGuide"
    },
    {
        label: "AUTHOR",
        value: "/author"
    },
    {
        label: "COLLECTION",
        value: "/collection"
    }
]


export enum Path {
    Home = "/",
    About = "/about",
    Article = "/article",
    StyleGuide = "/styleGuide",
    Author = "/author",
    Collection = "/collection",
    Detail = "/detail/:articleId",
}


export enum SlotID {
    AppBody = "app-body",
}
