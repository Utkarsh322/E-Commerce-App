import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Image, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Product } from '../types';
import { COLORS, SPACING, TEXT, CURRENCY } from '../utils/constants';

interface ProductCardProps {
  product: Product;
  onPress: (product: Product) => void;
  onWishlistPress?: (product: Product) => void;
  isWishlisted?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onPress,
  onWishlistPress,
  isWishlisted = false,
}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={() => onPress(product)} activeOpacity={0.9}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: product.image }} style={styles.image} resizeMode="cover" />
        {onWishlistPress && (
          <TouchableOpacity
            style={styles.wishlistButton}
            onPress={() => onWishlistPress(product)}
          >
            <Ionicons
              name={isWishlisted ? "heart" : "heart-outline"}
              size={20}
              color={isWishlisted ? COLORS.error : COLORS.textSecondary}
            />
          </TouchableOpacity>
        )}
      </View>
      <View style={styles.content}>
        <Text style={styles.category}>{product.category}</Text>
        <Text style={styles.name} numberOfLines={1}>{product.name}</Text>
        <View style={styles.footer}>
          <Text style={styles.price}>{CURRENCY}{product.price}</Text>
          <View style={styles.ratingContainer}>
            <Ionicons name="star" size={14} color="#FBBF24" />
            <Text style={styles.rating}>{product.rating}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.card,
    borderRadius: 20,
    marginBottom: SPACING.md,
    width: '47%',
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: COLORS.border,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 12,
    elevation: 5,
  },
  imageContainer: {
    height: 180,
    backgroundColor: '#1A1A1A',
    position: 'relative',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  wishlistButton: {
    position: 'absolute',
    top: 12,
    right: 12,
    backgroundColor: 'rgba(0,0,0,0.4)',
    padding: 8,
    borderRadius: 24,
    backdropFilter: 'blur(10px)', // Note: backdropFilter doesn't work in standard RN, but UI-wise we use rgba
  },
  content: {
    padding: SPACING.md,
  },
  category: {
    fontSize: 10,
    color: COLORS.primary,
    textTransform: 'uppercase',
    fontWeight: '800',
    letterSpacing: 1,
    marginBottom: 4,
  },
  name: {
    fontSize: TEXT.body,
    fontWeight: '600',
    color: COLORS.text,
    marginBottom: 6,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
  },
  price: {
    fontSize: TEXT.body + 2,
    fontWeight: 'bold',
    color: COLORS.white,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.05)',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 8,
  },
  rating: {
    fontSize: 10,
    color: COLORS.textSecondary,
    marginLeft: 3,
    fontWeight: '600',
  },
});

export default ProductCard;
