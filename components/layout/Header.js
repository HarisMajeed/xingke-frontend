import Link from "next/link";

const navigation = [
  { href: "#home", label: "Home" },
  { href: "#aml", label: "AML Policy" },
  { href: "#legal", label: "Legal Policies" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  return (
    <header className="bg-brand-900">
      <div className="mx-auto flex h-20 w-full max-w-6xl items-center justify-between px-6">
        <Link
          href="#home"
          className="flex items-center gap-2 text-lg font-semibold text-white"
        >
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/60">
            <span className="h-2 w-2 rounded-full bg-white" />
          </span>
          CoinReserve
        </Link>
        <nav className="hidden gap-8 text-sm font-medium text-white/80 sm:flex">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-white">
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
