require.config({
    paths: {
        parascroll: '../../resources/js/vendor/jquery.parascroll',
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
        },
        parascroll: {
            deps: ['jquery']
        }
    }
});

define(['jquery', 'jqueryAppear', 'bootstrap', 'less', 'parascroll'], function ($, jqueryAppear, bootstrap, less, parascroll) {

    $('.animate').appear(function () {
        $(this).addClass('animate_visible');
    });

    $('.parascroll').parascroll();


});

function initializeGoogleMap() {
    var myLatLng = {lat: -25.363, lng: 131.044};
    var map = new google.maps.Map(document.getElementById('map'), {
        center: myLatLng,
        scrollwheel: false,
        zoom: 4
    });
    var marker = new google.maps.Marker({
        map: map,
        position: myLatLng,
        title: 'Hello World!'
    });
}

google.maps.event.addDomListener(window, 'load', initializeGoogleMap);


