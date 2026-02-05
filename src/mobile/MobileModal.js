import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { FaTimes } from 'react-icons/fa';
import './mobile.css';

export default function MobileModal({
  isOpen,
  title,
  onClose,
  children,
  ariaLabel = 'Modal',
}) {
  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (e) => {
      if (e.key === 'Escape') onClose?.();
    };

    document.addEventListener('keydown', onKeyDown);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [isOpen, onClose]);

  if (!isOpen || typeof document === 'undefined') return null;

  return createPortal(
    <div className="mobile-modal-overlay" onClick={onClose} role="presentation">
      <div
        className="mobile-modal"
        role="dialog"
        aria-modal="true"
        aria-label={ariaLabel}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mobile-modal-header">
          <div className="mobile-modal-title">{title}</div>
          <button
            type="button"
            className="mobile-modal-close"
            onClick={onClose}
            aria-label="Close"
          >
            <FaTimes />
          </button>
        </div>
        <div className="mobile-modal-body">{children}</div>
      </div>
    </div>,
    document.body
  );
}

