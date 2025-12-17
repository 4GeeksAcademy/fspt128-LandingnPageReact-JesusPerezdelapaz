export const Card = (props) => {
    return (
        <div className="col-sm-6 col-md-4 p-2" >
            <div className="card mt-4">
                <div className="card-header">
                    <h3 className="card-title text-center">{props.arma.nombre}</h3>
                </div>
                <div className="d-flex justify-content-center" style={{ width: "100%", overflow: "hidden", aspectRatio: "4/3" }}>
                    <img src={props.arma.imagen} className="card-img-top img-fluid" style={{ objectFit: "cover" }} alt="..." />
                </div>
                <div className="card-body">
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            Dificultad: {props.arma.dificultad}
                        </li>
                        <li className="list-group-item">
                            Alcance: {props.arma.alcance}
                        </li>
                        <li className="list-group-item text-center">
                            {props.arma.jugabilidad}
                        </li>
                    </ul>
                    
                </div>
                <div className="card-footer text-center">
                    <h5>{props.arma.descripcion}</h5>
                </div>
            </div>
        </div>
    )
}