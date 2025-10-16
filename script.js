document.addEventListener("DOMContentLoaded", () => {
  const texts = [
    `"Don't just code. Own it."`,
    `"Build smart. Learn fast."`,
    `"Sleep, debug, repeat."`,
    `"Ideas are cheap. Execution is gold."`
  ];

  const typingSpeed = 100;    // tốc độ gõ
  const deletingSpeed = 50;   // tốc độ xóa
  const delayBetween = 2000;  // dừng giữa 2 câu

  let textIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  const motto = document.getElementById("motto");

  function typeEffect() {
    const currentText = texts[textIndex];
    if (!isDeleting) {
      // Gõ tới khi hết câu
      motto.textContent = currentText.substring(0, charIndex + 1);
      charIndex++;
      if (charIndex < currentText.length) {
        setTimeout(typeEffect, typingSpeed);
      } else {
        isDeleting = true;
        setTimeout(typeEffect, delayBetween);
      }
    } else {
      // Xóa chữ
      motto.textContent = currentText.substring(0, charIndex - 1);
      charIndex--;
      if (charIndex > 0) {
        setTimeout(typeEffect, deletingSpeed);
      } else {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
        setTimeout(typeEffect, typingSpeed);
      }
    }
  }

  typeEffect();
});
