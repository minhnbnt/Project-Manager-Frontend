function Head() {
  return (
    <a
      href="/"
      className="flex items-center rounded-lg border p-2 transition-colors duration-200 hover:bg-white"
    >
      <img
        src="/logo_light.svg"
        alt="React Logo"
        className="size-10 animate-[spin_20s_linear_infinite]"
      />
      <h1 className="ml-2 mt-1 text-lg font-bold">Project manager</h1>
    </a>
  );
}

export default function Sidebar() {
  return (
    <aside className="sticky top-0 z-40 h-screen min-w-64 border-r bg-white bg-opacity-65 p-3">
      <div className="relative h-full">
        <Head />
        <div className="mt-3 border-t pt-3">{/* Links */}</div>
        <div className="absolute bottom-0 mt-3 w-full border-t pt-3">
          {/* Account actions */}
          minhnbnt
        </div>
      </div>
    </aside>
  );
}
