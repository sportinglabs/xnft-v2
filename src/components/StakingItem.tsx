import { useState } from "react";
import { Text, Image, View, StyleSheet, Pressable } from "react-native";
import axios from "axios";

export function StakingItem(props: {
  name: string;
  rate: number;
  earnedAmount: number;
  stakeFunction: () => Promise<void>;
}) {
  const url =
    "https://api.helius.xyz/v0/tokens/metadata?api-key=6ab23117-c35c-4e3c-94f2-1ec14d058d0d";

  const getMetadata = async () => {
    const { data } = await axios.post(url, {
      mintAccounts: ["824ATHhPrv8Zyqt4WKNtLJ3hAaXEWbRN3ukqAH6GALRX"],
    });
    console.log("metadata: ", data);
  };

  const [staked, setStaked] = useState(false);
  return (
    <View style={styles.stakingItem}>
      <View>
        <View style={styles.stakingItemImageContainer}>
          <Image
            source={require("../media/car.png")}
            style={styles.stakingItemImage}
          />
        </View>
        <View style={styles.stakeDetails}>
          <View style={styles.stakeDetailName}>
            <Text style={styles.stakeDetailText}>{props.name}</Text>
          </View>
          <View style={styles.stakeDetailRate}>
            <Text style={styles.stakeDetailText}>
              ◎{props.rate.toString()}/day
            </Text>
          </View>
          <View style={styles.stakeDetailEarned}>
            <Text style={styles.stakeDetailText}>
              ◎{props.earnedAmount.toString()}
            </Text>
          </View>
        </View>
        <Pressable
          onPress={async () => {
            await props.stakeFunction();
            setStaked(!staked);
          }}
          style={({ pressed }) => [
            {
              backgroundColor: pressed ? "#1f1f1f" : "#ff7003",
              color: pressed ? "white" : "black",
            },
            styles.stakeButton,
          ]}
        >
          <Text style={styles.stakeButtonText}>
            {staked ? "unstake" : "stake"}
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  stakingItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0a0a0a",
    width: "350px",
    marginTop: "5px",
    marginBottom: "5px",
    padding: "10px",
    borderRadius: 20,
  },
  stakingItemImageContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  stakingItemImage: {
    opacity: 1,
    minWidth: "330px",
    minHeight: "170px",
    borderRadius: 10,
  },

  stakeDetails: {
    flexDirection: "row",
    backgroundColor: "#1f1f1f",
    width: "330px",
    marginTop: "10px",
    padding: "20px",
    borderRadius: 10,
    textAlign: "left",
  },

  //total 310px
  stakeDetailName: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    width: "110px",
  },
  stakeDetailRate: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    width: "90px",
  },
  stakeDetailEarned: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    width: "90px",
  },
  stakeDetailText: { color: "#ff7003", fontFamily: "Kanit_400Regular" },

  stakeButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "330px",
    marginTop: "10px",
    paddingTop: "10px",
    paddingBottom: "10px",
    borderWidth: 0,
    borderRadius: 10,
    textAlign: "center",
  },
  stakeButtonText: {
    fontFamily: "Kanit_600SemiBold",
    fontSize: 24,
  },
});
