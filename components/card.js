import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Card = ({ name, price, image, description }) => {
  return (
    <View style={styles.card}>
      <Image source={image} style={styles.image} />
      <View style={styles.cardContent}>
        <View style={styles.header}>
          <Text style={styles.name}>{name}</Text>
          <View style={styles.priceChip}>
            <Text style={styles.price}>{price}</Text>
          </View>
        </View>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    borderRadius: 8,
    marginVertical: 10,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginTop: 10
  },
  cardContent: {
    marginTop: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
  },
  priceChip: {
    backgroundColor: '#8B4513',
    borderRadius: 20,
    paddingVertical: 5,
    paddingHorizontal: 15,
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  description: {
    fontSize: 14,
    color: '#555',
    marginBottom: 10
  },
});

export default Card;