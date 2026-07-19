function Sidebar() {
  return (
    <aside className="hidden w-64 border-r border-slate-800 bg-slate-900 lg:block">

      <div className="p-6">

        <h2 className="mb-6 text-lg font-bold">
          Navigation
        </h2>

        <ul className="space-y-4">

          <li className="rounded-lg bg-cyan-500 px-4 py-2 text-black">
            Dashboard
          </li>

          <li className="px-4 py-2 text-slate-400">
            Settings
          </li>

        </ul>

      </div>

    </aside>
  );
}

export default Sidebar;