import React, { useState } from 'react';
import { ConsumoNoticias, ConsumoTiempo, HistoryPOST } from '../services/api';
import "react-table-v6/react-table.css";

function Busqueda() {
    const [ciudad, setCiudad] = useState({});
    const [stateResultados, setStateResultados] = useState(false);
    const [resultadoDatos, setResultadosDatos] = useState([]);
    const [dataNoticias, setDataNoticias] = useState([]);
    const [stateError, setStateError] = useState(true);


    const capturaDatos = e => {
        const { name, value } = e.target;
        setCiudad((prevState) => ({
            ...prevState,
            [name]: value
        }));
    }

    const consulta = () => {
        const nombre = ciudad;
        ConsumoTiempo(nombre).then(response => {
            try {
                if (response === undefined || response === "undefined") {
                    setStateResultados(true);
                    setStateError(true);
                } else {
                    insertarDatos(response.data);
                }
            } catch (error) {
                console.log(error);
            }
        })
        ConsumoNoticias(nombre).then(response => {
            debugger
            try {
                if (response === undefined || response === "undefined") {
                    setStateResultados(true);
                    setStateError(true);
                } else {
                    setDataNoticias(response.data.articles);
                }

            } catch (error) {
                console.log(error);
            }
        })
    }

    const insertarDatos = (data) => {
        setResultadosDatos(data);
        setStateResultados(true);
        setStateError(false);

        var form = new FormData();
        form.append("ciudad", ciudad.ciudad);
        form.append("info", JSON.stringify(data));
        form.append("METHOD", "POST");
        HistoryPOST(form).then(response => {
        })
    }
    return (
        <>
            <div className="container pt-5">
                <div className="row">
                    <div className="col-md-10 pt-2">
                        <input type="text" className="form-control" name="ciudad" placeholder="Búsqueda de Ciudad" onChange={capturaDatos} />
                    </div>
                    <div className="col-md-2">
                        <button className="btn btn-primary" onClick={consulta}>Buscar</button>
                    </div>
                    {stateResultados ?
                        <>
                            {stateError ? (
                                <React.Fragment>
                                    <div className="col-md-12 mt-5">
                                        <div className="alert alert-warning">No se encontraron registros!</div>
                                    </div>
                                </React.Fragment>
                            ) : (
                                <React.Fragment>
                                    <div className="col-md-12">
                                        <div className="row">
                                            <div className="col-md-12 mt-3">
                                                <h5> Ciudad Encontrada: <b className="font-weight-bold">{resultadoDatos.name}</b></h5>
                                                <hr />
                                            </div>
                                            <div className="col-md-8">
                                                <h5>Noticias</h5>
                                                <hr />
                                                {dataNoticias.map((e, i) => {
                                                    return (
                                                        <div className="card my-4" key={i}>
                                                            <div className="card-header">
                                                                <h5 className="text-left"><b className="font-weight-bold">Titulo:</b> {e.title}</h5>
                                                                <label><b>Autor:</b> {e.author}</label>
                                                            </div>
                                                            <div className="card-body">
                                                                <p className="text-justify">{e.content}</p>
                                                                <p className="text-justify">{e.description}</p>
                                                                <p className="text-justify"><b>Fecha:</b> {e.publishedAt}</p>
                                                                <div style={{ backgroundImage: `url(${e.urlToImage})`, width: '100%', height: '300px', backgroundAttachment: 'fixed', backgroundSize: 'contain' }}></div>
                                                            </div>
                                                            <div className="card-footer">
                                                                <a href={e.url} target={'_blank'} rel="noreferrer">Conoce más información <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-hand-index" viewBox="0 0 16 16">
                                                                    <path d="M6.75 1a.75.75 0 0 1 .75.75V8a.5.5 0 0 0 1 0V5.467l.086-.004c.317-.012.637-.008.816.027.134.027.294.096.448.182.077.042.15.147.15.314V8a.5.5 0 1 0 1 0V6.435a4.9 4.9 0 0 1 .106-.01c.316-.024.584-.01.708.04.118.046.3.207.486.43.081.096.15.19.2.259V8.5a.5.5 0 0 0 1 0v-1h.342a1 1 0 0 1 .995 1.1l-.271 2.715a2.5 2.5 0 0 1-.317.991l-1.395 2.442a.5.5 0 0 1-.434.252H6.035a.5.5 0 0 1-.416-.223l-1.433-2.15a1.5 1.5 0 0 1-.243-.666l-.345-3.105a.5.5 0 0 1 .399-.546L5 8.11V9a.5.5 0 0 0 1 0V1.75A.75.75 0 0 1 6.75 1zM8.5 4.466V1.75a1.75 1.75 0 1 0-3.5 0v5.34l-1.2.24a1.5 1.5 0 0 0-1.196 1.636l.345 3.106a2.5 2.5 0 0 0 .405 1.11l1.433 2.15A1.5 1.5 0 0 0 6.035 16h6.385a1.5 1.5 0 0 0 1.302-.756l1.395-2.441a3.5 3.5 0 0 0 .444-1.389l.271-2.715a2 2 0 0 0-1.99-2.199h-.581a5.114 5.114 0 0 0-.195-.248c-.191-.229-.51-.568-.88-.716-.364-.146-.846-.132-1.158-.108l-.132.012a1.26 1.26 0 0 0-.56-.642 2.632 2.632 0 0 0-.738-.288c-.31-.062-.739-.058-1.05-.046l-.048.002zm2.094 2.025z" />
                                                                </svg></a>
                                                            </div>
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                            <div className="col-md-4">
                                                <h5>Estado del Tiempo</h5>
                                                <hr />
                                                <table className="table table-striped">
                                                    <tbody>
                                                        <tr>
                                                            <td><p>wind_speed {resultadoDatos.wind.speed}</p></td>
                                                            <td><p>wind_degree {resultadoDatos.wind.deg}</p></td>
                                                            <td><p>wind_dir {resultadoDatos.wind.gust}</p></td>
                                                            <td><p>humidity {resultadoDatos.main.humidity}</p></td>
                                                            <td><p>visibility {resultadoDatos.visibility}</p></td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </React.Fragment>
                            )
                            }
                        </>
                        :
                        <></>
                    }
                </div>
            </div>
        </>
    );
}

export default Busqueda;
