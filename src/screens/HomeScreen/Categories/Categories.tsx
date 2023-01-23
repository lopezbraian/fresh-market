import React from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import img1 from "../../../../assets/images/menus/Rectangle9.png";
import img2 from "../../../../assets/images/menus/Rectangle10.png";
import img3 from "../../../../assets/images/menus/Rectangle11.png";
import img4 from "../../../../assets/images/menus/Rectangle12.png";
import img5 from "../../../../assets/images/menus/Rectangle13.png";

const categories = [
  {
    id: 1,
    name: "Fruits",
    image: img1,
  },
  {
    id: 2,
    name: "Meat",
    image: img2,
  },
  {
    id: 3,
    name: "Rice",
    image: img3,
  },
  {
    id: 4,
    name: "Meals",
    image: img4,
  },
  {
    id: 5,
    name: "Bakery",
    image: img5,
  },
];

const Categories = () => {
  return (
    <View
      style={{
        margin: 20,
        marginLeft: 0,
        marginRight: 0,
      }}
    >
      <Text
        style={{
          fontSize: 16,
          fontFamily: "Roboto",
          fontWeight: "700",
        }}
      >
        Categories
      </Text>
      <ScrollView horizontal={true}>
        <View style={styles.list}>
          {categories.map((category) => (
            <ItemCategories key={category.id} category={category} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const ItemCategories = ({
  category,
}: {
  category: {
    id: number;
    name: string;
    image: string;
  };
}) => {
  return (
    <View
      style={{
        margin: 10,
      }}
    >
      <Image
        style={{
          borderRadius: 10,
        }}
        source={category.image}
      />
      <Text
        style={{
          fontSize: 13,
          fontFamily: "Roboto",
          fontWeight: "600",
          lineHeight: 20,
          color: "#000",
          opacity: 0.7,
        }}
      >
        {category.name}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default Categories;
