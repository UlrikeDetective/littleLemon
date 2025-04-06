import './Main.css';
import { useState } from 'react';

function Main() {
  const [currentDishIndex, setCurrentDishIndex] = useState(0);
  const dishes = [
    { src: "/greek salad.jpg", alt: "Greek Salad", description: "Our famous Greek Salad, a refreshing mix of fresh vegetables and feta cheese." },
    { src: "/restauranfood.jpg", alt: "Restaurant Food", description: "A glimpse of our diverse menu, offering something for everyone." },
    { src: "/lemon dessert.jpg", alt: "Lemon Dessert", description: "Indulge in our Lemon Dessert, a sweet and tangy delight." }
  ];

  const nextDish = () => {
    setCurrentDishIndex((prevIndex) => (prevIndex + 1) % dishes.length);
  };

  const prevDish = () => {
    setCurrentDishIndex((prevIndex) => (prevIndex - 1 + dishes.length) % dishes.length);
  };

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
        <div className="carousel-container">
          <button className="carousel-button prev" onClick={prevDish}>&lt;</button>
          <div className="carousel-slide" style={{ transform: `translateX(-${currentDishIndex * 100}%)` }}>
            {dishes.map((dish, index) => (
              <div className="dish" key={index}>
                <img src={dish.src} alt={dish.alt} />
                <p>{dish.description}</p>
              </div>
            ))}
          </div>
          <button className="carousel-button next" onClick={nextDish}>&gt;</button>
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