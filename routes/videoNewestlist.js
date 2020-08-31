var express = require('express');
var router = express.Router();

var videoNewestlist = {
    title: [
        {
            id: 1,
            text1: '最新片源>>',
            text2: '更多>'
        },
    ],
    content: [
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
    adverList: [
        {
            id: 1,
            image: '/images/banner2.png',
            url: 'https://dfyl88.cn'
        },
    ],
}
var videoAllList = [
    {
        title: [
            {
                id: 1,
                text1: '最新片源>>',
                text2: '更多>',
                text3: '换一批'
            },
        ],
        content: [
            {
                id: 1,
                url: '/images/img/img10.jpg',
                videoUrl: '/images/shipin.mp4',
                text: '1',
                duration: '20',
            },
            {
                id: 2,
                url: '/images/img/img11.jpg',
                videoUrl: '/images/shipin.mp4',
                text: '2',
                duration: '20',
            },
            {
                id: 3,
                url: '/images/img/img12.jpg',
                videoUrl: '/images/shipin.mp4',
                text: '3',
                duration: '20',
            },
            {
                id: 4,
                url: '/images/img/img13.jpg',
                videoUrl: '/images/shipin.mp4',
                text: '4',
                duration: '20',
            },
            {
                id: 5,
                url: '/images/img/img14.jpg',
                videoUrl: '/images/shipin.mp4',
                text: '5',
                duration: '20',
            },
            {
                id: 6,
                url: '/images/img/img15.jpg',
                videoUrl: '/images/shipin.mp4',
                text: '6',
                duration: '20',
            },
            {
                id: 7,
                url: '/images/img/img16.jpg',
                videoUrl: '/images/shipin.mp4',
                text: '7',
                duration: '20',
            },
            {
                id: 8,
                url: '/images/img/img17.jpg',
                videoUrl: '/images/shipin.mp4',
                text: '8',
                duration: '20',
            },
            {
                id: 9,
                url: '/images/img/img18.jpg',
                videoUrl: '/images/shipin.mp4',
                text: '9',
                duration: '20',
            },
            {
                id: 10,
                url: '/images/img/img19.jpg',
                videoUrl: '/images/shipin.mp4',
                text: '10',
                duration: '20',
            },
            {
                id: 11,
                url: '/images/img/img20.jpg',
                videoUrl: '/images/shipin.mp4',
                text: '11',
                duration: '20',
            },
        ],
        adverList: [
            {
                id: 1,
                text2: '更多>',
                // image: '/images/5.jpg',
                // url: 'https://facaibuyu.top'
            },
        ],
    },
    {
        title: [
            {
                id: 1,
                text1: '最热片源>>',
                text3: '换一批'
            },
        ],
        content: [
            {
                id: 1,
                url: '/images/img/img1.jpg',
                text: '1',
                duration: '200',
            },
            {
                id: 2,
                url: '/images/img/img2.jpg',
                text: '2',
                duration: '200',
            },
            {
                id: 3,
                url: '/images/img/img3.jpg',
                text: '3',
                duration: '200',
            },
            {
                id: 4,
                url: '/images/img/img4.jpg',
                text: '4',
                duration: '200',
            },
            {
                id: 5,
                url: '/images/img/img5.jpg',
                text: '5',
                duration: '200',
            },
            {
                id: 6,
                url: '/images/img/img6.jpg',
                text: '6',
                duration: '200',
            },
            {
                id: 7,
                url: '/images/img/img7.jpg',
                text: '7',
                duration: '200',
            },
            {
                id: 8,
                url: '/images/img/img8.jpg',
                text: '8',
                duration: '200',
            },
            {
                id: 9,
                url: '/images/img/img9.jpg',
                text: '9',
                duration: '200',
            },
            {
                id: 10,
                url: '/images/img/img7.jpg',
                text: '10',
                duration: '200',
            },
            {
                id: 11,
                url: '/images/img/img8.jpg',
                text: '11',
                duration: '200',
            },
            {
                id: 12,
                url: '/images/img/img9.jpg',
                text: '12',
                duration: '200',
            },
            {
                id: 13,
                url: '/images/img/img1.jpg',
                text: '13',
                duration: '200',
            },
            {
                id: 14,
                url: '/images/img/img2.jpg',
                text: '14',
                duration: '200',
            },
            {
                id: 15,
                url: '/images/img/img3.jpg',
                text: '15',
                duration: '200',
            },
            {
                id: 16,
                url: '/images/img/img4.jpg',
                text: '16',
                duration: '200',
            },
            {
                id: 17,
                url: '/images/img/img5.jpg',
                text: '17',
                duration: '200',
            },
            {
                id: 18,
                url: '/images/img/img6.jpg',
                text: '18',
                duration: '200',
            },
            {
                id: 19,
                url: '/images/img/img7.jpg',
                text: '19',
                duration: '200',
            },
            {
                id: 20,
                url: '/images/img/img8.jpg',
                text: '20',
                duration: '200',
            },
            {
                id: 21,
                url: '/images/img/img9.jpg',
                text: '21',
                duration: '200',
            },
            {
                id: 22,
                url: '/images/img/img7.jpg',
                text: '22',
                duration: '200',
            },
            {
                id: 23,
                url: '/images/img/img8.jpg',
                text: '23',
                duration: '200',
            },
            {
                id: 24,
                url: '/images/img/img9.jpg',
                text: '24',
                duration: '200',
            },
        ],
        adverList: [
            {
                id: 1,
                text2: '更多>',
                // image: '/images/6.jpg',
                // url: 'https://dfyl88.cn',
            },
        ],
    },
    {
        title: [
            {
                id: 1,
                text1: '最凉片源>>',
                text3: '换一批'
            },
        ],
        content: [
            {
                id: 1,
                url: '/images/img/img21.jpg',
                text: '1',
                duration: '200',
            },
            {
                id: 2,
                url: '/images/img/img22.jpg',
                text: '2',
                duration: '200',
            },
            {
                id: 3,
                url: '/images/img/img23.jpg',
                text: '3',
                duration: '200',
            },
            {
                id: 4,
                url: '/images/img/img24.jpg',
                text: '4',
                duration: '200',
            },
            {
                id: 5,
                url: '/images/img/img25.jpg',
                text: '5',
                duration: '200',
            },
            {
                id: 6,
                url: '/images/img/img26.jpg',
                text: '6',
                duration: '200',
            },
            {
                id: 7,
                url: '/images/img/img27.jpg',
                text: '7',
                duration: '200',
            },
            {
                id: 8,
                url: '/images/img/img28.jpg',
                text: '8',
                duration: '200',
            },
            {
                id: 9,
                url: '/images/img/img29.jpg',
                text: '9',
                duration: '200',
            },
        ],
        adverList: [
            {
                id: 1,
                text2: '更多>',
            },
        ],
    }
]


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
    res.send(JSON.stringify(videoAllList));
});
module.exports = router;