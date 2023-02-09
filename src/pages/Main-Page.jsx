import { Navbar } from "../components/Navbar/Navbar.jsx";
import Map from "../components/Map.jsx";
import { Icons } from "../components/Icons.jsx";

export function Main() {
  return (
    <>
      <Navbar />
      {<Map />}
    </>
  );
}
