import React, { useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import Glass from './Glass';
import Photo from './Photo';

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const rise = keyframes`
  from { opacity: 0; transform: translateY(14px); }
  to { opacity: 1; transform: translateY(0); }
`;

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 50;
  background: rgba(26, 33, 48, 0.28);
  -webkit-backdrop-filter: blur(6px);
  backdrop-filter: blur(6px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  animation: ${fadeIn} 0.18s ease-out;
`;

const Panel = styled(Glass)`
  width: min(620px, 100%);
  max-height: 84vh;
  overflow-y: auto;
  padding: 30px 32px;
  background-color: var(--glass-strong);
  animation: ${rise} 0.22s ease-out;
`;

const CloseBtn = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  width: 32px;
  height: 32px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  line-height: 1;
  color: var(--ink-soft);
  background-color: rgba(255, 255, 255, 0.55);
  border: 1px solid var(--glass-edge);
  border-radius: 999px;
  cursor: pointer;
  transition: background 0.15s, color 0.15s;

  &:hover {
    background-color: #fff;
    color: var(--ink);
  }
`;

/* image banner at the top of a modal; pass src when a real image exists */
export const ModalImage = styled(Photo)`
  height: 240px;
  margin-bottom: 18px;
  background-color: rgba(255, 255, 255, 0.3);
  background-image: repeating-linear-gradient(
    45deg,
    rgba(26, 33, 48, 0.08) 0 1px,
    transparent 1px 9px
  );
  border: 1px solid var(--glass-edge);

  @media (max-width: 700px) {
    height: 170px;
  }
`;

export const ModalKicker = styled.p`
  font-family: var(--mono);
  font-size: 11.5px;
  color: var(--accent);
  margin-bottom: 6px;
  padding-right: 36px;
`;

export const ModalTitle = styled.h3`
  font-family: var(--display);
  font-size: 23px;
  font-weight: 600;
  letter-spacing: -0.01em;
  margin-bottom: 12px;
  padding-right: 36px;
`;

export const ModalText = styled.p`
  font-size: 14.5px;
  color: var(--ink-soft);
  line-height: 1.65;
  margin-bottom: 16px;
`;

export const ModalList = styled.ul`
  margin: 0 0 16px 18px;
  display: grid;
  gap: 8px;

  li {
    font-size: 14.5px;
    color: var(--ink-soft);
    line-height: 1.55;

    &::marker {
      color: var(--accent);
    }
  }
`;

export const ChipRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 18px;
`;

export const Chip = styled.span`
  font-family: var(--mono);
  font-size: 11px;
  color: var(--ink-soft);
  background: rgba(255, 255, 255, 0.55);
  border: 1px solid var(--glass-edge);
  border-radius: var(--radius-sm);
  padding: 3px 10px;
`;

export const ModalActions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

type ModalProps = {
  onClose: () => void;
  children: React.ReactNode;
};

/** Frosted glass dialog. Closes on Escape, backdrop click, or the × button. */
const Modal: React.FC<ModalProps> = ({ onClose, children }) => {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [onClose]);

  return (
    <Overlay onClick={onClose}>
      <Panel role="dialog" aria-modal="true" onClick={(e: React.MouseEvent) => e.stopPropagation()}>
        <CloseBtn type="button" aria-label="Close" onClick={onClose}>×</CloseBtn>
        {children}
      </Panel>
    </Overlay>
  );
};

export default Modal;
