import { useState } from 'react';
import { Headphones, X } from 'lucide-react';

const FloatingChatBot = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-[80]">
      {/* Panel (slides in from the right and expands towards the left) */}
      <div
        className={`absolute bottom-16 right-0 origin-bottom-right transition-all duration-300 ${
          open
            ? 'opacity-100 translate-x-0 scale-100'
            : 'opacity-0 translate-x-3 scale-95 pointer-events-none'
        }`}
      >
        <div className="w-[320px] rounded-2xl border border-[#6b1565]/20 bg-white shadow-2xl overflow-hidden">
          <div className="bg-gradient-to-r from-[#6b1565] to-[#7b4bd2] px-4 py-3 flex items-center justify-between">
            <p className="text-white font-semibold">Support</p>
            <button
              onClick={() => setOpen(false)}
              className="w-9 h-9 rounded-full bg-white/20 text-white flex items-center justify-center hover:bg-white/30 transition-colors"
              aria-label="Close chat"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          <div className="p-4">
            <p className="text-sm text-gray-600">
              Hi there, how can we help you today?
            </p>
            <div className="mt-4 grid grid-cols-2 gap-2">
              {['Agent', 'Services'].map((chip) => (
                <button
                  key={chip}
                  type="button"
                  className="text-xs rounded-xl border border-gray-200 bg-white/60 hover:bg-white transition-colors px-2 py-2"
                  onClick={() => setOpen(false)}
                >
                  {chip}
                </button>
              ))}
            </div>
            <button
              type="button"
              className="mt-4 w-full py-2.5 rounded-xl bg-gradient-to-r from-[#6b1565] to-[#7b4bd2] text-white font-semibold text-sm hover:opacity-95 transition-opacity"
            >
              Start conversation
            </button>
          </div>
        </div>
      </div>

      {/* Circular support icon button */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className={`w-14 h-14 rounded-full flex items-center justify-center shadow-xl transition-all duration-300 ${
          open
            ? 'bg-gray-700 hover:bg-gray-800 text-white'
            : 'bg-gradient-to-r from-[#6b1565] to-[#7b4bd2] text-white hover:shadow-[#6b1565]/40 ring-4 ring-[#6b1565]/15'
        }`}
        aria-label={open ? 'Close chat' : 'Open chat'}
      >
        {open ? <X className="w-5 h-5" /> : <Headphones className="w-6 h-6" />}
      </button>
    </div>
  );
};

export default FloatingChatBot;

