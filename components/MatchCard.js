import React from "react";
import { Card, Text } from "@ui-kitten/components";
import { StyleSheet, Image, View } from "react-native";

function MatchCard(props) {
  let match = props.match;
  let navigation = props.navigation;

  return (
    <Card
      style={styles.card}
      onPress={() => navigation.navigate("Highlight", { embed: match.embed })}
    >
      <Image style={styles.thumbnail} source={{ uri: match.thumbnail }} />
      <Text style={styles.title}>{match.title}</Text>
      <Text category="c2">{match.competition.name}</Text>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    margin: 8,
    width: "90%",
  },
  thumbnail: {
    height: 144,
    marginBottom: 4,
  },
  title: {
    fontWeight: "bold",
  },
});

export default MatchCard;
