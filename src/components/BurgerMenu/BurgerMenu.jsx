import { StyledBurgerMenu } from './BurgerMenu.styled';

const BurgerMenu = ({ onClick }) => {
  return (
    <StyledBurgerMenu>
      <button onClick={onClick} className="burger-btn">
        <svg
          className="burger-svg"
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M28 13.3333H4" stroke="#F3F3F3" />
          <path d="M28 8H4" stroke="#F3F3F3" />
          <path d="M28 18.6667H4" stroke="#F3F3F3" />
          <path d="M28 24H4" stroke="#F3F3F3" />
        </svg>
      </button>
    </StyledBurgerMenu>
  );
};

export default BurgerMenu;
