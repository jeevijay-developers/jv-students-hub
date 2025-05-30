
import { useEffect } from "react";

const MouseMoveEffect = () => {
    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            const x = event.clientX;
            const y = event.clientY;
            const xPercent = (x / window.innerWidth) - 0.5;
            const yPercent = (y / window.innerHeight) - 0.5;
            const shapes = document.querySelectorAll<HTMLImageElement>(".shape-move img");

            shapes.forEach((shape, index) => {
                const multiplierX = 40 + index * 2;
                const multiplierY = 40 + index * 2;
                const translateX = xPercent * multiplierX;
                const translateY = yPercent * multiplierY;
                shape.style.transform = `translate(${translateX}px, ${translateY}px)`;
            });
        };

        document.addEventListener("mousemove", handleMouseMove);
        return () => {
            document.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);
};

export default MouseMoveEffect;
