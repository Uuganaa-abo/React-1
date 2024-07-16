const Work = ({ props }) => {
  const listItems = props.listItems;
  console.log(listItems);
  return (
    <div className="m-5 bg-white flex flex-col w-[343px] p-5 rounded-lg">
      <img className="w-[128px] h-[28px] " src={props.title} />  
     
   
      <ul className="list-disc ml-5 ">
        {listItems.map((item, i) => (
          <li key={i} className="font-normal text-base text-gray-600">{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Work;
