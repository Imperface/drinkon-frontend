import {
  StyledTogglerTheme,
  StyledTogglerThemeMobile,
} from './TogglerTheme.styled';

export const TogglerTheme = () => {
  return (
    <StyledTogglerTheme>
      <button className="toggler-btn"></button>
    </StyledTogglerTheme>
  );
};

export const TogglerThemeMobile = () => {
  return (
    <StyledTogglerThemeMobile>
      <button className="toggler-btn"></button>
    </StyledTogglerThemeMobile>
  );
};

export default TogglerTheme;
