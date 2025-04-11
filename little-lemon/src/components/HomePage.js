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
        <div className="dish-container">
          <div className="dish">
            <img src="/greek salad.jpg" alt="Greek Salad" />
          </div>
          <div className="dish">
            <img src="/restauranfood.jpg" alt="Restaurant Food" />
          </div>
          <div className="dish">
            <img src="/lemon dessert.jpg" alt="Lemon Dessert" />
          </div>
        </div>
        <p className="dishes-description">
          Step into Little Lemon and embark on a vibrant food journey where the sun-drenched 
          flavors of Italy playfully dance with the spirited zest of Mexico. Each vegetarian 
          and vegan creation is a delightful twist, a surprising embrace of familiar tastes 
          seen through a fresh, citrus-kissed lens. Prepare for a culinary adventure where 
          pasta whispers to peppers, and risotto shares secrets with smoky spices – a truly 
          unique and joyful exploration on your plate.
        </p>
      </section>

      <section className="restaurant">
        <img src="/restaurant.jpg" alt="Restaurant" />
        <p>
        Step into Little Lemon and be embraced by a delightful ambiance where the warmth of terracotta hues meets the vibrant pops of Mexican textiles. Sunlight streams through large windows, illuminating walls adorned with hand-painted citrus motifs and playful culinary quotes in both Italian and Spanish. But the true jewel is the sprawling outdoor terrace. Here, fragrant lemon trees create a lush, intimate haven, their leaves rustling gently in the breeze. As you dine amidst their sun-dappled shade, the scent of blossoms and ripening fruit transports you, one moment to a sun-drenched Italian courtyard, the next to a vibrant Mexican hacienda. It's a truly inspiring space, where every meal feels like a mini-escape to sunnier climes.
        </p>
      </section>
    </section>
  );
}

export default HomePage;