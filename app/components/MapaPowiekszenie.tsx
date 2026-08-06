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
            borderRadius: "6px",
          }}
        />


        <figcaption
          style={{
            marginTop: "18px",
            fontFamily: "Georgia, serif",
            fontSize: "1.15rem",
            fontStyle: "italic",
            lineHeight: "1.7",
          }}
        >
          Mapa Głogowa i okolic z 1928 roku.
          Kliknij mapę, aby obejrzeć szczegóły dokumentu.
        </figcaption>


      </figure>



      {open && (

        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.92)",
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
              fontSize: "42px",
              color: "#fff",
              background: "rgba(0,0,0,0.4)",
              border: "1px solid rgba(255,255,255,0.5)",
              borderRadius: "50%",
              width: "55px",
              height: "55px",
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
                    display: "flex",
                    gap: "8px",
                  }}
                >

                  <button
                    onClick={() => zoomIn()}
                    style={buttonStyle}
                  >
                    ＋
                  </button>


                  <button
                    onClick={() => zoomOut()}
                    style={buttonStyle}
                  >
                    −
                  </button>


                  <button
                    onClick={() => resetTransform()}
                    style={buttonStyle}
                  >
                    ⟳
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
                    alt="Powiększona mapa Głogowa z 1928 roku"
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


const buttonStyle = {
  width: "45px",
  height: "45px",
  fontSize: "26px",
  cursor: "pointer",
  background: "rgba(255,255,255,0.9)",
  border: "none",
  borderRadius: "6px",
};