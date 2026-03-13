import { Product } from '../types';

export type RootStackParamList = {
  MainTabs: undefined;
  ProductDetail: { product: Product };
  Orders: undefined;
  Settings: undefined;
};

export type BottomTabParamList = {
  HomeStack: undefined;
  SearchStack: undefined;
  Cart: undefined;
  Wishlist: undefined;
  ProfileStack: undefined;
};

export type HomeStackParamList = {
  Home: undefined;
  ProductDetail: { product: Product };
};

export type SearchStackParamList = {
  ProductList: { category?: string } | undefined;
  ProductDetail: { product: Product };
};

export type ProfileStackParamList = {
  Profile: undefined;
  Orders: undefined;
  Settings: undefined;
};
