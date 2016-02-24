var h = require('virtual-dom/h');
var router = require('routes')();
module.exports = router;

router.addRoute('/', function (m) {
    return layout(m.state, h('div', 'welcome!'))
});

router.addRoute('/wow', function (m) {
    return layout(m.state, h('div', 'wowsers!'))
});

router.addRoute('/amaze', function (m) {
    return layout(m.state, h('div', [
        h('div', 'such universal javascript!'),
        h('div', 'very client server')
    ]))
});

function layout (state, page) {
    var links = [ '/', '/wow', '/amaze' ];
    var titles = {
        '/': 'home',
        '/wow': 'wow',
        '/amaze': 'amaze'
    };
    return h('div', [
        h('h1', titles[state.path]),
        h('div.links', links.map(function (href) {
            return h(
                'a' + (state.path === href ? '.active' : ''),
                { href: href },
                titles[href]
            )
        })),
        page
    ])
}