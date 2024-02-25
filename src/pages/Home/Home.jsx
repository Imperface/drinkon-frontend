import { HomeWrapper } from './Home.styled';
import HomeList from '../../components/HomeList/HomeList';
import hero from '../../images/heroImage/hero-desc@1x.png';
import { NavLink } from 'react-router-dom';

// !!! Має бути маршрут на /add, а не /add-drink

const Home = () => {
  return (
    <HomeWrapper>
      <div className="heroContainer">
        <div className="hero">
          <h1 className="title">Craft Your Perfect Drink with Drink Master</h1>

          <p className="titleAbout">
            Unlock your inner mixologist with Drink Master, your one-stop
            destination for exploring, crafting, and mastering the world's
            finest beverages.
          </p>

          <NavLink className="addDrink" to="/add-drink">
            Add drink
          </NavLink>
        </div>

        <div className="heroImg">
          <img
            className="img"
            src={hero}
            alt="hero"
            width="100%"
            height="100%"
          />
        </div>
      </div>
      <HomeList />

      <NavLink className="otherDrinks" to="/drinks">
        Other drinks
      </NavLink>
    </HomeWrapper>
  );
};
export default Home;
