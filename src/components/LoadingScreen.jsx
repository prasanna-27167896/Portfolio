import { useEffect, useState } from "react";

const LoadingScreen = ({ onComplete }) => {
  const [text, setText] = useState("");
  const fullText = "<Hello World />";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.substring(0, index));
      index++;

      if (index > fullText.length) {
        clearInterval(interval);
        setTimeout(() => {
          onComplete();
        }, 1000);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 bg-slate-950 text-gray-100 flex flex-col items-center justify-center">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_200px,#3e3e3e,transparent)] z-0" />

      <div className="relative z-10 mb-4 text-4xl font-mono font-bold">
        {text}
        <span className="animate-blink ml-1">|</span>
      </div>

      <div className="relative z-10 w-[200px] h-[2px] bg-gray-800 rounded overflow-hidden">
        <div className="w-[40%] h-full bg-[#F24E1E] shadow-[0_0_15px_#F24E1E] animate-loading-bar"></div>
      </div>
    </div>
  );
};

export default LoadingScreen;
