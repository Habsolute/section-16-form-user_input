// import SimpleInput from "./components/SimpleInput";
import BasicForm from "./components/BasicForm";

function App(props) {
  function dataReceive(data) {
    // console.log(data);
  }
  return (
    <div className="app">
      {/* <SimpleInput /> */}
      <BasicForm receiveFormData={dataReceive} />
    </div>
  );
}

export default App;
