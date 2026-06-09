export function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-10 ml-12">
      <h3 className="text-2xl font-bold text-white mb-2">
        {children}
      </h3>
      <div className="w-16 h-1 bg-teal-500 rounded-full" />
    </div>
  );
}