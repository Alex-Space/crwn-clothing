import React from 'react';
import './cart-icon.styles.scss';
import { ReactComponent as ShippingIcon } from '../../assets/shopping-bag.svg';
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import {selectCartItemsCount} from '../../redux/cart/cart.selectors';

const CartIcon = ({toggleCartHidden, itemsCount}) => (
  <div className='cart-icon' onClick={toggleCartHidden}>
    <ShippingIcon className='shipping-icon' />
    <span className='item-count'>{itemsCount}</span>
  </div>
);

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

const mapStateToProps = (state) => ({
  itemsCount: selectCartItemsCount(state)
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);