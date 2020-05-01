import React, { Component } from 'react';
import { WebView } from 'react-native-webview';
import { Text, View, Button } from 'react-native';

class HW extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      showMessage: ""
    };
  }  

  componentDidMount() {
  }

  // RN向H5发送消息
  sendMessageToH5(){
    console.log("在 sendMessageToH5  方法中....");
    console.log(this.ref);
    console.log(this.refs);
    //this.refs.webview.postMessage('RN向H5发送的消息');
  }

  // RN接收H5的消息
  onMessage = (data) => {
    console.log("RN收到H5的消息：：：：");
    console.log(data);
  }

  injectJS(){
    const script = 'window.showData(12231);';  // eslint-disable-line quotes
    
    console.log(this.refs.webView);
      this.refs.webView.postMessage("rn给h5发的消息");
      //this.webviewInject.injectedJavaScript(script);
     
  }
  
  render() {

    const injectedJavascript = `(function() {
      window.postMessage = function(data) {
        window.ReactNativeWebView.postMessage(data);
      };
    })()`;
    // injectedJavaScript={injectedJavascript}
    return (

          <View style={{ marginTop: 20, height: 1000 }}>
            <Text style={{ marginTop: 20 }} onPress={() => this.injectJS()}>press me</Text>
            <WebView
              ref='webView'
              source={{ uri: 'http://47.94.8.210:8080/html5/2222.html' }}
              style={{ marginTop: 20, height: 600 }}
              onMessage={this.onMessage.bind(this)}
              onLoadEnd={(e) => {
                console.log("onLoadEnd...");
                //console.log(this.refs.webView);
                
                //this.sendMessageToH5();
              }}
              allowFileAccess={true}//是否允许访问系统文件
              startInLoadingState={true}
              scalesPageToFit={true}
              scrollEnabled={false}
              allowsInlineMediaPlayback={true}
              allowsFullscreenVideo={true}
              originWhitelist={['*']}
            />

            
          </View>
          
    );
  }
}


class HW2 extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      showMessage: ""
    };
  }  
  
  render() {
 
    let datas = ["111", "222"];
    let textFun1 = `sendH5data(${datas})`;
    return (
          <WebView
            source={{ uri: 'http://47.94.8.210:8080/html5/2222.html' }}
            injectedJavaScript={`${textFun1}`}
            style={{ marginTop: 20 }}
            onMessage={(event) => {
              console.log("RN收到H5的消息：：：：");
              console.log(event.nativeEvent.data);
            }}
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