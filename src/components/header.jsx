export default function Header({ picture }) {
  return (
    <>
      <nav className="flex flex-row justify-between px-5 py-5 text-xl bg-slate-950 text-white">
        <h1>HAMPIR-DAVIDSON</h1>
        <ul className="flex gap-5 font-light">
          <li className="hover:text-amber-600">Home</li>
          <li className="hover:text-amber-600">Test Drive</li>
          <li className="hover:text-amber-600">Dealer</li>
          <li className="hover:text-cyan-700">HAMPIR-Eco</li>
        </ul>
      </nav>
    </>
  );
}
