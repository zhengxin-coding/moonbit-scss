# 可执行 API 示例

增加保留父选择器上下文的嵌套 @media 编译。这些例子调用公开 API，并随 `moon test` 执行。

```mbt check
///|
test "nested media preserves parent selector" {
  assert_eq(
    @scss.compile(
      ".a{@media (min-width: 600px){color:red;&:hover{color:blue}}}",
    ),
    "@media (min-width: 600px) {\n.a {\n  color: red;\n}\n.a:hover {\n  color: blue;\n}\n}\n",
  )
}
```

限制：示例只是已实现范围的一部分；完整颜色、标准库、选择器、导入器及源码映射等缺项见 FEATURES.md。
