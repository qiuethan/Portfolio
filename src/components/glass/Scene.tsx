import React from 'react';
import styled from 'styled-components';

const SceneWrap = styled.div`
  position: fixed;
  inset: 0;
  z-index: 0;
  pointer-events: none;

  /* sunny-day wash: warm sun glow top-left, faint blue sky fading down */
  .sky {
    position: absolute;
    inset: 0;
    background:
      radial-gradient(1100px circle at 22% -12%, rgba(255, 226, 148, 0.55), transparent 62%),
      linear-gradient(180deg, rgba(168, 206, 248, 0.4) 0%, rgba(225, 232, 240, 0) 52%);
  }

  .grid {
    position: absolute;
    inset: 0;
    background-image:
      linear-gradient(rgba(26, 33, 48, 0.055) 1px, transparent 1px),
      linear-gradient(90deg, rgba(26, 33, 48, 0.055) 1px, transparent 1px);
    background-size: 44px 44px;
  }

  .beam {
    position: absolute;
    filter: blur(70px);
    background: rgba(255, 246, 219, 0.85);
    width: 30%;
    height: 170%;
    top: -35%;
    left: 14%;
    transform: rotate(24deg);
  }

  .skyline {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: flex-end;
  }

  .skyline svg {
    width: max(100%, 1100px);
    height: auto;
    display: block;
  }
`;

/**
 * Fixed background the glass frosts over: faint grid, warm light beam, and a
 * filled silhouette skyline — Toronto (financial district, CN Tower, Rogers
 * Centre) on the left, Ottawa (Château Laurier, Peace Tower, Centre Block,
 * Library of Parliament) on the right. Two depth layers: a faint back row of
 * distant towers and a darker foreground row.
 */
const Scene: React.FC = () => (
  <SceneWrap aria-hidden="true">
    <div className="sky" />
    <div className="grid" />
    <div className="beam" />
    <div className="skyline">
      <svg viewBox="0 0 1400 320" xmlns="http://www.w3.org/2000/svg">
        {/* ── back row: distant towers ── */}
        <g fill="#1a2130" fillOpacity="0.06">
          <rect x="30" y="152" width="42" height="168" />
          <rect x="226" y="130" width="32" height="190" />
          <rect x="448" y="198" width="38" height="122" />
          <rect x="528" y="142" width="30" height="178" />
          <rect x="618" y="162" width="36" height="158" />
          <rect x="690" y="212" width="64" height="108" />
          <rect x="768" y="242" width="72" height="78" />
          <rect x="852" y="256" width="58" height="64" />
          <rect x="1014" y="232" width="42" height="88" />
          <rect x="1198" y="162" width="38" height="158" />
          <rect x="1338" y="196" width="30" height="124" />
        </g>

        {/* ── front row: Toronto ── */}
        <g fill="#1a2130" fillOpacity="0.13">
          {/* edge condo with rooftop mechanical box */}
          <path d="M0 320 V218 H46 V320 Z" />
          <rect x="14" y="206" width="18" height="12" />
          {/* condo with setback */}
          <path d="M56 320 V190 H72 V176 H106 V320 Z" />
          {/* First Canadian Place + antenna */}
          <rect x="116" y="112" width="54" height="208" />
          <rect x="141" y="92" width="3" height="20" />
          {/* TD towers */}
          <rect x="180" y="150" width="44" height="170" />
          <rect x="234" y="170" width="38" height="150" />
          {/* CN Tower: tapering legs, main pod, SkyPod, antenna */}
          <path d="M276 320 C290 240 300 190 304 148 L316 148 C320 190 330 240 344 320 Z" />
          <path d="M291 132 Q291 112 310 108 Q329 112 329 132 Q329 144 310 146 Q291 144 291 132 Z" />
          <rect x="307" y="66" width="6" height="46" />
          <rect x="303.5" y="54" width="13" height="12" rx="3" />
          <rect x="309" y="14" width="2.5" height="40" />
          {/* Rogers Centre dome */}
          <path d="M348 320 Q412 244 476 320 Z" />
          {/* mid-rises east of the dome */}
          <rect x="486" y="196" width="46" height="124" />
          <rect x="542" y="170" width="40" height="150" />
          <rect x="560" y="156" width="2.5" height="14" />
          {/* L Tower-style curved top */}
          <path d="M592 320 V212 Q592 196 608 196 H648 V320 Z" />
          {/* tapering off toward the middle */}
          <rect x="658" y="246" width="48" height="74" />
          <rect x="716" y="274" width="34" height="46" />
        </g>

        {/* ── front row: Ottawa ── */}
        <g fill="#1a2130" fillOpacity="0.13">
          {/* Château Laurier: hipped roof + corner turrets */}
          <rect x="920" y="240" width="86" height="80" />
          <polygon points="914,240 963,212 1012,240" />
          <rect x="924" y="224" width="10" height="18" />
          <polygon points="922,224 929,210 936,224" />
          <rect x="992" y="224" width="10" height="18" />
          <polygon points="990,224 997,210 1004,224" />
          {/* Confederation Building tower */}
          <rect x="1030" y="204" width="26" height="116" />
          <polygon points="1026,204 1043,172 1060,204" />
          {/* Peace Tower: body, corner pinnacles, steep roof, flag */}
          <rect x="1080" y="124" width="44" height="196" />
          <rect x="1076" y="110" width="4" height="16" />
          <rect x="1124" y="110" width="4" height="16" />
          <polygon points="1074,124 1102,54 1130,124" />
          <rect x="1101" y="30" width="2" height="26" />
          <polygon points="1103,32 1120,36 1103,41" />
          {/* Centre Block: long body, mansard roof, gabled ends */}
          <rect x="1134" y="210" width="180" height="110" />
          <rect x="1166" y="192" width="116" height="20" />
          <polygon points="1128,210 1150,184 1172,210" />
          <polygon points="1276,210 1298,184 1320,210" />
          {/* Library of Parliament rotunda + lantern */}
          <path d="M1330 320 V256 Q1331 236 1362 232 Q1393 236 1394 256 V320 Z" />
          <rect x="1356" y="218" width="12" height="16" />
          <polygon points="1352,218 1362,204 1372,218" />
        </g>

        {/* Peace Tower clock face, lifted out of the silhouette */}
        <circle cx="1102" cy="152" r="13" fill="#e1e8f0" fillOpacity="0.9" />
        <g stroke="#1a2130" strokeOpacity="0.5" strokeWidth="2" strokeLinecap="round">
          <line x1="1102" y1="152" x2="1102" y2="143" />
          <line x1="1102" y1="152" x2="1109" y2="152" />
        </g>

        {/* ground line */}
        <line x1="0" y1="319" x2="1400" y2="319" stroke="#1a2130" strokeOpacity="0.35" strokeWidth="1.5" />
      </svg>
    </div>
  </SceneWrap>
);

export default Scene;
