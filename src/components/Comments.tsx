"use client";
import Giscus from '@giscus/react';

export default function Comments() {
  return (
    <div className="mt-16 pt-8 border-t border-zinc-800">
      <Giscus
        repo="Chris7Mann/LabZ"
        repoId="R_kgDOSryOVA" 
        category="General"
        categoryId="DIC_kwDOSryOVM4C-gjL"
        mapping="pathname"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="top"
        theme="dark_dimmed"
        lang="it"
        loading="lazy"
      />
    </div>
  );
}
