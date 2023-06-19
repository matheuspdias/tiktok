import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Inbox() {
  return (
    <View styles={styles.container}>
      <Text>Página Mensagens</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
