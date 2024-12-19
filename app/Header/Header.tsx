import Path from "@/components/Path/Path";
import { ROUTER } from "../router";

const { index, contacto, precio } = ROUTER;

export default function Header() {
  return (
    <header className="p-2">
      <nav className="flex gap-4 justify-center bg-cyan-800 p-1 rounded">
        <Path href={index.path}>{index.display}</Path>
        <Path href={contacto.path}>{contacto.display}</Path>
        <Path href={precio.path}>{precio.display}</Path>
      </nav>
    </header>
  );
}
