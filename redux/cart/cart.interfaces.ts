export interface actionProps {
  type: string;
  payload?: any;
}
export interface cartItemsProps {
  id: string;
}
export interface cartStateProps {
  cart: cartItemsProps[];
}
