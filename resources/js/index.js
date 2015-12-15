require.config({
    paths: {
        jquery: '../../bower_components/jquery/dist/jquery.min',
        jqueryAppear: '../../bower_components/jquery.appear/jquery.appear',
        bootstrap: '../../bower_components/bootstrap/dist/js/bootstrap.min',
        less: '../../bower_components/less/dist/less.min'
    },
    shim: {
        bootstrap: {
            deps: ['jquery']
        },
        less: {
            deps: ['jquery']
        },
        jqueryAppear: {
            deps: ['jquery']
        },
        jquery: {
            exports: '$'
        }
    }
});

define(['jquery', 'jqueryAppear', 'bootstrap', 'less'], function ($, jqueryAppear, bootstrap, less) {

    $('.animate').appear(function () {
        $(this).addClass('animate_visible');
    });

});
