export function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-10 ml-12">
      <h2 className="text-2xl font-bold text-white mb-2 mt-25">
        {children}
      </h2>
      <div className="w-16 h-1 bg-teal-500 rounded-full" />
    </div>
  );
}