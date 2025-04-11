import BuilderScore from "./BuilderScore";

export default function Footer() {
  return (
    <footer className="w-full py-6 text-center text-sm border-t border-neutral-800 mt-12">
      <div className="flex flex-col items-center space-y-2">
        <BuilderScore />
        <div className="text-neutral-400">2025 © PCBO Inc.</div>
      </div>
    </footer>
  );
}
