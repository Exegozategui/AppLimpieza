import React from "react";
import "./styles.css";
import DataBaños from "./DataBaños/baños.json"; // Ajusta la ruta según la ubicación real de tu archivo JSON

function Mapa() {
  const baños = DataBaños.baños;

  const renderSubsector = (subsector) => {
    return (
      <div className="subsector" key={subsector.id}>
        <h4>{subsector.nombre}</h4>
        {subsector.baños.map((baño) => (
          <div className="bathroom" key={baño.Numero} data-number={baño.Tipo + ' ' + baño.Numero}>
            {baño.Tipo} {baño.Numero}
          </div>
        ))}
      </div>
    );
  };

  const renderSector = (sector) => {
    return (
      <div className="sector" key={sector.id} id={sector.nombre.replace(/\s+/g, '-').toLowerCase()}>
        <h3>{sector.nombre}</h3>
        {sector.subsectores.map((subsector) => renderSubsector(subsector))}
      </div>
    );
  };

  return <div className="map">{baños.map((sector) => renderSector(sector))}</div>;
}

export default Mapa;