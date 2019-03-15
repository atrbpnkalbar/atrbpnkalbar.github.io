var wms_layers = [];

        var lyr_Hybrid_0 = new ol.layer.Tile({
            'title': 'Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: '<a href=""></a>',
                url: 'http://mt0.google.com/vt/lyrs=y&hl=en&x={x}&y={y}&z={z}'
            })
        });
        var lyr_OpenStreetMap_1 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: '<a href=""></a>',
                url: 'http://a.tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });var format_Landak_2 = new ol.format.GeoJSON();
var features_Landak_2 = format_Landak_2.readFeatures(json_Landak_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Landak_2 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_Landak_2.addFeatures(features_Landak_2);var lyr_Landak_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Landak_2, 
                style: style_Landak_2,
    title: 'Landak<br />\
    <img src="styles/legend/Landak_2_0.png" /> <br />\
    <img src="styles/legend/Landak_2_1.png" /> BASE<br />\
    <img src="styles/legend/Landak_2_2.png" /> CA<br />\
    <img src="styles/legend/Landak_2_3.png" /> HL<br />\
    <img src="styles/legend/Landak_2_4.png" /> HP<br />\
    <img src="styles/legend/Landak_2_5.png" /> Pertanian Tanaman Pangan<br />\
    <img src="styles/legend/Landak_2_6.png" /> Peruntukan Perkebunan<br />'
        });

lyr_Hybrid_0.setVisible(true);lyr_OpenStreetMap_1.setVisible(true);lyr_Landak_2.setVisible(true);
var layersList = [lyr_Hybrid_0,lyr_OpenStreetMap_1,lyr_Landak_2];
lyr_Landak_2.set('fieldAliases', {'KET_PETA': 'KET_PETA', 'KABUPATEN': 'KABUPATEN', 'Luasan': 'Luasan', });
lyr_Landak_2.set('fieldImages', {'KET_PETA': 'TextEdit', 'KABUPATEN': 'TextEdit', 'Luasan': 'TextEdit', });
lyr_Landak_2.set('fieldLabels', {'KET_PETA': 'no label', 'KABUPATEN': 'no label', 'Luasan': 'no label', });
lyr_Landak_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});