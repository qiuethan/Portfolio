import React from 'react';
import styled from 'styled-components';
import { glassCss } from './Glass';

const PhotoBox = styled.div`
  background: var(--photo-bg);
  background-image: var(--hatch);
  border: 1px solid rgba(26, 33, 48, 0.25);
  border-radius: var(--radius-sm);
  position: relative;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  .slot-label {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: var(--mono);
    font-size: 11px;
    color: var(--ink-faint);
    text-align: center;
    white-space: pre-line;
    padding: 8px;
  }
`;

const Caption = styled.span`
  ${glassCss}
  position: absolute;
  left: 10px;
  bottom: 10px;
  font-family: var(--mono);
  font-size: 11px;
  color: var(--ink);
  padding: 5px 11px;
  border-radius: var(--radius-sm);
`;

type PhotoProps = React.HTMLAttributes<HTMLDivElement> & {
  src?: string;
  alt?: string;
  label?: string;
  caption?: string;
};

/** Photo slot: renders the image when given, otherwise a hatched placeholder. */
const Photo: React.FC<PhotoProps> = ({ src, alt, label, caption, ...rest }) => (
  <PhotoBox {...rest}>
    {src ? <img src={src} alt={alt ?? ''} /> : label && <span className="slot-label">{label}</span>}
    {caption && <Caption>{caption}</Caption>}
  </PhotoBox>
);

export default Photo;
