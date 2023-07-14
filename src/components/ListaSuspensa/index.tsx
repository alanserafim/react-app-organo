import React from "react";
import { ITime } from "../../shared/interfaces/ITime";
import "./ListaSuspensa.css";

interface ListaSuspensaProps {
  label: string, 
  aoAlterado: (valor: string) => void, 
  obrigatorio: boolean, 
  valor: string, 
  itens: ITime[]
}

const ListaSuspensa = ({ label, aoAlterado, obrigatorio, valor, itens}: ListaSuspensaProps) => {
  
  return (
    <div className="lista-suspensa">
      <label>{label}</label>
      <select 
        onChange={
          evento => aoAlterado(evento.target.value)
        }
        required={obrigatorio} 
        value={valor}
      >
        <option value="">Selecione</option>
        {itens.map((item) => {
          return (
            <option key={item.id} value={item.id}>{item.nome}</option>
          )
        })}
      </select>
    </div>
  );
};

export default ListaSuspensa;
