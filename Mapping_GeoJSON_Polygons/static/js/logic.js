console.log("functioning");

// Create the street view tile layer that will be the default background of the map
let streets = 
L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
})


// We create the dark view tile layer that will be an option for our map.
let satelliteStreets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/navigation-guidance-night-v4/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Create a base layer that holds both maps

let baseMaps = {
    "Street View": streets,
    "Satellite View": satelliteStreets
};

// Create the map object with a center and zoom level.
let map = L.map("mapid", {
    center: [43.6777, -79.6248],
    zoom: 11,
    layers: [streets]
})

// Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps).addTo(map);

// Accessing the airport GeoJSON URL from GitHub Repo link
let torontoHoods = "https://raw.githubusercontent.com/armandolatigo/Mapping_Earthquakes/Mapping_GeoJSON_Polygons/torontoNeighborhoods.json";


// Grabbing our GeoJSON data (SKILL DRILL 13.5.6)
d3.json(torontoHoods).then(function(data) {
    console.log(data);
    //Creating a GeoJSON layer with the retrieved data.
    L.geoJSON(data,  {
        color: "#ff4000",
        lineWeight: 1,
        onEachFeature: function(feature, layer) {
             console.log(layer)
             layer.bindPopup("<h2>" + "Neighborhood: " +  feature.properties.AREA_NAME + "</2>");  
        }
    }).addTo(map)
});



// Grabbing our GeoJSON data.
// d3.json(torontoHoods).then(function(data) {
//     console.log(data);
//   // Creating a GeoJSON layer with the retrieved data.
//   L.geoJSON(data).addTo(map);
// });
        