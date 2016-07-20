// if you don't specify a html file, the sniper will generate a div with id "rootDiv"
// Small example.
var N = 25;
var K = 10;
var L = N / 1.5;
var X = 2;
var v = new Array(N).fill(0);
v[0] = 1;
v[1] = 1;
v[2] = 1;
v[3] = 1;
v[4] = 1;
v[6] = 1;

var app = require("mhg-js");
var instance = new app({
    el: rootDiv,
    text: 'mhg biojs',
    v:v, N:N, K:K, L:L, X:X,
    plot:1
});
