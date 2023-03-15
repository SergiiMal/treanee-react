import { BsAlarm } from 'react-icons/bs';
import { HiChartPie, HiChartBar } from 'react-icons/hi';
export const Recipe = ({ recipe: { name, time, servings, calories } }) => {
  return (
    <div>
      <h2>{name}</h2>
      <div>
        <div>
          <BsAlarm />
          <p>{time} mins</p>
        </div>
        <div>
          <HiChartPie />
          <p>{servings} servings</p>
        </div>
        <div>
          <HiChartBar />
          <p>{calories} calories</p>
        </div>
      </div>
    </div>
  );
};
