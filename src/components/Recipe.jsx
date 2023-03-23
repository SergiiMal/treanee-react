import PropTypes from 'prop-types';
import { BsAlarm } from 'react-icons/bs';
import { HiChartPie, HiChartBar } from 'react-icons/hi';
export const Recipe = ({ item: { name, image, time, servings, calories } }) => {
  return (
    <section>
      <img src={image} alt={name} width="240" />
      <h2>{name}</h2>

      <div>
        <div>
          <BsAlarm size={20} />
          {time}min
        </div>

        <div>
          <HiChartPie size={20} />
          {servings}servings
        </div>

        <div>
          <HiChartBar size={20} />
          {calories}calories
        </div>
      </div>
      <div>
        <h3>Difficulty</h3>
        <div>
          <span>Easy</span>
          <span>Medium</span>
          <span>Hard</span>
        </div>
      </div>
    </section>
  );
};

Recipe.prototypes = {
  item: PropTypes.shape({
    // id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    servings: PropTypes.number.isRequired,
    calories: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    // difficulty: PropTypes.oneOf(['easy', 'medium', 'hard']).isRequired,
  }).isRequired,
};
