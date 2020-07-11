var express = require('express');
var router = express.Router();

var adverments = [
    {
        id: 1,
        url: '/images/banner0.png'
    },
    {
        id: 2,
        url: '/images/banner1.png'
    },
    {
        id: 3,
        url: '/images/banner2.png'
    },
    {
        id: 4,
        url: '/images/banner3.png'
    },
    {
        id: 5,
        url: '/images/banner4.png'
    },
]

/* 查询商品 */
router.get('/', function (req, res, next) {
    res.send(JSON.stringify(adverments));
});

module.exports = router;