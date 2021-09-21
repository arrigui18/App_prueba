import React, { useEffect, useState } from 'react';
import { HistorialGET } from '../services/api';

function Historial() {
    const [data, setData] = useState([]);

    useEffect(() => {
        consumoGET();
    }, [])

    const consumoGET = () => {
        HistorialGET().then(response => {
            setData(response.data);
        })
    }

    return (
        <>
            <div className="container py-5">
                <p>Hitorial de búsqueda de ciudades</p>
                <hr />
                <table className="table table-striped table-responsive">
                    <thead>
                        <tr>
                            <th>Nombre Ciudad</th>
                            <th>Info</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((e, i) => {
                            return (
                                <tr key={i}>
                                    <td className="w-25">{e.ciudad}</td>
                                    <td className="w-75">{e.info}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default Historial;