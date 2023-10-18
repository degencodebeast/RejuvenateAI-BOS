import { useEffect } from "react";
import {
  createMockUser,
  createStackNavigator,
  initRefreshService,
  mockUser,
  useAuth,
} from "near-social-bridge";

import Home from "@app/iframe-pages/Home";
import Profile from "@app/iframe-pages/Profile";
import List from "@app/iframe-pages/List";

const { Navigator, Screen } = createStackNavigator();


const Routes = () => {
    console.log(
      "localStorage getItem(name):",
      window.localStorage.getItem("name")
    );
  
    useEffect(() => {
      // NOTE: should use it only for DEV
      initRefreshService();
    }, []);
  
    const auth = useAuth();
    console.log("Auth:", auth);
  
    return (
      <Navigator autoHeightSync>
        <Screen name="member" component={Home} />
        <Screen name="nutritionist" component={Profile} iframeHeight={200} />
        <Screen name="nutritionists" component={List} />
      </Navigator>
    );
  };
  
  export default Routes;