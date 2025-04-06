import './Main.css';

function Main() {
  return (
    <main>
      <section className="mario-adrian">
        <img src="/Mario and Adrian b.jpg" alt="Mario and Adrian" />
        <p>
          Meet Mario and Adrian, our passionate chefs whose love for food
          is the heart of Little Lemon. Their dedication and culinary expertise
          bring authentic flavors to every dish.
        </p>
      </section>

      <section className="dishes">
        <div className="dish">
          <img src="/greek salad.jpg" alt="Greek Salad" />
          <p>Our famous Greek Salad, a refreshing mix of fresh vegetables and feta cheese.</p>
        </div>
        <div className="dish">
          <img src="/restauranfood.jpg" alt="Restaurant Food" />
          <p>A glimpse of our diverse menu, offering something for everyone.</p>
        </div>
        <div className="dish">
          <img src="/lemon dessert.jpg" alt="Lemon Dessert" />
          <p>Indulge in our Lemon Dessert, a sweet and tangy delight.</p>
        </div>
      </section>

      <section className="restaurant">
        <img src="/restaurant.jpg" alt="Restaurant" />
        <p>
          Dine with us and experience our spacious outdoor terrace,
          transporting you to the heart of Sicily. Enjoy the ambiance and exquisite cuisine.
        </p>
      </section>
    </main>
  );
}

export default Main;