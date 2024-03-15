"use client";
import React from "react";
import { Anchor } from "antd";
import About from "./pages/About";
const OnePage = () => (
  <>
    <div
      style={{
        padding: "20px",
      }}
    >
      <Anchor
        direction="horizontal"
        items={[
          {
            key: "part-0",
            href: "#part-0",
            title: "Welcome",
          },
          {
            key: "part-1",
            href: "#part-1",
            title: "About",
          },
          {
            key: "part-2",
            href: "#part-2",
            title: "Works",
          },
          {
            key: "part-3",
            href: "#part-3",
            title: "Contact",
          },
        ]}
      />
    </div>
    <div>
      <div
        id="part-0"
        style={{
          width: "100vw",
          height: "100vh",
          textAlign: "center",
          background: "black",
        }}
      >
        <About />
      </div>
      <div
        id="part-1"
        style={{
          width: "100vw",
          height: "100vh",
          textAlign: "center",
          background: "black",
        }}
      ></div>
      <div
        id="part-2"
        style={{
          width: "100vw",
          height: "100vh",
          textAlign: "center",
          background: "rgba(0,0,255,0.02)",
        }}
      />
      <div
        id="part-3"
        style={{
          width: "100vw",
          height: "100vh",
          textAlign: "center",
          background: "#FFFBE9",
        }}
      />
    </div>
  </>
);
export default OnePage;
