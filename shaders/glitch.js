export const glitch = `
uniform vec2 resolution;
uniform vec2 offset;
uniform float time;
uniform sampler2D src;

float rand(vec2 co) {
  return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);
}

void main() {
  vec2 uv = (gl_FragCoord.xy - offset) / resolution;
  vec4 color = texture2D(src, uv);

  float glitchAmount = step(mod(time, 2.0), 1.0) * 0.5;

  // グリッチエフェクトを生成
  vec2 displacement = vec2(
    rand(uv + time) * 2.0 - 1.0,
    rand(uv + time + 1.0) * 2.0 - 1.0
  ) * glitchAmount * 0.1;
  vec4 glitchColor = texture2D(src, uv + displacement);

  // アルファチャンネルの修正
  if (glitchColor.a < 0.5) {
    discard;
  }

  // グリッチ効果を色に適用
  color = mix(color, glitchColor, glitchAmount);

  gl_FragColor = color;
}
`;
