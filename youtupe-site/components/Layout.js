
export default function Layout({ children }) {
  return (
    <div className="bg-black text-white min-h-screen">
      <header className="p-4 bg-gray-900 text-xl font-bold">Youtupe</header>
      {children}
      <footer className="p-4 bg-gray-900 text-center text-sm">&copy; 2025 Youtupe. All rights reserved.</footer>
    </div>
  )
}
