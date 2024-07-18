const Work = ({ props }) => {
  const listItems = props.listItems;
  console.log(listItems);
  return (
    <main className="lg:w-[896px]">
      <div className="m-5 bg-white flex flex-col  p-8 rounded-lg lg:flex-row gap-12 ">
        <img className="w-[128px] h-[28px] " src={props.title} />
        <ul className="list-disc ml-5 font-bold text-xl">{props.name}
          {listItems.map((item, i) => (
            <li key={i} className="font-normal text-base text-gray-600">{item}</li>
          ))}
        </ul>
      </div>
    </main>
  );
};

export default Work;
