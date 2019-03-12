
import { createStackNavigator, createAppContainer } from "react-navigation";

//pages
import { SearchPage, DetailsPage } from "@pages";

const AppNavigator = createStackNavigator(
    {
      SearchPage: SearchPage,
      DetailsPage: DetailsPage
    },
    
    {
      initialRouteName: "SearchPage"
    }
  );

  export default createAppContainer(AppNavigator);