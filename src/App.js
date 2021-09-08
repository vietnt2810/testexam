import "./App.css";
import customHook from "./hooks/customHook";
function App() {
  const [user, index, nextPage, previousPage] = customHook();
  return (
    <div className="App">
      <h4>学生一覧：[Huyen, Hoa, Hung, Long]</h4>
      <h4>位置：{user[index].id}</h4>
      <h4>名前：{user[index].name}</h4>
      <button type="" onClick={nextPage}>
        次に
      </button>
      <button type="" style={{ marginLeft: 20 }} onClick={previousPage}>
        前に
      </button>
    </div>
  );
}

export default App;
