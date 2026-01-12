import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "wouter";
import { ChevronLeft, Phone, Mail, MapPin, Clock } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send to a backend
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

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
            <li><Link href="/about" className="text-foreground hover:text-primary transition">About Us</Link></li>
            <li><a href="/contact" className="text-foreground hover:text-primary transition font-bold">Contact</a></li>
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
          <h1 className="text-5xl font-bold mb-4">Get in Touch</h1>
          <p className="text-lg opacity-90 max-w-2xl">
            Have questions or ready to place an order? We'd love to hear from you!
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <Phone className="w-8 h-8 text-primary mx-auto mb-4" />
              <h3 className="font-bold text-foreground mb-2">Phone</h3>
              <a href="tel:+27733401990" className="text-primary hover:underline">
                073 340 1990
              </a>
            </Card>
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <Mail className="w-8 h-8 text-primary mx-auto mb-4" />
              <h3 className="font-bold text-foreground mb-2">Email</h3>
              <a href="mailto:zola@isiqalosecondary.co.za" className="text-primary hover:underline">
                zola@isiqalosecondary.co.za
              </a>
            </Card>
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <MapPin className="w-8 h-8 text-primary mx-auto mb-4" />
              <h3 className="font-bold text-foreground mb-2">Location</h3>
              <p className="text-foreground/70">
                Esikhawini, KZN<br />South Africa
              </p>
            </Card>
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <Clock className="w-8 h-8 text-primary mx-auto mb-4" />
              <h3 className="font-bold text-foreground mb-2">Hours</h3>
              <p className="text-foreground/70 text-sm">
                Mon - Fri: 7am - 6pm<br />
                Sat: 8am - 4pm<br />
                Sun: Closed
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-primary mb-8">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-foreground font-bold mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-foreground font-bold mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-foreground font-bold mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Your phone number"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-foreground font-bold mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="order">Place an Order</option>
                    <option value="custom">Custom Cake Request</option>
                    <option value="bulk">Bulk Order</option>
                    <option value="feedback">Feedback</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-foreground font-bold mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Tell us more about your inquiry..."
                  ></textarea>
                </div>
                <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90">
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Info & Services */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-primary mb-6">Why Contact Us?</h2>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground mb-1">Place an Order</h4>
                      <p className="text-foreground/70">Order our daily confectionery or place a custom cake request.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground mb-1">Bulk Orders</h4>
                      <p className="text-foreground/70">Need large quantities for events or resale? We offer wholesale pricing.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground mb-1">Custom Designs</h4>
                      <p className="text-foreground/70">Discuss your vision for a personalized cake or special creation.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground mb-1">Questions</h4>
                      <p className="text-foreground/70">Have questions about our products, ingredients, or services?</p>
                    </div>
                  </div>
                </div>
              </div>

              <Card className="p-8 bg-secondary/10 border-secondary">
                <h3 className="text-2xl font-bold text-primary mb-4">Quick Ordering Options</h3>
                <div className="space-y-3">
                  <p className="text-foreground/80">
                    <strong>WhatsApp:</strong> Send us a message with your order details for quick response.
                  </p>
                  <p className="text-foreground/80">
                    <strong>Payment Links:</strong> Use our secure payment links for convenient online ordering.
                  </p>
                  <p className="text-foreground/80">
                    <strong>Phone:</strong> Call us during business hours to discuss your needs.
                  </p>
                  <p className="text-foreground/80">
                    <strong>In-Store:</strong> Visit us directly to browse and order fresh items.
                  </p>
                </div>
              </Card>

              <Card className="p-8 bg-primary text-primary-foreground">
                <h3 className="text-2xl font-bold mb-4">Response Time</h3>
                <p className="mb-4">
                  We aim to respond to all inquiries within 24 hours during business days. For urgent orders, please call us directly.
                </p>
                <p className="text-sm opacity-90">
                  For custom cakes, we recommend contacting us at least 48 hours in advance to ensure we can create your perfect design.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container text-center">
          <h3 className="text-4xl font-bold text-primary mb-4">Ready to Order?</h3>
          <p className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">
            Don't wait! Reach out to us today and let's create something delicious together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+27733401990">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Call Us Now
              </Button>
            </a>
            <a href="mailto:zola@isiqalosecondary.co.za">
              <Button size="lg" variant="outline">
                Send Email
              </Button>
            </a>
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
                <li><a href="/contact" className="opacity-80 hover:opacity-100 transition">Contact</a></li>
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
