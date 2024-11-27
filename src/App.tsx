import { RootLayout } from "@/layouts/RootLayout";
import { Routes, Route } from "react-router";
import { CIDRCalculator } from "./components/calculators/CIDR";
import { PasswordMeter } from "./components/PasswordMeter";

function App() {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route index element={<CIDRCalculator />} />
        <Route path="password-strength" element={<PasswordMeter />} />
      </Route>
    </Routes>
  );
}

export default App;
