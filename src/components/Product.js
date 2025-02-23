import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { ProductConsumer } from '../context'
import images from './images'
export default class Product extends Component {
  render() {
    const { id, title, img, price, inCart } = this.props.product
    console.log('this.props.product :', this.props.product)
    return (
      <ProductWrapper className='col-9 mx-auto col-md-6 col-lg-3 my-3'>
        <div className='card'>
          <ProductConsumer>
            {(value) => {
              console.log('value:', value)
              return (
                <div
                  className='img-container p-5'
                  onClick={() => value.handleDetail(id)}
                >
                  <Link to='/details'>
                    <img src={images[img]} alt='' className='card-img-top' />
                  </Link>

                  <button
                    className='cart-btn'
                    disabled={this.props.product.inCart ? true : false}
                    onClick={() => {
                      value.addToCart(id)
                      value.openModal(id)
                      this.props.product.inCart = true
                    }}
                  >
                    {inCart ? <p disabled>in cart</p> : <p>Add to Cart</p>}
                  </button>
                </div>
              )
            }}
          </ProductConsumer>
          <div className='card-footer d-flex justify-content-between'>
            <p className='align-self-center mb-0'>{title}</p>
            <h5 className='text-blue font-italic mb-0'>
              <span className='mr-1'>$</span>
              {price}
            </h5>
          </div>
        </div>
      </ProductWrapper>
    )
  }
}

const ProductWrapper = styled.div`
  .card {
    border-color: transparent;
    transition: all 1s linear;
  }
  .card-footer {
    background: transparent;
    border-top: transparent;
    transition: all 1s linear;
  }
  &:hover {
    .card {
      border: 0.04rem solid rgba(0, 0, 0, 0.2);
      box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.2);
    }
    .card-footer {
      background: rgba(247, 247, 247);
    }
  }
  .img-container {
    position: relative;
    overflow: hidden;
  }
  .card-img-top {
    transition: all 1s linear;
  }
  .img-container:hover .card-img-top {
    transform: scale(1.2);
  }
  .cart-btn {
    height: 50px;
    width: 50px;

    position: absolute;
    bottom: 0px;
    right: 0px;
    padding: 0.2rem;
    background: var(--lightBlue);
    border: none;
    color: var(--mainWhite);
    font-size: 0.8rem;
    border-radius: 0.5rem 0 0 0;
    transform: translate(100%, 100%);
    transition: all 0.5s ease-in-out;
  }
  .img-container:hover .cart-btn {
    transform: translate(0, 0);
  }
  .cart-btn:hover {
    color: var(--mainBlue);
    cursor: pointer;
  }
`
