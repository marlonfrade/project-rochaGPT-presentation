import { motion } from "framer-motion";

const svgVariants = {
  background: {
    initial: {
      scale: 0,
      opacity: 0,
    },
    animate: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "tween",
      },
    },
  },
  iconLine: {
    initial: {
      pathLength: 0,
    },
    animate: {
      pathLength: 1,
      transition: {
        delay: 0.5,
        type: "tween",
      },
    },
  },
  iconCircle: {
    initial: {
      opacity: 0,
      scale: 0,
    },
    animate: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.5,
        type: "tween",
      },
    },
  },
  icon: {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        delay: 0.7,
        type: "tween",
      },
    },
  },
};

function Icon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500">
      <defs>
        <clipPath id="freepik--clip-path--inject-7">
          <rect
            width="189.09"
            height="369"
            x="155.14"
            y="85.59"
            fill="#263238"
            stroke="#263238"
            strokeLinecap="round"
            strokeLinejoin="round"
            rx="14.52"
          ></rect>
        </clipPath>
        <clipPath id="freepik--clip-path-2--inject-7">
          <path
            fill="none"
            d="M438.67 153.27H237.31V213a76.14 76.14 0 1070.75 121h130.61z"
          ></path>
        </clipPath>
        <clipPath id="freepik--clip-path-3--inject-7">
          <path
            fill="#fff"
            stroke="#263238"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M164 363s21.08-73.4 25.06-89.09 10-25.9 22.42-28.39 35.35-4.8 35.35-4.8 19.93-2 34.37-1 27.65 8.72 34.62 14 27.15 23.41 27.15 23.41l-2.49-41.84 18.18 1.49s13.2 58.28 14.94 69 1.75 15.45 0 16.69 1.25 2-14.69-3.24-34.62-12.45-44.83-15.44-11.46-3.49-11.46-3.49-25 37.62-32.95 48.83a193.42 193.42 0 00-14.52 25"
          ></path>
        </clipPath>
        <clipPath id="freepik--clip-path-4--inject-7">
          <path
            fill="#fff"
            stroke="#263238"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M262.74 218.53S258.51 231.48 255 236s-5 5.23-6.22 15.69 4.23 34.12 6 33.62 18.93-27.89 24.66-32.38 11.71-9.21 11.71-9.21-13.95-4.24-18.68-10.21a133.4 133.4 0 01-9.73-14.98z"
          ></path>
        </clipPath>
        <clipPath id="freepik--clip-path-5--inject-7">
          <path
            fill="#fff"
            stroke="#263238"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M315.79 185.41s-.74 16.69-.25 22.16 2.49 15-2 23.91-8.22 14.7-12.45 16.19-17.93-1.49-28.89-9.71-12.95-25.15-14.7-30.63.25-24.16 11.46-30.14a39.55 39.55 0 0129.39-2.74c5.99 1.99 17.44 10.96 17.44 10.96z"
          ></path>
        </clipPath>
        <clipPath id="freepik--clip-path-6--inject-7">
          <path
            fill="#263238"
            stroke="#263238"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M259.26 214.05s2.24-9.71 7.72-13.2 10.71-2.74 7.47-7.47-5-9.47 2-11.71 20.67 1.5 28.64 4.49 23.41 4 27.4-7.23c2.46-6.92-4.74-12.43-10-15.26-5.83-3.12-12.37-4.67-18.95-3.51-4 .69-7.81 2.26-11.81 2.66-6.77.69-12.74-2.45-19.49-.82a26.84 26.84 0 00-14.45 9c-6.25 7.68-8 21.63 1.47 43.05z"
          ></path>
        </clipPath>
        <clipPath id="freepik--clip-path-7--inject-7">
          <path
            fill="#fff"
            stroke="#263238"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M223.63 258.08l18.28 57.09s42-24.46 51.84-37.22 15.52-27.15 19-28.5 15.76 2 17.56 4 1.38 4.19-.8 6.25-3.42 2.35-3.42 2.35-.11 4.49-1.09 5.27-.75-.23-1 .77a7.77 7.77 0 01-1.15 3c-.72 1-1 1.52-1.69 1.79a22.92 22.92 0 01-4.45 1.38 58.62 58.62 0 01-8.18 1.5c-1.73.3-13 22.57-23.58 35.84s-44 43.7-49.25 43.86-36.09-50.78-42.7-63.29"
          ></path>
        </clipPath>
        <clipPath id="freepik--clip-path-8--inject-7">
          <path
            fill="#fff"
            stroke="#263238"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M316.71 274.24a22.92 22.92 0 004.45-1.38c.74-.27 1-.77 1.69-1.79a7.77 7.77 0 001.15-3c.22-1 .87-1.34 1.84-2.12s.22-3.92.22-3.92 1.24-.29 3.42-2.35 2.61-4.31.8-6.25-14.11-5.3-17.56-4-8.67 14.57-17.72 26.9l8.42 6.9c2.64-4.4 4.52-7.38 5.14-7.49a58.62 58.62 0 008.15-1.5z"
          ></path>
        </clipPath>
      </defs>
      <g>
        <motion.path
          variants={svgVariants.background}
          initial="initial"
          animate="animate"
          exit="initial"
          fill="#92E3A9"
          d="M35.51 215.39s-8.29 80 50.8 146.34 150.48 88.55 224.2 108.51 136.62-10.71 153.94-72.7-37-92.1-57.92-170.82S391.59 124.71 332.41 67s-165-50.81-229 14.87-67.9 133.52-67.9 133.52z"
        ></motion.path>
      </g>
      <g>
        <motion.path
          variants={svgVariants.iconLine}
          initial="initial"
          animate="animate"
          exit="initial"
          fill="none"
          stroke="#263238"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M126.72 74.92L252.52 280.44 405.38 135.63"
        ></motion.path>
        <motion.path
          variants={svgVariants.iconLine}
          initial="initial"
          animate="animate"
          exit="initial"
          fill="none"
          stroke="#263238"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M60.58 289.79L252.52 280.44 112.83 221.2"
        ></motion.path>
        <motion.path
          variants={svgVariants.iconLine}
          initial="initial"
          animate="animate"
          exit="initial"
          fill="none"
          stroke="#263238"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M283.33 50.58L254.77 285.28 429.95 320.04"
        ></motion.path>
        <motion.path
          variants={svgVariants.iconLine}
          initial="initial"
          animate="animate"
          exit="initial"
          fill="none"
          stroke="#263238"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M115.75 426.71L252.52 280.44 394.4 387.95"
        ></motion.path>
        <motion.path
          variants={svgVariants.iconCircle}
          initial="initial"
          animate="animate"
          exit="initial"
          fill="#fff"
          d="M56.31 263.8a24.4 24.4 0 1024.4 24.4 24.43 24.43 0 00-24.4-24.4z"
        ></motion.path>
        <motion.path
          variants={svgVariants.icon}
          initial="initial"
          animate="animate"
          exit="initial"
          fill="#263238"
          fillRule="evenodd"
          d="M71.25 287.57a14 14 0 00-27.91-.25v.61a13.77 13.77 0 002 7.16l-2.52 7.43 7.74-2.46a14 14 0 0020.71-12.13c-.01-.12-.01-.24-.02-.36zm-14 12a11.74 11.74 0 01-6.46-1.93l-4.51 1.44 1.47-4.33a11.5 11.5 0 01-2.24-6.83 10.55 10.55 0 01.06-1.13A11.75 11.75 0 0169 287v.91a11.72 11.72 0 01-11.71 11.67z"
        ></motion.path>
        <motion.path
          variants={svgVariants.icon}
          initial="initial"
          animate="animate"
          exit="initial"
          fill="#263238"
          fillRule="evenodd"
          d="M63.7 290.72c-.35-.17-2-1-2.35-1.1s-.54-.17-.77.17-.89 1.1-1.08 1.33-.4.25-.75.08a9.18 9.18 0 01-2.75-1.69 9.93 9.93 0 01-1.9-2.34c-.2-.34 0-.53.15-.7s.34-.39.51-.59l.13-.16a3.13 3.13 0 00.21-.41.61.61 0 000-.59c-.09-.17-.77-1.85-1.06-2.53s-.57-.56-.77-.56h-.66a1.24 1.24 0 00-.91.42 3.8 3.8 0 00-1.2 2.84 4.19 4.19 0 00.18 1.16 7.64 7.64 0 001.22 2.35c.17.22 2.37 3.77 5.85 5.13s3.48.91 4.11.85a3.44 3.44 0 002.31-1.62 2.91 2.91 0 00.2-1.61c-.11-.15-.37-.26-.67-.43z"
        ></motion.path>
        <motion.path
          variants={svgVariants.iconCircle}
          initial="initial"
          animate="animate"
          exit="initial"
          fill="#fff"
          d="M121 46.64a24.41 24.41 0 000 48.81 24.41 24.41 0 100-48.81z"
        ></motion.path>
        <motion.path
          variants={svgVariants.icon}
          initial="initial"
          animate="animate"
          exit="initial"
          fill="#263238"
          d="M136.48 63.22a4 4 0 00-2.85-2.88c-2.53-.68-12.64-.68-12.64-.68s-10.11 0-12.63.68a4.06 4.06 0 00-2.86 2.88 46.09 46.09 0 000 15.66 4.08 4.08 0 002.86 2.88c2.52.68 12.63.68 12.63.68s10.11 0 12.64-.68a4.06 4.06 0 002.85-2.88 45.42 45.42 0 000-15.66z"
        ></motion.path>
        <motion.path
          variants={svgVariants.icon}
          initial="initial"
          animate="animate"
          exit="initial"
          fill="#fff"
          d="M117.69 75.86L117.69 66.24 126.14 71.05 117.69 75.86z"
        ></motion.path>
        <motion.path
          variants={svgVariants.iconCircle}
          initial="initial"
          animate="animate"
          exit="initial"
          fill="#fff"
          d="M117.53 396a32 32 0 1032 32 32 32 0 00-32-32z"
        ></motion.path>
        <motion.path
          variants={svgVariants.icon}
          initial="initial"
          animate="animate"
          exit="initial"
          fill="#263238"
          d="M112.14 448.52h8.28v-20.73h5.77l.62-6.94h-6.39v-4c0-1.64.32-2.28 1.91-2.28h4.48v-7.21h-5.73c-6.16 0-8.94 2.72-8.94 7.91v5.53h-4.31v7h4.31z"
        ></motion.path>
        <motion.path
          variants={svgVariants.iconCircle}
          initial="initial"
          animate="animate"
          exit="initial"
          fill="#fff"
          d="M395.26 364.11a24.41 24.41 0 1024.4 24.4 24.43 24.43 0 00-24.4-24.4z"
        ></motion.path>
        <motion.path
          variants={svgVariants.icon}
          initial="initial"
          animate="animate"
          exit="initial"
          fill="#263238"
          d="M395.26 376.86c3.8 0 4.25 0 5.75.08a7.93 7.93 0 012.64.49 4.55 4.55 0 011.63 1.06 4.34 4.34 0 011.06 1.64 7.62 7.62 0 01.49 2.64c.07 1.5.09 2 .09 5.74s0 4.25-.09 5.75a7.62 7.62 0 01-.49 2.64 4.23 4.23 0 01-1.06 1.63 4.45 4.45 0 01-1.63 1.07 7.93 7.93 0 01-2.64.49c-1.5.07-1.95.08-5.75.08s-4.25 0-5.75-.08a8 8 0 01-2.64-.49 4.45 4.45 0 01-1.63-1.07 4.23 4.23 0 01-1.06-1.63 7.62 7.62 0 01-.49-2.64c-.07-1.5-.09-1.95-.09-5.75s0-4.24.09-5.74a7.62 7.62 0 01.49-2.64 4.34 4.34 0 011.06-1.64 4.55 4.55 0 011.63-1.06 8 8 0 012.64-.49c1.5-.07 1.95-.08 5.75-.08m0-2.56c-3.86 0-4.35 0-5.86.08a10.43 10.43 0 00-3.4.62 7.26 7.26 0 00-4.16 4.16 10.54 10.54 0 00-.66 3.45c-.07 1.52-.09 2-.09 5.86s0 4.35.09 5.87a10.54 10.54 0 00.66 3.45A7.26 7.26 0 00386 402a10.43 10.43 0 003.45.66c1.51.07 2 .08 5.86.08s4.35 0 5.86-.08a10.43 10.43 0 003.45-.66 7.26 7.26 0 004.16-4.16 10.54 10.54 0 00.66-3.45c.07-1.52.09-2 .09-5.87s0-4.34-.09-5.86a10.54 10.54 0 00-.66-3.45 7.26 7.26 0 00-4.16-4.16 10.43 10.43 0 00-3.45-.66c-1.51-.07-2-.08-5.86-.08"
        ></motion.path>
        <motion.path
          variants={svgVariants.icon}
          initial="initial"
          animate="animate"
          exit="initial"
          fill="#263238"
          d="M395.26 381.21a7.31 7.31 0 107.3 7.3 7.3 7.3 0 00-7.3-7.3m0 12a4.74 4.74 0 114.74-4.74 4.74 4.74 0 01-4.74 4.74M404.56 380.92a1.71 1.71 0 11-1.71-1.7 1.71 1.71 0 011.71 1.7"
        ></motion.path>
        <motion.path
          variants={svgVariants.iconCircle}
          initial="initial"
          animate="animate"
          exit="initial"
          fill="#fff"
          stroke="#fff"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M404.18 169.64h0a37 37 0 01-37-37h0a37 37 0 0137-37h0a37 37 0 0137 37h0a37 37 0 01-37 37z"
        ></motion.path>
        <motion.path
          variants={svgVariants.icon}
          initial="initial"
          animate="animate"
          exit="initial"
          fill="#263238"
          d="M384.48 145.05a22.9 22.9 0 0012.39 3.63c15 0 23.49-12.68 23-24.05a16.68 16.68 0 004-4.18 16.11 16.11 0 01-4.64 1.27 8.11 8.11 0 003.55-4.47 16.25 16.25 0 01-5.13 2 8.09 8.09 0 00-13.78 7.37 22.92 22.92 0 01-16.66-8.44 8.09 8.09 0 002.5 10.79 8.11 8.11 0 01-3.66-1 8.1 8.1 0 006.48 8 7.94 7.94 0 01-3.64.13 8.08 8.08 0 007.55 5.62 16.3 16.3 0 01-11.96 3.33z"
        ></motion.path>
        <motion.path
          variants={svgVariants.iconCircle}
          initial="initial"
          animate="animate"
          exit="initial"
          fill="gray"
          d="M114.15 200.73A19.27 19.27 0 10133.42 220a19.29 19.29 0 00-19.27-19.27z"
        ></motion.path>
        <motion.path
          variants={svgVariants.icon}
          initial="initial"
          animate="animate"
          exit="initial"
          fill="#fff"
          d="M104.29 214.95H108.53V228.64H104.29z"
        ></motion.path>
        <motion.path
          variants={svgVariants.icon}
          initial="initial"
          animate="animate"
          exit="initial"
          fill="#fff"
          d="M106.39 213.16a2.53 2.53 0 10-2.51-2.53 2.52 2.52 0 002.51 2.53zM115.31 221.46c0-1.93.88-3.07 2.58-3.07s2.3 1.1 2.3 3.07v7.18h4.22V220c0-3.66-2.08-5.44-5-5.44a4.76 4.76 0 00-4.12 2.27V215h-4.07v13.69h4.07z"
        ></motion.path>
        <motion.path
          variants={svgVariants.iconCircle}
          initial="initial"
          animate="animate"
          exit="initial"
          fill="gray"
          d="M428.94 337.34a20 20 0 01-20-20 20 20 0 0120-20 20 20 0 0120 20 20 20 0 01-20 20z"
        ></motion.path>
        <motion.path
          variants={svgVariants.icon}
          initial="initial"
          animate="animate"
          exit="initial"
          fill="#fff"
          d="M426 324.92a3.83 3.83 0 001.59-.7 3.91 3.91 0 001-1.11 4.06 4.06 0 00.63-2.23 3.77 3.77 0 00-.55-2.06 3.12 3.12 0 00-1.62-1.24 3.34 3.34 0 001.07-.79 3.15 3.15 0 00.65-2.07 3.57 3.57 0 00-.65-2.14 4.27 4.27 0 00-3.63-1.49h-6.78v14H424a9.51 9.51 0 002-.17zm-5.5-11.4h3.05a5.21 5.21 0 011.66.22 1.25 1.25 0 01.75 1.29 1.34 1.34 0 01-.57 1.24 2.82 2.82 0 01-1.48.34h-3.41zm0 9.16v-3.74h3.45a3.48 3.48 0 011.4.23 1.52 1.52 0 01.9 1.51 1.77 1.77 0 01-.93 1.75 3.35 3.35 0 01-1.42.25zM431.53 324.19a5.65 5.65 0 003.65 1.27 5 5 0 003.91-1.51 3.33 3.33 0 001-1.87h-2.77a2.27 2.27 0 01-.55.71 2.3 2.3 0 01-1.51.48 2.79 2.79 0 01-1.5-.39 2.49 2.49 0 01-1.08-2.19h7.55a13 13 0 00-.08-2.06 5.28 5.28 0 00-.83-2.15 4.25 4.25 0 00-1.79-1.53 6 6 0 00-2.44-.49 5 5 0 00-3.71 1.44A5.64 5.64 0 00430 320a5 5 0 001.53 4.19zm1.94-6.9a2.16 2.16 0 011.62-.59 2.41 2.41 0 011.61.56 2.27 2.27 0 01.72 1.64h-4.67a2.8 2.8 0 01.72-1.61z"
        ></motion.path>
        <motion.path
          variants={svgVariants.icon}
          initial="initial"
          animate="animate"
          exit="initial"
          fill="#fff"
          d="M431.86 311.89H437.96000000000004V313.31H431.86z"
        ></motion.path>
        <motion.path
          variants={svgVariants.iconCircle}
          initial="initial"
          animate="animate"
          exit="initial"
          fill="gray"
          d="M283.33 70.61a20 20 0 01-20-20 20 20 0 0120-20 20 20 0 0120 20 20 20 0 01-20 20z"
        ></motion.path>
        <motion.path
          variants={svgVariants.icon}
          initial="initial"
          animate="animate"
          exit="initial"
          fill="#fff"
          fillRule="evenodd"
          d="M294.94 56.46a2.65 2.65 0 00-.75-.27 6.47 6.47 0 01-3.09-2.25 6.89 6.89 0 01-1.1-1.87.9.9 0 010-.79 2.16 2.16 0 011.06-.67 4.16 4.16 0 001.43-.74.77.77 0 00.21-.27.24.24 0 000-.09.5.5 0 000-.38 1.13 1.13 0 00-.5-.48 1 1 0 00-.86-.08 4.35 4.35 0 01-.76.22 1.93 1.93 0 01-.87 0v-.19-1.63a15.13 15.13 0 00-.06-2.6 5.84 5.84 0 00-2.44-3.62 6.16 6.16 0 00-3-1.06h-1.07a6.26 6.26 0 00-6.06 3.88 7.14 7.14 0 00-.32 3.16 16.31 16.31 0 01.05 2.08 2.93 2.93 0 01-1 0c-.24 0-.5-.14-.79-.22a1 1 0 00-.77.18.79.79 0 00-.42.63v.06a.69.69 0 00.26.42l.27.2a7.94 7.94 0 001.61.7 1.16 1.16 0 01.72.68 2 2 0 01-.29 1.24 7.51 7.51 0 01-2.4 2.75 6 6 0 01-1.8.82 1.05 1.05 0 00-.64.37v.07a.53.53 0 00.1.5.79.79 0 00.27.21 6.38 6.38 0 001.65.58 5 5 0 011 .26l.11.28c.1.3.14.64.25 1a.31.31 0 00.23.2.51.51 0 00.39 0 6.42 6.42 0 012.61-.09 10.17 10.17 0 012.5 1.35 4.08 4.08 0 002 .72 13 13 0 001.66 0 3.09 3.09 0 001.31-.44c.89-.51 1.67-1.11 2.54-1.5a4.21 4.21 0 011-.11 12.85 12.85 0 012.15.1.09.09 0 00.07 0 .4.4 0 00.25-.13.38.38 0 00.07-.15c0-.08 0-.11 0 0a.14.14 0 000-.06 2.94 2.94 0 01.42-1 .58.58 0 01.44-.14 7.46 7.46 0 001.7-.48 1.5 1.5 0 00.69-.47.49.49 0 00-.14-.7z"
        ></motion.path>
      </g>
      <motion.g
        variants={svgVariants.background}
        initial="initial"
        animate="animate"
        exit="initial"
      >
        <rect
          width="189.09"
          height="369"
          x="155.14"
          y="85.59"
          fill="#263238"
          rx="14.52"
        ></rect>
        <g clipPath="url(#freepik--clip-path--inject-7)">
          <path
            fill="#fff"
            d="M171.43 85.59a16.29 16.29 0 00-16.29 16.29v336.41a16.26 16.26 0 005.84 12.5L271.3 85.59z"
            opacity="0.2"
          ></path>
          <path
            fill="none"
            stroke="#fff"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M256.1 443.91a6.43 6.43 0 10-6.42 6.43 6.42 6.42 0 006.42-6.43z"
          ></path>
        </g>
        <rect
          width="189.09"
          height="369"
          x="155.14"
          y="85.59"
          fill="none"
          stroke="#263238"
          strokeLinecap="round"
          strokeLinejoin="round"
          rx="14.52"
        ></rect>
        <path
          fill="#92E3A9"
          stroke="#263238"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M163.54 110.65H335.81V432.69000000000005H163.54z"
        ></path>
        <circle cx="246.97" cy="288.52" r="78.99" fill="#263238"></circle>
        <path
          fill="#fff"
          d="M169.5 149.3H330.55V185.97000000000003H169.5z"
        ></path>
        <path fill="#fff" d="M169.5 390.07H330.55V426.74H169.5z"></path>
        <path
          fill="#fff"
          d="M169.5 377.32H330.55V378.90999999999997H169.5z"
        ></path>
        <path fill="#fff" d="M169.5 384.49H330.55V386.08H169.5z"></path>
        <path
          fill="none"
          stroke="#263238"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="0.821"
          d="M315.67 113.99H329.95V121.82H315.67z"
        ></path>
        <path
          fill="#263238"
          stroke="#263238"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="0.725"
          d="M315.67 113.99H326.81V121.82H315.67z"
        ></path>
        <path
          fill="#263238"
          stroke="#263238"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="0.725"
          d="M329.92 116.18H331.93V119.63000000000001H329.92z"
        ></path>
        <path
          fill="#263238"
          stroke="#263238"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="0.883"
          d="M167.42 116.42H170.04V120.91H167.42z"
        ></path>
        <path
          fill="#263238"
          stroke="#263238"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="0.883"
          d="M171.54 114.84H174.16V120.91H171.54z"
        ></path>
        <path
          fill="#263238"
          stroke="#263238"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="0.883"
          d="M175.65 112.98H178.27V120.91H175.65z"
        ></path>
        <path fill="#263238" d="M166.32 126.17H331.74V138.61H166.32z"></path>
      </motion.g>
      <g clipPath="url(#freepik--clip-path-2--inject-7)">
        <motion.path
          variants={svgVariants.icon}
          initial="initial"
          animate="animate"
          exit="initial"
          fill="#fff"
          d="M164 363s21.08-73.4 25.06-89.09 10-25.9 22.42-28.39 35.35-4.8 35.35-4.8 19.93-2 34.37-1 27.65 8.72 34.62 14 27.15 23.41 27.15 23.41l-2.49-41.84 18.18 1.49s13.2 58.28 14.94 69 1.75 15.45 0 16.69 1.25 2-14.69-3.24-34.62-12.45-44.83-15.44-11.46-3.49-11.46-3.49-25 37.62-32.95 48.83a193.42 193.42 0 00-14.52 25"
        ></motion.path>
        <g clipPath="url(#freepik--clip-path-3--inject-7)">
          <motion.path
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.2, transition: { delay: 0.6 } }}
            d="M373.57 322.39c1.75-1.24 1.75-6 0-16.69-1-6.39-6.15-29.7-10.11-47.48 1.57 21 2.18 41.52-1 45.35-7 8.28-17.23-2.6-17.23-2.6l-1.95-16.14s-34.86-25.71-47.94-30.07-27-5.23-40.53-.87-24.84 8.72-33.12 17-37 74.52-37 74.52l-3.25 19.67 73.68 8.92a193.42 193.42 0 0114.52-25c8-11.21 32.95-48.83 32.95-48.83s1.25.5 11.46 3.49 28.89 10.21 44.83 15.44 12.95 4.54 14.69 3.29z"
          ></motion.path>
        </g>
        <motion.path
          variants={svgVariants.icon}
          initial="initial"
          animate="animate"
          exit="initial"
          fill="none"
          stroke="#263238"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M164 363s21.08-73.4 25.06-89.09 10-25.9 22.42-28.39 35.35-4.8 35.35-4.8 19.93-2 34.37-1 27.65 8.72 34.62 14 27.15 23.41 27.15 23.41l-2.49-41.84 18.18 1.49s13.2 58.28 14.94 69 1.75 15.45 0 16.69 1.25 2-14.69-3.24-34.62-12.45-44.83-15.44-11.46-3.49-11.46-3.49-25 37.62-32.95 48.83a193.42 193.42 0 00-14.52 25"
        ></motion.path>
        <motion.path
          variants={svgVariants.icon}
          initial="initial"
          animate="animate"
          exit="initial"
          fill="none"
          stroke="#263238"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M309.7 288.67L302.59 300.23 323.63 288.67"
        ></motion.path>
        <motion.path
          variants={svgVariants.icon}
          initial="initial"
          animate="animate"
          exit="initial"
          fill="#fff"
          stroke="#263238"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M342.94 277.06s1 20.67 2.24 23.91 6.73 4.73 6.73 4.73"
        ></motion.path>
        <motion.path
          variants={svgVariants.icon}
          initial="initial"
          animate="animate"
          exit="initial"
          fill="#263238"
          d="M233.19 276.43s-2.72 6.45-1.36 6.45 10.19-3.39 14.27-3.39 8.49 7.13 8.49 7.13 11.89-8.83 15.63-7.81a13.64 13.64 0 014.93 2.92 1.66 1.66 0 002.75-1.19c.07-1.83.13-4.33.13-7.51 0-7.47-6.45-27.85-18.34-28.87s-13.93 7.47-19 17.66-7.5 14.61-7.5 14.61z"
        ></motion.path>
        <motion.path
          variants={svgVariants.icon}
          initial="initial"
          animate="animate"
          exit="initial"
          fill="#fff"
          stroke="#263238"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M258.76 232.48S247.3 234 242.07 239s-3.49 12.95-6.23 20.17-7.47 21.92-5 21.67 11.21-7.22 13.7-5.48 8.22 9 9.22 9.46 13.7-8.71 15.44-9.71 10.21 10 10.46 7 .75-20.67-1-31.38-14.17-18-19.9-18.25z"
        ></motion.path>
        <motion.path
          variants={svgVariants.icon}
          initial="initial"
          animate="animate"
          exit="initial"
          fill="#fff"
          d="M262.74 218.53S258.51 231.48 255 236s-5 5.23-6.22 15.69 4.23 34.12 6 33.62 18.93-27.89 24.66-32.38 11.71-9.21 11.71-9.21-13.95-4.24-18.68-10.21a133.4 133.4 0 01-9.73-14.98z"
        ></motion.path>
        <g clipPath="url(#freepik--clip-path-4--inject-7)">
          <motion.path
            variants={svgVariants.icon}
            initial="initial"
            animate="animate"
            exit="initial"
            d="M281.91 251c4.85-3.81 9.23-7.27 9.23-7.27s-13.95-4.24-18.68-10.21a133.4 133.4 0 01-9.72-14.95 124.9 124.9 0 01-5.07 12.88c2.11 5.91 7.99 15.55 24.24 19.55z"
            opacity="0.2"
          ></motion.path>
          <motion.path
            variants={svgVariants.icon}
            initial="initial"
            animate="animate"
            exit="initial"
            fill="#263238"
            d="M272.46 233.48a133.4 133.4 0 01-9.72-14.95s-1.42 4.35-3.29 8.88c1.55 4.49 4.66 11.17 10.23 15.11a46.38 46.38 0 0014.76 6.48l6.7-5.28s-13.95-4.27-18.68-10.24z"
          ></motion.path>
        </g>
        <motion.path
          variants={svgVariants.icon}
          initial="initial"
          animate="animate"
          exit="initial"
          fill="none"
          stroke="#263238"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M262.74 218.53S258.51 231.48 255 236s-5 5.23-6.22 15.69 4.23 34.12 6 33.62 18.93-27.89 24.66-32.38 11.71-9.21 11.71-9.21-13.95-4.24-18.68-10.21a133.4 133.4 0 01-9.73-14.98z"
        ></motion.path>
        <motion.path
          variants={svgVariants.icon}
          initial="initial"
          animate="animate"
          exit="initial"
          fill="#fff"
          d="M315.79 185.41s-.74 16.69-.25 22.16 2.49 15-2 23.91-8.22 14.7-12.45 16.19-17.93-1.49-28.89-9.71-12.95-25.15-14.7-30.63.25-24.16 11.46-30.14a39.55 39.55 0 0129.39-2.74c5.99 1.99 17.44 10.96 17.44 10.96z"
        ></motion.path>
        <g clipPath="url(#freepik--clip-path-5--inject-7)">
          <motion.path
            variants={svgVariants.icon}
            initial="initial"
            animate="animate"
            exit="initial"
            d="M269 177.19a16.92 16.92 0 00-4.29 3.31l5.77 4.1s7.41-7.41 24 3.05c8.56 5.4 15.94 6.27 21.09 5.84.12-4.44.28-8.08.28-8.08s-11.45-9-17.43-11a39.55 39.55 0 00-29.42 2.78z"
            opacity="0.2"
          ></motion.path>
        </g>
        <motion.path
          variants={svgVariants.icon}
          initial="initial"
          animate="animate"
          exit="initial"
          fill="none"
          stroke="#263238"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M315.79 185.41s-.74 16.69-.25 22.16 2.49 15-2 23.91-8.22 14.7-12.45 16.19-17.93-1.49-28.89-9.71-12.95-25.15-14.7-30.63.25-24.16 11.46-30.14a39.55 39.55 0 0129.39-2.74c5.99 1.99 17.44 10.96 17.44 10.96z"
        ></motion.path>
        <motion.path
          variants={svgVariants.icon}
          initial="initial"
          animate="animate"
          exit="initial"
          fill="#263238"
          d="M292.27 207.92c0 1.77-.69 3.21-1.54 3.21s-1.54-1.44-1.54-3.21.69-3.22 1.54-3.22 1.54 1.44 1.54 3.22zM310.46 209.59c0 1.78-.69 3.22-1.54 3.22s-1.54-1.44-1.54-3.22.69-3.21 1.54-3.21 1.54 1.44 1.54 3.21z"
        ></motion.path>
        <motion.path
          variants={svgVariants.icon}
          initial="initial"
          animate="animate"
          exit="initial"
          fill="none"
          stroke="#263238"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M305.58 204.84s-4.73 4.73-3.49 6.72 4.14 3.11 3.24 6-7.47 4-9.71 0"
        ></motion.path>
        <motion.path
          variants={svgVariants.icon}
          initial="initial"
          animate="animate"
          exit="initial"
          fill="#263238"
          stroke="#263238"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M281.42 220.28a20.55 20.55 0 0015.2 7.47s-10.22 6.72-14.7 6-.5-13.47-.5-13.47z"
        ></motion.path>
        <motion.path
          variants={svgVariants.icon}
          initial="initial"
          animate="animate"
          exit="initial"
          fill="none"
          stroke="#263238"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M283.81 198.42s4.34-6 13-2.27M307.32 198.61s5.48-1.26 7.47 4"
        ></motion.path>
        <motion.path
          variants={svgVariants.icon}
          initial="initial"
          animate="animate"
          exit="initial"
          fill="#263238"
          d="M259.26 214.05s2.24-9.71 7.72-13.2 10.71-2.74 7.47-7.47-5-9.47 2-11.71 20.67 1.5 28.64 4.49 23.41 4 27.4-7.23c2.46-6.92-4.74-12.43-10-15.26-5.83-3.12-12.37-4.67-18.95-3.51-4 .69-7.81 2.26-11.81 2.66-6.77.69-12.74-2.45-19.49-.82a26.84 26.84 0 00-14.45 9c-6.25 7.68-8 21.63 1.47 43.05z"
        ></motion.path>
        <g
          fill="none"
          stroke="gray"
          strokeLinecap="round"
          strokeLinejoin="round"
          clipPath="url(#freepik--clip-path-6--inject-7)"
        >
          <motion.path
            variants={svgVariants.icon}
            initial="initial"
            animate="animate"
            exit="initial"
            d="M316.93 159.69s12.94 7 3.88 18.63-17.59 3.63-39.08-.51-34.16 6.47-34.16 6.47M249.38 197s4.14-8 17.6-10.35 14.24-.26 14.24-.26"
          ></motion.path>
        </g>
        <motion.path
          variants={svgVariants.icon}
          initial="initial"
          animate="animate"
          exit="initial"
          fill="none"
          stroke="#263238"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M259.26 214.05s2.24-9.71 7.72-13.2 10.71-2.74 7.47-7.47-5-9.47 2-11.71 20.67 1.5 28.64 4.49 23.41 4 27.4-7.23c2.46-6.92-4.74-12.43-10-15.26-5.83-3.12-12.37-4.67-18.95-3.51-4 .69-7.81 2.26-11.81 2.66-6.77.69-12.74-2.45-19.49-.82a26.84 26.84 0 00-14.45 9c-6.25 7.68-8 21.63 1.47 43.05z"
        ></motion.path>
        <motion.path
          variants={svgVariants.icon}
          initial="initial"
          animate="animate"
          exit="initial"
          fill="#fff"
          stroke="#263238"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M264.89 210.51s-6.46-14.79-12.15-7.09 4.62 17.44 12.36 15.55M335.22 208.82s-4.23-.5-5 3-1.5 9 0 9 4.23-.74 5.23-3 2-9.22 2-9.22z"
        ></motion.path>
        <motion.path
          variants={svgVariants.icon}
          initial="initial"
          animate="animate"
          exit="initial"
          fill="#fff"
          stroke="#263238"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M341.94 207.57s-6-1-6.72 1.25-1.74 10-1 10.21 5.23-1.74 5.23-1.74z"
        ></motion.path>
        <motion.path
          variants={svgVariants.icon}
          initial="initial"
          animate="animate"
          exit="initial"
          fill="#fff"
          stroke="#263238"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M349.91 208.07s-7-4.48-8.71-2.24-1.75 11.46-1.75 11.46a3.81 3.81 0 003.49-1c1.25-1.49 2.74-3.48 2.74-3.48s5 1.24 5.73 1 2.49 0 2-2.49-3.5-3.25-3.5-3.25z"
        ></motion.path>
        <motion.path
          variants={svgVariants.icon}
          initial="initial"
          animate="animate"
          exit="initial"
          fill="#fff"
          stroke="#263238"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M359.38 212.56a23.44 23.44 0 01-7.47-8.47c-2.49-5.23-3.74-5-5-2.74s.24 4.48 1.24 6.47 5.23 6.73 5.23 6.73z"
        ></motion.path>
        <motion.path
          variants={svgVariants.icon}
          initial="initial"
          animate="animate"
          exit="initial"
          fill="#92E3A9"
          stroke="#263238"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M314.58 247.4s-3.61 30.83-3.05 32.5 6.66 3.61 8.05 2.5.56-3.33 0-4.72 4.72-27.22 4.72-27.22z"
        ></motion.path>
        <motion.path
          variants={svgVariants.icon}
          initial="initial"
          animate="animate"
          exit="initial"
          fill="#fff"
          d="M223.63 258.08l18.28 57.09s42-24.46 51.84-37.22 15.52-27.15 19-28.5 15.76 2 17.56 4 1.38 4.19-.8 6.25-3.42 2.35-3.42 2.35-.11 4.49-1.09 5.27-.75-.23-1 .77a7.77 7.77 0 01-1.15 3c-.72 1-1 1.52-1.69 1.79a22.92 22.92 0 01-4.45 1.38 58.62 58.62 0 01-8.18 1.5c-1.73.3-13 22.57-23.58 35.84s-44 43.7-49.25 43.86-36.09-50.78-42.7-63.29"
        ></motion.path>
        <g clipPath="url(#freepik--clip-path-7--inject-7)">
          <motion.path
            variants={svgVariants.icon}
            initial="initial"
            animate="animate"
            exit="initial"
            d="M322.85 271.07a7.77 7.77 0 001.15-3c.22-1 0 0 1-.77s1.09-5.27 1.09-5.27 1.24-.29 3.42-2.35 2.61-4.31.8-6.25-14.11-5.3-17.56-4c-.9.35-2 1.6-3.2 3.48 1.83 3 4 4.83 2 10.07-3 8-10 18-16 26.5s-56 55.5-62 54.5c-4.9-.82-19.13-18-24.19-24.23 10.84 17.39 23.24 35.76 26.39 35.67 5.23-.16 38.69-30.58 49.25-43.86s21.8-35.56 23.53-35.82a58.62 58.62 0 008.18-1.5 22.92 22.92 0 004.45-1.38c.74-.27.97-.77 1.69-1.79z"
            opacity="0.2"
          ></motion.path>
        </g>
        <motion.path
          variants={svgVariants.icon}
          initial="initial"
          animate="animate"
          exit="initial"
          fill="none"
          stroke="#263238"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M223.63 258.08l18.28 57.09s42-24.46 51.84-37.22 15.52-27.15 19-28.5 15.76 2 17.56 4 1.38 4.19-.8 6.25-3.42 2.35-3.42 2.35-.11 4.49-1.09 5.27-.75-.23-1 .77a7.77 7.77 0 01-1.15 3c-.72 1-1 1.52-1.69 1.79a22.92 22.92 0 01-4.45 1.38 58.62 58.62 0 01-8.18 1.5c-1.73.3-13 22.57-23.58 35.84s-44 43.7-49.25 43.86-36.09-50.78-42.7-63.29M241.91 315.17s-4.79.2-8.85 13"
        ></motion.path>
        <motion.path
          variants={svgVariants.icon}
          initial="initial"
          animate="animate"
          exit="initial"
          fill="#fff"
          d="M316.71 274.24a22.92 22.92 0 004.45-1.38c.74-.27 1-.77 1.69-1.79a7.77 7.77 0 001.15-3c.22-1 .87-1.34 1.84-2.12s.22-3.92.22-3.92 1.24-.29 3.42-2.35 2.61-4.31.8-6.25-14.11-5.3-17.56-4-8.67 14.57-17.72 26.9l8.42 6.9c2.64-4.4 4.52-7.38 5.14-7.49a58.62 58.62 0 008.15-1.5z"
        ></motion.path>
        <g clipPath="url(#freepik--clip-path-8--inject-7)">
          <motion.path
            variants={svgVariants.icon}
            initial="initial"
            animate="animate"
            exit="initial"
            d="M322.85 271.07a7.77 7.77 0 001.15-3c.22-1 0 0 1-.77s1.09-5.27 1.09-5.27 1.24-.29 3.42-2.35 2.61-4.31.8-6.25-14.11-5.3-17.56-4c-.9.35-2 1.6-3.2 3.48 1.83 3 4 4.83 2 10.07-3 8-10 18-16 26.5s-56 55.5-62 54.5c-4.9-.82-19.13-18-24.19-24.23 10.84 17.39 23.24 35.76 26.39 35.67 5.23-.16 38.69-30.58 49.25-43.86s21.8-35.56 23.53-35.82a58.62 58.62 0 008.18-1.5 22.92 22.92 0 004.45-1.38c.74-.27.97-.77 1.69-1.79z"
            opacity="0.2"
          ></motion.path>
        </g>
        <motion.path
          variants={svgVariants.icon}
          initial="initial"
          animate="animate"
          exit="initial"
          fill="none"
          stroke="#263238"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M316.71 274.24a22.92 22.92 0 004.45-1.38c.74-.27 1-.77 1.69-1.79a7.77 7.77 0 001.15-3c.22-1 .87-1.34 1.84-2.12s.22-3.92.22-3.92 1.24-.29 3.42-2.35 2.61-4.31.8-6.25-14.11-5.3-17.56-4-8.67 14.57-17.72 26.9l8.42 6.9c2.64-4.4 4.52-7.38 5.14-7.49a58.62 58.62 0 008.15-1.5z"
        ></motion.path>
        <motion.path
          variants={svgVariants.icon}
          initial="initial"
          animate="animate"
          exit="initial"
          fill="#92E3A9"
          stroke="#263238"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M305.83 227.25c-2.75 0-5 4-5 8.84s2.23 8.84 5 8.84l61 18.43v-55.29z"
        ></motion.path>
        <motion.path
          variants={svgVariants.icon}
          initial="initial"
          animate="animate"
          exit="initial"
          fill="none"
          stroke="#263238"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M340.15 219.89L316.35 226.74"
        ></motion.path>
        <motion.path
          variants={svgVariants.icon}
          initial="initial"
          animate="animate"
          exit="initial"
          fill="none"
          stroke="#263238"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M348.11 217.6L343.13 219.04"
        ></motion.path>
        <motion.path
          variants={svgVariants.icon}
          initial="initial"
          animate="animate"
          exit="initial"
          fill="#263238"
          stroke="#263238"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M313.64 224.79l-7.81 2.46c-2.75 0-5 4-5 8.84s2.23 8.84 5 8.84l7.05 2.13a24.32 24.32 0 01.76-22.27z"
        ></motion.path>
        <motion.ellipse
          variants={svgVariants.icon}
          initial="initial"
          animate="animate"
          exit="initial"
          cx="372.08"
          cy="236.09"
          fill="#d6d6d6"
          stroke="#263238"
          strokeLinecap="round"
          strokeLinejoin="round"
          rx="20.92"
          ry="37.13"
        ></motion.ellipse>
        <motion.path
          variants={svgVariants.icon}
          initial="initial"
          animate="animate"
          exit="initial"
          fill="#d6d6d6"
          stroke="#263238"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M372.08 227.85L352.15 222.52 350.41 236.72 352.65 251.16 372.08 244.33 372.83 228.25"
        ></motion.path>
        <motion.path
          variants={svgVariants.icon}
          initial="initial"
          animate="animate"
          exit="initial"
          fill="#263238"
          stroke="#263238"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M372.08 195.62c-12.59 0-22.8 18.12-22.8 40.47s10.21 40.47 22.8 40.47 22.8-18.12 22.8-40.47-10.21-40.47-22.8-40.47zm.56 75.2c-10.49 0-19-15.55-19-34.73s8.51-34.72 19-34.72 19 15.54 19 34.72-8.5 34.73-19 34.73z"
        ></motion.path>
        <motion.ellipse
          variants={svgVariants.icon}
          initial="initial"
          animate="animate"
          exit="initial"
          cx="372.08"
          cy="236.09"
          fill="#92E3A9"
          stroke="#263238"
          strokeLinecap="round"
          strokeLinejoin="round"
          rx="4.64"
          ry="8.24"
        ></motion.ellipse>
        <motion.path
          variants={svgVariants.icon}
          initial="initial"
          animate="animate"
          exit="initial"
          fill="none"
          stroke="#263238"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M430.88 194.11L435.51 192.67"
        ></motion.path>
        <motion.path
          variants={svgVariants.icon}
          initial="initial"
          animate="animate"
          exit="initial"
          fill="none"
          stroke="#263238"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M397.73 204.37L425.17 195.87"
        ></motion.path>
        <motion.path
          variants={svgVariants.icon}
          initial="initial"
          animate="animate"
          exit="initial"
          fill="none"
          stroke="#263238"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M401.33 234.05L426.51 234.95"
        ></motion.path>
        <motion.path
          variants={svgVariants.icon}
          initial="initial"
          animate="animate"
          exit="initial"
          fill="none"
          stroke="#263238"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M422.19 271.04L427.41 272.72"
        ></motion.path>
        <motion.path
          variants={svgVariants.icon}
          initial="initial"
          animate="animate"
          exit="initial"
          fill="none"
          stroke="#263238"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M399.53 263.73L418.05 269.71"
        ></motion.path>
        <motion.path
          variants={svgVariants.icon}
          initial="initial"
          animate="animate"
          exit="initial"
          fill="none"
          stroke="#263238"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M400.43 217.86L413.92 216.06"
        ></motion.path>
        <motion.path
          variants={svgVariants.icon}
          initial="initial"
          animate="animate"
          exit="initial"
          fill="none"
          stroke="#263238"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M394.13 273.62L404.03 281.72"
        ></motion.path>
      </g>
    </svg>
  );
}

export default Icon;
