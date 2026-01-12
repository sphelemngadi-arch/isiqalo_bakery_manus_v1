import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Phone, Mail, MapPin, ChevronRight } from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur shadow-sm">
        <div className="container flex items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">IB</span>
            </div>
            <h1 className="text-xl font-bold text-primary">Isiqalo Bakery</h1>
          </div>
          <ul className="hidden md:flex gap-8 items-center">
            <li><a href="/" className="text-foreground hover:text-primary transition">Home</a></li>
            <li><Link href="/menu" className="text-foreground hover:text-primary transition">Menu</Link></li>
            <li><Link href="/about" className="text-foreground hover:text-primary transition">About Us</Link></li>
            <li><Link href="/contact" className="text-foreground hover:text-primary transition">Contact</Link></li>
          </ul>
          <Button variant="default" className="bg-primary hover:bg-primary/90">Order Now</Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero-bakery.jpg"
            alt="Fresh baked goods"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="container relative z-10 max-w-2xl">
          <div className="space-y-6">
            <h2 className="text-6xl md:text-7xl font-bold text-white leading-tight">
              Simply Fresh.
              <br />
              Simply Delicious.
            </h2>
            <p className="text-xl text-white/90 max-w-lg">
              Handcrafted baked goods made fresh daily with the finest ingredients. From neighborhood favorite to your table.
            </p>
            <div className="flex gap-4 pt-4">
              <Link href="/menu">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
                  View Our Menu
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  Get in Touch
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-4xl font-bold text-primary mb-6">About Isiqalo Bakery</h3>
              <p className="text-lg text-foreground/80 mb-4 leading-relaxed">
                Since 2014, Isiqalo Bakery Xpress Shop has been serving the Esikhawini community with fresh, high-quality baked goods. We believe in the power of handcrafted confectionery to bring joy to everyday moments.
              </p>
              <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                Our mission is to provide premium quality, nutritious, and healthy baked products at competitive prices with outstanding service. We're committed to using the finest ingredients and traditional baking methods to create products that taste as good as they look.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-foreground">Fresh baked daily</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-foreground">Premium quality ingredients</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-foreground">Customized specialty cakes</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="/images/bakery-interior.jpg"
                alt="Bakery interior"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-secondary/20 rounded-lg -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Showcase */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-primary mb-4">Our Products</h3>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              From daily confectionery to custom specialty cakes, we offer a wide variety of fresh baked goods for every occasion.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Confectionery Card */}
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <img
                src="/images/confectionery-showcase.jpg"
                alt="Confectionery"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h4 className="text-2xl font-bold text-primary mb-3">Daily Confectionery</h4>
                <p className="text-foreground/70 mb-4">
                  Fresh scones, muffins, queen cakes, doughnuts, and more. Perfect for breakfast or a sweet treat.
                </p>
                <Link href="/menu">
                  <Button variant="outline" className="w-full group">
                    View All <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition" />
                  </Button>
                </Link>
              </div>
            </Card>

            {/* Specialty Cakes Card */}
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <img
                src="/images/specialty-cakes.jpg"
                alt="Specialty Cakes"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h4 className="text-2xl font-bold text-primary mb-3">Specialty Cakes</h4>
                <p className="text-foreground/70 mb-4">
                  Custom birthday, wedding, and celebration cakes. Each design is unique and made to order.
                </p>
                <Link href="/contact">
                  <Button variant="outline" className="w-full group">
                    Order Custom <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition" />
                  </Button>
                </Link>
              </div>
            </Card>

            {/* Artisan Cakes Card */}
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <img
                src="/images/hero-bakery.jpg"
                alt="Artisan Cakes"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h4 className="text-2xl font-bold text-primary mb-3">Artisan Cakes</h4>
                <p className="text-foreground/70 mb-4">
                  Madeira cakes, banana loaves, brownies, and Swiss rolls. Traditional recipes, modern taste.
                </p>
                <Link href="/menu">
                  <Button variant="outline" className="w-full group">
                    Explore <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition" />
                  </Button>
                </Link>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h3 className="text-4xl font-bold mb-4">Ready to Order?</h3>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Place your order online via payment links on WhatsApp or contact us for custom orders and bulk requests.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90">
              Order via WhatsApp
            </Button>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Preview */}
      <section className="py-20 bg-white">
        <div className="container">
          <h3 className="text-3xl font-bold text-primary mb-12 text-center">Get in Touch</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-primary" />
              </div>
              <h4 className="text-xl font-bold text-foreground mb-2">Call Us</h4>
              <p className="text-foreground/70">
                <a href="tel:+27733401990" className="hover:text-primary transition">
                  073 340 1990
                </a>
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-primary" />
              </div>
              <h4 className="text-xl font-bold text-foreground mb-2">Email Us</h4>
              <p className="text-foreground/70">
                <a href="mailto:zola@isiqalosecondary.co.za" className="hover:text-primary transition">
                  zola@isiqalosecondary.co.za
                </a>
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-primary" />
              </div>
              <h4 className="text-xl font-bold text-foreground mb-2">Visit Us</h4>
              <p className="text-foreground/70">
                Esikhawini, KZN<br />South Africa
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-primary-foreground py-12">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h5 className="font-bold mb-4">Isiqalo Bakery</h5>
              <p className="text-sm opacity-80">Simply Fresh. Simply Delicious.</p>
            </div>
            <div>
              <h5 className="font-bold mb-4">Quick Links</h5>
              <ul className="space-y-2 text-sm">
                <li><Link href="/" className="opacity-80 hover:opacity-100 transition">Home</Link></li>
                <li><Link href="/menu" className="opacity-80 hover:opacity-100 transition">Menu</Link></li>
                <li><Link href="/about" className="opacity-80 hover:opacity-100 transition">About</Link></li>
                <li><Link href="/contact" className="opacity-80 hover:opacity-100 transition">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold mb-4">Contact</h5>
              <ul className="space-y-2 text-sm">
                <li><a href="tel:+27733401990" className="opacity-80 hover:opacity-100 transition">073 340 1990</a></li>
                <li><a href="mailto:zola@isiqalosecondary.co.za" className="opacity-80 hover:opacity-100 transition">zola@isiqalosecondary.co.za</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold mb-4">Follow Us</h5>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="opacity-80 hover:opacity-100 transition">Facebook</a></li>
                <li><a href="#" className="opacity-80 hover:opacity-100 transition">Instagram</a></li>
                <li><a href="#" className="opacity-80 hover:opacity-100 transition">WhatsApp</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 text-center text-sm opacity-80">
            <p>&copy; 2026 Isiqalo Bakery Xpress Shop. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
