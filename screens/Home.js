import axios from "axios";
import ApiManager from "../util/ApiManager";
import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../store/authContext";
import PostList from "../components/PostPage/PostList";
import { constants } from "buffer";

const Home = ({ navigation }) => {
  const [fetchData, setFetchData] = useState([]);
  const [fetchedMessage, setFetchedMessage] = useState("");
  const authCtx = useContext(AuthContext);
  const token = authCtx.token;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        setFetchData(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  // useEffect(() => {
  //   axios
  //     .get(
  //       "https://react-http-1a1d5-default-rtdb.firebaseio.com/message.json?auth=" +
  //         token
  //     )
  //     .then((response) => {
  //       setFetchedMessage(response.data);
  //     });
  // }, []);

  function renderPostItem(itemData) {
    function pressHandler() {
      navigation.navigate("PostDetail", {
        postId: itemData.item.id,
        title: itemData.item.title,
        body: itemData.item.body,
      });
    }

    return <PostList title={itemData.item.title} onPress={pressHandler} />;
  }

  return (
    <SafeAreaView className="flex-1">
      <View style={styles.rootContainer}>
        <Text style={styles.title}>Welcome!</Text>
        <View className="grid grid-flow-row">
          <FlatList
            data={fetchData}
            key={(item) => item.id}
            keyExtractor={(item) => item.id}
            renderItem={renderPostItem}
            numColumns={2}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 32,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
  },
});
