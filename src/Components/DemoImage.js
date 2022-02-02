import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';
import Corgi from './corgi.jpg';

export default class DemoImage extends Component {
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{textAlign: 'center', fontSize:30,fontWeight: 'bold'}}> Demo Image Component</Text>
          {/* Internal Image */}
          <Image source={require('./corgi.jpg')} />
          <Image source={Corgi} />
        {/* External Image */}
        <Image
          source={{
            uri: 'data:image/jpeg;base64,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',
          }}
          style={{width: 200, height: 100}}
        />
      </View>
    );
  }
}