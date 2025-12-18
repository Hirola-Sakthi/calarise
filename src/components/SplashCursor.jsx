import { useEffect, useRef } from "react";

export default function SplashCursor() {
  const canvasRef = useRef(null);

  const mouse = useRef({ x: 0, y: 0 });
  const dot = useRef({ x: 0, y: 0 });
  const ring = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    resize();
    window.addEventListener("resize", resize);

    const move = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    window.addEventListener("mousemove", move);

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      dot.current.x += (mouse.current.x - dot.current.x) * 0.25;
      dot.current.y += (mouse.current.y - dot.current.y) * 0.25;

      ring.current.x += (mouse.current.x - ring.current.x) * 0.12;
      ring.current.y += (mouse.current.y - ring.current.y) * 0.12;

      ctx.strokeStyle = "rgba(166, 129, 103, 0.75)";
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(ring.current.x, ring.current.y, 14, 0, Math.PI * 2);
      ctx.stroke();

      ctx.fillStyle = "#a68167";
      ctx.beginPath();
      ctx.arc(dot.current.x, dot.current.y, 4.5, 0, Math.PI * 2);
      ctx.fill();

      requestAnimationFrame(animate);
    }

    animate();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", move);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        pointerEvents: "none",
      }}
    />
  );
}
