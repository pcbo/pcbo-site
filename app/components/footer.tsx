export default function Footer() {
  return (
    <footer className="w-full py-6 text-center text-sm text-gray-500 border-t border-gray-800 mt-12">
      <div className="flex justify-center items-center">
        © {new Date().getFullYear()} pcbo.xyz
      </div>
    </footer>
  );
}
