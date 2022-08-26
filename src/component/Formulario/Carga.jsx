import React, { useState } from "react";

const Carga = () => {
  const [datos, setDatos] = useState({
    npatrimonio: '',
    dependencia: '',
    detalle:"",
    estado:"trancito"
})
const handleInputChange = (e) => {
 
  setDatos({
      ...datos,
      [e.target.name] : e.target.value
  })
}
  const cargaDeDatos = (e)=>{
    e.preventDefault()
    console.log(datos)
    setDatos()

  }
  return (
    <div className="card text-center mt-3">
      <div className="card-header">Direccion de Sistemas y Comunicaciones</div>
      <div className="card-body">
        <h5 className="card-title">Carga de Tiket</h5>
        <form onSubmit={cargaDeDatos} className="mb-3">
          <div className="mb-3">
            <label  className="form-label">
              N° de Parimonio
            </label>
            <input
              type="npatrimonio"
              className="form-control"
              placeholder="1900XXXXX"
              name="npatrimonio"
              onChange={handleInputChange} 
            
            />
          </div>
          <div className="mb-3">
            <label className="form-label">
              Dependencia
            </label>
            <input
              type="dependencia"
              className="form-control"
              placeholder="Dir comunicaciones"
              name="dependencia"
              onChange={handleInputChange} 
            />
          </div>
          <div className="mb-3">
            <label  className="form-label">
              Detalle el Problema
            </label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              name="detalle"
              onChange={handleInputChange} 
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Enviar</button>
        </form>
      </div>
      <div className="card-footer text-muted">Formulario de carga de Tiket</div>
    </div>
  );
};

export default Carga;
