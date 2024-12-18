import Link from "next/link";

export default function Header() {
  return (
    <header className="p-2">
      <nav className="flex gap-4 justify-center bg-cyan-800 p-1 rounded">
        <Link href="/">Inicio</Link>
        <Link href="/contacto/">Contacto</Link>
        <Link href="/precio/">Precio</Link>
      </nav>
    </header>
  );
}
