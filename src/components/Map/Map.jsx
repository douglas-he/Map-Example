import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from 'react-simple-maps';
import mapdata from '../../utils/mapdata';
import { geoCentroid } from 'd3-geo';

const Map = () => {
  return (
    <ComposableMap
      projection='geoMercator'
      projectionConfig={{
        scale: 3500,
        center: [19, 52],
      }}
      fill='white'
      stroke='black'
      strokeWidth={3}
    >
      <Geographies geography={mapdata.data}>
        {(geographies) => {
          return (
            <>
              {geographies.geographies.map((geo) => {
                
                return (
                  <Geography
                    onClick={() => console.log('stateName')}
                    key={geo.rsmKey}
                    geography={geo}
                    style={{
                      hover: {
                        fill: '#354C80',
                      },
                    }}
                  />
                );
              })}
                {geographies.geographies.map((geo) => {
                const provinceCenter = geoCentroid(geo);
                let colorFill = 'black';
                return (
                  <Marker
                    key={geo.rsmKey}
                    coordinates={
                      provinceCenter
                    }
                    className='theMarkers'
                  >
                    <text
                      style={{
                        fill: colorFill,
                        strokeWidth: 0,
                      }}
                      textAnchor='middle'
                    >
                      {geo.properties.nome}
                    </text>
                  </Marker>
                );
              })}
            </>
          );
        }}
      </Geographies>
    </ComposableMap>
  );
};

export default Map;
