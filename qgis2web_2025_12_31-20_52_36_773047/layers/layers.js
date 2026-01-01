var wms_layers = [];

var format_populaion_region_0 = new ol.format.GeoJSON();
var features_populaion_region_0 = format_populaion_region_0.readFeatures(json_populaion_region_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_populaion_region_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_populaion_region_0.addFeatures(features_populaion_region_0);
var lyr_populaion_region_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_populaion_region_0, 
                style: style_populaion_region_0,
                popuplayertitle: 'populaion_region',
                interactive: true,
                title: '<img src="styles/legend/populaion_region_0.png" /> populaion_region'
            });

lyr_populaion_region_0.setVisible(true);
var layersList = [lyr_populaion_region_0];
lyr_populaion_region_0.set('fieldAliases', {'CODE_REGIO': 'CODE_REGIO', 'nom_region': 'nom_region', ' Marocains': ' Marocains', 'Etrangers': 'Etrangers', ' Populatio': ' Populatio', ' Menages': ' Menages', 'nom_arabe': 'nom_arabe', 'PortParRegion_Port': 'PortParRegion_Port', 'PortParRegion_Latitude': 'PortParRegion_Latitude', 'PortParRegion_Longitude': 'PortParRegion_Longitude', 'PortParRegion_Flotte totale (immatriculee)': 'PortParRegion_Flotte totale (immatriculee)', 'PortParRegion_Flotte active (operationnelle)': 'PortParRegion_Flotte active (operationnelle)', 'PortParRegion_Flotte inactive (d�duite)': 'PortParRegion_Flotte inactive (d�duite)', 'PortParRegion_Prod2019': 'PortParRegion_Prod2019', 'PortParRegion_Prod2020': 'PortParRegion_Prod2020', 'PortParRegion_Prod2021': 'PortParRegion_Prod2021', 'PortParRegion_Prod2022': 'PortParRegion_Prod2022', 'PortParRegion_Prod2023': 'PortParRegion_Prod2023', 'PortParRegion_Prod2024': 'PortParRegion_Prod2024', 'auxiliary_storage_diagram_show': 'auxiliary_storage_diagram_show', });
lyr_populaion_region_0.set('fieldImages', {'CODE_REGIO': 'TextEdit', 'nom_region': 'TextEdit', ' Marocains': 'TextEdit', 'Etrangers': 'TextEdit', ' Populatio': 'TextEdit', ' Menages': 'TextEdit', 'nom_arabe': 'TextEdit', 'PortParRegion_Port': 'TextEdit', 'PortParRegion_Latitude': 'TextEdit', 'PortParRegion_Longitude': 'TextEdit', 'PortParRegion_Flotte totale (immatriculee)': 'Range', 'PortParRegion_Flotte active (operationnelle)': 'Range', 'PortParRegion_Flotte inactive (d�duite)': 'Range', 'PortParRegion_Prod2019': '', 'PortParRegion_Prod2020': '', 'PortParRegion_Prod2021': '', 'PortParRegion_Prod2022': '', 'PortParRegion_Prod2023': '', 'PortParRegion_Prod2024': '', 'auxiliary_storage_diagram_show': 'Range', });
lyr_populaion_region_0.set('fieldLabels', {'CODE_REGIO': 'no label', 'nom_region': 'no label', ' Marocains': 'hidden field', 'Etrangers': 'header label - visible with data', ' Populatio': 'hidden field', ' Menages': 'hidden field', 'nom_arabe': 'no label', 'PortParRegion_Port': 'no label', 'PortParRegion_Latitude': 'hidden field', 'PortParRegion_Longitude': 'hidden field', 'PortParRegion_Flotte totale (immatriculee)': 'inline label - visible with data', 'PortParRegion_Flotte active (operationnelle)': 'inline label - visible with data', 'PortParRegion_Flotte inactive (d�duite)': 'inline label - visible with data', 'PortParRegion_Prod2019': 'hidden field', 'PortParRegion_Prod2020': 'hidden field', 'PortParRegion_Prod2021': 'hidden field', 'PortParRegion_Prod2022': 'hidden field', 'PortParRegion_Prod2023': 'hidden field', 'PortParRegion_Prod2024': 'hidden field', 'auxiliary_storage_diagram_show': 'hidden field', });
lyr_populaion_region_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});