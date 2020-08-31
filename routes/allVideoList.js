var express = require('express');
var router = express.Router();
var allvideolist = [
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
    }
];
/* 查询商品 */
router.get('/', function (req, res, next) {
    console.log(JSON.stringify(allvideolist));
    res.send(JSON.stringify(allvideolist));
});

module.exports = router;