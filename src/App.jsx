import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import L from 'leaflet';

import { markerPos, markerPosTwo, markerPosThird } from './dev-data/positions';
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

  useEffect(() => {
    setTimeout(
      () => (currentPos < markerPos.length - 1 ? setCurrentPos(currentPos + 1) : setCurrentPos(0)),
      300
    );
  }, [currentPos]);

  return (
    <div className='App'>
      <MapContainer center={[51.505, -0.09]} zoom={12} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        {markerPos[currentPos] && <Marker icon={myIcon} position={markerPos[currentPos]} />}
        {markerPosTwo[currentPos] && <Marker icon={myIcon} position={markerPosTwo[currentPos]} />}
        {markerPosThird[currentPos] && (
          <Marker icon={myIcon} position={markerPosThird[currentPos]} />
        )}
      </MapContainer>
    </div>
  );
}

export default App;
