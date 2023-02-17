import { Text, View, StyleSheet, ScrollView } from "react-native";
import { BoardItem } from "../components/BoardItem";

export function LeaderboardScreen() {
  const items = [
    { rank: "1", name: "rustintern", total: "1200", last: "10" },
    { rank: "2", name: "Lazycipher", total: "1100", last: "10" },
    { rank: "3", name: "dinesh", total: "1000", last: "10" },
    { rank: "4", name: "M2DT", total: "900", last: "10" },
    { rank: "5", name: "Kulture", total: "800", last: "10" },
    { rank: "6", name: "Brandon", total: "700", last: "10" },
    { rank: "7", name: "John", total: "600", last: "10" },
    { rank: "1", name: "rustintern", total: "1200", last: "10" },
    { rank: "2", name: "Lazycipher", total: "1100", last: "10" },
    { rank: "3", name: "dinesh", total: "1000", last: "10" },
    { rank: "4", name: "M2DT", total: "900", last: "10" },
    { rank: "5", name: "Kulture", total: "800", last: "10" },
    { rank: "6", name: "Brandon", total: "700", last: "10" },
    { rank: "7", name: "John", total: "600", last: "10" },
    { rank: "1", name: "rustintern", total: "1200", last: "10" },
    { rank: "2", name: "Lazycipher", total: "1100", last: "10" },
    { rank: "3", name: "dinesh", total: "1000", last: "10" },
    { rank: "4", name: "M2DT", total: "900", last: "10" },
    { rank: "5", name: "Kulture", total: "800", last: "10" },
    { rank: "6", name: "Brandon", total: "700", last: "10" },
    { rank: "7", name: "John", total: "600", last: "10" },
    { rank: "1", name: "rustintern", total: "1200", last: "10" },
    { rank: "2", name: "Lazycipher", total: "1100", last: "10" },
    { rank: "3", name: "dinesh", total: "1000", last: "10" },
    { rank: "4", name: "M2DT", total: "900", last: "10" },
    { rank: "5", name: "Kulture", total: "800", last: "10" },
    { rank: "6", name: "Brandon", total: "700", last: "10" },
    { rank: "7", name: "John", total: "600", last: "10" },
  ];
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
    >
      <View style={styles.leaderboard}>
        <View style={styles.leaderboardContent}>
          <View>
            <View style={styles.leaderboardTitleContainer}>
              <Text style={styles.leaderboardTitle}>Leaderboard</Text>
            </View>
            <View style={styles.leaderboardCategoryRow}>
              <View style={styles.leaderboardCellRank}>
                <Text style={styles.leaderboardCategoryName}>#</Text>
              </View>
              <View style={styles.leaderboardCellName}>
                <Text style={styles.leaderboardCategoryName}>Name</Text>
              </View>
              <View style={styles.leaderboardCellTotal}>
                <Text style={styles.leaderboardCategoryName}>Total</Text>
              </View>
              <View style={styles.leaderboardCellLast}>
                <Text style={styles.leaderboardCategoryName}>Last</Text>
              </View>
            </View>
            {items.map((item, index) => (
              <BoardItem
                rank={item.rank}
                name={item.name}
                total={item.total}
                last={item.last}
                key={index}
              />
            ))}
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  leaderboard: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "center",
    margin: "",
    padding: "0",
    backgroundColor: "black",
    minHeight: "100vh",
  },
  leaderboardContent: {
    paddingTop: "15vh",
  },
  leaderboardTitle: {
    color: "white",
    fontSize: 32,
    fontWeight: "800",
    textAlign: "center",
    fontFamily: "Kanit_600SemiBold",
  },
  leaderboardTitleContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  leaderboardCategoryRow: {
    flexDirection: "row",
    width: "350px",
    marginTop: "5px",
    marginBottom: "5px",
    padding: "20px",
    borderRadius: 10,
    textAlign: "left",
  },
  leaderboardCategoryName: {
    color: "#f5bc90",
    fontFamily: "Kanit_400Regular",
  },
  leaderboardCellRank: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    width: "30px",
    margin: 1,
  },
  leaderboardCellName: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    width: "150px",
    margin: 1,
  },
  leaderboardCellTotal: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    width: "63px",
    margin: 1,
  },
  leaderboardCellLast: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    width: "63px",
    margin: 1,
  },
});
