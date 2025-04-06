import './Main.css';
import marioAdrianA from '../../public/Mario and Adrian A.jpg';
import greekSalad from '../../public/greek salad.jpg';
import restaurantFood from '../../public/restauranfood.jpg';
import lemonDessert from '../../public/lemon dessert.jpg';
import restaurant from '../../public/restaurant.jpg';

function Main() {
  return (
    <main>
      <section className="mario-adrian">
        <img src={marioAdrianA} alt="Mario and Adrian" />
        <p>
          Meet Mario and Adrian, our passionate chefs whose love for food
          is the heart of Little Lemon. Their dedication and culinary expertise
          bring authentic flavors to every dish.
        </p>
      </section>

      <section className="dishes">
        <div className="dish">
          <img src={greekSalad} alt="Greek Salad" />
          <p>Our famous Greek Salad, a refreshing mix of fresh vegetables and feta cheese.</p>
        </div>
        <div className="dish">
          <img src={restaurantFood} alt="Restaurant Food" />
          <p>A glimpse of our diverse menu, offering something for everyone.</p>
        </div>
        <div className="dish">
          <img src={lemonDessert} alt="Lemon Dessert" />
          <p>Indulge in our Lemon Dessert, a sweet and tangy delight.</p>
        </div>
      </section>

      <section className="restaurant">
        <img src={restaurant} alt="Restaurant" />
        <p>
          Dine with us and experience our spacious outdoor terrace,
          transporting you to the heart of Sicily. Enjoy the ambiance and exquisite cuisine.
        </p>
      </section>
    </main>
  );
}

export default Main;