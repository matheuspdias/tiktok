import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function New() {
  return (
    <View styles={styles.container}>
      <Text>Página Cadastrar novo video</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
