import NavbarComponent from "./components/NavbarComponent";
import StateCountComponent from "./components/StateCountComponent";
import "./App.css";
import ChildComponent from "./components/ChildComponent";
import LikeComponent from "./components/LikeComponent";
import ExpandableTextComponent from "./components/ExpandableTextComponent";

function App() {
  return (
    <>
      <NavbarComponent />
      <StateCountComponent />
      <br />
      <hr />
      <br />
      <ChildComponent>
        <h1>This is a child!</h1>
        <p>Sample paragraph.</p>
      </ChildComponent>
      <br />
      <hr />
      <LikeComponent onClick={() => console.log("Clicked")} />
      <hr />
      <br />
      <ExpandableTextComponent maxChars={20}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti non
        dolore aut corporis sequi nihil eligendi natus nam. Corporis a ea sint
        non nihil qui, distinctio adipisci fugiat? Ipsa, tenetur. Lorem ipsum
        dolor, sit amet consectetur adipisicing elit. Magnam molestias
        doloremque non quas quibusdam sint hic, ratione dolorem nam in
        exercitationem natus minima ducimus culpa a laboriosam! Incidunt,
        corporis aliquam.
      </ExpandableTextComponent>
    </>
  );
}

export default App;
