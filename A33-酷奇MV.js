{
    "author": "baddychen",
    "ua": "",
    "homeUrl": "https://www.kuqimv.com/play/",
    "cateManual": {
        "华语高清": "1",
        "日韩精选": "2",
        "欧美MV": "3",
        "高清现场": "4",
        "影视MV": "5",
        "夜店现场": "6",
        "车模视频": "7",
        "热舞视频": "8",
        "美女写真": "9",
        "美女打碟": "10"
    },
    "homeVodNode": "//div[@class='mv_list']/li",
    "homeVodName": "/div[@class='name']/a/@title",
    "homeVodId": "/div[@class='name']/a/@href",
    "homeVodIdR": "/play/(\\d+).html",
    "homeVodImg": "/div[@class='pic']/a/img/@src",
    "homeVodMark": "concat(//div[@class='time']/text(),'-',//div[@class='singer']/a/text())",
    "cateUrl": "https://www.kuqimv.com/play/{cateId}_{catePg}.html",
    "cateVodNode": "//div[@class='mv_list']/li",
    "cateVodName": "/div[@class='name']/a/@title",
    "cateVodId": "/div[@class='name']/a/@href",
    "cateVodIdR": "/play/(\\d+).html",
    "cateVodImg": "/div[@class='pic']/a/img/@src",
    "cateVodMark": "concat(//div[@class='time']/text(),'-',//div[@class='singer']/a/text())",
    "dtUrl": "https://www.kuqimv.com/play/{vid}.html",
    "dtNode": "//body",
    "dtName": "//div[@class='lei_info mt']/div[2]/h1/text()",
    "dtImg": "//div[@class='lei_info mt']/div[1]/img/@src",
    "dtCate": "//div[@class='play_info']/li[3]/a/text()",
    "dtActor": "//div[@class='play_info']/li[4]/a/text()",
    "dtFromNode": "//div[@class='lei_title']/h1",
    "dtFromName": "/text()",
    "dtFromNameR": "(\\S+) mp4\\S+",
    "dtUrlNode": "//div[@class='down_sm mt']/p[2]",
    "dtUrlSubNode": "/a",
    "dtUrlId": "@data-clipboard-text",
    "dtUrlIdR": "\\S+/(\\d+).html",
    "dtUrlName": "/text()",
    "dtUrlNameR": "",
    "playUrl": "https://www.kuqimv.com/play/{playUrl}.html",
    "playUa": "",
    "searchUrl": "https://www.kuqimv.com/search.php?key={wd}",
    "scVodNode": "//div[@class='play_xg']/li",
    "scVodName": "//div[@class='name']/a/@title",
    "scVodId": "//div[@class='name']/a/@href",
    "scVodIdR": "/play/(\\d+).html",
    "scVodImg": "//div[@class='pic']/a/img/@src",
    "scVodMark": ""
}