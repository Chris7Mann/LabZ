export function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="[&_h2]:mt-20! [&_h2]:bg-[#191919]! [&_h2]:p-4! [&_h2]:border-l-4 [&_h2]:border-emerald-500 [&_h2]:text-emerald-300">
      <h2 className="text-2xl font-bold text-white mb-2">
        {children}
      </h2>
      {/* <div className="w-16 h-1 bg-teal-500 rounded-full" /> */}
    </div>
  );
}



