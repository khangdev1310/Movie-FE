import React, { FC, useRef } from "react";

interface VolumeProps {
  className?: string;
  width: number;
  setWidth: Function;
}

const Volume: FC<VolumeProps> = ({ className, width, setWidth }) => {
  const volumeRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={volumeRef}
      onMouseDown={(e) => {
        if (volumeRef.current) {
          let width =
            ((e.clientX - volumeRef.current.getBoundingClientRect().left) /
              volumeRef.current.offsetWidth) *
            100;
          width = width < 0 ? 0 : width > 100 ? 100 : width;
          setWidth(width);

          const moveHandler = (e: MouseEvent) => {
            if (volumeRef.current) {
              let width =
                ((e.clientX - volumeRef.current.getBoundingClientRect().left) /
                  volumeRef.current.offsetWidth) *
                100;
              width = width < 0 ? 0 : width > 100 ? 100 : width;
              setWidth(width);
            }
          };
          window.addEventListener("mousemove", moveHandler);
          window.addEventListener(
            "mouseup",
            () => {
              window.removeEventListener("mousemove", moveHandler);
            },
            { once: true }
          );
        }
      }}
      className={`group h-4 flex justify-center items-center cursor-pointer ${
        className || ""
      }`}
    >
      <div
        className={`rounded-full h-1 group-hover:h-[6px] transition-all w-full bg-gray-600 ${
          className || ""
        }`}
      >
        <div
          style={{ width: `${width}%` }}
          className="rounded-full h-full bg-white relative after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:translate-x-1/2 after:bg-white after:h-3 after:w-3 after:rounded-full after:scale-50 after:opacity-0 after:transition group-hover:after:opacity-100 group-hover:after:scale-100"
        ></div>
      </div>
    </div>
  );
};

export default Volume;
