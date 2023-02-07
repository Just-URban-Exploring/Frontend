import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./css/Global.css";
import { Navbar } from "./components/Navbar/Navbar.jsx";
import { Profile } from "./pages/Profile.jsx";
import { FavoritePlaces } from "./pages/FavoritePlaces.jsx";
import { Einstellung } from "./pages/Einstellung.jsx";
import { Standort } from "./pages/Standartort.jsx";
import { Registration } from "./pages/Registration.jsx";
import { IconsInfoPage } from "./pages/IconsInfosPage.jsx";
import { Icons } from "./components/Icons.jsx";
import Map from "./components/Map.jsx";
import { Login } from "./pages/Login.jsx";
import { Main } from "./pages/Main-Page.jsx";
import { NextDestination } from "./components/NextDestination.jsx";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Navbar to="/" />}>
          {" "}
        </Route>
        <Route path="/main" element={<Main />}>
          {" "}
        </Route>
        <Route path="/iconsoptions" element={<NextDestination />}>
          {" "}
        </Route>
        <Route path="/profile" element={<Profile />}>
          {" "}
        </Route>
        <Route path="/favoriteplaces" element={<FavoritePlaces />}>
          {" "}
        </Route>
        <Route path="/standort" element={<Standort />}>
          {" "}
        </Route>
        <Route path="/einstellung" element={<Einstellung />}>
          {" "}
        </Route>
        <Route path="/registrierung" element={<Registration />}>
          {" "}
        </Route>
        <Route path="/login" element={<Login />}>
          {" "}
        </Route>
        <Route path="/iconsinfosPage" element={<IconsInfoPage />}>
          {" "}
        </Route>
        <Route path="/icons" element={<Icons />}>
          {" "}
        </Route>
        <Route path="/map" element={<Map />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
