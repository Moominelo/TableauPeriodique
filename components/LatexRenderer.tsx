import React, { useMemo, useEffect, useState } from 'react';

interface LatexRendererProps {
  latex: string;
  displayMode?: boolean;
  className?: string;
}

const LatexRenderer: React.FC<LatexRendererProps> = ({ latex, displayMode = false, className = "" }) => {
  const [isKatexAvailable, setIsKatexAvailable] = useState(false);

  useEffect(() => {
    // Check if katex is available globally immediately
    if ((window as any).katex) {
      setIsKatexAvailable(true);
    } else {
      // Poll for katex if loaded async (defer/async script)
      const timer = setInterval(() => {
        if ((window as any).katex) {
          setIsKatexAvailable(true);
          clearInterval(timer);
        }
      }, 100);
      return () => clearInterval(timer);
    }
  }, []);

  const html = useMemo(() => {
    // If KaTeX is not loaded yet, return null to trigger fallback
    if (!isKatexAvailable || !(window as any).katex) {
      return null;
    }

    try {
      // renderToString is safer than render in React
      // output: 'html' generates HTML without MathML, often more compatible
      return (window as any).katex.renderToString(latex, {
        throwOnError: false, // Don't throw on parse errors, render error in red
        displayMode: displayMode,
        output: 'html', 
        strict: false, // Reduce strictness to avoid warnings
        trust: true,
      });
    } catch (e) {
      // Catch "KaTeX doesn't work in quirks mode" or other fatal errors
      console.warn("KaTeX rendering failed:", e);
      return null;
    }
  }, [latex, displayMode, isKatexAvailable]);

  // Fallback rendering if KaTeX failed or isn't loaded
  if (html === null) {
    return (
      <span className={`font-mono text-xs opacity-80 ${className}`} title={latex}>
        {latex}
      </span>
    );
  }

  return <span className={className} dangerouslySetInnerHTML={{ __html: html }} />;
};

export default LatexRenderer;