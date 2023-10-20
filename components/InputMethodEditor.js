import React from 'react';
import { View, FlatList, Image } from 'react-native';

const ImageGrid = () => {
  const images = [
    { id: 1, source: require('./assets/image1.png') },

  ];

  const renderItem = ({ item }) => (
    <Image source={item.source} style={{ width: 50, height: 50 }} /> // Set width and height
  );

  return (
    <View>
      <FlatList
        data={images}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        numColumns={3}
      />
    </View>
  );
};

export default ImageGrid;
