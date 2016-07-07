// https://github.com/acterhd/hcg-color
// Made by acterhd, 2015-2016 year

(function () {
    'use strict';

    // RGB functions
    var rgb2hsl = (rgb) => {
        var [r, g, b] = [rgb[0] / 255, rgb[1] / 255, rgb[2] / 255];
        var [min, max] = [Math.min(r, g, b), Math.max(r, g, b)];
        var [h, c] = [0, max - min], l = (min + max) / 2, s = c / (1 - Math.abs(2 * l - 1));
        if (c > 0) {
            switch (max) {
                case r: h = (g - b) / c + (g < b ? 6 : 0); break;
                case g: h = (b - r) / c + 2; break;
                case b: h = (r - g) / c + 4; break;
            }
            h /= 6;
        }
        return [h * 360, s * 100, l * 100];
    };

    var hsl2rgb = (hsl) => {
        var mod = (a, n) => ((a % n) + n) % n;
        var [h, s, l] = [hsl[0] / 60, hsl[1] / 100, hsl[2] / 100], c = (1 - Math.abs(2 * l - 1)) * s;
        var [q, m] = [c * (1 - Math.abs((h % 2) - 1)), l - c / 2];
        var [md, arr] = [Math.floor(h) % 6, [c, q, 0, 0, q, c]];
        var [r, g, b] = [arr[mod(md, 6)], arr[mod(md - 2, 6)], arr[mod(md - 4, 6)]];
        return [(r + m) * 255, (g + m) * 255, (b + m) * 255];
    };

    // Exports
    var exports = this;

    // NodeJS support
    if (typeof module !== 'undefined') {
        exports = module.exports = {};
    }

    // RGB export
    exports.rgb2hsl = rgb2hsl;
    exports.hsl2rgb = hsl2rgb;

}).call(this);