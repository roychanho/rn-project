import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ManageExpense from "../screens/expenses/ManageExpense";
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
      {/* <Stack.Screen
        name="ManageExpense"
        component={ManageExpense}
        options={{
          presentation: "modal",
        }}
      /> */}
    </Stack.Navigator>
  );
};

export default HomeStack;
