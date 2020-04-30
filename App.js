import React, { Component } from 'react';
import { WebView } from 'react-native-webview';
import { Text, View } from 'react-native';

class HW extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      showMessage: ""
    };
  }  
  render() {
 
    return (
          <WebView
            source={{ uri: 'http://47.94.8.210:8080/html5/2222.html' }}
            style={{ marginTop: 20 }}
          />
    );
  }
}


export default class HelloWorldApp extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      showMessage: ""
    };
  }  
  render() {
 
    return (
        <>
          <HW />
          <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text>Hello, world12!</Text>
          </View>
        </>
    );
  }
}