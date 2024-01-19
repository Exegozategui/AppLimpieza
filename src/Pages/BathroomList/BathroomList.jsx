import React from 'react';
import { Link } from 'react-router-dom';
import DataBath from './../../DataBath/Bathroom.json';
import './styles.css';

function BathroomList({ sector, onBathroomClick }) {
    const bathroomsInSector = DataBath.baños.filter((bathroom) => bathroom.Sector === sector);
  
    return (
      <div className="bathroom-list">
        <h3>{sector}</h3>
        {bathroomsInSector.map((bathroom) => (
          <Link key={bathroom.Numero} to={`/bathroom-details/${bathroom.Numero}`}>
            <div
              className={`bathroom ${bathroom.Estado === 'sucio' ? 'dirty' : 'clean'}`}
              onClick={() => onBathroomClick(bathroom)}
            >
              {bathroom.Numero}
            </div>
          </Link>
        ))}
      </div>
    );
  }
  
  export default BathroomList;
