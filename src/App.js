import Table from './components/Table';
import Button from './components/Button'
function App() {
  return (
    <div className="App">
      <h1 style={{textAlign: 'center', fontSize: 50}}>Danh Sách Khách Hàng</h1>
      <div style={{textAlign: "right", margin: "1rem 1rem"}}>
      <Button />
      </div>
      <Table />
    </div>
  );
}

export default App;
