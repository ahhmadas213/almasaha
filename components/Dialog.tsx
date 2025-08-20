// components/Dialog.tsx
'use client'

import { useEffect, useRef, type ReactNode } from 'react';

// Define the types for the component's props
interface DialogProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
}

// A reusable, accessible, and responsive dialog component
export default function Dialog({ isOpen, onClose, title, children }: DialogProps): JSX.Element | null {
  const dialogRef = useRef<HTMLDivElement | null>(null);

  // Close the dialog if the user clicks outside of it
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    // Ensure the click is on the backdrop itself and not on the dialog panel
    if (dialogRef.current && !dialogRef.current.contains(e.target as Node)) {
      onClose();
    }
  };

  // Close the dialog if the user presses the Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }

    // Cleanup function
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  return (
    // Backdrop
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="dialog-title"
    >
      {/* Dialog Panel */}
      <div
        ref={dialogRef}
        className="bg-white rounded-xl shadow-2xl w-full max-w-md m-4 transform transition-all"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-gray-200">
          <h2 id="dialog-title" className="text-xl font-semibold text-gray-800">{title}</h2>
          <button
            onClick={onClose}
            aria-label="Close dialog"
            className="text-gray-400 hover:text-gray-700 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        </div>
        
        {/* Content */}
        <div className="p-6">
          {children}
        </div>
      </div>
    </div>
  );
}