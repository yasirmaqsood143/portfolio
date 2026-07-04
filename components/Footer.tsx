export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-[#070d1a] border-t border-[#1e3a5f] py-8 px-6 text-center">
      <div className="max-w-7xl mx-auto">
        <p className="text-gray-500 text-sm">
          &copy; {currentYear} Yasir Maqsood &mdash; ProBuild Sites. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
