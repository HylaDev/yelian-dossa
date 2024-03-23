import React from "react";
import AnimatedCursor from "react-animated-cursor"

function CursorAnim() {
  return (
    <div>
    <AnimatedCursor
      innerSize={20}
      outerSize={20}
      color='80, 80, 80'
      outerAlpha={0.3}
      innerScale={0.7}
      outerScale={5}
      clickables={[
        'a',
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        'label[for]',
        'select',
        'textarea',
        'button',
        '.link'
      ]}
    />
    </div>
  );
}
export default CursorAnim;