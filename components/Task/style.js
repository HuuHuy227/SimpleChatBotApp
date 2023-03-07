import { StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    item: {
        width: "85%",
        flexDirection: "row",
        marginBottom: 10,
        alignItems: "center",
      },
      icon: {
        width: 50,
        height: 50,
      },
      content: {
        //width: "80%",
        backgroundColor: "#F5F5F5",
        borderRadius: 18,
        padding: 15,
      },
      text: {
        color: "#282828"
      },
      item1: {
        marginLeft: "auto",
        marginBottom: 10,
        alignItems: "center",
      },
      text1: {
        color: "#fff"
      },
      content1: {
        width: "80%",
        backgroundColor: "#00CDBD",
        padding: 15,
        borderRadius: 18,
      },
      icon1: {
        display: "none"
      },
  });

  export default styles;