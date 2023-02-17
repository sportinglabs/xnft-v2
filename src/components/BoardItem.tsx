import { Text, View, StyleSheet } from "react-native";

export function BoardItem(props: {
  rank: string;
  name: string;
  total: string;
  last: string;
}) {

  return (
    <View style={styles.boardItem}>
      <View style={styles.boardCellRank}>
        <Text style={styles.boardCellText}>{props.rank}</Text>
      </View>
      <View style={styles.boardCellName}>
        <Text style={styles.boardCellText}>{props.name}</Text>
      </View>
      <View style={styles.boardCellTotal}>
        <Text style={styles.boardCellText}>◎{props.total}</Text>
      </View>
      <View style={styles.boardCellLast}>
        <Text style={styles.boardCellText}>◎{props.last}</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  boardItem: {
    flexDirection: "row",
    backgroundColor: "#0a0a0a",
    width: "350px",
    marginTop: "5px",
    marginBottom: "5px",
    padding: "20px",
    borderRadius: 10,
    textAlign: "left",
  },

  //total 310px
  boardCellRank: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    width: "30px",
    margin: 1,
  },
  boardCellName: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    width: "150px",
    margin: 1,
  },
  boardCellTotal: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    width: "63px",
    margin: 1,
  },
  boardCellLast: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    width: "63px",
    margin: 1,
  },
  boardCellText: { color: "#ff7003", fontFamily: "Kanit_400Regular" },
});
