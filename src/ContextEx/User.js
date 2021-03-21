import React, { useContext } from 'react';
import { UserContext, ThemeContext ,ThemeContext1 } from './Page';

function User() {
  const user = useContext(UserContext);
  const theme = useContext(ThemeContext);
  const lool = useContext(ThemeContext1);

  return (
    <div>
      {user.name} | {theme.name} | {lool.name}
    </div>
  );
}

export default User;
