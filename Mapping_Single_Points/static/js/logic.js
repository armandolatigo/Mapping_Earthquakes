// Add console.log to check to see if code is working
console.log("No load error, all is well, this shit still hard though");

// Create the map object with a center and zoom level.
let map = L.map("mapid").setView([40.7, -94.5],4);

// Alternative .setView() method

// L.map("mapid", {
//     center: [
//         40.7, -94.5
//     ],
//     zoom: 4  
// });

// Add a marker to the map for Los Angeles, California
//let marker = L.marker([34.0522, -118.2437]).addTo(map);

// Austin, TX (for fun)
let marker2 = L.marker([30.2672, -97.7431]).addTo(map);

//Add circle marker to map for LA, Cali.
//  L.circle([34.0522, -118.2437], {
//      color: 'blue',
//      fillColor: '#FFFF00',
//      fillOPacity: 0.75,
//      radius:7000
//  }).addTo(map);

// circleMarker() method

L.circleMarker([34.0522, -118.2437], {
    radius: 300,
    color: "black",
    fillColor: '#ffffa1'
}).addTo(map);


// Create the tile layer that will be the background of the map
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Add 'graymap' tile layer to the map.
streets.addTo(map);

