import { StyleSheet } from "react-native";

export default StyleSheet.create({
  image: {
    width: "100%",
    aspectRatio: 5 / 3,
  },
  page: {
    flex: 1,
  },
  title: {
    fontSize: 35,
    fontWeight: "600",
    marginVertical: 10,
  },
  subtitle: {
    color: "grey",
    fontSize: 15,
  },
  container: {
    margin: 10,
  },
  iconContainer: {
    position: "absolute",
    top: 40,
    left: 10,
  },
  menuTitle: {
    marginTop: 10,
    fontSize: 16,
    letterSpacing: 0.7,
  },
});
