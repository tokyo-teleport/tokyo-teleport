export const customShader = `
uniform vec2 resolution;
uniform vec2 mouse;
uniform float time;
uniform sampler2D src;

void main() {
  vec2 uv = (gl_FragCoord.xy) / resolution;
  vec4 color = texture2D(src, uv);

  // RGBシフトエフェクト
  float shiftAmount = 0.005;
  vec4 r = texture2D(src, uv + vec2(shiftAmount, 0.0));
  vec4 g = texture2D(src, uv + vec2(-shiftAmount, 0.0));
  vec4 b = texture2D(src, uv);

  vec4 finalColor = vec4(r.r, g.g, b.b, color.a);

  // マウスインタラクションによるエフェクト
  float dist = distance(uv, mouse / resolution);
  float effect = smoothstep(0.1, 0.3, dist);
  finalColor.rgb += effect * vec3(0.1, 0.1, 0.1);

  gl_FragColor = finalColor;
}
`;
