import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import productsData from './Data/products.json';


const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [view, setView] = useState('products');

  useEffect(() => {
    setProducts(productsData);
  }, []);

  const addToCart = (product) => {
    const exists = cart.find((item) => item.id === product.id);
    if (!exists) {
      setCart([...cart, product]);
      toast.success(`${product.name} added to cart!`);
    } else {
      toast.info('Product already in cart');
    }
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
    toast.error('Removed from cart');
  };

  const checkout = () => {
    setCart([]);
    toast.success('Proceeded to Checkout!');
  };

  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  return (
    <div className="bg-white min-h-screen text-slate-800">
      <ToastContainer position="top-right" autoClose={2000} />

      {/*Navbar */}


      <nav className="flex items-center justify-between px-6 py-4 md:px-20 bg-white sticky top-0 z-50">
        <div className="text-2xl font-bold text-[#7F2FFF]">DigiTools</div>
        <div className="hidden md:flex space-x-8 font-medium text-sm">
          <a href="#" className="hover:text-[#7F2FFF]">Products</a>
          <a href="#" className="hover:text-[#7F2FFF]">Features</a>
          <a href="#" className="hover:text-[#7F2FFF]">Pricing</a>
          <a href="#" className="hover:text-[#7F2FFF]">Testimonials</a>
          <a href="#" className="hover:text-[#7F2FFF]">FAQ</a>
        </div>
        <div className="flex items-center space-x-4">
          <button className="flex items-center gap-1 text-sm font-medium">
            🛒 Login <span className="bg-slate-100 px-2 rounded-full">{cart.length}</span>
          </button>
          <button className="bg-[#7F2FFF] text-white px-5 py-2 rounded-lg text-sm font-bold">Get Started</button>
        </div>
      </nav>



      {/* Hero Section */}


      <header className="px-6 md:px-20 py-16 flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2">
          <div className="inline-flex items-center gap-2 bg-[#F3EBFF] text-[#7F2FFF] px-3 py-1 rounded-full text-xs font-bold mb-6">
            <span className="w-2 h-2 bg-[#7F2FFF] rounded-full animate-pulse"></span>
            New: AI-Powered Tools Available
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
            Supercharge Your <br /> <span className="text-slate-900">Digital Workflow</span>
          </h1>
          <p className="text-slate-500 text-lg mb-8 max-w-lg">
            Access premium AI tools, design assets, and productivity software—all in one place. Start creating faster today.
          </p>
          <div className="flex gap-4">
            <button className="bg-[#7F2FFF] text-white px-8 py-3 rounded-xl font-bold hover:shadow-lg transition">Explore Products</button>
            <button className="border-2 border-[#7F2FFF] text-[#7F2FFF] px-8 py-3 rounded-xl font-bold flex items-center gap-2 hover:bg-[#F3EBFF] transition-all duration-300 group">
  <div className="w-8 h-8 rounded-full border border-[#7F2FFF] flex items-center justify-center group-hover:scale-110 transition-transform">
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16">
      <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/>
    </svg>
  </div>
  Watch Demo
</button>
          </div>
        </div>
        <div className="md:w-1/2 relative">
          <div className="bg-slate-200 w-full h-[400px] rounded-3xl overflow-hidden shadow-2xl">
            

            <img src="https://i.ibb.co/M0FBMrj/banner.png" alt="Hero" className="w-full h-full object-cover" />

          </div>
        </div>
      </header>

      
     {/* Stats Section */}

<section className="bg-[#7F2FFF] py-12 w-full flex justify-around text-white text-center">
  <div className="flex-1 border-r border-white/20">
    <h2 className="text-4xl font-bold">50K+</h2>
    <p className="text-sm opacity-80 mt-1 font-medium">Active Users</p>
  </div>
  <div className="flex-1 border-r border-white/20">
    <h2 className="text-4xl font-bold">200+</h2>
    <p className="text-sm opacity-80 mt-1 font-medium">Premium Tools</p>
  </div>
  <div className="flex-1">
    <h2 className="text-4xl font-bold">4.9</h2>
    <p className="text-sm opacity-80 mt-1 font-medium">Rating</p>
  </div>
</section>


      {/* Products Section with Toggling */}


      <section className="py-20 px-6 md:px-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold mb-4">Premium Digital Tools</h2>
          <p className="text-slate-500 max-w-xl mx-auto mb-8">Choose from our curated collection of premium digital products designed to boost your productivity and creativity.</p>
          
          <div className="inline-flex bg-slate-100 p-1.5 rounded-full border">
            <button onClick={() => setView('products')} className={`px-8 py-2 rounded-full font-bold transition ${view === 'products' ? 'bg-[#7F2FFF] text-white shadow-md' : 'text-slate-500'}`}>Products</button>
            <button onClick={() => setView('cart')} className={`px-8 py-2 rounded-full font-bold transition ${view === 'cart' ? 'bg-[#7F2FFF] text-white shadow-md' : 'text-slate-500'}`}>Cart ({cart.length})</button>
          </div>
        </div>

        {view === 'products' ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map(p => (
              <div key={p.id} className="bg-white border rounded-3xl p-8 relative hover:shadow-xl transition flex flex-col">
                <div className={`absolute top-4 right-4 text-[10px] font-bold px-3 py-1 rounded-full ${p.tag === 'Best Seller' ? 'bg-orange-100 text-orange-600' : p.tag === 'Popular' ? 'bg-blue-100 text-blue-600' : 'bg-green-100 text-green-600'}`}>
                  {p.tag}
                </div>
                <div className="text-4xl mb-6 bg-slate-50 w-fit p-4 rounded-2xl">{p.icon}</div>
                <h3 className="text-xl font-bold mb-2">{p.name}</h3>
                <p className="text-slate-500 text-sm mb-6 flex-grow">{p.description}</p>
                <div className="mb-6">
                  <span className="text-3xl font-extrabold">${p.price}</span>
                  <span className="text-slate-400">/{p.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {p.features.map((f, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-slate-600">
                      <span className="text-green-500 font-bold">✔</span> {f}
                    </li>
                  ))}
                </ul>
                <button onClick={() => addToCart(p)} className="w-full bg-[#7F2FFF] text-white py-3 rounded-xl font-bold hover:bg-[#6b25e0] transition">Buy Now</button>
              </div>
            ))}
          </div>
        ) : (
          /* Cart Design as per Figma photo 1 */

          <div className="max-w-4xl mx-auto bg-white border rounded-[32px] p-6 md:p-12 shadow-sm">
            <h2 className="text-2xl font-bold mb-8">Your Cart</h2>
            {cart.length === 0 ? (
              <div className="text-center py-20 text-slate-400">Your cart is empty</div>
            ) : (
              <div className="space-y-6">
                {cart.map(item => (
                  <div key={item.id} className="flex items-center justify-between p-6 bg-slate-50/50 rounded-2xl border border-slate-100">
                    <div className="flex items-center gap-4">
                      <div className="bg-white p-3 rounded-xl shadow-sm text-2xl">{item.icon}</div>
                      <div>
                        <h4 className="font-bold">{item.name}</h4>
                        <p className="text-slate-400 text-sm">${item.price}</p>
                      </div>
                    </div>
                    <button onClick={() => removeFromCart(item.id)} className="text-rose-500 font-bold text-sm">Remove</button>
                  </div>
                ))}
                <div className="flex justify-between items-center py-6 border-t mt-10">
                  <span className="text-slate-400">Total:</span>
                  <span className="text-4xl font-extrabold">${totalPrice}</span>
                </div>
                <button onClick={checkout} className="w-full bg-[#7F2FFF] text-white py-4 rounded-2xl font-bold text-lg shadow-lg shadow-[#7F2FFF]/20">Proceed To Checkout</button>
              </div>
            )}
          </div>
        )}
      </section>


      {/*  Steps Section */}

      <section className="py-20 bg-slate-50 px-6 md:px-20 text-center">
        <h2 className="text-4xl font-extrabold mb-4">Get Started In 3 Steps</h2>
        <p className="text-slate-500 mb-16">Start using premium digital tools in minutes, not hours.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            { id: '01', title: 'Create Account', desc: 'Sign up for free in seconds. No credit card required.', icon: '👤' },
            { id: '02', title: 'Choose Products', desc: 'Browse our catalog and select the tools that fit your needs.', icon: '📦' },
            { id: '03', title: 'Start Creating', desc: 'Download and start using your premium tools immediately.', icon: '🚀' }
          ].map(step => (
            <div key={step.id} className="bg-white p-10 rounded-3xl relative">
              <span className="absolute top-6 right-6 bg-[#7F2FFF] text-white w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold">{step.id}</span>
              <div className="bg-[#F3EBFF] w-20 h-20 rounded-full flex items-center justify-center text-4xl mx-auto mb-6 text-[#7F2FFF]">{step.icon}</div>
              <h4 className="text-xl font-bold mb-3">{step.title}</h4>
              <p className="text-slate-500 text-sm">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Section */}

      <section className="py-24 px-6 md:px-20 text-center">
        <h2 className="text-4xl font-extrabold mb-4">Simple, Transparent Pricing</h2>
        <p className="text-slate-500 mb-16">Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">

          {/* Starter */}

          <div className="bg-slate-50 p-10 rounded-3xl text-left border border-slate-100">
            <h4 className="text-xl font-bold">Starter</h4>
            <p className="text-sm text-slate-500 mb-6">Perfect for getting started</p>
            <div className="mb-8"><span className="text-5xl font-extrabold">$0</span><span className="text-slate-400">/Month</span></div>
            <ul className="space-y-4 mb-8 text-sm">
              <li className="flex items-center gap-2">✔ Access to 10 free tools</li>
              <li className="flex items-center gap-2">✔ Basic templates</li>
              <li className="flex items-center gap-2">✔ 1 project per month</li>
            </ul>
            <button className="w-full bg-[#7F2FFF] text-white py-3 rounded-xl font-bold">Get Started Free</button>
          </div>


          {/* Pro (Highlighted) */}


          <div className="bg-[#7F2FFF] p-12 rounded-[40px] text-left text-white shadow-2xl relative scale-105 z-10">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-400 text-slate-900 px-4 py-1 rounded-full text-xs font-extrabold">Most Popular</div>
            <h4 className="text-xl font-bold">Pro</h4>
            <p className="text-sm opacity-80 mb-6">Best for professionals</p>
            <div className="mb-8"><span className="text-5xl font-extrabold">$29</span><span className="opacity-60">/Month</span></div>
            <ul className="space-y-4 mb-8 text-sm opacity-90">
              <li className="flex items-center gap-2">✔ Access to all premium tools</li>
              <li className="flex items-center gap-2">✔ Unlimited templates</li>
              <li className="flex items-center gap-2">✔ Priority support</li>
              <li className="flex items-center gap-2">✔ Cloud sync</li>
            </ul>
            <button className="w-full bg-white text-[#7F2FFF] py-4 rounded-2xl font-extrabold">Start Pro Trial</button>
          </div>

          {/* Enterprise */}


          <div className="bg-slate-50 p-10 rounded-3xl text-left border border-slate-100">
            <h4 className="text-xl font-bold">Enterprise</h4>
            <p className="text-sm text-slate-500 mb-6">For teams and businesses</p>
            <div className="mb-8"><span className="text-5xl font-extrabold">$99</span><span className="text-slate-400">/Month</span></div>
            <ul className="space-y-4 mb-8 text-sm">
              <li className="flex items-center gap-2">✔ Everything in Pro</li>
              <li className="flex items-center gap-2">✔ Team collaboration</li>
              <li className="flex items-center gap-2">✔ Custom branding</li>
            </ul>
            <button className="w-full bg-[#7F2FFF] text-white py-3 rounded-xl font-bold">Contact Sales</button>
          </div>
        </div>
      </section>

      {/* CTA Section */}


      <section className="py-20 px-6 md:px-20">
        <div className="bg-gradient-to-r from-[#7F2FFF] to-[#a45cff] rounded-[48px] py-16 px-10 text-center text-white">
          <h2 className="text-4xl font-extrabold mb-4">Ready To Transform Your Workflow?</h2>
          <p className="opacity-90 max-w-lg mx-auto mb-10">Join thousands of professionals who are already using DigiTools to work smarter. Start your free trial today.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button className="bg-white text-[#7F2FFF] px-10 py-4 rounded-2xl font-bold shadow-lg">Explore Products</button>
            <button className="bg-white/10 backdrop-blur-md border border-white/20 px-10 py-4 rounded-2xl font-bold">View Pricing</button>
          </div>
          <p className="mt-8 text-xs opacity-60">14-day free trial • No credit card required • Cancel anytime</p>
        </div>
      </section>



     {/* Footer */}


      <footer className="bg-[#0F172A] text-white pt-20 pb-10 px-6 md:px-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-2xl font-bold mb-6">DigiTools</h3>
            <p className="text-slate-400 text-sm leading-relaxed">Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.</p>
          </div>
          <div>
            <h5 className="font-bold mb-6">Product</h5>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><a href="#" className="hover:text-white">Features</a></li>
              <li><a href="#" className="hover:text-white">Pricing</a></li>
              <li><a href="#" className="hover:text-white">Templates</a></li>
              <li><a href="#" className="hover:text-white">Integrations</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold mb-6">Company</h5>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><a href="#" className="hover:text-white">About</a></li>
              <li><a href="#" className="hover:text-white">Blog</a></li>
              <li><a href="#" className="hover:text-white">Careers</a></li>
              <li><a href="#" className="hover:text-white">Press</a></li>
            </ul>
          </div>
          <div>
  <h5 className="font-bold mb-6">Social Links</h5>
  <div className="flex gap-4">

    {/* Facebook */}

    <a href="#" className="bg-white/10 w-12 h-12 rounded-full flex items-center justify-center hover:bg-[#7F2FFF] transition-all text-white">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
      </svg>
    </a>


    {/* Instagram */}

    <a href="#" className="bg-white/10 w-12 h-12 rounded-full flex items-center justify-center hover:bg-[#7F2FFF] transition-all text-white">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
        <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.999 0h.001zm1.978 1.864c.757.034 1.168.16 1.442.266.364.141.624.308.896.58.272.271.439.53.58.894.107.273.232.684.266 1.44.034.758.043 1.02.043 3.197s-.009 2.439-.043 3.196c-.034.757-.16 1.169-.266 1.441a2.451 2.451 0 0 1-.58.896 2.454 2.454 0 0 1-.894.58c-.273.107-.684.232-1.441.266-.757.034-1.02.043-3.197.043s-2.44-.009-3.196-.043c-.757-.034-1.169-.16-1.441-.266a2.473 2.473 0 0 1-.896-.58 2.477 2.477 0 0 1-.58-.896c-.107-.273-.232-.684-.266-1.441-.034-.757-.043-1.02-.043-3.197s.009-2.44.043-3.196c.034-.757.16-1.169.266-1.441.141-.364.308-.624.58-.896.271-.272.53-.439.894-.58.273-.107.684-.232 1.441-.266.757-.034 1.02-.043 3.197-.043s2.44.009 3.196.043zm-3.978 1.902a4.237 4.237 0 1 0 0 8.474 4.237 4.237 0 0 0 0-8.474zm0 7.008a2.771 2.771 0 1 1 0-5.543 2.771 2.771 0 0 1 0 5.543zm3.601-7.149a1.08 1.08 0 1 1-2.161 0 1.08 1.08 0 0 1 2.161 0z"/>
      </svg>
    </a>

    {/* Twitter/X */}
    
    <a href="#" className="bg-white/10 w-12 h-12 rounded-full flex items-center justify-center hover:bg-[#7F2FFF] transition-all text-white">
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
        <path d="M12.6 0h2.454l-5.36 6.142L16 16h-4.937l-3.867-5.07L2.777 16H.325l5.733-6.57L0 0h5.063l3.495 4.633L12.6 0zm-.86 14.534h1.36L4.023 1.447H2.565l9.175 13.087z"/>
      </svg>
    </a>
  </div>
</div>
        </div>
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500 gap-4">
          <p>© 2026 Digitools. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
            <a href="#" className="hover:text-white">Cookies</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;