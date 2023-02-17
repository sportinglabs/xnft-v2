import { Text, View, StyleSheet, ScrollView } from "react-native";
import { usePublicKeys, useSolanaConnection } from "../hooks/xnft-hooks";
import { PublicKey } from "@solana/web3.js";

import { StakingItem } from "../components/StakingItem";
import { usePools } from "../hooks/usePools";
import { stake } from "../sdk";
import { useNFTs } from "../hooks/useNFTs";

export function StakingScreen() {
  const pools = usePools();
  console.log(pools);

  const nfts = useNFTs();
  console.log(nfts);

  const connection = useSolanaConnection() //create a connection
  const wallet = usePublicKeys(); //initialize wallet
  
  const stakeFunction = async () => {

    try {
      console.log(wallet.toBase58()); //test wallet

      // const response = await stake(
      //   connection,
      //   wallet,
      //   new PublicKey("AuSEFWEjek6qveQotqHRZxFhGRdEb1Wwub4gSCqaqLpT")
      // ); //execute staking function

      // console.log(response); //print out
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
    >
      <View style={styles.staking}>
        <View style={styles.stakingContent}>
          <View>
            <View style={styles.stakingTitleContainer}>
              <Text style={styles.stakingTitle}>Staking</Text>
            </View>
            <StakingItem
              name={"Red Bull RB9"}
              rate={10}
              earnedAmount={430}
              stakeFunction={stakeFunction}
            />
            <StakingItem
              name={"Red Bull RB9"}
              rate={10}
              earnedAmount={430}
              stakeFunction={stakeFunction}
            />
            <StakingItem
              name={"Red Bull RB9"}
              rate={10}
              earnedAmount={430}
              stakeFunction={stakeFunction}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  staking: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "center",
    margin: "",
    padding: "0",
    backgroundColor: "black",
    minHeight: "100vh",
  },
  stakingContent: {
    paddingTop: "15vh",
  },
  stakingTitle: {
    color: "#FFFFFF",
    fontSize: 32,
    fontWeight: "800",
    textAlign: "center",
    fontFamily: "Kanit_600SemiBold",
  },
  stakingTitleContainer: {
    width: "100%",
  },
});
