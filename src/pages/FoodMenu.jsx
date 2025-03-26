import React, { useState } from 'react';
import './FoodMenu.css';
import { FaShoppingCart, FaUser, FaUtensils } from 'react-icons/fa';

const FoodMenu = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState('');
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const menuCategories = [
    {
      name: "Ocean's Finest",
      description: "Fresh seafood caught daily from local waters",
      items: [
        {
          name: "Grilled Caribbean Lobster",
          price: 55,
          description: "Fresh lobster with coconut herb butter, grilled pineapple, and island spices",
          image: "https://images.unsplash.com/photo-1533777857889-4be7c70b33f7"
        },
        {
          name: "Maldivian Tuna Tartare",
          price: 32,
          description: "Fresh yellowfin tuna with avocado, mango, and wasabi-ginger dressing",
          image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351"
        },
        {
          name: "Seafood Tower Royale",
          price: 95,
          description: "King crab, oysters, prawns, lobster, and sashimi with signature sauces",
          image: "https://www.timeoutdubai.com/cloud/timeoutdubai/2022/08/05/Crudo-di-mare-at-Alici.jpg"
        },
        {
          name: "Coral Reef Paella",
          price: 48,
          description: "Saffron rice with mixed seafood, chorizo, and coastal herbs",
          image: "https://images.unsplash.com/photo-1534080564583-6be75777b70a"
        }
      ]
    },
    {
      name: "Tropical Paradise",
      description: "Island-inspired signature dishes",
      items: [
        {
          name: "Coconut Curry Prawns",
          price: 38,
          description: "Tiger prawns in spiced coconut curry with lemongrass rice",
          image: "https://images.unsplash.com/photo-1516714435131-44d6b64dc6a2"
        },
        {
          name: "Mango Glazed Mahi-Mahi",
          price: 42,
          description: "Fresh Mahi-Mahi with tropical mango glaze and papaya salsa",
          image: "https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62"
        },
        {
          name: "Island Jerk Chicken",
          price: 34,
          description: "Spiced grilled chicken with coconut rice and grilled plantains",
          image: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b"
        },
        {
          name: "Reef & Beef",
          price: 65,
          description: "Grilled lobster tail and filet mignon with island butter",
          image: "https://images.unsplash.com/photo-1544025162-d76694265947"
        }
      ]
    },
    {
      name: "Beach Bar & Grill",
      description: "Casual beachside favorites",
      items: [
        {
          name: "Sunset Poke Bowl",
          price: 28,
          description: "Fresh tuna, mango, avocado, edamame with citrus ponzu",
          image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c"
        },
        {
          name: "Grilled Fish Tacos",
          price: 24,
          description: "Mahi-Mahi tacos with mango salsa and chipotle crema",
          image: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b"
        },
        {
          name: "Beach BBQ Platter",
          price: 45,
          description: "Grilled prawns, fish, chicken, and vegetables with island sauces",
          image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1"
        }
      ]
    },
    {
      name: "Coastal Comfort",
      description: "Comforting classics with a tropical twist",
      items: [
        {
          name: "Lobster Mac & Cheese",
          price: 36,
          description: "Creamy cheese sauce, chunks of lobster, truffle breadcrumbs",
          image: "https://images.unsplash.com/photo-1543339494-b4cd4f7ba686"
        },
        {
          name: "Coconut Shrimp",
          price: 26,
          description: "Crispy coconut-crusted shrimp with mango chili sauce",
          image: "https://insanelygoodrecipes.com/wp-content/uploads/2024/08/Red-Lobster-Coconut-Shrimp-with-Pina-Colada-Sauce.jpg"
        },
        {
          name: "Island Burger",
          price: 28,
          description: "Wagyu beef, grilled pineapple, bacon, tropical slaw",
          image: "https://images.unsplash.com/photo-1565299507177-b0ac66763828"
        }
      ]
    },
    {
      name: "Sweet Endings",
      description: "Tropical desserts and sweet treats",
      items: [
        {
          name: "Coconut Crème Brûlée",
          price: 16,
          description: "Coconut custard with caramelized palm sugar and fresh berries",
          image: "https://images.unsplash.com/photo-1551024506-0bccd828d307"
        },
        {
          name: "Mango Passion Pavlova",
          price: 18,
          description: "Crispy meringue with tropical fruits and passion fruit curd",
          image: "https://images.unsplash.com/photo-1464305795204-6f5bbfc7fb81"
        },
        {
          name: "Pineapple Rum Cake",
          price: 15,
          description: "Warm rum-soaked cake with coconut ice cream",
          image: "https://i0.wp.com/southerncastiron.com/wp-content/uploads/2023/10/bundtcake39_0752-scaled.jpg?fit=2117%2C2560&ssl=1"
        }
      ]
    }
  ];

  const handleLogin = (e) => {
    e.preventDefault();
    // Add proper validation and authentication here
    setIsLoggedIn(true);
  };

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const removeFromCart = (index) => {
    setCart(cart.filter((_, i) => i !== index));
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price, 0);
  };

  const handleOrder = () => {
    if (cart.length === 0) {
      alert('Please add items to your cart first');
      return;
    }
    // Add order processing logic here
    alert('Order placed successfully!');
    setCart([]);
    setShowCart(false);
  };

  return (
    <div className="food-menu-page">
      {/* Hero Section */}
      <div className="menu-hero">
        <h1>Beachside Dining</h1>
        <p>Experience culinary excellence with ocean views</p>
      </div>

      {/* Login/Cart Section */}
      <div className="user-actions">
        {!isLoggedIn ? (
          <form onSubmit={handleLogin} className="login-form">
            <FaUser className="icon" />
            <input
              type="email"
              placeholder="Enter your email to order"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit">Login</button>
          </form>
        ) : (
          <div className="cart-section">
            <button 
              className="cart-button"
              onClick={() => setShowCart(!showCart)}
            >
              <FaShoppingCart />
              <span className="cart-count">{cart.length}</span>
            </button>
          </div>
        )}
      </div>

      {/* Menu Categories */}
      <div className="menu-container">
        {menuCategories.map((category, index) => (
          <section key={index} className="menu-category">
            <div className="category-header">
              <FaUtensils className="category-icon" />
              <h2>{category.name}</h2>
              <p>{category.description}</p>
            </div>
            <div className="menu-items">
              {category.items.map((item, itemIndex) => (
                <div key={itemIndex} className="menu-item">
                  <div className="item-image">
                    <img src={item.image} alt={item.name} />
                  </div>
                  <div className="item-details">
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                    <div className="item-footer">
                      <span className="price">${item.price}</span>
                      {isLoggedIn && (
                        <button 
                          className="add-to-cart"
                          onClick={() => addToCart(item)}
                        >
                          Add to Cart
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* Shopping Cart Modal */}
      {showCart && (
        <div className="cart-modal">
          <div className="cart-content">
            <h2>Your Order</h2>
            {cart.length === 0 ? (
              <p>Your cart is empty</p>
            ) : (
              <>
                {cart.map((item, index) => (
                  <div key={index} className="cart-item">
                    <span>{item.name}</span>
                    <span>${item.price}</span>
                    <button 
                      className="remove-item"
                      onClick={() => removeFromCart(index)}
                    >
                      ×
                    </button>
                  </div>
                ))}
                <div className="cart-total">
                  <span>Total:</span>
                  <span>${getTotalPrice()}</span>
                </div>
                <button 
                  className="order-button"
                  onClick={handleOrder}
                >
                  Place Order
                </button>
              </>
            )}
            <button 
              className="close-cart"
              onClick={() => setShowCart(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FoodMenu;
