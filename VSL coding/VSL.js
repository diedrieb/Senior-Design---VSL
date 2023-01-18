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


function initAutocomplete() {
        const map = new google.maps.Map(document.getElementById("map"), {
        center: {lat:39.1320, lng: -84.5155},
        zoom: 15,
        mapTypeId: "roadmap",
    });  
       
    // Create the search box and link it to the UI element.
    const input = document.getElementById("pac-input");
    const searchBox = new google.maps.places.SearchBox(input);

    map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);
    
    map.addListener("bounds_changed", () => {
      searchBox.setBounds(map.getBounds());
    });
  
    let markers = [];
  
    // Listen for the event fired when the user selects a prediction and retrieve
    searchBox.addListener("places_changed", () => {
      const places = searchBox.getPlaces();
  
      if (places.length == 0) {
        return;
      }
  
      // Clear out the old markers.
      markers.forEach((marker) => {
        marker.setMap(null);
      });
      markers = [];
  
      // For each place, get the icon, name and location.
      const bounds = new google.maps.LatLngBounds();
  
      places.forEach((place) => {
        if (!place.geometry || !place.geometry.location) {
          console.log("Returned place contains no geometry");
          return;
        }
  
        const icon = {
          url: place.icon,
          size: new google.maps.Size(71, 71),
          origin: new google.maps.Point(0, 0),
          anchor: new google.maps.Point(17, 34),
          scaledSize: new google.maps.Size(25, 25),
        };
  
        // Create a marker for each place.
        markers.push(
          new google.maps.Marker({
            map,
            icon,
            title: place.name,
            position: place.geometry.location,
          })
        );
        if (place.geometry.viewport) {
          // Only geocodes have viewport.
          bounds.union(place.geometry.viewport);
        } else {
          bounds.extend(place.geometry.location);
        }
      });
      map.fitBounds(bounds);
    });
  }
  
  window.initAutocomplete = initAutocomplete;

    

    
   




app.listen(3000, function(){
    console.log("server listening on port 3000")
});
