import React, { useState } from 'react';

function Address({ button, disabled, onClick }) {
  const [state, setState] = useState('');
  const [city, setCity] = useState('');
  const [address, setAddress] = useState('');
  const [number, setNumber] = useState('');
  const [district, setDistrict] = useState('');
  const [complement, setComplement] = useState('');

  function isValid() {
    return state && city && address && number && district;
  }

  return (
    <div className="row">
      <div className="form-group col-6">
        <label>Cidade:</label>
        <input className="form-control" onChange={event => setCity(event.target.value)}
          placeholder="Digite a cidade de entrega" value={city} />
      </div>
      <div className="form-group col-6">
        <label>Estado:</label>
        <input className="form-control" onChange={event => setState(event.target.value)}
          placeholder="Digite o estado de entrega" value={state} />
      </div>
      <div className="form-group col-9">
        <label>Endereço:</label>
        <input className="form-control" onChange={event => setAddress(event.target.value)}
          placeholder="Digite o endereço de entrega" value={address} />
      </div>
      <div className="form-group col-3">
        <label>Número:</label>
        <input className="form-control" onChange={event => setNumber(event.target.value)}
          placeholder="Número de entrega" value={number} />
      </div>
      <div className="form-group col-6">
        <label>Bairro:</label>
        <input className="form-control" onChange={event => setDistrict(event.target.value)}
          placeholder="Digite o bairro da entrega" value={district} />
      </div>
      <div className="form-group col-6">
        <label>Complemeto:</label>
        <input className="form-control" onChange={event => setComplement(event.target.value)}
          placeholder="Digite o completo para a entrega" value={complement} />
      </div>
      <div className="form-group col-12">
        <button type="button" disabled={!isValid() || disabled}
          onClick={() => onClick({ state, city, address, number, district, complement })}
          className="btn btn-lg btn-dark w-100">{button}</button>
      </div>
    </div>
  );
}

export default Address;