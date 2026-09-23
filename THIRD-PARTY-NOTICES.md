# 许可、来源与贡献边界

本项目自身源码为 MIT。新增 /precss 接入依赖 conglinyizhi/precss@0.1.4，来源：https://github.com/conglinyizhi/precss ，经 Mooncakes 获取，原源码未修改。

precss 采用 Apache-2.0，完整文本见 [licenses/precss-Apache-2.0.txt](licenses/precss-Apache-2.0.txt)。本项目的 web/precss-engine.mjs 包含上游 core、backend/scss、backend/less、backend/css 的编译代码，需与该许可证及本说明一并交付。未发现下载包中的独立 NOTICE 文件。

Compiler 路由、内置 SASS/LESS/CSS 来自上游；虚拟项目 SCSS 引擎和适配器为本库代码。Dart Sass 1.104.0 是固定开发验证依赖，不是编译运行时；其参考输出由实际官方调用产生，本库没有复制官方实现或测试集。

precss 模块声明的其他传递依赖由 Mooncakes 解析下载，本扩展实际导入的 core/backend 包仅依赖 MoonBit core 及彼此；不因此声称复用了上游整个 CLI、SSR 或网络系统。接口和源码哈希见 evidence/precss-integration-20260923/COMPARISON.json。
