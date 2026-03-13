import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
import Header from '../components/Header';
import ProductCard from '../components/ProductCard';
import { PRODUCTS } from '../data/products';
import { COLORS, SPACING, TEXT, CURRENCY } from '../utils/constants';
import { RootStackParamList } from '../navigation/types';

type Props = NativeStackScreenProps<RootStackParamList, 'ProductDetail'>;

const ProductDetailScreen: React.FC<Props> = ({ navigation, route }) => {
  const { product } = route.params;
  const [isWishlisted, setIsWishlisted] = useState(false);

  const relatedProducts = PRODUCTS.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);

  return (
    <SafeAreaView style={styles.container}>
      <Header 
        title="Details" 
        showBack 
        onBackPress={() => navigation.goBack()}
        showCart
        cartCount={2}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.imageContainer}>
          <Image source={{ uri: product.image }} style={styles.image} resizeMode="cover" />
          <TouchableOpacity 
            style={styles.wishlistButton}
            onPress={() => setIsWishlisted(!isWishlisted)}
          >
            <Ionicons 
              name={isWishlisted ? "heart" : "heart-outline"} 
              size={24} 
              color={isWishlisted ? COLORS.error : COLORS.textSecondary} 
            />
          </TouchableOpacity>
        </View>

        <View style={styles.detailsContainer}>
          <View style={styles.headerInfo}>
            <View>
              <Text style={styles.category}>{product.category}</Text>
              <Text style={styles.name}>{product.name}</Text>
            </View>
            <Text style={styles.price}>{CURRENCY}{product.price}</Text>
          </View>

          <View style={styles.ratingSection}>
            <View style={styles.stars}>
              {[1, 2, 3, 4, 5].map((star) => (
                <Ionicons 
                  key={star} 
                  name="star" 
                  size={16} 
                  color={star <= Math.floor(product.rating) ? "#FBBF24" : COLORS.border} 
                />
              ))}
              <Text style={styles.ratingText}>{product.rating} (120 reviews)</Text>
            </View>
          </View>

          <Text style={styles.sectionTitle}>Description</Text>
          <Text style={styles.description}>{product.description}</Text>

          {relatedProducts.length > 0 && (
            <>
              <Text style={[styles.sectionTitle, { marginTop: SPACING.lg }]}>You may also like</Text>
              <ScrollView 
                horizontal 
                showsHorizontalScrollIndicator={false} 
                contentContainerStyle={styles.relatedProducts}
              >
                {relatedProducts.map(p => (
                  <View key={p.id} style={styles.relatedItem}>
                    <ProductCard 
                      product={p} 
                      onPress={(prod) => navigation.push('ProductDetail', { product: prod })}
                    />
                  </View>
                ))}
              </ScrollView>
            </>
          )}
        </View>
      </ScrollView>

      <View style={styles.bottomBar}>
        <TouchableOpacity style={styles.addToCartButton}>
          <Text style={styles.addToCartText}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  imageContainer: {
    height: 400,
    backgroundColor: '#000',
    position: 'relative',
  },
  image: {
    width: '100%',
    height: '100%',
    opacity: 0.8,
  },
  wishlistButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: COLORS.card,
    padding: 12,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 15,
    elevation: 8,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  detailsContainer: {
    backgroundColor: COLORS.background,
    padding: SPACING.xl,
  },
  headerInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: SPACING.lg,
  },
  category: {
    fontSize: 12,
    color: COLORS.primary,
    fontWeight: '800',
    textTransform: 'uppercase',
    letterSpacing: 2,
    marginBottom: 8,
  },
  name: {
    fontSize: 28,
    fontWeight: '900',
    color: COLORS.white,
    letterSpacing: 0.5,
  },
  price: {
    fontSize: 28,
    fontWeight: '900',
    color: COLORS.white,
  },
  ratingSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: SPACING.xl,
    backgroundColor: COLORS.card,
    padding: SPACING.md,
    borderRadius: 16,
    alignSelf: 'flex-start',
  },
  stars: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    marginLeft: 12,
    fontSize: 14,
    color: COLORS.textSecondary,
    fontWeight: '700',
  },
  sectionTitle: {
    fontSize: TEXT.h2,
    fontWeight: '900',
    color: COLORS.white,
    marginBottom: SPACING.md,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  description: {
    fontSize: 16,
    lineHeight: 26,
    color: COLORS.textSecondary,
    fontWeight: '500',
  },
  relatedProducts: {
    paddingBottom: SPACING.xl,
  },
  relatedItem: {
    width: 200,
    marginRight: SPACING.md,
  },
  bottomBar: {
    padding: SPACING.lg,
    backgroundColor: COLORS.card,
    borderTopWidth: 1,
    borderColor: COLORS.border,
    paddingBottom: 35, // For safe area
  },
  addToCartButton: {
    backgroundColor: COLORS.primary,
    height: 64,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: COLORS.primary,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.4,
    shadowRadius: 12,
    elevation: 10,
  },
  addToCartText: {
    color: COLORS.black,
    fontSize: 18,
    fontWeight: '900',
    textTransform: 'uppercase',
    letterSpacing: 1.5,
  },
});

export default ProductDetailScreen;
