import './HomePage.css';

function HomePage() {
  return (
    <section className="homepage">
      <section className="mario-adrian">
        <img src="/Mario and Adrian b.jpg" alt="Mario and Adrian" />
        <p>
        Behind the vibrant flavors of the Little Lemon restaurant, 
        stand Mario and Adrian. Mario brings the comforting heart of Italian cuisine, 
        while Adrian infuses the bold spirit of Mexican traditions. Their shared 
        passion for vegetarian and vegan food sparked an exciting fusion, where 
        surprising harmonies emerge. And their secret ingredient? The radiant lemon, 
        a unifying zest that brightens every dish, offering a unique twist where 
        Italy meets Mexico at Little Lemon.
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
    </section>
  );
}

export default HomePage;