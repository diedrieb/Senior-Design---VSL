const express = require("express");
const app = express();
const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://dbuser:hello123@vsltest.lhmf9tz.mongodb.net/?retryWrites=true&w=majority").then(() => console.log("Datatbase connection successful")).catch(() =>
console.log("Database connection error"));

const test1Schema = {
    LisitingID: String,
    LisitingName: String,
    Pricing: String,
};

const userSchema = {
    username: String,
    password: String,
};

const User = mongoose.model(
    "User",
    userSchema,
    "Users"
);

User.findOne({username:"hi"}, (err, foundItem) =>{
    if(err){
        console.log(err);
    }else{
        console.log(foundItem);
    }
});

function initMap(){
    //Map options
    var options ={
        zoom: 14,
        center: {lat:39.1320, lng: -84.5155}
    }


    //New map
    var map = new google.maps.Map(document.getElementById("map"), options);

    //Listen for click on map
    google.maps.event.addListener(map, 'click', function(event){
        addMarker({coords:event.latLng});
    });

    /*
    //Add Marker
    var marker = new google.maps.Marker({
        position:{lat:39.1320 , lng:  -84.5155 },
        map: map
    });

    //Information Popup on Location
    var infoWindow = new google.maps.InfoWindow({
        content:'<h1>UC Campus</h1>'
    });

    marker.addListener('click', function(){
        infoWindow.open(map, marker);
    });*/

    // Array of Markers

    var markers = [
        {coords:{lat:39.1320, lng: -84.5155},
        content:'<h1>UC Campus</h1>'}

    ];

    //Loop Through markers
    for(var i =0;i < markers.length;i++){
        aadMarker(markers[i]);

         addMarker({coords:{lat:39.1320, lng: -84.5155},
        content:'<h1>UC Campus</h1>'
        });

    };

   
    // Add Marker Function
    function addMarker(props){
        var marker = new google.maps.Marker({
            position: props.coords,
            map: map
        });
    };

    //Check content
    if(props.content){
         //Information Popup on Location
        var infoWindow = new google.maps.InfoWindow({
            content: props.content
        });

        marker.addListener('click', function(){
            infoWindow.open(map, marker);
        });
    };

}


app.listen(3000, function(){
    console.log("server listening on port 3000")
});
