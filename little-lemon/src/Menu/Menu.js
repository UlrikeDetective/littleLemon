import React from 'react';
import './menu.css';

function Menu() {
  return (
    <div className="menu-page">
      <div className="ll">Little Lemon</div>
      <div className="menu">Vegetarian & Vegan Menu</div>
      <div className="menu-container">
        
        {/* Section: Mexican Favorites */}
        <div className="section">
          <h3 className="meal-type">Mexican Favorites</h3>
          <div className="item-name">
            <div className="label">Vegetarian Tacos 🌱</div>
            <b>$10</b>
            <div className="description">Grilled peppers, mushrooms, and onions, topped with fresh guacamole and pico de gallo</div>
          </div>

          <div className="item-name">
            <div className="label">Vegan Street Tacos 🌿</div>
            <b>$10</b>
            <div className="description">Jackfruit al pastor style with pineapple, cilantro, and onions</div>
          </div>

          <div className="item-name">
            <div className="label">Plant-Based Quesadillas 🌱</div>
            <b>$12</b>
            <div className="description">Melted plant-based cheese with sautéed vegetables and chipotle sauce</div>
          </div>

          <div className="item-name">
            <div className="label">Veggie Burrito Bowl 🌿</div>
            <b>$14</b>
            <div className="description">Mexican rice, black beans, roasted corn, avocado, and fresh salsa</div>
          </div>
        </div>

        {/* Section: Italian Pasta */}
        <div className="section">
          <h3 className="meal-type">Italian Pasta</h3>
          <div className="item-name">
            <div className="label">Penne all'Arrabbiata 🌿</div>
            <b>$16</b>
            <div className="description">Spicy tomato sauce, garlic, and fresh basil</div>
          </div>

          <div className="item-name">
            <div className="label">Mushroom Risotto 🌱</div>
            <b>$18</b>
            <div className="description">Creamy arborio rice with wild mushrooms and truffle oil</div>
          </div>

          <div className="item-name">
            <div className="label">Spinach Ricotta Ravioli 🌱</div>
            <b>$17</b>
            <div className="description">Handmade pasta filled with spinach and ricotta, sage butter sauce</div>
          </div>

          <div className="item-name">
            <div className="label">Vegan Carbonara 🌿</div>
            <b>$16</b>
            <div className="description">Spaghetti with cashew cream sauce, mushroom 'bacon', and black pepper</div>
          </div>
        </div>

        {/* Section: Italian Main Courses */}
        <div className="section">
          <h3 className="meal-type">Italian Main Courses</h3>
          <div className="item-name">
            <div className="label">Eggplant Parmesan 🌱</div>
            <b>$19</b>
            <div className="description">Layers of breaded eggplant, marinara sauce, and melted mozzarella</div>
          </div>

          <div className="item-name">
            <div className="label">Portobello Cacciatore 🌿</div>
            <b>$18</b>
            <div className="description">Grilled portobello mushrooms in herb-tomato sauce with polenta</div>
          </div>

          <div className="item-name">
            <div className="label">Cauliflower Steak 🌿</div>
            <b>$17</b>
            <div className="description">Roasted cauliflower with Mediterranean herbs, served with quinoa</div>
          </div>
        </div>

        {/* Legend */}
        <div className="legend">
          <p>🌱 - Vegetarian | 🌿 - Vegan</p>
        </div>
      </div>
    </div>
  );
}

export default Menu;