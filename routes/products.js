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

/* 查询商品 */
router.get('/', function (req, res, next) {
    res.send(JSON.stringify(products));
});
/* 新建商品 */
router.post('/', function (req, res, next) {
    products = products.concat(req.body);
    res.send(JSON.stringify(products));
})
/* 更新商品 */
router.put('/:id', function (req, res, next) {
    for (var i = 0; i < products.length; i++) {
        if (products[i].id === parseInt(req.params.id)) {
            products[i] = req.body;
        }
    }
    res.send(JSON.stringify(products));
})
/* 删除商品 */
router.delete('/:id', function (req, res, next) {
    for (var i = 0; i < products.length; i++) {
        if (products[i].id === parseInt(req.params.id)) {
            products.splice(i, 1);
        }
    }
    res.send('Success');
});

module.exports = router;