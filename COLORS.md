# 常用颜色支持 · 0.5.0

新增真实颜色值：149 个 CSS 颜色名称（含 transparent）、3/4/6/8 位十六进制、RGB/RGBA 与 HSL/HSLA。支持常见逗号、空格/slash 构造，百分比、角度、透明度、关键字参数，颜色相等和颜色作为 map 键；引号与 unquote 产生的字符串仍保持字符串类型。

旧式全局入口包含 red/green/blue、hue/saturation/lightness、alpha/opacity、mix、lighten/darken、saturate/desaturate、adjust-hue、complement、grayscale、invert、opacify/transparentize 及 fade-in/fade-out。sass:color 支持 mix、各旧式通道 getter、complement/grayscale/invert，以及 adjust/change/scale 的 RGB/HSL/alpha 子集；支持模块别名。部分旧式入口在 Sass 中已弃用，本实现保留兼容入口。

```scss
@use "sass:color";
$brand: #336699;
.button {
  color: $brand;
  background: color.scale($brand, $lightness: -20%);
  border-color: rgba($brand, .4);
  &:hover { background: mix($brand, white, 80%); }
}
```

颜色参数中的 var()/未解析 calc() 保留给 CSS，简单无单位常数 calc 参数使用现有算术求值。数字形式的 CSS opacity/invert/grayscale/saturate 滤镜继续保留。公开 MoonBit API 未增加，命名空间同步为当前 moon.mod 的 zhengxin-coding/scss，修复原先改名后两个命令包仍引用 localreview/scss 的构建失败。

## 验证范围

新增 241 个固定 Dart Sass 1.104.0 场景：149 个名称的类型/通道数据、构造与运算、典型错误和独立主题文件模块。独立期望进入 JS/Wasm-GC，累计各 830 项测试；原有 124+345+98 与新增 241 个 Node 对照全部通过。新增结果见 evidence/color-comparison.json；成功输出经过官方 plain-CSS 压缩比较，错误仅比较拒绝，不声称报错文字/位置一致。两个后端同时比较官方 CSS 词法结果，避免仅靠 CSS 压缩掩盖求值缺失。

完整 verify -WithOracle、13 项宿主检查、814 项求值边界和 307 项异常输入通过。149 个颜色名称是 CSS 数据，从已固定且逐文件核验的参考发行包提取，未复制编译器逻辑。命名表生成器与颜色期望生成器分别保存于 tools。

## 保留边界

本轮按常用功能收尾，不延伸到现代 lab/lch/oklab/oklch/display-p3 等色彩空间、missing/powerless 通道、相对色彩、color.channel/to-space/is-legacy、插值色彩空间/$method/$space 参数及所有越界/精度组合；这些入口可能拒绝或按 CSS 函数保留。不支持完整颜色算术和完整 calc 化简，其他 Sass 缺口继续见 FEATURES.md。浏览器布局未改，本轮只验证最终引擎和 CLI/项目路径，不把旧截图当作新视觉验收。
