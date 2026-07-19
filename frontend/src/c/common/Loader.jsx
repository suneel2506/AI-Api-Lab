function Loader({ text = "AI is thinking..." }) {
    return (
      <div className="flex flex-col items-center justify-center py-16 space-y-5">
  
        {/* Spinner */}
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-blue-500 border-t-transparent"></div>
  
        {/* Title */}
        <h3 className="text-lg font-semibold text-white">
          🤖 {text}
        </h3>
  
        {/* Subtitle */}
        <p className="text-sm text-slate-400">
          Please wait while the model generates a response...
        </p>
  
      </div>
    );
  }
  
  export default Loader;