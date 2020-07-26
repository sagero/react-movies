import React from "react";

const reactDemoElement = React.createElement(
  "h2",
  { className: "element" },
  "Hello word - reactDemoElement"
);

class ClassComponent extends React.Component {
  render() {
    return <h2 className="components">Class components</h2>;
  }
}

class PureComponent extends React.PureComponent {
  render() {
    return (
      <h2 className="pure_components">Class components via PureComponent</h2>
    );
  }
}

const FunctionalComponent = () => <h2>FunctionalComponent</h2>;

export default function App() {
  return (
    <div className="App">
      <h1>Task 1: Core concepts</h1>
      {reactDemoElement}
      <ClassComponent />
      <PureComponent />
      <FunctionalComponent />
    </div>
  );
}
