export function StepCard({ label, title, children }: any) {
  return (
    <div className="step-card-container">
      <div className="step-card-label">{label}</div>
      <h4 className="text-xl font-bold text-white mb-3">{title}</h4>
      <div className="text-zinc-300 leading-relaxed mb-4">
        {children}
      </div>
    </div>
  );
}