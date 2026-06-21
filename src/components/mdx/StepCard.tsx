import { ReactNode } from "react";

type StepCardProps = {
  label: string;
  title: string;
  children: ReactNode;
};

export function StepCard({ label, title, children }: StepCardProps) {
  return (
    <div className="step-card-container">
      <div className="step-card-label">{label}</div>
      <h4 className="text-xl font-bold text-white mb-3 pt-2">{title}</h4>
      <div className="text-zinc-300 leading-relaxed mb-4">
        {children}
      </div>
    </div>
  );
}
