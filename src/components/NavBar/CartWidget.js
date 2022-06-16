import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import * as React from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CartContext from '../../context/CartContext'
import DeleteIcon from '@mui/icons-material/Delete';
import { useContext } from 'react'
import Badge from '@mui/material/Badge';
import { Link } from 'react-router-dom';

 function CartWidget() {

  const { deleteItem, clearCart, cantidadEnCarro} = useContext(CartContext)

  const [anchorEl, setAnchorEl] = React.useState(null);
  const { cartListItems } = React.useContext(CartContext)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div>
      <Badge badgeContent={cantidadEnCarro} color="primary">
        <Button Button aria-describedby={id} variant="contained" onClick={handleClick}>
          <ShoppingCartIcon variant="outlined"/>
        </Button>
      </Badge>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <Typography sx={{ }}>
            <div>
                  {cartListItems.map( (item) => {
                        return (
                              <div className='item-carrito' key={item.id} style={{display:'flex', width:'300px', justifyContent:'space-around', alignItems:'center', borderBottom:'solid', borderColor:'whitesmoke'}}>
                                    <div className='item-imagen' style={{width:'40%'}}>
                                          <img src={`../images/${item.imagen}`} className="imagen-producto" alt="imagen-burger"/>
                                    </div>
                                    <div className='items-nombre-precio'>
                                          <h5>{item.nombre}</h5>  
                                          <p>${item.precio * item.cantidad} x {item.cantidad}</p>
                                    </div>
                                    <Button>
                                      <DeleteIcon onClick={() => {
                                          deleteItem(item.id)}}>
                                      </DeleteIcon>
                                    </Button>
                              </div>
                        )
                  })}
                  <div style={{display: 'flex', justifyContent: 'space-between'}}> 
                    <Button onClick ={() => {clearCart()}}>VACIAR CARRITO</Button>
                    <Button><Link to='/cart' style={{textDecoration:'none'}}>CHECKOUT</Link></Button>
                  </div>
            </div>
        </Typography>
      </Popover>
    </div>
  );
}

export default CartWidget