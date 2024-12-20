import Path from "@/components/links/Path/Path";
import { ROUTER } from "../../../app/router";

const { index, contacto, precio } = ROUTER;

export default function Header() {
  return (
    <header>
      <nav className="flex gap-4 justify-center bg-cyan-800 p-2">
        <Path href={index.path}>{index.display}</Path>
        <Path href={precio.path}>{precio.display}</Path>
        <Path href={contacto.path}>{contacto.display}</Path>
      </nav>
    </header>
  );
}
