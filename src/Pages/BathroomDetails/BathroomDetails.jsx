import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import BathroomCard from '../../Components/BathroomCard/index';
import DataBath from './../../DataBath/Bathroom.json';
import './styles.css';

function BathroomDetails({ onSave }) {
  const { bathroomId } = useParams();
  const selectedBathroom = DataBath.baños.find((bathroom) => bathroom.Numero === bathroomId);
  const [currentBathroom, setCurrentBathroom] = useState(selectedBathroom);

  const handleSave = (updatedBathroom) => {
    // Actualiza el estado local y llama a la función onSave para reflejar los cambios
    setCurrentBathroom(updatedBathroom);
    onSave(updatedBathroom);
  };

  return (
    <div>
      {selectedBathroom ? (
        <div>
          <h3>{`Baño ${selectedBathroom.Numero}`}</h3>
          <BathroomCard bathroomData={currentBathroom} onSave={handleSave} />
        </div>
      ) : (
        <p>Baño no encontrado</p>
      )}
    </div>
  );
}

export default BathroomDetails;
