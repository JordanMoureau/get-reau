import { motion } from "framer-motion";

const slideTransition = {
  ease: "easeInOut",
  stiffness: 700,
  duration: 1.2, // Duration of each bounce
  repeat: 1, // Repeat indefinitely
  repeatType: "reverse", // Easing function for smooth animation
};

export default function Waves() {
  return (
    <motion.svg
      className="make-waves-box-waves"
      id="uuid-ad320d9e-3ccb-4ae1-a0c9-12c3ec08055f"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 265 93.69"
      initial={{ y: 0 }}
      animate={{ y: [0, 30, 0] }}
      transition={slideTransition}
    >
      <path
        d="m265,78.13c-.87.08-1.78.17-2.7.27-5.49.6-28.86-3.38-37.4-3.97-8.54-.6-10.33-.79-12.71-.4-2.38.4-10.33.4-13.43.4s-3.85-2.58-7.42-1.99-5.56-3.18-8.94-4.77c-3.38-1.59-4.77,3.77-11.72,6.55-6.95,2.78-12.91,0-15.29,0s-2.38,4.17-2.78,5.79c-.4,1.62-11.32,1.95-10.92,4.33.38,2.29,6.63,7.69,11.7,9.34h16.8c-1.56-1.22-2.18-2.66-2.29-3.78-.2-1.99,3.97-1.19,8.34-1.59s4.57-4.96,12.91-5.21c8.34-.24,15.29,4.41,18.06,5.41,2.77.99,15.69-1.79,18.47-1.39,2.78.4,3.57,3.38,4.57,3.77s6.95-.79,11.32,0c1.61.29,3.06,1.45,4.24,2.79h19.18v-15.56Z"
        fill="#85a5d6"
        stroke-width="0"
      />
      <path
        d="m264.88,8.38c-6.21-1.24-20.64-4.52-28.91-1.45-9.13,3.4-32.96-2.2-37.46-5.38s-8.61,0-17.35,3.97c-8.74,3.97-29.78,5.96-32.96,5.96s-9.13,0-9.53-1.94c-.4-1.94-18.67-9.97-20.65-4.07s-13.5,9.58-18.27,7.6c-4.77-1.99-8.34-1.99-11.52-1.99s-7.94-3.57-11.52-3.57-11.12,4.77-14.69,3.97c-3.57-.79-13.5,0-18.67-.4-5.16-.4-9.13-4.77-19.86-5.56-7.13-.53-17.42,2.98-23.52,5.39v82.78h264.88V8.38Z"
        fill="#85a5d6"
        stroke-width="0"
      />
      <path
        d="m264.88,18.35c-11.2-.6-31.44-1.37-37.64.46-8.74,2.57-36.93.21-42.1,0-5.16-.21-15.89-1.38-18.66,0-2.78,1.38-13.11,1.4-16.68,0-3.57-1.4-25.02-.98-27.8-1.6-2.78-.62-9.13,1.42-14.69,5.39-5.56,3.97-23.43-.4-30.98-1.19-7.55-.79-10.72,6.75-12.71,10.72s-21.84,4.77-28.2,5.92-7.15-3.93-7.15-6.52-4.77-4.16-7.55-4.95c-2.78-.79.4-3.18,5.16-4.68,4.77-1.5,8.74,8.25,13.5,9.44,4.77,1.19,12.31-3.57,13.9-7.55s-7.94-5.56-11.91-4.98c-3.97.58-17.47-6.14-24.22-6.54-3.83-.23-11.36,2.87-17.16,5.59v75.83h264.88V18.35Z"
        fill="#7291ca"
        stroke-width="0"
      />
      <path
        d="m265,28.68c-12.13-1.27-40.08-3.66-56.82-.92,0,0-28.59,1.19-32.17,2.38-3.57,1.19-13.11,4.77-15.89,4.37-2.78-.4-18.67-5.56-25.22-5.16-6.55.4-14.1,2.02-17.28,1.8-3.18-.21-19.06,1.04-20.25,3.39-1.19,2.35-3.57,13.07,4.77,11.49s34.15-7.55,40.51-3.57,12.31,7.55,8.74,12.71c-3.57,5.16,4.77,5.96,4.77,5.96,0,0,9.13,4.37,12.51,0,3.38-4.37,8.94-8.74,16.48-6.35,7.55,2.38,16.68.69,18.07-2.63,1.39-3.32,7.35-5.71,10.52-2.53,3.18,3.18,8.74,6.05,15.49,7.19,6.75,1.15,23.17-4.41,28.59-1.63,2.24,1.15,4.87.82,7.18.05v-26.53Z"
        fill="#85a5d6"
        stroke-width="0"
      />
      <path
        d="m136.12,93.69c-5.14-2.62-12.36-5.9-15.7-6.57-4.96-.99-13.7-.99-18.07,1.39-4.37,2.38-9.73-.2-12.11-1.59-2.38-1.39-7.94-.99-12.91-3.97-4.96-2.98-9.53-2.98-15.29-3.18-5.76-.2-9.13,2.38-11.91,4.57-2.78,2.18-10.13,1.79-15.09,3.77s-25.22.4-32.37,1.59c-.91.15-1.8.43-2.67.8v3.18h136.12Z"
        fill="#85a5d6"
        stroke-width="0"
      />
      <path
        d="m140.47,63.05c-2.38-1.04-5.96-2.14-9.53-2.54-3.57-.4-.99-3.97-3.18-5.36-2.18-1.39-23.03-1.79-32.96-2.29-9.93-.5-25.81-5.85-27.8-6.05-1.99-.2-4.96,2.18-7.55,3.43s-7.15,1.73-11.91,2.92c-4.77,1.19-11.32-2.18-14.1-2.78-2.78-.6-5.36.79-7.94,2.58-2.58,1.79-12.51-.4-15.89-.85-3.38-.45-4.57,3.03-6.16,4.66-.54.55-1.9.97-3.46,1.29v10.28c2.28-.32,4.48-.81,5.65-1.29,2.38-.99,3.77-6.75,11.52-4.96s3.57-.4,10.72-2.98c7.15-2.58,15.29-1.19,16.88.99,1.59,2.18-8.94,6.95-12.11,6.16-3.18-.79-4.37.6-11.91.79-7.55.2-10.13,5.16-10.52,7.55-.4,2.38,1.99,3.97,6.95,4.37s21.64-2.78,26.41-3.77c4.77-.99,22.24-7.35,24.79-9.13,2.55-1.79,8.57-.2,12.94,1.99,4.37,2.18,25.02,4.57,27.2,4.17,2.18-.4,4.77-4.37,8.14-5.56s9.13,2.18,14.69,2.78c5.56.6,9.73,0,11.52-1.59,1.79-1.59,0-3.77-2.38-4.81Z"
        fill="#85a5d6"
        stroke-width="0"
      />
      <path
        d="m21.93,34.5c-.79-1.19-4.96-.79-7.55-.79s-2.58-2.58-3.77-4.17c-1.19-1.59-6.75-1.59-8.14,0-.44.5-1.38.9-2.47,1.21v11.72c1.51-.75,3-1.52,4.06-2.01,2.58-1.19,5.56.99,6.55,1.19.99.2,7.35,1.19,11.32-1.19,3.97-2.38.79-4.77,0-5.96Z"
        fill="#85a5d6"
        stroke-width="0"
      />
      <path
        d="m22.64,35c-.21-.25-.39-.46-.51-.64-.72-1.08-3.47-1-6.14-.93-.57.01-1.12.03-1.62.03-1.63,0-2.12-1.11-2.68-2.39-.25-.58-.51-1.17-.89-1.68-.55-.74-1.96-1.21-3.77-1.28-1.62-.06-3.85.23-4.76,1.27-.4.45-1.26.82-2.28,1.12v.51c1.16-.33,2.18-.76,2.66-1.3.63-.72,2.43-1.16,4.36-1.1,1.64.06,2.94.48,3.39,1.08.35.46.59,1.03.83,1.58.58,1.32,1.18,2.69,3.14,2.69.5,0,1.05-.01,1.63-.03,2.17-.05,5.14-.14,5.71.71.14.2.33.43.54.68.64.75,1.52,1.78,1.35,2.84-.12.73-.73,1.43-1.81,2.08-4.18,2.51-11.07,1.17-11.14,1.16-.22-.04-.59-.22-1.02-.42-1.36-.63-3.65-1.7-5.69-.75-.75.35-1.73.84-2.77,1.36-.38.19-.78.39-1.18.59v.56c.47-.24.95-.47,1.41-.71,1.03-.52,2.01-1.01,2.75-1.36,1.83-.85,3.9.12,5.27.75.48.22.86.4,1.13.46.07.01,7.15,1.39,11.5-1.22,1.23-.74,1.9-1.53,2.05-2.42.21-1.29-.75-2.42-1.46-3.25Z"
        fill="#2d1d16"
        stroke-width="0"
      />
      <path
        d="m265,77.99c-.8.07-1.62.15-2.45.24-5.49.6-28.86-3.38-37.4-3.97-8.54-.6-10.33-.79-12.71-.4-2.38.4-10.33.4-13.43.4s-3.85-2.58-7.42-1.99-5.56-3.18-8.94-4.77c-3.38-1.59-4.77,3.77-11.72,6.55-6.95,2.78-12.91,0-15.29,0s-2.38,4.17-2.78,5.79c-.4,1.62-11.32,1.95-10.92,4.33.39,2.37,7.05,8.05,12.2,9.5h16.52c-1.71-1.25-2.39-2.76-2.51-3.94-.2-1.99,3.97-1.19,8.34-1.59,4.37-.4,4.57-4.96,12.91-5.21,8.34-.24,15.29,4.41,18.06,5.41,2.77.99,15.69-1.79,18.47-1.39,2.78.4,3.57,3.38,4.57,3.77.99.39,6.95-.79,11.32,0,1.67.3,3.17,1.54,4.38,2.95h18.8v-15.7Z"
        fill="#85a5d6"
        stroke-width="0"
      />
      <path
        d="m143.8,66.08c-.19-1.21-1.46-2.48-3.23-3.26-2.88-1.25-6.47-2.21-9.6-2.56-1.8-.2-1.85-1.22-1.91-2.51-.05-1-.1-2.14-1.16-2.82-1.73-1.1-13.93-1.57-24.69-1.98-3.12-.12-6.07-.23-8.39-.35-7.09-.36-17.15-3.17-23.16-4.86-2.44-.68-4.05-1.13-4.63-1.19-1.45-.15-3.28.94-5.22,2.09-.82.49-1.67.99-2.46,1.37-1.61.78-4.01,1.25-6.78,1.8-1.64.33-3.33.66-5.08,1.1-3.42.85-7.8-.7-11-1.83-1.19-.42-2.22-.79-2.98-.95-2.92-.63-5.64.89-8.14,2.62-2.01,1.39-9.02.21-13.2-.49-1-.17-1.87-.32-2.51-.4-2.66-.35-4.02,1.56-5.21,3.25-.39.56-.76,1.08-1.16,1.49-.48.5-1.76.9-3.28,1.21v.51c1.63-.33,3.06-.78,3.64-1.37.42-.43.8-.97,1.21-1.55,1.17-1.65,2.37-3.36,4.74-3.04.63.08,1.49.23,2.49.4,4.54.76,11.39,1.92,13.57.41,2.41-1.67,5.02-3.13,7.75-2.54.73.16,1.75.52,2.92.93,3.27,1.16,7.74,2.74,11.29,1.85,1.74-.43,3.43-.77,5.06-1.09,2.81-.56,5.24-1.04,6.91-1.85.81-.39,1.67-.9,2.5-1.39,1.79-1.06,3.64-2.15,4.91-2.02.54.05,2.22.52,4.55,1.17,6.03,1.69,16.12,4.52,23.27,4.88,2.33.12,5.28.23,8.4.35,9.63.37,22.82.87,24.44,1.9.84.54.88,1.45.93,2.42.06,1.28.13,2.73,2.36,2.98,3.09.34,6.62,1.29,9.46,2.52,1.59.69,2.77,1.85,2.94,2.88.09.56-.12,1.07-.62,1.52-1.75,1.55-5.87,2.11-11.32,1.53-2.28-.24-4.58-.96-6.8-1.64-3.2-.99-5.96-1.85-8.01-1.12-1.8.64-3.37,2.03-4.76,3.27-1.21,1.08-2.36,2.1-3.34,2.28-2.2.4-22.88-2.06-27.05-4.15-4.5-2.25-10.55-3.82-13.2-1.97-2.4,1.68-19.7,8.06-24.69,9.09-5.29,1.1-21.46,4.14-26.34,3.77-3.18-.25-5.34-1.01-6.26-2.19-.42-.54-.58-1.18-.46-1.89.41-2.46,3.08-7.15,10.28-7.34,3.58-.09,5.77-.46,7.36-.73,1.05-.17,1.85-.31,2.66-.31.58,0,1.16.07,1.83.24,2.7.68,10.61-2.54,12.26-4.99.5-.74.34-1.25.12-1.55-1.65-2.27-10-3.67-17.17-1.08-2.93,1.06-4.01,2.07-4.73,2.74-1.01.94-1.35,1.26-5.85.23-5.67-1.31-8.05,1.36-9.79,3.31-.67.75-1.25,1.41-1.88,1.67-1.12.47-3.29.94-5.55,1.27v.51c2.32-.33,4.56-.83,5.74-1.32.73-.31,1.35-1,2.06-1.8,1.75-1.96,3.92-4.39,9.3-3.15,4.56,1.05,5.1.77,6.3-.35.73-.68,1.73-1.62,4.56-2.64,6.97-2.52,15.02-1.25,16.59.9.07.09.28.38-.13.98-1.54,2.28-9.21,5.41-11.72,4.79-1.72-.43-2.91-.23-4.69.07-1.58.26-3.74.63-7.29.72-7.52.2-10.33,5.16-10.76,7.75-.14.86.04,1.62.56,2.28,1.02,1.31,3.25,2.11,6.62,2.38.29.02.63.04,1,.04,5.83,0,20.5-2.77,25.48-3.81,4.56-.95,22.25-7.33,24.88-9.17,2.37-1.66,8.17-.25,12.69,2,4.39,2.2,25.06,4.61,27.36,4.19,1.12-.2,2.26-1.22,3.59-2.4,1.35-1.2,2.88-2.57,4.59-3.17,1.89-.67,4.71.2,7.69,1.13,2.24.69,4.56,1.41,6.89,1.66,5.59.6,9.85,0,11.71-1.65.63-.56.9-1.24.78-1.97Z"
        fill="#2d1d16"
        stroke-width="0"
      />
      <path
        d="m169.59,93.69h.81c-1.6-1.14-2.35-2.55-2.48-3.8-.02-.24.03-.41.15-.56.52-.58,2.23-.59,4.22-.61,1.14-.01,2.44-.03,3.74-.14,1.86-.17,3.02-1.09,4.25-2.06,1.78-1.41,3.8-3.01,8.64-3.15,6.43-.19,12.08,2.59,15.47,4.25,1.04.51,1.86.91,2.5,1.14,1.64.59,6.41-.06,11.01-.68,3.27-.44,6.35-.86,7.51-.7,1.71.24,2.61,1.51,3.34,2.53.42.59.75,1.06,1.17,1.22.42.17,1.38.1,3.17-.03,2.35-.18,5.57-.43,8.19.05,1.48.27,2.82,1.31,3.95,2.55h.69c-1.24-1.45-2.79-2.72-4.54-3.04-2.69-.49-5.94-.24-8.32-.05-1.4.11-2.62.2-2.95.07-.28-.11-.59-.54-.95-1.04-.74-1.04-1.76-2.46-3.68-2.74-1.23-.18-4.2.23-7.65.69-4.34.59-9.25,1.25-10.78.71-.61-.22-1.46-.64-2.45-1.12-3.43-1.68-9.2-4.47-15.71-4.3-5.01.15-7.19,1.87-8.94,3.26-1.22.96-2.27,1.79-3.98,1.95-1.28.12-2.57.13-3.7.14-2.19.02-3.92.04-4.58.78-.22.25-.32.57-.28.94.12,1.23.79,2.59,2.17,3.75Z"
        fill="#2d1d16"
        stroke-width="0"
      />
      <path
        d="m14.69,89.45c.82,0,1.66,0,2.5,0,7.42,0,15.1.03,17.94-1.11,2.24-.9,4.95-1.3,7.57-1.69,3.1-.46,6.02-.89,7.58-2.12,2.67-2.1,5.99-4.71,11.75-4.51l.87.03c5.39.18,9.64.32,14.3,3.11,3,1.8,6.21,2.38,8.79,2.85,1.71.31,3.19.58,4.12,1.12,2.76,1.61,8.03,3.95,12.36,1.59,4.53-2.47,13.36-2.27,17.9-1.36,3.23.65,10.11,3.75,15.21,6.32h1.1c-5.2-2.67-12.77-6.12-16.21-6.81-4.61-.92-13.6-1.11-18.24,1.42-4.11,2.25-9.2-.03-11.87-1.58-1-.58-2.52-.86-4.28-1.18-2.54-.46-5.71-1.04-8.62-2.79-4.77-2.86-9.08-3-14.54-3.18l-.87-.03c-5.94-.18-9.34,2.47-12.08,4.62-1.46,1.15-4.32,1.57-7.35,2.02-2.65.39-5.39.8-7.68,1.72-2.75,1.1-10.36,1.08-17.75,1.07-5.87-.01-11.42-.02-14.56.5-.89.15-1.77.42-2.63.77v.56c.88-.39,1.79-.69,2.71-.84,2.66-.44,7.09-.5,11.98-.5Z"
        fill="#2d1d16"
        stroke-width="0"
      />
      <path
        d="m265,54.98c-2.25.75-4.8,1.05-6.95-.05-3.12-1.59-9.67-.52-16.01.51-5.01.82-9.74,1.59-12.66,1.1-6.21-1.05-11.95-3.72-15.35-7.12-1.34-1.34-3.27-1.84-5.42-1.42-2.45.48-4.72,2.14-5.51,4.03-1.31,3.12-10.16,4.9-17.76,2.49-7.83-2.47-13.43,2.14-16.75,6.44-3.21,4.16-12.11-.03-12.2-.07l-.08-.02s-4.28-.43-5.24-2.49c-.39-.84-.17-1.88.66-3.07.97-1.4,1.31-2.73,1.03-4.08-.67-3.26-4.95-5.93-9.47-8.76l-.37-.23c-1.59-.99-4.32-1.38-7.68-1.38-8.64,0-21.39,2.58-29.26,4.18-1.46.3-2.73.55-3.74.75-2.18.41-3.76,0-4.69-1.25-1.99-2.64-.65-8.21.2-9.88,1.05-2.08,16.47-3.49,20.01-3.25,1.72.12,4.63-.29,8-.75,2.92-.4,6.24-.86,9.3-1.05,4.62-.27,13.89,2.22,20.02,3.87,2.42.65,4.33,1.17,5.15,1.29,2.38.33,9.29-2.06,13.86-3.64.83-.29,1.56-.54,2.14-.74,3.5-1.17,31.81-2.36,32.1-2.37h.03c16.58-2.72,44.48-.35,56.67.92v-.5c-12.24-1.27-40.12-3.63-56.73-.91-1.37.06-28.67,1.21-32.22,2.39-.58.19-1.31.45-2.15.74-4.25,1.48-11.35,3.95-13.62,3.62-.78-.11-2.68-.62-5.09-1.27-6.16-1.66-15.48-4.17-20.18-3.89-3.08.19-6.41.65-9.34,1.05-3.35.46-6.24.87-7.9.75-2.72-.19-19.18.93-20.49,3.53-.88,1.75-2.27,7.59-.15,10.41,1.06,1.41,2.8,1.89,5.19,1.44,1.01-.19,2.29-.45,3.75-.75,10.09-2.04,31.08-6.3,36.58-2.86l.37.23c4.43,2.77,8.62,5.38,9.24,8.43.25,1.2-.06,2.41-.95,3.69-.94,1.35-1.17,2.55-.7,3.57,1.03,2.22,5.1,2.72,5.6,2.77.49.23,4.29,1.96,7.82,1.96,1.92,0,3.76-.51,4.95-2.05,3.23-4.18,8.65-8.66,16.21-6.27,7.39,2.33,16.83.91,18.38-2.78.73-1.75,2.85-3.28,5.15-3.74,1.99-.39,3.75.07,4.97,1.29,3.48,3.48,9.32,6.19,15.62,7.26,3.01.51,7.77-.27,12.82-1.1,6.26-1.02,12.73-2.08,15.7-.56,2.26,1.16,4.87.88,7.18.14v-.54Z"
        fill="#2d1d16"
        stroke-width="0"
      />
      <path
        d="m264.88,18.1c-12.27-.65-31.58-1.33-37.71.47-7.3,2.15-28.78.8-37.95.23-1.81-.11-3.24-.2-4.07-.24-1.16-.05-2.62-.14-4.17-.25-5.52-.37-12.4-.82-14.61.27-2.72,1.35-13.04,1.34-16.48,0-2.21-.87-10.66-1.04-18.11-1.2-4.64-.1-8.65-.18-9.72-.42-2.72-.61-9.04,1.25-14.89,5.43-4.2,3-15.77,1.11-24.22-.26-2.6-.42-4.84-.79-6.58-.97-7.24-.76-10.58,6.02-12.57,10.08-.13.27-.26.54-.39.78-1.41,2.81-12.62,4.01-20.81,4.89-2.97.32-5.53.59-7.2.89-2.11.38-3.76.09-4.91-.87-1.69-1.41-1.94-3.99-1.94-5.41,0-2.67-4.41-4.24-7.73-5.19-.39-.11-.85-.31-.86-.64-.01-.81,2.24-2.36,6.02-3.56,2.53-.79,4.85,1.8,7.31,4.55,1.92,2.14,3.9,4.36,6.06,4.9,4.77,1.2,12.54-3.57,14.19-7.7.35-.88.23-1.7-.35-2.44-1.99-2.52-8.89-3.31-11.83-2.88-1.93.27-6.31-1.26-10.96-2.89-4.82-1.7-9.81-3.45-13.22-3.65-3.84-.22-11.25,2.79-17.18,5.57v.55c5.9-2.78,13.35-5.86,17.15-5.62,3.34.2,8.29,1.94,13.08,3.62,4.7,1.66,9.16,3.22,11.2,2.92,3.27-.47,9.66.54,11.36,2.69.47.6.56,1.24.28,1.94-1.59,3.96-9.03,8.53-13.61,7.4-2.01-.5-3.94-2.66-5.81-4.75-2.46-2.75-5-5.58-7.83-4.69-3.08.97-6.39,2.65-6.37,4.04,0,.51.42.89,1.22,1.12,1.82.52,7.36,2.1,7.36,4.71,0,1.5.28,4.25,2.12,5.79,1.27,1.06,3.06,1.39,5.32.98,1.65-.3,4.21-.57,7.17-.89,8.77-.94,19.68-2.1,21.21-5.16.12-.25.25-.51.39-.79,2.06-4.19,5.16-10.53,12.07-9.8,1.73.18,3.96.55,6.55.97,8.54,1.39,20.23,3.29,24.59.18,5.66-4.04,11.94-5.92,14.49-5.35,1.12.25,5.15.33,9.82.43,7.05.15,15.82.33,17.94,1.16,3.61,1.42,14.02,1.41,16.88,0,2.09-1.04,9.18-.57,14.36-.22,1.55.1,3.02.2,4.19.25.82.03,2.25.12,4.06.24,9.98.62,30.73,1.92,38.12-.25,6.23-1.83,27.02-1.01,37.57-.45v-.5Z"
        fill="#2d1d16"
        stroke-width="0"
      />
      <path
        d="m264.88,8.12c-.4-.08-.83-.17-1.29-.26-6.96-1.42-19.93-4.06-27.71-1.17-9.11,3.38-32.89-2.29-37.22-5.35-3.8-2.69-7.37-.96-13.28,1.91-1.28.62-2.73,1.33-4.31,2.04-8.67,3.94-29.51,5.93-32.86,5.93-2.9,0-8.93,0-9.29-1.74-.33-1.63-9.82-6.01-15.83-6.38-2.94-.18-4.74.58-5.31,2.28-.77,2.29-3.19,4.5-6.65,6.07-4.12,1.87-8.75,2.43-11.29,1.38-4.81-2.01-8.42-2.01-11.61-2.01-1.49,0-3.35-.82-5.33-1.69-2.11-.93-4.29-1.89-6.19-1.89-1.64,0-4.01.94-6.52,1.94-3.05,1.21-6.21,2.47-8.12,2.04-2.07-.46-6.27-.39-10.33-.33-3.03.05-6.17.1-8.37-.07-2.07-.16-3.98-.99-6.2-1.94-3.24-1.4-7.28-3.14-13.66-3.62-7.1-.52-17.39,2.97-23.53,5.39v.54c6.07-2.4,16.42-5.94,23.5-5.42,6.3.47,10.29,2.19,13.5,3.58,2.26.97,4.2,1.82,6.36,1.98,2.22.17,5.37.12,8.41.07,4.03-.06,8.2-.13,10.22.32,2.07.46,5.29-.82,8.42-2.06,2.46-.98,4.79-1.9,6.33-1.9,1.79,0,3.92.94,5.99,1.84,2.02.89,3.94,1.73,5.53,1.73,3.14,0,6.7,0,11.42,1.97,2.64,1.1,7.45.53,11.68-1.39,3.63-1.65,6.09-3.91,6.92-6.36.49-1.45,2.1-2.11,4.8-1.94,6.19.38,15.13,4.83,15.37,5.98.4,1.97,5.26,2.14,9.78,2.14,3.36,0,24.33-2.01,33.07-5.98,1.58-.72,3.04-1.42,4.32-2.05,5.94-2.88,9.21-4.47,12.78-1.95,4.39,3.1,28.47,8.84,37.69,5.41,7.65-2.84,20.52-.22,27.43,1.19.5.1.96.19,1.39.28v-.51Z"
        fill="#2d1d16"
        stroke-width="0"
      />
      <path
        d="m265,77.88c-.88.08-1.8.17-2.73.27-3.31.37-13.51-1-22.51-2.2-5.92-.79-11.51-1.54-14.85-1.77l-2.63-.19c-6.3-.45-7.99-.57-10.13-.21-2.36.39-10.37.39-13.39.39-1.33,0-2.19-.49-3.11-1.01-1.13-.64-2.3-1.31-4.35-.97-2.14.36-3.73-.97-5.41-2.38-1.03-.87-2.1-1.76-3.38-2.36-1.95-.92-3.28.3-5.13,1.99-1.6,1.46-3.59,3.28-6.79,4.56-5.09,2.04-9.63,1.05-12.63.4-1.07-.23-1.92-.42-2.56-.42-2.11,0-2.51,2.74-2.81,4.75-.07.49-.13.92-.21,1.24-.14.56-2.62,1.08-4.61,1.5-3.38.71-6.58,1.37-6.32,2.94.39,2.36,6.24,7.41,11.19,9.3h1.59c-.06-.02-.11-.03-.16-.05-5.21-1.4-11.76-7.12-12.13-9.33-.18-1.09,3.35-1.83,5.93-2.37,2.96-.62,4.79-1.04,4.99-1.87.08-.34.15-.78.22-1.28.27-1.82.64-4.32,2.31-4.32.59,0,1.41.18,2.46.41,3.06.67,7.69,1.67,12.92-.42,3.28-1.31,5.31-3.17,6.94-4.66,1.83-1.67,2.93-2.68,4.58-1.9,1.22.57,2.26,1.45,3.27,2.29,1.77,1.48,3.45,2.88,5.81,2.49,1.87-.31,2.92.28,4.02.91.93.53,1.89,1.08,3.36,1.08,3.03,0,11.07,0,13.47-.4,2.09-.35,3.77-.23,10.02.21l2.63.19c3.33.23,8.91.98,14.82,1.77,9.46,1.26,19.25,2.56,22.63,2.21.91-.1,1.81-.19,2.68-.27v-.5Z"
        fill="#2d1d16"
        stroke-width="0"
      />
    </motion.svg>
  );
}