function Header() {
  return (
    <>
      <div className="flex ">
        <h1 className="text-xl border-r-2 border- border-solid border-amber-600 pr-2">
          Melaju dengan yang baru
        </h1>
      </div>
    </>
  );
}

function Card({ src, tipe, description, price }) {
  return (
    <>
      <div className="flex-row ">
        <img src={src} className="w-96" />
        <span>{tipe}</span>
        <p>{description}</p>
        <span className="font-bold">Harga: {price}</span>
      </div>
    </>
  );
}

export default function Article() {
  return (
    <>
      <div className="px-10 m-10">
        <Header />
        <div className="flex justify-between">
          <Card
            src="./public/hd.jpg"
            tipe={"2023 Nightster Special"}
            description={
              "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos minima, iusto sapiente officiis perspiciatis cum."
            }
            price={"Rp 600.000.000,00"}
          />
          <Card
            src="./public/hd2.jpg"
            tipe={"2023 Breakout Special"}
            description={
              "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos minima, iusto sapiente officiis perspiciatis cum."
            }
            price={"Rp 700.000.000,00"}
          />
          <Card
            src="./public/hd3.jpg"
            tipe={"2023 Road Glide Special"}
            description={
              "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos minima, iusto sapiente officiis perspiciatis cum."
            }
            price={"Rp 1.100.000.000,00"}
          />
        </div>
      </div>
    </>
  );
}
