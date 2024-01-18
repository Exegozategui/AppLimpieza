import './styles.css';

function Baños() {
  

  return (
    <div className="card">
    <div className="card-header">
        <h2></h2>
    </div>
    <div className="card-body">
        <label for="action">Acción:</label>
        <select id="action" name="action">
            <option value="limpieza">Limpieza</option>
            <option value="repaso">Repaso</option>
            <option value="chequeo">Chequeo</option>
        </select>
    
        <label for="observations">Observaciones:</label>
        <input type="text" id="observations" name="observations" placeholder="Añade observaciones..."/>
    
        <div className="btn-group">
            <button className="btn btn-clean">Limpio</button>
            <button className="btn btn-dirty">Sucio</button>
            <button className="btn btn-out-of-service">F/S</button>
        </div>
    </div>
    <div className="card-footer">
        <button className="btn btn-save">Guardar</button>
    </div>
    </div>
  

  );
}

export default Baños;



