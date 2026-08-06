"use client";

import { useState } from "react";
import {
  TransformWrapper,
  TransformComponent,
} from "react-zoom-pan-pinch";

export default function MapaPowiekszenie() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <figure
        style={{
          textAlign: "center",
          margin: "40px 0",
        }}
      >
        <img
          src="/images/historia/glogau-1928.jpg"
          alt="Mapa Głogowa i okolic z 1928 roku"
          onClick={() => setOpen(true)}
          style={{
            width: "100%",
            height: "auto",
            cursor: "zoom-in",
          }}
        />

        <figcaption
          style={{
            marginTop: "15px",
            fontFamily: "Georgia, serif",
            fontStyle: "italic",
          }}
        >
          Kliknij mapę, aby oglądać szczegóły.
        </figcaption>
      </figure>


      {open && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.9)",
            zIndex: 9999,
          }}
        >

          <button
            onClick={() => setOpen(false)}
            style={{
              position: "fixed",
              right: "25px",
              top: "15px",
              zIndex: 10002,
              fontSize: "40px",
              color: "white",
              background: "transparent",
              border: "none",
              cursor: "pointer",
            }}
          >
            ×
          </button>


          <TransformWrapper
            initialScale={1}
            minScale={0.5}
            maxScale={8}
            centerOnInit
          >

            {({ zoomIn, zoomOut, resetTransform }) => (
              <>
                <div
                  style={{
                    position: "fixed",
                    top: "20px",
                    left: "20px",
                    zIndex: 10002,
                  }}
                >
                  <button onClick={() => zoomIn()}>
                    +
                  </button>

                  <button onClick={() => zoomOut()}>
                    -
                  </button>

                  <button onClick={() => resetTransform()}>
                    reset
                  </button>
                </div>


                <TransformComponent
                  wrapperStyle={{
                    width: "100vw",
                    height: "100vh",
                  }}
                >
                  <img
                    src="/images/historia/glogau-1928.jpg"
                    alt="Powiększona mapa"
                    style={{
                      width: "3000px",
                      height: "auto",
                    }}
                  />
                </TransformComponent>

              </>
            )}

          </TransformWrapper>

        </div>
      )}

    </>
  );
}