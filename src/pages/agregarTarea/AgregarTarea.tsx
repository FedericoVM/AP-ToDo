import * as Yup from "yup";
import {toast } from 'sonner';
import { useFormik } from "formik";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { Tarea } from "../../types/Tareas";
import {serviceApi } from "../../services/tareasServicio";
import { useNavigate } from "react-router-dom";

const AgregarTarea = () => {

  const navigate = useNavigate();

  const tarea: Tarea = {
    id:undefined,
    titulo: "",
    descripcion: "",
    imagen: "",
    estado: "Por hacer",
    responsable: "",
    tiempo: 1,
  };

  const validationSchema = Yup.object().shape({
    titulo: Yup.string().required("El titulo es requerido"),
    descripcion: Yup.string().required("La descripción es requerida"),
    tiempo: Yup.number().min(1, "El tiempo minimo es de 1 dia"),
    imagen: Yup.string().required("La url de la imagen es requerido"),
    responsable: Yup.string().required("El responsable es requerido"),
    estado: Yup.string().required("El estado es requerido"),
  });

  const onSubmit = async (values: Tarea) => {

    const nuevaTarea = await serviceApi.agregarTarea(values)

    if (nuevaTarea.id) {
      toast.success("La tarea se agrego correctamente")
    } else {
      toast.warning("Hubo un error a la hora de crear una tarea.")
    }


  }

  const formik = useFormik({
    //objeto
    initialValues: tarea,
    //objeto
    validationSchema,
    //metodo
    onSubmit,
  });

  return (
    <>
      <Container className="crear-tarea">
        <h3 className="text-center alert alert-warning">Agregar Tarea</h3>
        <Form className="my-5" onSubmit={formik.handleSubmit}>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Titulo *</Form.Label>
              <Form.Control
                name="titulo"
                type="text"
                placeholder="Ingresar titulo..."
                value={formik.values.titulo}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                isInvalid={Boolean(
                  formik.errors.titulo && formik.touched.titulo
                )}
              />
              <Form.Control.Feedback type="invalid">
                {formik.errors.titulo}
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group controlId="formGridPassword">
              <Form.Label>Descripción *</Form.Label>
              <Form.Control
                name="descripcion"
                as="textarea"
                rows={3}
                value={formik.values.descripcion}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                isInvalid={Boolean(
                  formik.errors.descripcion && formik.touched.descripcion
                )}
              />
              <Form.Control.Feedback type="invalid">
                {formik.errors.descripcion}
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group className="mb-3" controlId="formGridAddress1">
              <Form.Label>Responsable *</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ej: Federico Martel"
                name="responsable"
                value={formik.values.responsable}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                isInvalid={Boolean(
                  formik.errors.responsable && formik.touched.responsable
                )}
              />
              <Form.Control.Feedback type="invalid">
                {formik.errors.responsable}
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group className="mb-3" controlId="formGridAddress2">
              <Form.Label>Tiempo (En dias) *</Form.Label>
              <Form.Control
                type="number"
                placeholder="3"
                name="tiempo"
                min={0}
                value={formik.values.tiempo}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                isInvalid={Boolean(
                  formik.errors.tiempo && formik.touched.tiempo
                )}
              />
              <Form.Control.Feedback type="invalid">
                {formik.errors.tiempo}
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>URL de la imagen *</Form.Label>
              <Form.Control
                type="text"
                name="imagen"
                value={formik.values.imagen}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                isInvalid={Boolean(
                  formik.errors.imagen && formik.touched.imagen
                )}
              />
              <Form.Control.Feedback type="invalid">
                {formik.errors.imagen}
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>Estados *</Form.Label>
              <Form.Select
                aria-label="Default select example"
                name="estado"
                value={formik.values.estado}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                isInvalid={Boolean(
                  formik.errors.estado && formik.touched.estado
                )}
              >
                <option disabled>Seleccionar un estado...</option>
                <option value="Por hacer">Por hacer</option>
                <option value="En producción">En producción</option>
                <option value="Por testear">Por testear</option>
                <option value="Completada">Completada</option>
              </Form.Select>
            </Form.Group>
          </Row>
          <div className="mt-md-5 w-25 ">
            <Button variant="danger" type="submit" className="m-2" onClick={()=>{navigate("/")}}>
              Cancelar
            </Button>

            <Button variant="primary" type="submit" className="m-2">
              Crear
            </Button>
          </div>

        </Form>
      </Container>
    </>
  );
};

export default AgregarTarea;
