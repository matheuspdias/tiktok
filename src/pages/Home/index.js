import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Home() {
  return (
    <View styles={styles.container}>
      <Text>Página Home</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
