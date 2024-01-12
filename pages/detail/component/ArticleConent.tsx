// import frontmatter from '@bytemd/plugin-frontmatter'; // 解析前题
import frontmatter from "@bytemd/plugin-frontmatter";
import gemoji from "@bytemd/plugin-gemoji";
import gfm from "@bytemd/plugin-gfm"; // 支持GFM
import highlight from '@bytemd/plugin-highlight'; // 代码高亮
import mediumZoom from "@bytemd/plugin-medium-zoom";
import { Viewer } from '@bytemd/react';
import 'bytemd/dist/index.css';
import "bytemd/dist/index.min.css";
import 'highlight.js/styles/monokai-sublime.css'; // 代码高亮的主题样式(可自选)
import "highlight.js/styles/vs.css";

const plugins = [gfm(), gemoji(), highlight(), mediumZoom(), frontmatter()];

type propType = {
    data: { content: string }
}


const Content: React.FC<propType> = ({ data }) => {
    console.log(data);
    const {
        content
    } = data ?? {}
    return (
        <>
            <Viewer value={content} plugins={plugins} />
        </>
    )
}

export default Content
