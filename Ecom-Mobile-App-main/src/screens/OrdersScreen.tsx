import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  SafeAreaView,
} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import Header from '../components/Header';
import { COLORS, SPACING, TEXT, CURRENCY } from '../utils/constants';
import { RootStackParamList } from '../navigation/types';

type Props = NativeStackScreenProps<RootStackParamList, 'Orders'>;

const ORDERS = [
  { id: 'ORD-2024-001', date: 'March 10, 2024', status: 'Delivered', total: 150.00 },
  { id: 'ORD-2024-002', date: 'March 05, 2024', status: 'Shipped', total: 299.00 },
  { id: 'ORD-2024-003', date: 'Feb 28, 2024', status: 'Delivered', total: 85.00 },
];

const OrdersScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header title="My Orders" showBack onBackPress={() => navigation.goBack()} />
      <FlatList
        data={ORDERS}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContainer}
        renderItem={({ item }) => (
          <View style={styles.orderCard}>
            <View style={styles.orderHeader}>
              <Text style={styles.orderId}>{item.id}</Text>
              <View style={[
                styles.statusBadge, 
                { backgroundColor: item.status === 'Delivered' ? '#D1FAE5' : '#DBEAFE' }
              ]}>
                <Text style={[
                  styles.statusText,
                  { color: item.status === 'Delivered' ? '#065F46' : '#1E40AF' }
                ]}>
                  {item.status}
                </Text>
              </View>
            </View>
            <View style={styles.orderFooter}>
              <View>
                <Text style={styles.dateLabel}>Order Date</Text>
                <Text style={styles.dateValue}>{item.date}</Text>
              </View>
              <View style={styles.totalContainer}>
                <Text style={styles.totalLabel}>Total Amount</Text>
                <Text style={styles.totalValue}>{CURRENCY}{item.total.toFixed(2)}</Text>
              </View>
            </View>
          </View>
        )}
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
  orderCard: {
    backgroundColor: COLORS.white,
    borderRadius: 16,
    padding: SPACING.md,
    marginBottom: SPACING.md,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  orderHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: SPACING.md,
    paddingBottom: SPACING.md,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
  },
  orderId: {
    fontSize: TEXT.body,
    fontWeight: 'bold',
    color: COLORS.text,
  },
  statusBadge: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 20,
  },
  statusText: {
    fontSize: 10,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  orderFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dateLabel: {
    fontSize: TEXT.tiny,
    color: COLORS.textSecondary,
    marginBottom: 2,
  },
  dateValue: {
    fontSize: TEXT.caption,
    fontWeight: '600',
    color: COLORS.text,
  },
  totalContainer: {
    alignItems: 'flex-end',
  },
  totalLabel: {
    fontSize: TEXT.tiny,
    color: COLORS.textSecondary,
    marginBottom: 2,
  },
  totalValue: {
    fontSize: TEXT.body,
    fontWeight: 'bold',
    color: COLORS.primary,
  },
});

export default OrdersScreen;
