import { StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    Chat: {
        marginHorizontal: 20,
        marginBottom: 15,
        flexDirection: "row",
        width: "100%",
        alignItems: "center",
    },
    Input: {
        height: 45,
        width: "75%",
        backgroundColor: "#FAFAFA",
        borderRadius: 15,
        paddingLeft: 10,
        marginRight: 8,
    },
    iconWrapper: {
        height: 45,
        width: 45,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#01D5C5",
        borderRadius: 45,
    },
    icon: {
        fontSize: 25,
        color: "#fff",
        fontWeight: "bold",
    }
  });

  export default styles;