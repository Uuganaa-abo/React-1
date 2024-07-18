const { useState } = require("react");

const Test = (props) => {
  const { isOpen, setIsOpen, handleClick } = props;
  //   const [isOpen, setIsOpen] = useState(false);

  //   const handleClick = () => {
  //     setIsOpen(!isOpen);
  //   };

  return (
    <>
      {/* <button onClick={handleClick}>click</button> */}
      {isOpen === true ? (
        <div>
          <p>test modal</p>
          <button onClick={handleClick}>close</button>
        </div>
      ) : (
        console.log("closed")
      )}
    </>
  );
};

export default Test;
