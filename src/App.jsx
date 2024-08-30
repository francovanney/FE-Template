import React from "react";
import { Container } from "react-bootstrap";
import Example from "./components/Example/Example";

const App = () => {
  return (
    <div>
      <Container>
        <h1>BOOTSTRAPED FE MODULAR STYLES - TEMPLATE</h1>
        <Container>
          <p>
            Dentro de la carpeta src, crea una carpeta para tu componente, por
            ejemplo Button. Dentro, crea el archivo Button.jsx y
            <strong> Button.module.scss</strong>.
          </p>
          <p>En tu archivo Button.jsx, importa los estilos como un objeto:</p>
          <code>import styles from './Button.module.scss';</code>
          <br />
          <code>className=&#123;styles.btn&#125;</code>
        </Container>
        <Example />
      </Container>
    </div>
  );
};

export default App;
