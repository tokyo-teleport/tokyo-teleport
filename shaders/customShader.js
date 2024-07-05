export const customShader = `
uniform vec2 resolution;
uniform vec2 offset;
uniform float time;
uniform sampler2D src;

void main() {
  vec2 uv = (gl_FragCoord.xy - offset) / resolution;
  vec4 color = texture2D(src, uv);

  // RGBシフトエフェクト
  float shiftAmount = 0.002; // 強度を調整
  vec4 r = texture2D(src, uv + vec2(shiftAmount, 0.0));
  vec4 g = texture2D(src, uv - vec2(shiftAmount, 0.0));
  vec4 b = texture2D(src, uv);

  gl_FragColor = vec4(r.r, g.g, b.b, color.a);
}
`;
