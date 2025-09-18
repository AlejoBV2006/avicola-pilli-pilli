import React, { useState } from "react";
import "./App.css"; 

export default function App() {
  const [activeTab, setActiveTab] = useState("productos");
  const [modalOpen, setModalOpen] = useState(false);
  const [productoSeleccionado, setProductoSeleccionado] = useState("");
  const [pedido, setPedido] = useState({
    nombre: "",
    telefono: "",
    cantidad: 1,
  });

  const abrirPedido = (producto) => {
    setProductoSeleccionado(producto);
    setModalOpen(true);
  };

  const cerrarPedido = () => {
    setModalOpen(false);
    setPedido({ nombre: "", telefono: "", cantidad: 1 });
  };

  const enviarPedido = () => {
    const { nombre, telefono, cantidad } = pedido;
    if (nombre && telefono && cantidad > 0) {
      alert(
        `✅ Pedido confirmado:\nProducto: ${productoSeleccionado}\nNombre: ${nombre}\nTeléfono: ${telefono}\nCantidad: ${cantidad}`
      );
      cerrarPedido();
    } else {
      alert("⚠️ Por favor completa todos los campos.");
    }
  };

  return (
    <div className="container">
      <header>
        <h1>Avícola Pilli Pilli</h1>
        <p>¡Los mejores pollos en línea!</p>
      </header>

      <nav>
        <a
          href="#"
          className={activeTab === "productos" ? "active" : ""}
          onClick={(e) => {
            e.preventDefault();
            setActiveTab("productos");
          }}
        >
          Productos
        </a>
        <a
          href="#"
          className={activeTab === "informacion" ? "active" : ""}
          onClick={(e) => {
            e.preventDefault();
            setActiveTab("informacion");
          }}
        >
          Información
        </a>
      </nav>

      {/* Productos */}
      {activeTab === "productos" && (
        <div className="tab-content active">
          <h2>Nuestros Productos</h2>
          <div className="products">
            {[
              { nombre: "Pollo Entero", precio: "15.000" },
              { nombre: "Pechuga de Pollo", precio: "10.000" },
              { nombre: "Muslos de Pollo", precio: "8.000" },
              { nombre: "Alitas BBQ", precio: "12.000" },
              { nombre: "Nuggets de Pollo", precio: "9.000" },
            ].map((p, i) => (
              <div className="product" key={i}>
                <h3>{p.nombre}</h3>
                <p>Precio: ${p.precio}</p>
                <button onClick={() => abrirPedido(p.nombre)}>Pedir</button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Información */}
      {activeTab === "informacion" && (
        <div className="tab-content active">
          <div className="info-section">
            <h2>Información General</h2>
            <h3>Descripción del Contexto</h3>
            <ul>
              <li>
                <strong>El sector:</strong> El sector avícola se dedica a la cría
                de pollos y la producción de huevos para consumo humano...
              </li>
              <li>
                <strong>Su importancia:</strong> Provee una de las proteínas más
                accesibles y consumidas...
              </li>
              <li>
                <strong>Su impacto en la región:</strong> Contribuye
                significativamente al PIB agropecuario local...
              </li>
              <li>
                <strong>Sus productos:</strong> Carne de pollo, huevos y
                subproductos...
              </li>
              <li>
                <strong>Sus servicios:</strong> Incubación, cría, procesamiento y
                distribución...
              </li>
              <li>
                <strong>Innovación:</strong> Falta de trazabilidad y gestión de
                datos. Nuestra idea: plataforma digital centralizada.
              </li>
            </ul>
          </div>
        </div>
      )}

      {/* Modal */}
      {modalOpen && (
        <div className="modal" style={{ display: "flex" }}>
          <div className="modal-content">
            <h2>Pedir {productoSeleccionado}</h2>
            <input
              type="text"
              placeholder="Tu nombre"
              value={pedido.nombre}
              onChange={(e) => setPedido({ ...pedido, nombre: e.target.value })}
            />
            <input
              type="text"
              placeholder="Tu teléfono"
              value={pedido.telefono}
              onChange={(e) =>
                setPedido({ ...pedido, telefono: e.target.value })
              }
            />
            <input
              type="number"
              placeholder="Cantidad"
              min="1"
              value={pedido.cantidad}
              onChange={(e) =>
                setPedido({ ...pedido, cantidad: Number(e.target.value) })
              }
            />
            <div>
              <button className="btn-submit" onClick={enviarPedido}>
                Confirmar Pedido
              </button>
              <button className="btn-close" onClick={cerrarPedido}>
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}

      <footer>
        <p>© 2025 Avícola Pilli Pilli - Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}
