import { View, Text } from "react-native";
import React from "react";

const PostDetail = ({ route, navigation }) => {
  const id = route.params.postId;
  const title = route.params.title;
  const body = route.params.body;

  return (
    <View className="flex">
      <Text className="mb-5 text-lg font-bold">{title}</Text>
      <Text className="text-base">{body}</Text>
    </View>
  );
};

export default PostDetail;
