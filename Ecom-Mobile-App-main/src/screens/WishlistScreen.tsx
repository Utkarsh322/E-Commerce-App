import React, { useState } from 'react';
import { View, StyleSheet, FlatList, SafeAreaView, Text } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import Header from '../components/Header';
import ProductCard from '../components/ProductCard';
import { PRODUCTS } from '../data/products';
import { COLORS, SPACING, TEXT } from '../utils/constants';
import { RootStackParamList } from '../navigation/types';

type Props = NativeStackScreenProps<RootStackParamList, 'MainTabs'>;

const WishlistScreen: React.FC<Props> = ({ navigation }) => {
  const [wishlistItems, setWishlistItems] = useState(PRODUCTS.slice(2, 5));

  const handleRemove = (product: any) => {
    setWishlistItems(prev => prev.filter(item => item.id !== product.id));
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header title="My Wishlist" />
      {wishlistItems.length > 0 ? (
        <FlatList
          data={wishlistItems}
          renderItem={({ item }) => (
            <ProductCard
              product={item}
              onPress={(product) => navigation.navigate('ProductDetail', { product })}
              onWishlistPress={handleRemove}
              isWishlisted={true}
            />
          )}
          keyExtractor={(item) => item.id}
          numColumns={2}
          columnWrapperStyle={styles.columnWrapper}
          contentContainerStyle={styles.listContainer}
          showsVerticalScrollIndicator={false}
        />
      ) : (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>Your wishlist is empty</Text>
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  listContainer: {
    padding: SPACING.md,
  },
  columnWrapper: {
    justifyContent: 'space-between',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontSize: TEXT.h3,
    color: COLORS.textSecondary,
    fontWeight: '700',
    textTransform: 'uppercase',
  },
});

export default WishlistScreen;
