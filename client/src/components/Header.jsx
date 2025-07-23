function Header() {
  return (
    <nav className="bg-[#1a1a2e] text-white px-6 py-3 shadow-lg">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Left - Logo and Title */}
        <div className="flex items-center gap-4">

          <div>
            <h1 className="text-2xl font-bold tracking-wide">MHSG</h1>
            <p className="text-sm text-gray-300">Mental Health Support Group</p>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Header
