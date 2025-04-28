"use client";

import { useEffect } from "react";
import L, { LatLngTuple } from "leaflet";
import "leaflet/dist/leaflet.css";

const position: LatLngTuple = [-7.0656106896202715, 109.38240929999999];

const LeafletMap = () => {
  useEffect(() => {
    const container = L.DomUtil.get("map") as HTMLElement | undefined;
    if (container && (container as any)._leaflet_id) {
      (container as any)._leaflet_id = undefined;
    }

    const map = L.map("map").setView(position, 13);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    const customIcon = L.icon({
      iconUrl: "https://cdn-icons-png.flaticon.com/128/2776/2776063.png",
      iconSize: [38, 38],
    });

    const marker = L.marker(position, { icon: customIcon }).addTo(map);
    marker.bindPopup("<b>Anjani Beauty Center</b>").openPopup();

    return () => {
      map.remove();
    };
  }, []);

  return <div id="map" className="h-64 w-full" />;
};

export default LeafletMap;
