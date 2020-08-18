var express = require('express');
var router = express.Router();

var products = [
    {
        id: 1,
        url: '/images/banner0.png',
        title: '商品1',
        subTitle: '描述1',
    },
    {
        id: 2,
        url: '/images/banner1.png',
        title: '商品2',
        subTitle: '描述2',
    },
    {
        id: 3,
        url: '/images/banner2.png',
        title: '商品3',
        subTitle: '描述3',
    },
    {
        id: 4,
        url: '/images/banner3.png',
        title: '商品4',
        subTitle: '描述4',
    },
    {
        id: 5,
        url: '/images/banner4.png',
        title: '商品5',
        subTitle: '描述5',
    },
    {
        id: 6,
        url: '/images/banner0.png',
        title: '商品6',
        subTitle: '描述6',
    },
    {
        id: 7,
        url: '/images/banner1.png',
        title: '商品7',
        subTitle: '描述7',
    },
    {
        id: 8,
        url: '/images/banner2.png',
        title: '商品8',
        subTitle: '描述8',
    },
    {
        id: 9,
        url: '/images/banner3.png',
        title: '商品9',
        subTitle: '描述9',
    },
    {
        id: 10,
        url: '/images/banner4.png',
        title: '商品10',
        subTitle: '描述10',
    },
];

var videoList = [
    {
        id: 1,
        video_url: '/images/shipin.mp4',
        image: '/images/5.jpg',
        title: '评委都惊艳了，这个精彩的表演',
        duration: '20',
        comment_count: '1',
        like: '5000',
        wemedia_info: {
            image: '/images/1.jpg',
            name: '娱乐嗨翻天',
        }
    },
    {
        id: 2,
        video_url: '/images/shipin.mp4',
        image: '/images/6.jpg',
        title: '发射40枚东风21导弹，能否打爆你米兹级航母编队？战争模拟',
        duration: '20',
        comment_count: '2',
        like: '5000',
        wemedia_info: {
            image: '/images/2.jpg',
            name: '大香蕉游戏',
        }
    },
    {
        id: 3,
        video_url: '/images/shipin.mp4',
        image: '/images/7.jpg',
        title: '李连杰最猛的一部电影，不愧是功夫巨星，看到心潮澎湃',
        duration: '20',
        comment_count: '3',
        like: '5000',
        wemedia_info: {
            image: '/images/3.jpg',
            name: '十八年影视',
        }
    },
    {
        id: 4,
        video_url: '/images/shipin.mp4',
        image: '/images/8.jpg',
        title: '美国已走下神坛，中国能否取代他的地位？',
        duration: '20',
        comment_count: '4',
        like: '5000',
        wemedia_info: {
            image: '/images/4.jpg',
            name: '捕鱼嗨翻天',
        }
    },
    {
        id: 5,
        video_url: '/images/shipin.mp4',
        image: '/images/8.jpg',
        title: '美国已走下神坛，中国能否取代他的地位？',
        duration: '20',
        comment_count: '5',
        like: '5000',
        wemedia_info: {
            image: '/images/4.jpg',
            name: '捕鱼嗨翻天',
        }
    },
    {
        id: 6,
        video_url: '/images/shipin.mp4',
        image: '/images/8.jpg',
        title: '美国已走下神坛，中国能否取代他的地位？',
        duration: '20',
        comment_count: '6',
        like: '5000',
        wemedia_info: {
            image: '/images/4.jpg',
            name: '捕鱼嗨翻天',
        }
    },
    {
        id: 7,
        video_url: '/images/shipin.mp4',
        image: '/images/8.jpg',
        title: '美国已走下神坛，中国能否取代他的地位？',
        duration: '20',
        comment_count: '7',
        like: '5000',
        wemedia_info: {
            image: '/images/4.jpg',
            name: '捕鱼嗨翻天',
        }
    },
    {
        id: 8,
        video_url: '/images/shipin.mp4',
        image: '/images/8.jpg',
        title: '美国已走下神坛，中国能否取代他的地位？',
        duration: '20',
        comment_count: '8',
        like: '5000',
        wemedia_info: {
            image: '/images/4.jpg',
            name: '捕鱼嗨翻天',
        }
    },
    {
        id: 9,
        video_url: '/images/shipin.mp4',
        image: '/images/8.jpg',
        title: '美国已走下神坛，中国能否取代他的地位？',
        duration: '20',
        comment_count: '9',
        like: '5000',
        wemedia_info: {
            image: '/images/4.jpg',
            name: '捕鱼嗨翻天',
        }
    },
    {
        id: 10,
        video_url: '/images/shipin.mp4',
        image: '/images/8.jpg',
        title: '美国已走下神坛，中国能否取代他的地位？',
        duration: '20',
        comment_count: '10',
        like: '5000',
        wemedia_info: {
            image: '/images/4.jpg',
            name: '捕鱼嗨翻天',
        }
    },
    {
        id: 11,
        video_url: '/images/shipin.mp4',
        image: '/images/8.jpg',
        title: '美国已走下神坛，中国能否取代他的地位？',
        duration: '20',
        comment_count: '11',
        like: '5000',
        wemedia_info: {
            image: '/images/4.jpg',
            name: '捕鱼嗨翻天',
        }
    },
    {
        id: 12,
        video_url: '/images/shipin.mp4',
        image: '/images/8.jpg',
        title: '美国已走下神坛，中国能否取代他的地位？',
        duration: '20',
        comment_count: '12',
        like: '5000',
        wemedia_info: {
            image: '/images/4.jpg',
            name: '捕鱼嗨翻天',
        }
    },
    {
        id: 13,
        video_url: '/images/shipin.mp4',
        image: '/images/8.jpg',
        title: '美国已走下神坛，中国能否取代他的地位？',
        duration: '20',
        comment_count: '13',
        like: '5000',
        wemedia_info: {
            image: '/images/4.jpg',
            name: '捕鱼嗨翻天',
        }
    },
    {
        id: 14,
        video_url: '/images/shipin.mp4',
        image: '/images/8.jpg',
        title: '美国已走下神坛，中国能否取代他的地位？',
        duration: '20',
        comment_count: '14',
        like: '5000',
        wemedia_info: {
            image: '/images/4.jpg',
            name: '捕鱼嗨翻天',
        }
    },
    {
        id: 15,
        video_url: '/images/shipin.mp4',
        image: '/images/8.jpg',
        title: '美国已走下神坛，中国能否取代他的地位？',
        duration: '20',
        comment_count: '15',
        like: '5000',
        wemedia_info: {
            image: '/images/4.jpg',
            name: '捕鱼嗨翻天',
        }
    },
    {
        id: 16,
        video_url: '/images/shipin.mp4',
        image: '/images/8.jpg',
        title: '美国已走下神坛，中国能否取代他的地位？',
        duration: '20',
        comment_count: '16',
        like: '5000',
        wemedia_info: {
            image: '/images/4.jpg',
            name: '捕鱼嗨翻天',
        }
    },
    {
        id: 17,
        video_url: '/images/shipin.mp4',
        image: '/images/8.jpg',
        title: '美国已走下神坛，中国能否取代他的地位？',
        duration: '20',
        comment_count: '17',
        like: '5000',
        wemedia_info: {
            image: '/images/4.jpg',
            name: '捕鱼嗨翻天',
        }
    },
    {
        id: 18,
        video_url: '/images/shipin.mp4',
        image: '/images/8.jpg',
        title: '美国已走下神坛，中国能否取代他的地位？',
        duration: '20',
        comment_count: '18',
        like: '5000',
        wemedia_info: {
            image: '/images/4.jpg',
            name: '捕鱼嗨翻天',
        }
    },
    {
        id: 19,
        video_url: '/images/shipin.mp4',
        image: '/images/8.jpg',
        title: '美国已走下神坛，中国能否取代他的地位？',
        duration: '20',
        comment_count: '19',
        like: '5000',
        wemedia_info: {
            image: '/images/4.jpg',
            name: '捕鱼嗨翻天',
        }
    },
]

/* 查询商品 */
router.get('/', function (req, res, next) {
    console.log('req.query:', req.query);
    console.log('req.query.start:', req.query.start);
    console.log('req.query.end:', req.query.end);

    res.send(JSON.stringify(videoList.slice(parseInt(req.query.start), parseInt(req.query.end))));
});

// /* 查询商品 */
// router.get('/', function (req, res, next) {
//     res.send(JSON.stringify(products));
// });
// /* 新建商品 */
// router.post('/', function (req, res, next) {
//     products = products.concat(req.body);
//     res.send(JSON.stringify(products));
// })
// /* 更新商品 */
// router.put('/:id', function (req, res, next) {
//     for (var i = 0; i < products.length; i++) {
//         if (products[i].id === parseInt(req.params.id)) {
//             products[i] = req.body;
//         }
//     }
//     res.send(JSON.stringify(products));
// })
// /* 删除商品 */
// router.delete('/:id', function (req, res, next) {
//     for (var i = 0; i < products.length; i++) {
//         if (products[i].id === parseInt(req.params.id)) {
//             products.splice(i, 1);
//         }
//     }
//     res.send('Success');
// });

module.exports = router;