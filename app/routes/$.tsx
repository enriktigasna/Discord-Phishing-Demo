/**
 * @file Login page for discord, is named $ so that all paths except for index will return this page, although index redirects to a randomly generated ID
 * @author enriktigasna
 * @version 1.0.0
*/


  
export default function Index() {
  return (
    <div id="app-mount" className="appMount-3lHmkl"><svg viewBox="0 0 1 1" aria-hidden="true" style={{position: 'absolute', pointerEvents: 'none', top: '-1px', left: '-1px', width: '1px', height: '1px'}}>
        <mask id="svg-mask-squircle" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1">
            <path fill="white" d="M0 0.464C0 0.301585 0 0.220377 0.0316081 0.158343C0.0594114 0.103776 0.103776 0.0594114 0.158343 0.0316081C0.220377 0 0.301585 0 0.464 0H0.536C0.698415 0 0.779623 0 0.841657 0.0316081C0.896224 0.0594114 0.940589 0.103776 0.968392 0.158343C1 0.220377 1 0.301585 1 0.464V0.536C1 0.698415 1 0.779623 0.968392 0.841657C0.940589 0.896224 0.896224 0.940589 0.841657 0.968392C0.779623 1 0.698415 1 0.536 1H0.464C0.301585 1 0.220377 1 0.158343 0.968392C0.103776 0.940589 0.0594114 0.896224 0.0316081 0.841657C0 0.779623 0 0.698415 0 0.536V0.464Z" />
        </mask>
        <mask id="svg-mask-header-bar-badge" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1">
            <rect fill="white" x={0} y={0} width={1} height={1} />
            <circle fill="black" cx="0.75" cy="0.75" r="0.25" />
        </mask>
        <mask id="svg-mask-voice-user-summary-item" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1">
            <rect fill="white" width={1} height={1} />
            <circle fill="black" cx="1.2083333333333333" cy="0.5" r="0.5416666666666666" />
        </mask>
        <mask id="svg-mask-vertical-fade" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1">
            <linearGradient id="svg-mask-vertical-fade-gradient" gradientTransform="rotate(90)" x1={0} x2={1} y1={0} y2={0}>
                <stop offset="0%" stopColor="white" />
                <stop offset="100%" stopColor="black" />
            </linearGradient>
            <rect fill="url(#svg-mask-vertical-fade-gradient)" x={0} y={0} width={1} height={1} />
        </mask>
        <mask id="svg-mask-panel-button" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1">
            <rect fill="white" x={0} y={0} width={1} height={1} />
            <circle fill="black" cx="0.75" cy="0.75" r="0.25" />
        </mask>
        <mask id="svg-mask-channel-call-control-button" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1">
            <circle fill="white" cx="0.5" cy="0.5" r="0.5" />
            <circle fill="black" cx="0.8214285714285714" cy="0.8214285714285714" r="0.25" />
        </mask>
        <mask id="svg-mask-channel-call-control-button-badge-16" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1">
            <circle fill="white" cx="0.5" cy="0.5" r="0.5" />
            <rect fill="black" x="0.6428571428571429" y="-0.07142857142857142" width="0.42857142857142855" height="0.42857142857142855" rx="0.21428571428571427" ry="0.21428571428571427" />
        </mask>
        <mask id="svg-mask-channel-call-control-button-badge-22" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1">
            <circle fill="white" cx="0.5" cy="0.5" r="0.5" />
            <rect fill="black" x="0.5357142857142857" y="-0.07142857142857142" width="0.5357142857142857" height="0.42857142857142855" rx="0.21428571428571427" ry="0.21428571428571427" />
        </mask>
        <mask id="svg-mask-channel-call-control-button-badge-29" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1">
            <circle fill="white" cx="0.5" cy="0.5" r="0.5" />
            <rect fill="black" x="0.4107142857142857" y="-0.07142857142857142" width="0.6607142857142857" height="0.42857142857142855" rx="0.21428571428571427" ry="0.21428571428571427" />
        </mask>
        <mask id="svg-mask-avatar-default" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1">
            <circle fill="white" cx="0.5" cy="0.5" r="0.5" />
        </mask>
        <mask id="svg-mask-avatar-status-round-16" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1">
            <circle fill="white" cx="0.5" cy="0.5" r="0.5" />
            <circle fill="black" cx="0.8125" cy="0.8125" r="0.3125" />
        </mask>
        <mask id="svg-mask-avatar-status-mobile-16" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1">
            <circle fill="white" cx="0.5" cy="0.5" r="0.5" />
            <rect fill="black" x="0.5" y="0.3125" width="0.625" height="0.8125" rx="0.1625" ry="0.1625" />
        </mask>
        <mask id="svg-mask-avatar-status-typing-16" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1">
            <circle fill="white" cx="0.5" cy="0.5" r="0.5" />
            <rect fill="black" x="0.21875" y="0.5" width="1.1875" height="0.625" rx="0.3125" ry="0.3125" />
        </mask>
        <mask id="svg-mask-avatar-status-round-24" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1">
            <circle fill="white" cx="0.5" cy="0.5" r="0.5" />
            <circle fill="black" cx="0.8333333333333334" cy="0.8333333333333334" r="0.2916666666666667" />
        </mask>
        <mask id="svg-mask-avatar-status-mobile-24" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1">
            <circle fill="white" cx="0.5" cy="0.5" r="0.5" />
            <rect fill="black" x="0.5416666666666666" y="0.375" width="0.5833333333333334" height="0.75" rx="0.15" ry="0.15" />
        </mask>
        <mask id="svg-mask-avatar-status-typing-24" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1">
            <circle fill="white" cx="0.5" cy="0.5" r="0.5" />
            <rect fill="black" x="0.2916666666666667" y="0.5416666666666666" width="1.0833333333333333" height="0.5833333333333334" rx="0.2916666666666667" ry="0.2916666666666667" />
        </mask>
        <mask id="svg-mask-avatar-status-round-32" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1">
            <circle fill="white" cx="0.5" cy="0.5" r="0.5" />
            <circle fill="black" cx="0.84375" cy="0.84375" r="0.25" />
        </mask>
        <mask id="svg-mask-avatar-status-mobile-32" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1">
            <circle fill="white" cx="0.5" cy="0.5" r="0.5" />
            <rect fill="black" x="0.59375" y="0.4375" width="0.5" height="0.65625" rx="0.13125" ry="0.13125" />
        </mask>
        <mask id="svg-mask-avatar-status-typing-32" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1">
            <circle fill="white" cx="0.5" cy="0.5" r="0.5" />
            <rect fill="black" x="0.359375" y="0.59375" width="0.96875" height="0.5" rx="0.25" ry="0.25" />
        </mask>
        <mask id="svg-mask-avatar-status-round-40" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1">
            <circle fill="white" cx="0.5" cy="0.5" r="0.5" />
            <circle fill="black" cx="0.85" cy="0.85" r="0.25" />
        </mask>
        <mask id="svg-mask-avatar-status-mobile-40" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1">
            <circle fill="white" cx="0.5" cy="0.5" r="0.5" />
            <rect fill="black" x="0.6" y="0.45" width="0.5" height="0.65" rx="0.13" ry="0.13" />
        </mask>
        <mask id="svg-mask-avatar-status-typing-40" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1">
            <circle fill="white" cx="0.5" cy="0.5" r="0.5" />
            <rect fill="black" x="0.375" y="0.6" width="0.95" height="0.5" rx="0.25" ry="0.25" />
        </mask>
        <mask id="svg-mask-avatar-status-round-80" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1">
            <circle fill="white" cx="0.5" cy="0.5" r="0.5" />
            <circle fill="black" cx="0.85" cy="0.85" r="0.175" />
        </mask>
        <mask id="svg-mask-avatar-status-mobile-80" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1">
            <circle fill="white" cx="0.5" cy="0.5" r="0.5" />
            <rect fill="black" x="0.675" y="0.575" width="0.35" height="0.45" rx="0.09" ry="0.09" />
        </mask>
        <mask id="svg-mask-avatar-status-typing-80" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1">
            <circle fill="white" cx="0.5" cy="0.5" r="0.5" />
            <rect fill="black" x="0.525" y="0.675" width="0.65" height="0.35" rx="0.175" ry="0.175" />
        </mask>
        <mask id="svg-mask-avatar-status-round-120" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1">
            <circle fill="white" cx="0.5" cy="0.5" r="0.5" />
            <circle fill="black" cx="0.8333333333333334" cy="0.8333333333333334" r="0.16666666666666666" />
        </mask>
        <mask id="svg-mask-avatar-status-mobile-120" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1">
            <circle fill="white" cx="0.5" cy="0.5" r="0.5" />
            <rect fill="black" x="0.6666666666666666" y="0.5666666666666667" width="0.3333333333333333" height="0.43333333333333335" rx="0.08666666666666667" ry="0.08666666666666667" />
        </mask>
        <mask id="svg-mask-avatar-status-typing-120" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1">
            <circle fill="white" cx="0.5" cy="0.5" r="0.5" />
            <rect fill="black" x="0.5166666666666667" y="0.6666666666666666" width="0.6333333333333333" height="0.3333333333333333" rx="0.16666666666666666" ry="0.16666666666666666" />
        </mask>
        <mask id="svg-mask-status-online-mobile" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1">
            <rect fill="white" x={0} y={0} width={1} height={1} rx="0.1875" ry="0.125" />
            <rect fill="black" x="0.125" y="0.16666666666666666" width="0.75" height="0.5" />
            <ellipse fill="black" cx="0.5" cy="0.8333333333333334" rx="0.125" ry="0.08333333333333333" />
        </mask>
        <mask id="svg-mask-status-online" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1">
            <circle fill="white" cx="0.5" cy="0.5" r="0.5" />
        </mask>
        <mask id="svg-mask-status-idle" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1">
            <circle fill="white" cx="0.5" cy="0.5" r="0.5" />
            <circle fill="black" cx="0.25" cy="0.25" r="0.375" />
        </mask>
        <mask id="svg-mask-status-dnd" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1">
            <circle fill="white" cx="0.5" cy="0.5" r="0.5" />
            <rect fill="black" x="0.125" y="0.375" width="0.75" height="0.25" rx="0.125" ry="0.125" />
        </mask>
        <mask id="svg-mask-status-offline" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1">
            <circle fill="white" cx="0.5" cy="0.5" r="0.5" />
            <circle fill="black" cx="0.5" cy="0.5" r="0.25" />
        </mask>
        <mask id="svg-mask-status-streaming" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1">
            <circle fill="white" cx="0.5" cy="0.5" r="0.5" />
            <polygon fill="black" points="0.35,0.25 0.78301275,0.5 0.35,0.75" />
        </mask>
        <mask id="svg-mask-status-typing" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1">
            <rect fill="white" cx={0} cy={0} width={1} height={1} ry="0.5" rx="0.2" />
        </mask>
        <mask id="svg-mask-avatar-voice-call-80" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1">
            <circle fill="white" cx="0.5" cy="0.5" r="0.5" />
            <circle fill="black" cx="0.85" cy="0.85" r="0.2" />
        </mask>
        <mask id="svg-mask-avatar-call-icon" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1">
            <circle fill="white" cx="0.5" cy="0.5" r="0.5" opacity={1} />
            <circle fill="black" cx="0.85" cy="0.15" r="0.2" />
        </mask>
        <mask id="svg-mask-avatar-call-icon-32" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1">
            <circle fill="white" cx="0.5" cy="0.5" r="0.5" opacity="0.5" />
            <circle fill="black" cx="0.8" cy="0.25" r="0.325" />
        </mask>
        <mask id="svg-mask-sticker-rounded-rect" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1">
            <path d="M0 0.26087C0 0.137894 0 0.0764069 0.0382035 0.0382035C0.0764069 0 0.137894 0 0.26087 0H0.73913C0.862106 0 0.923593 0 0.961797 0.0382035C1 0.0764069 1 0.137894 1 0.26087V0.73913C1 0.862106 1 0.923593 0.961797 0.961797C0.923593 1 0.862106 1 0.73913 1H0.26087C0.137894 1 0.0764069 1 0.0382035 0.961797C0 0.923593 0 0.862106 0 0.73913V0.26087Z" fill="white" />
        </mask>
        <mask id="svg-mask-chat-input-button-notification" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1">
            <rect width={1} height={1} fill="white" />
            <circle cx="0.85" cy="0.85" r="0.25" fill="black" />
        </mask>
        <mask id="svg-mask-sticker-shop-notification" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1">
            <rect width={1} height={1} fill="white" />
            <circle cx="0.9" cy="0.9" r="0.5" fill="black" />
        </mask>
        <mask id="svg-mask-autocomplete-emoji-upsell-emoji" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1">
            <rect fill="white" width={1} height={1} />
            <circle fill="black" cx="1.33" cy="0.5" r="0.5833333333333334" />
        </mask>
        <mask id="svg-mask-event-ticket" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1">
            <path d="M0 0.12C0 0.0779961 0 0.0569941 0.00408726 0.0409507C0.00768251 0.0268386 0.0134193 0.015365 0.0204754 0.00817451C0.028497 0 0.038998 0 0.06 0H0.94C0.961002 0 0.971503 0 0.979525 0.00817451C0.986581 0.015365 0.992318 0.0268386 0.995913 0.0409507C1 0.0569941 1 0.0779961 1 0.12V0.45C0.986193 0.45 0.975 0.472386 0.975 0.5C0.975 0.527614 0.986193 0.55 1 0.55V0.88C1 0.922004 1 0.943006 0.995913 0.959049C0.992318 0.973161 0.986581 0.984635 0.979525 0.991826C0.971503 1 0.961002 1 0.94 1H0.0600001C0.0389981 1 0.028497 1 0.0204754 0.991826C0.0134193 0.984635 0.00768251 0.973161 0.00408726 0.959049C0 0.943006 0 0.922004 0 0.88V0.55C0.0138071 0.55 0.025 0.527614 0.025 0.5C0.025 0.472386 0.0138071 0.45 0 0.45V0.12Z" fill="white" />
        </mask>
    </svg><svg viewBox="0 0 1 1" aria-hidden="true" style={{position: 'absolute', pointerEvents: 'none', top: '-1px', left: '-1px', width: '1px', height: '1px'}}>
        <linearGradient id="6ea3bad2-8adf-4f41-998b-d57d9bad0ce5">
            <stop stopColor="hsl(228, calc(var(--saturation-factor, 1) * 86.7%), 70.6%)" />
            <stop offset={1} stopColor="hsl(244, calc(var(--saturation-factor, 1) * 100%), 84.1%)" />
        </linearGradient>
        <linearGradient id="50d92bab-4d56-4152-a0bb-2628d47d51b2">
            <stop stopColor="hsl(270, calc(var(--saturation-factor, 1) * 86.7%), 70.6%)" />
            <stop offset={1} stopColor="hsl(342, calc(var(--saturation-factor, 1) * 58%), 72.9%)" />
        </linearGradient>
        <linearGradient id="b95b50fd-3d06-4c57-a39a-a9ac7ae2bb48">
            <stop stopColor="hsl(221, calc(var(--saturation-factor, 1) * 70%), 55.5%)" />
            <stop offset={1} stopColor="hsl(269, calc(var(--saturation-factor, 1) * 83.8%), 71%)" />
        </linearGradient>
        <linearGradient id="2aa6377d-c887-440a-96b7-368333e7697f">
            <stop stopColor="hsl(160, calc(var(--saturation-factor, 1) * 81.3%), 35.7%)" />
            <stop offset={1} stopColor="hsl(198, calc(var(--saturation-factor, 1) * 81.5%), 46.7%)" />
        </linearGradient>
    </svg>
    <div style={{position: 'fixed', opacity: 0, pointerEvents: 'none'}} />
    <div className="app-1q1i1E">
        <div className="characterBackground-2itjYF"><a href="https://discord.com/" target="_blank" rel="noopener" className="logo-2iEHEq logo-1-AbdC" style={{opacity: 1, transform: 'translateY(0px) translateZ(0px)'}} /><svg className="artwork-1adZW0" preserveAspectRatio="xMinYMin slice" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 1700 1200">
                <defs>
                    <linearGradient id="linear-gradient" x1="269.71" x2="269.71" y1="800.4" y2="913.29" gradientUnits="userSpaceOnUse">
                        <stop offset={0} stopColor="#29cc7a" />
                        <stop offset={1} stopColor="#038567" />
                    </linearGradient>
                    <linearGradient id="linear-gradient-2" x1="1512.99" x2="1503.54" y1="519.46" y2="476.33" gradientUnits="userSpaceOnUse">
                        <stop offset={0} stopColor="#ffe75c" />
                        <stop offset={1} stopColor="#ffc619" />
                    </linearGradient>
                    <linearGradient id="linear-gradient-3" x1="1441.31" x2="1426.37" y1="493.59" y2="538.11" xlinkHref="#linear-gradient-2" />
                    <linearGradient id="linear-gradient-4" x1="1170.7" x2="1126.43" y1="805.19" y2="847.49" gradientUnits="userSpaceOnUse">
                        <stop offset={0} stopColor="#d11583" />
                        <stop offset={1} stopColor="#eb50a4" />
                    </linearGradient>
                    <linearGradient id="linear-gradient-5" x1="693.92" x2="693.92" y1="1235.03" y2="1193.91" gradientTransform="rotate(-21.3 -1852.872 -1403.071)" gradientUnits="userSpaceOnUse">
                        <stop offset={0} stopColor="#66bcff" />
                        <stop offset={1} stopColor="#8cd9ff" />
                    </linearGradient>
                    <linearGradient id="linear-gradient-6" x1="-6.39" x2="-57.56" y1="1177.84" y2="1139.89" gradientTransform="rotate(-4.2 -13157.002 -13444.26)" gradientUnits="userSpaceOnUse">
                        <stop offset={0} stopColor="#ffc619" />
                        <stop offset={1} stopColor="#ffe75c" />
                    </linearGradient>
                </defs>
                <path fill="#5865f2" d="M0 0H1700V1200H0z" data-name="Layer 4" />
                <g data-name="Layer 5">
                    <path fill="#6270fc" d="M935.8 386.9c-2.1 0-4.2.2-6.3.3a126.6 126.6 0 00-176.9-48.4 126.3 126.3 0 00-225.3 48.3 64.7 64.7 0 00-8.6-5.8c-34.2-19.9-78.7-7-99.3 28.6-18.4 31.7-11.6 70.9 14.4 93.1-14.2 9.1-23.3 23-23.3 38.6 0 27.4 28 49.6 62.7 49.6a74.7 74.7 0 0034.9-8.4A126.4 126.4 0 00746 550.7a126.2 126.2 0 00166.8-20.2 73.6 73.6 0 0096.7-69.9 73.7 73.7 0 00-73.7-73.7z" />
                    <path fill="#6270fc" d="M1210.9 311.8A65.4 65.4 0 001173 324a73.7 73.7 0 00-139.8 32.4 78.3 78.3 0 001.1 12.9c-32.9 15-64.1 40.2-87.4 72.8h264a65.2 65.2 0 000-130.3z" />
                    <path fill="#707cff" d="M1035.5 617.4a115.9 115.9 0 10-199-109.1 117.7 117.7 0 104.3 194.1 76 76 0 00137.2-.7 51 51 0 1057.5-84.3z" />
                </g>
                <path fill="#6a77fc" d="M990 243.1H579.4a3 3 0 01-2.3-5c24.6-29.4 61.4-30.9 101.2-23.2 22.4-86.3 123-85.3 157.3-32.2 36.6-28.2 159-31.3 160.2 54.5a5.8 5.8 0 01-5.8 5.9z" data-name="Layer 25" />
                <path fill="#6874f7" d="M57.9 530.5c89.2-45.1 152.1-10.2 152.1-10.2 44.1-13.7 83-4.1 103 11.6 12.5 9.7-15.5 8-78.3 8H60.2a5 5 0 01-5-5 4.9 4.9 0 012.7-4.4z" data-name="Layer 24" />
                <path fill="#6874f7" d="M1525.8 824.6a34.7 34.7 0 00-66.9-12.1 33.3 33.3 0 00-7.8-.9 36.3 36.3 0 00-27.8 13h102.5z" data-name="Layer 23" />
                <g data-name="Layer 22">
                    <path fill="#4452f2" d="M284.3 406.3c-4.7-22.1-2.4-28.1-18-48.9-5-6.7-27.8-5.3-38-3.4-12.1 2.7-25.3 19.1-25.3 19.1 10.4 56.3 18.9 50.5 22.2 69s-.1 26.3 20.9 26.3 35.7-9 28.8-27.1c11.6-3.7 13.8-14.1 9.4-35zM126.5 328.4c-4.4 48 12 45.7 60.4 26.9z" />
                    <path d="M366.5 370.5l-43.2 32c2.3 1.3 3.6 1.4 6.1 0s8.2-8 10.6-9.8 9-5.5 12.4-7.4a55 55 0 0011.1-8.4c2.7-3 3.7-4 3-6.4z" />
                    <path fill="#eb459f" d="M214.3 184.1a97.9 97.9 0 00-92.7 129.1l92.7 66.6a97.9 97.9 0 000-195.7z" />
                    <path fill="#0c1aad" d="M242.3 291.3c-9.1-4-9.4-3.9-15.1-11.7s-12-11-19-11l15.4 60.7c18.6 2.7 28.7-7.9 30.1-17.2s-2.3-16.8-11.4-20.8z" />
                    <path fill="#0c1aad" d="M234.7 300.6c-3.3-9.7-11-20.5-19.2-28.4a26.7 26.7 0 01-8.2-22.4l1.6-14.2a42.6 42.6 0 00-19.1-40.7 43.5 43.5 0 00-9.7-4.7 42.2 42.2 0 00-16.7-2 42.7 42.7 0 00-39.5 42.6 48.9 48.9 0 00.3 5.4l.7 5.8 3.2 24.8a72.5 72.5 0 01-3.5 33.3 58 58 0 00-3 13.1l75.5 62.1a58.3 58.3 0 0037.6-74.7z" />
                    <path fill="none" stroke="#000" strokeLinecap="round" strokeMiterlimit={10} strokeWidth="2.201" d="M197.1 375.3a58.3 58.3 0 0037.6-74.7c-3.3-9.7-11-20.5-19.2-28.4" />
                    <path fill="#0c1aad" d="M213.4 305.8c5.2-11.4 7.9-10.4 19.6-9 9.3 1.1 21.9 18.2 9 29.5s-42.2 9.7-28.6-20.5z" />
                    <circle cx="176.4" cy="277.3" r={3} />
                    <circle cx={194} cy={276} r={3} />
                    <path fill="none" stroke="#fff" strokeLinecap="round" strokeMiterlimit={10} strokeWidth="2.7" d="M194 276c16.1 10 10.9 19.6 24.9 35.8" />
                    <path fill="#ffc619" d="M180.3 305.5c8.4-7.7 10.9-9.8 14.3-10.1s9.2-.5 9.2-.5l1.6 36.7-22.8 2.6z" />
                    <path d="M223.5 290a3.3 3.3 0 00-3.4-4h-15.5a4.8 4.8 0 00-4.7 4l-5.2 32.9a3.4 3.4 0 003.5 4h15.5a5 5 0 004.7-4z" />
                    <path d="M222.5 286.9L224.3 288.6 219.8 289.7 222.5 286.9z" />
                    <path fill="#ffc619" d="M232.2 306.9c-2.2-2.9-4.5-6.7-9.8-6.7v6.7z" />
                    <path fill="#fff" d="M225.2 291.6a3.4 3.4 0 00-3.5-4h-15.5a5 5 0 00-4.7 4l-5.1 32.8a3.3 3.3 0 003.4 4h15.5a4.8 4.8 0 004.7-4z" />
                    <path fill="#ffc619" d="M221.9 304.8h6.3a4.9 4.9 0 014.9 4.8 4.9 4.9 0 01-4.9 5.1h-4.6a6.5 6.5 0 01-6.3-5c-.4-2.7 1.6-4.9 4.6-4.9z" />
                    <path fill="#ffc619" d="M220.8 314.4h4.4a4.9 4.9 0 014.8 5.8 4.8 4.8 0 01-4.8 4h-2.7a6.5 6.5 0 01-6.3-4.9c-.4-2.7 1.6-4.9 4.6-4.9z" />
                    <path fill="#ffc619" d="M194 325.9H209.2V331.94H194z" />
                    <path fill="#ffc619" d="M210.1 307.3h-9.5a2.3 2.3 0 01-2.2-1.4l-1.1-2.4-1.2-4.9-3.3 18.5h15.6a6.5 6.5 0 006.3-4.9c.4-2.7-1.6-4.9-4.6-4.9z" />
                    <path fill="#ffc619" d="M208.1 317.1h-15.3l1.9 9.9h11.7c2.9 0 5.8-2.2 6.2-4.9s-1.5-5-4.5-5z" />
                    <path fill="#66bcff" d="M320.7 362.9c-1.1-14.9-13.8-15.5-22.8-19.6s-20.1-13.6-31.3-19.7-20.2-4.4-37.1 3.4l24.2 36c12.1 4.2 15.2 10.1 22.3 17.9s15.5 9.8 23.6 7.2c5 6.3 6 7.8 11.9 4.8s15.8-9.3 17.7-17.7-2.4-9.4-8.5-12.3z" />
                    <path fill="#45aaf7" d="M313.1 388h-.1c-5.3-.6-7.8-3.2-11.6-7.2-.9-1.1-2-2.2-3.3-3.5-14.6-.9-21.3-7.7-25.1-12.7-1.7-2.4-4.7-4-7.6-5.7s-5.6-3.2-7.5-5.5a29.7 29.7 0 01-3.6-5.4c-1.5-2.6-2.6-4.5-4.5-4.7s-4.8 1.2-7.6 2.9a37.2 37.2 0 01-8 3.9.9.9 0 01-1.1-.6.8.8 0 01.6-1.1 34.9 34.9 0 007.5-3.7c3.1-1.9 5.8-3.5 8.8-3.2s4.2 2.8 5.8 5.6a57 57 0 003.4 5.2c1.7 2 4.4 3.5 7.1 5.1s6.2 3.5 8.2 6.1c3.8 5.2 10.1 11.3 24.1 12h.3l.3.2 3.5 3.7c3.6 3.9 5.8 6.2 10.5 6.7a.9.9 0 01.8 1 1.1 1.1 0 01-.9.9z" />
                    <path fill="none" stroke="#000" strokeLinecap="round" strokeMiterlimit={10} strokeWidth="2.201" d="M250.4 340.3a83.6 83.6 0 00-1.5 18.6" />
                    <path fill="#8cd9ff" d="M266.6 410.7c-11.4 13.1-22.5 11.5-27.5 11.6s-4.9-3.5-5.7-6.4-1.5-7.6-1.5-7.6c-12.7 1-15.2-7.3-16.3-14.9-.8-5.8-3.2-8.4-4.7-13.6a97.8 97.8 0 01-77.4-42.5l12.2-11.4 31.3 14.7c19-10 29.6-15.3 40.1-17.6s21.6.4 26.6 14.6 6 18.8 10 25.4l4.4 6.4c4.8 7.3 10.1 17.7 3.5 30.9a70.8 70.8 0 005 10.4z" />
                    <path d="M158.1 362c-1.6-9.7 1.5-17.1 8.1-19.2l-18.5-9.3-11.7 7a96 96 0 0022.1 21.5z" />
                    <path fill="#66bcff" d="M242.8 416.8V415c-2.5-.1-2.9-1.9-4.5-10.3l-.2-1.1h-.7c-5.7-.6-9.8-3.3-11.3-14.5a37.7 37.7 0 00-4.9-15 34 34 0 01-1.6-3.4c-.4-1.1-.9-2.1-1.3-3.1a22.2 22.2 0 01-2.7-12c.1-4.4-.5-6.6-2.1-7.6s-4.8-.3-9.8 2.1l-.7.3c-7.8 3.8-23.5 11.3-39.9 15l2.3 1.4c15.8-3.9 30.8-11.1 38.4-14.8l.7-.3c3.9-1.9 6.8-3 8.1-2.2s1.3 2.5 1.2 6a25.8 25.8 0 002.8 12.9c.5 1 .9 1.9 1.3 2.9a31.4 31.4 0 001.8 3.7c1.6 2.9 3.5 6.5 4.6 14.4 1.4 10.2 5 14.9 12.2 15.9 1.6 8.2 2.2 11.3 6.3 11.5z" />
                    <path fill="#0c1aad" d="M180.3 303.5c-4.3-2.9-7.4-2.2-12 .5-5.7-3.8-12.4-3.6-19.1-.2-4.9 2.4-16.9 7.8-22.9 10.5a2.1 2.1 0 01-2.9-2.2l2.8-17.2c-13.5 13.1-15.8 37.3-9.7 49.5s26.6 9.1 32.7 4.7 8.2-6 15.8-5.6 13.6.4 22.5-8.4l5.6-2.8c.9-12.9-2.1-21.6-12.8-28.8z" />
                    <path fill="none" stroke="#000" strokeLinecap="round" strokeMiterlimit={10} strokeWidth="2.201" d="M180.3 303.5c-4.3-2.9-7.4-2.2-12 .5-5.7-3.8-12.4-3.6-19.1-.2-4.9 2.4-16.9 7.8-22.9 10.5M169.3 304.5c12.5 7.7 16.1 17.7 17.6 24.4" />
                    <path fill="#fff" d="M255.6 258.2h-17.1a.8.8 0 00-.8.7l-2.2 13.9a.8.8 0 001.3.8l19.3-13.9a.8.8 0 00-.5-1.5z" />
                    <path fill="#fff" d="M294.9 262.9c10.4 0 20.3-8.4 21.9-18.7v-.5c1.7-10.2-5.6-18.7-16-18.7H243c-10.4 0-20.3 8.5-21.9 18.7v.5c-1.7 10.3 5.5 18.7 16 18.7z" />
                    <path fill="#8cd9ff" d="M240.3 251.8a9.5 9.5 0 009-7.7v-.2a6.4 6.4 0 00-6.6-7.7 9.4 9.4 0 00-9 7.7v.2a6.5 6.5 0 006.6 7.7z" />
                    <path fill="#66bcff" d="M267.7 251.8a9.6 9.6 0 009-7.7v-.2a6.5 6.5 0 00-6.6-7.7 9.4 9.4 0 00-9 7.7v.2a6.5 6.5 0 006.6 7.7z" />
                    <path fill="#8cd9ff" d="M295 251.8a9.4 9.4 0 009-7.7v-.2a6.5 6.5 0 00-6.6-7.7 9.4 9.4 0 00-9 7.7v.2a6.5 6.5 0 006.5 7.7z" />
                    <path fill="#29cc7a" d="M209.8 294.1a1.5 1.5 0 00-1.4-1.7H207a1.9 1.9 0 00-1.7 1.4l-.7 4.7a1.5 1.5 0 001.4 1.7h1.4a1.7 1.7 0 001.6-1.4z" />
                    <path fill="#ffc619" d="M184.6 270.7A16.5 16.5 0 01195 261c.2 0 .3-.2.2-.4-2.5-6.4-2-10.3-.2-15.4 0-.2-.1-.4-.3-.4-8.1-2.2-11.7-7.2-12.9-11.3a.4.4 0 00-.7 0c-2.7 7.3-7.3 8.2-11.4 8.3a.3.3 0 00-.3.5c4.8 7.1 2.7 13-.9 17.4a.3.3 0 00.2.6c8 .2 12.7 4.7 15.3 10.4a.3.3 0 00.6 0z" />
                    <path fill="none" stroke="#000" strokeLinecap="round" strokeMiterlimit={10} strokeWidth="2.201" d="M208.1 317.1L200 317.1" />
                    <path fill="none" stroke="#000" strokeLinecap="round" strokeMiterlimit={10} strokeWidth="2.201" d="M222.4 314.7L226.9 314.7" />
                    <path fill="none" stroke="#000" strokeLinecap="round" strokeMiterlimit={10} strokeWidth="2.201" d="M181.4 233.3c2.7-8.3 1.8-13.6.6-16.5M194.1 245.2c5.5-.3 8.9-2.1 11.8-5.2M184.6 270.7a13 13 0 010 3.1M169.1 259.7c-4.7 4.4-12.5 4.9-18.1 4M169.7 241.8c-2.4-3.7-6.5-7.7-10-8.9M195.2 260.6a29.7 29.7 0 005.9 1.3" />
                    <path fill="#c40655" d="M178.7 247.8c3.5 8.8 6.5 7.9 7.5 5s1.7-6.6 4-6.6 2 3.8 0 9.7-6.1 7.8-10.7 3.6-5.2-9-5.7-12.3 2.9-4.5 4.9.6z" />
                    <path fill="none" stroke="#fff" strokeLinecap="round" strokeMiterlimit={10} strokeWidth="2.7" d="M176.4 277.3c3.8 18.8-5 29.2-5.8 48.6" />
                    <path fill="none" stroke="#000" strokeLinecap="round" strokeMiterlimit={10} strokeWidth="2.201" d="M209.9 378.5a46.4 46.4 0 01-.8-34.9M206.1 360c-2.9-3.7-3.3-9.5-3.3-9.5" />
                    <path fill="none" stroke="#000" strokeLinecap="round" strokeMiterlimit={10} strokeWidth="2.201" d="M131.5 312L121.6 316.7" />
                    <path fill="none" stroke="#000" strokeLinecap="round" strokeMiterlimit={10} strokeWidth="2.201" d="M234.5 296.5L240.2 297.4" />
                    <path fill="#d11583" d="M366.6 370.3a23.3 23.3 0 01-2.3 3.5c-4 5-13.5 11.4-18.7 14.2s-6.7 4-10.4 7.8-8.1 8.8-11.9 6.7-9.7-7.5-13.4-11.4a1.7 1.7 0 01-.4-1.7c1.4-5.8 6.7-14.5 15.2-19.9a1.9 1.9 0 011.8 0c5.7 3 9 3.5 13.3 2.8 6.4-.9 12.3-4.7 18.8-7.6s7.1.2 8 5.6z" />
                    <path fill="#fa80ba" d="M314.4 395.5a71.4 71.4 0 008.9 7c3.8 2.1 8.3-2.9 11.9-6.7s5.2-4.9 10.4-7.8 14.7-9.2 18.7-14.2a23.3 23.3 0 002.3-3.5c-.9-5.4-2.5-8-8-5.6s-8.4 4.3-12.6 5.9a7 7 0 00-4.3 5.9c-.1 1.5-.1 3.1-.1 4.9-7.7-.4-14.6 3-15.1 13 0 0-6.8-2.5-12.1 1.1z" />
                    <path fill="#ffe75c" d="M364.3 373.8a31.5 31.5 0 002.2-3.3 1.2 1.2 0 00.2-1 7.7 7.7 0 00-1.1-3c-.9 2.3-2.5 4.6-6.5 8.4-6.3 5.9-13.7 8.7-18.1 11a31 31 0 00-10.3 8.5 20.9 20.9 0 01-9 7.1l1.6 1c3.8 2.1 8.3-2.9 11.9-6.7s5.2-4.9 10.4-7.8 14.7-9.2 18.7-14.2z" />
                    <path fill="#d11583" d="M280.6 391.8c-7.3-.9-14.1 3.4-19.2 16.3-1.9-1.1-6.5-2-13.1.2s-8.6 5.3-9.5 7.8a6.1 6.1 0 000 4.2c.5 1.6 1.3 3.9 2.6 7.7 2 5.8 1.8 11.1 5.3 11.2l42.8-39.9s.5-6.3-8.9-7.5z" />
                    <path fill="#fa80ba" d="M280.6 391.8c-7.3-.9-14.1 3.4-19.2 16.3-.6 1.6-1.2 3.6-1.8 5.8-7.3.4-10.4 4-10.8 11.2 0 0-5.3-2.5-7.8 1.7.1.4.3.8.4 1.2 2 5.8 1.8 11.1 5.3 11.2l42.8-39.9s.5-6.3-8.9-7.5z" />
                    <path fill="#ffe75c" d="M289.1 397.3l-3.8-2.6c-6-.2-11 .3-15.6 7s-7.3 13.6-12.4 18.3c-7.3 6.9-13.6 10.2-14.2 14.6.7 2.7 1.5 4.5 3.6 4.6l42.8-39.9a6.5 6.5 0 00-.4-2z" />
                    <path fill="#d11583" d="M282.6 392.9l3.5.5a1.9 1.9 0 011.5.8c1.6 1.7 2.2 4.4 2.2 7l-12.4-.5c3.9-2.5 5-4.6 4.4-6.8a.7.7 0 01.8-1z" />
                    <path d="M246.9 439.2c12.1.7 17-3.7 21.5-9.7a36.5 36.5 0 016.7-6.9c6.6-5.1 11.7-10.1 14.7-17.4 3.8-9.2-9-10-15.8-2.8s-6.4 14.6-20.2 25.8c-9.4 7.7-10.5 10.8-6.9 11z" />
                    <ellipse cx="244.3" cy="417.4" fill="#fff" rx="1.6" ry="2.5" transform="rotate(-2.3 243.27 418.52)" />
                    <path fill="#d11583" d="M366.9 368.6a14.7 14.7 0 00-1.9-3.8.2.2 0 00-.4-.1h-.2a.4.4 0 00-.2.4c1 2.8 1.6 6 .4 8.2 2.9-2.9 2.3-4.2 2.3-4.7z" />
                    <ellipse cx="317.8" cy={387} fill="#fff" rx="2.4" ry="3.6" transform="rotate(-18.1 318.119 387.354)" />
                </g>
                <g data-name="Layer 21">
                    <path fill="#4452f2" d="M290.1 1034.3a76.2 76.2 0 01-75-62.7c-6-33.7-12-60.4-20.5-82.8l140-51.3c6.6 22.6 16.7 52.1 29.3 102 12.1 48.1-24.2 94.8-73.8 94.8z" />
                    <path fill="#ffc619" d="M488.9 731.9c-4.7-6-6.7-5-10.2-5 0-5.9-2.8-6.4-4.1-1.5s-2.1 7.2 1.1 11.9 7.5 11.6 9.4 19.8a135.9 135.9 0 00-13.4 4.4l7.8 18.1c13-5.8 20.6-10.8 21.4-21.2s-7.2-20.4-12-26.5z" />
                    <path fill="#bde9ff" d="M350.2 707.9c10.4.1 18.2.5 29.2 4a18.2 18.2 0 0112.8 17.5v40h-4l-2.1-3.3v-31.5a16.2 16.2 0 00-12.3-15.8 125.3 125.3 0 00-19.9-3.1l-5-7.7z" />
                    <path d="M397 747a7.7 7.7 0 017.7 7.7V795a7.7 7.7 0 01-7.7 7.7 9.7 9.7 0 01-9.7-9.7v-36.3a9.7 9.7 0 019.7-9.7z" transform="rotate(-180 396 774.85)" />
                    <circle cx="271.2" cy="806.2" r="112.7" fill="#0c1aad" />
                    <path fill="#039c78" d="M163.8 772a112.8 112.8 0 0049.5 130.9A80.9 80.9 0 00163.8 772z" />
                    <path fill="#fa94c4" d="M179.8 785.6c-7.4-2.8-8.5-4.1-10.3-7.6s-2.8-2.8-6.5-3.3c-.3 1-.6 1.9-.8 2.9 14.8 9.7 18.9 30.7 18.9 30.7l6.2-2.9s0-17.1-7.5-19.8z" />
                    <path fill="url(#linear-gradient)" d="M160.3 826.5a112.7 112.7 0 00218.8 11.9L260.7 789c-26.8-7.4-73.4-10.1-100.4 37.5z" />
                    <path d="M347.9 887.4c-23.2 0-65.4 4.5-90.1-23.4 17.9 20.2 26.3 35.4 26.9 54a112.3 112.3 0 0063.1-29.3z" />
                    <path fill="#fa80ba" d="M175.8 806.2c13.9-13.7 53.3-23.4 85.4 0l12.4-13.1c-1-21.6-5.8-22.9-12.4-16s-8 .7-14.5-11-14.7-13.9-20.6-1.9-4.6 12.4-9.5 10.7-14-6.1-21.6-7.2-11.2 9.7-10.5 17.9-1.4 7.9-5.3 6.3-4.9 3.4-3.4 14.3z" />
                    <path fill="none" stroke="#ff5cb4" strokeLinecap="round" strokeMiterlimit={10} strokeWidth="2.289" d="M234.4 790.9a113.1 113.1 0 00.7-30M192 772c5.8 12 6.8 18 6.8 18" />
                    <path fill="#2ad17d" d="M498.5 806.2c3.4-11 4.4-11.2-18.2-10.3-20.8.8-47.1 1.6-71.2 3.4-1.2-14.6-5.9-20.4-11.2-28 2-24.1-2.4-47.5-26.3-53.2s-59.1-6.9-82.5 1.8-16.8 42.2-14.3 64.9c0 0-20.7 6.7-28.5 27.2-6.5 17.3-3.4 37.9 15.1 55.7 29.7 28.6 59.6 31.7 87.9 28.4 22-2.7 33.1-19.5 36.2-35.8 40.3 15.1 65.9-7.6 74.8-18.5 10.5-12.6 25.4-16.7 34.4-20.6s12.8-7.4 3.8-15z" />
                    <path fill="#fa80ba" d="M302 681.8c-8.5-.5-17.5 5.1-11.5 21.2-9.2-.9-18.4 4.2-11.9 19.3l42.3-14.4c-3.7-18.6-10.4-25.5-18.9-26.1z" />
                    <rect width="37.4" height="66.89" x="262.7" y="741.4" rx="18.7" />
                    <path fill="#fff" d="M355.6 709.2v6c-17.6-2.3-39.4-2.5-57.3 1.9a16.4 16.4 0 00-12.3 15.8v34.8h-21.8v-36.2a22 22 0 0118.3-21.7c32.4-5.7 54.9-3.5 73.1-.6z" />
                    <path fill="#bde9ff" d="M321.9 706.3c-10.4 0-18.2.5-29.2 3.9a18.4 18.4 0 00-12.8 17.5v40h4l2.1-3.2v-31.6a16.4 16.4 0 0112.3-15.8 125.4 125.4 0 0119.9-3l5-7.8z" />
                    <path fill="#039c78" d="M416.6 804.3c-24.4 1.2-51.4 2.8-61.2 3.2s-15.6.7-17.3 5.4 11.7 5.4 28.6 6.5 55 .9 77 0a485.7 485.7 0 0048.6-4.1c10.3-1.5.5-8.3.5-8.3s3.9-6.2-1.7-6.9-74.5 4.2-74.5 4.2z" />
                    <path fill="#fff" d="M391.1 813.6c1-14.6 6.6-15.4 9-11.5a26.5 26.5 0 013.4 7.8 3.8 3.8 0 013.6 0 4.5 4.5 0 012.3 3.7zM357.8 812.3c3.5-10.1 10.7-8.2 15.7-5.9a7.9 7.9 0 014.9 6.9zM346.7 811.9c2.7-10.4 5.5-9.7 6.4-5.7s1.2 6.1 1.2 6.1z" />
                    <path fill="#ffc619" d="M488.2 808.6c-14.6 2.3-41.1 4.6-75.1 5-.9-8.4 1.7-15.7 12-23.7 4.5-3.5 4.1-6.1 3.7-8.4-1.3-8.3-4.5-16.6-9.3-27.3-7.3-16.5-8.2-30.1 3.9-37.5s26-3.2 35.3 10.5 29.8 43.8 29.5 81.4z" />
                    <path fill="#ffae00" d="M447.4 734.6c9 8.5 12.4 7.5 14.4 7s.3-5.6-.8-7.9z" />
                    <path fill="#fff" d="M468.2 811c5.9-11 9-14.1 12.6-12.9s3.3 11.1 3.3 11.1zM447.9 812.5c4.8-16.4 10.7-14.3 12.7-11.6s4 10.4 4 10.4zM432.7 746.5c.7 4.1-.7 7.5-2.8 8s-4.1-1.6-5.3-4.8-.8-8.4 1.4-9.8 5.8 1.6 6.7 6.6z" />
                    <path fill="#ed5f00" d="M447.4 734.6c-2.5-3.1-1.1-8.8 2-14s7.4-7 11-7 4.7 3.6.5 13.6c5.3-.9 7.7-.8 8.2 2.1s-3 5-10.9 6.3-9.4.7-10.8-1z" />
                    <path fill="#ffc619" d="M478.5 726.3c1.4-3.8 3-4.2 3.8-3.8s.6 2.2-.2 5.8-4.9 1.5-3.6-2z" />
                    <path fill="#ffc619" d="M481.4 726.9c3.1-2.6 4.7-2.3 5.2-1.5s-.5 2.2-2.9 5-5.1-1.1-2.3-3.5z" />
                    <path fill="#fff" d="M343 773.8c6.3.1 8.7-1 9.4-3.6s-3.5-8.1-12.1-8.7-14.4 3.4-15.7 8.6 1.5 4.1 7.4 3.8a82.1 82.1 0 0111-.1zM378.3 773.8c-5.2.1-7.1-1-7.7-3.6s2.8-8.1 9.8-8.7 11.8 3.4 12.8 8.6-1.3 4.1-6 3.8a53.7 53.7 0 00-8.9-.1z" />
                    <path fill="#bde9ff" d="M268.1 747h4.5a13.4 13.4 0 0113.4 13.4v28.9a13.4 13.4 0 01-13.4 13.4h-4.5a16.9 16.9 0 01-16.9-16.9v-21.9a16.9 16.9 0 0116.9-16.9z" />
                    <path fill="#fff" d="M267 747h12.9v42.8a12.9 12.9 0 01-12.9 12.9 15.8 15.8 0 01-15.8-15.8v-24.1A15.8 15.8 0 01267 747z" />
                    <path fill="#fa80ba" d="M362.2 739.8c-7.3 0-9.8-2-15-8.9s-11.5-17.5-28.8-16.9c-11.1-15.7-6.4-34.4 4.7-43.6s33.4-9.2 41.4 5.2c4.3 7.6 6 15.9 3.1 30.7 9.4-2.7 13 3.7 11.6 11.7s-8 21.8-17 21.8z" />
                    <rect width="7.5" height="21.43" x="261.2" y="764.2" fill="#ff78b9" rx="3.7" />
                    <path fill="none" stroke="#000" strokeLinecap="round" strokeMiterlimit={10} strokeWidth="3.204" d="M382.1 765.7a8.1 8.1 0 015.2.9M338.4 765.8a17.4 17.4 0 017.4.8" />
                    <path fill="none" stroke="#000" strokeLinecap="round" strokeMiterlimit={10} strokeWidth="6.866" d="M351.8 750.9c-11.3-.3-17.4-.2-27.5 1.1M392.3 752.4c-6.8-1.6-11-1.8-18.6-1.8" />
                    <path fill="none" stroke="#000" strokeLinecap="round" strokeMiterlimit={10} strokeWidth="2.289" d="M490.2 808.3c-22.1 3.7-77.3 7.9-145.6 3.4" />
                    <path fill="#039c78" d="M383 859.7c-6.2 8.5-14.9 16.4-31.1 19.7-24.2 4.8-36.8-18-38.6-36.9-.7-8.1-1-16.7 2.6-7.7 7 17 22.8 19.5 34.6 19.2s17.1.9 32.5 5.7z" />
                    <path fill="none" stroke="#000" strokeLinecap="round" strokeMiterlimit={10} strokeWidth="2.289" d="M255.1 873.9c7.2 3.7 16.1 4 16.1 4M251.2 801.8a46.6 46.6 0 00-8 19.8" />
                    <ellipse cx={331} cy="831.8" fill="#03ab83" rx="5.7" ry="10.1" transform="rotate(-46.3 330.993 831.733)" />
                    <path fill="none" stroke="#eb459f" strokeLinecap="round" strokeMiterlimit={10} strokeWidth="2.289" d="M359.4 738.7c6.8-7.5 10.1-18.3 11.2-25.7M347.2 728.6c5.8-23.6 5.8-48.7-10.2-57.5" />
                    <ellipse cx={257} cy="830.6" fill="#57f287" rx="4.2" ry="6.8" transform="rotate(-9.2 258.721 834.545)" />
                    <path fill="none" stroke="#000" strokeLinecap="round" strokeMiterlimit={10} strokeWidth="2.289" d="M333.2 811.7L338.3 804.9" />
                    <ellipse cx="428.3" cy="743.6" rx="1.9" ry="2.9" transform="rotate(-25.5 428.417 743.846)" />
                    <path d="M450.6 731.2a.4.4 0 01-.4-.4 17.1 17.1 0 012.7-7.4c2.5-3.8 4.4-5.1 6.1-5.5s3.1 0 3.1 1.5a31.5 31.5 0 01-2.2 8.5 23.1 23.1 0 015.7-.5c1.1.1 1.1.6.3 1s-5 2-15.3 2.8z" />
                    <path fill="none" stroke="#000" strokeLinecap="round" strokeMiterlimit={10} strokeWidth="2.289" d="M442.1 791.4c1.1 9.7-7 21.7-7 21.7" />
                    <path fill="#fff" d="M288.9 889.8l-.8-.6.8-.5c.9-.6 1.8-1.3 1.7-2.2s-1-1.5-1.9-1.9l-.9-.5a2.4 2.4 0 01.8-.6c.8-.7 1.6-1.4 1.5-2.3s-1.1-1.4-2.1-1.8l-.8-.4.6-.7c.8-.7 1.6-1.4 1.4-2.4s-1.2-1.3-2.1-1.7a2.4 2.4 0 01-.9-.3l.6-.7c.8-.7 1.5-1.5 1.3-2.4s-1.2-1.3-2.2-1.6a3 3 0 01-.8-.4l.6-.7c.7-.7 1.5-1.5 1.3-2.4s-1.3-1.2-2.2-1.6l-.9-.3.6-.7c.8-.7 1.5-1.5 1.3-2.4s-1.2-1.3-2.2-1.6l-.8-.4c.2-.2.4-.5.6-.6a3.1 3.1 0 001.4-2.4c-.2-.9-1.2-1.3-2.1-1.7l-.8-.4.7-.6c.7-.6 1.6-1.3 1.5-2.2s-1.1-1.4-2-1.9l-.7-.5.7-.5c.8-.5 1.7-1.1 1.7-2s-.8-1.5-1.6-2.1l-.7-.6.8-.3 1.1-.6a1.2 1.2 0 00.7-1.2 1.4 1.4 0 00-.8-1.2c-1.5-.7-1.5-2.3-1.2-8.6v-.3c.4-7-1.2-25.3-3.4-30.4a.9.9 0 00-1.2-.5 1 1 0 00-.5 1.2c1.9 4.4 3.7 22.2 3.3 29.6v.3c-.3 6-.4 8.5 1.4 9.9h-.1c-1 .4-2 .8-2.1 1.8s.7 1.6 1.6 2.2l.8.6-.8.6c-.9.6-1.8 1.2-1.8 2.1s1 1.5 2 2l.8.5-.7.6c-.8.7-1.7 1.4-1.5 2.3s1.1 1.4 2.1 1.8a3 3 0 01.8.4 1.7 1.7 0 01-.6.6c-.8.8-1.6 1.5-1.4 2.4s1.2 1.3 2.2 1.7l.9.3a4.6 4.6 0 01-.7.7c-.7.8-1.5 1.5-1.2 2.4s1.2 1.3 2.1 1.6l.9.4-.6.7c-.7.7-1.5 1.5-1.3 2.4s1.2 1.2 2.2 1.6l.9.3-.7.7c-.7.7-1.4 1.5-1.2 2.4s1.1 1.3 2.1 1.7l.8.3-.6.7c-.8.7-1.5 1.4-1.4 2.3s1.1 1.3 2.1 1.7l.8.4-.7.6c-.8.7-1.6 1.4-1.5 2.3s1 1.4 1.9 1.9l.8.4-.7.5c-.9.6-1.8 1.2-1.7 2.1s.8 1.5 1.7 2.1l.7.5-.8.5c-.9.4-1.8.9-1.9 1.8s.7 1.6 1.5 2.3l.6.6-.8.3c-.9.4-1.9.7-2.2 1.6s.5 1.7 1.1 2.4l.6.7-.8.2c-1 .2-2.1.4-2.4 1.2a2.6 2.6 0 00.7 2.6l.4.8h-.8c-1.1.1-2.1.1-2.6.9s-.1 1.7.3 2.6l.3.9h-.9c-1-.1-2-.2-2.6.4s-.4 1.7-.1 2.7a3.7 3.7 0 00.2.9l-.9-.2c-1-.2-2-.5-2.7.1s-.5 1.6-.4 2.6.1.7.1 1l-.8-.3c-1-.4-2-.8-2.8-.2a1.8 1.8 0 00-.5.7h5.9a5.7 5.7 0 00-.1-1.3c0-.3-.1-.7-.1-.9l1 .2c1 .2 2 .5 2.7-.2s.4-1.7.1-2.8a3.7 3.7 0 00-.2-.9h1c1.1.1 2.1.3 2.7-.5s.2-1.8-.2-2.8l-.4-.9h1c1.1-.1 2.1-.1 2.6-.9s-.1-1.8-.7-2.7l-.4-.9.9-.2c1-.2 2.1-.4 2.4-1.3s-.4-1.8-1.1-2.6l-.6-.7.9-.4c1-.3 2-.7 2.2-1.6s-.6-1.7-1.4-2.4l-.7-.6.8-.5c.9-.5 1.9-1 1.9-2s-.8-1.5-1.7-2.1z" />
                    <path fill="none" stroke="#000" strokeLinecap="round" strokeMiterlimit={10} strokeWidth="2.289" d="M485.1 757.1L489.7 758.7" />
                    <path fill="#2ad17d" d="M203.2 874.9c-4.4-2.1-10-1-18.2 3.9a129.1 129.1 0 009.6 10c-1.3 9.5-4.4 14.8-7.4 21.2s.1 10.8 5.4 11.6 8.1-1.1 12.1-7.3a33.7 33.7 0 004.9-13.8 55 55 0 00.6-8.8c0-9.1-2.3-14.5-7-16.8z" />
                    <path fill="#2ad17d" d="M209.1 887.4c6.5-.8 10.9-1.4 13.9 2.7s3 8.7 1.3 17.1-5.8 17-12.2 16.4-8.8-4.3-6.5-13.6a188.3 188.3 0 003.5-22.6z" />
                    <path fill="#2ad17d" d="M223 897.1c4.8-.1 10.6-.4 12.2 4.8s.2 12-3 17.4-7.5 6.6-10.7 4.7-3.3-3.5-.8-10.5 3.2-9.9 2.3-16.4z" />
                    <path fill="#2ad17d" d="M253.8 909.9c-4.6-.3-13.3-.4-19.4-.7l-1.6 2.9a109.9 109.9 0 0027.5 6.2c2.5-4.8-.4-8-6.5-8.4z" />
                    <path fill="none" stroke="#000" strokeLinecap="round" strokeMiterlimit={10} strokeWidth="2.289" d="M205.2 913.4a47.1 47.1 0 005-26.1M225.4 897.8c-.1 8.7-1.6 15.7-5.8 21.5" />
                    <path fill="none" stroke="#039c78" strokeLinecap="round" strokeMiterlimit={10} strokeWidth="2.289" d="M312.9 806.9c1.7-6 7.6-12.2 10.3-14" />
                    <path fill="none" stroke="#039c78" strokeLinecap="round" strokeMiterlimit={10} strokeWidth="2.289" d="M319.2 772L314.7 769.4" />
                </g>
                <path fill="#91ffad" d="M240.6 690.9a30.2 30.2 0 01-13.5-20.8l-2.2-14.6a1.4 1.4 0 00-1.4-1.2 1.4 1.4 0 00-1.5 1.2l-2.2 14.6a29.7 29.7 0 01-13.4 20.8l-1.9 1.2a1.7 1.7 0 00-.7 1.3 1.5 1.5 0 00.7 1.2l1.9 1.2a29.7 29.7 0 0113.4 20.8l2.2 14.6a1.4 1.4 0 001.5 1.2 1.4 1.4 0 001.4-1.2l2.2-14.6a30.2 30.2 0 0113.5-20.8l1.8-1.2a1.3 1.3 0 00.7-1.2 1.5 1.5 0 00-.7-1.3z" data-name="Layer 20" />
                <path fill="#66bcff" d="M1376.2 297.5a24.6 24.6 0 01-11.1-17.2l-1.8-12a1.3 1.3 0 00-1.2-1.1 1.3 1.3 0 00-1.2 1.1l-1.8 12a25 25 0 01-11.1 17.2l-1.6 1a1.3 1.3 0 00-.6 1 1.3 1.3 0 00.6 1l1.6 1a25.2 25.2 0 0111.1 17.3l1.8 12a1.2 1.2 0 001.2 1 1.2 1.2 0 001.2-1l1.8-12a24.8 24.8 0 0111.1-17.3l1.6-1a1.2 1.2 0 00.5-1 1.2 1.2 0 00-.5-1z" data-name="Layer 19" />
                <path fill="#3442d9" d="M1464.3 954.2a44.2 44.2 0 01-19.8-30.6l-3.2-21.4a2.1 2.1 0 00-2.1-1.8 2.1 2.1 0 00-2.1 1.8l-3.2 21.4a44.2 44.2 0 01-19.8 30.6l-2.8 1.8a2.1 2.1 0 00-.9 1.8v.2a2.1 2.1 0 00.9 1.8l2.8 1.8a44 44 0 0119.8 30.6l3.2 21.3a2.1 2.1 0 002.1 1.9 2.1 2.1 0 002.1-1.9l3.2-21.3a44 44 0 0119.8-30.6l2.8-1.8a2.2 2.2 0 001-1.8v-.2a2.2 2.2 0 00-1-1.8z" data-name="Layer 18" />
                <path fill="#ff78b9" d="M789.5 845.4a13.5 13.5 0 01-6.1-9.3l-.9-6.6a.9.9 0 00-.7-.6.6.6 0 00-.6.6l-1 6.6a13.5 13.5 0 01-6.1 9.3l-.8.6a.5.5 0 00-.3.5.5.5 0 00.3.5l.8.6a13.5 13.5 0 016.1 9.3l1 6.6a.6.6 0 00.6.6.9.9 0 00.7-.6l.9-6.6a13.5 13.5 0 016.1-9.3l.8-.6a.5.5 0 00.3-.5.5.5 0 00-.3-.5z" data-name="Layer 17" />
                <path fill="#ff78b9" d="M843.2 146.5a8.2 8.2 0 01-3.7-5.8l-.6-4c0-.2-.2-.3-.4-.3s-.4.1-.4.3l-.6 4a8.2 8.2 0 01-3.7 5.8l-.5.3-.2.3c0 .1.1.2.2.3l.5.3a8.2 8.2 0 013.7 5.8l.6 4c0 .2.2.3.4.3s.4-.1.4-.3l.6-4a8.2 8.2 0 013.7-5.8l.5-.3c.1-.1.2-.2.2-.3l-.2-.3z" data-name="Layer 16" />
                <g data-name="Layer 15">
                    <circle cx="1427.5" cy="531.4" r="98.7" fill="#66bcff" />
                    <circle cx="1427.5" cy="531.4" r="98.7" fill="#66bcff" />
                    <circle cx="1427.5" cy="531.4" r="98.7" fill="#66bcff" />
                    <circle cx="1427.5" cy="531.4" r="108.1" fill="none" stroke="#29cc7a" strokeMiterlimit={10} strokeWidth="6.883" />
                    <path fill="#eb459f" d="M1354.8 562a25.8 25.8 0 00-18.4 7.4 97.8 97.8 0 0031.3 40.5 25.8 25.8 0 00-12.9-47.9z" />
                    <path fill="#bf0f76" d="M1344.2 570.2c.3 1.7 4.9 3.9 11.5 4.9s11.8.2 12.5-1.4a169.2 169.2 0 006.5-15.7c1.1-3.2-1.1-8.1-13.2-9s-16 .7-17.9 3.3-1.2 9.2.6 17.9z" />
                    <path fill="#ffe75c" d="M1382.9 507.9c-2.1-.3-4.6.7-7.6 7.2.3-8.2.1-16.4.1-20.3s-1.8-5.1-3.9-5.3a4.3 4.3 0 00-4.8 4.1c-.3 3.1-.6 12.5-.7 15.6s-.2 3.7-.6 3.7-.9-1-1.5-3.2a103 103 0 00-4-10.7c-2-4.8-2.6-7.8-9.1-6.4s-11.7 7.1-13.3 10.9.5 7.1 5.3 18.9c-3.7 15.4-3.3 17.6-.9 20.7s7.9 2.9 17 2.3c20-1.3 19.9-2.6 22.1-11.3s3.5-16.1 4-19.1.7-6.7-2.1-7.1z" />
                    <path d="M1371.9 522.7a1 1 0 00.7-.7 74.2 74.2 0 012.7-7c0-1.4.1-2.9.1-4.3a51.3 51.3 0 00-4.4 10.2c-8.9 1.4-13.9 5.8-15.7 14a1 1 0 00.8 1.1h.2a1 1 0 00.9-.7c1.6-7.6 6.2-11.5 14.7-12.6z" />
                    <path fill="#ffe75c" d="M1352.6 544.2c-.2 4.1-.1 9.8-.1 9.8l15.4 1.1.9-13.2z" />
                    <path fill="#eb459f" d="M1416.3 546.9c-22.5 4.3-27.8 22.7-26 43.8-10 6.5-13.7 14-13.6 25.3a98.6 98.6 0 00111.9-7.1l4-56.1s-53.7-10.1-76.3-5.9z" />
                    <path fill="#eb459f" d="M1380.5 575.1c-12.6 4.2-20.4 13.5-22.4 26.5a98.9 98.9 0 0043.6 25.1l12.3-80.6c-18.3-2.4-34.5 7.3-33.5 29z" />
                    <path d="M1419.5 560.2c-10.5-21.2-16.1-23.4-15-29.9s15.6-6.9 34.9-6.8-1 35.5-1 35.5z" />
                    <path fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.238" d="M1416.3 546.9c-22.5 4.3-27.8 22.7-26 43.8-9.4 6.1-13.2 13.2-13.6 23.4" />
                    <path fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.238" d="M1447.3 554c-23 10.2-20 17.7-13.2 37.5a40.1 40.1 0 00-12.3 37.6" />
                    <path fill="url(#linear-gradient-2)" d="M1473.8 428.5c6.8-8.7 15.8-13.6 24.3-11.4s10.3 7 14.9 33.2c15.9 8.4 17.8 10.6 5.2 28.9 11.6 11.5 13.1 17.4-1.9 30.4l-16.5.8c-14.1-11.7-16.6-12.2-9.8-29.1-22.3-26.7-19.5-31.6-16.2-52.8z" />
                    <path fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.238" d="M1495.3 482.7c0-3.2 1.6-5.7 3.5-5.7s3.6 2.5 3.6 5.7" />
                    <circle cx="1490.8" cy="451.2" r="9.2" fill="#4452f2" />
                    <circle cx="1487.3" cy="437.7" r="9.2" fill="#4452f2" />
                    <circle cx="1475.5" cy="433.6" r="9.2" fill="#4452f2" />
                    <circle cx="1466.4" cy="431.5" r="5.6" fill="#4452f2" />
                    <path fill="url(#linear-gradient-3)" d="M1435.2 565.3c18.2 0 32.6-9.5 41.4-17.5a34.4 34.4 0 0010.7-20.8c1.5-11.8 3.9-31.9 5.2-52.4 2-31.9-18-44.7-36.9-43s-34.6 11.7-38.1 43c-21.9 0-29.8 3-31.3 11.1s8.2 13.4 22.5 19.5c3.4 1.4 3.8 1.7 4.4 3.7s2.8 12.1 16 22.8c-3.4 8.1-4.2 14.4-3.3 23.6s5.8 10 9.4 10z" />
                    <path fill="#bf0f76" d="M1434.1 559.3c-7.7-19.5-11.5-22.7-25.7-33.2-2.3 1-3.6 2.3-3.9 4.2-1.1 6.5 4.5 8.7 15 29.9z" />
                    <path fill="#ffe75c" d="M1485.8 467.5c18-1.3 22.7-.6 23.6 3.8s-4.3 7.9-22.7 17.4z" />
                    <path fill="#c40655" d="M1446.8 493.8c-1 2.8-1 7.5-.9 12.7s.6 11.9-5.8 12.4-9.8-6.9-11.5-10.1-2.1-3.6-3-4.1-4.6-2.4-7.9-4.1-5.3-3.4-4.4-4.4 9.6.8 19 1.7 10.9-2.1 13.6-5.3c.5-.6 1.5-.6.9 1.2z" />
                    <path d="M1445.9 492.6c-2 2.4-3.4 4.7-7.9 5.3a10.1 10.1 0 00-.3 1.7c-.4 5 2 9.1 5.3 9.1a4.8 4.8 0 002.9-1.1v-1.1c-.1-5.2-.1-9.9.9-12.7s-.4-1.8-.9-1.2z" />
                    <path fill="none" stroke="#ffae00" strokeLinecap="round" strokeMiterlimit={10} strokeWidth="2.5" d="M1444.5 485.9a23.5 23.5 0 009.1 6.1" />
                    <path fill="#4452f2" d="M1430.8 512.9c2 3.1 5 6.4 9.3 6 6.4-.5 5.9-7.2 5.8-12.4 0-1.9-.1-3.7 0-5.4-6.7-1.2-14 2-15.1 11.8z" />
                    <path fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.238" d="M1443.3 499.9c-3.1 1.8-6.7 6.4-7 13.2M1420.6 474.1c.9-6.2 2.5-8.3 3.6-8.5s1 2.3.6 7.9M1450.6 473.5c2.1-9.1 5.1-9.6 6.4-9s2.2 2.9 1.9 9.6" />
                    <ellipse cx="1466.2" cy="477.8" fill="#fa80ba" rx="7.2" ry="5.7" transform="rotate(-36.1 1466.316 477.85)" />
                    <path fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.238" d="M1502.4 482.7c0 3.1-1.6 5.6-3.6 5.6s-3.5-2.5-3.5-5.6" />
                    <path fill="#fff" d="M1496.9 501.6l-2.7-5a.8.8 0 010-.7l3.8-5.3a.6.6 0 011.1.1l2.3 4.8a.6.6 0 010 .6l-3.4 5.5a.7.7 0 01-1.1 0z" />
                    <path fill="#4452f2" d="M1516.3 509.6l-16.5.8c-2.2 1.4-1.4 2.3 0 3.6l16.4-.6c2.5-2.1 1.8-2.5.1-3.8z" />
                    <path fill="#ffe75c" d="M1516.2 513.4c1.1 4.6 1.6 7.7 1.9 9.6s-.5 3-10 3.3-9.1-1.2-9-3.5.7-8.8.7-8.8z" />
                    <path fill="#bf0f76" d="M1488.2 545.1c4.8-17.5 6.4-23.2-3.4-22.7a334.3 334.3 0 00-37.1 4c-9 1.6-8.8 2.8-4.4 32.6z" />
                    <path fill="#fff" d="M1389.6 541.2a2.1 2.1 0 00-2 2.4l5.4 39.2a4.8 4.8 0 001.7 3c1.5 1.1 4.3 2.4 9.3 2.4s7.8-1.3 9.2-2.4a4.8 4.8 0 001.7-3l5.5-39.2a2.1 2.1 0 00-2.1-2.4z" />
                    <path fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth={5} d="M1413.1 548.5c5.9-.4 8.6-.5 10 1.7s.4 6.1-.8 12.7-2.7 5.5-10.2 6" />
                    <ellipse cx="1456.6" cy="452.8" rx="1.4" ry="3.8" transform="rotate(-82 1457.448 452.514)" />
                    <ellipse cx="1423.2" cy={456} rx="1.2" ry="2.6" transform="rotate(-82 1423.962 455.72)" />
                    <circle cx="1479.4" cy="628.7" r="27.3" fill="#eb459f" />
                    <path fill="#eb459f" d="M1432.3 559c29.3-11.3 48.2-18.5 61.5-20.6a32.6 32.6 0 0118.5 2.3c19.7 8.8 14.7 29.6 8.2 39.6 12.4 8.6 18.6 24.4 5.8 42.5 11 9.4 17.6 29.9 3.3 42.4s-35.8 8.6-44.6-10.3z" />
                    <path fill="#bf0f76" d="M1455.9 620.2c1.6 1 6.6-.8 12.3-5.1s8.8-8.7 8.2-10.5c-2.2-6.1-5.5-13.3-7.1-16.6s-6.9-5.1-16.6 3.3-11.3 12.7-10.8 16.1 6.1 7.7 14 12.8z" />
                    <path fill="#ffe75c" d="M1449.5 585.1c9.3-10.4 12.9-17.6 13.5-20.9s.8-6.1-6.9-13.1-12-9.1-15.8-8.8-7.3 4.6-10.6 13.4c-.5 1.5 5 4.9 3.4 5.3-9.1 2.8-11.7 15-13.1 20.2s-1.6 9.7 5.3 13.8 9.7 6.4 24.2-9.9z" />
                    <path fill="#ffe75c" d="M1437.2 550.8c-12.1.4-17.7 1.3-20.3 2.6s-2.5 4-2.1 6.6.9 3.5 7.4 3.7 15 0 15 0z" />
                    <path fill="#ffe75c" d="M1441.1 592.7L1448.1 601.1 1460.3 591.3 1451.8 579 1441.1 592.7z" />
                    <path d="M1345.5 494.9a11 11 0 00-2.1 1.4 1.6 1.6 0 00-.6 1.8c.7 3.6 3.3 9.6 8.7 20a1.1 1.1 0 00.9.6l.4-.2a.8.8 0 00.4-1.2c-9.4-18.2-9.5-21.2-7.7-22.4z" />
                    <path fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.238" d="M1439.3 551.5c-5.1 2.6-5.5 7.3-4.6 11.3-5 2.3-6.3 5.1-5.4 11.3-2.7 1.6-5 3.6-4.1 8.6" />
                    <path d="M1441.6 593.2L1445.9 589.2 1444.4 596.6 1441.6 593.2z" />
                    <path d="M1352.5 545.8L1365.2 545 1352.5 551.8 1352.5 545.8z" />
                    <path fill="#eb459f" d="M1343.2 564.8L1370.7 568.2 1370.6 577.3 1341.9 575.5 1343.2 564.8z" />
                    <path fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.238" d="M1505.5 620.5a27.3 27.3 0 00-26.1-19.1M1489.4 580.9a27.6 27.6 0 00-5.6 20.1" />
                    <path fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.238" d="M1485.8 587.1L1483.2 582.7" />
                </g>
                <g data-name="Layer 14">
                    <path fill="#ffc619" d="M1259.3 840.4a34 34 0 00-13.9-.1c-.8-5.7-5.4-11.2-16.9-21.7-14.8-13.5-18.6-30.4-18.6-47.5l-41 33.3-9.8 41.2c14.7-3.5 29.6-5.7 45.1.6l5.2 2.4a5.1 5.1 0 01.8 8.5c-4.5 3.5-7.6 6.7-7.9 6.9a105.9 105.9 0 00-10.4 11.7c-17.2 23.5-12.2 42.3 9.6 41.1 19.1-1 44.5-16.9 58.9-35.6s15.5-36.8-1.1-40.8zm-4.7 33.7c-13.5 17.4-38.2 32.7-48.7 32.7s-7.6-13.5 6.6-30.2 34.1-30.4 44.6-30.4 9.8 12-2.5 27.9z" />
                    <path fill="#ff8c19" d="M1209.8 771.2c.3 7.7-1.5 17-5.2 26.5-8.9 22.9-26.7 42.1-42.5 47.2l7-1.4c14.3-7.7 29.1-25.1 36.9-45.3a73.7 73.7 0 004.5-15.9 105.1 105.1 0 01-.6-11.2z" />
                    <ellipse cx="1172.7" cy="797.3" fill="#ffc619" rx="54.4" ry="28.8" transform="rotate(-59.3 1172.518 797.226)" />
                    <path fill="#ff8c19" d="M1191 753.5c-15.2 0-36.6 21.2-46.6 46.3s-4.5 41.1 10.6 39 33.1-20.9 42.9-43 7.5-42.3-6.9-42.3z" />
                    <path fill="#ff8c19" d="M1191 753.5c-15.2 0-36.6 21.2-46.6 46.3s-4.5 41.1 10.6 39 33.1-20.9 42.9-43 7.5-42.3-6.9-42.3z" />
                    <path d="M1197.9 795.8a96 96 0 004.6-13.3 7.9 7.9 0 00-5.7-2.2c-10.2 0-24.6 14.3-31.4 31.2-4.3 10.9-4.2 19.6-.7 23.8 12.3-6.8 25.5-22.2 33.2-39.5z" />
                    <path fill="url(#linear-gradient-4)" d="M1196.6 798.5a104 104 0 01-10.6 17.3c-6.8 2.5-8.4 8.9-12 16.1-4.5 9-12.2 17.6-25.8 23.4-23.4 10-41.5-.5-47.1-6.1s-2.9-12.5 7.1-13.4 22.6-1.2 31.3-14.1a40.1 40.1 0 003.4-6.2c8-19.1 20.7-19.3 27.8-14.9 9.3-5.9 18.5-6 25.9-2.1z" />
                    <path fill="none" stroke="#000" strokeLinecap="round" strokeMiterlimit={10} strokeWidth="1.703" d="M1170.7 800.6c-10.9 7.4-12.9 21.1-20.5 30.1s-14.7 10.3-14.7 10.3" />
                    <path fill="#fff" d="M1201 758.7l-1.5 3c-1.9 3.5-4.6 3.7-9.6 3.7s-4.3-2.8 1.7-11.9a11.5 11.5 0 019.4 5.2zM1190.6 753.5c-5.4 8.8-7.1 11.9-11.5 11.9s-8.5.2-4.3-5.2a14.7 14.7 0 001-1.3c5.2-3.3 10.2-5.3 14.8-5.4z" />
                    <path d="M1244.6 850.1c1.6-2.7 1.8-5.5 1.8-8.6a.8.8 0 00-.9-.8.8.8 0 00-.8.8c0 4.2-.4 7.6-4.6 11.1a50.5 50.5 0 014.5-2.5z" />
                    <path fill="none" stroke="#ffc619" strokeLinecap="round" strokeMiterlimit={10} strokeWidth="5.643" d="M1226.6 871.1L1234.2 891.2" />
                    <path fill="none" stroke="#ffc619" strokeLinecap="round" strokeMiterlimit={10} strokeWidth="5.643" d="M1234.9 863.9L1242.5 884" />
                    <path fill="none" stroke="#ffc619" strokeLinecap="round" strokeMiterlimit={10} strokeWidth="5.643" d="M1243.2 856.7L1250.8 876.7" />
                    <path fill="none" stroke="#ff8c19" strokeLinecap="round" strokeMiterlimit={10} strokeWidth="3.762" d="M1260.9 859.2c-2-5.1-7.8-5.7-12.9-1.2l-20.6 17.9c-5.2 4.5-7.8 12.4-5.9 17.5s7.8 5.6 12.9 1.1l20.7-17.9c5.1-4.5 7.7-12.3 5.8-17.4z" />
                    <path fill="#ff8c19" d="M1254.4 875.1a67.7 67.7 0 005.9-6.1 17.9 17.9 0 003.7-6.9c1.2-5-.6-10.5-2.6-15.8-1-2.6-2.1-5.3-3.2-7.9l-1.7-4c-.6-1.4-1.2-2.8-1.7-4.2a55 55 0 01-2.5-8.8 56.6 56.6 0 01-1.3-9.2 3.8 3.8 0 013.5-4 3.8 3.8 0 014 3.5c.1.2 0 .5 0 .6a45.1 45.1 0 001.6 16.3 29.7 29.7 0 001.3 3.9l1.4 4.1c1 2.8 2 5.5 2.9 8.3a66.6 66.6 0 012.2 8.8 19.3 19.3 0 01-5 17.6 76 76 0 01-6.4 6.3 1.6 1.6 0 01-2.3-.2 1.6 1.6 0 01.2-2.2z" />
                    <path fill="#fff" d="M1254.8 804.9a6.5 6.5 0 016.5 6.5v1.8a4.7 4.7 0 01-4.7 4.7h-1.8a6.5 6.5 0 01-6.5-6.5 6.5 6.5 0 016.5-6.5z" transform="rotate(45 1254.787 811.45)" />
                    <rect width="7.8" height="7.76" x="1250.9" y="806.8" fill="none" stroke="#000" strokeLinecap="round" strokeMiterlimit={10} strokeWidth="1.703" rx="3.9" transform="rotate(45 1254.728 810.625)" />
                    <path fill="#4ab0ff" d="M1143 766.4l-14.1-7.9a6.1 6.1 0 01-3.1-5.3v-1a6.1 6.1 0 016.1-6.2 6.1 6.1 0 015.9 4.3z" />
                    <path fill="#66bcff" d="M1124.9 804.3l-9.1 6.7a4.4 4.4 0 01-4.3.5l-.6-.3a4.4 4.4 0 01-2.3-5.7 4.4 4.4 0 014.4-2.5z" />
                </g>
                <path fill="#6874f7" d="M537.2 82.7a20.5 20.5 0 00-17 8.9 43.1 43.1 0 00-17.6-3.8 42.6 42.6 0 00-27.9 10.3h82.5a20.8 20.8 0 00-20-15.4z" data-name="Layer 13" />
                <g data-name="Layer 12">
                    <path fill="#808aff" d="M1519.2 121.3c-.1.2-.3.3-.4.2-3.1-2.2-4.5-1.8-5.3-.7s-.8 2.9-.5 5.5a1.1 1.1 0 01-.7 1.2c-.2.1-.5.1-.6-.1-2.1-2.1-3.2-3.1-4.7-3.4s-4.3.5-6.1 3.5l-6-6.5a20.1 20.1 0 007.5-11.6c.8-3.7 1.9-3.4 6-.1a55.3 55.3 0 0110.8 11.6.3.3 0 010 .4zM1465.7 131.6a.7.7 0 00.6-.1c2-2.6 3.5-2.8 4.6-2.3s1.7 1.9 2.2 3.7a.9.9 0 00.9.6c.2-.1.5-.2.6-.5.9-1.9 1.5-2.8 2.6-3.5a4.6 4.6 0 015.1.5l2.7-5.6a15.3 15.3 0 01-8-7.1c-1.9-3.2-2.7-2.7-5.4 1.2a37.8 37.8 0 00-6 12.6.4.4 0 00.1.5z" />
                    <circle cx={1491} cy="131.5" r="12.4" fill="#808aff" />
                    <path fill="#3442d9" d="M1526.7 74.3a1.1 1.1 0 01-1.1.6c-9.2-2.6-12.4-1-13.7 1.7s.2 5.9 2.6 10.3a1.8 1.8 0 01-.8 2.4 1.5 1.5 0 01-1.6 0c-5.7-2.6-8.7-3.8-12.2-3.7a9.4 9.4 0 00-9.1 7.8l-15.8-7.7c5-8.4 4.6-17 2.5-25.2s.3-9 13-4.8a136.4 136.4 0 0135.8 17.6 1 1 0 01.4 1z" />
                    <path fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.233" d="M1487.3 78.1c1.6 6.1 3.1 17.3 3.1 17.3" />
                    <path fill="#3442d9" d="M1412.2 111a1.1 1.1 0 001.2-.2c4.2-6 7.4-6.6 10-5.5s3.9 3.8 5.2 7.8a1.8 1.8 0 001.9 1.2 1.7 1.7 0 001.3-1c2-4.4 3.2-6.5 5.5-8.1s7-2.3 11.2.5l5.3-12.6c-8.9-2.9-14.4-8.6-18.5-14.9s-6.1-5.5-11.6 3.3a85.8 85.8 0 00-11.9 28.6.9.9 0 00.4.9z" />
                    <path fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.233" d="M1436.9 90.6a49.5 49.5 0 008.9 12.7" />
                    <path d="M1447.6 101.3c5.8-2.2 12.9 1.9 15.8 9.1s.6 14.9-5.2 17.2l16.8-1.1c14.2-5.5 21-13.2 15.5-27.3-4.1-10.4-13.5-13.8-26.3-8.8s-16.6 10.9-16.6 10.9z" />
                    <path fill="#fff" d="M1458.8 97.7c5.2 6.7 8.3 10.6 9.7 11.6s1.4.2.6-3.4-3.3-16.3-3.3-16.3z" />
                    <path fill="#808aff" d="M1450.3 105.6c3.8 4.9 6.1 7.8 7.1 8.5s1 .1.5-2.6-2.5-11.9-2.5-11.9z" />
                    <path fill="#fff" d="M1475.6 124.3c-.5-6.2-.8-9.8-.5-11s.7-.8 2 1.5l6.3 10.4z" />
                    <path fill="url(#linear-gradient-5)" d="M1451.6 125.2a7.7 7.7 0 014.7-4.8c3-1 6.6-1.6 14.2.1a12.4 12.4 0 007.8-.5c7.4-2.8 12.1-11.5 10.5-19.4s-8.9-11.9-16.3-9a16.5 16.5 0 00-8.4 7.5c-5 9.3-6.9 11.8-11.3 13.8a8.1 8.1 0 01-6.3.3c-4.8-1.8-7.1-7.9-4.1-15.4a27.4 27.4 0 1135.4 35.8 27.9 27.9 0 01-20.9-.4c-5.5-2.4-6.1-5.5-5.3-8z" />
                    <path fill="#eb459f" d="M1483.9 88.8a14.8 14.8 0 00-12.7-.6c-4.3 1.6-7.7 4.8-10.3 9.3s-8.1 13.4-13 13.6a7.2 7.2 0 01-6.1-2.7c0 .1.1.2.1.3a6.6 6.6 0 005.7 4h.4c4.4-.2 8.8-4.6 14.2-14.3a18.7 18.7 0 019.6-8.7 13.3 13.3 0 0111.4.5 14.1 14.1 0 017 10c1.9 9.1-3.4 19.2-11.8 22.5a15.5 15.5 0 01-8.9.5c-8.2-1.6-13.6-1.2-16.6 1.4l-.4.4a3.6 3.6 0 00-.6 4.3 4.9 4.9 0 012-3.5c2.5-2.3 7.7-2.6 15.3-1.1a16.1 16.1 0 009.8-.6c9-3.5 14.7-14.4 12.7-24.2a15.5 15.5 0 00-7.8-11.1z" />
                    <path fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.233" d="M1499.5 64.6c15.8 5.2 26.1 9.4 26.1 9.4M1513.3 88.3c-5.2-5.4-12.3-12.3-18.1-18M1429.9 112.9c-1.3-8.8-.7-22.4-.7-22.4M1412.6 110.4a119.9 119.9 0 0111.1-20.7" />
                    <path fill="#3442d9" d="M1403.9 154.3h-.4c-1.7-2.2-2.8-2.3-3.7-1.6a7.3 7.3 0 00-1.5 3.8c-.1.4-.4.8-.8.8-.2 0-.3-.1-.4-.3-1-1.9-1.6-2.8-2.7-3.4s-3.2-.6-5.2 1.2l-2.9-6a14.5 14.5 0 007.9-6.9c1.4-2.4 2.1-2 4.4 1.3a37.5 37.5 0 015.3 10.8.2.2 0 010 .3zM1362.8 150.1c.1.1.3.2.4.1 2.1-1.5 3.2-1.3 3.9-.6a4.7 4.7 0 01.7 3.1.6.6 0 00.5.6.7.7 0 00.6-.2 5.7 5.7 0 012.7-2 3.3 3.3 0 013.5 1.5l3.2-3.5a11.4 11.4 0 01-4.2-6.9c-.7-2.7-1.4-2.5-4.2-.3a27.3 27.3 0 00-7.1 7.9.2.2 0 000 .3z" />
                    <circle cx="1381.2" cy="155.6" r="9.4" fill="#3442d9" />
                </g>
                <g data-name="Layer 11">
                    <path fill="#ffc069" d="M705.1 901.6a24.2 24.2 0 003.1 2.5c4.3 2.8 5.4 5.9 3.5 8.4s-7.2 2.3-11.6-1-6.3-8.2-4.3-11 5.5-2.5 9.3 1.1z" />
                    <path fill="#3442d9" d="M619.5 989.1H638.6V1000.97H619.5z" transform="rotate(-4.7 629.138 996.059)" />
                    <path fill="#3442d9" d="M744.6 975.5c9.8-5.9 8.9-13.4-2.2-16.6L722 953c-11.1-3.2-28.3-.9-38.1 5.1l-57.1 34.5c-9.8 6-8.8 13.4 2.2 16.6l20.4 5.9c11.1 3.2 28.3.9 38.1-5.1z" />
                    <path fill="#d11583" d="M731.8 955.3H750.9V967.17H731.8z" transform="rotate(-4.7 741.61 961.62)" />
                    <path fill="#5865f2" d="M743.6 963.8c9.9-6 8.9-13.5-2.2-16.7l-20.4-5.8c-11.1-3.2-28.2-.9-38.1 5l-57 34.5c-9.9 6-8.9 13.5 2.2 16.6l20.4 5.9c11.1 3.2 28.2.9 38.1-5.1z" />
                    <path fill="#d11583" d="M744.6 975.5l-1.2.7-42.8-23.8c7.5-1.2 15.3-1.1 21.4.6l20.4 5.9a22.5 22.5 0 014.9 2.1c6.2 3.7 5.4 9.6-2.7 14.5z" />
                    <path fill="#eb459f" d="M747.3 961a23.7 23.7 0 01-3.7 2.8l-1.1.6-41.9-12-18.8-5.4 1.1-.7c9.9-5.9 27-8.2 38.1-5l20.4 5.8c9.4 2.7 11.6 8.5 5.9 13.9z" />
                    <path d="M687.7 997.6L742.5 964.4 681.8 947 627 980.1 687.7 997.6z" />
                    <path d="M743.4 976.2L742.5 964.4 687.7 997.6 688.7 1009.3 743.4 976.2z" />
                    <path fill="#fff" d="M743.2 959.2c9.9-5.9 8.9-13.4-2.2-16.6l-20.4-5.9c-11.1-3.2-28.2-.9-38.1 5.1l-57 34.5c-9.9 6-8.9 13.4 2.2 16.6l20.4 5.9c11.1 3.2 28.2.9 38.1-5.1z" />
                    <path fill="#ffc619" d="M621.8 977.4c10 31.8 7.7 35 18.9 23s21.4-18.6 53.3-7.5c38.5 13.5 34.7 13.1 36.9-17.1 1-12.7 8.8-20 14-30.9z" />
                    <ellipse cx="655.3" cy="980.6" fill="#eb459f" rx="33.2" ry="14.5" transform="rotate(-8 652.378 976.833)" />
                    <ellipse cx="690.6" cy="968.9" fill="#d11583" rx="33.2" ry="14.5" transform="rotate(-8 687.65 965.648)" />
                    <ellipse cx="715.2" cy="948.7" fill="#eb459f" rx="33.2" ry="14.5" transform="rotate(-8 712.081 945.082)" />
                    <path fill="#29cc7a" d="M720.7 930.5l-100.4 39.2c-10.7 3.9-9.5 13.2 2.6 12.7a39.9 39.9 0 0127.6 9.7c5.6 4.9 13.2 5 20.9-.8s15.2-9.7 24.6-11.8 19.7-8.4 24.7-15.3 14.1-11.4 19.8-12.7 12.8-2.5 12.7-10.4-13-11.9-32.5-10.6z" />
                    <path fill="#3442d9" d="M617.1 959.3H636.2V971.17H617.1z" transform="rotate(-4.7 626.733 965.45)" />
                    <path fill="#3442d9" d="M742.1 945.7c9.9-6 8.9-13.5-2.2-16.7l-20.4-5.8c-11.1-3.2-28.2-.9-38.1 5l-57 34.5c-9.9 6-8.9 13.5 2.2 16.6l20.4 5.9c11.1 3.2 28.2.9 38.1-5.1z" />
                    <path fill="#d11583" d="M729.3 925.4H748.4V937.27H729.3z" transform="matrix(1 -.08 .08 1 -73.89 63.73)" />
                    <path fill="#5865f2" d="M741.2 933.9c9.8-6 8.8-13.5-2.3-16.7l-20.4-5.8c-11.1-3.2-28.2-.9-38.1 5l-57 34.5c-9.9 6-8.9 13.5 2.2 16.7l20.4 5.8c11.1 3.2 28.2.9 38.1-5z" />
                    <path fill="#d11583" d="M742.1 945.6l-1.1.7-42.9-23.8c7.5-1.2 15.4-1.1 21.4.7l20.4 5.8a23.5 23.5 0 015 2.1c6.1 3.7 5.3 9.7-2.8 14.5z" />
                    <path fill="#eb459f" d="M744.9 931.1a29.7 29.7 0 01-3.7 2.8l-1.2.7-41.9-12.1-18.8-5.4 1.1-.7c9.9-5.9 27.1-8.2 38.1-5l20.4 5.9c9.5 2.7 11.6 8.5 6 13.8z" />
                    <path fill="#3442d9" d="M685.3 967.7L740 934.6 679.3 917.1 624.5 950.2 685.3 967.7z" />
                    <path d="M741 946.3L740 934.6 685.3 967.7 686.2 979.5 741 946.3z" />
                    <path fill="none" stroke="#000" strokeLinecap="round" strokeMiterlimit={10} strokeWidth="2.096" d="M682.3 942.4L668.2 898" />
                    <circle cx="676.7" cy="924.6" r="11.7" fill="#29cc7a" />
                    <path fill="none" stroke="#000" strokeLinecap="round" strokeMiterlimit={10} strokeWidth="2.096" d="M674.4 917.5L668.2 898" />
                    <circle cx="668.2" cy={898} r="4.1" fill="#eb459f" />
                    <ellipse cx="656.7" cy="967.2" rx="7.9" ry="3.4" transform="rotate(-8.1 648.513 958.822)" />
                    <ellipse cx="729.1" cy="923.4" rx="7.9" ry="3.4" transform="rotate(-8.1 720.315 915.594)" />
                    <path fill="#ffc069" d="M799.6 992.1c-8.6 6.2-19.8 6.6-24.9.9s-1.4-10.1 8.4-12.4a14.4 14.4 0 008-5.2c5.5-7.3 10.6-9.8 14.9-4.9s2.2 15.4-6.4 21.6zM607.1 1042.7c-.5 4.6-4.9 4.6-9.7 1a14.1 14.1 0 00-8.4-3c-5.4 0-8.4-1-7.9-5.4s6.8-8.7 14-6.7 12.5 8.4 12 14.1z" />
                </g>
                <g data-name="Layer 10">
                    <path fill="#ff8c19" d="M1003.8 132.9c.4-6-3.3-11.5-10.1-11s-10.3 2.8-17.9 6.6a22.3 22.3 0 01-13.2 2.1c-20.9-3-26.3-2.6-30.6-1s-5.7 4-4.3 8.9 4.3 7.8 11.3 10 22.5 7.7 31.5 11.9 19.4 5.4 26.9 9.2 27.2 17.5 34.3 23.3 9.5 4.5 10.3 3.7.7-1.5.3-8a32.1 32.1 0 00-6.2-17c-3.9-5.5-12.3-13.5-16.9-20.5s-6.9-17.2-15.4-18.2z" />
                    <path fill="url(#linear-gradient-6)" d="M1019.2 151.1c-4.6-7-6.9-17.2-15.4-18.2-12.8-.3-23.5 5.7-31.3 6.9-5.6.8-18.8 1-24.2 1.1s-6.4.7-7.2 1.4-1.1 2-.1 2.5l-.4 2.1 7.9 2.8 34.8 12.4 18.7 8.8 22.1 14.2 15.6 11.5 2.5-.2c.6-.8.5-1.9.1-7.8a32.1 32.1 0 00-6.2-17c-3.9-5.5-12.3-13.5-16.9-20.5z" />
                    <path fill="#ed5f00" d="M1042 196.6c.4-.4.6-.8.6-2.1-.3 3.1-3.6.1-6.1-2.2s-9-11.2-20.5-16c-21.1-9-25.3-18.6-47.9-21.3-10.7-1.2-21.3-7.9-24.6-9.2s-4.2-1.5-4.1-3a15.3 15.3 0 00-2-9.3c-2.4-3.8-6.7-4.8-9.4-.8a7.5 7.5 0 00-.3 5.8c1.3 4.9 4.3 7.8 11.3 10s22.5 7.7 31.5 11.9 19.4 5.4 26.9 9.2 27.2 17.5 34.3 23.3 9.5 4.5 10.3 3.7z" />
                    <path d="M1042 196.6c.4-.4.6-.8.6-2.1-.3 3.1-3.6.1-6.1-2.2a91.8 91.8 0 00-7.5-7.7c2.2 2.2 2.8 5.6 2.9 8.4 7 5.7 9.3 4.4 10.1 3.6z" />
                    <path fill="#ffc619" d="M1046.3 203.2c-1.2-3.6-1.1-6.7-.8-10.7s-1.3-10.8-8.7-19.9l-3.4 16.3c6 6.9 8.9 12.9 8.9 16.7s.6 10 4.1 9.2 1.1-8-.1-11.6z" />
                    <path fill="#ff78b9" d="M951.8 146.5a34.5 34.5 0 008.1 3.8 77 77 0 0011.2 2.7c.3 0 .4-.1.4-.3-.5-4.2-6.1-7.5-10.2-8.1s-8.4.1-9.7 1.4 0 .4.2.5z" />
                    <path fill="#eb459f" d="M1005.7 145.5c-.3 2.9-5.1 4.9-10.8 4.4s-10.1-3.3-9.9-6.3 3.6-4.8 8-2.8a20.3 20.3 0 006 1.5c4.4.4 6.9.9 6.7 3.2zM1013.9 164.6a39.5 39.5 0 004.6 2.3c2.7 1 3.6 1.8 2.7 3s-4.8 1.5-8.5-.3-5.6-4.5-4.6-6.1 2.9-.7 5.8 1.1zM1036.5 170.1a7.6 7.6 0 00-4.6-2.9c-2.8-.6-4.1.8-4 2.7s2.5 5.2 7.3 8.7 6.1-1 5.2-3-2.6-3.8-3.9-5.5z" />
                    <path fill="#66bcff" d="M1005.6 102.9a39.9 39.9 0 00-14.4 1.9c-3.5 1.2-.6 5.2 8.6 7.5s19.3 1.8 23 1.8 3.3.2 5.6 2.7 4.1 4.4 4.2 2.3-.4-4 1.2-5.8 2.2-2.8 2.2-4.4-.6-1.3-2.5-.2a57.1 57.1 0 01-5.7 3c-.9.3-1-.4-3.4-2.2a32.6 32.6 0 00-18.8-6.6z" />
                    <path fill="none" stroke="#66bcff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.439" d="M986.7 107.2l4.4-1.1-3.1-2.7" />
                    <ellipse cx="997.8" cy="104.9" rx={1} ry="0.6" transform="rotate(-.6 1049.863 110.541)" />
                    <path fill="#ff8c19" d="M935.4 135.9c-1.4-2.1-3.6-2.8-4.8-1.7s-1.2 3.7.2 5.7 3.5 2.8 4.8 1.7 1.1-3.7-.2-5.7z" />
                    <path fill="none" stroke="#ffe75c" strokeLinecap="round" strokeMiterlimit={10} strokeWidth="1.742" d="M1032.9 181.2c4.6 3.1 6.7 5.5 7.9 10.4" />
                    <path fill="none" stroke="#000" strokeLinecap="round" strokeMiterlimit={10} strokeWidth="1.742" d="M1029 113.5L1031.4 113.2" />
                    <path fill="#3442d9" d="M960.6 175.9a37.7 37.7 0 00-12.6 3.7c-2.9 1.6.2 4.8 8.8 5.6s17.4-1.2 20.8-1.6 3-.4 5.4 1.6 4.3 3.4 4.1 1.5-.9-3.6.2-5.4 1.6-2.8 1.4-4.3-.7-1.1-2.3.2a30.2 30.2 0 01-4.7 3.5c-.8.4-.9-.3-3.3-1.4a29.6 29.6 0 00-17.8-3.4z" />
                </g>
                <g data-name="Layer 9">
                    <path fill="#ffe75c" d="M604.7 175.3l-15.7 1.5a7.7 7.7 0 00-3.5 1.2c-5.6 3.4-6.7 5.7-6.7 5.7l9.3 9 18.5-14.6z" />
                    <path fill="#ffc619" d="M549.6 178.7l2.3-2.6s12.1-1.1 16.7-1.2 14.6 4.2 20 13.3c5.7-9.2 13.5-12.4 16.1-12.9l1.9 2.8L587 195z" />
                    <path fill="#66bcff" d="M566.6 193.4a30.2 30.2 0 00-1.2 4c-.3 1.3.6 1.3 7.2 1.3h15.5c1.9.1 2.7-.8 1.7-4.4 5.7-6.5 15.7-13 19.4-15.3a.5.5 0 00.2-.7l-.9-1.1a.6.6 0 00-.6 0c-7.6 5-13.9 9.5-19.8 15.4-8-9.2-14.4-12.8-19.7-15.2a1.5 1.5 0 00-.9-.2l-20 1a1.1 1.1 0 00-1.1 1.1.9.9 0 00.6.9c13.1 5.7 19.6 13.2 19.6 13.2z" />
                    <path fill="#8cd9ff" d="M566.6 193.4a30.2 30.2 0 00-1.2 4c-.3 1.3.6 1.3 7.2 1.3h13c-1.7-.1-2-.5.1-4.7-2.6-3.9-8.6-9.6-17.6-14.5l-21.1.7c13.1 5.7 19.6 13.2 19.6 13.2z" />
                    <path fill="none" stroke="#000" strokeLinecap="round" strokeMiterlimit={10} strokeWidth="1.521" d="M588.4 190.2L588.1 192.7" />
                    <path fill="#3442d9" d="M505.7 158.6l-.6-1c-.1-.1-.4-.2-.5-.1l-1.2.7-1.5-2.5-13.3.3a8.4 8.4 0 00-3 .8 28.4 28.4 0 00-3.3 2c-3.8-3.6-8.2-5.4-10.8-5.5s-14.2 0-14.2 0l-1.7 1.7h-2.2a1 1 0 00-.9.9.7.7 0 00.4.8 53.9 53.9 0 0110.9 7.2l1.6 1.4.7.8a16.5 16.5 0 012.6 2.8s-.9 2.2-1.2 3.3c0 .2-.1.3-.1.4a.5.5 0 00.4.5 7.5 7.5 0 002.4.4l3.4.2h10.8l2.2.2c1.6.1 2.3-.5 1.7-3.7 5.2-5.1 14-10 17.3-11.8.2.6.3.4.1.2z" />
                    <g>
                        <path fill="#ffe75c" d="M543.3 128.7l-22.7 2.2a10.4 10.4 0 00-4.9 1.8c-7.6 4.9-8.9 8.4-8.9 8.4l15.3 13.1 24.6-21.4z" />
                        <path fill="#ffc619" d="M463.2 133.9l2.9-3.8s17.5-1.7 24.2-1.8 22.1 6 31.8 19.3c6.6-13.5 17.5-18.2 21.2-18.9l3.4 4.1-25.8 24.8z" />
                        <path fill="#eb459f" d="M490.7 155.3s-.9 4-1.1 5.9 1.1 2 10.9 1.9h22.7c2.8.1 3.8-1.2 1.7-6.5 7.3-9.4 20.7-19 25.8-22.4a.7.7 0 000-1l-1.4-1.6a.8.8 0 00-.9-.1c-10.2 7.4-18.7 14-26.3 22.7-13.4-13.4-23.4-18.7-31.6-22.2a3 3 0 00-1.3-.2l-29.2 1.6a1.4 1.4 0 00-1.4 1.6 1.4 1.4 0 001 1.3c20.3 8.1 31.1 19 31.1 19z" />
                        <path fill="#ff78b9" d="M490.7 155.3s-.9 4-1.1 5.9 1.1 2 10.9 1.9h19c-2.4-.1-3-.8-.7-6.8-4.4-5.7-14.3-14-28.4-21.1l-30.8 1.1c20.3 8.1 31.1 19 31.1 19z" />
                        <path fill="none" stroke="#000" strokeLinecap="round" strokeMiterlimit={10} strokeWidth="1.521" d="M522 150L522.2 151.9" />
                    </g>
                </g>
                <path fill="#6874f7" d="M1193 1115.1a15.7 15.7 0 0015.6-18.5 111.8 111.8 0 00-213.8-20.7 117.2 117.2 0 00-111.3 35.2 2.4 2.4 0 001.8 4H1193z" data-name="Layer 8" />
            </svg>
            <div className="wrapper-6URcxg">
                <div style={{opacity: 1, transform: 'scale(1) translateY(0px) translateZ(0px)'}}>
                    <div>
                        <form className="authBoxExpanded-2jqaBe authBox-hW6HRx theme-dark" method="post" action="/submit">
                            <div className="centeringWrapper-2Rs1dR">
                                <div className="flex-1xMQg5 flex-1O1GKY horizontal-1ae9ci horizontal-2EEEnY flex-1O1GKY directionRow-3v3tfG justifyStart-2NDFzi alignCenter-1dQNNs noWrap-3jynv6" style={{flex: '1 1 auto'}}>
                                    <div className="mainLoginContainer-1ddwnR">
                                        <div className="header-2C7hmc">
                                            <h3 className="title-jXR8lp marginBottom8-AtZOdT fontDisplay-1dagSA base-1x0h_U size24-RIRrxO">Welcome back!</h3>
                                            <div className="colorHeaderSecondary-3Sp3Ft size16-1P40sf">We're so excited to see you again!</div>
                                        </div>
                                        <div className="block-egJnc0 marginTop20-3TxNs6">
                                            <div className="marginBottom20-32qID7">
                                                <h5 className="colorStandard-2KCXvj size14-e6ZScH h5-18_1nd title-3sZWYQ defaultMarginh5-2mL-bP">Email or Phone Number</h5>
                                                <div className="input-cIJ7To input-1CjGeR">
                                                    <div className="outerContainer-2pDY4c hidden-2l9u-8">
                                                        <div className="container-1uOKxa" style={{width: '0px'}}>
                                                            <div className="innerContainer-20_g0H">
                                                                <div className="countryCode-2YakYv" aria-controls="popout_11" aria-expanded="false" role="button" tabIndex={0}>BD +880</div>
                                                                <div className="separator-39gxf1" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="inputWrapper-31_8H8 inputWrapper-3aw2Sf"><input className="inputDefault-_djjkz input-cIJ7To inputField-4g7rSQ" name="email" type="text" placeholder={""} aria-label="Email or Phone Number" autoComplete="off" maxLength={999} spellCheck="false" defaultValue={""} /></div>
                                                </div>
                                            </div>
                                            <div>
                                                <h5 className="colorStandard-2KCXvj size14-e6ZScH h5-18_1nd title-3sZWYQ defaultMarginh5-2mL-bP">Password</h5>
                                                <div className="inputWrapper-31_8H8"><input className="inputDefault-_djjkz input-cIJ7To" name="password" type="password" placeholder={""} aria-label="Password" autoComplete="off" maxLength={999} spellCheck="false" defaultValue={""} /></div>
                                            </div><button type="button" className="marginBottom20-32qID7 marginTop4-2BNfKC linkButton-wzh5kV button-38aScr lookLink-9FtZy- lowSaturationUnderline-3svVxy colorLink-35jkBc sizeMin-1mJd1x grow-q77ONN">
                                                <div className="contents-18-Yxp">Forgot your password?</div>
                                            </button><button type="submit" className="marginBottom8-AtZOdT button-3k0cO7 button-38aScr lookFilled-1Gx00P colorBrand-3pXr91 sizeLarge-1vSeWK fullWidth-1orjjo grow-q77ONN">
                                                <div className="contents-18-Yxp">Login</div>
                                            </button>
                                            <div className="marginTop4-2BNfKC"><span className="needAccount-23l_Wh">Need an account?</span><button type="button" className="smallRegisterLink-2LCrMe linkButton-wzh5kV button-38aScr lookLink-9FtZy- lowSaturationUnderline-3svVxy colorLink-35jkBc sizeMin-1mJd1x grow-q77ONN">
                                                    <div className="contents-18-Yxp">Register</div>
                                                </button></div>
                                        </div>
                                    </div>
                                    <div className="verticalSeparator-3huAjp" />
                                    <div className="transitionGroup-aR7y1d qrLogin-1AOZMt">
                                        <div className="measurementFill-31KKmO measurement-DMxQp7 measurementFillStatic-MZ1pNY">
                                            <div className="animatedNode-5VAmrN" style={{overflow: 'visible', opacity: 1, height: '100%', transform: 'translateX(0%)'}}>
                                                <div className="qrLoginInner-c_7ePj">
                                                    <div className="qrCodeContainer-3sXarj">
                                                        <div className="qrCode-wG6ZgU" title="https://discord.com/ra/On7GOZigqh8hzVgdkHF8jsWSMD0QUPktCpHuMbERHes" style={{padding: '8px', borderRadius: '4px', background: 'rgb(255, 255, 255)'}}><canvas style={{display: 'none'}} width={160} height={160} /><img alt="Scan me!" src="data:image/png;base64,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" style={{display: 'block'}} /></div>
                                                        <div className="qrCodeOverlay-qgtlTP">
                                                        </div>
                                                    </div>
                                                    <h3 className="title-jXR8lp marginBottom8-AtZOdT fontDisplay-1dagSA base-1x0h_U size24-RIRrxO">Log in with QR Code</h3>
                                                    <div className="colorHeaderSecondary-3Sp3Ft size16-1P40sf">Scan this with the <strong>Discord mobile app</strong> to log in instantly.</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div />
    <div />
    <div className="layerContainer-yqaFcK" />
    <div className="layerContainer-yqaFcK" />
    <div className="container-2cKKek" />
    <div style={{position: 'fixed', opacity: 0, pointerEvents: 'none'}} />
    <div className="ring-13rgEW" style={{top: '656.402px', width: '412.06px', height: '40.004px', left: '130.727px'}} />
    <div />
</div>
  );
}
