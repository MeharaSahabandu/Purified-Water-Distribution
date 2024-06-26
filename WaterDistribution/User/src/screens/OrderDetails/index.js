import { View, Text, StyleSheet, Image, FlatList } from "react-native";
import orders from "../../../assets/data/orders.json";
import restaurants from "../../../assets/data/restaurants.json";
import styles from "./styles";
import DishListItem from "../../components/DishListItem";
import OrderListItem from "../../components/OrderListItem";
import BasketDishItems from "../../components/BasketDishItem";

const order = orders[0];

const OrderDetailsHeader = () => {
  return (
    <View>
      <View style={styles.page}>
        <Image source={{ uri: order.Restaurant.image }} style={styles.image} />
        <View style={styles.container}>
          <Text style={styles.title}>{order.Restaurant.name}</Text>
          <Text style={styles.subtitle}>{order.status} &#8226; 2 days ago</Text>
          <Text style={styles.menuTitle}>Your Orders</Text>
        </View>
      </View>
    </View>
  );
};

const OrderDetails = () => {
  return (
    <FlatList
      ListHeaderComponent={OrderDetailsHeader}
      data={restaurants[0].dishes}
      renderItem={({ item }) => <BasketDishItems basketDish={item} />}
    />
  );
};

export default OrderDetails;
