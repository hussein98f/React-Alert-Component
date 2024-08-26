# React + TypeScript + Vite (React MultiType Alert Component)

This project is a component created using React.js and is designed to be suitable for various uses and applications. You can benefit from it by downloading and using it. Here’s how to download and use it.

Requirements:

- [Node-js](https://nodejs.org/en)

## Installation and Usage Instructions

```echo~
git clone https://github.com/hussein98f/React-Alert-Component.git
```

```echo~
cd React-Alert-Component
```

```echo~
yarn install
```

- You can use the item as follows:

```js
import Alert from "./component/Alert";

function App() {
  return (
    <>
      type you can Choose Type (upgrade,note,error,sucssus,warning) Customize
      your Title and Your body Content
      <Alert type={"error"} title={"Hello World"}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing .
          <strong> cumque voluptates </strong>
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
```
