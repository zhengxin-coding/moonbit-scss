# MoonBit SCSS 子集编译工作台 · 项目申报书

## 一、项目名称

MoonBit SCSS 子集编译工作台

## 二、项目说明

当前远端 0.4.0 实现类型化数值与单位、函数、控制流、SCSS 文件模块和浏览器编辑器；不是完整 Sass 编译器。未合入版本的能力不计入本次申报。

## 三、方向与通用性

基础软件与前端开发工具。用于受限样式语言实验、可取消的浏览器编译及模块化示例；不主张已经兼容所有现有 SCSS 工程。

## 四、应用场景

compile_files 使用显式虚拟文件映射；CLI 指定项目根目录并拒绝符号链接；网页在 Worker 编译，可取消、导入导出项目及下载 CSS。

## 五、功能与验证边界

固定 Dart Sass 1.104.0 对照为 567 个场景，历史双后端公共 API 回归 589 项。远端 FEATURES.md 明确尚缺完整颜色类型/函数、@extend、@at-root、源码映射和 importer；不能沿用其他草稿的 808 项颜色对照或 0.6 能力承诺。

## 六、原创性与参考材料

原创编译器及场景 MIT。参考 Sass 官方文档 https://sass-lang.com/documentation/ 和 Dart Sass（MIT，https://github.com/sass/dart-sass）固定发行版，仅作开发 oracle，不复制其编译器源码；发行包完整性及已知差异见仓库证据。

## 七、仓库链接

https://github.com/zhengxin-coding/moonbit-scss
