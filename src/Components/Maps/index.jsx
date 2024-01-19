import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DataBath from './../../DataBath/Bathroom.json';

function Maps() {
  const [bathrooms, setBathrooms] = useState(DataBath.baños);

  const groupedBathrooms = {};
  // Agrupar baños por sector y subsector
  bathrooms.forEach((bathroom) => {
    if (!groupedBathrooms[bathroom.Ubicacion]) {
      groupedBathrooms[bathroom.Ubicacion] = {};
    }
    if (!groupedBathrooms[bathroom.Ubicacion][bathroom.Sector]) {
      groupedBathrooms[bathroom.Ubicacion][bathroom.Sector] = [];
    }
    groupedBathrooms[bathroom.Ubicacion][bathroom.Sector].push(bathroom);
  });

  return (
    <div className="map">
      {Object.keys(groupedBathrooms).map((location) => (
        <div key={location} className="sector">
          <h3>{location}</h3>
          {Object.keys(groupedBathrooms[location]).map((sector) => (
            <div key={sector} className="subsector">
              <h4>{sector}</h4>
              {groupedBathrooms[location][sector].map((bathroom) => (
                <Link key={bathroom.Numero} to={`/bathroom-details/${bathroom.Numero}`}>
                  <div
                    className={`bathroom ${bathroom.Estado === 'sucio' ? 'dirty' : 'clean'}`}
                    data-number={bathroom.Numero}
                  >
                    {bathroom.Numero}
                  </div>
                </Link>
              ))}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Maps;
