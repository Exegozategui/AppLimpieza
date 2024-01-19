import React, { useState } from 'react';
import './styles.css';


function BathroomCard({bathroomData, onSave }) {
  const [selectedAction, setSelectedAction] = useState('limpieza');
  const [observations, setObservations] = useState('');
  const [status, setStatus] = useState('limpio');

  const handleStatusChange = (newStatus) => {
    setStatus(newStatus);
  };

  const handleSave = () => {
    // Llama a la función onSave con la información actualizada del baño
    onSave({
      bathroomId: bathroomData.Numero,
      action: selectedAction,
      observations,
      status,
    });
  };

  return (
    <div className="card">
      <div className="card-header">
        <h2>Baño {bathroomData.Numero}</h2>
      </div>
      <div className="card-body">
        <label htmlFor="action">Acción:</label>
        <select
          id="action"
          name="action"
          value={selectedAction}
          onChange={(e) => setSelectedAction(e.target.value)}
        >
          <option value="limpieza">Limpieza</option>
          <option value="repaso">Repaso</option>
          <option value="chequeo">Chequeo</option>
        </select>

        <label htmlFor="observations">Observaciones:</label>
        <input
          type="text"
          id="observations"
          name="observations"
          placeholder="Añade observaciones..."
          value={observations}
          onChange={(e) => setObservations(e.target.value)}
        />

        <div className="btn-group">
          <button
            className={`btn btn-clean ${status === 'limpio' ? 'active' : ''}`}
            onClick={() => handleStatusChange('limpio')}
          >
            Limpio
          </button>
          <button
            className={`btn btn-dirty ${status === 'sucio' ? 'active' : ''}`}
            onClick={() => handleStatusChange('sucio')}
          >
            Sucio
          </button>
          
        </div>
      </div>
      <div className="card-footer">
        <button className="btn btn-save" onClick={handleSave}>
          Guardar
        </button>
      </div>
    </div>
  );
}

export default BathroomCard;




