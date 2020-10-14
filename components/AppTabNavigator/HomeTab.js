import React, {useLayoutEffect, useState, useEffect} from 'react';
import { View, Text, StyleSheet, Button, ActivityIndicator } from "react-native"
import {Container, Content, Icon} from "native-base"
import CardComponent from "../CardComponent"
import axios from "axios"

function HomeTab ({navigation}) {

    useLayoutEffect(() => {
        navigation.setOptions({
            tabBarIcon: ({ color }) => (
              <Icon name="home" style={{ color: color }} />
            )
    });
  }, [navigation]);

  const [feeds, setFeeds] = useState([]);

  const fetchFeeds = async () => {
    const res = await axios.post('https://api.steemit.com', {
      id: 1,
      jsonrpc: "2.0",
      method: "call",
      params: [
        "database_api",
        "get_discussions_by_created",
        [{ tag: "kr", limit: 2 }]
      ]
    });

    if (res.data.result) {
      setFeeds(res.data.result);
    }    
  };

  useEffect(() => {
    fetchFeeds();
  }, []);

  const pageView = !feeds.length ? (
    <View>
      <ActivityIndicator animating size="large" />
      <Text style={{ marginTop: 10 }}>로딩중...</Text>
    </View>
  ) : 
    feeds.map((feed) => 
      <CardComponent data={feed} /> 
    );

  return (
    <Container style={styles.container}>
      <Content>
        {pageView}        
      </Content>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});

export default HomeTab;