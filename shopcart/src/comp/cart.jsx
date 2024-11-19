import {} from 'react'
import './cart.css'
import { Link } from 'react-router-dom'
import { AiOutlineClose } from 'react-icons/ai';
// eslint-disable-next-line react/prop-types
const Cart = ({cart, setCart}) => {

  // Increase Quantity of cart product
  const incqty = (product) => 
  {
    // eslint-disable-next-line react/prop-types
    const exist = cart.find((x) => 
    {
      return x.id === product.id
    })
    // eslint-disable-next-line react/prop-types
    setCart(cart.map((curElm) => 
    {
      return curElm.id === product.id ? { ...exist, qty: exist.qty + 1} : curElm
    }))
  }
  // decrese Quantity of cart product
  const decqty = (product) => 
  {
    // eslint-disable-next-line react/prop-types
    const exist = cart.find((x) => 
    {
      return x.id === product.id
    })
    // eslint-disable-next-line react/prop-types
    setCart(cart.map((curElm) => 
    {
      return curElm.id === product.id ? {...exist ,qty: exist.qty - 1}: curElm
    }))
  }

  //Removing cart product
  const removeproduct = (product) => 
  {
    // eslint-disable-next-line react/prop-types
    const exist = cart.find((x) => 
    {
      return x.id === product.id
    })
    if(exist.qty > 0)
    {
      // eslint-disable-next-line react/prop-types
      setCart(cart.filter((curElm) => 
      {
        return curElm.id !== product.id
      }))
    }
  }
  //Total Price
  // eslint-disable-next-line react/prop-types
  const total = cart.reduce((price, item) => price + item.qty * item.price, 0)
  return (
    <>
    <div className='cart'>
        <h3>#cart</h3>
        {
            // eslint-disable-next-line react/prop-types
            cart.length === 0 && 
            <>
            <div className='empty_cart'>
                <h2>Your Shopping cart is empty</h2>
                <Link to='/shop'><button>Shop Now</button></Link>
            </div>
            </>
        }
        <div className='container'>
          {
            // eslint-disable-next-line react/prop-types
            cart.map((curElm) => 
            {
              return(
                <>
                <div className='box'>
                  <div className='img_box'>
                    <img src={curElm.image} alt=''></img>
                  </div>
                  <div className='detail'>
                    <div className='info'>
                    <h4>{curElm.cat}</h4>
                    <h3>{curElm.Name}</h3>
                    <p>Price: ${curElm.price}</p>
                    <p>Total: ${curElm.price * curElm.qty}</p>
                    </div>
                    <div className='quantity'>
                      <button onClick={() => incqty (curElm)}>+</button>
                      <input type='number' value={curElm.qty}></input>
                      <button onClick={() => decqty (curElm)}>-</button>
                    </div>
                    <div className='icon'>
                      <li onClick={() => removeproduct(curElm)}><AiOutlineClose /></li>
                    </div>
                  </div>
                </div>
                </>
              )
            })
          }
        </div>
        <div className='bottom'>
          {
            // eslint-disable-next-line react/prop-types
            cart.length > 0 && 
            <>
            <div className='Total'>
              <h4>Sub Total: ${total}</h4>
            </div>
            <button>checkout</button>
            </>
          }
        </div>
    </div>
    </>
  )
}

export default Cart