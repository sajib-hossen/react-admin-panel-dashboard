import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import List from "./pages/List/List";
import Login from "./pages/Login/Login";
import New from "./pages/New/New";
import Single from "./pages/Single/Single";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />}></Route>
            <Route path="login" element={<Login />}></Route>
            <Route path="users">
              <Route index element={<List />}></Route>
              <Route path=":userId" element={<Single />}></Route>
              <Route path="new" element={<New />}></Route>
            </Route>
            <Route path="products">
              <Route index element={<List />}></Route>
              <Route path=":productId" element={<Single />}></Route>
              <Route path="new" element={<New />}></Route>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
      ,
    </div>
  );
}

export default App;
