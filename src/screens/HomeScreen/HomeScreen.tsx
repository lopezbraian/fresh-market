import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../components/Header";
import Searcher from "../../components/Searcher";
import { Categories } from "./Categories";
import OrderNow from "./OrderNow/OrderNow";

const HomeScreen = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        padding: 20,
        paddingTop: 0,
        backgroundColor: "#fff",
      }}
    >
      <ScrollView>
        <Header />
        <View style={styles.containerMessage}>
          <Text style={styles.message}>Hello Chegue!</Text>
          <Text style={styles.message}>What are you looking for?</Text>
        </View>
        <View style={styles.containerSearcher}>
          <Searcher />
        </View>
        <OrderNow />
        <Categories />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  containerSearcher: {
    marginTop: 20,
  },
  containerMessage: {
    marginTop: 20,
  },
  message: {
    fontSize: 13,
    fontFamily: "Roboto",
    fontWeight: "600",
    lineHeight: 20,
  },
});

export default HomeScreen;
