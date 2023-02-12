import {
  View,
  Pressable,
  Text,
  Image,
  StyleSheet,
  Platform,
} from "react-native";
import React from "react";

const PostList = ({ title, onPress }) => {
  return (
    <View className="w-1/2 px-2 ">
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => (pressed ? styles.buttonPressed : null)}
        onPress={onPress}
      >
        <View className="bg-slate-300 rounded">
          <Image
            className="w-full h-[100px]"
            source={{ uri: "https://picsum.photos/300/200" }}
          />
        </View>
        <View>
          <Text numberOfLines={2} className="px-10 py-5 text-center">{title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default PostList;

const styles = StyleSheet.create({
  postItem: {
    margin: 16,
    borderRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
    backgroundColor: "white",
    elevation: 4,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
  },
  buttonPressed: {
    opacity: 0.5,
  },
  innerContainer: {
    borderRadius: 8,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
    margin: 8,
  },
});
