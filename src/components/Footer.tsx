import celabLogo from "@/assets/images/celab-logo.jpeg";

const Footer = () => (
  <footer className="bg-hero py-12">
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <img src={celabLogo} alt="Celab Tech" className="h-8 w-8 rounded-sm" />
          <span className="font-heading text-lg font-bold" style={{ color: 'hsl(0 0% 100%)' }}>Celab Tech</span>
        </div>
        <p className="text-sm" style={{ color: 'hsl(210 20% 65%)' }}>
          © {new Date().getFullYear()} Celab Tech. Passionate about building digital systems that matter.
        </p> 
      </div>
    </div>
  </footer>
);

export default Footer;
