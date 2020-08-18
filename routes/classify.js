var express = require('express');
var router = express.Router();

var adverments = [
    {
        id:1,
        img: '/images/icon_homepage_entertainmentCategory.png',
        text: '科技',
    },
    {
        id:2,
        img: '/images/icon_homepage_foottreatCategory.png',
        text: '热点',
    },
    {
        id:3,
        img:'/images/icon_homepage_hotelCategory.png',
        text: '饮食',
    },
    {
        id:4,
        img: '/images/icon_homepage_KTVCategory.png',
        text: '交通',
    },
    {
        id:5,
        img: '/images/icon_homepage_lifeServiceCategory.png',
        text: '城市',
    },
    {
        id:6,
        img: '/images/icon_homepage_movieCategory.png',
        text: '搞笑',
    },
    {
        id:7,
        img:'/images/icon_homepage_shoppingCategory.png',
        text: '军事',
    },
    {
        id:8,
        img: '/images/icon_homepage_shoppingCategory.png',
        text: '文人',
    },
]

/* 查询商品 */

router.get('/', function (req, res, next) {
    res.send(JSON.stringify(adverments));
});


module.exports = router;