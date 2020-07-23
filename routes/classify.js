var express = require('express');
var router = express.Router();

var adverments = [
    {
        id:1,
        img: '/images/icon_homepage_entertainmentCategory.png',
        text: '饮料',
    },
    {
        id:2,
        img: '/images/icon_homepage_foottreatCategory.png',
        text: '足疗',
    },
    {
        id:3,
        img:'/images/icon_homepage_hotelCategory.png',
        text: '旅馆',
    },
    {
        id:4,
        img: '/images/icon_homepage_KTVCategory.png',
        text: '歌舞',
    },
    {
        id:5,
        img: '/images/icon_homepage_lifeServiceCategory.png',
        text: '爱心',
    },
    {
        id:6,
        img: '/images/icon_homepage_movieCategory.png',
        text: '唱片',
    },
    {
        id:7,
        img:'/images/icon_homepage_shoppingCategory.png',
        text: '购物车',
    },
    {
        id:8,
        img: '/images/icon_homepage_shoppingCategory.png',
        text: '去吃火锅',
    },
]

/* 查询商品 */

router.get('/', function (req, res, next) {
    res.send(JSON.stringify(adverments));
});


module.exports = router;