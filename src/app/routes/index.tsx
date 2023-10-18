import { useEffect } from 'react';
import {
  createMockUser,
  createStackNavigator,
  initRefreshService,
  mockUser,
  useAuth,
} from 'near-social-bridge';

import Home from '..';
import Profile from '../member/dashboard/index.tsx';

const { Navigator, Screen } = createStackNavigator();

const Routes = () => {
  console.log(
    'localStorage getItem(name):',
    window.localStorage.getItem('name')
  );

  useEffect(() => {
    // NOTE: should use it only for DEV
    initRefreshService();
  }, []);

  const auth = useAuth();
  console.log('Auth:', auth);

  return (
    <Navigator autoHeightSync>
      <Screen name='home' component={Home} />
      <Screen name='member' component={Profile} />
    </Navigator>
  );
};

export default Routes;
