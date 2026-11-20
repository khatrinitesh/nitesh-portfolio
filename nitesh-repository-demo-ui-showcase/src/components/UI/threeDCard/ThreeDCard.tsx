import { useRef, type PointerEvent, type ReactNode } from "react";

interface ThreeDCardProps {
  children: ReactNode;
  className?: string;
  tilt?: number;
  scale?: number;
}

const ThreeDCard = ({
  children,
  className = "",
  tilt = 15,
  scale = 1.03,
}: ThreeDCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const shineRef = useRef<HTMLDivElement>(null);

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (event.pointerType === "touch") return;

    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    if (!rect.width || !rect.height) return;

    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;

    const rotateX = -y * tilt;
    const rotateY = x * tilt;

    card.style.transform = `
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      scale(${scale})
    `;

    if (shineRef.current) {
      shineRef.current.style.background = `
        radial-gradient(
          circle at ${(x + 0.5) * 100}% ${(y + 0.5) * 100}%,
          rgba(255, 255, 255, 0.25),
          transparent 65%
        )
      `;
    }
  };

  const handlePointerLeave = () => {
    if (cardRef.current) {
      cardRef.current.style.transition = "transform 500ms ease";
      cardRef.current.style.transform =
        "rotateX(0deg) rotateY(0deg) scale(1)";
    }

    if (shineRef.current) {
      shineRef.current.style.background = "transparent";
    }
  };

  return (
    <div
      className="perspective:[1000px]"
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      onPointerCancel={handlePointerLeave}
      onPointerEnter={(event) => {
        if (event.pointerType === "touch") return;

        if (cardRef.current) {
          cardRef.current.style.transition =
            "transform 120ms ease-out";
        }
      }}
    >
      <div
        ref={cardRef}
        className={`
          relative isolate overflow-hidden
          rounded-3xl border border-white/20
          bg-linear-to-br
          from-indigo-900 via-violet-800 to-slate-950
          p-6 text-white shadow-2xl
          transform-style:[preserve-3d]
          ${className}
        `}
      >
        {/* Mouse-following shine */}
        <div
          ref={shineRef}
          className="pointer-events-none absolute inset-0 rounded-3xl"
        />

        {/* Background glow */}
        <div className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-violet-400/30 blur-3xl" />

        {/* Content */}
        <div className="relative h-full transform:[translateZ(35px)]">
          {children}
        </div>
      </div>
    </div>
  );
};

export default ThreeDCard;