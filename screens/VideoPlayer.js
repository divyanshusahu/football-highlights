import React from "react";
import { StyleSheet } from "react-native";

import { WebView } from "react-native-webview";

function VideoPlayer(props) {
  let embed = props.route.params.embed;
  return (
    <WebView
      style={styles.player}
      originWhiteList={["*"]}
      source={{ html: embed }}
    />
  );
}

const styles = StyleSheet.create({
  player: {
    height: 200,
  },
});

export default VideoPlayer;
