import React, { useState, useEffect } from "react";
import { Layout } from "@ui-kitten/components";
import { ScrollView, StyleSheet } from "react-native";

import fetch from "isomorphic-unfetch";

import Loader from "../components/Loader";
import MatchCard from "../components/MatchCard";

function Home(props) {

  const [data, setData] = useState([]);
  let navigation = props.navigation;
  useEffect(() => {
    fetch("https://www.scorebat.com/video-api/v1/")
      .then((r) => r.json())
      .then((data) => setData(data));
  }, []);

  return (
    <ScrollView style={styles.scrollView}>
      <Layout style={styles.layout}>
        {data.length ? (
          data.map((match, index) => <MatchCard match={match} key={index} navigation={navigation} />)
        ) : (
          <Loader />
        )}
      </Layout>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  layout: {
    alignItems: "center",
  },
  scrollView: {
    paddingVertical: 0,
  },
});

export default Home;
