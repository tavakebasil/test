var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_ANZHoniaraanz_honiara__1 = new ol.format.GeoJSON();
var features_ANZHoniaraanz_honiara__1 = format_ANZHoniaraanz_honiara__1.readFeatures(json_ANZHoniaraanz_honiara__1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ANZHoniaraanz_honiara__1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ANZHoniaraanz_honiara__1.addFeatures(features_ANZHoniaraanz_honiara__1);
var lyr_ANZHoniaraanz_honiara__1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ANZHoniaraanz_honiara__1, 
                style: style_ANZHoniaraanz_honiara__1,
                popuplayertitle: 'ANZ Honiara — anz_honiara_',
                interactive: true,
                title: '<img src="styles/legend/ANZHoniaraanz_honiara__1.png" /> ANZ Honiara — anz_honiara_'
            });

        var lyr_GoogleHybrid_2 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_BankofSouthPacificChoisuelbank_of_south_pacific_choisuel__3 = new ol.format.GeoJSON();
var features_BankofSouthPacificChoisuelbank_of_south_pacific_choisuel__3 = format_BankofSouthPacificChoisuelbank_of_south_pacific_choisuel__3.readFeatures(json_BankofSouthPacificChoisuelbank_of_south_pacific_choisuel__3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BankofSouthPacificChoisuelbank_of_south_pacific_choisuel__3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BankofSouthPacificChoisuelbank_of_south_pacific_choisuel__3.addFeatures(features_BankofSouthPacificChoisuelbank_of_south_pacific_choisuel__3);
var lyr_BankofSouthPacificChoisuelbank_of_south_pacific_choisuel__3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BankofSouthPacificChoisuelbank_of_south_pacific_choisuel__3, 
                style: style_BankofSouthPacificChoisuelbank_of_south_pacific_choisuel__3,
                popuplayertitle: 'Bank of South Pacific Choisuel — bank_of_south_pacific_choisuel_',
                interactive: true,
                title: '<img src="styles/legend/BankofSouthPacificChoisuelbank_of_south_pacific_choisuel__3.png" /> Bank of South Pacific Choisuel — bank_of_south_pacific_choisuel_'
            });
var format_ANZMundaanz_munda_4 = new ol.format.GeoJSON();
var features_ANZMundaanz_munda_4 = format_ANZMundaanz_munda_4.readFeatures(json_ANZMundaanz_munda_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ANZMundaanz_munda_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ANZMundaanz_munda_4.addFeatures(features_ANZMundaanz_munda_4);
var lyr_ANZMundaanz_munda_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ANZMundaanz_munda_4, 
                style: style_ANZMundaanz_munda_4,
                popuplayertitle: 'ANZ Munda — anz_munda',
                interactive: true,
                title: '<img src="styles/legend/ANZMundaanz_munda_4.png" /> ANZ Munda — anz_munda'
            });
var format_BankofSouthPacificGizobank_of_south_pacific_gizo_5 = new ol.format.GeoJSON();
var features_BankofSouthPacificGizobank_of_south_pacific_gizo_5 = format_BankofSouthPacificGizobank_of_south_pacific_gizo_5.readFeatures(json_BankofSouthPacificGizobank_of_south_pacific_gizo_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BankofSouthPacificGizobank_of_south_pacific_gizo_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BankofSouthPacificGizobank_of_south_pacific_gizo_5.addFeatures(features_BankofSouthPacificGizobank_of_south_pacific_gizo_5);
var lyr_BankofSouthPacificGizobank_of_south_pacific_gizo_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BankofSouthPacificGizobank_of_south_pacific_gizo_5, 
                style: style_BankofSouthPacificGizobank_of_south_pacific_gizo_5,
                popuplayertitle: 'Bank of South Pacific Gizo — bank_of_south_pacific_gizo',
                interactive: true,
                title: '<img src="styles/legend/BankofSouthPacificGizobank_of_south_pacific_gizo_5.png" /> Bank of South Pacific Gizo — bank_of_south_pacific_gizo'
            });
var format_BankofSouthPacificHoniarabank_of_south_pacific_honiara_6 = new ol.format.GeoJSON();
var features_BankofSouthPacificHoniarabank_of_south_pacific_honiara_6 = format_BankofSouthPacificHoniarabank_of_south_pacific_honiara_6.readFeatures(json_BankofSouthPacificHoniarabank_of_south_pacific_honiara_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BankofSouthPacificHoniarabank_of_south_pacific_honiara_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BankofSouthPacificHoniarabank_of_south_pacific_honiara_6.addFeatures(features_BankofSouthPacificHoniarabank_of_south_pacific_honiara_6);
var lyr_BankofSouthPacificHoniarabank_of_south_pacific_honiara_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BankofSouthPacificHoniarabank_of_south_pacific_honiara_6, 
                style: style_BankofSouthPacificHoniarabank_of_south_pacific_honiara_6,
                popuplayertitle: 'Bank of South Pacific Honiara — bank_of_south_pacific_honiara',
                interactive: true,
                title: '<img src="styles/legend/BankofSouthPacificHoniarabank_of_south_pacific_honiara_6.png" /> Bank of South Pacific Honiara — bank_of_south_pacific_honiara'
            });
var format_BankofSouthPacificMalaitabank_of_south_pacific_malaita___bank_of_south_pacific__malaita__bank_of_south_pacific_malaita_7 = new ol.format.GeoJSON();
var features_BankofSouthPacificMalaitabank_of_south_pacific_malaita___bank_of_south_pacific__malaita__bank_of_south_pacific_malaita_7 = format_BankofSouthPacificMalaitabank_of_south_pacific_malaita___bank_of_south_pacific__malaita__bank_of_south_pacific_malaita_7.readFeatures(json_BankofSouthPacificMalaitabank_of_south_pacific_malaita___bank_of_south_pacific__malaita__bank_of_south_pacific_malaita_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BankofSouthPacificMalaitabank_of_south_pacific_malaita___bank_of_south_pacific__malaita__bank_of_south_pacific_malaita_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BankofSouthPacificMalaitabank_of_south_pacific_malaita___bank_of_south_pacific__malaita__bank_of_south_pacific_malaita_7.addFeatures(features_BankofSouthPacificMalaitabank_of_south_pacific_malaita___bank_of_south_pacific__malaita__bank_of_south_pacific_malaita_7);
var lyr_BankofSouthPacificMalaitabank_of_south_pacific_malaita___bank_of_south_pacific__malaita__bank_of_south_pacific_malaita_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BankofSouthPacificMalaitabank_of_south_pacific_malaita___bank_of_south_pacific__malaita__bank_of_south_pacific_malaita_7, 
                style: style_BankofSouthPacificMalaitabank_of_south_pacific_malaita___bank_of_south_pacific__malaita__bank_of_south_pacific_malaita_7,
                popuplayertitle: 'Bank of South Pacific Malaita — bank_of_south_pacific_malaita___bank_of_south_pacific__malaita__bank_of_south_pacific_malaita',
                interactive: true,
                title: '<img src="styles/legend/BankofSouthPacificMalaitabank_of_south_pacific_malaita___bank_of_south_pacific__malaita__bank_of_south_pacific_malaita_7.png" /> Bank of South Pacific Malaita — bank_of_south_pacific_malaita___bank_of_south_pacific__malaita__bank_of_south_pacific_malaita'
            });
var format_BankofSouthPacificMundabank_of_south_pacific_munda_8 = new ol.format.GeoJSON();
var features_BankofSouthPacificMundabank_of_south_pacific_munda_8 = format_BankofSouthPacificMundabank_of_south_pacific_munda_8.readFeatures(json_BankofSouthPacificMundabank_of_south_pacific_munda_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BankofSouthPacificMundabank_of_south_pacific_munda_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BankofSouthPacificMundabank_of_south_pacific_munda_8.addFeatures(features_BankofSouthPacificMundabank_of_south_pacific_munda_8);
var lyr_BankofSouthPacificMundabank_of_south_pacific_munda_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BankofSouthPacificMundabank_of_south_pacific_munda_8, 
                style: style_BankofSouthPacificMundabank_of_south_pacific_munda_8,
                popuplayertitle: 'Bank of South Pacific Munda — bank_of_south_pacific_munda',
                interactive: true,
                title: '<img src="styles/legend/BankofSouthPacificMundabank_of_south_pacific_munda_8.png" /> Bank of South Pacific Munda — bank_of_south_pacific_munda'
            });
var format_BredBankHoniarabredbank_honiara_9 = new ol.format.GeoJSON();
var features_BredBankHoniarabredbank_honiara_9 = format_BredBankHoniarabredbank_honiara_9.readFeatures(json_BredBankHoniarabredbank_honiara_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BredBankHoniarabredbank_honiara_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BredBankHoniarabredbank_honiara_9.addFeatures(features_BredBankHoniarabredbank_honiara_9);
var lyr_BredBankHoniarabredbank_honiara_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BredBankHoniarabredbank_honiara_9, 
                style: style_BredBankHoniarabredbank_honiara_9,
                popuplayertitle: 'BredBank Honiara — bredbank_honiara',
                interactive: true,
                title: '<img src="styles/legend/BredBankHoniarabredbank_honiara_9.png" /> BredBank Honiara — bredbank_honiara'
            });
var format_BSPCentralTulagibsp_centraltulagi_10 = new ol.format.GeoJSON();
var features_BSPCentralTulagibsp_centraltulagi_10 = format_BSPCentralTulagibsp_centraltulagi_10.readFeatures(json_BSPCentralTulagibsp_centraltulagi_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BSPCentralTulagibsp_centraltulagi_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BSPCentralTulagibsp_centraltulagi_10.addFeatures(features_BSPCentralTulagibsp_centraltulagi_10);
var lyr_BSPCentralTulagibsp_centraltulagi_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BSPCentralTulagibsp_centraltulagi_10, 
                style: style_BSPCentralTulagibsp_centraltulagi_10,
                popuplayertitle: 'BSP Central(Tulagi) — bsp_centraltulagi',
                interactive: true,
                title: '<img src="styles/legend/BSPCentralTulagibsp_centraltulagi_10.png" /> BSP Central(Tulagi) — bsp_centraltulagi'
            });
var format_EziPeiGizoezi_pei_gizo_11 = new ol.format.GeoJSON();
var features_EziPeiGizoezi_pei_gizo_11 = format_EziPeiGizoezi_pei_gizo_11.readFeatures(json_EziPeiGizoezi_pei_gizo_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EziPeiGizoezi_pei_gizo_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EziPeiGizoezi_pei_gizo_11.addFeatures(features_EziPeiGizoezi_pei_gizo_11);
var lyr_EziPeiGizoezi_pei_gizo_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EziPeiGizoezi_pei_gizo_11, 
                style: style_EziPeiGizoezi_pei_gizo_11,
                popuplayertitle: 'Ezi Pei Gizo — ezi_pei_gizo',
                interactive: true,
                title: '<img src="styles/legend/EziPeiGizoezi_pei_gizo_11.png" /> Ezi Pei Gizo — ezi_pei_gizo'
            });
var format_EziPeiMalaitaezi_pei_malaita_12 = new ol.format.GeoJSON();
var features_EziPeiMalaitaezi_pei_malaita_12 = format_EziPeiMalaitaezi_pei_malaita_12.readFeatures(json_EziPeiMalaitaezi_pei_malaita_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EziPeiMalaitaezi_pei_malaita_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EziPeiMalaitaezi_pei_malaita_12.addFeatures(features_EziPeiMalaitaezi_pei_malaita_12);
var lyr_EziPeiMalaitaezi_pei_malaita_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EziPeiMalaitaezi_pei_malaita_12, 
                style: style_EziPeiMalaitaezi_pei_malaita_12,
                popuplayertitle: 'Ezi Pei Malaita — ezi_pei_malaita',
                interactive: true,
                title: '<img src="styles/legend/EziPeiMalaitaezi_pei_malaita_12.png" /> Ezi Pei Malaita — ezi_pei_malaita'
            });
var format_EzipeiPostCentralTulagiezipei_post_centraltulagi__13 = new ol.format.GeoJSON();
var features_EzipeiPostCentralTulagiezipei_post_centraltulagi__13 = format_EzipeiPostCentralTulagiezipei_post_centraltulagi__13.readFeatures(json_EzipeiPostCentralTulagiezipei_post_centraltulagi__13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EzipeiPostCentralTulagiezipei_post_centraltulagi__13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EzipeiPostCentralTulagiezipei_post_centraltulagi__13.addFeatures(features_EzipeiPostCentralTulagiezipei_post_centraltulagi__13);
var lyr_EzipeiPostCentralTulagiezipei_post_centraltulagi__13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EzipeiPostCentralTulagiezipei_post_centraltulagi__13, 
                style: style_EzipeiPostCentralTulagiezipei_post_centraltulagi__13,
                popuplayertitle: 'Ezipei Post Central(Tulagi) — ezipei_post_centraltulagi_',
                interactive: true,
                title: '<img src="styles/legend/EzipeiPostCentralTulagiezipei_post_centraltulagi__13.png" /> Ezipei Post Central(Tulagi) — ezipei_post_centraltulagi_'
            });
var format_MSelenCentralBigNgellabig_ngella__14 = new ol.format.GeoJSON();
var features_MSelenCentralBigNgellabig_ngella__14 = format_MSelenCentralBigNgellabig_ngella__14.readFeatures(json_MSelenCentralBigNgellabig_ngella__14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MSelenCentralBigNgellabig_ngella__14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MSelenCentralBigNgellabig_ngella__14.addFeatures(features_MSelenCentralBigNgellabig_ngella__14);
var lyr_MSelenCentralBigNgellabig_ngella__14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MSelenCentralBigNgellabig_ngella__14, 
                style: style_MSelenCentralBigNgellabig_ngella__14,
                popuplayertitle: 'M - Selen Central(Big Ngella) — big_ngella_',
                interactive: true,
                title: '<img src="styles/legend/MSelenCentralBigNgellabig_ngella__14.png" /> M - Selen Central(Big Ngella) — big_ngella_'
            });
var format_MSelenCentralSmallNgellasmall_ngella_15 = new ol.format.GeoJSON();
var features_MSelenCentralSmallNgellasmall_ngella_15 = format_MSelenCentralSmallNgellasmall_ngella_15.readFeatures(json_MSelenCentralSmallNgellasmall_ngella_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MSelenCentralSmallNgellasmall_ngella_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MSelenCentralSmallNgellasmall_ngella_15.addFeatures(features_MSelenCentralSmallNgellasmall_ngella_15);
var lyr_MSelenCentralSmallNgellasmall_ngella_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MSelenCentralSmallNgellasmall_ngella_15, 
                style: style_MSelenCentralSmallNgellasmall_ngella_15,
                popuplayertitle: 'M - Selen Central(Small Ngella) — small_ngella',
                interactive: true,
                title: '<img src="styles/legend/MSelenCentralSmallNgellasmall_ngella_15.png" /> M - Selen Central(Small Ngella) — small_ngella'
            });
var format_MSelenChoisuelmselen_choisuel__16 = new ol.format.GeoJSON();
var features_MSelenChoisuelmselen_choisuel__16 = format_MSelenChoisuelmselen_choisuel__16.readFeatures(json_MSelenChoisuelmselen_choisuel__16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MSelenChoisuelmselen_choisuel__16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MSelenChoisuelmselen_choisuel__16.addFeatures(features_MSelenChoisuelmselen_choisuel__16);
var lyr_MSelenChoisuelmselen_choisuel__16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MSelenChoisuelmselen_choisuel__16, 
                style: style_MSelenChoisuelmselen_choisuel__16,
                popuplayertitle: 'M - Selen Choisuel — mselen_choisuel_',
                interactive: true,
                title: '<img src="styles/legend/MSelenChoisuelmselen_choisuel__16.png" /> M - Selen Choisuel — mselen_choisuel_'
            });
var format_MSelenGizomselen_gizo_17 = new ol.format.GeoJSON();
var features_MSelenGizomselen_gizo_17 = format_MSelenGizomselen_gizo_17.readFeatures(json_MSelenGizomselen_gizo_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MSelenGizomselen_gizo_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MSelenGizomselen_gizo_17.addFeatures(features_MSelenGizomselen_gizo_17);
var lyr_MSelenGizomselen_gizo_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MSelenGizomselen_gizo_17, 
                style: style_MSelenGizomselen_gizo_17,
                popuplayertitle: 'M- Selen Gizo — mselen_gizo',
                interactive: true,
                title: '<img src="styles/legend/MSelenGizomselen_gizo_17.png" /> M- Selen Gizo — mselen_gizo'
            });
var format_MSelenMalaitamselen_malaita_18 = new ol.format.GeoJSON();
var features_MSelenMalaitamselen_malaita_18 = format_MSelenMalaitamselen_malaita_18.readFeatures(json_MSelenMalaitamselen_malaita_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MSelenMalaitamselen_malaita_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MSelenMalaitamselen_malaita_18.addFeatures(features_MSelenMalaitamselen_malaita_18);
var lyr_MSelenMalaitamselen_malaita_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MSelenMalaitamselen_malaita_18, 
                style: style_MSelenMalaitamselen_malaita_18,
                popuplayertitle: 'M- Selen Malaita — mselen_malaita',
                interactive: true,
                title: '<img src="styles/legend/MSelenMalaitamselen_malaita_18.png" /> M- Selen Malaita — mselen_malaita'
            });
var format_MSelenNoromselen_noro_19 = new ol.format.GeoJSON();
var features_MSelenNoromselen_noro_19 = format_MSelenNoromselen_noro_19.readFeatures(json_MSelenNoromselen_noro_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MSelenNoromselen_noro_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MSelenNoromselen_noro_19.addFeatures(features_MSelenNoromselen_noro_19);
var lyr_MSelenNoromselen_noro_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MSelenNoromselen_noro_19, 
                style: style_MSelenNoromselen_noro_19,
                popuplayertitle: 'M- Selen Noro — mselen_noro',
                interactive: true,
                title: '<img src="styles/legend/MSelenNoromselen_noro_19.png" /> M- Selen Noro — mselen_noro'
            });
var format_MSelenRenbelmselen_renbel_20 = new ol.format.GeoJSON();
var features_MSelenRenbelmselen_renbel_20 = format_MSelenRenbelmselen_renbel_20.readFeatures(json_MSelenRenbelmselen_renbel_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MSelenRenbelmselen_renbel_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MSelenRenbelmselen_renbel_20.addFeatures(features_MSelenRenbelmselen_renbel_20);
var lyr_MSelenRenbelmselen_renbel_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MSelenRenbelmselen_renbel_20, 
                style: style_MSelenRenbelmselen_renbel_20,
                popuplayertitle: 'M- Selen Renbel — mselen_renbel',
                interactive: true,
                title: '<img src="styles/legend/MSelenRenbelmselen_renbel_20.png" /> M- Selen Renbel — mselen_renbel'
            });
var format_MSelenHoniaramselen_honiara_21 = new ol.format.GeoJSON();
var features_MSelenHoniaramselen_honiara_21 = format_MSelenHoniaramselen_honiara_21.readFeatures(json_MSelenHoniaramselen_honiara_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MSelenHoniaramselen_honiara_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MSelenHoniaramselen_honiara_21.addFeatures(features_MSelenHoniaramselen_honiara_21);
var lyr_MSelenHoniaramselen_honiara_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MSelenHoniaramselen_honiara_21, 
                style: style_MSelenHoniaramselen_honiara_21,
                popuplayertitle: 'M-Selen Honiara — mselen_honiara',
                interactive: true,
                title: '<img src="styles/legend/MSelenHoniaramselen_honiara_21.png" /> M-Selen Honiara — mselen_honiara'
            });
var format_MSelenMundamselen_munda_22 = new ol.format.GeoJSON();
var features_MSelenMundamselen_munda_22 = format_MSelenMundamselen_munda_22.readFeatures(json_MSelenMundamselen_munda_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MSelenMundamselen_munda_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MSelenMundamselen_munda_22.addFeatures(features_MSelenMundamselen_munda_22);
var lyr_MSelenMundamselen_munda_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MSelenMundamselen_munda_22, 
                style: style_MSelenMundamselen_munda_22,
                popuplayertitle: 'M-Selen Munda — mselen_munda',
                interactive: true,
                title: '<img src="styles/legend/MSelenMundamselen_munda_22.png" /> M-Selen Munda — mselen_munda'
            });
var format_SolomonPostOfficeBranchChoisuelsolomon_post_office_branch_choisuel__23 = new ol.format.GeoJSON();
var features_SolomonPostOfficeBranchChoisuelsolomon_post_office_branch_choisuel__23 = format_SolomonPostOfficeBranchChoisuelsolomon_post_office_branch_choisuel__23.readFeatures(json_SolomonPostOfficeBranchChoisuelsolomon_post_office_branch_choisuel__23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SolomonPostOfficeBranchChoisuelsolomon_post_office_branch_choisuel__23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SolomonPostOfficeBranchChoisuelsolomon_post_office_branch_choisuel__23.addFeatures(features_SolomonPostOfficeBranchChoisuelsolomon_post_office_branch_choisuel__23);
var lyr_SolomonPostOfficeBranchChoisuelsolomon_post_office_branch_choisuel__23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SolomonPostOfficeBranchChoisuelsolomon_post_office_branch_choisuel__23, 
                style: style_SolomonPostOfficeBranchChoisuelsolomon_post_office_branch_choisuel__23,
                popuplayertitle: 'Solomon Post Office Branch Choisuel — solomon_post_office_branch_choisuel_',
                interactive: true,
                title: '<img src="styles/legend/SolomonPostOfficeBranchChoisuelsolomon_post_office_branch_choisuel__23.png" /> Solomon Post Office Branch Choisuel — solomon_post_office_branch_choisuel_'
            });
var format_ANZGizoanz_gizo_24 = new ol.format.GeoJSON();
var features_ANZGizoanz_gizo_24 = format_ANZGizoanz_gizo_24.readFeatures(json_ANZGizoanz_gizo_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ANZGizoanz_gizo_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ANZGizoanz_gizo_24.addFeatures(features_ANZGizoanz_gizo_24);
var lyr_ANZGizoanz_gizo_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ANZGizoanz_gizo_24, 
                style: style_ANZGizoanz_gizo_24,
                popuplayertitle: 'ANZ Gizo — anz_gizo',
                interactive: true,
                title: '<img src="styles/legend/ANZGizoanz_gizo_24.png" /> ANZ Gizo — anz_gizo'
            });
var format_AelanDigitalaelan_digital_25 = new ol.format.GeoJSON();
var features_AelanDigitalaelan_digital_25 = format_AelanDigitalaelan_digital_25.readFeatures(json_AelanDigitalaelan_digital_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AelanDigitalaelan_digital_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AelanDigitalaelan_digital_25.addFeatures(features_AelanDigitalaelan_digital_25);
var lyr_AelanDigitalaelan_digital_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AelanDigitalaelan_digital_25, 
                style: style_AelanDigitalaelan_digital_25,
                popuplayertitle: 'Aelan Digital — aelan_digital',
                interactive: true,
                title: '<img src="styles/legend/AelanDigitalaelan_digital_25.png" /> Aelan Digital — aelan_digital'
            });
var format_ANZCentralTulagianz_centraltulagi__26 = new ol.format.GeoJSON();
var features_ANZCentralTulagianz_centraltulagi__26 = format_ANZCentralTulagianz_centraltulagi__26.readFeatures(json_ANZCentralTulagianz_centraltulagi__26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ANZCentralTulagianz_centraltulagi__26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ANZCentralTulagianz_centraltulagi__26.addFeatures(features_ANZCentralTulagianz_centraltulagi__26);
var lyr_ANZCentralTulagianz_centraltulagi__26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ANZCentralTulagianz_centraltulagi__26, 
                style: style_ANZCentralTulagianz_centraltulagi__26,
                popuplayertitle: 'ANZ Central(Tulagi) — anz_centraltulagi_',
                interactive: true,
                title: '<img src="styles/legend/ANZCentralTulagianz_centraltulagi__26.png" /> ANZ Central(Tulagi) — anz_centraltulagi_'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_ANZHoniaraanz_honiara__1.setVisible(true);lyr_GoogleHybrid_2.setVisible(true);lyr_BankofSouthPacificChoisuelbank_of_south_pacific_choisuel__3.setVisible(true);lyr_ANZMundaanz_munda_4.setVisible(true);lyr_BankofSouthPacificGizobank_of_south_pacific_gizo_5.setVisible(true);lyr_BankofSouthPacificHoniarabank_of_south_pacific_honiara_6.setVisible(true);lyr_BankofSouthPacificMalaitabank_of_south_pacific_malaita___bank_of_south_pacific__malaita__bank_of_south_pacific_malaita_7.setVisible(true);lyr_BankofSouthPacificMundabank_of_south_pacific_munda_8.setVisible(true);lyr_BredBankHoniarabredbank_honiara_9.setVisible(true);lyr_BSPCentralTulagibsp_centraltulagi_10.setVisible(true);lyr_EziPeiGizoezi_pei_gizo_11.setVisible(true);lyr_EziPeiMalaitaezi_pei_malaita_12.setVisible(true);lyr_EzipeiPostCentralTulagiezipei_post_centraltulagi__13.setVisible(true);lyr_MSelenCentralBigNgellabig_ngella__14.setVisible(true);lyr_MSelenCentralSmallNgellasmall_ngella_15.setVisible(true);lyr_MSelenChoisuelmselen_choisuel__16.setVisible(true);lyr_MSelenGizomselen_gizo_17.setVisible(true);lyr_MSelenMalaitamselen_malaita_18.setVisible(true);lyr_MSelenNoromselen_noro_19.setVisible(true);lyr_MSelenRenbelmselen_renbel_20.setVisible(true);lyr_MSelenHoniaramselen_honiara_21.setVisible(true);lyr_MSelenMundamselen_munda_22.setVisible(true);lyr_SolomonPostOfficeBranchChoisuelsolomon_post_office_branch_choisuel__23.setVisible(true);lyr_ANZGizoanz_gizo_24.setVisible(true);lyr_AelanDigitalaelan_digital_25.setVisible(true);lyr_ANZCentralTulagianz_centraltulagi__26.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_ANZHoniaraanz_honiara__1,lyr_GoogleHybrid_2,lyr_BankofSouthPacificChoisuelbank_of_south_pacific_choisuel__3,lyr_ANZMundaanz_munda_4,lyr_BankofSouthPacificGizobank_of_south_pacific_gizo_5,lyr_BankofSouthPacificHoniarabank_of_south_pacific_honiara_6,lyr_BankofSouthPacificMalaitabank_of_south_pacific_malaita___bank_of_south_pacific__malaita__bank_of_south_pacific_malaita_7,lyr_BankofSouthPacificMundabank_of_south_pacific_munda_8,lyr_BredBankHoniarabredbank_honiara_9,lyr_BSPCentralTulagibsp_centraltulagi_10,lyr_EziPeiGizoezi_pei_gizo_11,lyr_EziPeiMalaitaezi_pei_malaita_12,lyr_EzipeiPostCentralTulagiezipei_post_centraltulagi__13,lyr_MSelenCentralBigNgellabig_ngella__14,lyr_MSelenCentralSmallNgellasmall_ngella_15,lyr_MSelenChoisuelmselen_choisuel__16,lyr_MSelenGizomselen_gizo_17,lyr_MSelenMalaitamselen_malaita_18,lyr_MSelenNoromselen_noro_19,lyr_MSelenRenbelmselen_renbel_20,lyr_MSelenHoniaramselen_honiara_21,lyr_MSelenMundamselen_munda_22,lyr_SolomonPostOfficeBranchChoisuelsolomon_post_office_branch_choisuel__23,lyr_ANZGizoanz_gizo_24,lyr_AelanDigitalaelan_digital_25,lyr_ANZCentralTulagianz_centraltulagi__26];
lyr_ANZHoniaraanz_honiara__1.set('fieldAliases', {'fid': 'fid', 'ANZ   BRANCHES': 'ANZ   BRANCHES', 'TYPE OF BRANCHE': 'TYPE OF BRANCHE', 'STREET ADDRESS & CITY': 'STREET ADDRESS & CITY', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_BankofSouthPacificChoisuelbank_of_south_pacific_choisuel__3.set('fieldAliases', {'fid': 'fid', 'NAME': 'NAME', 'Access type': 'Access type', 'Location': 'Location', 'Province': 'Province', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_ANZMundaanz_munda_4.set('fieldAliases', {'fid': 'fid', 'Merchant Name': 'Merchant Name', 'Location': 'Location', 'Physical Sreet Address - Location': 'Physical Sreet Address - Location', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_BankofSouthPacificGizobank_of_south_pacific_gizo_5.set('fieldAliases', {'fid': 'fid', 'BSP BRANCHES': 'BSP BRANCHES', 'STREET ADDRESS & CITY': 'STREET ADDRESS & CITY', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_BankofSouthPacificHoniarabank_of_south_pacific_honiara_6.set('fieldAliases', {'fid': 'fid', 'BSP BRANCHES': 'BSP BRANCHES', 'STREET ADDRESS & CITY': 'STREET ADDRESS & CITY', 'TYPE OF BRANCHE': 'TYPE OF BRANCHE', 'LATITUDE': 'LATITUDE', 'LONGITUDE': 'LONGITUDE', });
lyr_BankofSouthPacificMalaitabank_of_south_pacific_malaita___bank_of_south_pacific__malaita__bank_of_south_pacific_malaita_7.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'Access type': 'Access type', 'Location': 'Location', 'Province': 'Province', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_BankofSouthPacificMundabank_of_south_pacific_munda_8.set('fieldAliases', {'fid': 'fid', 'BSP BRANCHES': 'BSP BRANCHES', 'STREET ADDRESS & CITY': 'STREET ADDRESS & CITY', 'field_3': 'field_3', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_BredBankHoniarabredbank_honiara_9.set('fieldAliases', {'fid': 'fid', 'PROVINCES': 'PROVINCES', 'Bred    BRANCHES': 'Bred    BRANCHES', 'Type of Branche': 'Type of Branche', 'STREET ADDRESS & CITY': 'STREET ADDRESS & CITY', 'LATITUDE': 'LATITUDE', 'LONGITUDE': 'LONGITUDE', });
lyr_BSPCentralTulagibsp_centraltulagi_10.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'Type': 'Type', 'Location': 'Location', 'Province': 'Province', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_EziPeiGizoezi_pei_gizo_11.set('fieldAliases', {'fid': 'fid', 'Agent Name': 'Agent Name', 'Location': 'Location', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_EziPeiMalaitaezi_pei_malaita_12.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'Access type': 'Access type', 'Location': 'Location', 'Province': 'Province', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_EzipeiPostCentralTulagiezipei_post_centraltulagi__13.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'Type': 'Type', 'Location': 'Location', 'Province': 'Province', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_MSelenCentralBigNgellabig_ngella__14.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'Type': 'Type', 'Location': 'Location', 'Province': 'Province', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_MSelenCentralSmallNgellasmall_ngella_15.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'Type': 'Type', 'Location': 'Location', 'Province': 'Province', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_MSelenChoisuelmselen_choisuel__16.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'Access type': 'Access type', 'Location': 'Location', 'Province': 'Province', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_MSelenGizomselen_gizo_17.set('fieldAliases', {'fid': 'fid', 'Agent Type': 'Agent Type', 'Agent Business Name': 'Agent Business Name', 'Physical Address': 'Physical Address', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_MSelenMalaitamselen_malaita_18.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'Access type': 'Access type', 'Location': 'Location', 'Province': 'Province', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_MSelenNoromselen_noro_19.set('fieldAliases', {'fid': 'fid', 'Agent Type': 'Agent Type', 'Agent Business Name': 'Agent Business Name', 'Physical Address': 'Physical Address', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_MSelenRenbelmselen_renbel_20.set('fieldAliases', {'fid': 'fid', 'NAME': 'NAME', 'Access type': 'Access type', 'Location': 'Location', 'Province': 'Province', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_MSelenHoniaramselen_honiara_21.set('fieldAliases', {'fid': 'fid', 'Agent Type': 'Agent Type', 'Agent Busi': 'Agent Busi', 'Physical A': 'Physical A', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_MSelenMundamselen_munda_22.set('fieldAliases', {'fid': 'fid', 'Agent Type': 'Agent Type', 'Agent Business Name': 'Agent Business Name', 'Physical Address': 'Physical Address', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_SolomonPostOfficeBranchChoisuelsolomon_post_office_branch_choisuel__23.set('fieldAliases', {'fid': 'fid', 'NAME': 'NAME', 'Access type': 'Access type', 'Location': 'Location', 'Province': 'Province', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_ANZGizoanz_gizo_24.set('fieldAliases', {'fid': 'fid', 'Merchant Name': 'Merchant Name', 'Location': 'Location', 'Physical Sreet Address - Location': 'Physical Sreet Address - Location', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_AelanDigitalaelan_digital_25.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'Status': 'Status', 'Location': 'Location', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_ANZCentralTulagianz_centraltulagi__26.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'Type': 'Type', 'Location': 'Location', 'Province': 'Province', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_ANZHoniaraanz_honiara__1.set('fieldImages', {'fid': 'TextEdit', 'ANZ   BRANCHES': 'TextEdit', 'TYPE OF BRANCHE': 'TextEdit', 'STREET ADDRESS & CITY': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_BankofSouthPacificChoisuelbank_of_south_pacific_choisuel__3.set('fieldImages', {'fid': 'TextEdit', 'NAME': 'TextEdit', 'Access type': 'TextEdit', 'Location': 'TextEdit', 'Province': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_ANZMundaanz_munda_4.set('fieldImages', {'fid': 'TextEdit', 'Merchant Name': 'TextEdit', 'Location': 'TextEdit', 'Physical Sreet Address - Location': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_BankofSouthPacificGizobank_of_south_pacific_gizo_5.set('fieldImages', {'fid': 'TextEdit', 'BSP BRANCHES': 'TextEdit', 'STREET ADDRESS & CITY': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_BankofSouthPacificHoniarabank_of_south_pacific_honiara_6.set('fieldImages', {'fid': 'TextEdit', 'BSP BRANCHES': 'TextEdit', 'STREET ADDRESS & CITY': 'TextEdit', 'TYPE OF BRANCHE': 'TextEdit', 'LATITUDE': 'TextEdit', 'LONGITUDE': 'TextEdit', });
lyr_BankofSouthPacificMalaitabank_of_south_pacific_malaita___bank_of_south_pacific__malaita__bank_of_south_pacific_malaita_7.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'Access type': 'TextEdit', 'Location': 'TextEdit', 'Province': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_BankofSouthPacificMundabank_of_south_pacific_munda_8.set('fieldImages', {'fid': 'TextEdit', 'BSP BRANCHES': 'TextEdit', 'STREET ADDRESS & CITY': 'TextEdit', 'field_3': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_BredBankHoniarabredbank_honiara_9.set('fieldImages', {'fid': 'TextEdit', 'PROVINCES': 'TextEdit', 'Bred    BRANCHES': 'TextEdit', 'Type of Branche': 'TextEdit', 'STREET ADDRESS & CITY': 'TextEdit', 'LATITUDE': 'TextEdit', 'LONGITUDE': 'TextEdit', });
lyr_BSPCentralTulagibsp_centraltulagi_10.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'Type': 'TextEdit', 'Location': 'TextEdit', 'Province': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_EziPeiGizoezi_pei_gizo_11.set('fieldImages', {'fid': 'TextEdit', 'Agent Name': 'TextEdit', 'Location': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_EziPeiMalaitaezi_pei_malaita_12.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'Access type': 'TextEdit', 'Location': 'TextEdit', 'Province': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_EzipeiPostCentralTulagiezipei_post_centraltulagi__13.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'Type': 'TextEdit', 'Location': 'TextEdit', 'Province': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_MSelenCentralBigNgellabig_ngella__14.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'Type': 'TextEdit', 'Location': 'TextEdit', 'Province': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_MSelenCentralSmallNgellasmall_ngella_15.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'Type': 'TextEdit', 'Location': 'TextEdit', 'Province': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_MSelenChoisuelmselen_choisuel__16.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'Access type': 'TextEdit', 'Location': 'TextEdit', 'Province': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_MSelenGizomselen_gizo_17.set('fieldImages', {'fid': 'TextEdit', 'Agent Type': 'TextEdit', 'Agent Business Name': 'TextEdit', 'Physical Address': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_MSelenMalaitamselen_malaita_18.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'Access type': 'TextEdit', 'Location': 'TextEdit', 'Province': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_MSelenNoromselen_noro_19.set('fieldImages', {'fid': 'TextEdit', 'Agent Type': 'TextEdit', 'Agent Business Name': 'TextEdit', 'Physical Address': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_MSelenRenbelmselen_renbel_20.set('fieldImages', {'fid': 'TextEdit', 'NAME': 'TextEdit', 'Access type': 'TextEdit', 'Location': 'TextEdit', 'Province': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_MSelenHoniaramselen_honiara_21.set('fieldImages', {'fid': 'TextEdit', 'Agent Type': 'TextEdit', 'Agent Busi': 'TextEdit', 'Physical A': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_MSelenMundamselen_munda_22.set('fieldImages', {'fid': 'TextEdit', 'Agent Type': 'TextEdit', 'Agent Business Name': 'TextEdit', 'Physical Address': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_SolomonPostOfficeBranchChoisuelsolomon_post_office_branch_choisuel__23.set('fieldImages', {'fid': 'TextEdit', 'NAME': 'TextEdit', 'Access type': 'TextEdit', 'Location': 'TextEdit', 'Province': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_ANZGizoanz_gizo_24.set('fieldImages', {'fid': 'TextEdit', 'Merchant Name': 'TextEdit', 'Location': 'TextEdit', 'Physical Sreet Address - Location': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_AelanDigitalaelan_digital_25.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'Status': 'TextEdit', 'Location': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_ANZCentralTulagianz_centraltulagi__26.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'Type': 'TextEdit', 'Location': 'TextEdit', 'Province': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_ANZHoniaraanz_honiara__1.set('fieldLabels', {'fid': 'inline label - always visible', 'ANZ   BRANCHES': 'inline label - always visible', 'TYPE OF BRANCHE': 'inline label - always visible', 'STREET ADDRESS & CITY': 'inline label - always visible', 'Latitude': 'inline label - always visible', 'Longitude': 'inline label - always visible', });
lyr_BankofSouthPacificChoisuelbank_of_south_pacific_choisuel__3.set('fieldLabels', {'fid': 'inline label - always visible', 'NAME': 'inline label - always visible', 'Access type': 'inline label - always visible', 'Location': 'inline label - always visible', 'Province': 'inline label - always visible', 'Latitude': 'inline label - always visible', 'Longitude': 'inline label - always visible', });
lyr_ANZMundaanz_munda_4.set('fieldLabels', {'fid': 'inline label - always visible', 'Merchant Name': 'inline label - always visible', 'Location': 'inline label - always visible', 'Physical Sreet Address - Location': 'inline label - always visible', 'Latitude': 'inline label - always visible', 'Longitude': 'inline label - always visible', });
lyr_BankofSouthPacificGizobank_of_south_pacific_gizo_5.set('fieldLabels', {'fid': 'inline label - always visible', 'BSP BRANCHES': 'inline label - always visible', 'STREET ADDRESS & CITY': 'inline label - always visible', 'Latitude': 'inline label - always visible', 'Longitude': 'inline label - always visible', });
lyr_BankofSouthPacificHoniarabank_of_south_pacific_honiara_6.set('fieldLabels', {'fid': 'inline label - always visible', 'BSP BRANCHES': 'inline label - always visible', 'STREET ADDRESS & CITY': 'inline label - always visible', 'TYPE OF BRANCHE': 'inline label - always visible', 'LATITUDE': 'inline label - always visible', 'LONGITUDE': 'inline label - always visible', });
lyr_BankofSouthPacificMalaitabank_of_south_pacific_malaita___bank_of_south_pacific__malaita__bank_of_south_pacific_malaita_7.set('fieldLabels', {'fid': 'inline label - always visible', 'Name': 'inline label - always visible', 'Access type': 'inline label - always visible', 'Location': 'inline label - always visible', 'Province': 'inline label - always visible', 'Latitude': 'inline label - always visible', 'Longitude': 'inline label - always visible', });
lyr_BankofSouthPacificMundabank_of_south_pacific_munda_8.set('fieldLabels', {'fid': 'inline label - always visible', 'BSP BRANCHES': 'inline label - always visible', 'STREET ADDRESS & CITY': 'inline label - always visible', 'field_3': 'inline label - always visible', 'Latitude': 'inline label - always visible', 'Longitude': 'inline label - always visible', });
lyr_BredBankHoniarabredbank_honiara_9.set('fieldLabels', {'fid': 'inline label - always visible', 'PROVINCES': 'inline label - always visible', 'Bred    BRANCHES': 'inline label - always visible', 'Type of Branche': 'inline label - always visible', 'STREET ADDRESS & CITY': 'inline label - always visible', 'LATITUDE': 'inline label - always visible', 'LONGITUDE': 'inline label - always visible', });
lyr_BSPCentralTulagibsp_centraltulagi_10.set('fieldLabels', {'fid': 'inline label - always visible', 'Name': 'inline label - always visible', 'Type': 'inline label - always visible', 'Location': 'inline label - always visible', 'Province': 'inline label - always visible', 'Latitude': 'inline label - always visible', 'Longitude': 'inline label - always visible', });
lyr_EziPeiGizoezi_pei_gizo_11.set('fieldLabels', {'fid': 'inline label - always visible', 'Agent Name': 'inline label - always visible', 'Location': 'inline label - always visible', 'Latitude': 'inline label - always visible', 'Longitude': 'inline label - always visible', });
lyr_EziPeiMalaitaezi_pei_malaita_12.set('fieldLabels', {'fid': 'inline label - always visible', 'Name': 'inline label - always visible', 'Access type': 'inline label - always visible', 'Location': 'inline label - always visible', 'Province': 'inline label - always visible', 'Latitude': 'inline label - always visible', 'Longitude': 'inline label - always visible', });
lyr_EzipeiPostCentralTulagiezipei_post_centraltulagi__13.set('fieldLabels', {'fid': 'inline label - always visible', 'Name': 'inline label - always visible', 'Type': 'inline label - always visible', 'Location': 'inline label - always visible', 'Province': 'inline label - always visible', 'Latitude': 'inline label - always visible', 'Longitude': 'inline label - always visible', });
lyr_MSelenCentralBigNgellabig_ngella__14.set('fieldLabels', {'fid': 'inline label - always visible', 'Name': 'inline label - always visible', 'Type': 'inline label - always visible', 'Location': 'inline label - always visible', 'Province': 'inline label - always visible', 'Latitude': 'inline label - always visible', 'Longitude': 'inline label - always visible', });
lyr_MSelenCentralSmallNgellasmall_ngella_15.set('fieldLabels', {'fid': 'inline label - always visible', 'Name': 'inline label - always visible', 'Type': 'inline label - always visible', 'Location': 'inline label - always visible', 'Province': 'inline label - always visible', 'Latitude': 'inline label - always visible', 'Longitude': 'inline label - always visible', });
lyr_MSelenChoisuelmselen_choisuel__16.set('fieldLabels', {'fid': 'inline label - always visible', 'Name': 'inline label - always visible', 'Access type': 'inline label - always visible', 'Location': 'inline label - always visible', 'Province': 'inline label - always visible', 'Latitude': 'inline label - always visible', 'Longitude': 'inline label - always visible', });
lyr_MSelenGizomselen_gizo_17.set('fieldLabels', {'fid': 'inline label - always visible', 'Agent Type': 'inline label - always visible', 'Agent Business Name': 'inline label - always visible', 'Physical Address': 'inline label - always visible', 'Latitude': 'inline label - always visible', 'Longitude': 'inline label - always visible', });
lyr_MSelenMalaitamselen_malaita_18.set('fieldLabels', {'fid': 'inline label - always visible', 'Name': 'inline label - always visible', 'Access type': 'inline label - always visible', 'Location': 'inline label - always visible', 'Province': 'inline label - always visible', 'Latitude': 'inline label - always visible', 'Longitude': 'inline label - always visible', });
lyr_MSelenNoromselen_noro_19.set('fieldLabels', {'fid': 'inline label - always visible', 'Agent Type': 'inline label - always visible', 'Agent Business Name': 'inline label - always visible', 'Physical Address': 'inline label - always visible', 'Latitude': 'inline label - always visible', 'Longitude': 'inline label - always visible', });
lyr_MSelenRenbelmselen_renbel_20.set('fieldLabels', {'fid': 'inline label - always visible', 'NAME': 'inline label - always visible', 'Access type': 'inline label - always visible', 'Location': 'inline label - always visible', 'Province': 'inline label - always visible', 'Latitude': 'inline label - always visible', 'Longitude': 'inline label - always visible', });
lyr_MSelenHoniaramselen_honiara_21.set('fieldLabels', {'fid': 'inline label - always visible', 'Agent Type': 'inline label - always visible', 'Agent Busi': 'inline label - always visible', 'Physical A': 'inline label - always visible', 'Latitude': 'inline label - always visible', 'Longitude': 'inline label - always visible', });
lyr_MSelenMundamselen_munda_22.set('fieldLabels', {'fid': 'inline label - always visible', 'Agent Type': 'inline label - always visible', 'Agent Business Name': 'inline label - always visible', 'Physical Address': 'inline label - always visible', 'Latitude': 'inline label - always visible', 'Longitude': 'inline label - always visible', });
lyr_SolomonPostOfficeBranchChoisuelsolomon_post_office_branch_choisuel__23.set('fieldLabels', {'fid': 'inline label - always visible', 'NAME': 'inline label - always visible', 'Access type': 'inline label - always visible', 'Location': 'inline label - always visible', 'Province': 'inline label - always visible', 'Latitude': 'inline label - always visible', 'Longitude': 'inline label - always visible', });
lyr_ANZGizoanz_gizo_24.set('fieldLabels', {'fid': 'inline label - always visible', 'Merchant Name': 'inline label - always visible', 'Location': 'inline label - always visible', 'Physical Sreet Address - Location': 'inline label - always visible', 'Latitude': 'inline label - always visible', 'Longitude': 'inline label - always visible', });
lyr_AelanDigitalaelan_digital_25.set('fieldLabels', {'fid': 'inline label - always visible', 'Name': 'inline label - always visible', 'Status': 'inline label - always visible', 'Location': 'inline label - always visible', 'Latitude': 'inline label - always visible', 'Longitude': 'inline label - always visible', });
lyr_ANZCentralTulagianz_centraltulagi__26.set('fieldLabels', {'fid': 'inline label - always visible', 'Name': 'inline label - always visible', 'Type': 'inline label - always visible', 'Location': 'inline label - always visible', 'Province': 'inline label - always visible', 'Latitude': 'inline label - always visible', 'Longitude': 'inline label - always visible', });
lyr_ANZCentralTulagianz_centraltulagi__26.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});