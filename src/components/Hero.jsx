export default function Hero() {
    return (
      <section id="home" className="pt-16">
        <div className="relative h-[600px] bg-[url('/backgroundimage1.jpg')] bg-cover bg-center">
          <div className="absolute inset-0 bg-black/50">
            <div className="container mx-auto px-4 h-full flex items-center">
              <div className="text-white max-w-2xl">
                <h1 className="text-5xl font-bold mb-6">Handcrafted Wooden Masterpieces</h1>
                <p className="text-xl mb-8">Discover our collection of beautifully crafted wooden furniture and decorative items, each piece telling its own unique story.</p>
                <button className="bg-[#a87b50] hover:bg-[#744e2e] text-white px-8 py-3 rounded-lg transition duration-300">
                  Explore Collection
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }