import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const Section = ({ title, children }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Icon style={styles.chevron} name="chevron-right" size={30} color="#8B4513" />
      <View>{children}</View>
    </View>
  );
};

export default Section;

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "left",
    marginBottom: 10,
    color: "#8B4513",
    backgroundColor: "#FFDEAD",
    padding: 5,
    borderRadius: 8,
    marginLeft: 10
  },
  chevron: {
    marginBottom: 8,
  },
});