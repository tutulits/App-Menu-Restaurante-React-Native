import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const AppBar = ({ title }) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Icon name="palm-tree" size={32} style={styles.logo}/>
        <Text style={styles.title}>{title}</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: "#FFDEAD",
  },
  container: {
    backgroundColor: "#FFDEAD",
    paddingVertical: 15,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: 'row',
    shadowColor: "#000",
    shadowOffset: {
	    width: 0,
	    height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.00,

elevation: 1,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#000",
  },
  logo: {
    marginHorizontal: 10
  }
});

export default AppBar;