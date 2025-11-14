export function Footer() {
  return (
    <footer className="bg-gray-800 py-8 text-white/80">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 px-6 text-center text-xs sm:flex-row sm:text-left">
        <span>© {new Date().getFullYear()} Coin Collection. All rights reserved.</span>
        <div className="flex gap-4">
          <a href="#aml" className="hover:text-white">
            AML Policy
          </a>
          <a href="#legal" className="hover:text-white">
            Legal Policies
          </a>
          <a href="#contact" className="hover:text-white">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
