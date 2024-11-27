import { RootLayout } from "@/layouts/RootLayout";
import { Routes, Route } from "react-router";

function App() {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route index element={<></>} />
        <Route path="network" element={<div>hi</div>} />
      </Route>
    </Routes>
  );
}

export default App;
