


Template.main.helpers({
    mapOptions: function () {
        if (GoogleMaps.loaded()) {
            return {
                center: new google.maps.LatLng(-37.8136, 144.9631),
                language: 'en',
                zoom: 13
            };
        }
    },
    isQueryDetails: function () {
        return typeof(Session.get("query_venues"))!=='undefined';
    }
});

Template.main.onCreated(function () {
    GoogleMaps.ready('map', function (map) {
        var geocoder = new google.maps.Geocoder();
        geocoder.geocode({ 'address': 'Tokyo, Japan' }, function (result, status) {
            if (status == google.maps.GeocoderStatus.OK) {
                GoogleMaps.maps.map.instance.setCenter(result[0].geometry.location);
            }
        });
    });
    
    Session.set('query_venues', undefined)
});
