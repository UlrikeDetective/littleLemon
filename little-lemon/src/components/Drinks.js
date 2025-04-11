import React from 'react';
import './Drinks.css';

function Drinks() {
  return (
    <div className="drinks-page">
      <div className="ll">Little Lemon</div>
      <div className="menu">Drinks - Bebidas</div>
      <div className="drinks-container">
        
        {/* Lemonades Section */}
        <div className="section lemonades">
          <h3 className="drink-type">Lemonades - Limonadas</h3>
          
          <div className="item-name">
            <div className="label">Classic Limeade 🌿</div>
            <b>$5</b>
            <div className="description">Freshly squeezed lime juice, water, and agave nectar, served over ice</div>
          </div>

          <div className="item-name">
            <div className="label">Strawberry-Basil Lemonade 🌿</div>
            <b>$6</b>
            <div className="description">Classic limeade infused with muddled fresh strawberries and basil leaves</div>
          </div>

          <div className="item-name">
            <div className="label">Spicy Mango Lemonade 🌿</div>
            <b>$6</b>
            <div className="description">Tangy limeade with sweet mango puree and a hint of jalapeño</div>
          </div>

          <div className="item-name">
            <div className="label">Italian Lemon & Mint Soda 🌿</div>
            <b>$5</b>
            <div className="description">Fresh lemon juice and mint syrup topped with sparkling water</div>
          </div>
        </div>

        {/* Smoothies Section */}
        <div className="section smoothies">
          <h3 className="drink-type">Smoothies - Batidos</h3>
          
          <div className="item-name">
            <div className="label">Tropical Citrus Burst 🌿</div>
            <b>$7</b>
            <div className="description">Mango, pineapple, orange juice, and a squeeze of lime</div>
          </div>

          <div className="item-name">
            <div className="label">Berry-Lime Refresher 🌿</div>
            <b>$7</b>
            <div className="description">Mixed berries, lime juice, a touch of agave, and almond milk</div>
          </div>

          <div className="item-name">
            <div className="label">Green Power Smoothie 🌿</div>
            <b>$7</b>
            <div className="description">Spinach, banana, avocado, lime juice, and coconut water</div>
          </div>
        </div>

        {/* Cold Drinks Section */}
        <div className="section cold-drinks">
          <h3 className="drink-type">Cold Drinks - Bebidas Frías</h3>
          
          <div className="item-name">
            <div className="label">Hibiscus Iced Tea 🌿</div>
            <b>$4</b>
            <div className="description">Refreshing iced tea brewed from hibiscus flowers, lightly sweetened</div>
          </div>

          <div className="item-name">
            <div className="label">Horchata 🌿</div>
            <b>$5</b>
            <div className="description">Traditional Mexican rice milk beverage with cinnamon and a hint of lime zest</div>
          </div>

          <div className="item-name">
            <div className="label">Sparkling Orange & Rosemary Water 🌿</div>
            <b>$4</b>
            <div className="description">Sparkling water infused with fresh orange slices and rosemary sprigs</div>
          </div>

          <div className="item-name">
            <div className="label">Italian Soda 🌿</div>
            <b>$5</b>
            <div className="description">Sparkling water with your choice of flavored syrup (e.g., vanilla, raspberry, almond)</div>
          </div>
        </div>

        {/* Hot Drinks Section */}
        <div className="section hot-drinks">
          <h3 className="drink-type">Hot Drinks - Bebidas Calientes</h3>
          
          <div className="item-name">
            <div className="label">Espresso</div>
            <b>$3 / $4</b>
            <div className="description">Single or double shot</div>
          </div>

          <div className="item-name">
            <div className="label">Americano</div>
            <b>$3.50</b>
            <div className="description">Espresso diluted with hot water</div>
          </div>

          <div className="item-name">
            <div className="label">Cappuccino 🌿</div>
            <b>$4.50</b>
            <div className="description">Espresso with steamed milk and foamed milk (Vegan option available with plant-based milk +$0.50)</div>
          </div>

          <div className="item-name">
            <div className="label">Latte 🌿</div>
            <b>$4.50</b>
            <div className="description">Espresso with steamed milk and a thin layer of foam (Vegan option available with plant-based milk +$0.50)</div>
          </div>

          <div className="item-name">
            <div className="label">Mocha 🌿</div>
            <b>$5.00</b>
            <div className="description">Espresso with chocolate syrup, steamed milk, and whipped cream (Vegan option available with plant-based milk and vegan whipped cream +$0.75)</div>
          </div>
        </div>

        {/* Teas Section */}
        <div className="section teas">
          <h3 className="drink-type">Teas - Tés</h3>
          
          <div className="item-name">
            <div className="label">Selection of Black Teas 🌿</div>
            <b>$3</b>
            <div className="description">Earl Grey, English Breakfast, etc.</div>
          </div>

          <div className="item-name">
            <div className="label">Selection of Green Teas 🌿</div>
            <b>$3</b>
            <div className="description">Sencha, Jasmine, etc.</div>
          </div>

          <div className="item-name">
            <div className="label">Herbal Infusions 🌿</div>
            <b>$3.50</b>
            <div className="description">Chamomile, Peppermint, Ginger & Lemon, etc.</div>
          </div>
        </div>

        {/* Specialty Hot Drinks Section */}
        <div className="section specialty">
          <h3 className="drink-type">Specialty Hot Drinks</h3>
          
          <div className="item-name">
            <div className="label">Mexican Hot Chocolate 🌿</div>
            <b>$5</b>
            <div className="description">Rich hot chocolate with cinnamon and a hint of chili (Vegan option available with plant-based milk)</div>
          </div>

          <div className="item-name">
            <div className="label">Limoncello Spiked Hot Chocolate 🌱</div>
            <b>$7</b>
            <div className="description">Creamy hot chocolate with a shot of limoncello</div>
          </div>
        </div>

        {/* Legend */}
        <div className="legend">
          <p>🌱 - Vegetarian | 🌿 - Vegan/Vegan Option Available</p>
        </div>
      </div>
    </div>
  );
}

export default Drinks;