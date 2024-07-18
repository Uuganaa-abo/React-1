import Image from "next/image";

export function Work() {
  return (
    <main>
      <div>
        <Tag />
      </div>
      <div className="text-center">text</div>
      <div>
        <WorkCard />
        <WorkCard />
        <WorkCard />
      </div>
    </main>
  );
}
function WorkCard() {
  return (
    <div className="mb-4 rounded-lg shadow">
      <div className="p-4 bg-slate-100">
        {/* <Image src={"/Picture.png"}
            width={279}
            height={192}/> */}
      </div>
      <div>
        <div>
          <div>Fiskil</div>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in
            faucibus orci luctus et ultrices posuere cubilia curae.
          </div>
        </div>
        <div><Tag /></div>
      </div>
    </div>
  );
}
function Tag() {
  return <div className="px-4 py-1 rounded-xl bg-slate-300">React</div>;
}
