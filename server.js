const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();

app.use(express.json()); // Parse JSON body

// Add to cart route
app.post('/add-to-cart', (req, res) => {
  console.log('Add-to-cart request received:', req.body);

  const product = req.body;
  const filePath = path.join(__dirname, 'cart.json');

  // Read and update cart.json
  let cartData = [];
  if (fs.existsSync(filePath)) {
    cartData = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  }

  cartData.push(product);

  // Save the updated cart data
  fs.writeFileSync(filePath, JSON.stringify(cartData, null, 2));

  res.status(200).json({ success: true, message: 'Product added to cart' });
});

// Clear cart route
app.post('/clear-cart', (req, res) => {
  const filePath = path.join(__dirname, 'cart.json');
  console.log('Clear cart request received. File path:', filePath);

  fs.writeFile(filePath, JSON.stringify([], null, 2), (err) => {
      if (err) {
          console.error('Error clearing cart:', err.message);
          res.status(500).json({ success: false, message: 'Failed to clear cart', error: err.message });
      } else {
          console.log('Cart cleared successfully');
          res.status(200).json({ success: true, message: 'Cart cleared successfully' });
      }
  });
});

fetch('/clear-cart', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
})
  .then((response) => response.json())
  .then((data) => {
      if (data.success) {
          alert('Cart cleared successfully!');
          const cartItemsList = document.getElementById('cart-items');
          cartItemsList.innerHTML = '<li>Your cart is empty.</li>';
      } else {
          alert(`Failed to clear the cart: ${data.message}`);
      }
  })
  .catch((err) => console.error('Error clearing cart:', err));


// Serve static files and start server
app.use(express.static('.'));
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
