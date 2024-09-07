const fs = require('fs');
const path = require('path');

const articleId = '2448677'
const content = fs.readFileSync('./content.md');


async function upload(content) {//提取markdown中的图片地址，传入markdown内容
    const pattern = /!\[(.*?)\]\((.*?)\)/mg;
    let matcher;
    while ((matcher = pattern.exec(content)) !== null) {
        let originUrl = new URL(matcher[2]);
        const { origin, pathname } = originUrl;
        let url = origin + pathname;
        let alt = matcher[1];
        let filename = url.split('/').at(-1)
        //下载文件
        let file = await (await fetch(url)).arrayBuffer();
        let p = path.join(`D:/ArSrNaDevelop/blog-images/${articleId}`);
        if (!fs.existsSync(p)) fs.mkdirSync(p);
        fs.writeFileSync(path.join(p, filename), Buffer.from(file));
        // let replaceUrl = new URL(matcher[2].replace(originUrl.host + '/http-save/yehe-3335308', `st2-res.arsrna.cn/${articleId}`))
        // console.log(replaceUrl.origin + replaceUrl.pathname)
        // result.push({
        //     alt: matcher[1],
        //     url
        // });
    }
}

// function replaceImgHostAndRemoveQuery(markdown, newHost) {
//     // 正则表达式匹配Markdown中的图片标签
//     const imgRegex = '/!?\[(?:[^\]]*\)]\((https?:\/\/[^?#]*(?:\?[^#]*)?)/g';

//     // 使用replace方法替换匹配到的链接
//     return markdown.replace(imgRegex, (match, url) => {
//         // 分离URL中的主机部分和路径部分
//         const urlParts = url.split('/');
//         const protocol = urlParts.shift(); // 获取协议部分，如 http: 或 https:
//         const hostPath = urlParts.join('/').split('?'); // 拆分主机+路径 和 查询字符串
//         const hostAndPath = hostPath[0]; // 只保留主机和路径部分
//         const newUrl = `${protocol}//${newHost}/${hostAndPath}`;

//         return match.replace(url, newUrl);
//     });
// }

// console.log(replaceImgHostAndRemoveQuery(content, 'st2-res.arsrna.cn'))

upload(content)