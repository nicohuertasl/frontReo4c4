import React from 'react';


function SelectStatus(props) {
     
    
    return (
        <select id="cars" name="cars">
            <option value="Pendiente">Pendiente</option>
            <option value="Aprovado">Aprovado</option>
            <option value="Rechazado" selected>Rechazado</option>
        </select>
    );

}

export default SelectStatus;