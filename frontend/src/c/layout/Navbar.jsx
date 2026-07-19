function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-900/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-8">

        <div>
          <h1 className="text-xl font-bold">
            AI API Laboratory
          </h1>

          <p className="text-sm text-slate-400">
            Build Once. Connect Every AI.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-green-500 animate-pulse"></div>

          <span className="text-green-400">
            Backend Ready
          </span>
        </div>

      </div>
    </header>
  );
}

export default Navbar;