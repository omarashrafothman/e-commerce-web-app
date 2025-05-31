

export default function Home() {
  return (
    <div className="bg-gray-100 text-gray-800">
      {/* Header */}
      <header className="bg-[#6A983C] text-white py-20 text-center px-4">
        <h1 className="text-4xl font-bold">Omar Othman E-Commerce Platform</h1>
        <p className="mt-4 text-lg">
          A new marketplace under construction where anyone can upload and sell their products — with shipping and a personal dashboard included.
        </p>
      </header>

      {/* About Us */}
      <section className="py-16 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-semibold text-[#6A983C] mb-6">About Us</h2>
        <p className="mb-8 max-w-3xl mx-auto">
          We are a passionate Egyptian team working on building a modern e-commerce platform that helps individuals and businesses sell their products easily. Our platform will offer tools to manage orders, track sales, and handle shipping — all in one place.
        </p>
        <video
          src="/assets/videos/banner2.mp4"
          autoPlay
          playsInline
          loop
          muted
          className="rounded-2xl shadow-lg w-full max-w-3xl mx-auto"
        />
      </section>

      {/* Features
      <section className="py-16 px-6 max-w-5xl mx-auto text-center bg-white">
        <h2 className="text-3xl font-semibold text-[#6A983C] mb-6">Platform Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <img
              src="https://images.unsplash.com/photo-1605902711622-cfb43c4437d4?auto=format&fit=crop&w=1000&q=80"
              alt="Upload products"
              className="rounded-lg shadow-md mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Easy Product Upload</h3>
            <p>Upload your products with images, pricing, and stock in a few clicks.</p>
          </div>
          <div>
            <img
              src="https://i.pinimg.com/736x/53/20/fd/5320fdc8fdfabc225921993f8fd45fbd.jpg"
              alt="Dashboard"
              className="rounded-lg shadow-md mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Seller Dashboard</h3>
            <p>Track orders, manage sales, and follow up with customers using a private dashboard.</p>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1587574293340-ec072e79cfb5?auto=format&fit=crop&w=1000&q=80"
              alt="Shipping service"
              className="rounded-lg shadow-md mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Shipping Service</h3>
            <p>Integrated shipping options so your products reach your customers fast.</p>
          </div>
          <div>
            <img
              src="https://i.pinimg.com/736x/fc/4b/32/fc4b323f9327d4d46068e89859a90e1a.jpg1"
              alt="User friendly"
              className="rounded-lg shadow-md mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">User-Friendly Design</h3>
            <p>Simple and clean UI — perfect for first-time users and experienced sellers alike.</p>
          </div>
        </div>
      </section> */}

      {/* Try Demo */}
      <section className="py-20 text-center">
        <h2 className="text-3xl font-semibold text-[#6A983C] mb-6">Want to Try the Demo?</h2>
        <a
          href="https://example.com"
          className="bg-[#6A983C] hover:bg-green-700 text-white px-8 py-3 rounded text-lg transition"
        >
          Try Demo
        </a>
      </section>

      {/* Footer */}
      <footer className="bg-gray-200 py-6 text-center text-sm text-gray-600">
        &copy; 2025 Omar Othman. All rights reserved.
      </footer>
    </div>
  );
}
