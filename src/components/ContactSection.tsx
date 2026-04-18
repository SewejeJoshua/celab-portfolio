import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";

const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary mb-3">Let's Work Together</p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Start Your Project Today</h2>
          <p className="text-muted-foreground">Whether you're a hospital, pharmacy, or health agency — we'd love to hear about your project and explore how we can help.</p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center shrink-0">
                <Mail size={20} className="text-primary" />
              </div>
              <div>
                <p className="font-semibold mb-1">Email Us</p>
                <p className="text-sm text-muted-foreground">celabtech001@gmail.com</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center shrink-0">
                <Phone size={20} className="text-primary" />
              </div>
              <div>
                <p className="font-semibold mb-1">Call Us</p>
                <p className="text-sm text-muted-foreground">+234 810 585 9773</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center shrink-0">
                <MapPin size={20} className="text-primary" />
              </div>
              <div>
                <p className="font-semibold mb-1">Location</p>
                <p className="text-sm text-muted-foreground">Lagos, Nigeria</p>
              </div>
            </div>
            <div className="mt-8 p-6 rounded-xl bg-accent/50 border border-primary/20">
              <p className="font-semibold text-accent-foreground mb-2">🚀 Currently Building: AsthmaGuard</p>
              <p className="text-sm text-muted-foreground">We're actively developing a comprehensive asthma patient management platform for a health agency. Interested in similar solutions? Let's talk.</p>
            </div>
          </div>
          <form
            onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
            className="space-y-4"
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full text-center p-8 rounded-xl bg-accent/50">
                <CheckMark />
                <p className="text-lg font-semibold mt-4 mb-2">Message Sent!</p>
                <p className="text-sm text-muted-foreground">We'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <>
                <div className="grid sm:grid-cols-2 gap-4">
                  <input required type="text" placeholder="Your Name" className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
                  <input required type="email" placeholder="Email Address" className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
                </div>
                <input type="text" placeholder="Company / Organization" className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
                <select className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring">
                  <option>Project Type</option>
                  <option>Healthcare System</option>
                  <option>Pharmaceutical Platform</option>
                  <option>Web Application</option>
                  <option>Mobile Application</option>
                  <option>Other</option>
                </select>
                <textarea required rows={4} placeholder="Tell us about your project..." className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none" />
                <button type="submit" className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity">
                  Send Message <Send size={18} />
                </button>
              </>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

const CheckMark = () => (
  <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center">
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="hsl(168 60% 40%)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  </div>
);

export default ContactSection;
