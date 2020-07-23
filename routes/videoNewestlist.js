var express = require('express');
var router = express.Router();

var videoNewestlist = {
    title:[
        {
            id: 1,
            text1: '最新片源>>',
            text2: '更多>'
        },
    ],  
    content:[
        {
            id: 1,
            url: '/images/banner0.png',
            text: '极限挑战满屏酷意究竟极限挑战满屏酷意究竟'
        },
        {
            id: 2,
            url: '/images/banner1.png',
            text: '极限挑战满屏酷意究竟极限挑战满屏酷意究竟'
        },
        {
            id: 3,
            url: '/images/banner2.png',
            text: '极限挑战满屏酷意究竟极限挑战满屏酷意究竟'
        },
        {
            id: 4,
            url: '/images/banner3.png',
            text: '极限挑战满屏酷意究竟极限挑战满屏酷意究竟'
        },
        {
            id: 5,
            url: '/images/banner4.png',
            text: '极限挑战满屏酷意究竟极限挑战满屏酷意究竟'
        },
        {
            id: 6,
            url: '/images/banner0.png',
            text: '极限挑战满屏酷意究竟极限挑战满屏酷意究竟'
        },
    ],
    adverList:[
        {
            id: 1,
            url: '/images/banner2.png',
        },
    ],
}
    

// var videoNewestlist = [
//     {
//         id: 1,
//         url: '/images/banner0.png',
//         text: '极限挑战满屏酷意究竟极限挑战满屏酷意究竟'
//     },
//     {
//         id: 2,
//         url: '/images/banner1.png',
//         text: '极限挑战满屏酷意究竟极限挑战满屏酷意究竟'
//     },
//     {
//         id: 3,
//         url: '/images/banner2.png',
//         text: '极限挑战满屏酷意究竟极限挑战满屏酷意究竟'
//     },
//     {
//         id: 4,
//         url: '/images/banner3.png',
//         text: '极限挑战满屏酷意究竟极限挑战满屏酷意究竟'
//     },
//     {
//         id: 5,
//         url: '/images/banner4.png',
//         text: '极限挑战满屏酷意究竟极限挑战满屏酷意究竟'
//     },
//     {
//         id: 6,
//         url: '/images/banner0.png',
//         text: '极限挑战满屏酷意究竟极限挑战满屏酷意究竟'
//     },
// ];

/* 查询商品 */
router.get('/', function (req, res, next) {
    res.send(JSON.stringify(videoNewestlist));
});
module.exports = router;