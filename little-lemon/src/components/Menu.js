import React from 'react';
import './menu.css';

function Menu() {
  return (
    <div className="menu-page">
      <div className="ll">Little Lemon</div>
      <div className="menu">Mexican-Italian Fusion Cuisine</div>
      <div className="menu-container">
        
        {/* Section: Starters - Para Empezar */}
        <div className="section">
          <h3 className="meal-type">Starters - Para Empezar</h3>
          
          <div className="item-name">
            <div className="label">Limoncello Bean Bruschetta 🌿</div>
            <b>$9</b>
            <div className="description">Toasted ciabatta topped with creamy cannellini beans marinated in limoncello, fresh rosemary, and garlic, finished with a zest of lemon</div>
          </div>

          <div className="item-name">
            <div className="label">Citrus-Kissed Corn Ribs 🌿</div>
            <b>$10</b>
            <div className="description">Grilled corn "ribs" brushed with a vibrant lime-chili oil and sprinkled with vegan cotija cheese and cilantro</div>
          </div>

          <div className="item-name">
            <div className="label">Arancini al Pastor 🌿</div>
            <b>$11</b>
            <div className="description">Crispy saffron risotto balls filled with smoky chipotle-spiced jackfruit, served with a tangy orange salsa roja</div>
          </div>

          <div className="item-name">
            <div className="label">Lemon-Basil Guacamole with Crispy Polenta Chips 🌿</div>
            <b>$12</b>
            <div className="description">Creamy avocado mashed with fresh basil, lemon juice, and a hint of garlic, served with golden, crispy polenta triangles</div>
          </div>

          <div className="item-name">
            <div className="label">Caprese Skewers with Balsamic-Lime Glaze 🌱</div>
            <b>$10</b>
            <div className="description">Skewers of marinated vegan mozzarella balls, cherry tomatoes, and fresh basil leaves, drizzled with a sweet and sour balsamic-lime reduction</div>
          </div>

          <div className="item-name">
            <div className="label">Spicy Citrus Zucchini Fritters 🌱</div>
            <b>$9</b>
            <div className="description">Savory zucchini and corn fritters infused with lime zest and a touch of jalapeño, served with a cooling cilantro-lime crema</div>
          </div>

          <div className="item-name">
            <div className="label">Lemon-Infused White Bean & Kale Dip 🌿</div>
            <b>$11</b>
            <div className="description">Creamy white bean and sautéed kale dip with a bright lemon-garlic flavor, served warm with grilled pita bread and vegetable crudités</div>
          </div>

          <div className="item-name">
            <div className="label">Mini Citrus-Marinated Portobello Tostadas 🌿</div>
            <b>$12</b>
            <div className="description">Crispy corn tortillas topped with marinated and grilled portobello strips, a zesty orange-habanero salsa, and pickled red onions</div>
          </div>

          <div className="item-name">
            <div className="label">Vegan "Meatballs" al Limone 🌿</div>
            <b>$13</b>
            <div className="description">Flavorful lentil and vegetable "meatballs" simmered in a light lemon-herb sauce, served with a side of smoky chipotle marinara for dipping</div>
          </div>
        </div>

        {/* Section: Salads - Ensaladas */}
        <div className="section salads">
          <h3 className="meal-type">Salads - Ensaladas</h3>
          
          <div className="item-name">
            <div className="label">Citrus & Roasted Beet Salad with Pistachios 🌿</div>
            <b>$14</b>
            <div className="description">Roasted red and golden beets tossed with mixed greens, segments of orange and grapefruit, crumbled vegan feta cheese, and toasted pistachios in a lemon-tahini dressing</div>
          </div>

          <div className="item-name">
            <div className="label">Italian Chopped Salad with Lime-Cilantro Vinaigrette 🌿</div>
            <b>$13</b>
            <div className="description">A vibrant mix of chopped romaine lettuce, cherry tomatoes, cucumber, red onion, Kalamata olives, marinated artichoke hearts, and chickpeas, tossed in a zesty lime-cilantro vinaigrette</div>
          </div>

          <div className="item-name">
            <div className="label">Spicy Mango & Avocado Salad with Lemon Vinaigrette 🌿</div>
            <b>$15</b>
            <div className="description">Diced ripe mango and creamy avocado tossed with red onion, jalapeño (optional), and cilantro, served over a bed of baby spinach with a bright lemon vinaigrette</div>
          </div>

          <div className="item-name">
            <div className="label">Grilled Corn & Black Bean Salad with Orange-Chipotle Dressing 🌿</div>
            <b>$14</b>
            <div className="description">Grilled sweet corn kernels and black beans mixed with bell peppers, red onion, and cilantro, tossed in a smoky and sweet orange-chipotle dressing, served on a bed of crisp lettuce</div>
          </div>

          <div className="item-name">
            <div className="label">Caprese Quinoa Salad with Lemon-Basil Pesto 🌱</div>
            <b>$13</b>
            <div className="description">Fluffy quinoa mixed with cherry tomatoes, fresh basil, vegan mozzarella balls, and a vibrant lemon-basil pesto dressing</div>
          </div>
        </div>

        {/* Section: Soups - Sopas */}
        <div className="section soups">
          <h3 className="meal-type">Soups - Sopas</h3>
          
          <div className="item-name">
            <div className="label">Creamy Lemon-Tomato Bisque 🌿</div>
            <b>$10</b>
            <div className="description">A rich and creamy tomato bisque infused with a hint of lemon and fresh basil, served with crusty bread</div>
          </div>

          <div className="item-name">
            <div className="label">Spicy White Bean & Kale Soup with Lime 🌿</div>
            <b>$9</b>
            <div className="description">Hearty white bean and kale soup simmered with onions, garlic, and a touch of chili, finished with a squeeze of fresh lime juice and cilantro</div>
          </div>

          <div className="item-name">
            <div className="label">Roasted Butternut Squash & Orange Soup 🌿</div>
            <b>$11</b>
            <div className="description">Smooth and velvety roasted butternut squash soup with a subtle sweetness enhanced by fresh orange juice and a hint of ginger. Garnished with toasted pumpkin seeds</div>
          </div>
        </div>

        {/* Section: Main Courses - Platos Fuertes */}
        <div className="section mains">
          <h3 className="meal-type">Main Courses - Platos Fuertes</h3>
          
          {/* Vegetarian Mains */}
          <div className="item-name">
            <div className="label">Lemon-Ricotta Stuffed Shells with Spicy Tomato Cream Sauce 🌱</div>
            <b>$18</b>
            <div className="description">Large pasta shells filled with a creamy ricotta cheese blended with lemon zest and herbs, baked in a rich and slightly spicy tomato cream sauce</div>
          </div>

          <div className="item-name">
            <div className="label">Poblano Mac & Cheese with Corn & Lime Crema 🌱</div>
            <b>$17</b>
            <div className="description">Elbow macaroni in a creamy cheese sauce with roasted poblano peppers and sweet corn, topped with a swirl of tangy lime crema and toasted breadcrumbs</div>
          </div>

          <div className="item-name">
            <div className="label">Eggplant Parmigiana Enchiladas 🌱</div>
            <b>$19</b>
            <div className="description">Layers of thinly sliced breaded eggplant, rich tomato sauce, and melted mozzarella cheese rolled in corn tortillas, baked until bubbly and served with a side of Mexican rice</div>
          </div>

          <div className="item-name">
            <div className="label">Spinach & Artichoke Ravioli with Lemon-Butter Sage Sauce 🌱</div>
            <b>$20</b>
            <div className="description">Homemade ravioli filled with a savory mixture of spinach and artichoke hearts, tossed in a delicate lemon-butter sauce with fresh sage leaves and grated Parmesan cheese</div>
          </div>

          <div className="item-name">
            <div className="label">Mushroom & Goat Cheese Quesadillas with Orange-Fig Salsa 🌱</div>
            <b>$18</b>
            <div className="description">Large flour tortillas filled with sautéed mushrooms, caramelized onions, and creamy goat cheese, served with a sweet and tangy orange-fig salsa</div>
          </div>

          {/* Vegan Mains */}
          <div className="item-name">
            <div className="label">Spicy Lemon & Black Bean Burgers with Avocado-Lime Aioli 🌿</div>
            <b>$17</b>
            <div className="description">Flavorful black bean and vegetable burgers infused with lemon zest and spices, served on toasted buns with a creamy avocado-lime aioli, lettuce, and tomato</div>
          </div>

          <div className="item-name">
            <div className="label">Vegan Polenta Lasagna with Roasted Vegetables & Chipotle Marinara 🌿</div>
            <b>$19</b>
            <div className="description">Layers of creamy polenta, roasted seasonal vegetables (zucchini, bell peppers, eggplant), and a smoky chipotle-infused marinara sauce, baked until golden brown</div>
          </div>

          <div className="item-name">
            <div className="label">Sweet Potato & Kale Tacos with Citrus Slaw 🌿</div>
            <b>$16</b>
            <div className="description">Roasted sweet potato and sautéed kale served in warm corn tortillas with a refreshing and tangy citrus slaw (cabbage, carrots, lime juice, cilantro)</div>
          </div>

          <div className="item-name">
            <div className="label">Lentil Bolognese with Lemon-Herb Gnocchi 🌿</div>
            <b>$20</b>
            <div className="description">Hearty lentil and vegetable bolognese sauce served over soft, homemade vegan gnocchi infused with lemon zest and fresh herbs</div>
          </div>
        </div>

        {/* Section: Desserts - Postres */}
        <div className="section desserts">
          <h3 className="meal-type">Desserts - Postres</h3>
          
          {/* Vegetarian Desserts */}
          <div className="item-name">
            <div className="label">Lemon-Lavender Panna Cotta with Honey Drizzle 🌱</div>
            <b>$10</b>
            <div className="description">Silky smooth panna cotta infused with the delicate flavors of lemon and lavender, drizzled with local honey and garnished with edible flowers</div>
          </div>

          <div className="item-name">
            <div className="label">Ricotta & Citrus Cannoli with Pistachio Dust 🌱</div>
            <b>$11</b>
            <div className="description">Crispy fried cannoli shells filled with a sweet ricotta cheese blended with candied citrus peel and a hint of vanilla, dusted with chopped pistachios</div>
          </div>

          <div className="item-name">
            <div className="label">Mexican Chocolate Budino with Orange Zest & Whipped Cream 🌱</div>
            <b>$12</b>
            <div className="description">Rich and decadent dark chocolate custard infused with a touch of cinnamon and a hint of chili, topped with fresh orange zest and a dollop of whipped cream</div>
          </div>

          {/* Vegan Desserts */}
          <div className="item-name">
            <div className="label">Lime & Coconut Chia Seed Pudding with Toasted Almonds 🌿</div>
            <b>$9</b>
            <div className="description">Creamy chia seed pudding made with coconut milk and infused with fresh lime juice and zest, topped with toasted slivered almonds</div>
          </div>

          <div className="item-name">
            <div className="label">Vegan Chocolate Avocado Mousse with Raspberry Coulis 🌿</div>
            <b>$11</b>
            <div className="description">Rich and decadent chocolate mousse made with ripe avocados and cocoa powder, served with a tart raspberry coulis</div>
          </div>

          <div className="item-name">
            <div className="label">Orange & Anise Biscotti with Sweet Wine Dip 🌿</div>
            <b>$10</b>
            <div className="description">Crispy twice-baked biscotti infused with orange zest and a hint of anise, served with a small glass of sweet dessert wine (vegan-friendly option available)</div>
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