import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Search() {
  return (
    <View styles={styles.container}>
      <Text>Página Buscar</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
