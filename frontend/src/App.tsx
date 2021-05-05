import Nav from "./components/Nav";
import Footer from "./components/Footer";
import DataTable from "./components/DataTable";

function App() {
  return (
    <>
      <Nav />
      <div className="container">
        <h1 className="text-primary">Hello World</h1>
        <DataTable />
      </div>
      <Footer />
    </>
  );
}

export default App;
