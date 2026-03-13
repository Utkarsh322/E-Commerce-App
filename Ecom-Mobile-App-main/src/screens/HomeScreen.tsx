import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  FlatList,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import CategoryCard from '../components/CategoryCard';
import ProductCard from '../components/ProductCard';
import { CATEGORIES, PRODUCTS } from '../data/products';
import { COLORS, SPACING, TEXT } from '../utils/constants';
import { RootStackParamList } from '../navigation/types';

type Props = NativeStackScreenProps<RootStackParamList, 'MainTabs'>;

const HomeScreen: React.FC<Props> = ({ navigation }) => {
  const [search, setSearch] = useState('');

  const featuredProducts = PRODUCTS.slice(0, 4);

  const handleProductPress = (product: any) => {
    navigation.navigate('ProductDetail', { product });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Luxe" showCart cartCount={2} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.bannerContainer}>
          <View style={styles.banner}>
            <View style={styles.bannerContent}>
              <Text style={styles.bannerSubtitle}>Winter Luxe '24</Text>
              <Text style={styles.bannerTitle}>Elevate your wardrobe with premium essentials.</Text>
              <TouchableOpacity style={styles.bannerButton}>
                <Text style={styles.bannerButtonText}>Shop Now</Text>
              </TouchableOpacity>
            </View>
            <Image
              source={{ uri: 'https://picsum.photos/800/400?random=10' }}
              style={styles.bannerImage}
            />
          </View>
        </View>

        <SearchBar value={search} onChangeText={setSearch} />

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Categories</Text>
          <TouchableOpacity onPress={() => navigation.navigate('MainTabs', { screen: 'SearchStack' })}>
            <Text style={styles.seeAll}>See all</Text>
          </TouchableOpacity>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.categoriesContainer}
        >
          {CATEGORIES.map((category) => (
            <CategoryCard
              key={category.id}
              category={category}
              onPress={() => navigation.navigate('MainTabs', { screen: 'SearchStack', params: { category: category.name } })}
            />
          ))}
        </ScrollView>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Featured Products</Text>
          <TouchableOpacity onPress={() => navigation.navigate('MainTabs', { screen: 'SearchStack' })}>
            <Text style={styles.seeAll}>See all</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.productsGrid}>
          {featuredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onPress={handleProductPress}
            />
          ))}
        </View>
        <View style={{ height: 20 }} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  bannerContainer: {
    padding: SPACING.md,
  },
  banner: {
    height: 220,
    backgroundColor: COLORS.card,
    borderRadius: 24,
    overflow: 'hidden',
    position: 'relative',
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  bannerImage: {
    width: '100%',
    height: '100%',
    opacity: 0.4,
    position: 'absolute',
  },
  bannerContent: {
    padding: SPACING.xl,
    zIndex: 1,
    flex: 1,
    justifyContent: 'center',
  },
  bannerSubtitle: {
    color: COLORS.primary,
    fontSize: 12,
    fontWeight: '800',
    textTransform: 'uppercase',
    letterSpacing: 2,
    marginBottom: 8,
  },
  bannerTitle: {
    color: COLORS.white,
    fontSize: TEXT.h1,
    fontWeight: '900',
    width: '80%',
    marginBottom: SPACING.lg,
    lineHeight: 32,
  },
  bannerButton: {
    backgroundColor: COLORS.primary,
    paddingHorizontal: SPACING.lg,
    paddingVertical: 12,
    borderRadius: 12,
    alignSelf: 'flex-start',
    shadowColor: COLORS.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
  },
  bannerButtonText: {
    color: COLORS.black,
    fontWeight: '900',
    fontSize: TEXT.caption,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: SPACING.md,
    marginTop: SPACING.xl,
    marginBottom: SPACING.md,
  },
  sectionTitle: {
    fontSize: TEXT.h2,
    fontWeight: '900',
    color: COLORS.white,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  seeAll: {
    fontSize: TEXT.tiny,
    color: COLORS.primary,
    fontWeight: '800',
    textTransform: 'uppercase',
  },
  categoriesContainer: {
    paddingLeft: SPACING.md,
    paddingBottom: SPACING.md,
  },
  productsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: SPACING.md,
  },
});

export default HomeScreen;
