import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomTapNavigator from "./BottomTapNavigator";

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="BottomTapNavigator"
        component={BottomTapNavigator}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
