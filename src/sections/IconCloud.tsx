"use client";

import { useEffect, useMemo, useState } from "react";
import { useTheme } from "next-themes";
import { Cloud, ICloud } from "react-icon-cloud";

// Importing custom images from the assets folder
import Image1 from "@/assets/logo-celestial.png";
import Image2 from "@/assets/logo-quantum.png";
import Image3 from "@/assets/logo-pulse.png";
import Image4 from "@/assets/logo-echo.png";
import Image5 from "@/assets/logo-apex.png";
import Image6 from "@/assets/logo-acme.png";

export const cloudProps: Omit<ICloud, "children"> = {
  containerProps: {
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      paddingTop: 40,
    },
  },
  options: {
    reverse: true,
    depth: 1,
    wheelZoom: false,
    imageScale: 2,
    activeCursor: "default",
    tooltip: "native",
    initial: [0.1, -0.1],
    clickToFront: 500,
    tooltipDelay: 0,
    outlineColour: "#0000",
    maxSpeed: 0.04,
    minSpeed: 0.02,
  },
};

export default function IconCloudSection() {
  const { theme } = useTheme();

  const images = [Image1, Image2, Image3, Image4, Image5];

  const renderedImages = useMemo(() => {
    return images.map((img, index) => (
      <img
        key={index}
        src={img.src} // Use the src attribute from the image
        alt={`Image ${index + 1}`}
        style={{
          width: "50px", // Customize the size of your images
          height: "50px",
          borderRadius: "50%", // Make the images round if desired
        }}
      />
    ));
  }, [images]);

  return (
    <section
      id="icon-cloud-section"
      style={{ padding: "50px 0", background: theme === "light" ? "#fff" : "#121212" }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* @ts-ignore */}
        <Cloud {...cloudProps}>
          {renderedImages}
        </Cloud>
      </div>
    </section>
  );
}
