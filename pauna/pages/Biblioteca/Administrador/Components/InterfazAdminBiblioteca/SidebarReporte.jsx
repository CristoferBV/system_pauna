import React, { useState } from 'react';
import axios from 'axios';

export default function SidebarReporte({ Reporte }) {
  const [searchText, setSearchText] = useState('');
  const [editMode, setEditMode] = useState(false);
  const [editedReporte, setEditedReporte] = useState({});
  const [deleteConfirmation, setDeleteConfirmation] = useState(false);
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [newReporte, setNewReporte] = useState({});
  const [alertVisible, setAlertVisible] = useState(false);

  const handleEdit = (reporte) => {
    setEditedReporte(reporte);
    setEditMode(true);
  };

  const saveChanges = () => {
    // Implementa la lógica para guardar los cambios aquí
    setEditMode(false);
  };

  const handleDelete = (reporte) => {
    setEditedReporte(reporte);
    setDeleteConfirmation(true);
  };

  const confirmDelete = () => {
    // Implementa la lógica para eliminar el elemento aquí
    setDeleteConfirmation(false);
  };

  const createReporte = () => {
    setShowCreateForm(true);
  };

  const handleAlertClose = () => {
    setAlertVisible(false);
  };

  const submitNewReporte = () => {
    // Implementa la lógica para guardar el nuevo reporte
    setAlertVisible(true);
  };

  return (
    <div className="flex-1 p-8">
      <div className="card bg-primary text-white">
        <div className="card-header">
          <div className="d-flex justify-content-between">
            <span>Reportes</span>
            <button
              className="btn btn-success"
              onClick={createReporte}
            >
              Nuevo Reporte
            </button>
          </div>
        </div>
        <div className="card-body">
          <div className="mb-3">
            <form>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Buscar reporte..."
                  value={searchText}
                  onChange={(e) => setSearchText(e.target.value)}
                />
              </div>
            </form>
          </div>
          <table className="table table-striped table-bordered table-hover table-secondary table-responsive">
            <thead>
              <tr>
                <th className="text-center">Nombre</th>
                <th className="text-center">Cedula</th>
                <th className="text-center">Dispositivo</th>
                <th className="text-center">Periferico</th>
                <th className="text-center">Carrera</th>
                <th className="text-center">Fecha entregado</th>
                <th className="text-center">Fecha devolucion</th>
                <th className="text-center">Correo</th>
                <th className="text-center">Administrar</th>
              </tr>
            </thead>
            <tbody>
              {Reporte.map((reporte) => (
                <tr key={reporte.EE_idenficador}>
                  <td className="text-center">{reporte.UO_primer_nombre}</td>
                  <td className="text-center">{reporte.UO_identificador}</td>
                  <td className="text-center">{reporte.TP_nombre}</td>
                  <td className="text-center">{reporte.EA_nombre}</td>
                  <td className="text-center">{reporte.CA_nombre}</td>
                  <td className="text-center">{reporte.HO_fecha}</td>
                  <td className="text-center">{reporte.LP_fechaDevolucion}</td>
                  <td className="text-center">{reporte.CE_correoElectronico}</td>
                  <td className="text-center">
                    <button
                      className="btn btn-light ml-2"
                      onClick={() => handleEdit(reporte)}
                    >
                      Editar
                    </button>
                    <button
                      className="btn btn-light ml-2"
                      onClick={() => handleDelete(reporte)}
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Los componentes de modales, formularios de creación y alertas irían aquí */}
    </div>
  );
}

export const getServerSideProps = async (context) => {
  try {
    const { data: Reporte } = await axios.get("http://localhost:3000/api/config/BibliotecaReportes");
    return {
      props: {
        Reporte,
      },
    };
  } catch (error) {
    console.log(error);
    return {
      props: {
        Reporte: [],
      },
    };
  }
};
