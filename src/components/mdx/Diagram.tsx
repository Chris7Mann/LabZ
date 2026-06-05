"use client";

import React, { useEffect, useState } from "react";
import mermaid from "mermaid";

type DiagramProps = {
  code?: string;
};

mermaid.initialize({
  startOnLoad: false,
  theme: "dark",
  securityLevel: "loose",
  themeVariables: {
    fontFamily: "monospace",
    primaryColor: "#10b981",
    primaryTextColor: "#ffffff",
    primaryBorderColor: "#10b981",
    lineColor: "#71717a",
    edgeLabelBackground: "#18181b",
    clusterBkg: "#18181b",
    clusterBorder: "#3f3f46",
  },
});

export default function Diagram({ code }: DiagramProps) {
  const [svg, setSvg] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    let mounted = true;

    async function renderDiagram() {
      if (!code) return;

      try {
        setError("");

        const id = `mermaid-${Math.random().toString(36).slice(2)}`;
        const result = await mermaid.render(id, code.trim());

        if (mounted) {
          setSvg(result.svg);
        }
      } catch (err) {
        if (mounted) {
          setSvg("");
          setError(err instanceof Error ? err.message : "Errore nella sintassi Mermaid");
        }
      }
    }

    renderDiagram();

    return () => {
      mounted = false;
    };
  }, [code]);

  return (
    <div className="my-8 p-6 bg-zinc-900 border border-zinc-800 rounded-xl overflow-x-auto">
      {error ? (
        <div className="text-red-400 font-mono text-sm">
          <p className="mb-3 font-bold">Errore nel diagramma Mermaid</p>
          <pre className="whitespace-pre-wrap">{error}</pre>
          <pre className="mt-4 whitespace-pre-wrap text-zinc-400">{code}</pre>
        </div>
      ) : (
        <div
          className="flex justify-center min-w-max"
          dangerouslySetInnerHTML={{ __html: svg }}
        />
      )}
    </div>
  );
}