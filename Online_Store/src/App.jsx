import './App.css';

import Header from './components/Header';
import Hero from './components/Hero';
import ProductCard from './components/ProductCard';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Header storeName="GameVault" />

      <main>
        <Hero
          title="Level Up Your Gaming"
          subtitle="Discover premium gaming gear designed for players who demand the best."
          callToAction="Shop Now"
        />

        <section className="products-section" id="products">
          <h2>Featured Products</h2>

          <div className="products-grid">
            <ProductCard
              name="Phantom X Gaming Mouse"
              price="59.99"
              image="https://placehold.co/600x400/111827/ffffff?text=Gaming+Mouse"
              description="A precise gaming mouse with customizable controls and RGB lighting."
            />

            <ProductCard
              name="RGB Mechanical Keyboard"
              price="89.99"
              image="https://placehold.co/600x400/312e81/ffffff?text=Mechanical+Keyboard"
              description="A responsive mechanical keyboard with colorful RGB backlighting."
            />

            <ProductCard
              name="Pro Gaming Headset"
              price="79.99"
              image="https://placehold.co/600x400/4c1d95/ffffff?text=Gaming+Headset"
              description="Immersive sound and a comfortable microphone for gaming sessions."
            />
          </div>
        </section>
      </main>

      <Footer
        storeName="GameVault"
        email="support@gamevault.com"
        phone="(555) 123-4567"
      />
    </div>
  );
}

export default App;