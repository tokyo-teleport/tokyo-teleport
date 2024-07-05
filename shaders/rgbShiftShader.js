export const rgbShiftShader = `
uniform vec2 resolution;
uniform vec2 mouse;
uniform float time;
uniform sampler2D src;

void main() {
  vec2 uv = gl_FragCoord.xy / resolution;
  vec4 color = texture2D(src, uv);

  float shiftAmount = 0.005 + 0.005 * sin(time * 2.0 + uv.y * 10.0);
  vec2 shift = vec2(shiftAmount * (mouse.x / resolution.x - 0.5), shiftAmount * (mouse.y / resolution.y - 0.5));

  vec4 r = texture2D(src, uv + shift);
  vec4 g = texture2D(src, uv - shift);
  vec4 b = texture2D(src, uv);

  gl_FragColor = vec4(r.r, g.g, b.b, color.a);
}
`;
