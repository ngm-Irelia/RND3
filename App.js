/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import WebView from 'react-native-webview'
import {
    StyleSheet,
    View,
    Platform,
    ScrollView,
    TouchableOpacity,
    Text,
    Alert
} from 'react-native';

const html = Platform.select({
    android: require('./index.html'),
    ios: require('./index.html'),
})
export default class App extends Component {
    //接收HTML发出的数据
    _onMessage = (e) => {
        Alert.alert(e.nativeEvent.data)
    }

    injectJS = () => {
      let data = [
        {
          id:1,
          groupid:"日本",
          size:9080
        },{
          id:1,
          groupid:"中国",
          size:5080
        },{
          id:1,
          groupid:"美国",
          size:4080
        },{
          id:1,
          groupid:"新加坡",
          size:3080
        },{
          id:1,
          groupid:"英国",
          size:2080
        },{
          id:1,
          groupid:"德国",
          size:5080
        },{
          id:1,
          groupid:"巴西",
          size:1080
        },{
          id:1,
          groupid:"印度",
          size:580
        }
      ]
      // 方式一
      /*  let sc = `window.showdata(123123)`;
      this.refs.webview11.injectJavaScript(sc);  // 成功 */

      // 方式二
      this.refs.webview11.postMessage(JSON.stringify(data));
    }

    // 抖动扩散
    shakeSpread = () => {
      let sc = `window.shakeSpread()`;
      this.refs.webview11.injectJavaScript(sc);
    }

    // 抖动收缩
    shakeRecover = () => {
      let sc = `window.shakeRecover()`;
      this.refs.webview11.injectJavaScript(sc);
    }

    
    
    render() { 
        const autoHeight = true;
        let _that = this;
        return <ScrollView>
            <View style={{marginTop: 40}}> 
                <TouchableOpacity onPress={() => this.injectJS()
                }>
                    <Text>加载数据</Text>
                </TouchableOpacity>
            </View>

            <View style={{marginTop: 2}}> 
                <TouchableOpacity onPress={() => this.shakeSpread()
                }>
                    <Text>抖动扩散</Text>
                </TouchableOpacity>
            </View>

            <View style={{marginTop: 2}}> 
                <TouchableOpacity onPress={() => this.shakeRecover()
                }>
                    <Text>抖动收缩</Text>
                </TouchableOpacity>
            </View>
            <WebView
                webviewRef={(ref) => {
                    this.webviewInject = ref;
                    _that.webviewInject = ref;
                }}
                ref="webview11"
                style={{height: 500}}
                autoHeight={autoHeight}
                isShowSelectButton={false}
                mixedContentMode='always'
                onMessage={this._onMessage}
                //source={html}
                source={{ uri: 'http://47.94.8.210:8080/html5/2222.html' }}
              />
            {/* <WebView
                ref={(ref) => {
                    this.webview = ref;
                }}
                webviewRef={(ref) => {
                    this.webview1 = ref;
                }}
                style={{height: 500}}
                autoHeight={autoHeight}
                mixedContentMode='always'
                source={source}/> */}
        </ScrollView>
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    }
});
