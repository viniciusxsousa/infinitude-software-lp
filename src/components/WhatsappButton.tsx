import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { FaWhatsapp } from "react-icons/fa";

export const WhatsappButton = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);


  return (
    <>
      {showTopBtn && (
        <a  href="https://api.whatsapp.com/send?phone=+5511%2094390-7690&text=Ol%C3%A1%2C+gostaria+de+solicitar+um+or%C3%A7amento" target="_black">
          <Button
            className="fixed bottom-4 right-4 opacity-90 shadow-md"
            size="icon"
          >
            <FaWhatsapp className="h-7 w-7" />
          </Button>
        </a>
      )}
    </>
  );
};
