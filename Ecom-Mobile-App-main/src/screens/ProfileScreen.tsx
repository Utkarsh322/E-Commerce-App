import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
import { COLORS, SPACING, TEXT } from '../utils/constants';
import { RootStackParamList } from '../navigation/types';

type Props = NativeStackScreenProps<RootStackParamList, 'MainTabs'>;

const ProfileScreen: React.FC<Props> = ({ navigation }) => {
  const menuItems = [
    { title: 'My Orders', icon: 'cube-outline', screen: 'Orders' },
    { title: 'My Wishlist', icon: 'heart-outline', screen: 'Wishlist' },
    { title: 'Addresses', icon: 'location-outline', screen: '' },
    { title: 'Payment Methods', icon: 'card-outline', screen: '' },
    { title: 'Settings', icon: 'settings-outline', screen: '', disabled: true },
    { title: 'Logout', icon: 'log-out-outline', screen: '', isLast: true, disabled: true },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <View style={styles.profileInfo}>
            <Image
              source={{ uri: 'https://i.pravatar.cc/150?u=a042581f4e29026704d' }}
              style={styles.avatar}
            />
            <View style={styles.textContainer}>
              <Text style={styles.name}>Alex Rivera</Text>
              <Text style={styles.email}>alex.rivera@example.com</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.editButton}>
            <Ionicons name="pencil" size={20} color={COLORS.primary} />
          </TouchableOpacity>
        </View>

        <View style={styles.menuContainer}>
          {menuItems.map((item, index) => (
            <TouchableOpacity
              key={item.title}
              style={[styles.menuItem, item.isLast && styles.lastItem]}
              onPress={() => item.screen && !item.disabled && navigation.navigate(item.screen as any)}
              disabled={item.disabled}
              activeOpacity={item.disabled ? 1 : 0.7}
            >
              <View style={styles.menuLeft}>
                <Ionicons 
                  name={item.icon as any} 
                  size={24} 
                  color={item.isLast ? COLORS.error : COLORS.text} 
                />
                <Text style={[styles.menuTitle, item.isLast && { color: COLORS.error }]}>
                  {item.title}
                </Text>
              </View>
              {!item.isLast && (
                <Ionicons name="chevron-forward" size={20} color={COLORS.textSecondary} />
              )}
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: SPACING.xl,
    paddingVertical: SPACING.xl,
    backgroundColor: COLORS.card,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
  },
  profileInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 24,
    borderWidth: 2,
    borderColor: COLORS.primary,
  },
  textContainer: {
    marginLeft: SPACING.lg,
  },
  name: {
    fontSize: 22,
    fontWeight: '900',
    color: COLORS.white,
    letterSpacing: 0.5,
  },
  email: {
    fontSize: 14,
    color: COLORS.textSecondary,
    fontWeight: '600',
  },
  editButton: {
    backgroundColor: COLORS.background,
    padding: 12,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  menuContainer: {
    marginTop: SPACING.xl,
    paddingHorizontal: SPACING.md,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: SPACING.lg,
    backgroundColor: COLORS.card,
    borderRadius: 20,
    marginBottom: SPACING.md,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  menuLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: COLORS.white,
    marginLeft: SPACING.lg,
  },
  lastItem: {
    marginTop: SPACING.xl,
    borderColor: COLORS.error + '33',
  },
});

export default ProfileScreen;
