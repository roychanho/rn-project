import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomTapNavigator from "./BottomTapNavigator";
import PostDetail from "../components/PostPage/PostDetail";
const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="BottomTapNavigator"
        component={BottomTapNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PostDetail"
        component={PostDetail}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
