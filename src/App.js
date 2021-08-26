import ReactDOM from "react-dom";
import Pet from "./Pet";


const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <Pet name="Luna" animal="Dog" breed="Havanese"/>
      <Pet name="Snuggles" animal="Bird" breed="Amazon Parrot"/>
      <Pet name="Genki" animal="Dog" breed="Mixed"/>
    </div>
  );
};

ReactDOM.render(<App/>, document.getElementById("root"));
