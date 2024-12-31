import React, { useState } from "react";
import { GoogleMap, useLoadScript, Marker, Autocomplete } from "@react-google-maps/api";

const libraries = ["places"]; // Include Places library for Autocomplete
const mapContainerStyle = {
  width: "100%",
  height: "400px",
};
const center = {
  lat: 37.7749, // Default latitude (San Francisco)
  lng: -122.4194, // Default longitude
};

function LocationSelector() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyDNqLMHw45v31kl-2zGXAMHI9WZyyFePd8", // Replace with your API key
    libraries,
  });

  const [selectedLocation, setSelectedLocation] = useState(center);
  const [address, setAddress] = useState(""); // State for storing the address
  const [autocomplete, setAutocomplete] = useState(null);

  // Function to fetch address using reverse geocoding
  const fetchAddress = async (lat, lng) => {
    const apiKey = "AIzaSyDNqLMHw45v31kl-2zGXAMHI9WZyyFePd8"; // Replace with your API key
    const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${apiKey}`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      if (data.status === "OK" && data.results.length > 0) {
        setAddress(data.results[0].formatted_address); // Set formatted address
      } else {
        setAddress("Address not found");
      }
    } catch (error) {
      console.error("Error fetching address:", error);
      setAddress("Error fetching address");
    }
  };

  const onMapClick = (event) => {
    const newLocation = {
      lat: event.latLng.lat(),
      lng: event.latLng.lng(),
    };
    setSelectedLocation(newLocation);
    fetchAddress(newLocation.lat, newLocation.lng); // Fetch address for the new location
  };

  const handleAutocompleteLoad = (autocompleteInstance) => {
    setAutocomplete(autocompleteInstance);
  };

  const handlePlaceSelect = () => {
    const place = autocomplete.getPlace();
    if (place.geometry) {
      const newLocation = {
        lat: place.geometry.location.lat(),
        lng: place.geometry.location.lng(),
      };
      setSelectedLocation(newLocation);
      fetchAddress(newLocation.lat, newLocation.lng); // Fetch address for the selected place
    }
  };

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <div>
      <Autocomplete
        onLoad={handleAutocompleteLoad}
        onPlaceChanged={handlePlaceSelect}
      >
        <input
          type="text"
          placeholder="Search location"
          style={{
            boxSizing:' border-box',
            width: "100%",
            height: "40px",
            padding: "8px",
            marginBottom: "10px",
          }}
        />
      </Autocomplete>

      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={10}
        center={selectedLocation}
        onClick={onMapClick}
      >
        <Marker position={selectedLocation} />
      </GoogleMap>

      <div style={{ marginTop: "10px" }}>
        <p><strong style={{color:"var(--color1)"}}>Selected Location:</strong> {address?address:"Not selected"}</p>
        <p><strong>Latitude:</strong> {selectedLocation.lat}</p>
        <p><strong>Longitude:</strong> {selectedLocation.lng}</p>
      </div>
    </div>
  );
}

export default LocationSelector;
