import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "wouter";
import { ChevronLeft, Award, Users, Heart } from "lucide-react";

export default function About() {
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
            <li><Link href="/menu" className="text-foreground hover:text-primary transition">Menu</Link></li>
            <li><a href="/about" className="text-foreground hover:text-primary transition font-bold">About Us</a></li>
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
          <h1 className="text-5xl font-bold mb-4">About Isiqalo Bakery</h1>
          <p className="text-lg opacity-90 max-w-2xl">
            Learn about our story, values, and commitment to quality baking.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-primary mb-6">Our Story</h2>
              <p className="text-lg text-foreground/80 mb-4 leading-relaxed">
                Isiqalo Bakery Xpress Shop was established in June 2014 with a simple vision: to bring fresh, high-quality baked goods to the Esikhawini community. What started as a small operation has grown into a beloved neighborhood institution.
              </p>
              <p className="text-lg text-foreground/80 mb-4 leading-relaxed">
                We recognized that historically underdeveloped areas were not well-served with quality confectionery items. While large commercial bakeries supplied bread, there was a gap for specialty items like custom cakes, muffins, and pastries. We filled that gap with passion and dedication.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
                Today, we operate as a cooperative, serving not just our community but also retail outlets, informal traders, and schools. Our commitment to quality, freshness, and community service remains unwavering.
              </p>
            </div>
            <div className="relative">
              <img
                src="/images/bakery-interior.jpg"
                alt="Bakery interior"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-secondary/20 rounded-lg -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="p-8 bg-white border-l-4 border-primary">
              <h3 className="text-2xl font-bold text-primary mb-4">Our Mission</h3>
              <p className="text-lg text-foreground/80 leading-relaxed">
                To continually strive to exceed our customer satisfaction by providing premium quality, nutritious, and healthy baked products at competitive prices with outstanding service.
              </p>
            </Card>
            <Card className="p-8 bg-white border-l-4 border-secondary">
              <h3 className="text-2xl font-bold text-secondary mb-4">Our Vision</h3>
              <p className="text-lg text-foreground/80 leading-relaxed">
                To be the best friendly neighborhood bakery with a vision to become the reference for best cakes around which our neighbors gather to celebrate all their lifetime events or just in the mood to have a sweet treat.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="container">
          <h2 className="text-4xl font-bold text-primary mb-12 text-center">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <Award className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-foreground mb-3">Quality</h3>
              <p className="text-foreground/70">
                We use only the finest ingredients and traditional baking methods to ensure every product meets our high standards.
              </p>
            </Card>
            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <Heart className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-foreground mb-3">Community</h3>
              <p className="text-foreground/70">
                We're committed to serving our community, creating jobs, and contributing to the local economy.
              </p>
            </Card>
            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <Users className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-foreground mb-3">Excellence</h3>
              <p className="text-foreground/70">
                We continuously strive to improve, innovate, and deliver exceptional service to every customer.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Management Team */}
      <section className="py-20 bg-background">
        <div className="container">
          <h2 className="text-4xl font-bold text-primary mb-12 text-center">Our Leadership Team</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="p-8 bg-white">
              <h3 className="text-2xl font-bold text-primary mb-2">Miss Zola Zondi</h3>
              <p className="text-secondary font-bold mb-4">Managing Director</p>
              <p className="text-foreground/70 leading-relaxed">
                With extensive experience in business management and a passion for quality baking, Zola leads Isiqalo Bakery with vision and dedication. She oversees daily operations and strategic planning.
              </p>
              <p className="text-foreground/70 mt-4">
                <strong>Contact:</strong> 073 340 1990<br />
                <strong>Email:</strong> zola@isiqalosecondary.co.za
              </p>
            </Card>
            <Card className="p-8 bg-white">
              <h3 className="text-2xl font-bold text-primary mb-2">Our Baking Team</h3>
              <p className="text-secondary font-bold mb-4">Experienced Bakers & Confectioners</p>
              <p className="text-foreground/70 leading-relaxed">
                Our team consists of four experienced women in the food industry, each bringing unique skills and expertise. Together, they ensure every product is baked to perfection with care and attention to detail.
              </p>
              <p className="text-foreground/70 mt-4">
                Their combined experience spans traditional baking techniques, modern confectionery, and customer service excellence.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container">
          <h2 className="text-4xl font-bold text-primary mb-12 text-center">Why Choose Isiqalo Bakery?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold">✓</span>
                </div>
                <div>
                  <h4 className="font-bold text-foreground text-lg mb-1">Fresh Baked Daily</h4>
                  <p className="text-foreground/70">All our products are baked fresh every day using quality ingredients.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold">✓</span>
                </div>
                <div>
                  <h4 className="font-bold text-foreground text-lg mb-1">Custom Designs</h4>
                  <p className="text-foreground/70">We create personalized cakes for your special occasions.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold">✓</span>
                </div>
                <div>
                  <h4 className="font-bold text-foreground text-lg mb-1">Competitive Prices</h4>
                  <p className="text-foreground/70">Quality products at prices that work for your budget.</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold">✓</span>
                </div>
                <div>
                  <h4 className="font-bold text-foreground text-lg mb-1">Community Focused</h4>
                  <p className="text-foreground/70">We're committed to serving and supporting our local community.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold">✓</span>
                </div>
                <div>
                  <h4 className="font-bold text-foreground text-lg mb-1">Online Ordering</h4>
                  <p className="text-foreground/70">Convenient payment links and online ordering options available.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold">✓</span>
                </div>
                <div>
                  <h4 className="font-bold text-foreground text-lg mb-1">Bulk Orders Welcome</h4>
                  <p className="text-foreground/70">Special pricing available for wholesale and bulk orders.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h3 className="text-4xl font-bold mb-4">Join Our Growing Family</h3>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Experience the Isiqalo Bakery difference. Order today and taste the freshness.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/menu">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                View Our Menu
              </Button>
            </Link>
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
                <li><Link href="/menu" className="opacity-80 hover:opacity-100 transition">Menu</Link></li>
                <li><a href="/about" className="opacity-80 hover:opacity-100 transition">About</a></li>
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
