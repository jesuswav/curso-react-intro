import React from "react";
import './TodosLoading.css';

function TodosLoading() {
  return (
    <div className="container">
      <div className="loading-container"></div>
      <p>Cargando...</p>
    </div>
  );
}

export { TodosLoading };
