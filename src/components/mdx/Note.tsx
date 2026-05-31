export function Note({ children }: any) {
  return (
    <div className="flex gap-3 p-3 bg-teal-900/20 border border-gray-500/30 rounded text-gray-300 text-sm my-4">
      <span>ℹ️</span> <div>{children}</div>
    </div>
  );
}