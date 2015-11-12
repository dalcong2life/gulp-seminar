remark.macros.scale = function (percentage) {
    return '<img src="' + this + '" style="width: ' + percentage + '" />';
};

// [highlight language]
// javascript, ruby, python, bash, java, php, perl,
// cpp, objectivec, cs, sql, xml, css, scala,
// coffeescript, lisp, clojure, http

// [highlight style]
// arta, ascetic, dark,
// default,
// far, github, googlecode, idea,
// ir_black, magula, monokai, rainbow,
// solarized_dark, solarized_light, sunburst,
// tomorrow, tomorrow-night-blue,
// tomorrow-night-bright, tomorrow-night,
// tomorrow-night-eighties, vs, zenburn

var slideShow = remark.create({
    navigation: {
        scroll: false
    },
    sourceUrl: 'slide.md',
    highlightLanguage: 'javascript',
    highlightStyle: 'monokai',
    highlightLines: true
});




