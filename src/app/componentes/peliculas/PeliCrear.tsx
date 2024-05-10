import Form from "react-bootstrap/Form";
import noFoto from "../../../assets/img/noDisponible.png";

export const PeliCrear = () => {
  return (
    <div className="d-flex justify-content-center">
      <div className="col-md-5 mt-5 pb-4">
        <Form noValidate>
          <div className="card">
            <div className="card-header">
              <h5 className=" rojito">Formulario creación</h5>
            </div>

            <div className="card-body">
              <div className="mb-3">
                <Form.Group controlId="nombrePelicula">
                  <Form.Label>
                    <span className="rojito">*</span> Nombre película
                  </Form.Label>
                  <Form.Control size="sm" required type="text" name="nombrePelicula" />
                </Form.Group>
              </div>

              <div className="mb-3">
                <Form.Group controlId="pro">
                  <Form.Label>
                    <span className="rojito">*</span> Protagonista
                  </Form.Label>
                  <Form.Control size="sm" required type="text" name="protagonistaPelicula" />
                </Form.Group>
              </div>

              <div className="mb-3">
  <Form.Group controlId="gen">
    <Form.Label>
      <span className="rojito">*</span> Género
    </Form.Label>
    <Form.Control as="select" size="sm" required name="generoPelicula" multiple>
      <option value="">Seleccione género</option>
      <option value="accion">Acción</option>
      <option value="aventura">Aventura</option>
      <option value="cienciaFiccion">Ciencia Ficción</option>
      <option value="comedia">Comedia</option>
      <option value="drama">Drama</option>
      <option value="romance">Romance</option>
      {/* Agrega más opciones según tus necesidades */}
    </Form.Control>
  </Form.Group>
</div>


              <div className="mb-3">
                <Form.Group controlId="fot">
                  <Form.Label>
                    <span className="rojito">*</span> Imágen
                  </Form.Label>
                  <Form.Control size="sm" required type="file" name="imagenPelicula" />
                </Form.Group>
              </div>

              <div className="mb-3">
                <div className="d-flex justify-content-center">
                  <img src={noFoto} alt="no foto" className="maximoTamanoCreacion" />
                </div>
              </div>
            </div>

            <div className="card-footer">
              <button type="submit" className="btn btn-primary">
                Crear película
              </button>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
};
