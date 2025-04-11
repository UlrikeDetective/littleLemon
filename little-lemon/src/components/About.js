import './About.css';

function About() {
  return (
    <div className="about-page">
      <div className="about-header">
        <h1>Our Story</h1>
        <div className="decorative-line">
          <span className="italian-colors"></span>
          <span className="mexican-colors"></span>
        </div>
      </div>

      <div className="about-container">
        <div className="decor-left"></div>
        <div className="story-content">
          <p className="intro">
            The late afternoon sun cast long shadows across the terracotta tiles of Little Lemon's terrace. A gentle breeze rustled the leaves of the namesake lemon trees, their fragrant blossoms perfuming the air. Inside, the soft murmur of conversation mingled with the clinking of glasses, a symphony of contentment.
          </p>

          <div className="story-section">
            <h2>The Avocado's Journey</h2>
            <p>
              Our story begins with a single, perfectly ripe Avocado, its skin a deep, inviting green. Chosen with care from a small, sustainable farm, it dreamt of becoming the heart of the Lemon-Basil Guacamole. Its creamy flesh, once gently coaxed from its pit, met the bright, assertive tang of freshly squeezed Lemon, a burst of sunshine that awakened its inherent richness. Finely chopped Red Onion added a subtle bite, a playful counterpoint to the smooth avocado, while fragrant Basil leaves, their peppery notes echoing the Italian countryside, were lovingly minced and folded in. Served alongside golden, crispy Polenta Chips, each bite was a miniature journey from the sunny groves to the rustic Italian table.
            </p>
          </div>

          <div className="story-section">
            <h2>In Our Kitchen</h2>
            <p>
              Nearby, in the warmth of the kitchen, plump, ruby-red Cherry Tomatoes were being gently halved. Their sweet, sun-drenched juice mingled with the peppery bite of fresh Basil and the milky tenderness of vegan Mozzarella balls. A drizzle of Balsamic-Lime Glaze, a reduction where the aged sweetness of balsamic embraced the vibrant zest of Lime, coated each skewer, a final flourish that sang of both Italian vineyards and Mexican citrus groves. These Caprese Skewers were a testament to simple ingredients elevated by thoughtful pairings.
            </p>
          </div>

          <div className="story-section">
            <h2>The Art of Fusion</h2>
            <p>
              Across the room, a bowl of Limoncello Bean Bruschetta was being assembled. Creamy Cannellini Beans, simmered until tender, were then bathed in the fragrant liqueur, Limoncello, its sweet and zesty aroma infusing every crevice. Fresh, needle-like Rosemary leaves, reminiscent of the Tuscan hills, added an earthy perfume, while a whisper of Garlic provided a subtle warmth. Piled high on toasted ciabatta, each bite was a surprising yet harmonious blend of Italian comfort and a bright, citrusy lift.
            </p>
          </div>

          <div className="story-section">
            <h2>Sweet Endings</h2>
            <p>
              Even the desserts held tales of ingredient heroism. The creamy base of the Limoncello Panna Cotta, a silken canvas of vegan perfection, owed its delicate texture to carefully chosen plant-based milks. But the true star was the Limoncello, its intense lemon fragrance transforming the simple custard into a vibrant, elegant finale. A scattering of sweet, jewel-toned Berries, their tartness a delightful contrast, completed the story.
            </p>
          </div>

          <p className="outro">
            At Little Lemon, it wasn't just about the dishes; it was about the journey of each ingredient, from the earth to the plate, transformed by passion and the unifying touch of lemon, creating a culinary narrative that was both familiar and wonderfully new. 
 
          </p>
          <p className="outro">
          <h2>Welcome to Little Lemon.</h2>
            Where every meal is a story waiting to be told.
          </p>
        </div>
        <div className="decor-right"></div>
      </div>
    </div>
  );
}

export default About;