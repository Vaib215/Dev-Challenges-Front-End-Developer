import Button from "./components/Button";

function App() {
  return (
    <div className="App">
      <Button>Default</Button>
      <Button variant="outline">Default</Button>
      <Button variant="text">Default</Button>
      <Button color="primary" disableShadow>Default</Button>
      <Button disabled>Default</Button>
      <Button variant="text" disabled>Default</Button>
      <Button size="sm">Default</Button>
      <Button size="md">Default</Button>
      <Button size="lg">Default</Button>
      <Button color="primary">Default</Button>
      <Button color="secondary">Default</Button>
      <Button color="danger">Default</Button>
      <Button startIcon="menu" endIcon="check">Default</Button>
    </div>
  );
}

export default App;
