var wms_layers = [];

        var lyr_SatelitSaja_0 = new ol.layer.Tile({
            'title': 'Satelit Saja',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: '<a href=""></a>',
                url: 'http://mt0.google.com/vt/lyrs=s&hl=en&x={x}&y={y}&z={z}'
            })
        });
        var lyr_SatelitdanLabel_1 = new ol.layer.Tile({
            'title': 'Satelit dan Label',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: '<a href=""></a>',
                url: 'http://mt0.google.com/vt/lyrs=y&hl=en&x={x}&y={y}&z={z}'
            })
        });
        var lyr_PetaJalan_2 = new ol.layer.Tile({
            'title': 'Peta Jalan',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: '<a href=""></a>',
                url: 'http://mt0.google.com/vt/lyrs=m&hl=en&x={x}&y={y}&z={z}'
            })
        });
        var lyr_OpenStreetMap_3 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: '<a href=""></a>',
                url: 'http://a.tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });var format_KabupatenLandak_4 = new ol.format.GeoJSON();
var features_KabupatenLandak_4 = format_KabupatenLandak_4.readFeatures(json_KabupatenLandak_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KabupatenLandak_4 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_KabupatenLandak_4.addFeatures(features_KabupatenLandak_4);var lyr_KabupatenLandak_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_KabupatenLandak_4, 
                style: style_KabupatenLandak_4,
    title: 'Kabupaten Landak<br />\
    <img src="styles/legend/KabupatenLandak_4_0.png" /> BASE<br />\
    <img src="styles/legend/KabupatenLandak_4_1.png" /> CA<br />\
    <img src="styles/legend/KabupatenLandak_4_2.png" /> HL<br />\
    <img src="styles/legend/KabupatenLandak_4_3.png" /> HP<br />\
    <img src="styles/legend/KabupatenLandak_4_4.png" /> Pertanian Tanaman Pangan<br />\
    <img src="styles/legend/KabupatenLandak_4_5.png" /> Peruntukan Perkebunan<br />'
        });

lyr_SatelitSaja_0.setVisible(true);lyr_SatelitdanLabel_1.setVisible(true);lyr_PetaJalan_2.setVisible(true);lyr_OpenStreetMap_3.setVisible(true);lyr_KabupatenLandak_4.setVisible(true);
var layersList = [lyr_SatelitSaja_0,lyr_SatelitdanLabel_1,lyr_PetaJalan_2,lyr_OpenStreetMap_3,lyr_KabupatenLandak_4];
lyr_KabupatenLandak_4.set('fieldAliases', {'KET_PETA': 'KET_PETA', 'KABUPATEN': 'KABUPATEN', 'Luasan': 'Luasan', 'Gambar': 'Gambar', });
lyr_KabupatenLandak_4.set('fieldImages', {'KET_PETA': 'TextEdit', 'KABUPATEN': 'TextEdit', 'Luasan': 'TextEdit', 'Gambar': 'TextEdit', });
lyr_KabupatenLandak_4.set('fieldLabels', {'KET_PETA': 'header label', 'KABUPATEN': 'header label', 'Luasan': 'header label', 'Gambar': 'header label', });
lyr_KabupatenLandak_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});