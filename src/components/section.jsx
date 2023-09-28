export default function Section({ isi }) {
  return (
    <>
      <div className="flex flex-col justify-center items-center p-10">
        <h1 className="text-4xl">Raih Motor Impian Anda Bersama Kami</h1>
        <ul className="mt- flex gap-2 p-5 font-semibold">
          <li className="hover:text-amber-600 border-r-2 border- border-solid border-black px-1">
            Sport
          </li>
          <li className="hover:text-amber-600 border-r-2 border- border-solid border-black px-1">
            Cruiser
          </li>
          <li className="hover:text-amber-600 hover:m">
            Grand American Touring
          </li>
        </ul>
      </div>
    </>
  );
}
