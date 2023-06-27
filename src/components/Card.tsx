import FirstRow from "./FirstRow";
import SecondRow from "./SecondRow";
import ThirdRow from "./ThirdRow";

const Card = () => {
  return (
    <div className="w-[70%] h-[95%] bg-card-background p-4">
      <FirstRow />
      <SecondRow />
      <ThirdRow />
    </div>
  );
};

export default Card;
