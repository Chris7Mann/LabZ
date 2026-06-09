export function Text({ children }: { children: React.ReactNode }) {
  return (
    // ml-12: rientro per allinearsi al testo della StepCard
    // mr-4: spazio a destra
    // my-6: margine verticale per staccarsi dagli altri elementi
    <div className="text-container">
      {children}
    </div>
  );
}