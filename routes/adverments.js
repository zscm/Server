var express = require('express');
var router = express.Router();

var adverments = [
    {
        id: 1,
        image: '/images/5.jpg',
        url:'https://dfyl88.cn'
    },
    {
        id: 2,
        image: '/images/6.jpg',
        url:'Tuiguang'
    },
    {
        id: 3,
        image: '/images/7.jpg',
        url:'https://df688.cn'
    },
    {
        id: 4,
        image: '/images/8.jpg',
        url:'https://www.leu66.com'
    },
    {
        id: 5,
        image: '/images/5.jpg',
        url:'https://h5.leu66.com'
    }
]

/* 查询商品 */

router.get('/', function (req, res, next) {
    res.send(JSON.stringify(adverments));
});

module.exports = router;