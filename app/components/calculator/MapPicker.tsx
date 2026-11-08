"use client";

import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useEffect } from "react";
import { MapContainer, Marker, TileLayer, useMap, useMapEvents } from "react-leaflet";
import type { LatLng } from "@/lib/geo";

// divIcon supaya tidak bergantung pada file gambar marker bawaan Leaflet
const pin = L.divIcon({
  className: "",
  html: '<div style="width:20px;height:20px;border-radius:9999px;background:#31485f;border:3px solid #e7dec8;box-shadow:0 2px 6px rgba(0,0,0,.4)"></div>',
  iconSize: [20, 20],
  iconAnchor: [10, 10],
});

function Clicks({ onPick }: { onPick: (p: LatLng) => void }) {
  useMapEvents({ click: (e) => onPick({ lat: e.latlng.lat, lng: e.latlng.lng }) });
  return null;
}

function MapEffects({ flyTo }: { flyTo: LatLng | null }) {
  const map = useMap();
  useEffect(() => {
    const t = setTimeout(() => map.invalidateSize(), 50);
    return () => clearTimeout(t);
  }, [map]);
  useEffect(() => {
    if (flyTo) map.flyTo([flyTo.lat, flyTo.lng], 16);
  }, [flyTo, map]);
  return null;
}

type Props = {
  center: LatLng;
  value: LatLng | null;
  flyTo: LatLng | null;
  onPick: (p: LatLng) => void;
};

export default function MapPicker({ center, value, flyTo, onPick }: Props) {
  return (
    <MapContainer
      center={[center.lat, center.lng]}
      zoom={15}
      scrollWheelZoom={false}
      className="h-[180px] w-full"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Clicks onPick={onPick} />
      <MapEffects flyTo={flyTo} />
      {value && (
        <Marker
          position={[value.lat, value.lng]}
          icon={pin}
          draggable
          eventHandlers={{
            dragend: (e) => {
              const ll = e.target.getLatLng();
              onPick({ lat: ll.lat, lng: ll.lng });
            },
          }}
        />
      )}
    </MapContainer>
  );
}