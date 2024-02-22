import { useState } from 'react';
import { StyledTogglerTheme } from './TogglerTheme.styled';

const TogglerTheme = () => {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  return (
    <StyledTogglerTheme onClick={handleToggle} isToggled={isToggled}>
      <button className="toggler-btn"></button>
    </StyledTogglerTheme>
  );
};

export default TogglerTheme;
