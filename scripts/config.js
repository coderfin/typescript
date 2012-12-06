/// <reference path="definitions/requirejs/require-2.1.d.ts" />
require.config({
    baseUrl: 'scripts',
    paths: {
        'underscore': //'underscore': '/scripts/lib/lodash.min', /* using lodash in place of underscore */
        //'backbone': '/scripts/lib/backbone.min',
        //'jquery': '/scripts/lib/jquery.min'
        '//cdnjs.cloudflare.com/ajax/libs/lodash.js/0.9.0/lodash.min',
        'backbone': /* using lodash in place of underscore */
        '//cdnjs.cloudflare.com/ajax/libs/backbone.js/0.9.2/backbone-min',
        'jquery': '//cdnjs.cloudflare.com/ajax/libs/jquery/1.8.2/jquery.min'
    },
    shim: {
        underscore: {
            exports: '_'
        },
        backbone: {
            deps: [
                'underscore', 
                'jquery'
            ],
            exports: 'Backbone'
        }
    }
});
//@ sourceMappingURL=config.js.map
