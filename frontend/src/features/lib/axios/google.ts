import axios from 'axios';

export const mapsAPI = axios.create({
  baseURL: "https://maps.googleapis.com/maps/api/geocode/json",
  headers: {
    'Content-Type': 'application/json',
  },
  params: {
    key: process.env.GOOGLE_MAPS_API_KEY
  }
});
