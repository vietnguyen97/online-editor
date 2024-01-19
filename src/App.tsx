import CodeBody from "./components/code";
import Result from "./components/code/Result";
import DataProvider from "./components/context/DataProviderEditor";
import Header from "./components/header";

function App() {
  return (
    <>
      <DataProvider>
        <Header />
        <CodeBody />
        <Result />
      </DataProvider>
    </>
  );
}

export default App;
