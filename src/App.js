import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import L from 'leaflet';
import ghost from './images/ghostBL.png';
import './App.css';

function App() {
  const myIcon = new L.Icon({
    iconUrl: ghost,
    iconRetinaUrl: ghost,
    popupAnchor: [-0, -0],
    iconSize: [55, 60],
  });
  const [currentPos, setCurrentPos] = useState(0);

  const markerPos = [
    [51.51, -0.13],
    [51.51, -0.12],
    [51.51, -0.11],
    [51.51, -0.1],
    [51.51, -0.09],
    [51.51, -0.08],
    [51.51, -0.07],
    [51.51, -0.06],
    [51.51, -0.05],
    [51.51, -0.04],
    [51.51, -0.03],
    [51.51, -0.04],
    [51.51, -0.05],
    [51.51, -0.06],
    [51.51, -0.07],
    [51.51, -0.08],
    [51.51, -0.09],
    [51.51, -0.1],
    [51.51, -0.11],
    [51.51, -0.12],
  ];

  const markerPosTwo = [
    [51.56, -0.03],
    [51.55, -0.03],
    [51.54, -0.03],
    [51.53, -0.03],
    [51.52, -0.03],
    [51.51, -0.03],
    [51.5, -0.03],
    [51.49, -0.03],
    [51.48, -0.03],
    [51.47, -0.03],
    [51.46, -0.03],
    [51.47, -0.03],
    [51.48, -0.03],
    [51.49, -0.03],
    [51.5, -0.03],
    [51.51, -0.03],
    [51.52, -0.03],
    [51.53, -0.03],
    [51.54, -0.03],
    [51.55, -0.03],
  ];

  const markerPosThird = [
    [51.56, -0.1],
    [51.55, -0.1],
    [51.54, -0.1],
    [51.53, -0.1],
    [51.52, -0.1],
    [51.51, -0.1],
    [51.5, -0.1],
    [51.49, -0.1],
    [51.48, -0.1],
    [51.47, -0.1],
    [51.46, -0.1],
    [51.47, -0.1],
    [51.48, -0.1],
    [51.49, -0.1],
    [51.5, -0.1],
    [51.51, -0.1],
    [51.52, -0.1],
    [51.53, -0.1],
    [51.54, -0.1],
    [51.55, -0.1],
  ];

  useEffect(() => {
    setTimeout(() => (currentPos < markerPos?.length - 1 ? setCurrentPos(currentPos + 1) : setCurrentPos(0)), 300);
  }, [currentPos, markerPos.length]);

  return (
    <div className='App'>
      <MapContainer center={[51.505, -0.09]} zoom={12} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        {markerPos[currentPos] && <Marker icon={myIcon} position={markerPos[currentPos]}></Marker>}
        {markerPosTwo[currentPos] && <Marker icon={myIcon} position={markerPosTwo[currentPos]}></Marker>}
        {markerPosThird[currentPos] && <Marker icon={myIcon} position={markerPosThird[currentPos]}></Marker>}
      </MapContainer>
    </div>
  );
}

export default App;
