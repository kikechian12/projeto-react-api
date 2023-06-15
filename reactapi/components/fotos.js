import React, { useState, useEffect } from 'react';
import { View, Image, StyleSheet, FlatList } from 'react-native';
import axios from 'axios';

const PhotoList = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetchPhotos();
  }, []);

  const fetchPhotos = async () => {
    try {
      const response = await axios.get('https://picsum.photos/v2/list');
      setPhotos(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={photos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Image style={styles.photo} source={{ uri: item.download_url }} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  photo: {
    width: '100%',
    height: 200,
    marginBottom: 8,
  },
});

export default PhotoList;
