import React, { useState, useEffect } from 'react';
import { View, StyleSheet, FlatList, SafeAreaView } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import ProductCard from '../components/ProductCard';
import { PRODUCTS } from '../data/products';
import { COLORS, SPACING } from '../utils/constants';
import { RootStackParamList } from '../navigation/types';

type Props = NativeStackScreenProps<RootStackParamList, 'MainTabs'>;

const ProductListScreen: React.FC<Props> = ({ navigation, route }) => {
  const [search, setSearch] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(PRODUCTS);

  // @ts-ignore
  const categoryFilter = route.params?.category;

  useEffect(() => {
    let result = PRODUCTS;
    if (categoryFilter) {
      result = result.filter(p => p.category === categoryFilter);
    }
    if (search) {
      result = result.filter(p => p.name.toLowerCase().includes(search.toLowerCase()));
    }
    setFilteredProducts(result);
  }, [search, categoryFilter]);

  return (
    <SafeAreaView style={styles.container}>
      <Header title={categoryFilter || "All Products"} />
      <SearchBar value={search} onChangeText={setSearch} />
      <FlatList
        data={filteredProducts}
        renderItem={({ item }) => (
          <ProductCard
            product={item}
            onPress={(product) => navigation.navigate('ProductDetail', { product })}
          />
        )}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={styles.columnWrapper}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
      />
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
});

export default ProductListScreen;
