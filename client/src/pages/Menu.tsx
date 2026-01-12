import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "wouter";
import { ChevronLeft } from "lucide-react";

export default function Menu() {
  const confectionery = [
    { name: "Scones", description: "Light and fluffy, perfect for tea time" },
    { name: "Muffins", description: "Chocolate chip, blueberry, or banana varieties" },
    { name: "Queen Cakes", description: "Traditional favorites with a modern twist" },
    { name: "Snow Balls", description: "Delicate coconut-coated treats" },
    { name: "Doughnuts", description: "Fresh glazed or filled varieties" },
    { name: "Chelsea Buns", description: "Warm, spiced, and delicious" },
    { name: "Cream Buns", description: "Filled with fresh cream" },
  ];

  const artisanCakes = [
    { name: "Madeira Cakes", description: "Classic and elegant" },
    { name: "Banana Loaves", description: "Moist and flavorful" },
    { name: "Bar One Cake", description: "Rich chocolate delight" },
    { name: "Chocolate Brownies", description: "Fudgy and indulgent" },
    { name: "Swiss Rolls", description: "Spiral perfection" },
  ];

  const specialtyCakes = [
    { name: "Birthday Cakes", description: "Custom designs for your special day" },
    { name: "Wedding Cakes", description: "Elegant and sophisticated" },
    { name: "Baby Shower Cakes", description: "Celebrate new arrivals" },
    { name: "Christmas Cakes", description: "Festive and delicious" },
  ];

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
            <li><Link href="/" className="text-foreground hover:text-primary transition">Home</Link></li>
            <li><a href="/menu" className="text-foreground hover:text-primary transition font-bold">Menu</a></li>
            <li><Link href="/about" className="text-foreground hover:text-primary transition">About Us</Link></li>
            <li><Link href="/contact" className="text-foreground hover:text-primary transition">Contact</Link></li>
          </ul>
          <Button variant="default" className="bg-primary hover:bg-primary/90">Order Now</Button>
        </div>
      </nav>

      {/* Header */}
      <section className="bg-gradient-to-r from-primary to-secondary text-primary-foreground py-16">
        <div className="container">
          <Link href="/">
            <Button variant="outline" className="mb-6 border-primary-foreground text-primary-foreground hover:bg-white/10">
              <ChevronLeft className="w-4 h-4 mr-2" /> Back to Home
            </Button>
          </Link>
          <h1 className="text-5xl font-bold mb-4">Our Menu</h1>
          <p className="text-lg opacity-90 max-w-2xl">
            Explore our complete selection of fresh baked goods, from daily confectionery to custom specialty cakes.
          </p>
        </div>
      </section>

      {/* Menu Content */}
      <section className="py-20">
        <div className="container">
          {/* Daily Confectionery */}
          <div className="mb-20">
            <div className="mb-12">
              <h2 className="text-4xl font-bold text-primary mb-4">Daily Confectionery</h2>
              <p className="text-lg text-foreground/70">
                Fresh baked daily, perfect for breakfast or a sweet treat throughout the day.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {confectionery.map((item, idx) => (
                <Card key={idx} className="p-6 hover:shadow-lg transition-shadow">
                  <h3 className="text-2xl font-bold text-primary mb-2">{item.name}</h3>
                  <p className="text-foreground/70">{item.description}</p>
                </Card>
              ))}
            </div>
          </div>

          {/* Artisan Cakes */}
          <div className="mb-20">
            <div className="mb-12">
              <h2 className="text-4xl font-bold text-primary mb-4">Artisan Cakes</h2>
              <p className="text-lg text-foreground/70">
                Traditional recipes with premium ingredients. Available for daily purchase or bulk orders.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {artisanCakes.map((item, idx) => (
                <Card key={idx} className="p-6 hover:shadow-lg transition-shadow">
                  <h3 className="text-2xl font-bold text-primary mb-2">{item.name}</h3>
                  <p className="text-foreground/70">{item.description}</p>
                </Card>
              ))}
            </div>
          </div>

          {/* Specialty Cakes */}
          <div className="mb-20">
            <div className="mb-12">
              <h2 className="text-4xl font-bold text-primary mb-4">Specialty Cakes</h2>
              <p className="text-lg text-foreground/70">
                Custom-designed cakes for your special occasions. Contact us for quotes and customization options.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {specialtyCakes.map((item, idx) => (
                <Card key={idx} className="p-6 hover:shadow-lg transition-shadow">
                  <h3 className="text-2xl font-bold text-primary mb-2">{item.name}</h3>
                  <p className="text-foreground/70">{item.description}</p>
                </Card>
              ))}
            </div>
          </div>

          {/* Ordering Info */}
          <Card className="bg-secondary/10 border-secondary p-8">
            <h3 className="text-2xl font-bold text-primary mb-4">How to Order</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-foreground mb-2">Daily Items</h4>
                <p className="text-foreground/70">
                  Visit our store or call us to place an order for daily confectionery and artisan cakes.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-foreground mb-2">Specialty Cakes</h4>
                <p className="text-foreground/70">
                  Contact us at least 48 hours in advance for custom cake orders. We'll work with you to create the perfect design.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-foreground mb-2">Online Ordering</h4>
                <p className="text-foreground/70">
                  Use our payment links on WhatsApp or social media for convenient online ordering and delivery.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-foreground mb-2">Bulk Orders</h4>
                <p className="text-foreground/70">
                  Need large quantities? Contact us for wholesale pricing and special arrangements.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h3 className="text-4xl font-bold mb-4">Ready to Order?</h3>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Place your order now or contact us for custom requests.
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
                <li><a href="/menu" className="opacity-80 hover:opacity-100 transition">Menu</a></li>
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
