import Alert from "./component/Alert";

function App() {
  return (
    <>
      <Alert type={"error"} title={"Hello World"}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur,
          eligendi nesciunt accusantium dignissimos nobis quia veniam, molestiae
          ex earum, expedita ab <strong> cumque maiores voluptates </strong>
          aliquid similique atque sed.&nbsp;
          <a href="#" target="_blank">
            Deleniti
          </a>
          , aliquid.
        </p>
      </Alert>

      <Alert type={"note"} title={"Hello World"}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur,
          eligendi nesciunt accusantium dignissimos nobis quia veniam, molestiae
          ex earum, expedita ab <strong> cumque maiores voluptates </strong>
          aliquid similique atque sed.&nbsp;
          <a href="#" target="_blank">
            Deleniti
          </a>
          , aliquid.
        </p>
      </Alert>

      <Alert type={"sucssus"} title={"Hello World"}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur,
          eligendi nesciunt accusantium dignissimos nobis quia veniam, molestiae
          ex earum, expedita ab <strong> cumque maiores voluptates </strong>
          aliquid similique atque sed.&nbsp;
          <a href="#" target="_blank">
            Deleniti
          </a>
          , aliquid.
        </p>
      </Alert>

      <Alert type={"upgrade"} title={"Hello World"}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur,
          eligendi nesciunt accusantium dignissimos nobis quia veniam, molestiae
          ex earum, expedita ab <strong> cumque maiores voluptates </strong>
          aliquid similique atque sed.&nbsp;
          <a href="#" target="_blank">
            Deleniti
          </a>
          , aliquid.
        </p>
      </Alert>

      <Alert type={"warning"} title={"Hello World"}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur,
          eligendi nesciunt accusantium dignissimos nobis quia veniam, molestiae
          ex earum, expedita ab <strong> cumque maiores voluptates </strong>
          aliquid similique atque sed.&nbsp;
          <a href="#" target="_blank">
            Deleniti
          </a>
          , aliquid.
        </p>
      </Alert>
    </>
  );
}

export default App;
