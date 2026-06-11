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
 * Library of Parliament) on the right. Three depth layers (back/mid/front)
 * plus window grids, roof seams, rooftop mechanicals, gothic window detail,
 * and a couple of construction cranes.
 */
const Scene: React.FC = () => (
  <SceneWrap aria-hidden="true">
    <div className="sky" />
    <div className="grid" />
    <div className="beam" />
    <div className="skyline">
      <svg viewBox="0 0 1400 320" xmlns="http://www.w3.org/2000/svg">
        <defs>
          {/* curtain-wall window grid, tiled in user space so it reads as one
              continuous facade across the towers */}
          <pattern id="winGrid" width="7" height="10" patternUnits="userSpaceOnUse">
            <path d="M0 0 H7 M0 0 V10" stroke="#1a2130" strokeWidth="1" fill="none" />
          </pattern>
          {/* wider banded windows for the older masonry buildings */}
          <pattern id="winBand" width="11" height="13" patternUnits="userSpaceOnUse">
            <rect x="2.5" y="2.5" width="6" height="8" fill="#1a2130" />
          </pattern>
        </defs>

        {/* ── back row: distant towers ── */}
        <g fill="#1a2130" fillOpacity="0.055">
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

        {/* ── mid row: a layer of depth between back and front ── */}
        <g fill="#1a2130" fillOpacity="0.085">
          <rect x="86" y="150" width="22" height="170" />
          <rect x="360" y="176" width="30" height="144" />
          <rect x="402" y="200" width="26" height="120" />
          <rect x="408" y="190" width="4" height="10" />
          <rect x="758" y="190" width="40" height="130" />
          <rect x="806" y="214" width="34" height="106" />
          <rect x="856" y="172" width="30" height="148" />
          <rect x="884" y="222" width="26" height="98" />
          <rect x="1058" y="196" width="30" height="124" />
          <rect x="1300" y="168" width="40" height="152" />
        </g>

        {/* ── front row: Toronto (solids) ── */}
        <g fill="#1a2130" fillOpacity="0.13">
          {/* edge condo with rooftop mechanical box */}
          <path d="M0 320 V218 H46 V320 Z" />
          <rect x="14" y="206" width="18" height="12" />
          {/* condo with setback + rooftop tank */}
          <path d="M56 320 V190 H72 V176 H106 V320 Z" />
          <rect x="86" y="166" width="12" height="10" />
          {/* First Canadian Place + crown box + antenna */}
          <rect x="116" y="112" width="54" height="208" />
          <rect x="122" y="104" width="42" height="8" />
          <rect x="141" y="86" width="3" height="18" />
          {/* TD towers with rooftop mechanicals */}
          <rect x="180" y="150" width="44" height="170" />
          <rect x="194" y="142" width="16" height="8" />
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

        {/* Toronto window detail */}
        <g opacity="0.12">
          <rect x="4" y="220" width="38" height="100" fill="url(#winGrid)" />
          <rect x="60" y="192" width="42" height="128" fill="url(#winGrid)" />
          <rect x="116" y="112" width="54" height="208" fill="url(#winGrid)" />
          <rect x="180" y="150" width="44" height="170" fill="url(#winGrid)" />
          <rect x="234" y="170" width="38" height="150" fill="url(#winGrid)" />
          <rect x="486" y="196" width="46" height="124" fill="url(#winGrid)" />
          <rect x="542" y="170" width="40" height="150" fill="url(#winGrid)" />
          <rect x="596" y="214" width="52" height="106" fill="url(#winGrid)" />
        </g>

        {/* CN Tower pod banding + Rogers Centre roof seams */}
        <g stroke="#1a2130" strokeOpacity="0.14" strokeWidth="1" fill="none">
          <line x1="294" y1="122" x2="326" y2="122" />
          <line x1="293" y1="134" x2="327" y2="134" />
          <path d="M364 306 Q412 282 460 306" />
          <path d="M378 298 Q412 276 446 298" />
          <line x1="412" y1="278" x2="412" y2="320" />
          <line x1="388" y1="288" x2="388" y2="320" />
          <line x1="436" y1="288" x2="436" y2="320" />
        </g>

        {/* construction cranes — Toronto's permanent skyline feature */}
        <g stroke="#1a2130" strokeOpacity="0.17" strokeWidth="1.4" fill="none" strokeLinecap="round">
          <line x1="510" y1="320" x2="510" y2="150" />
          <path d="M510 146 L468 158 M510 146 L560 158" />
          <line x1="466" y1="158" x2="562" y2="158" />
          <line x1="540" y1="158" x2="540" y2="176" />
          <rect x="537" y="176" width="6" height="3" fill="#1a2130" stroke="none" />
          <rect x="462" y="155" width="8" height="6" fill="#1a2130" stroke="none" />

          <line x1="838" y1="320" x2="838" y2="170" />
          <path d="M838 166 L804 176 M838 166 L884 176" />
          <line x1="802" y1="176" x2="886" y2="176" />
          <line x1="868" y1="176" x2="868" y2="192" />
          <rect x="865" y="192" width="6" height="3" fill="#1a2130" stroke="none" />
        </g>

        {/* ── front row: Ottawa (solids) ── */}
        <g fill="#1a2130" fillOpacity="0.13">
          {/* low-rise bridging into the cluster */}
          <rect x="872" y="262" width="40" height="58" />
          {/* Château Laurier: body, hipped roof + corner turrets */}
          <rect x="920" y="240" width="86" height="80" />
          <polygon points="914,240 963,212 1012,240" />
          <rect x="924" y="224" width="10" height="18" />
          <polygon points="922,224 929,210 936,224" />
          <rect x="992" y="224" width="10" height="18" />
          <polygon points="990,224 997,210 1004,224" />
          <rect x="958" y="218" width="10" height="22" />
          <polygon points="956,218 963,202 970,218" />
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
          {/* Centre Block: long body, mansard roof, gabled ends, centre peak */}
          <rect x="1134" y="210" width="180" height="110" />
          <rect x="1166" y="192" width="116" height="20" />
          <polygon points="1128,210 1150,184 1172,210" />
          <polygon points="1276,210 1298,184 1320,210" />
          <rect x="1210" y="188" width="28" height="24" />
          <polygon points="1206,188 1224,166 1242,188" />
          <rect x="1223" y="150" width="2" height="16" />
          {/* Library of Parliament rotunda + lantern */}
          <path d="M1330 320 V256 Q1331 236 1362 232 Q1393 236 1394 256 V320 Z" />
          <rect x="1356" y="218" width="12" height="16" />
          <polygon points="1352,218 1362,204 1372,218" />
        </g>

        {/* Ottawa window detail */}
        <g opacity="0.1">
          <rect x="872" y="262" width="40" height="58" fill="url(#winBand)" />
          <rect x="920" y="244" width="86" height="76" fill="url(#winBand)" />
          <rect x="1030" y="206" width="26" height="114" fill="url(#winBand)" />
          <rect x="1134" y="212" width="180" height="108" fill="url(#winBand)" />
        </g>

        {/* Centre Block + Peace Tower gothic windows */}
        <g fill="#1a2130" fillOpacity="0.1">
          <rect x="1094" y="150" width="4" height="40" rx="2" />
          <rect x="1106" y="150" width="4" height="40" rx="2" />
          <rect x="1218" y="214" width="4" height="22" rx="2" />
          <rect x="1226" y="214" width="4" height="22" rx="2" />
        </g>

        {/* Peace Tower clock face, lifted out of the silhouette */}
        <circle cx="1102" cy="146" r="12" fill="#e6edf5" fillOpacity="0.92" stroke="#1a2130" strokeOpacity="0.28" strokeWidth="1" />
        <g stroke="#1a2130" strokeOpacity="0.5" strokeWidth="2" strokeLinecap="round">
          <line x1="1102" y1="146" x2="1102" y2="138" />
          <line x1="1102" y1="146" x2="1108" y2="146" />
        </g>

        {/* ground line */}
        <line x1="0" y1="319" x2="1400" y2="319" stroke="#1a2130" strokeOpacity="0.35" strokeWidth="1.5" />
      </svg>
    </div>
  </SceneWrap>
);

export default Scene;
