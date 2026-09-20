function _M0DTPB4Json4Null() {}
_M0DTPB4Json4Null.prototype.$tag = 0;
const _M0DTPB4Json4Null__ = new _M0DTPB4Json4Null();
function _M0DTPB4Json4True() {}
_M0DTPB4Json4True.prototype.$tag = 1;
const _M0DTPB4Json4True__ = new _M0DTPB4Json4True();
function _M0DTPB4Json5False() {}
_M0DTPB4Json5False.prototype.$tag = 2;
const _M0DTPB4Json5False__ = new _M0DTPB4Json5False();
function _M0DTPB4Json6Number(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTPB4Json6Number.prototype.$tag = 3;
function _M0DTPB4Json6String(param0) {
  this._0 = param0;
}
_M0DTPB4Json6String.prototype.$tag = 4;
function _M0DTPB4Json5Array(param0) {
  this._0 = param0;
}
_M0DTPB4Json5Array.prototype.$tag = 5;
function _M0DTPB4Json6Object(param0) {
  this._0 = param0;
}
_M0DTPB4Json6Object.prototype.$tag = 6;
const $reinterpret_view = new DataView(new ArrayBuffer(8));
function $i64_reinterpret_f64(a) {
  $reinterpret_view.setBigUint64(0, BigInt.asUintN(64, a), false);
  return $reinterpret_view.getFloat64(0, false);
}
function _M0TPC28internal7strconv9FloatInfo(param0, param1, param2) {
  this.mantissa_bits = param0;
  this.exponent_bits = param1;
  this.bias = param2;
}
function _M0TPB9ArrayViewGUsUiiiiEEE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
class $PanicError extends Error {}
function $panic() {
  throw new $PanicError();
}
function $oob() {
  throw new Error("Index out of bounds");
}
function _M0TPB13StringBuilder(param0) {
  this.val = param0;
}
function _M0TPC16string10StringView(param0, param1, param2) {
  this.str = param0;
  this.start = param1;
  this.end = param2;
}
function $compare_int(a, b) {
  return (a >= b) - (a <= b);
}
const _M0FPB12random__seed = () => {
  if (globalThis.crypto?.getRandomValues) {
    const array = new Uint32Array(1);
    globalThis.crypto.getRandomValues(array);
    return array[0] | 0; // Convert to signed 32
  } else {
    return Math.floor(Math.random() * 0x100000000) | 0; // Fallback to Math.random
  }
};
const _M0FPB19int__to__string__js = (x, radix) => {
  return x.toString(radix);
};
function _M0TPB4IterGUsRPB4JsonEE(param0, param1) {
  this.f = param0;
  this.size_hint = param1;
}
function _M0TPB4IterGcE(param0, param1) {
  this.f = param0;
  this.size_hint = param1;
}
function _M0TPB4IterGdE(param0, param1) {
  this.f = param0;
  this.size_hint = param1;
}
function $make_array_len_and_init(a, b) {
  const arr = new Array(a);
  arr.fill(b);
  return arr;
}
function _M0TPB9ArrayViewGkE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function $makebytes(a, b) {
  const arr = new Uint8Array(a);
  if (b !== 0) {
    arr.fill(b);
  }
  return arr;
}
function _M0TPB8MutLocalGiE(param0) {
  this.val = param0;
}
const _M0MPB7JSArray4push = (arr, val) => { arr.push(val); };
function _M0TPB4IterGRPC16string10StringViewE(param0, param1) {
  this.f = param0;
  this.size_hint = param1;
}
function _M0TPB4IterGsE(param0, param1) {
  this.f = param0;
  this.size_hint = param1;
}
function _M0TPB8MutLocalGORPC16string10StringViewE(param0) {
  this.val = param0;
}
function _M0DTPC16option6OptionGdE4None() {}
_M0DTPC16option6OptionGdE4None.prototype.$tag = 0;
const _M0DTPC16option6OptionGdE4None__ = new _M0DTPC16option6OptionGdE4None();
function _M0DTPC16option6OptionGdE4Some(param0) {
  this._0 = param0;
}
_M0DTPC16option6OptionGdE4Some.prototype.$tag = 1;
function _M0TPB9ArrayViewGcE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function _M0TPB9ArrayViewGsE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function _M0TPB9ArrayViewGdE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function _M0DTPC16result6ResultGiRP217zhengxin_2dcoding4scss10ParseErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGiRP217zhengxin_2dcoding4scss10ParseErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGiRP217zhengxin_2dcoding4scss10ParseErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGiRP217zhengxin_2dcoding4scss10ParseErrorE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGdRP217zhengxin_2dcoding4scss10ParseErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGdRP217zhengxin_2dcoding4scss10ParseErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGdRP217zhengxin_2dcoding4scss10ParseErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGdRP217zhengxin_2dcoding4scss10ParseErrorE2Ok.prototype.$tag = 1;
function _M0TPB3MapGsRPB4JsonE(param0, param1, param2, param3, param4, param5, param6) {
  this.entries = param0;
  this.size = param1;
  this.capacity = param2;
  this.capacity_mask = param3;
  this.grow_at = param4;
  this.head = param5;
  this.tail = param6;
}
function _M0TPB3MapGsRPB5ArrayGsEE(param0, param1, param2, param3, param4, param5, param6) {
  this.entries = param0;
  this.size = param1;
  this.capacity = param2;
  this.capacity_mask = param3;
  this.grow_at = param4;
  this.head = param5;
  this.tail = param6;
}
function _M0TPB3MapGsbE(param0, param1, param2, param3, param4, param5, param6) {
  this.entries = param0;
  this.size = param1;
  this.capacity = param2;
  this.capacity_mask = param3;
  this.grow_at = param4;
  this.head = param5;
  this.tail = param6;
}
function _M0TPB3MapGibE(param0, param1, param2, param3, param4, param5, param6) {
  this.entries = param0;
  this.size = param1;
  this.capacity = param2;
  this.capacity_mask = param3;
  this.grow_at = param4;
  this.head = param5;
  this.tail = param6;
}
function _M0TPB5EntryGssE(param0, param1, param2, param3, param4, param5) {
  this.prev = param0;
  this.next = param1;
  this.psl = param2;
  this.hash = param3;
  this.key = param4;
  this.value = param5;
}
function _M0TPB5EntryGsRPB4JsonE(param0, param1, param2, param3, param4, param5) {
  this.prev = param0;
  this.next = param1;
  this.psl = param2;
  this.hash = param3;
  this.key = param4;
  this.value = param5;
}
function _M0TPB5EntryGsRPB5ArrayGsEE(param0, param1, param2, param3, param4, param5) {
  this.prev = param0;
  this.next = param1;
  this.psl = param2;
  this.hash = param3;
  this.key = param4;
  this.value = param5;
}
function _M0TPB5EntryGsRP217zhengxin_2dcoding4scss9SassValueE(param0, param1, param2, param3, param4, param5) {
  this.prev = param0;
  this.next = param1;
  this.psl = param2;
  this.hash = param3;
  this.key = param4;
  this.value = param5;
}
function _M0TPB5EntryGsbE(param0, param1, param2, param3, param4, param5) {
  this.prev = param0;
  this.next = param1;
  this.psl = param2;
  this.hash = param3;
  this.key = param4;
  this.value = param5;
}
function _M0TPB5EntryGsRP217zhengxin_2dcoding4scss5ScopeE(param0, param1, param2, param3, param4, param5) {
  this.prev = param0;
  this.next = param1;
  this.psl = param2;
  this.hash = param3;
  this.key = param4;
  this.value = param5;
}
function _M0TPB5EntryGsRP217zhengxin_2dcoding4scss5MixinE(param0, param1, param2, param3, param4, param5) {
  this.prev = param0;
  this.next = param1;
  this.psl = param2;
  this.hash = param3;
  this.key = param4;
  this.value = param5;
}
function _M0TPB5EntryGsURP217zhengxin_2dcoding4scss5ScopesEE(param0, param1, param2, param3, param4, param5) {
  this.prev = param0;
  this.next = param1;
  this.psl = param2;
  this.hash = param3;
  this.key = param4;
  this.value = param5;
}
function _M0TPB5EntryGibE(param0, param1, param2, param3, param4, param5) {
  this.prev = param0;
  this.next = param1;
  this.psl = param2;
  this.hash = param3;
  this.key = param4;
  this.value = param5;
}
function _M0TPB5EntryGsUiiiiEE(param0, param1, param2, param3, param4, param5) {
  this.prev = param0;
  this.next = param1;
  this.psl = param2;
  this.hash = param3;
  this.key = param4;
  this.value = param5;
}
function _M0TPB5EntryGsRPC15debug4ReprE(param0, param1, param2, param3, param4, param5) {
  this.prev = param0;
  this.next = param1;
  this.psl = param2;
  this.hash = param3;
  this.key = param4;
  this.value = param5;
}
function _M0DTPC16option6OptionGRPB5ArrayGsEE4None() {}
_M0DTPC16option6OptionGRPB5ArrayGsEE4None.prototype.$tag = 0;
const _M0DTPC16option6OptionGRPB5ArrayGsEE4None__ = new _M0DTPC16option6OptionGRPB5ArrayGsEE4None();
function _M0DTPC16option6OptionGRPB5ArrayGsEE4Some(param0) {
  this._0 = param0;
}
_M0DTPC16option6OptionGRPB5ArrayGsEE4Some.prototype.$tag = 1;
function _M0TPB8MutLocalGORPB5EntryGsRPB4JsonEE(param0) {
  this.val = param0;
}
function _M0TPB8MutLocalGORPB5EntryGsbEE(param0) {
  this.val = param0;
}
function _M0TPB3MapGsRP217zhengxin_2dcoding4scss9SassValueE(param0, param1, param2, param3, param4, param5, param6) {
  this.entries = param0;
  this.size = param1;
  this.capacity = param2;
  this.capacity_mask = param3;
  this.grow_at = param4;
  this.head = param5;
  this.tail = param6;
}
function _M0DTPC16result6ResultGRPB5ArrayGsERP217zhengxin_2dcoding4scss10ParseErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPB5ArrayGsERP217zhengxin_2dcoding4scss10ParseErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRPB5ArrayGsERP217zhengxin_2dcoding4scss10ParseErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPB5ArrayGsERP217zhengxin_2dcoding4scss10ParseErrorE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGRPB5ArrayGRP217zhengxin_2dcoding4scss9SassValueERP217zhengxin_2dcoding4scss10ParseErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPB5ArrayGRP217zhengxin_2dcoding4scss9SassValueERP217zhengxin_2dcoding4scss10ParseErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRPB5ArrayGRP217zhengxin_2dcoding4scss9SassValueERP217zhengxin_2dcoding4scss10ParseErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPB5ArrayGRP217zhengxin_2dcoding4scss9SassValueERP217zhengxin_2dcoding4scss10ParseErrorE2Ok.prototype.$tag = 1;
const _M0MPB7JSArray4copy = (arr) => arr.slice(0);
const _M0MPB7JSArray11set__length = (arr, len) => { arr.length = len; };
const _M0MPB7JSArray12append__view = (dst, src, src_offset, len) => {
   for (let i = 0; i < len; i++) {
     dst.push(src[src_offset + i]);
   }
 };
const _M0MPB7JSArray3pop = (arr) => arr.pop();
const _M0MPB7JSArray6splice = (arr, idx, cnt) => arr.splice(idx, cnt);
function _M0TPB9ArrayViewGRPC16string10StringViewE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function _M0DTPC15debug4Repr7UnitLit() {}
_M0DTPC15debug4Repr7UnitLit.prototype.$tag = 0;
function _M0DTPC15debug4Repr7Integer(param0) {
  this._0 = param0;
}
_M0DTPC15debug4Repr7Integer.prototype.$tag = 1;
function _M0DTPC15debug4Repr9DoubleLit(param0) {
  this._0 = param0;
}
_M0DTPC15debug4Repr9DoubleLit.prototype.$tag = 2;
function _M0DTPC15debug4Repr8FloatLit(param0) {
  this._0 = param0;
}
_M0DTPC15debug4Repr8FloatLit.prototype.$tag = 3;
function _M0DTPC15debug4Repr7BoolLit(param0) {
  this._0 = param0;
}
_M0DTPC15debug4Repr7BoolLit.prototype.$tag = 4;
function _M0DTPC15debug4Repr7CharLit(param0) {
  this._0 = param0;
}
_M0DTPC15debug4Repr7CharLit.prototype.$tag = 5;
function _M0DTPC15debug4Repr9StringLit(param0) {
  this._0 = param0;
}
_M0DTPC15debug4Repr9StringLit.prototype.$tag = 6;
function _M0DTPC15debug4Repr5Tuple(param0) {
  this._0 = param0;
}
_M0DTPC15debug4Repr5Tuple.prototype.$tag = 7;
function _M0DTPC15debug4Repr5Array(param0) {
  this._0 = param0;
}
_M0DTPC15debug4Repr5Array.prototype.$tag = 8;
function _M0DTPC15debug4Repr6Record(param0) {
  this._0 = param0;
}
_M0DTPC15debug4Repr6Record.prototype.$tag = 9;
function _M0DTPC15debug4Repr4Enum(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTPC15debug4Repr4Enum.prototype.$tag = 10;
function _M0DTPC15debug4Repr3Map(param0) {
  this._0 = param0;
}
_M0DTPC15debug4Repr3Map.prototype.$tag = 11;
function _M0DTPC15debug4Repr11RecordField(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTPC15debug4Repr11RecordField.prototype.$tag = 12;
function _M0DTPC15debug4Repr14EnumLabeledArg(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTPC15debug4Repr14EnumLabeledArg.prototype.$tag = 13;
function _M0DTPC15debug4Repr6Opaque(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTPC15debug4Repr6Opaque.prototype.$tag = 14;
function _M0DTPC15debug4Repr7Literal(param0) {
  this._0 = param0;
}
_M0DTPC15debug4Repr7Literal.prototype.$tag = 15;
function _M0DTPC15debug4Repr8MapEntry(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTPC15debug4Repr8MapEntry.prototype.$tag = 16;
function _M0DTPC15debug4Repr7Omitted() {}
_M0DTPC15debug4Repr7Omitted.prototype.$tag = 17;
const _M0DTPC15debug4Repr7Omitted__ = new _M0DTPC15debug4Repr7Omitted();
function _M0TPC15debug13ContentParens(param0, param1) {
  this.size = param0;
  this.lines = param1;
}
function _M0TPC15debug7Content(param0, param1, param2) {
  this.size = param0;
  this.lines = param1;
  this.needs_parens = param2;
}
function _M0TPC13ref3RefGiE(param0) {
  this.val = param0;
}
function _M0TPC13ref3RefGORP217zhengxin_2dcoding4scss9SassValueE(param0) {
  this.val = param0;
}
function _M0DTPC16result6ResultGUiRPC16string10StringViewbERPB7FailureE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGUiRPC16string10StringViewbERPB7FailureE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGUiRPC16string10StringViewbERPB7FailureE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGUiRPC16string10StringViewbERPB7FailureE2Ok.prototype.$tag = 1;
function _M0DTPC15error5Error52moonbitlang_2fcore_2fjson_2eParseError_2eInvalidChar(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTPC15error5Error52moonbitlang_2fcore_2fjson_2eParseError_2eInvalidChar.prototype.$tag = 6;
function _M0DTPC15error5Error51moonbitlang_2fcore_2fjson_2eParseError_2eInvalidEof() {}
_M0DTPC15error5Error51moonbitlang_2fcore_2fjson_2eParseError_2eInvalidEof.prototype.$tag = 5;
const _M0DTPC15error5Error51moonbitlang_2fcore_2fjson_2eParseError_2eInvalidEof__ = new _M0DTPC15error5Error51moonbitlang_2fcore_2fjson_2eParseError_2eInvalidEof();
function _M0DTPC15error5Error54moonbitlang_2fcore_2fjson_2eParseError_2eInvalidNumber(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTPC15error5Error54moonbitlang_2fcore_2fjson_2eParseError_2eInvalidNumber.prototype.$tag = 4;
function _M0DTPC15error5Error59moonbitlang_2fcore_2fjson_2eParseError_2eInvalidIdentEscape(param0) {
  this._0 = param0;
}
_M0DTPC15error5Error59moonbitlang_2fcore_2fjson_2eParseError_2eInvalidIdentEscape.prototype.$tag = 3;
function _M0DTPC15error5Error59moonbitlang_2fcore_2fjson_2eParseError_2eDepthLimitExceeded() {}
_M0DTPC15error5Error59moonbitlang_2fcore_2fjson_2eParseError_2eDepthLimitExceeded.prototype.$tag = 2;
const _M0DTPC15error5Error59moonbitlang_2fcore_2fjson_2eParseError_2eDepthLimitExceeded__ = new _M0DTPC15error5Error59moonbitlang_2fcore_2fjson_2eParseError_2eDepthLimitExceeded();
function _M0DTPC15error5Error48moonbitlang_2fcore_2fbuiltin_2eFailure_2eFailure(param0) {
  this._0 = param0;
}
_M0DTPC15error5Error48moonbitlang_2fcore_2fbuiltin_2eFailure_2eFailure.prototype.$tag = 1;
function _M0DTPC15error5Error47zhengxin_2dcoding_2fscss_2eParseError_2eInvalid(param0) {
  this._0 = param0;
}
_M0DTPC15error5Error47zhengxin_2dcoding_2fscss_2eParseError_2eInvalid.prototype.$tag = 0;
function _M0DTPC16result6ResultGUiRPC16string10StringViewbERPC15error5ErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGUiRPC16string10StringViewbERPC15error5ErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGUiRPC16string10StringViewbERPC15error5ErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGUiRPC16string10StringViewbERPC15error5ErrorE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGuRPB7FailureE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGuRPB7FailureE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGuRPB7FailureE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGuRPB7FailureE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGdRPB7FailureE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGdRPB7FailureE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGdRPB7FailureE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGdRPB7FailureE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGORPC28internal7strconv6NumberRPB7FailureE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGORPC28internal7strconv6NumberRPB7FailureE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGORPC28internal7strconv6NumberRPB7FailureE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGORPC28internal7strconv6NumberRPB7FailureE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGiRPB7FailureE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGiRPB7FailureE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGiRPB7FailureE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGiRPB7FailureE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGlRPB7FailureE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGlRPB7FailureE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGlRPB7FailureE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGlRPB7FailureE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGORPC28internal7strconv6NumberRPC15error5ErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGORPC28internal7strconv6NumberRPC15error5ErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGORPC28internal7strconv6NumberRPC15error5ErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGORPC28internal7strconv6NumberRPC15error5ErrorE2Ok.prototype.$tag = 1;
function _M0TPC28internal7strconv6Number(param0, param1, param2, param3) {
  this.exponent = param0;
  this.mantissa = param1;
  this.negative = param2;
  this.many_digits = param3;
}
function _M0DTPC16result6ResultGdRPC15error5ErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGdRPC15error5ErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGdRPC15error5ErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGdRPC15error5ErrorE2Ok.prototype.$tag = 1;
function $i64_clz(a) {
  a = BigInt.asUintN(64, a);
  if (a === 0n) return 64;
  const hi = Number(a >> 32n);
  if (hi !== 0) {
    return Math.clz32(hi);
  }
  return 32 + Math.clz32(Number(a & 0xffffffffn));
}
function _M0DTPC16result6ResultGlRPC15error5ErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGlRPC15error5ErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGlRPC15error5ErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGlRPC15error5ErrorE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGiRPC15error5ErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGiRPC15error5ErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGiRPC15error5ErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGiRPC15error5ErrorE2Ok.prototype.$tag = 1;
function _M0TPC28internal7strconv12EiselProduct(param0, param1) {
  this.lo = param0;
  this.hi = param1;
}
function _M0TPC28internal7strconv7Decimal(param0, param1, param2, param3, param4, param5) {
  this.digits = param0;
  this.digits_num = param1;
  this.decimal_point = param2;
  this.negative = param3;
  this.truncated = param4;
  this.overflowed = param5;
}
function _M0DTPC16result6ResultGRPC28internal7strconv7DecimalRPC15error5ErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPC28internal7strconv7DecimalRPC15error5ErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRPC28internal7strconv7DecimalRPC15error5ErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPC28internal7strconv7DecimalRPC15error5ErrorE2Ok.prototype.$tag = 1;
function $f64_convert_i64_u(a) {
  return Number(a);
}
function _M0TPB9ArrayViewGUsRPC15debug4ReprEE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function _M0TPC14json8Position(param0, param1) {
  this.line = param0;
  this.column = param1;
}
function _M0DTPC16result6ResultGRPB4JsonRPC14json10ParseErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPB4JsonRPC14json10ParseErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRPB4JsonRPC14json10ParseErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPB4JsonRPC14json10ParseErrorE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGuRPC14json10ParseErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGuRPC14json10ParseErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGuRPC14json10ParseErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGuRPC14json10ParseErrorE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGiRPC14json10ParseErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGiRPC14json10ParseErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGiRPC14json10ParseErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGiRPC14json10ParseErrorE2Ok.prototype.$tag = 1;
function _M0TPC14json12ParseContext(param0, param1, param2) {
  this.offset = param0;
  this.input = param1;
  this.end_offset = param2;
}
function $f64_convert_i64(a) {
  return Number(BigInt.asIntN(64, a));
}
function _M0TPC14json11LexedNumber(param0, param1) {
  this.repr = param0;
  this.value = param1;
}
function _M0TPC14json14JsonNumberScan(param0, param1, param2, param3, param4) {
  this.negative = param0;
  this.is_integer = param1;
  this.mantissa = param2;
  this.exponent = param3;
  this.many_digits = param4;
}
function _M0DTPC16result6ResultGRPC14json11LexedNumberRPC14json10ParseErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPC14json11LexedNumberRPC14json10ParseErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRPC14json11LexedNumberRPC14json10ParseErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPC14json11LexedNumberRPC14json10ParseErrorE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGsRPC14json10ParseErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGsRPC14json10ParseErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGsRPC14json10ParseErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGsRPC14json10ParseErrorE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE2Ok.prototype.$tag = 1;
function _M0DTPC14json5Token4Null() {}
_M0DTPC14json5Token4Null.prototype.$tag = 0;
const _M0DTPC14json5Token4Null__ = new _M0DTPC14json5Token4Null();
function _M0DTPC14json5Token4True() {}
_M0DTPC14json5Token4True.prototype.$tag = 1;
const _M0DTPC14json5Token4True__ = new _M0DTPC14json5Token4True();
function _M0DTPC14json5Token5False() {}
_M0DTPC14json5Token5False.prototype.$tag = 2;
const _M0DTPC14json5Token5False__ = new _M0DTPC14json5Token5False();
function _M0DTPC14json5Token6Number(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTPC14json5Token6Number.prototype.$tag = 3;
function _M0DTPC14json5Token6String(param0) {
  this._0 = param0;
}
_M0DTPC14json5Token6String.prototype.$tag = 4;
function _M0DTPC14json5Token6LBrace() {}
_M0DTPC14json5Token6LBrace.prototype.$tag = 5;
const _M0DTPC14json5Token6LBrace__ = new _M0DTPC14json5Token6LBrace();
function _M0DTPC14json5Token6RBrace() {}
_M0DTPC14json5Token6RBrace.prototype.$tag = 6;
const _M0DTPC14json5Token6RBrace__ = new _M0DTPC14json5Token6RBrace();
function _M0DTPC14json5Token8LBracket() {}
_M0DTPC14json5Token8LBracket.prototype.$tag = 7;
const _M0DTPC14json5Token8LBracket__ = new _M0DTPC14json5Token8LBracket();
function _M0DTPC14json5Token8RBracket() {}
_M0DTPC14json5Token8RBracket.prototype.$tag = 8;
const _M0DTPC14json5Token8RBracket__ = new _M0DTPC14json5Token8RBracket();
function _M0DTPC14json5Token5Comma() {}
_M0DTPC14json5Token5Comma.prototype.$tag = 9;
const _M0DTPC14json5Token5Comma__ = new _M0DTPC14json5Token5Comma();
function _M0TPB9ArrayViewGUsRPB4JsonEE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function _M0DTPC14json10WriteFrame5Array(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTPC14json10WriteFrame5Array.prototype.$tag = 0;
function _M0DTPC14json10WriteFrame6Object(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTPC14json10WriteFrame6Object.prototype.$tag = 1;
function _M0DTP217zhengxin_2dcoding4scss9SassValue6Number(param0) {
  this._0 = param0;
}
_M0DTP217zhengxin_2dcoding4scss9SassValue6Number.prototype.$tag = 0;
function _M0DTP217zhengxin_2dcoding4scss9SassValue5Color(param0) {
  this._0 = param0;
}
_M0DTP217zhengxin_2dcoding4scss9SassValue5Color.prototype.$tag = 1;
function _M0DTP217zhengxin_2dcoding4scss9SassValue4Text(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTP217zhengxin_2dcoding4scss9SassValue4Text.prototype.$tag = 2;
function _M0DTP217zhengxin_2dcoding4scss9SassValue7Boolean(param0) {
  this._0 = param0;
}
_M0DTP217zhengxin_2dcoding4scss9SassValue7Boolean.prototype.$tag = 3;
function _M0DTP217zhengxin_2dcoding4scss9SassValue4Null() {}
_M0DTP217zhengxin_2dcoding4scss9SassValue4Null.prototype.$tag = 4;
const _M0DTP217zhengxin_2dcoding4scss9SassValue4Null__ = new _M0DTP217zhengxin_2dcoding4scss9SassValue4Null();
function _M0DTP217zhengxin_2dcoding4scss9SassValue4List(param0, param1, param2) {
  this._0 = param0;
  this._1 = param1;
  this._2 = param2;
}
_M0DTP217zhengxin_2dcoding4scss9SassValue4List.prototype.$tag = 5;
function _M0DTP217zhengxin_2dcoding4scss9SassValue10Dictionary(param0) {
  this._0 = param0;
}
_M0DTP217zhengxin_2dcoding4scss9SassValue10Dictionary.prototype.$tag = 6;
function _M0TP217zhengxin_2dcoding4scss10SassNumber(param0, param1, param2) {
  this.amount = param0;
  this.numerator = param1;
  this.denominator = param2;
}
function _M0TPB8MutLocalGdE(param0) {
  this.val = param0;
}
function _M0DTPC16result6ResultGuRP217zhengxin_2dcoding4scss10ParseErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGuRP217zhengxin_2dcoding4scss10ParseErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGuRP217zhengxin_2dcoding4scss10ParseErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGuRP217zhengxin_2dcoding4scss10ParseErrorE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGsRP217zhengxin_2dcoding4scss10ParseErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGsRP217zhengxin_2dcoding4scss10ParseErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGsRP217zhengxin_2dcoding4scss10ParseErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGsRP217zhengxin_2dcoding4scss10ParseErrorE2Ok.prototype.$tag = 1;
function _M0TPB8MutLocalGsE(param0) {
  this.val = param0;
}
function _M0DTPC16result6ResultGRP217zhengxin_2dcoding4scss9SassValueRP217zhengxin_2dcoding4scss10ParseErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP217zhengxin_2dcoding4scss9SassValueRP217zhengxin_2dcoding4scss10ParseErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRP217zhengxin_2dcoding4scss9SassValueRP217zhengxin_2dcoding4scss10ParseErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP217zhengxin_2dcoding4scss9SassValueRP217zhengxin_2dcoding4scss10ParseErrorE2Ok.prototype.$tag = 1;
function _M0TP217zhengxin_2dcoding4scss10Evaluation(param0, param1, param2, param3, param4, param5, param6, param7, param8, param9) {
  this.remaining = param0;
  this.calls = param1;
  this.files = param2;
  this.loaded = param3;
  this.loading = param4;
  this.order = param5;
  this.css = param6;
  this.extensions = param7;
  this.dependencies = param8;
  this.diagnostics = param9;
}
function _M0TPB9ArrayViewGUssEE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function _M0TPB9ArrayViewGUsRP217zhengxin_2dcoding4scss5ScopeEE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function _M0TPB9ArrayViewGUsRPB5ArrayGsEEE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function _M0TP217zhengxin_2dcoding4scss9SassColor(param0, param1, param2, param3, param4, param5, param6) {
  this.red = param0;
  this.green = param1;
  this.blue = param2;
  this.alpha = param3;
  this.format = param4;
  this.original = param5;
  this.hsl_channels = param6;
}
function _M0DTPC16result6ResultGORP217zhengxin_2dcoding4scss9SassValueRP217zhengxin_2dcoding4scss10ParseErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGORP217zhengxin_2dcoding4scss9SassValueRP217zhengxin_2dcoding4scss10ParseErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGORP217zhengxin_2dcoding4scss9SassValueRP217zhengxin_2dcoding4scss10ParseErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGORP217zhengxin_2dcoding4scss9SassValueRP217zhengxin_2dcoding4scss10ParseErrorE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGRP217zhengxin_2dcoding4scss10ExpressionRP217zhengxin_2dcoding4scss10ParseErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP217zhengxin_2dcoding4scss10ExpressionRP217zhengxin_2dcoding4scss10ParseErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRP217zhengxin_2dcoding4scss10ExpressionRP217zhengxin_2dcoding4scss10ParseErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP217zhengxin_2dcoding4scss10ExpressionRP217zhengxin_2dcoding4scss10ParseErrorE2Ok.prototype.$tag = 1;
function _M0TPB8MutLocalGbE(param0) {
  this.val = param0;
}
function _M0DTP217zhengxin_2dcoding4scss10Expression7Literal(param0) {
  this._0 = param0;
}
_M0DTP217zhengxin_2dcoding4scss10Expression7Literal.prototype.$tag = 0;
function _M0DTP217zhengxin_2dcoding4scss10Expression8Variable(param0) {
  this._0 = param0;
}
_M0DTP217zhengxin_2dcoding4scss10Expression8Variable.prototype.$tag = 1;
function _M0DTP217zhengxin_2dcoding4scss10Expression5Unary(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTP217zhengxin_2dcoding4scss10Expression5Unary.prototype.$tag = 2;
function _M0DTP217zhengxin_2dcoding4scss10Expression6Binary(param0, param1, param2) {
  this._0 = param0;
  this._1 = param1;
  this._2 = param2;
}
_M0DTP217zhengxin_2dcoding4scss10Expression6Binary.prototype.$tag = 3;
function _M0DTP217zhengxin_2dcoding4scss10Expression8Sequence(param0, param1, param2) {
  this._0 = param0;
  this._1 = param1;
  this._2 = param2;
}
_M0DTP217zhengxin_2dcoding4scss10Expression8Sequence.prototype.$tag = 4;
function _M0DTP217zhengxin_2dcoding4scss10Expression7Mapping(param0) {
  this._0 = param0;
}
_M0DTP217zhengxin_2dcoding4scss10Expression7Mapping.prototype.$tag = 5;
function _M0DTP217zhengxin_2dcoding4scss10Expression4Call(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTP217zhengxin_2dcoding4scss10Expression4Call.prototype.$tag = 6;
function _M0DTP217zhengxin_2dcoding4scss10Expression7RawCall(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTP217zhengxin_2dcoding4scss10Expression7RawCall.prototype.$tag = 7;
function _M0DTP217zhengxin_2dcoding4scss10Expression12Interpolated(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTP217zhengxin_2dcoding4scss10Expression12Interpolated.prototype.$tag = 8;
function _M0DTP217zhengxin_2dcoding4scss10Expression5Group(param0) {
  this._0 = param0;
}
_M0DTP217zhengxin_2dcoding4scss10Expression5Group.prototype.$tag = 9;
function _M0TPB8MutLocalGRP217zhengxin_2dcoding4scss10ExpressionE(param0) {
  this.val = param0;
}
function _M0TPB8MutLocalGRPB13StringBuilderE(param0) {
  this.val = param0;
}
function _M0TPB8MutLocalGcE(param0) {
  this.val = param0;
}
function _M0TPB8MutLocalGOsE(param0) {
  this.val = param0;
}
function _M0TP217zhengxin_2dcoding4scss16ExpressionParser(param0, param1, param2) {
  this.chars = param0;
  this.pos = param1;
  this.depth = param2;
}
function _M0TP217zhengxin_2dcoding4scss5Scope(param0, param1, param2, param3, param4, param5, param6, param7, param8, param9, param10, param11, param12, param13, param14, param15) {
  this.vars = param0;
  this.mixins = param1;
  this.functions = param2;
  this.standard_modules = param3;
  this.module_scopes = param4;
  this.star_scopes = param5;
  this.forwarded_vars = param6;
  this.forwarded_mixins = param7;
  this.forwarded_functions = param8;
  this.configured = param9;
  this.configuration = param10;
  this.path = param11;
  this.evaluation = param12;
  this.returned = param13;
  this.flow = param14;
  this.parent = param15;
}
function _M0TPB9ArrayViewGUsRP217zhengxin_2dcoding4scss9SassValueEE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function _M0TPB9ArrayViewGUsRP217zhengxin_2dcoding4scss5MixinEE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function _M0TPB9ArrayViewGUsURP217zhengxin_2dcoding4scss5ScopesEEE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function _M0TPB9ArrayViewGUsbEE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function _M0DTPC16result6ResultGRP217zhengxin_2dcoding4scss10SassNumberRP217zhengxin_2dcoding4scss10ParseErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP217zhengxin_2dcoding4scss10SassNumberRP217zhengxin_2dcoding4scss10ParseErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRP217zhengxin_2dcoding4scss10SassNumberRP217zhengxin_2dcoding4scss10ParseErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP217zhengxin_2dcoding4scss10SassNumberRP217zhengxin_2dcoding4scss10ParseErrorE2Ok.prototype.$tag = 1;
function _M0DTPC16option6OptionGOsE4None() {}
_M0DTPC16option6OptionGOsE4None.prototype.$tag = 0;
const _M0DTPC16option6OptionGOsE4None__ = new _M0DTPC16option6OptionGOsE4None();
function _M0DTPC16option6OptionGOsE4Some(param0) {
  this._0 = param0;
}
_M0DTPC16option6OptionGOsE4Some.prototype.$tag = 1;
function _M0DTPC16result6ResultGRP217zhengxin_2dcoding4scss9SassColorRP217zhengxin_2dcoding4scss10ParseErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP217zhengxin_2dcoding4scss9SassColorRP217zhengxin_2dcoding4scss10ParseErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRP217zhengxin_2dcoding4scss9SassColorRP217zhengxin_2dcoding4scss10ParseErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP217zhengxin_2dcoding4scss9SassColorRP217zhengxin_2dcoding4scss10ParseErrorE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGRPB5ArrayGURP217zhengxin_2dcoding4scss9SassValueRP217zhengxin_2dcoding4scss9SassValueEERP217zhengxin_2dcoding4scss10ParseErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPB5ArrayGURP217zhengxin_2dcoding4scss9SassValueRP217zhengxin_2dcoding4scss9SassValueEERP217zhengxin_2dcoding4scss10ParseErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRPB5ArrayGURP217zhengxin_2dcoding4scss9SassValueRP217zhengxin_2dcoding4scss9SassValueEERP217zhengxin_2dcoding4scss10ParseErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPB5ArrayGURP217zhengxin_2dcoding4scss9SassValueRP217zhengxin_2dcoding4scss9SassValueEERP217zhengxin_2dcoding4scss10ParseErrorE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGUsbERP217zhengxin_2dcoding4scss10ParseErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGUsbERP217zhengxin_2dcoding4scss10ParseErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGUsbERP217zhengxin_2dcoding4scss10ParseErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGUsbERP217zhengxin_2dcoding4scss10ParseErrorE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGURP217zhengxin_2dcoding4scss5ScopesERP217zhengxin_2dcoding4scss10ParseErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGURP217zhengxin_2dcoding4scss5ScopesERP217zhengxin_2dcoding4scss10ParseErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGURP217zhengxin_2dcoding4scss5ScopesERP217zhengxin_2dcoding4scss10ParseErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGURP217zhengxin_2dcoding4scss5ScopesERP217zhengxin_2dcoding4scss10ParseErrorE2Ok.prototype.$tag = 1;
function _M0TPB8MutLocalGOURP217zhengxin_2dcoding4scss5ScopesEE(param0) {
  this.val = param0;
}
function _M0DTPC16result6ResultGOURP217zhengxin_2dcoding4scss5ScopesERP217zhengxin_2dcoding4scss10ParseErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGOURP217zhengxin_2dcoding4scss5ScopesERP217zhengxin_2dcoding4scss10ParseErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGOURP217zhengxin_2dcoding4scss5ScopesERP217zhengxin_2dcoding4scss10ParseErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGOURP217zhengxin_2dcoding4scss5ScopesERP217zhengxin_2dcoding4scss10ParseErrorE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGORP217zhengxin_2dcoding4scss5MixinRP217zhengxin_2dcoding4scss10ParseErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGORP217zhengxin_2dcoding4scss5MixinRP217zhengxin_2dcoding4scss10ParseErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGORP217zhengxin_2dcoding4scss5MixinRP217zhengxin_2dcoding4scss10ParseErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGORP217zhengxin_2dcoding4scss5MixinRP217zhengxin_2dcoding4scss10ParseErrorE2Ok.prototype.$tag = 1;
function _M0TPB8MutLocalGORP217zhengxin_2dcoding4scss5MixinE(param0) {
  this.val = param0;
}
function _M0TPB9ArrayViewGUibEE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function _M0TPB8MutLocalGRP217zhengxin_2dcoding4scss10SassNumberE(param0) {
  this.val = param0;
}
function _M0TPB8MutLocalGRP217zhengxin_2dcoding4scss9SassValueE(param0) {
  this.val = param0;
}
function _M0DTPC16result6ResultGUsRPB5ArrayGsEERP217zhengxin_2dcoding4scss10ParseErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGUsRPB5ArrayGsEERP217zhengxin_2dcoding4scss10ParseErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGUsRPB5ArrayGsEERP217zhengxin_2dcoding4scss10ParseErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGUsRPB5ArrayGsEERP217zhengxin_2dcoding4scss10ParseErrorE2Ok.prototype.$tag = 1;
function _M0TPB8MutLocalGRPB5ArrayGsEE(param0) {
  this.val = param0;
}
function _M0DTPC16result6ResultGURPB5ArrayGsEbERP217zhengxin_2dcoding4scss10ParseErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGURPB5ArrayGsEbERP217zhengxin_2dcoding4scss10ParseErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGURPB5ArrayGsEbERP217zhengxin_2dcoding4scss10ParseErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGURPB5ArrayGsEbERP217zhengxin_2dcoding4scss10ParseErrorE2Ok.prototype.$tag = 1;
function _M0TP217zhengxin_2dcoding4scss7CssRule(param0, param1, param2, param3) {
  this.selectors = param0;
  this.declarations = param1;
  this.context = param2;
  this.path = param3;
}
function _M0TP217zhengxin_2dcoding4scss9Extension(param0, param1, param2, param3, param4, param5) {
  this.target = param0;
  this.selectors = param1;
  this.context = param2;
  this.path = param3;
  this.optional = param4;
  this.matched = param5;
}
function _M0TPB9ArrayViewGRP217zhengxin_2dcoding4scss7CssRuleE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function _M0TPB9ArrayViewGUiRPB5ArrayGRP217zhengxin_2dcoding4scss7CssRuleEEE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function _M0DTPC16result6ResultGUsbbRPB5ArrayGsEERP217zhengxin_2dcoding4scss10ParseErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGUsbbRPB5ArrayGsEERP217zhengxin_2dcoding4scss10ParseErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGUsbbRPB5ArrayGsEERP217zhengxin_2dcoding4scss10ParseErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGUsbbRPB5ArrayGsEERP217zhengxin_2dcoding4scss10ParseErrorE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGUscERP217zhengxin_2dcoding4scss10ParseErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGUscERP217zhengxin_2dcoding4scss10ParseErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGUscERP217zhengxin_2dcoding4scss10ParseErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGUscERP217zhengxin_2dcoding4scss10ParseErrorE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGRPB5ArrayGRP217zhengxin_2dcoding4scss9StatementERP217zhengxin_2dcoding4scss10ParseErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPB5ArrayGRP217zhengxin_2dcoding4scss9StatementERP217zhengxin_2dcoding4scss10ParseErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRPB5ArrayGRP217zhengxin_2dcoding4scss9StatementERP217zhengxin_2dcoding4scss10ParseErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPB5ArrayGRP217zhengxin_2dcoding4scss9StatementERP217zhengxin_2dcoding4scss10ParseErrorE2Ok.prototype.$tag = 1;
function _M0DTP217zhengxin_2dcoding4scss9Statement4Leaf(param0) {
  this._0 = param0;
}
_M0DTP217zhengxin_2dcoding4scss9Statement4Leaf.prototype.$tag = 0;
function _M0DTP217zhengxin_2dcoding4scss9Statement5Block(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTP217zhengxin_2dcoding4scss9Statement5Block.prototype.$tag = 1;
function _M0TP217zhengxin_2dcoding4scss7Emitter(param0, param1, param2, param3, param4, param5, param6, param7, param8, param9, param10) {
  this.output = param0;
  this.extensions = param1;
  this.path = param2;
  this.context = param3;
  this.root_parent = param4;
  this.hoisted = param5;
  this.size = param6;
  this.budget = param7;
  this.pending_size = param8;
  this.pending = param9;
  this.parents = param10;
}
function _M0DTPC16result6ResultGRP217zhengxin_2dcoding4scss5ScopeRP217zhengxin_2dcoding4scss10ParseErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP217zhengxin_2dcoding4scss5ScopeRP217zhengxin_2dcoding4scss10ParseErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRP217zhengxin_2dcoding4scss5ScopeRP217zhengxin_2dcoding4scss10ParseErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP217zhengxin_2dcoding4scss5ScopeRP217zhengxin_2dcoding4scss10ParseErrorE2Ok.prototype.$tag = 1;
function _M0TPB8MutLocalGObE(param0) {
  this.val = param0;
}
function _M0TP217zhengxin_2dcoding4scss7Content(param0, param1, param2) {
  this.body = param0;
  this.scope = param1;
  this.outer = param2;
}
function _M0TP217zhengxin_2dcoding4scss5Mixin(param0, param1, param2, param3, param4) {
  this.name = param0;
  this.params = param1;
  this.rest = param2;
  this.body = param3;
  this.scope = param4;
}
function _M0DTPC16result6ResultGbRP217zhengxin_2dcoding4scss10ParseErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGbRP217zhengxin_2dcoding4scss10ParseErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGbRP217zhengxin_2dcoding4scss10ParseErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGbRP217zhengxin_2dcoding4scss10ParseErrorE2Ok.prototype.$tag = 1;
function _M0TPB8MutLocalGRPB5ArrayGRPC16string10StringViewEE(param0) {
  this.val = param0;
}
function _M0TP217zhengxin_2dcoding4scss6Source(param0, param1) {
  this.chars = param0;
  this.pos = param1;
}
function _M0DTPC16result6ResultGUbRPB5ArrayGsEERP217zhengxin_2dcoding4scss10ParseErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGUbRPB5ArrayGsEERP217zhengxin_2dcoding4scss10ParseErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGUbRPB5ArrayGsEERP217zhengxin_2dcoding4scss10ParseErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGUbRPB5ArrayGsEERP217zhengxin_2dcoding4scss10ParseErrorE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGRP217zhengxin_2dcoding4scss11CompilationRP217zhengxin_2dcoding4scss10ParseErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP217zhengxin_2dcoding4scss11CompilationRP217zhengxin_2dcoding4scss10ParseErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRP217zhengxin_2dcoding4scss11CompilationRP217zhengxin_2dcoding4scss10ParseErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP217zhengxin_2dcoding4scss11CompilationRP217zhengxin_2dcoding4scss10ParseErrorE2Ok.prototype.$tag = 1;
function _M0TP217zhengxin_2dcoding4scss11Compilation(param0, param1, param2) {
  this.css = param0;
  this.loaded_files = param1;
  this.diagnostics = param2;
}
const _M0FP092moonbitlang_2fcore_2fbuiltin_2fStringBuilder_24as_24_40moonbitlang_2fcore_2fbuiltin_2eLogger = { method_0: _M0IPB13StringBuilderPB6Logger13write__string, method_1: _M0IP016_24default__implPB6Logger16write__substringGRPB13StringBuilderE, method_2: _M0IPB13StringBuilderPB6Logger11write__view, method_3: _M0IPB13StringBuilderPB6Logger11write__char, method_4: _M0IP016_24default__implPB6Logger28write__string__interpolationGRPB13StringBuilderE, method_5: _M0IP016_24default__implPB6Logger5writeGRPB13StringBuilderE };
function _M0FP15Error8to__repr(_e) {
  switch (_e.$tag) {
    case 0: {
      return _M0IP217zhengxin_2dcoding4scss10ParseErrorPC15debug5Debug8to__reprGRP217zhengxin_2dcoding4scss10ParseErrorE(_e);
    }
    case 4: {
      return _M0IPC14json10ParseErrorPC15debug5Debug8to__reprGRPC14json10ParseErrorE(_e);
    }
    case 1: {
      return _M0IPB7FailurePC15debug5Debug8to__reprGRPB7FailureE(_e);
    }
    case 5: {
      return _M0IPC14json10ParseErrorPC15debug5Debug8to__reprGRPC14json10ParseErrorE(_e);
    }
    case 6: {
      return _M0IPC14json10ParseErrorPC15debug5Debug8to__reprGRPC14json10ParseErrorE(_e);
    }
    case 3: {
      return _M0IPC14json10ParseErrorPC15debug5Debug8to__reprGRPC14json10ParseErrorE(_e);
    }
    default: {
      return _M0IPC14json10ParseErrorPC15debug5Debug8to__reprGRPC14json10ParseErrorE(_e);
    }
  }
}
const _M0MPC16string10StringView4trimN7_2abindS6760 = "\t\n\r ";
const _M0MPC16string6String4trimN7_2abindS6861 = "\t\n\r ";
const _M0FPB4null = _M0DTPB4Json4Null__;
const _M0FPB18double__max__value = $i64_reinterpret_f64(9218868437227405311n);
const _M0FPB18double__min__value = $i64_reinterpret_f64(18442240474082181119n);
const _M0MPB4Iter4nextN6constrS9855GUsRPB4JsonEE = 0;
const _M0MPB4Iter4nextN6constrS9856GUsRPB4JsonEE = 0;
const _M0MPB4Iter4nextN6constrS9855GcE = 0;
const _M0MPB4Iter4nextN6constrS9856GcE = 0;
const _M0MPB4Iter4nextN6constrS9855GdE = 0;
const _M0MPB4Iter4nextN6constrS9856GdE = 0;
const _M0MPB4Iter3newN6constrS9863GUsRPB4JsonEE = 0;
const _M0MPB4Iter3newN6constrS9863GcE = 0;
const _M0MPB4Iter3newN6constrS9863GdE = 0;
const _M0FPC16double14not__a__number = $i64_reinterpret_f64(9221120237041090561n);
const _M0FPC16double8infinity = $i64_reinterpret_f64(9218868437227405312n);
const _M0FPC16double13neg__infinity = $i64_reinterpret_f64(18442240474082181120n);
const _M0FPC15debug14compact__linesN7_2abindS1134 = "";
const _M0FPC15debug14compact__linesN7_2abindS1147 = " ";
const _M0FPC15debug14compact__linesN7_2abindS1141 = ",";
const _M0FPC15debug14compact__linesN7_2abindS1139 = " ";
const _M0FPC15debug14compact__linesN7_2abindS1138 = " ";
const _M0FPC15debug14compact__linesN7_2abindS1136 = "";
const _M0FPC15debug14compact__linesN7_2abindS1148 = "(";
const _M0FPC15debug14compact__linesN7_2abindS1152 = "";
const _M0FPC15debug14compact__linesN7_2abindS1161 = " ";
const _M0FPC15debug14compact__linesN7_2abindS1155 = ",";
const _M0FPC15debug14compact__linesN7_2abindS1166 = " ";
const _M0FPC15debug19bracket__seq__linesN7_2abindS1175 = "";
const _M0FPC15debug14print__contentN7_2abindS1244 = "\n";
const _M0FPC28internal7strconv14base__err__str = "invalid base";
const _M0FPC28internal7strconv15range__err__str = "value out of range";
const _M0FPC28internal7strconv16syntax__err__str = "invalid syntax";
const _M0FPC28internal7strconv17min__19digit__int = 1000000000000000000n;
const _M0FPC28internal7strconv17parse__scientificN8exp__numS354 = 0n;
const _M0FPC28internal7strconv20parse__int64_2einnerN7_2abindS682 = "";
const _M0FPC28internal7strconv27eisel__lemire__pow10__table = [18054884314459144840n, 1671618768450675795n, 11284302696536965525n, 1044761730281672372n, 14105378370671206906n, 5917638181279478369n, 17631722963339008632n, 16620419763454123769n, 11019826852086880395n, 10387762352158827356n, 13774783565108600494n, 8373016921771146291n, 17218479456385750618n, 1242899115359157055n, 10761549660241094136n, 5388497965526861063n, 13451937075301367670n, 6735622456908576329n, 16814921344126709587n, 17642900107990496220n, 10509325840079193492n, 8720969558280366185n, 13136657300098991865n, 10901211947850457732n, 16420821625123739831n, 18238200953240460069n, 10263013515702337394n, 18316404623416369399n, 12828766894627921743n, 13672133742415685941n, 16035958618284902179n, 12478481159592219522n, 10022474136428063862n, 5493207715531443249n, 12528092670535079827n, 16089881681269079869n, 15660115838168849784n, 15500666083158961933n, 9787572398855531115n, 9687916301974351208n, 12234465498569413894n, 7498209359040551106n, 15293081873211767368n, 149389661945913074n, 9558176170757354605n, 93368538716195671n, 11947720213446693256n, 4728396691822632493n, 14934650266808366570n, 5910495864778290617n, 9334156416755229106n, 8305745933913819539n, 11667695520944036383n, 1158810380537498616n, 14584619401180045478n, 15283571030954036982n, 18230774251475056848n, 9881091751837770420n, 11394233907171910530n, 6175682344898606512n, 14242792383964888162n, 16942974967978033949n, 17803490479956110203n, 11955346673117766628n, 11127181549972568877n, 5166248661484910190n, 13908976937465711096n, 11069496845283525642n, 17386221171832138870n, 13836871056604407053n, 10866388232395086794n, 4036358391950366504n, 13582985290493858492n, 14268820026792733938n, 16978731613117323115n, 17836025033490917422n, 10611707258198326947n, 8841672636718129437n, 13264634072747908684n, 6440404777470273892n, 16580792590934885855n, 8050505971837842365n, 10362995369334303659n, 11949095260039733334n, 12953744211667879574n, 10324683056622278764n, 16192180264584849468n, 3682481783923072647n, 10120112665365530917n, 11524923151806696212n, 12650140831706913647n, 571095884476206553n, 15812676039633642058n, 14548927910877421904n, 9882922524771026286n, 13704765962725776594n, 12353653155963782858n, 7907585416552444934n, 15442066444954728573n, 661109733835780360n, 9651291528096705358n, 2719036592861056677n, 12064114410120881697n, 12622167777931096654n, 15080143012651102122n, 1942651667131707105n, 9425089382906938826n, 5825843310384704845n, 11781361728633673532n, 16505676174835656864n, 14726702160792091916n, 2185351144835019464n, 18408377700990114895n, 2731688931043774330n, 11505236063118821809n, 8624834609543440812n, 14381545078898527261n, 15392729280356688919n, 17976931348623159077n, 5405853545163697437n, 11235582092889474423n, 5684501474941004850n, 14044477616111843029n, 2493940825248868159n, 17555597020139803786n, 7729112049988473103n, 10972248137587377366n, 9442381049670183593n, 13715310171984221708n, 2579604275232953683n, 17144137714980277135n, 3224505344041192104n, 10715086071862673209n, 8932844867666826921n, 13393857589828341511n, 15777742103010921555n, 16742321987285426889n, 15110491610336264040n, 10463951242053391806n, 2526528228819083169n, 13079939052566739757n, 12381532322878629770n, 16349923815708424697n, 1641857348316123500n, 10218702384817765435n, 12555375888766046947n, 12773377981022206794n, 11082533842530170780n, 15966722476277758493n, 4629795266307937667n, 9979201547673599058n, 5199465050656154994n, 12474001934591998822n, 15722703350174969551n, 15592502418239998528n, 10430007150863936130n, 9745314011399999080n, 6518754469289960081n, 12181642514249998850n, 8148443086612450102n, 15227053142812498563n, 962181821410786819n, 9516908214257811601n, 16742264702877599426n, 11896135267822264502n, 7092772823314835570n, 14870169084777830627n, 18089338065998320271n, 9293855677986144142n, 8999993282035256217n, 11617319597482680178n, 2026619565689294464n, 14521649496853350222n, 11756646493966393888n, 18152061871066687778n, 5472436080603216552n, 11345038669416679861n, 8031958568804398249n, 14181298336770849826n, 14651634229432885715n, 17726622920963562283n, 9091170749936331336n, 11079139325602226427n, 3376138709496513133n, 13848924157002783033n, 18055231442152805128n, 17311155196253478792n, 8733981247408842698n, 10819471997658424245n, 5458738279630526686n, 13524339997073030306n, 11435108867965546262n, 16905424996341287883n, 5070514048102157020n, 10565890622713304927n, 863228270850154185n, 13207363278391631158n, 14914093393844856443n, 16509204097989538948n, 9419244705451294746n, 10318252561243461842n, 15110399977761835024n, 12897815701554327303n, 9664627935347517973n, 16122269626942909129n, 7469098900757009562n, 10076418516839318205n, 16197401859041600736n, 12595523146049147757n, 6411694268519837208n, 15744403932561434696n, 12626303854077184414n, 9840252457850896685n, 7891439908798240259n, 12300315572313620856n, 14475985904425188227n, 15375394465392026070n, 18094982380531485284n, 9609621540870016294n, 6697677969404790399n, 12012026926087520367n, 17595469498610763806n, 15015033657609400459n, 17382650854836066854n, 9384396036005875287n, 8558313775058847832n, 11730495045007344109n, 6086206200396171886n, 14663118806259180136n, 12219443768922602761n, 18328898507823975170n, 15274304711153253452n, 11455561567389984481n, 14158126462898171311n, 14319451959237480602n, 3862600023340550427n, 17899314949046850752n, 14051622066030463842n, 11187071843154281720n, 8782263791269039901n, 13983839803942852150n, 10977829739086299876n, 17479799754928565188n, 4498915137003099037n, 10924874846830353242n, 12035193997481712706n, 13656093558537941553n, 5820620459997365075n, 17070116948172426941n, 11887461593424094248n, 10668823092607766838n, 9735506505103752857n, 13336028865759708548n, 2946011094524915263n, 16670036082199635685n, 3682513868156144079n, 10418772551374772303n, 4607414176811284001n, 13023465689218465379n, 1147581702586717097n, 16279332111523081723n, 15269535183515560084n, 10174582569701926077n, 7237616480483531100n, 12718228212127407596n, 13658706619031801779n, 15897785265159259495n, 17073383273789752224n, 9936115790724537184n, 17588393573759676996n, 12420144738405671481n, 3538747893490044629n, 15525180923007089351n, 9035120885289943691n, 9703238076879430844n, 12564479580947296663n, 12129047596099288555n, 15705599476184120828n, 15161309495124110694n, 15020313326802763131n, 9475818434452569184n, 4776009810824339053n, 11844773043065711480n, 5970012263530423816n, 14805966303832139350n, 7462515329413029771n, 9253728939895087094n, 52386062455755702n, 11567161174868858867n, 9288854614924470436n, 14458951468586073584n, 6999382250228200141n, 18073689335732591980n, 8749227812785250177n, 11296055834832869987n, 14691639419845557168n, 14120069793541087484n, 13752863256379558556n, 17650087241926359355n, 17191079070474448196n, 11031304526203974597n, 8438581409832836170n, 13789130657754968246n, 15159912780718433117n, 17236413322193710308n, 9726518939043265588n, 10772758326371068942n, 15302446373756816800n, 13465947907963836178n, 9904685930341245193n, 16832434884954795223n, 3157485376071780683n, 10520271803096747014n, 8890957387685944783n, 13150339753870933768n, 1890324697752655170n, 16437924692338667210n, 2362905872190818963n, 10273702932711667006n, 6088502188546649756n, 12842128665889583757n, 16833999772538088003n, 16052660832361979697n, 7207441660390446292n, 10032913020226237310n, 16033866083812498692n, 12541141275282796638n, 10818960567910847557n, 15676426594103495798n, 4300328673033783639n, 9797766621314684873n, 16522763475928278486n, 12247208276643356092n, 6818396289628184396n, 15309010345804195115n, 8522995362035230495n, 9568131466127621947n, 3021029092058325107n, 11960164332659527433n, 17611344420355070096n, 14950205415824409292n, 8179122470161673908n, 9343878384890255807n, 14335323580705822000n, 11679847981112819759n, 13307468457454889596n, 14599809976391024699n, 12022649553391224092n, 18249762470488780874n, 10416625923311642211n, 11406101544055488046n, 11122077220497164286n, 14257626930069360058n, 4679224488766679549n, 17822033662586700072n, 15072402647813125244n, 11138771039116687545n, 9420251654883203278n, 13923463798895859431n, 16387000587031392001n, 17404329748619824289n, 15872064715361852097n, 10877706092887390181n, 3002511419460075705n, 13597132616109237726n, 8364825292752482535n, 16996415770136547158n, 1232659579085827361n, 10622759856335341973n, 14605470292210805812n, 13278449820419177467n, 4421779809981343554n, 16598062275523971834n, 915538744049291538n, 10373788922202482396n, 5183897733458195115n, 12967236152753102995n, 6479872166822743894n, 16209045190941378744n, 3488154190101041964n, 10130653244338361715n, 2180096368813151227n, 12663316555422952143n, 16560178516298602746n, 15829145694278690179n, 16088537126945865529n, 9893216058924181362n, 7749492695127472003n, 12366520073655226703n, 463493832054564196n, 15458150092069033378n, 14414425345350368957n, 9661343807543145861n, 13620701859271368502n, 12076679759428932327n, 3190819268807046916n, 15095849699286165408n, 17823582141290972357n, 9434906062053853380n, 11139738838306857723n, 11793632577567316725n, 13924673547883572154n, 14742040721959145907n, 3570783879572301480n, 18427550902448932383n, 18298537904747540562n, 11517219314030582739n, 18354115218108294707n, 14396524142538228424n, 18330958004207980480n, 17995655178172785531n, 4466953431550423984n, 11247284486357990957n, 486002885505321038n, 14059105607947488696n, 5219189625309039202n, 17573882009934360870n, 6523987031636299002n, 10983676256208975543n, 17912549950054850588n, 13729595320261219429n, 17779001419141175331n, 17161994150326524287n, 8388693718644305452n, 10726246343954077679n, 12160462601793772764n, 13407807929942597099n, 10588892233814828051n, 16759759912428246374n, 8624429273841147159n, 10474849945267653984n, 778582277723329070n, 13093562431584567480n, 973227847154161338n, 16366953039480709350n, 1216534808942701673n, 10229345649675443343n, 14595392310871352257n, 12786682062094304179n, 13632554370161802418n, 15983352577617880224n, 12429006944274865118n, 9989595361011175140n, 7768129340171790699n, 12486994201263968925n, 9710161675214738374n, 15608742751579961156n, 16749388112445810871n, 9755464219737475723n, 1244995533423855986n, 12194330274671844653n, 15391302472061983695n, 15242912843339805817n, 5404070034795315907n, 9526820527087378635n, 14906758817815542202n, 11908525658859223294n, 14021762503842039848n, 14885657073574029118n, 8303831092947774002n, 9303535670983768199n, 578208414664970847n, 11629419588729710248n, 14557818573613377271n, 14536774485912137810n, 18197273217016721589n, 18170968107390172263n, 13523219484416126178n, 11356855067118857664n, 15369541205401160717n, 14196068833898572081n, 765182433041899281n, 17745086042373215101n, 5568164059729762005n, 11090678776483259438n, 5785945546544795205n, 13863348470604074297n, 16455803970035769814n, 17329185588255092872n, 6734696907262548556n, 10830740992659433045n, 4209185567039092847n, 13538426240824291306n, 9873167977226253963n, 16923032801030364133n, 3118087934678041646n, 10576895500643977583n, 4254647968387469981n, 13221119375804971979n, 706623942056949572n, 16526399219756214973n, 14718337982853350677n, 10328999512347634358n, 11504804248497038125n, 12911249390434542948n, 5157633273766521849n, 16139061738043178685n, 6447041592208152311n, 10086913586276986678n, 6335244004343789146n, 12608641982846233347n, 17142427042284512241n, 15760802478557791684n, 16816347784428252397n, 9850501549098619803n, 1286845328412881940n, 12313126936373274753n, 15443614715798266137n, 15391408670466593442n, 5469460339465668959n, 9619630419041620901n, 8030098730593431003n, 12024538023802026126n, 14649309431669176658n, 15030672529752532658n, 9088264752731695015n, 9394170331095332911n, 10291851488884697288n, 11742712913869166139n, 8253128342678483706n, 14678391142336457674n, 5704724409920716729n, 18347988927920572092n, 16354277549255671720n, 11467493079950357558n, 998051431430019017n, 14334366349937946947n, 10470936326142299579n, 17917957937422433684n, 8476984389250486570n, 11198723710889021052n, 14521487280136329914n, 13998404638611276315n, 18151859100170412392n, 17498005798264095394n, 18078137856785627587n, 10936253623915059621n, 15910522178918405146n, 13670317029893824527n, 6053094668365842720n, 17087896287367280659n, 2954682317029915496n, 10679935179604550411n, 17987577512639554849n, 13349918974505688014n, 17872785872372055657n, 16687398718132110018n, 13117610303610293764n, 10429624198832568761n, 12810192458183821506n, 13037030248540710952n, 2177682517447613171n, 16296287810675888690n, 2722103146809516464n, 10185179881672430431n, 6313000485183335694n, 12731474852090538039n, 3279564588051781713n, 15914343565113172548n, 17934513790346890853n, 9946464728195732843n, 1985699082112030975n, 12433080910244666053n, 16317181907922202431n, 15541351137805832567n, 6561419329620589327n, 9713344461128645354n, 11018416108653950185n, 12141680576410806693n, 4549648098962661924n, 15177100720513508366n, 10298746142130715309n, 9485687950320942729n, 1825030320404309164n, 11857109937901178411n, 6892973918932774359n, 14821387422376473014n, 4004531380238580045n, 9263367138985295633n, 16337890167931276240n, 11579208923731619542n, 6587304654631931588n, 14474011154664524427n, 17457502855144690293n, 18092513943330655534n, 17210192550503474962n, 11307821214581659709n, 6144684325637283947n, 14134776518227074636n, 12292541425473992838n, 17668470647783843295n, 15365676781842491048n, 11042794154864902059n, 16521077016292638761n, 13803492693581127574n, 16039660251938410547n, 17254365866976409468n, 10826203278068237376n, 10783978666860255917n, 15989749085647424168n, 13479973333575319897n, 6152128301777116498n, 16849966666969149871n, 12301846395648783526n, 10531229166855718669n, 14606183024921571560n, 13164036458569648337n, 4422670725869800738n, 16455045573212060421n, 10140024425764638826n, 10284403483257537763n, 8643358275316593218n, 12855504354071922204n, 6192511825718353619n, 16069380442589902755n, 7740639782147942024n, 10043362776618689222n, 2532056854628769813n, 12554203470773361527n, 12388443105140738074n, 15692754338466701909n, 10873867862998534689n, 9807971461541688693n, 9102010423587778132n, 12259964326927110866n, 15989199047912110569n, 15324955408658888583n, 10763126773035362404n, 9578097130411805364n, 13644483260788183358n, 11972621413014756705n, 17055604075985229198n, 14965776766268445882n, 7484447039699372786n, 9353610478917778676n, 9289465418239495895n, 11692013098647223345n, 11611831772799369869n, 14615016373309029182n, 679731660717048624n, 18268770466636286477n, 10073036612751086588n, 11417981541647679048n, 8601490892183123069n, 14272476927059598810n, 10751863615228903837n, 17840596158824498513n, 4216457482181353988n, 11150372599265311570n, 14164500972431816002n, 13937965749081639463n, 8482254178684994195n, 17422457186352049329n, 5991131704928854840n, 10889035741470030830n, 15273672361649004035n, 13611294676837538538n, 9868718415206479236n, 17014118346046923173n, 3112525982153323237n, 10633823966279326983n, 4251171748059520975n, 13292279957849158729n, 702278666647013314n, 16615349947311448411n, 5489534351736154547n, 10384593717069655257n, 1125115960621402640n, 12980742146337069071n, 6018080969204141204n, 16225927682921336339n, 2910915193077788601n, 10141204801825835211n, 17960223060169475539n, 12676506002282294014n, 17838592806784456520n, 15845632502852867518n, 13074868971625794843n, 9903520314283042199n, 3560107088838733872n, 12379400392853802748n, 18285191916330581053n, 15474250491067253436n, 4409745821703674700n, 9671406556917033397n, 11979463175419572495n, 12089258196146291747n, 1139270913992301907n, 15111572745182864683n, 15259146697772541096n, 9444732965739290427n, 7231123676894144233n, 11805916207174113034n, 4427218577690292387n, 14757395258967641292n, 14757395258967641292n, 9223372036854775808n, 0n, 11529215046068469760n, 0n, 14411518807585587200n, 0n, 18014398509481984000n, 0n, 11258999068426240000n, 0n, 14073748835532800000n, 0n, 17592186044416000000n, 0n, 10995116277760000000n, 0n, 13743895347200000000n, 0n, 17179869184000000000n, 0n, 10737418240000000000n, 0n, 13421772800000000000n, 0n, 16777216000000000000n, 0n, 10485760000000000000n, 0n, 13107200000000000000n, 0n, 16384000000000000000n, 0n, 10240000000000000000n, 0n, 12800000000000000000n, 0n, 16000000000000000000n, 0n, 10000000000000000000n, 0n, 12500000000000000000n, 0n, 15625000000000000000n, 0n, 9765625000000000000n, 0n, 12207031250000000000n, 0n, 15258789062500000000n, 0n, 9536743164062500000n, 0n, 11920928955078125000n, 0n, 14901161193847656250n, 0n, 9313225746154785156n, 4611686018427387904n, 11641532182693481445n, 5764607523034234880n, 14551915228366851806n, 11817445422220181504n, 18189894035458564758n, 5548434740920451072n, 11368683772161602973n, 17302829768357445632n, 14210854715202003717n, 7793479155164643328n, 17763568394002504646n, 14353534962383192064n, 11102230246251565404n, 4359273333062107136n, 13877787807814456755n, 5449091666327633920n, 17347234759768070944n, 2199678564482154496n, 10842021724855044340n, 1374799102801346560n, 13552527156068805425n, 1718498878501683200n, 16940658945086006781n, 6759809616554491904n, 10587911840678754238n, 6530724019560251392n, 13234889800848442797n, 17386777061305090048n, 16543612251060553497n, 7898413271349198848n, 10339757656912845935n, 16465723340661719040n, 12924697071141057419n, 15970468157399760896n, 16155871338926321774n, 15351399178322313216n, 10097419586828951109n, 4982938468024057856n, 12621774483536188886n, 10840359103457460224n, 15777218104420236108n, 4327076842467049472n, 9860761315262647567n, 11927795063396681728n, 12325951644078309459n, 10298057810818464256n, 15407439555097886824n, 8260886245095692416n, 9629649721936179265n, 5163053903184807760n, 12037062152420224081n, 11065503397408397604n, 15046327690525280101n, 18443565265187884909n, 9403954806578300063n, 13833071299956122020n, 11754943508222875079n, 12679653106517764621n, 14693679385278593849n, 11237880364719817872n, 18367099231598242312n, 212292400617608628n, 11479437019748901445n, 132682750386005392n, 14349296274686126806n, 4777539456409894645n, 17936620343357658507n, 15195296357367144114n, 11210387714598536567n, 7191217214140771119n, 14012984643248170709n, 4377335499248575995n, 17516230804060213386n, 10083355392488107898n, 10947644252537633366n, 10913783138732455340n, 13684555315672041708n, 4418856886560793367n, 17105694144590052135n, 5523571108200991709n, 10691058840368782584n, 10369760970266701674n, 13363823550460978230n, 12962201212833377092n, 16704779438076222788n, 6979379479186945558n, 10440487148797639242n, 13585484211346616781n, 13050608935997049053n, 7758483227328495169n, 16313261169996311316n, 14309790052588006865n, 10195788231247694572n, 18166990819722280098n, 12744735289059618216n, 4261994450943298507n, 15930919111324522770n, 5327493063679123134n, 9956824444577826731n, 7941369183226839863n, 12446030555722283414n, 5315025460606161924n, 15557538194652854267n, 15867153862612478214n, 9723461371658033917n, 7611128154919104931n, 12154326714572542396n, 14125596212076269068n, 15192908393215677995n, 17656995265095336336n, 9495567745759798747n, 8729779031470891258n, 11869459682199748434n, 6300537770911226168n, 14836824602749685542n, 17099044250493808518n, 9273015376718553464n, 6075216638131242420n, 11591269220898191830n, 7594020797664053025n, 14489086526122739788n, 269153960225290473n, 18111358157653424735n, 336442450281613091n, 11319598848533390459n, 7127805559067090038n, 14149498560666738074n, 4298070930406474644n, 17686873200833422592n, 14595960699862869113n, 11054295750520889120n, 9122475437414293195n, 13817869688151111400n, 11403094296767866494n, 17272337110188889250n, 14253867870959833118n, 10795210693868055781n, 13520353437777283602n, 13494013367335069727n, 3065383741939440791n, 16867516709168837158n, 17666787732706464701n, 10542197943230523224n, 6430056314514152534n, 13177747429038154030n, 8037570393142690668n, 16472184286297692538n, 823590954573587527n, 10295115178936057836n, 5126430365035880108n, 12868893973670072295n, 6408037956294850135n, 16086117467087590369n, 3398361426941174765n, 10053823416929743980n, 13653190937906703988n, 12567279271162179975n, 17066488672383379985n, 15709099088952724969n, 16721424822051837077n, 9818186930595453106n, 3533361486141316317n, 12272733663244316382n, 13640073894531421205n, 15340917079055395478n, 7826720331309500698n, 9588073174409622174n, 280014188641050032n, 11985091468012027717n, 9573389772656088348n, 14981364335015034646n, 16578423234247498339n, 9363352709384396654n, 5749828502977298558n, 11704190886730495817n, 16410657665576399005n, 14630238608413119772n, 6678264026688335045n, 18287798260516399715n, 8347830033360418806n, 11429873912822749822n, 2911550761636567802n, 14287342391028437277n, 12862810488900485560n, 17859177988785546597n, 2243455055843443238n, 11161986242990966623n, 3708002419115845976n, 13952482803738708279n, 23317005467419566n, 17440603504673385348n, 13864204312116438170n, 10900377190420865842n, 17888499731927549664n, 13625471488026082303n, 13137252628054661272n, 17031839360032602879n, 11809879766640938686n, 10644899600020376799n, 14298703881791668535n, 13306124500025470999n, 13261693833812197764n, 16632655625031838749n, 11965431273837859301n, 10395409765644899218n, 9784237555362356015n, 12994262207056124023n, 3006924907348169211n, 16242827758820155028n, 17593714189467375226n, 10151767349262596893n, 1772699331562333708n, 12689709186578246116n, 6827560182880305039n, 15862136483222807645n, 8534450228600381299n, 9913835302014254778n, 7639874402088932264n, 12392294127517818473n, 326470965756389522n, 15490367659397273091n, 5019774725622874806n, 9681479787123295682n, 831516194300602802n, 12101849733904119602n, 10262767279730529310n, 15127312167380149503n, 3605087062808385830n, 9454570104612593439n, 9170708441896323000n, 11818212630765741799n, 6851699533943015846n, 14772765788457177249n, 3952938399001381903n, 9232978617785735780n, 13999801545444333449n, 11541223272232169725n, 17499751931805416812n, 14426529090290212157n, 8039631859474607303n, 18033161362862765196n, 14661225842770647033n, 11270725851789228247n, 18386638188586430203n, 14088407314736535309n, 18371611717305649850n, 17610509143420669137n, 9129456591349898601n, 11006568214637918210n, 17235125415662156385n, 13758210268297397763n, 12320534732722919674n, 17197762835371747204n, 10788982397476261688n, 10748601772107342002n, 15966486035277439363n, 13435752215134177503n, 10734735507242023396n, 16794690268917721879n, 8806733365625141341n, 10496681418073576174n, 12421737381156795194n, 13120851772591970218n, 6303799689591218185n, 16401064715739962772n, 17103121648843798539n, 10250665447337476733n, 1466078993672598279n, 12813331809171845916n, 6444284760518135752n, 16016664761464807395n, 8055355950647669691n, 10010415475915504622n, 2728754459941099604n, 12513019344894380777n, 12634315111781150314n, 15641274181117975972n, 1957835834444274180n, 9775796363198734982n, 10447019433382447170n, 12219745453998418728n, 3835402254873283155n, 15274681817498023410n, 4794252818591603944n, 9546676135936264631n, 7608094030047140369n, 11933345169920330789n, 4898431519131537557n, 14916681462400413486n, 10734725417341809851n, 9322925914000258429n, 2097517367411243253n, 11653657392500323036n, 7233582727691441970n, 14567071740625403795n, 9041978409614302462n, 18208839675781754744n, 6690786993590490174n, 11380524797363596715n, 4181741870994056359n, 14225655996704495894n, 615491320315182544n, 17782069995880619867n, 9992736187248753989n, 11113793747425387417n, 3939617107816777291n, 13892242184281734271n, 9536207403198359517n, 17365302730352167839n, 7308573235570561493n, 10853314206470104899n, 11485387299872682789n, 13566642758087631124n, 9745048106413465582n, 16958303447609538905n, 12181310133016831978n, 10598939654755961816n, 695789805494438130n, 13248674568444952270n, 869737256868047663n, 16560843210556190337n, 10310543607939835386n, 10350527006597618960n, 17973304801030866876n, 12938158758247023701n, 4019886927579031980n, 16172698447808779626n, 9636544677901177879n, 10107936529880487266n, 10634526442115624078n, 12634920662350609083n, 4069786015789754290n, 15793650827938261354n, 475546501309804958n, 9871031767461413346n, 4908902581746016003n, 12338789709326766682n, 15359500264037295811n, 15423487136658458353n, 9976003293191843956n, 9639679460411536470n, 17764217104313372233n, 12049599325514420588n, 12981899343536939483n, 15061999156893025735n, 16227374179421174354n, 9413749473058141084n, 17059637889779315827n, 11767186841322676356n, 2877803288514593168n, 14708983551653345445n, 3597254110643241460n, 18386229439566681806n, 9108253656731439729n, 11491393399729176129n, 1080972517029761926n, 14364241749661470161n, 5962901664714590312n, 17955302187076837701n, 12065313099320625794n, 11222063866923023563n, 9846663696289085073n, 14027579833653779454n, 7696643601933968437n, 17534474792067224318n, 397432465562684739n, 10959046745042015198n, 14083453346258841674n, 13698808431302518998n, 8380944645968776284n, 17123510539128148748n, 1252808770606194547n, 10702194086955092967n, 10006377518483647400n, 13377742608693866209n, 7896285879677171346n, 16722178260867332761n, 14482043368023852087n, 10451361413042082976n, 2133748077373825698n, 13064201766302603720n, 2667185096717282123n, 16330252207878254650n, 3333981370896602653n, 10206407629923909156n, 6695424375237764562n, 12758009537404886445n, 8369280469047205703n, 15947511921756108056n, 15073286604736395033n, 9967194951097567535n, 9420804127960246895n, 12458993688871959419n, 7164319141522920715n, 15573742111089949274n, 4343712908476262990n, 9733588819431218296n, 7326506586225052273n, 12166986024289022870n, 9158133232781315341n, 15208732530361278588n, 2224294504121868368n, 9505457831475799117n, 10613556101930943538n, 11881822289344748896n, 17878631145841067327n, 14852277861680936121n, 3901544858591782542n, 9282673663550585075n, 13967680582688333849n, 11603342079438231344n, 12847914709933029407n, 14504177599297789180n, 16059893387416286759n, 18130221999122236476n, 1628122660560806833n, 11331388749451397797n, 10240948699705280078n, 14164235936814247246n, 17412871893058988002n, 17705294921017809058n, 12542717829468959195n, 11065809325636130661n, 12450884661845487401n, 13832261657045163327n, 1728547772024695539n, 17290327071306454158n, 15995742770313033136n, 10806454419566533849n, 5385653213018257806n, 13508068024458167311n, 11343752534700210161n, 16885085030572709139n, 9568004649947874797n, 10553178144107943212n, 3674159897003727796n, 13191472680134929015n, 4592699871254659745n, 16489340850168661269n, 1129188820640936778n, 10305838031355413293n, 3011586022114279438n, 12882297539194266616n, 8376168546070237202n, 16102871923992833270n, 10470210682587796502n, 10064294952495520794n, 1932195658189984910n, 12580368690619400992n, 11638616609592256945n, 15725460863274251240n, 14548270761990321182n, 9828413039546407025n, 9092669226243950738n, 12285516299433008781n, 15977522551232326327n, 15356895374291260977n, 6136845133758244197n, 9598059608932038110n, 15364743254667372383n, 11997574511165047638n, 9982557031479439671n, 14996968138956309548n, 3254824252494523781n, 9373105086847693467n, 11257637194663853171n, 11716381358559616834n, 9460360474902428559n, 14645476698199521043n, 2602078556773259891n, 18306845872749401303n, 17087656251248738576n, 11441778670468375814n, 17597314184671543466n, 14302223338085469768n, 12773270693984653525n, 17877779172606837210n, 15966588367480816906n, 11173611982879273256n, 14590803748102898470n, 13967014978599091570n, 18238504685128623088n, 17458768723248864463n, 13574758819556003052n, 10911730452030540289n, 15401753289863583763n, 13639663065038175362n, 5417133557047315992n, 17049578831297719202n, 15994788983163920798n, 10655986769561074501n, 14608429132904838403n, 13319983461951343127n, 4425478360848884291n, 16649979327439178909n, 920161932633717460n, 10406237079649486818n, 2880944217109767365n, 13007796349561858522n, 12824552308241985014n, 16259745436952323153n, 6807318348447705459n, 10162340898095201970n, 15783789013848285672n, 12702926122619002463n, 10506364230455581282n, 15878657653273753079n, 8521269269642088699n, 9924161033296095674n, 12243322321167387293n, 12405201291620119593n, 6080780864604458308n, 15506501614525149491n, 12212662099182960789n, 9691563509078218432n, 5327070802775656541n, 12114454386347773040n, 6658838503469570676n, 15143067982934716300n, 8323548129336963345n, 9464417489334197687n, 14425589617690377899n, 11830521861667747109n, 13420301003685584469n, 14788152327084683887n, 2940318199324816875n, 9242595204427927429n, 8755227902219092403n, 11553244005534909286n, 15555720896201253407n, 14441555006918636608n, 10221279083396790951n, 18051943758648295760n, 12776598854245988689n, 11282464849155184850n, 7985374283903742931n, 14103081061443981063n, 758345818024902856n, 17628851326804976328n, 14782990327813292282n, 11018032079253110205n, 9239368954883307676n, 13772540099066387756n, 16160897212031522499n, 17215675123832984696n, 1754377441329851508n, 10759796952395615435n, 1096485900831157192n, 13449746190494519293n, 15205665431321110202n, 16812182738118149117n, 5172023733869224041n, 10507614211323843198n, 5538357842881958977n, 13134517764154803997n, 16146319340457224530n, 16418147205193504997n, 6347841120289366950n, 10261342003245940623n, 6273243709394548296n, 12826677504057425779n, 3229868618315797466n, 16033346880071782223n, 17872393828176910545n, 10020841800044863889n, 18087775170251650946n, 12526052250056079862n, 8774660907532399971n, 15657565312570099828n, 1744954097560724156n, 9785978320356312392n, 10313968347830228405n, 12232472900445390490n, 12892460434787785506n, 15290591125556738113n, 6892203506629956075n, 9556619453472961320n, 15836842237712192307n, 11945774316841201651n, 1349308723430688768n, 14932217896051502063n, 15521693959570524672n, 9332636185032188789n, 16618587752372659776n, 11665795231290235987n, 6938176635183661008n, 14582244039112794984n, 4061034775552188356n, 18227805048890993730n, 5076293469440235445n, 11392378155556871081n, 7784369436827535057n, 14240472694446088851n, 14342147814461806725n, 17800590868057611064n, 13315998749649870503n, 11125369292536006915n, 8322499218531169064n, 13906711615670008644n, 5791438004736573426n, 17383389519587510805n, 7239297505920716783n, 10864618449742194253n, 6830403950414141941n, 13580773062177742816n, 13149690956445065330n, 16975966327722178520n, 16437113695556331663n, 10609978954826361575n, 10273196059722707289n, 13262473693532951969n, 8229809056225996208n, 16578092116916189961n, 14898947338709883164n, 10361307573072618726n, 2394313059052595121n, 12951634466340773407n, 12216263360670519709n, 16189543082925966759n, 10658643182410761733n, 10118464426828729224n, 13579181016647807939n, 12648080533535911530n, 16973976270809759924n, 15810100666919889413n, 11994098301657424097n, 9881312916824930883n, 9802154447749584012n, 12351641146031163604n, 7641007041259592112n, 15439551432538954505n, 9551258801574490140n, 9649719645336846565n, 17498751797052526097n, 12062149556671058207n, 8038381691033493909n, 15077686945838822759n, 5436291095364479483n];
const _M0FPC28internal7strconv12double__info = new _M0TPC28internal7strconv9FloatInfo(52, 11, -1023);
const _M0FPC28internal7strconv25min__exponent__fast__path = 18446744073709551594n;
const _M0FPC28internal7strconv25max__exponent__fast__path = 22n;
const _M0FPC28internal7strconv36max__exponent__disguised__fast__path = 37n;
const _M0FPC28internal7strconv25max__mantissa__fast__path = 9007199254740992n;
const _M0FPC28internal7strconv6powtab = [1, 3, 6, 9, 13, 16, 19, 23, 26, 29, 33, 36, 39, 43, 46, 49, 53, 56, 59];
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1023 = { _0: 0, _1: "" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1024 = { _0: 1, _1: "5" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1025 = { _0: 1, _1: "25" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1026 = { _0: 1, _1: "125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1027 = { _0: 2, _1: "625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1028 = { _0: 2, _1: "3125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1029 = { _0: 2, _1: "15625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1030 = { _0: 3, _1: "78125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1031 = { _0: 3, _1: "390625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1032 = { _0: 3, _1: "1953125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1033 = { _0: 4, _1: "9765625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1034 = { _0: 4, _1: "48828125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1035 = { _0: 4, _1: "244140625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1036 = { _0: 4, _1: "1220703125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1037 = { _0: 5, _1: "6103515625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1038 = { _0: 5, _1: "30517578125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1039 = { _0: 5, _1: "152587890625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1040 = { _0: 6, _1: "762939453125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1041 = { _0: 6, _1: "3814697265625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1042 = { _0: 6, _1: "19073486328125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1043 = { _0: 7, _1: "95367431640625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1044 = { _0: 7, _1: "476837158203125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1045 = { _0: 7, _1: "2384185791015625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1046 = { _0: 7, _1: "11920928955078125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1047 = { _0: 8, _1: "59604644775390625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1048 = { _0: 8, _1: "298023223876953125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1049 = { _0: 8, _1: "1490116119384765625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1050 = { _0: 9, _1: "7450580596923828125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1051 = { _0: 9, _1: "37252902984619140625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1052 = { _0: 9, _1: "186264514923095703125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1053 = { _0: 10, _1: "931322574615478515625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1054 = { _0: 10, _1: "4656612873077392578125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1055 = { _0: 10, _1: "23283064365386962890625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1056 = { _0: 10, _1: "116415321826934814453125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1057 = { _0: 11, _1: "582076609134674072265625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1058 = { _0: 11, _1: "2910383045673370361328125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1059 = { _0: 11, _1: "14551915228366851806640625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1060 = { _0: 12, _1: "72759576141834259033203125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1061 = { _0: 12, _1: "363797880709171295166015625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1062 = { _0: 12, _1: "1818989403545856475830078125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1063 = { _0: 13, _1: "9094947017729282379150390625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1064 = { _0: 13, _1: "45474735088646411895751953125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1065 = { _0: 13, _1: "227373675443232059478759765625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1066 = { _0: 13, _1: "1136868377216160297393798828125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1067 = { _0: 14, _1: "5684341886080801486968994140625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1068 = { _0: 14, _1: "28421709430404007434844970703125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1069 = { _0: 14, _1: "142108547152020037174224853515625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1070 = { _0: 15, _1: "710542735760100185871124267578125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1071 = { _0: 15, _1: "3552713678800500929355621337890625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1072 = { _0: 15, _1: "17763568394002504646778106689453125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1073 = { _0: 16, _1: "88817841970012523233890533447265625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1074 = { _0: 16, _1: "444089209850062616169452667236328125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1075 = { _0: 16, _1: "2220446049250313080847263336181640625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1076 = { _0: 16, _1: "11102230246251565404236316680908203125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1077 = { _0: 17, _1: "55511151231257827021181583404541015625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1078 = { _0: 17, _1: "277555756156289135105907917022705078125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1079 = { _0: 17, _1: "1387778780781445675529539585113525390625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1080 = { _0: 18, _1: "6938893903907228377647697925567626953125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1081 = { _0: 18, _1: "34694469519536141888238489627838134765625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1082 = { _0: 18, _1: "173472347597680709441192448139190673828125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1083 = { _0: 19, _1: "867361737988403547205962240695953369140625" };
const _M0FPC28internal7strconv19left__shift__cheats = [_M0FPC28internal7strconv19left__shift__cheatsN5tupleS1023, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1024, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1025, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1026, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1027, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1028, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1029, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1030, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1031, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1032, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1033, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1034, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1035, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1036, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1037, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1038, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1039, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1040, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1041, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1042, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1043, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1044, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1045, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1046, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1047, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1048, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1049, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1050, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1051, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1052, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1053, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1054, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1055, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1056, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1057, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1058, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1059, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1060, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1061, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1062, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1063, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1064, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1065, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1066, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1067, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1068, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1069, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1070, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1071, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1072, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1073, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1074, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1075, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1076, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1077, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1078, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1079, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1080, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1081, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1082, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1083];
const _M0FPC28internal7strconv10int__pow10 = [1n, 10n, 100n, 1000n, 10000n, 100000n, 1000000n, 10000000n, 100000000n, 1000000000n, 10000000000n, 100000000000n, 1000000000000n, 10000000000000n, 100000000000000n, 1000000000000000n];
const _M0FPC28internal7strconv5table = [1, 10, 100, 1000, 10000, 100000, 1000000, 10000000, 100000000, 1000000000, 10000000000, 100000000000, 1e+012, 1e+013, 1e+014, 1e+015, 1e+016, 1e+017, 1e+018, 1e+019, 1e+020, 1e+021, 1e+022, 0, 0, 0, 0, 0, 0, 0, 0, 0];
const _M0FPC28internal7strconv12checked__mulN6constrS1164 = 0n;
const _M0FPC14json17int__pow10__table = [1n, 10n, 100n, 1000n, 10000n, 100000n, 1000000n, 10000000n, 100000000n, 1000000000n, 10000000000n, 100000000000n, 1000000000000n, 10000000000000n, 100000000000000n, 1000000000000000n];
const _M0FPC14json12pow10__table = [1, 10, 100, 1000, 10000, 100000, 1000000, 10000000, 100000000, 1000000000, 10000000000, 100000000000, 1e+012, 1e+013, 1e+014, 1e+015, 1e+016, 1e+017, 1e+018, 1e+019, 1e+020, 1e+021, 1e+022, 0, 0, 0, 0, 0, 0, 0, 0, 0];
const _M0FPC14json12checked__mulN6constrS1891 = 0n;
const _M0MPC16string10StringView4findN6constrS9865 = 0;
const _M0FPB4seed = _M0FPB12random__seed();
const _bind = [{ _0: "aliceblue", _1: { _0: 240, _1: 248, _2: 255, _3: 1 } }, { _0: "antiquewhite", _1: { _0: 250, _1: 235, _2: 215, _3: 1 } }, { _0: "aqua", _1: { _0: 0, _1: 255, _2: 255, _3: 1 } }, { _0: "aquamarine", _1: { _0: 127, _1: 255, _2: 212, _3: 1 } }, { _0: "azure", _1: { _0: 240, _1: 255, _2: 255, _3: 1 } }, { _0: "beige", _1: { _0: 245, _1: 245, _2: 220, _3: 1 } }, { _0: "bisque", _1: { _0: 255, _1: 228, _2: 196, _3: 1 } }, { _0: "black", _1: { _0: 0, _1: 0, _2: 0, _3: 1 } }, { _0: "blanchedalmond", _1: { _0: 255, _1: 235, _2: 205, _3: 1 } }, { _0: "blue", _1: { _0: 0, _1: 0, _2: 255, _3: 1 } }, { _0: "blueviolet", _1: { _0: 138, _1: 43, _2: 226, _3: 1 } }, { _0: "brown", _1: { _0: 165, _1: 42, _2: 42, _3: 1 } }, { _0: "burlywood", _1: { _0: 222, _1: 184, _2: 135, _3: 1 } }, { _0: "cadetblue", _1: { _0: 95, _1: 158, _2: 160, _3: 1 } }, { _0: "chartreuse", _1: { _0: 127, _1: 255, _2: 0, _3: 1 } }, { _0: "chocolate", _1: { _0: 210, _1: 105, _2: 30, _3: 1 } }, { _0: "coral", _1: { _0: 255, _1: 127, _2: 80, _3: 1 } }, { _0: "cornflowerblue", _1: { _0: 100, _1: 149, _2: 237, _3: 1 } }, { _0: "cornsilk", _1: { _0: 255, _1: 248, _2: 220, _3: 1 } }, { _0: "crimson", _1: { _0: 220, _1: 20, _2: 60, _3: 1 } }, { _0: "cyan", _1: { _0: 0, _1: 255, _2: 255, _3: 1 } }, { _0: "darkblue", _1: { _0: 0, _1: 0, _2: 139, _3: 1 } }, { _0: "darkcyan", _1: { _0: 0, _1: 139, _2: 139, _3: 1 } }, { _0: "darkgoldenrod", _1: { _0: 184, _1: 134, _2: 11, _3: 1 } }, { _0: "darkgray", _1: { _0: 169, _1: 169, _2: 169, _3: 1 } }, { _0: "darkgreen", _1: { _0: 0, _1: 100, _2: 0, _3: 1 } }, { _0: "darkgrey", _1: { _0: 169, _1: 169, _2: 169, _3: 1 } }, { _0: "darkkhaki", _1: { _0: 189, _1: 183, _2: 107, _3: 1 } }, { _0: "darkmagenta", _1: { _0: 139, _1: 0, _2: 139, _3: 1 } }, { _0: "darkolivegreen", _1: { _0: 85, _1: 107, _2: 47, _3: 1 } }, { _0: "darkorange", _1: { _0: 255, _1: 140, _2: 0, _3: 1 } }, { _0: "darkorchid", _1: { _0: 153, _1: 50, _2: 204, _3: 1 } }, { _0: "darkred", _1: { _0: 139, _1: 0, _2: 0, _3: 1 } }, { _0: "darksalmon", _1: { _0: 233, _1: 150, _2: 122, _3: 1 } }, { _0: "darkseagreen", _1: { _0: 143, _1: 188, _2: 143, _3: 1 } }, { _0: "darkslateblue", _1: { _0: 72, _1: 61, _2: 139, _3: 1 } }, { _0: "darkslategray", _1: { _0: 47, _1: 79, _2: 79, _3: 1 } }, { _0: "darkslategrey", _1: { _0: 47, _1: 79, _2: 79, _3: 1 } }, { _0: "darkturquoise", _1: { _0: 0, _1: 206, _2: 209, _3: 1 } }, { _0: "darkviolet", _1: { _0: 148, _1: 0, _2: 211, _3: 1 } }, { _0: "deeppink", _1: { _0: 255, _1: 20, _2: 147, _3: 1 } }, { _0: "deepskyblue", _1: { _0: 0, _1: 191, _2: 255, _3: 1 } }, { _0: "dimgray", _1: { _0: 105, _1: 105, _2: 105, _3: 1 } }, { _0: "dimgrey", _1: { _0: 105, _1: 105, _2: 105, _3: 1 } }, { _0: "dodgerblue", _1: { _0: 30, _1: 144, _2: 255, _3: 1 } }, { _0: "firebrick", _1: { _0: 178, _1: 34, _2: 34, _3: 1 } }, { _0: "floralwhite", _1: { _0: 255, _1: 250, _2: 240, _3: 1 } }, { _0: "forestgreen", _1: { _0: 34, _1: 139, _2: 34, _3: 1 } }, { _0: "fuchsia", _1: { _0: 255, _1: 0, _2: 255, _3: 1 } }, { _0: "gainsboro", _1: { _0: 220, _1: 220, _2: 220, _3: 1 } }, { _0: "ghostwhite", _1: { _0: 248, _1: 248, _2: 255, _3: 1 } }, { _0: "gold", _1: { _0: 255, _1: 215, _2: 0, _3: 1 } }, { _0: "goldenrod", _1: { _0: 218, _1: 165, _2: 32, _3: 1 } }, { _0: "gray", _1: { _0: 128, _1: 128, _2: 128, _3: 1 } }, { _0: "green", _1: { _0: 0, _1: 128, _2: 0, _3: 1 } }, { _0: "greenyellow", _1: { _0: 173, _1: 255, _2: 47, _3: 1 } }, { _0: "grey", _1: { _0: 128, _1: 128, _2: 128, _3: 1 } }, { _0: "honeydew", _1: { _0: 240, _1: 255, _2: 240, _3: 1 } }, { _0: "hotpink", _1: { _0: 255, _1: 105, _2: 180, _3: 1 } }, { _0: "indianred", _1: { _0: 205, _1: 92, _2: 92, _3: 1 } }, { _0: "indigo", _1: { _0: 75, _1: 0, _2: 130, _3: 1 } }, { _0: "ivory", _1: { _0: 255, _1: 255, _2: 240, _3: 1 } }, { _0: "khaki", _1: { _0: 240, _1: 230, _2: 140, _3: 1 } }, { _0: "lavender", _1: { _0: 230, _1: 230, _2: 250, _3: 1 } }, { _0: "lavenderblush", _1: { _0: 255, _1: 240, _2: 245, _3: 1 } }, { _0: "lawngreen", _1: { _0: 124, _1: 252, _2: 0, _3: 1 } }, { _0: "lemonchiffon", _1: { _0: 255, _1: 250, _2: 205, _3: 1 } }, { _0: "lightblue", _1: { _0: 173, _1: 216, _2: 230, _3: 1 } }, { _0: "lightcoral", _1: { _0: 240, _1: 128, _2: 128, _3: 1 } }, { _0: "lightcyan", _1: { _0: 224, _1: 255, _2: 255, _3: 1 } }, { _0: "lightgoldenrodyellow", _1: { _0: 250, _1: 250, _2: 210, _3: 1 } }, { _0: "lightgray", _1: { _0: 211, _1: 211, _2: 211, _3: 1 } }, { _0: "lightgreen", _1: { _0: 144, _1: 238, _2: 144, _3: 1 } }, { _0: "lightgrey", _1: { _0: 211, _1: 211, _2: 211, _3: 1 } }, { _0: "lightpink", _1: { _0: 255, _1: 182, _2: 193, _3: 1 } }, { _0: "lightsalmon", _1: { _0: 255, _1: 160, _2: 122, _3: 1 } }, { _0: "lightseagreen", _1: { _0: 32, _1: 178, _2: 170, _3: 1 } }, { _0: "lightskyblue", _1: { _0: 135, _1: 206, _2: 250, _3: 1 } }, { _0: "lightslategray", _1: { _0: 119, _1: 136, _2: 153, _3: 1 } }, { _0: "lightslategrey", _1: { _0: 119, _1: 136, _2: 153, _3: 1 } }, { _0: "lightsteelblue", _1: { _0: 176, _1: 196, _2: 222, _3: 1 } }, { _0: "lightyellow", _1: { _0: 255, _1: 255, _2: 224, _3: 1 } }, { _0: "lime", _1: { _0: 0, _1: 255, _2: 0, _3: 1 } }, { _0: "limegreen", _1: { _0: 50, _1: 205, _2: 50, _3: 1 } }, { _0: "linen", _1: { _0: 250, _1: 240, _2: 230, _3: 1 } }, { _0: "magenta", _1: { _0: 255, _1: 0, _2: 255, _3: 1 } }, { _0: "maroon", _1: { _0: 128, _1: 0, _2: 0, _3: 1 } }, { _0: "mediumaquamarine", _1: { _0: 102, _1: 205, _2: 170, _3: 1 } }, { _0: "mediumblue", _1: { _0: 0, _1: 0, _2: 205, _3: 1 } }, { _0: "mediumorchid", _1: { _0: 186, _1: 85, _2: 211, _3: 1 } }, { _0: "mediumpurple", _1: { _0: 147, _1: 112, _2: 219, _3: 1 } }, { _0: "mediumseagreen", _1: { _0: 60, _1: 179, _2: 113, _3: 1 } }, { _0: "mediumslateblue", _1: { _0: 123, _1: 104, _2: 238, _3: 1 } }, { _0: "mediumspringgreen", _1: { _0: 0, _1: 250, _2: 154, _3: 1 } }, { _0: "mediumturquoise", _1: { _0: 72, _1: 209, _2: 204, _3: 1 } }, { _0: "mediumvioletred", _1: { _0: 199, _1: 21, _2: 133, _3: 1 } }, { _0: "midnightblue", _1: { _0: 25, _1: 25, _2: 112, _3: 1 } }, { _0: "mintcream", _1: { _0: 245, _1: 255, _2: 250, _3: 1 } }, { _0: "mistyrose", _1: { _0: 255, _1: 228, _2: 225, _3: 1 } }, { _0: "moccasin", _1: { _0: 255, _1: 228, _2: 181, _3: 1 } }, { _0: "navajowhite", _1: { _0: 255, _1: 222, _2: 173, _3: 1 } }, { _0: "navy", _1: { _0: 0, _1: 0, _2: 128, _3: 1 } }, { _0: "oldlace", _1: { _0: 253, _1: 245, _2: 230, _3: 1 } }, { _0: "olive", _1: { _0: 128, _1: 128, _2: 0, _3: 1 } }, { _0: "olivedrab", _1: { _0: 107, _1: 142, _2: 35, _3: 1 } }, { _0: "orange", _1: { _0: 255, _1: 165, _2: 0, _3: 1 } }, { _0: "orangered", _1: { _0: 255, _1: 69, _2: 0, _3: 1 } }, { _0: "orchid", _1: { _0: 218, _1: 112, _2: 214, _3: 1 } }, { _0: "palegoldenrod", _1: { _0: 238, _1: 232, _2: 170, _3: 1 } }, { _0: "palegreen", _1: { _0: 152, _1: 251, _2: 152, _3: 1 } }, { _0: "paleturquoise", _1: { _0: 175, _1: 238, _2: 238, _3: 1 } }, { _0: "palevioletred", _1: { _0: 219, _1: 112, _2: 147, _3: 1 } }, { _0: "papayawhip", _1: { _0: 255, _1: 239, _2: 213, _3: 1 } }, { _0: "peachpuff", _1: { _0: 255, _1: 218, _2: 185, _3: 1 } }, { _0: "peru", _1: { _0: 205, _1: 133, _2: 63, _3: 1 } }, { _0: "pink", _1: { _0: 255, _1: 192, _2: 203, _3: 1 } }, { _0: "plum", _1: { _0: 221, _1: 160, _2: 221, _3: 1 } }, { _0: "powderblue", _1: { _0: 176, _1: 224, _2: 230, _3: 1 } }, { _0: "purple", _1: { _0: 128, _1: 0, _2: 128, _3: 1 } }, { _0: "rebeccapurple", _1: { _0: 102, _1: 51, _2: 153, _3: 1 } }, { _0: "red", _1: { _0: 255, _1: 0, _2: 0, _3: 1 } }, { _0: "rosybrown", _1: { _0: 188, _1: 143, _2: 143, _3: 1 } }, { _0: "royalblue", _1: { _0: 65, _1: 105, _2: 225, _3: 1 } }, { _0: "saddlebrown", _1: { _0: 139, _1: 69, _2: 19, _3: 1 } }, { _0: "salmon", _1: { _0: 250, _1: 128, _2: 114, _3: 1 } }, { _0: "sandybrown", _1: { _0: 244, _1: 164, _2: 96, _3: 1 } }, { _0: "seagreen", _1: { _0: 46, _1: 139, _2: 87, _3: 1 } }, { _0: "seashell", _1: { _0: 255, _1: 245, _2: 238, _3: 1 } }, { _0: "sienna", _1: { _0: 160, _1: 82, _2: 45, _3: 1 } }, { _0: "silver", _1: { _0: 192, _1: 192, _2: 192, _3: 1 } }, { _0: "skyblue", _1: { _0: 135, _1: 206, _2: 235, _3: 1 } }, { _0: "slateblue", _1: { _0: 106, _1: 90, _2: 205, _3: 1 } }, { _0: "slategray", _1: { _0: 112, _1: 128, _2: 144, _3: 1 } }, { _0: "slategrey", _1: { _0: 112, _1: 128, _2: 144, _3: 1 } }, { _0: "snow", _1: { _0: 255, _1: 250, _2: 250, _3: 1 } }, { _0: "springgreen", _1: { _0: 0, _1: 255, _2: 127, _3: 1 } }, { _0: "steelblue", _1: { _0: 70, _1: 130, _2: 180, _3: 1 } }, { _0: "tan", _1: { _0: 210, _1: 180, _2: 140, _3: 1 } }, { _0: "teal", _1: { _0: 0, _1: 128, _2: 128, _3: 1 } }, { _0: "thistle", _1: { _0: 216, _1: 191, _2: 216, _3: 1 } }, { _0: "tomato", _1: { _0: 255, _1: 99, _2: 71, _3: 1 } }, { _0: "transparent", _1: { _0: 0, _1: 0, _2: 0, _3: 0 } }, { _0: "turquoise", _1: { _0: 64, _1: 224, _2: 208, _3: 1 } }, { _0: "violet", _1: { _0: 238, _1: 130, _2: 238, _3: 1 } }, { _0: "wheat", _1: { _0: 245, _1: 222, _2: 179, _3: 1 } }, { _0: "white", _1: { _0: 255, _1: 255, _2: 255, _3: 1 } }, { _0: "whitesmoke", _1: { _0: 245, _1: 245, _2: 245, _3: 1 } }, { _0: "yellow", _1: { _0: 255, _1: 255, _2: 0, _3: 1 } }, { _0: "yellowgreen", _1: { _0: 154, _1: 205, _2: 50, _3: 1 } }];
const _M0FP217zhengxin_2dcoding4scss13named__colors = _M0MPB3Map3MapGsUiiiiEE(new _M0TPB9ArrayViewGUsUiiiiEEE(_bind, 0, 149), undefined);
const _M0FPC28internal7strconv17check__underscoreN25_2atransition__table__222S230 = [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 4, 5, 5, 5, 5, 5, 0, 1, 2, 5];
const _M0FPC28internal7strconv15parse__inf__nanN25_2atransition__table__304S312 = [14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 3, 4, 14, 14, 14, 14, 14, 14, 14, 7, 14, 14, 14, 14, 5, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 6, 14, 14, 14, 0, 14, 14, 14, 14, 14, 14, 14, 14, 14, 8, 14, 14, 14, 14, 14, 1, 14, 14, 9, 14, 14, 14, 14, 14, 14, 14, 14, 10, 14, 14, 14, 14, 14, 14, 11, 14, 14, 14, 14, 14, 14, 14, 14, 14, 12, 14, 14, 14, 14, 14, 14, 14, 14, 13, 14, 1, 14, 14, 14, 14, 14, 14, 14];
const _M0FPC15debug6renderN6constrS1705 = 16;
function _M0FPC15abort5abortGRPB4JsonE(msg) {
  return $panic();
}
function _M0FPC15abort5abortGuE(msg) {
  $panic();
}
function _M0FPC15abort5abortGOiE(msg) {
  return $panic();
}
function _M0MPC14json4Json5array(array) {
  return new _M0DTPB4Json5Array(array);
}
function _M0FPB4rotl(x, r) {
  return x << r | (x >>> (32 - r | 0) | 0);
}
function _M0FPB13consume4__acc(acc, input) {
  return Math.imul(_M0FPB4rotl((acc >>> 0) + ((Math.imul(input, -1028477379) | 0) >>> 0) | 0, 17), 668265263) | 0;
}
function _M0MPC15array10FixedArray12unsafe__blitGRPB17UnsafeMaybeUninitGsEE(dst, dst_offset, src, src_offset, len) {
  if (dst === src && dst_offset < src_offset) {
    let _tmp = 0;
    while (true) {
      const i = _tmp;
      if (i < len) {
        const _tmp$2 = dst_offset + i | 0;
        const _tmp$3 = src_offset + i | 0;
        if (_tmp$2 >>> 0 < dst.length) {
          dst[_tmp$2] = _tmp$3 >>> 0 < src.length ? src[_tmp$3] : $oob();
        } else {
          $oob();
        }
        _tmp = i + 1 | 0;
        continue;
      } else {
        return;
      }
    }
  } else {
    let _tmp = len - 1 | 0;
    while (true) {
      const i = _tmp;
      if (i >= 0) {
        const _tmp$2 = dst_offset + i | 0;
        const _tmp$3 = src_offset + i | 0;
        if (_tmp$2 >>> 0 < dst.length) {
          dst[_tmp$2] = _tmp$3 >>> 0 < src.length ? src[_tmp$3] : $oob();
        } else {
          $oob();
        }
        _tmp = i - 1 | 0;
        continue;
      } else {
        return;
      }
    }
  }
}
function _M0MPC15array10FixedArray12unsafe__blitGRPB17UnsafeMaybeUninitGcEE(dst, dst_offset, src, src_offset, len) {
  if (dst === src && dst_offset < src_offset) {
    let _tmp = 0;
    while (true) {
      const i = _tmp;
      if (i < len) {
        const _tmp$2 = dst_offset + i | 0;
        const _tmp$3 = src_offset + i | 0;
        if (_tmp$2 >>> 0 < dst.length) {
          dst[_tmp$2] = _tmp$3 >>> 0 < src.length ? src[_tmp$3] : $oob();
        } else {
          $oob();
        }
        _tmp = i + 1 | 0;
        continue;
      } else {
        return;
      }
    }
  } else {
    let _tmp = len - 1 | 0;
    while (true) {
      const i = _tmp;
      if (i >= 0) {
        const _tmp$2 = dst_offset + i | 0;
        const _tmp$3 = src_offset + i | 0;
        if (_tmp$2 >>> 0 < dst.length) {
          dst[_tmp$2] = _tmp$3 >>> 0 < src.length ? src[_tmp$3] : $oob();
        } else {
          $oob();
        }
        _tmp = i - 1 | 0;
        continue;
      } else {
        return;
      }
    }
  }
}
function _M0MPB18UninitializedArray12unsafe__blitGsE(dst, dst_offset, src, src_offset, len) {
  _M0MPC15array10FixedArray12unsafe__blitGRPB17UnsafeMaybeUninitGsEE(dst, dst_offset, src, src_offset, len);
}
function _M0MPB18UninitializedArray12unsafe__blitGcE(dst, dst_offset, src, src_offset, len) {
  _M0MPC15array10FixedArray12unsafe__blitGRPB17UnsafeMaybeUninitGcEE(dst, dst_offset, src, src_offset, len);
}
function _M0MPB13StringBuilder13write__objectGdE(self, obj) {
  _M0IP016_24default__implPB4Show6outputGdE(obj, { self: self, method_table: _M0FP092moonbitlang_2fcore_2fbuiltin_2fStringBuilder_24as_24_40moonbitlang_2fcore_2fbuiltin_2eLogger });
}
function _M0MPB13StringBuilder13write__objectGRPC16string10StringViewE(self, obj) {
  _M0IPC16string10StringViewPB4Show6output(obj, { self: self, method_table: _M0FP092moonbitlang_2fcore_2fbuiltin_2fStringBuilder_24as_24_40moonbitlang_2fcore_2fbuiltin_2eLogger });
}
function _M0MPB13StringBuilder13write__objectGsE(self, obj) {
  _M0IP016_24default__implPB4Show6outputGsE(obj, { self: self, method_table: _M0FP092moonbitlang_2fcore_2fbuiltin_2fStringBuilder_24as_24_40moonbitlang_2fcore_2fbuiltin_2eLogger });
}
function _M0MPB13StringBuilder13write__objectGiE(self, obj) {
  _M0IP016_24default__implPB4Show6outputGiE(obj, { self: self, method_table: _M0FP092moonbitlang_2fcore_2fbuiltin_2fStringBuilder_24as_24_40moonbitlang_2fcore_2fbuiltin_2eLogger });
}
function _M0MPC13int3Int16unsafe__to__char(self) {
  return self;
}
function _M0MPC14byte4Byte8to__char(self) {
  return self;
}
function _M0MPB13StringBuilder21StringBuilder_2einner(size_hint) {
  return new _M0TPB13StringBuilder("");
}
function _M0MPB13StringBuilder10to__string(self) {
  return self.val;
}
function _M0IPB13StringBuilderPB6Logger11write__char(self, ch) {
  self.val = `${self.val}${String.fromCodePoint(ch)}`;
}
function _M0IPB13StringBuilderPB6Logger13write__string(self, str) {
  self.val = `${self.val}${str}`;
}
function _M0MPC16uint166UInt1622is__leading__surrogate(self) {
  return self >= 55296 && self <= 56319;
}
function _M0MPC16uint166UInt1623is__trailing__surrogate(self) {
  return self >= 56320 && self <= 57343;
}
function _M0FPB32code__point__of__surrogate__pair(leading, trailing) {
  return (((Math.imul(leading - 55296 | 0, 1024) | 0) + trailing | 0) - 56320 | 0) + 65536 | 0;
}
function _M0MPC16uint166UInt1616unsafe__to__char(self) {
  return self;
}
function _M0MPC16string6String16unsafe__char__at(self, index) {
  const c1 = self.charCodeAt(index);
  if (_M0MPC16uint166UInt1622is__leading__surrogate(c1)) {
    const c2 = self.charCodeAt(index + 1 | 0);
    return _M0FPB32code__point__of__surrogate__pair(c1, c2);
  } else {
    return _M0MPC16uint166UInt1616unsafe__to__char(c1);
  }
}
function _M0IPC14byte4BytePB3Add3add(self, that) {
  return (self + that | 0) & 255;
}
function _M0IPC14byte4BytePB3Div3div(self, that) {
  if (that === 0) {
    $panic();
  }
  return (self / that | 0) & 255;
}
function _M0IPC14byte4BytePB3Mod3mod(self, that) {
  if (that === 0) {
    $panic();
  }
  return (self % that | 0) & 255;
}
function _M0IPC14byte4BytePB3Sub3sub(self, that) {
  return (self - that | 0) & 255;
}
function _M0MPC14byte4Byte7to__hexN14to__hex__digitS3978(i) {
  return i < 10 ? _M0MPC14byte4Byte8to__char(_M0IPC14byte4BytePB3Add3add(i, 48)) : _M0MPC14byte4Byte8to__char(_M0IPC14byte4BytePB3Sub3sub(_M0IPC14byte4BytePB3Add3add(i, 97), 10));
}
function _M0MPC14byte4Byte7to__hex(b) {
  const _self = _M0MPB13StringBuilder21StringBuilder_2einner(0);
  _M0IPB13StringBuilderPB6Logger11write__char(_self, _M0MPC14byte4Byte7to__hexN14to__hex__digitS3978(_M0IPC14byte4BytePB3Div3div(b, 16)));
  _M0IPB13StringBuilderPB6Logger11write__char(_self, _M0MPC14byte4Byte7to__hexN14to__hex__digitS3978(_M0IPC14byte4BytePB3Mod3mod(b, 16)));
  return _M0MPB13StringBuilder10to__string(_self);
}
function _M0MPC16string10StringView6length(self) {
  return self.end - self.start | 0;
}
function _M0MPC16string10StringView11sub_2einner(self, start, end) {
  const str_len = self.str.length;
  let abs_end;
  if (end === undefined) {
    abs_end = self.end;
  } else {
    const _Some = end;
    const _end = _Some;
    abs_end = self.start + _end | 0;
  }
  const abs_start = self.start + start | 0;
  if (abs_start >= self.start && (abs_start <= abs_end && abs_end <= self.end)) {
    if (abs_start < str_len) {
      if (!_M0MPC16uint166UInt1623is__trailing__surrogate(self.str.charCodeAt(abs_start))) {
      } else {
        $panic();
      }
    }
    if (abs_end < str_len) {
      if (!_M0MPC16uint166UInt1623is__trailing__surrogate(self.str.charCodeAt(abs_end))) {
      } else {
        $panic();
      }
    }
    return new _M0TPC16string10StringView(self.str, abs_start, abs_end);
  } else {
    return $panic();
  }
}
function _M0MPC16string10StringView18escape__to_2einnerN14flush__segmentS3963(_env, seg, i) {
  const logger = _env._1;
  const self = _env._0;
  if (i > seg) {
    logger.method_table.method_2(logger.self, _M0MPC16string10StringView11sub_2einner(self, seg, i));
    return;
  } else {
    return;
  }
}
function _M0MPC16string10StringView18escape__to_2einner(self, logger, quote) {
  if (quote) {
    logger.method_table.method_3(logger.self, 34);
  }
  const len = self.end - self.start | 0;
  const _env = { _0: self, _1: logger };
  let _tmp = 0;
  let _tmp$2 = 0;
  _L: while (true) {
    const i = _tmp;
    const seg = _tmp$2;
    if (i >= len) {
      _M0MPC16string10StringView18escape__to_2einnerN14flush__segmentS3963(_env, seg, i);
      break;
    }
    const code = self.str.charCodeAt(self.start + i | 0);
    let c;
    _L$2: {
      switch (code) {
        case 34: {
          c = code;
          break _L$2;
        }
        case 92: {
          c = code;
          break _L$2;
        }
        case 10: {
          _M0MPC16string10StringView18escape__to_2einnerN14flush__segmentS3963(_env, seg, i);
          logger.method_table.method_0(logger.self, "\\n");
          _tmp = i + 1 | 0;
          _tmp$2 = i + 1 | 0;
          continue _L;
        }
        case 13: {
          _M0MPC16string10StringView18escape__to_2einnerN14flush__segmentS3963(_env, seg, i);
          logger.method_table.method_0(logger.self, "\\r");
          _tmp = i + 1 | 0;
          _tmp$2 = i + 1 | 0;
          continue _L;
        }
        case 8: {
          _M0MPC16string10StringView18escape__to_2einnerN14flush__segmentS3963(_env, seg, i);
          logger.method_table.method_0(logger.self, "\\b");
          _tmp = i + 1 | 0;
          _tmp$2 = i + 1 | 0;
          continue _L;
        }
        case 9: {
          _M0MPC16string10StringView18escape__to_2einnerN14flush__segmentS3963(_env, seg, i);
          logger.method_table.method_0(logger.self, "\\t");
          _tmp = i + 1 | 0;
          _tmp$2 = i + 1 | 0;
          continue _L;
        }
        default: {
          if (code < 32) {
            _M0MPC16string10StringView18escape__to_2einnerN14flush__segmentS3963(_env, seg, i);
            logger.method_table.method_0(logger.self, "\\u{");
            logger.method_table.method_0(logger.self, _M0MPC14byte4Byte7to__hex(code & 255));
            logger.method_table.method_3(logger.self, 125);
            _tmp = i + 1 | 0;
            _tmp$2 = i + 1 | 0;
            continue _L;
          } else {
            _tmp = i + 1 | 0;
            continue _L;
          }
        }
      }
    }
    _M0MPC16string10StringView18escape__to_2einnerN14flush__segmentS3963(_env, seg, i);
    logger.method_table.method_3(logger.self, 92);
    logger.method_table.method_3(logger.self, _M0MPC16uint166UInt1616unsafe__to__char(c));
    _tmp = i + 1 | 0;
    _tmp$2 = i + 1 | 0;
    continue;
  }
  if (quote) {
    logger.method_table.method_3(logger.self, 34);
    return;
  } else {
    return;
  }
}
function _M0MPC16string6String14escape_2einner(self, quote) {
  const buf = _M0MPB13StringBuilder21StringBuilder_2einner(0);
  _M0MPC16string10StringView18escape__to_2einner(new _M0TPC16string10StringView(self, 0, self.length), { self: buf, method_table: _M0FP092moonbitlang_2fcore_2fbuiltin_2fStringBuilder_24as_24_40moonbitlang_2fcore_2fbuiltin_2eLogger }, quote);
  return _M0MPB13StringBuilder10to__string(buf);
}
function _M0MPC15array13ReadOnlyArray11unsafe__getGiE(self, index) {
  return self[index];
}
function _M0MPC16string10StringView12view_2einner(self, start_offset, end_offset) {
  let end_offset$2;
  if (end_offset === undefined) {
    end_offset$2 = self.end - self.start | 0;
  } else {
    const _Some = end_offset;
    end_offset$2 = _Some;
  }
  return start_offset >= 0 && (start_offset <= end_offset$2 && end_offset$2 <= (self.end - self.start | 0)) ? new _M0TPC16string10StringView(self.str, self.start + start_offset | 0, self.start + end_offset$2 | 0) : _M0FPC15abort5abortGRPB4JsonE("Invalid index for View");
}
function _M0MPC16uint646UInt648to__byte(self) {
  return (Number(BigInt.asIntN(32, self)) | 0) & 255;
}
function _M0IPC16uint166UInt16PB2Eq5equal(self, that) {
  return self === that;
}
function _M0IPC16uint166UInt16PB2Eq10not__equal(self, that) {
  return self !== that;
}
function _M0IPC16uint166UInt16PB7Compare7compare(self, that) {
  return $compare_int(self, that);
}
function _M0MPC14json4Json6number(number, repr) {
  return new _M0DTPB4Json6Number(number, repr);
}
function _M0MPC16uint166UInt168to__uint(self) {
  return self;
}
function _M0IP016_24default__implPB2Eq10not__equalGsE(x, y) {
  return !(x === y);
}
function _M0IP016_24default__implPB2Eq10not__equalGRPB5ArrayGsEE(x, y) {
  return !_M0IPC15array5ArrayPB2Eq5equalGsE(x, y);
}
function _M0IP016_24default__implPB2Eq10not__equalGOcE(x, y) {
  return !_M0IPC16option6OptionPB2Eq5equalGcE(x, y);
}
function _M0IP016_24default__implPB2Eq10not__equalGOsE(x, y) {
  return !_M0IPC16option6OptionPB2Eq5equalGsE(x, y);
}
function _M0IP016_24default__implPB2Eq10not__equalGRPC16string10StringViewE(x, y) {
  return !_M0IPC16string10StringViewPB2Eq5equal(x, y);
}
function _M0IP016_24default__implPB7Compare6op__ltGsE(x, y) {
  return _M0IPC16string6StringPB7Compare7compare(x, y) < 0;
}
function _M0FPB14avalanche__acc(acc) {
  let acc$2 = acc;
  acc$2 = acc$2 ^ (acc$2 >>> 15 | 0);
  acc$2 = Math.imul(acc$2, -2048144777) | 0;
  acc$2 = acc$2 ^ (acc$2 >>> 13 | 0);
  acc$2 = Math.imul(acc$2, -1028477379) | 0;
  acc$2 = acc$2 ^ (acc$2 >>> 16 | 0);
  return acc$2;
}
function _M0FPB13finalize__acc(acc) {
  return _M0FPB14avalanche__acc(acc);
}
function _M0IP016_24default__implPB6Logger28write__string__interpolationGRPB13StringBuilderE(self, show) {
  show.method_table.method_0(show.self, { self: self, method_table: _M0FP092moonbitlang_2fcore_2fbuiltin_2fStringBuilder_24as_24_40moonbitlang_2fcore_2fbuiltin_2eLogger });
}
function _M0IP016_24default__implPB6Logger5writeGRPB13StringBuilderE(self, show) {
  show.method_table.method_0(show.self, { self: self, method_table: _M0FP092moonbitlang_2fcore_2fbuiltin_2fStringBuilder_24as_24_40moonbitlang_2fcore_2fbuiltin_2eLogger });
}
function _M0MPC16string6String11sub_2einner(self, start, end) {
  const len = self.length;
  let end$2;
  if (end === undefined) {
    end$2 = len;
  } else {
    const _Some = end;
    const _end = _Some;
    end$2 = _end;
  }
  if (start >= 0 && (start <= end$2 && end$2 <= len)) {
    if (start < len) {
      if (!_M0MPC16uint166UInt1623is__trailing__surrogate(self.charCodeAt(start))) {
      } else {
        $panic();
      }
    }
    if (end$2 < len) {
      if (!_M0MPC16uint166UInt1623is__trailing__surrogate(self.charCodeAt(end$2))) {
      } else {
        $panic();
      }
    }
    return new _M0TPC16string10StringView(self, start, end$2);
  } else {
    return $panic();
  }
}
function _M0IP016_24default__implPB6Logger16write__substringGRPB13StringBuilderE(self, value, start, len) {
  _M0IPB13StringBuilderPB6Logger11write__view(self, _M0MPC16string6String11sub_2einner(value, start, start + len | 0));
}
function _M0MPC16string10StringView4data(self) {
  return self.str;
}
function _M0MPC16string10StringView13start__offset(self) {
  return self.start;
}
function _M0IP016_24default__implPB4Show6outputGdE(self, logger) {
  logger.method_table.method_0(logger.self, _M0IPC16double6DoublePB4Show10to__string(self));
}
function _M0IP016_24default__implPB4Show6outputGsE(self, logger) {
  logger.method_table.method_0(logger.self, _M0IPC16string6StringPB4Show10to__string(self));
}
function _M0IP016_24default__implPB4Show6outputGiE(self, logger) {
  logger.method_table.method_0(logger.self, _M0IPC13int3IntPB4Show10to__string(self));
}
function _M0IP016_24default__implPB4Show10to__stringGRPC15debug4ReprE(self) {
  const logger = _M0MPB13StringBuilder21StringBuilder_2einner(0);
  _M0IPC15debug4ReprPB4Show6output(self, { self: logger, method_table: _M0FP092moonbitlang_2fcore_2fbuiltin_2fStringBuilder_24as_24_40moonbitlang_2fcore_2fbuiltin_2eLogger });
  return _M0MPB13StringBuilder10to__string(logger);
}
function _M0MPB4Iter4nextGUsRPB4JsonEE(self) {
  const _func = self.f;
  const result = _func();
  const _bind$2 = self.size_hint;
  if (result === undefined) {
    self.size_hint = _M0MPB4Iter4nextN6constrS9856GUsRPB4JsonEE;
  } else {
    if (_bind$2 === undefined) {
    } else {
      const _Some = _bind$2;
      const _n = _Some;
      self.size_hint = _n > 0 ? _n - 1 | 0 : _M0MPB4Iter4nextN6constrS9855GUsRPB4JsonEE;
    }
  }
  return result;
}
function _M0MPB4Iter4nextGcE(self) {
  const _func = self.f;
  const result = _func();
  const _bind$2 = self.size_hint;
  if (result === -1) {
    self.size_hint = _M0MPB4Iter4nextN6constrS9856GcE;
  } else {
    if (_bind$2 === undefined) {
    } else {
      const _Some = _bind$2;
      const _n = _Some;
      self.size_hint = _n > 0 ? _n - 1 | 0 : _M0MPB4Iter4nextN6constrS9855GcE;
    }
  }
  return result;
}
function _M0MPB4Iter4nextGdE(self) {
  const _func = self.f;
  const result = _func();
  const _bind$2 = self.size_hint;
  if (result.$tag === 1) {
    if (_bind$2 === undefined) {
    } else {
      const _Some = _bind$2;
      const _n = _Some;
      self.size_hint = _n > 0 ? _n - 1 | 0 : _M0MPB4Iter4nextN6constrS9855GdE;
    }
  } else {
    self.size_hint = _M0MPB4Iter4nextN6constrS9856GdE;
  }
  return result;
}
function _M0MPC13int3Int18to__string_2einner(self, radix) {
  return _M0FPB19int__to__string__js(self, radix);
}
function _M0MPB4Iter3newGUsRPB4JsonEE(f, size_hint) {
  let size_hint$2;
  if (size_hint === undefined) {
    size_hint$2 = undefined;
  } else {
    const _Some = size_hint;
    const _n = _Some;
    size_hint$2 = _n > 0 ? _n : _M0MPB4Iter3newN6constrS9863GUsRPB4JsonEE;
  }
  return new _M0TPB4IterGUsRPB4JsonEE(f, size_hint$2);
}
function _M0MPB4Iter3newGcE(f, size_hint) {
  let size_hint$2;
  if (size_hint === undefined) {
    size_hint$2 = undefined;
  } else {
    const _Some = size_hint;
    const _n = _Some;
    size_hint$2 = _n > 0 ? _n : _M0MPB4Iter3newN6constrS9863GcE;
  }
  return new _M0TPB4IterGcE(f, size_hint$2);
}
function _M0MPB4Iter3newGdE(f, size_hint) {
  let size_hint$2;
  if (size_hint === undefined) {
    size_hint$2 = undefined;
  } else {
    const _Some = size_hint;
    const _n = _Some;
    size_hint$2 = _n > 0 ? _n : _M0MPB4Iter3newN6constrS9863GdE;
  }
  return new _M0TPB4IterGdE(f, size_hint$2);
}
function _M0MPC15array10FixedArray5makeiGkE(length, value) {
  if (length <= 0) {
    return [];
  } else {
    const array = $make_array_len_and_init(length, value(0));
    let _tmp = 1;
    while (true) {
      const i = _tmp;
      if (i < length) {
        if (i >>> 0 < array.length) {
          array[i] = value(i);
        } else {
          $oob();
        }
        _tmp = i + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    return array;
  }
}
function _M0MPC16string10StringView11code__units(self) {
  const _bind$2 = _M0MPC15array10FixedArray5makeiGkE(self.str.length, (i) => self.str.charCodeAt(i));
  const _bind$3 = self.start;
  const _bind$4 = self.end;
  const _bind$5 = _bind$2.length;
  if (_bind$3 < 0 || (_bind$3 > _bind$4 || _bind$4 > _bind$5)) {
    $panic();
  }
  return new _M0TPB9ArrayViewGkE(_bind$2, _bind$3, _bind$4);
}
function _M0MPC16string10StringView9to__owned(self) {
  return self.str.substring(self.start, self.end);
}
function _M0IPC16string10StringViewPB4Show6output(self, logger) {
  logger.method_table.method_2(logger.self, self);
}
function _M0MPC16string10StringView4iter(self) {
  const start = self.start;
  const end = self.end;
  const index = new _M0TPB8MutLocalGiE(start);
  return _M0MPB4Iter3newGcE(() => {
    if (index.val < end) {
      const c1 = self.str.charCodeAt(index.val);
      if (_M0MPC16uint166UInt1622is__leading__surrogate(c1) && (index.val + 1 | 0) < self.end) {
        const c2 = self.str.charCodeAt(index.val + 1 | 0);
        if (_M0MPC16uint166UInt1623is__trailing__surrogate(c2)) {
          index.val = index.val + 2 | 0;
          return _M0FPB32code__point__of__surrogate__pair(c1, c2);
        }
      }
      index.val = index.val + 1 | 0;
      return _M0MPC16uint166UInt1616unsafe__to__char(c1);
    } else {
      return -1;
    }
  }, undefined);
}
function _M0MPC16string10StringView3all(self, f) {
  const _bind$2 = self.str;
  const _bind$3 = self.start;
  const _bind$4 = self.end;
  let _tmp = _bind$3;
  while (true) {
    const _string_index = _tmp;
    if (_string_index < _bind$4) {
      let _decoded_next_string_index;
      let _decoded_char;
      _L: {
        const _bind$5 = _bind$2.charCodeAt(_string_index);
        if (_bind$5 >= 55296 && _bind$5 <= 56319 && (_string_index + 1 | 0) < _bind$4) {
          const _bind$6 = _bind$2.charCodeAt(_string_index + 1 | 0);
          if (_bind$6 >= 56320 && _bind$6 <= 57343) {
            _decoded_next_string_index = _string_index + 2 | 0;
            _decoded_char = _M0MPC13int3Int16unsafe__to__char((((Math.imul(_bind$5 - 55296 | 0, 1024) | 0) + _bind$6 | 0) - 56320 | 0) + 65536 | 0);
            break _L;
          } else {
            _decoded_next_string_index = _string_index + 1 | 0;
            _decoded_char = _M0MPC13int3Int16unsafe__to__char(_bind$5);
            break _L;
          }
        } else {
          _decoded_next_string_index = _string_index + 1 | 0;
          _decoded_char = _M0MPC13int3Int16unsafe__to__char(_bind$5);
          break _L;
        }
      }
      if (!f(_decoded_char)) {
        return false;
      }
      _tmp = _decoded_next_string_index;
      continue;
    } else {
      break;
    }
  }
  return true;
}
function _M0MPC16string6String20unsafe__range__equal(self, self_off, other, other_off, len) {
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < len) {
      if (_M0IPC16uint166UInt16PB2Eq5equal(self.charCodeAt(self_off + i | 0), other.charCodeAt(other_off + i | 0))) {
      } else {
        return false;
      }
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return true;
}
function _M0IPC16string10StringViewPB2Eq5equal(self, other) {
  const len = self.end - self.start | 0;
  if (len === (other.end - other.start | 0)) {
    if (self.str === other.str && self.start === other.start) {
      return true;
    }
    return _M0MPC16string6String20unsafe__range__equal(self.str, self.start, other.str, other.start, len);
  } else {
    return false;
  }
}
function _M0MPC16string6String12view_2einner(self, start_offset, end_offset) {
  let end_offset$2;
  if (end_offset === undefined) {
    end_offset$2 = self.length;
  } else {
    const _Some = end_offset;
    end_offset$2 = _Some;
  }
  return start_offset >= 0 && (start_offset <= end_offset$2 && end_offset$2 <= self.length) ? new _M0TPC16string10StringView(self, start_offset, end_offset$2) : _M0FPC15abort5abortGRPB4JsonE("Invalid index for View");
}
function _M0MPC16string6String11from__array(chars) {
  const buf = _M0MPB13StringBuilder21StringBuilder_2einner(Math.imul(chars.end - chars.start | 0, 4) | 0);
  const _bind$2 = chars.end - chars.start | 0;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind$2) {
      const c = chars.buf[chars.start + _ | 0];
      _M0IPB13StringBuilderPB6Logger11write__char(buf, c);
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return _M0MPB13StringBuilder10to__string(buf);
}
function _M0MPC16string6String24char__length__ge_2einner(self, len, start_offset, end_offset) {
  let end_offset$2;
  if (end_offset === undefined) {
    end_offset$2 = self.length;
  } else {
    const _Some = end_offset;
    end_offset$2 = _Some;
  }
  let _tmp = start_offset;
  let _tmp$2 = 0;
  while (true) {
    const index = _tmp;
    const count = _tmp$2;
    if (index < end_offset$2 && count < len) {
      const c1 = self.charCodeAt(index);
      if (_M0MPC16uint166UInt1622is__leading__surrogate(c1) && (index + 1 | 0) < end_offset$2) {
        const c2 = self.charCodeAt(index + 1 | 0);
        if (_M0MPC16uint166UInt1623is__trailing__surrogate(c2)) {
          _tmp = index + 2 | 0;
          _tmp$2 = count + 1 | 0;
          continue;
        } else {
          _M0FPC15abort5abortGuE("invalid surrogate pair");
        }
      }
      _tmp = index + 1 | 0;
      _tmp$2 = count + 1 | 0;
      continue;
    } else {
      return count >= len;
    }
  }
}
function _M0MPC16string6String31offset__of__nth__char__backward(self, n, start_offset, end_offset) {
  let _tmp = end_offset;
  let _tmp$2 = 0;
  while (true) {
    const utf16_offset = _tmp;
    const char_count = _tmp$2;
    if ((utf16_offset - 1 | 0) >= start_offset && char_count < n) {
      const c = self.charCodeAt(utf16_offset - 1 | 0);
      if (_M0MPC16uint166UInt1623is__trailing__surrogate(c)) {
        _tmp = utf16_offset - 2 | 0;
        _tmp$2 = char_count + 1 | 0;
        continue;
      } else {
        _tmp = utf16_offset - 1 | 0;
        _tmp$2 = char_count + 1 | 0;
        continue;
      }
    } else {
      return char_count < n || utf16_offset < start_offset ? undefined : utf16_offset;
    }
  }
}
function _M0MPC16string6String30offset__of__nth__char__forward(self, n, start_offset, end_offset) {
  if (start_offset >= 0 && start_offset <= end_offset) {
    let _tmp = start_offset;
    let _tmp$2 = 0;
    while (true) {
      const utf16_offset = _tmp;
      const char_count = _tmp$2;
      if (utf16_offset < end_offset && char_count < n) {
        const c = self.charCodeAt(utf16_offset);
        if (_M0MPC16uint166UInt1622is__leading__surrogate(c)) {
          _tmp = utf16_offset + 2 | 0;
          _tmp$2 = char_count + 1 | 0;
          continue;
        } else {
          _tmp = utf16_offset + 1 | 0;
          _tmp$2 = char_count + 1 | 0;
          continue;
        }
      } else {
        return char_count < n || utf16_offset >= end_offset ? undefined : utf16_offset;
      }
    }
  } else {
    return _M0FPC15abort5abortGOiE("Invalid start index");
  }
}
function _M0MPC16string6String29offset__of__nth__char_2einner(self, i, start_offset, end_offset) {
  let end_offset$2;
  if (end_offset === undefined) {
    end_offset$2 = self.length;
  } else {
    const _Some = end_offset;
    end_offset$2 = _Some;
  }
  return i >= 0 ? _M0MPC16string6String30offset__of__nth__char__forward(self, i, start_offset, end_offset$2) : _M0MPC16string6String31offset__of__nth__char__backward(self, -i | 0, start_offset, end_offset$2);
}
function _M0IPB13StringBuilderPB6Logger11write__view(self, str) {
  self.val = `${self.val}${_M0MPC16string10StringView9to__owned(str)}`;
}
function _M0FPB19kmp__failure__table(pattern) {
  const m = pattern.end - pattern.start | 0;
  const table = $make_array_len_and_init(m, 0);
  let k = 0;
  let _tmp = 1;
  while (true) {
    const i = _tmp;
    if (i < m) {
      const c = pattern.str.charCodeAt(pattern.start + i | 0);
      while (true) {
        if (k > 0 && _M0IPC16uint166UInt16PB2Eq10not__equal(c, pattern.str.charCodeAt(pattern.start + k | 0))) {
          const _tmp$2 = k - 1 | 0;
          k = _tmp$2 >>> 0 < table.length ? table[_tmp$2] : $oob();
          continue;
        } else {
          break;
        }
      }
      if (_M0IPC16uint166UInt16PB2Eq5equal(c, pattern.str.charCodeAt(pattern.start + k | 0))) {
        k = k + 1 | 0;
      }
      if (i >>> 0 < table.length) {
        table[i] = k;
      } else {
        $oob();
      }
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return table;
}
function _M0FPB24find__pattern__kmp__from(target, pattern, start) {
  const n = target.end - target.start | 0;
  const m = pattern.end - pattern.start | 0;
  const table = _M0FPB19kmp__failure__table(pattern);
  let k = 0;
  let _tmp = start;
  while (true) {
    const i = _tmp;
    if (i < n) {
      const c = target.str.charCodeAt(target.start + i | 0);
      while (true) {
        if (k > 0 && _M0IPC16uint166UInt16PB2Eq10not__equal(c, pattern.str.charCodeAt(pattern.start + k | 0))) {
          const _tmp$2 = k - 1 | 0;
          k = _tmp$2 >>> 0 < table.length ? table[_tmp$2] : $oob();
          continue;
        } else {
          break;
        }
      }
      if (_M0IPC16uint166UInt16PB2Eq5equal(c, pattern.str.charCodeAt(pattern.start + k | 0))) {
        k = k + 1 | 0;
      }
      if (k === m) {
        return (i - m | 0) + 1 | 0;
      }
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return undefined;
}
function _M0FPB36find__two__anchor__candidate__scalar(data, start, candidate_end, first, last_offset, last) {
  let _tmp = start;
  while (true) {
    const pos = _tmp;
    if (pos < candidate_end) {
      if (_M0IPC16uint166UInt16PB2Eq5equal(data.charCodeAt(pos), first) && _M0IPC16uint166UInt16PB2Eq5equal(data.charCodeAt(pos + last_offset | 0), last)) {
        return pos;
      }
      _tmp = pos + 1 | 0;
      continue;
    } else {
      return -1;
    }
  }
}
function _M0FPB42find__two__anchor__candidate__from__string(data, start, candidate_end, first, last_offset, last) {
  return _M0FPB36find__two__anchor__candidate__scalar(data, start, candidate_end, first, last_offset, last);
}
function _M0FPB21string__ranges__equal(left, left_start, right, right_start, length) {
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < length) {
      if (_M0IPC16uint166UInt16PB2Eq10not__equal(left.charCodeAt(left_start + i | 0), right.charCodeAt(right_start + i | 0))) {
        return false;
      }
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return true;
}
function _M0FPB29two__anchor__should__fallback(failures, scanned) {
  if (failures > 64) {
    return true;
  } else {
    if (8 === 0) {
      $panic();
    }
    return failures > (4 + (scanned / 8 | 0) | 0);
  }
}
function _M0FPB22find__by__two__anchors(target, pattern) {
  const target_len = target.end - target.start | 0;
  const pattern_len = pattern.end - pattern.start | 0;
  const target_start = _M0MPC16string10StringView13start__offset(target);
  const pattern_start = _M0MPC16string10StringView13start__offset(pattern);
  const last_offset = pattern_len - 1 | 0;
  const candidate_end = ((target_start + target_len | 0) - pattern_len | 0) + 1 | 0;
  const first = pattern.str.charCodeAt(pattern.start);
  const last = pattern.str.charCodeAt(pattern.start + last_offset | 0);
  const middle_len = last_offset - 1 | 0;
  let _tmp = target_start;
  let _tmp$2 = 0;
  while (true) {
    const pos = _tmp;
    const failures = _tmp$2;
    if (pos < candidate_end) {
      const found = _M0FPB42find__two__anchor__candidate__from__string(_M0MPC16string10StringView4data(target), pos, candidate_end, first, last_offset, last);
      if (found < 0) {
        return undefined;
      }
      if (_M0FPB21string__ranges__equal(_M0MPC16string10StringView4data(target), found + 1 | 0, _M0MPC16string10StringView4data(pattern), pattern_start + 1 | 0, middle_len)) {
        return found - target_start | 0;
      }
      const failures$2 = failures + 1 | 0;
      const scanned = found - target_start | 0;
      if (_M0FPB29two__anchor__should__fallback(failures$2, scanned)) {
        return _M0FPB24find__pattern__kmp__from(target, pattern, scanned + 1 | 0);
      }
      _tmp = found + 1 | 0;
      _tmp$2 = failures$2;
      continue;
    } else {
      return undefined;
    }
  }
}
function _M0FPB24find__code__unit__scalar(data, start, end, code) {
  let _tmp = start;
  while (true) {
    const pos = _tmp;
    if (pos < end) {
      if (_M0IPC16uint166UInt16PB2Eq5equal(data.charCodeAt(pos), code)) {
        return pos;
      }
      _tmp = pos + 1 | 0;
      continue;
    } else {
      return -1;
    }
  }
}
function _M0FPB30find__code__unit__from__string(data, start, end, code) {
  return _M0FPB24find__code__unit__scalar(data, start, end, code);
}
function _M0FPB28find__code__unit__from__view(target, start, end, code) {
  const target_start = _M0MPC16string10StringView13start__offset(target);
  const found = _M0FPB30find__code__unit__from__string(_M0MPC16string10StringView4data(target), target_start + start | 0, target_start + end | 0, code);
  return found < 0 ? -1 : found - target_start | 0;
}
function _M0MPC16string10StringView4find(self, str) {
  const pattern_len = str.end - str.start | 0;
  switch (pattern_len) {
    case 0: {
      return _M0MPC16string10StringView4findN6constrS9865;
    }
    case 1: {
      const found = _M0FPB28find__code__unit__from__view(self, 0, self.end - self.start | 0, str.str.charCodeAt(str.start));
      return found < 0 ? undefined : found;
    }
    default: {
      return pattern_len > (self.end - self.start | 0) ? undefined : _M0FPB22find__by__two__anchors(self, str);
    }
  }
}
function _M0MPC16string6String4find(self, str) {
  return _M0MPC16string10StringView4find(new _M0TPC16string10StringView(self, 0, self.length), str);
}
function _M0IPC16string6StringPB4Show10to__string(self) {
  return self;
}
function _M0MPC16string6String6repeat(self, n) {
  if (n < 0) {
    return _M0FPC15abort5abortGRPB4JsonE("negative repeat count");
  } else {
    if (n === 0) {
      return "";
    } else {
      if (n === 1) {
        return self;
      } else {
        const len = self.length;
        const total = Math.imul(len, n) | 0;
        let _tmp;
        if (len === 0) {
          _tmp = true;
        } else {
          if (n === 0) {
            $panic();
          }
          _tmp = (total / n | 0) === len;
        }
        if (_tmp) {
          const buf = _M0MPB13StringBuilder21StringBuilder_2einner(total);
          const str = _M0IPC16string6StringPB4Show10to__string(self);
          let _tmp$2 = 0;
          while (true) {
            const _ = _tmp$2;
            if (_ < n) {
              _M0IPB13StringBuilderPB6Logger13write__string(buf, str);
              _tmp$2 = _ + 1 | 0;
              continue;
            } else {
              break;
            }
          }
          return _M0MPB13StringBuilder10to__string(buf);
        } else {
          return _M0FPC15abort5abortGRPB4JsonE("repeat result too large");
        }
      }
    }
  }
}
function _M0MPC14char4Char10utf16__len(self) {
  const code = self;
  return code <= 65535 ? 1 : 2;
}
function _M0MPC16string10StringView8find__by(self, pred) {
  const _bind$2 = self.str;
  const _bind$3 = self.start;
  const _bind$4 = self.end;
  let _tmp = _bind$3;
  let _tmp$2 = 0;
  while (true) {
    const _string_index = _tmp;
    const offset = _tmp$2;
    if (_string_index < _bind$4) {
      let _decoded_next_string_index;
      let _decoded_char;
      _L: {
        const _bind$5 = _bind$2.charCodeAt(_string_index);
        if (_bind$5 >= 55296 && _bind$5 <= 56319 && (_string_index + 1 | 0) < _bind$4) {
          const _bind$6 = _bind$2.charCodeAt(_string_index + 1 | 0);
          if (_bind$6 >= 56320 && _bind$6 <= 57343) {
            _decoded_next_string_index = _string_index + 2 | 0;
            _decoded_char = _M0MPC13int3Int16unsafe__to__char((((Math.imul(_bind$5 - 55296 | 0, 1024) | 0) + _bind$6 | 0) - 56320 | 0) + 65536 | 0);
            break _L;
          } else {
            _decoded_next_string_index = _string_index + 1 | 0;
            _decoded_char = _M0MPC13int3Int16unsafe__to__char(_bind$5);
            break _L;
          }
        } else {
          _decoded_next_string_index = _string_index + 1 | 0;
          _decoded_char = _M0MPC13int3Int16unsafe__to__char(_bind$5);
          break _L;
        }
      }
      if (pred(_decoded_char)) {
        return offset;
      }
      _tmp = _decoded_next_string_index;
      _tmp$2 = offset + _M0MPC14char4Char10utf16__len(_decoded_char) | 0;
      continue;
    } else {
      return undefined;
    }
  }
}
function _M0MPC16string6String8find__by(self, pred) {
  return _M0MPC16string10StringView8find__by(new _M0TPC16string10StringView(self, 0, self.length), pred);
}
function _M0MPC16string10StringView11has__suffix(self, str) {
  const self_len = self.end - self.start | 0;
  const str_len = str.end - str.start | 0;
  if (str_len <= self_len) {
    const start = self_len - str_len | 0;
    return str_len === 0 || _M0IPC16uint166UInt16PB2Eq5equal(self.str.charCodeAt(self.start + start | 0), str.str.charCodeAt(str.start)) ? _M0MPC16string6String20unsafe__range__equal(self.str, self.start + start | 0, str.str, str.start, str_len) : false;
  } else {
    return false;
  }
}
function _M0MPC16string6String11has__suffix(self, str) {
  return _M0MPC16string10StringView11has__suffix(new _M0TPC16string10StringView(self, 0, self.length), str);
}
function _M0MPC16string10StringView11has__prefix(self, str) {
  const str_len = str.end - str.start | 0;
  return str_len <= (self.end - self.start | 0) ? (str_len === 0 || _M0IPC16uint166UInt16PB2Eq5equal(self.str.charCodeAt(self.start), str.str.charCodeAt(str.start)) ? _M0MPC16string6String20unsafe__range__equal(self.str, self.start, str.str, str.start, str_len) : false) : false;
}
function _M0MPC16string6String11has__prefix(self, str) {
  return _M0MPC16string10StringView11has__prefix(new _M0TPC16string10StringView(self, 0, self.length), str);
}
function _M0MPC16string10StringView13strip__suffix(self, suffix) {
  const self_len = self.end - self.start | 0;
  const suffix_len = suffix.end - suffix.start | 0;
  return self_len >= suffix_len && _M0IPC16string10StringViewPB2Eq5equal(_M0MPC16string10StringView12view_2einner(self, self_len - suffix_len | 0, undefined), suffix) ? _M0MPC16string10StringView12view_2einner(self, 0, self_len - suffix_len | 0) : undefined;
}
function _M0MPC16string6String13strip__suffix(self, suffix) {
  return _M0MPC16string10StringView13strip__suffix(new _M0TPC16string10StringView(self, 0, self.length), suffix);
}
function _M0MPC16string10StringView13strip__prefix(self, prefix) {
  const prefix_len = prefix.end - prefix.start | 0;
  return (self.end - self.start | 0) >= prefix_len && _M0IPC16string10StringViewPB2Eq5equal(_M0MPC16string10StringView12view_2einner(self, 0, prefix_len), prefix) ? _M0MPC16string10StringView12view_2einner(self, prefix_len, undefined) : undefined;
}
function _M0MPC15array5Array13Array_2einnerGcE(capacity) {
  return [];
}
function _M0MPC15array5Array13Array_2einnerGRPC16string10StringViewE(capacity) {
  return [];
}
function _M0MPC15array5Array4pushGRPC14json10WriteFrameE(self, value) {
  _M0MPB7JSArray4push(self, value);
}
function _M0MPC15array5Array4pushGRPB5ArrayGRP217zhengxin_2dcoding4scss7CssRuleEE(self, value) {
  _M0MPB7JSArray4push(self, value);
}
function _M0MPC15array5Array4pushGcE(self, value) {
  _M0MPB7JSArray4push(self, value);
}
function _M0MPC15array5Array4pushGiE(self, value) {
  _M0MPB7JSArray4push(self, value);
}
function _M0MPB4Iter4foldGcRPB5ArrayGcEE(self, init, f) {
  let acc = init;
  while (true) {
    const _bind$2 = _M0MPB4Iter4nextGcE(self);
    if (_bind$2 === -1) {
      break;
    } else {
      const _Some = _bind$2;
      const _x = _Some;
      acc = f(acc, _x);
      continue;
    }
  }
  return acc;
}
function _M0FPB36string__contains__code__unit__scalar(str, start, end, code) {
  let _tmp = start;
  while (true) {
    const i = _tmp;
    if (i < end) {
      if (_M0IPC16uint166UInt16PB2Eq5equal(str.charCodeAt(i), code)) {
        return true;
      }
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return false;
}
function _M0FPB28string__contains__code__unit(str, start, end, code) {
  return _M0FPB36string__contains__code__unit__scalar(str, start, end, code);
}
function _M0MPC16string10StringView20contains__code__unit(self, code) {
  return _M0FPB28string__contains__code__unit(self.str, self.start, self.end, code);
}
function _M0MPC16string10StringView8contains(self, str) {
  const _bind$2 = str.end - str.start | 0;
  switch (_bind$2) {
    case 0: {
      return true;
    }
    case 1: {
      return _M0MPC16string10StringView20contains__code__unit(self, str.str.charCodeAt(str.start));
    }
    default: {
      const _bind$3 = _M0MPC16string10StringView4find(self, str);
      return !(_bind$3 === undefined);
    }
  }
}
function _M0MPC16string6String8contains(self, str) {
  return _M0MPC16string10StringView8contains(new _M0TPC16string10StringView(self, 0, self.length), str);
}
function _M0MPC14char4Char8to__uint(self) {
  return self;
}
function _M0FPB23build__ascii__char__set(chars) {
  let bits0 = 0;
  let bits1 = 0;
  let bits2 = 0;
  let bits3 = 0;
  const _bind$2 = chars.str;
  const _bind$3 = chars.start;
  const _bind$4 = chars.end;
  let _tmp = _bind$3;
  while (true) {
    const _string_index = _tmp;
    if (_string_index < _bind$4) {
      let _decoded_next_string_index;
      let _decoded_char;
      _L: {
        const _bind$5 = _bind$2.charCodeAt(_string_index);
        if (_bind$5 >= 55296 && _bind$5 <= 56319 && (_string_index + 1 | 0) < _bind$4) {
          const _bind$6 = _bind$2.charCodeAt(_string_index + 1 | 0);
          if (_bind$6 >= 56320 && _bind$6 <= 57343) {
            _decoded_next_string_index = _string_index + 2 | 0;
            _decoded_char = _M0MPC13int3Int16unsafe__to__char((((Math.imul(_bind$5 - 55296 | 0, 1024) | 0) + _bind$6 | 0) - 56320 | 0) + 65536 | 0);
            break _L;
          } else {
            _decoded_next_string_index = _string_index + 1 | 0;
            _decoded_char = _M0MPC13int3Int16unsafe__to__char(_bind$5);
            break _L;
          }
        } else {
          _decoded_next_string_index = _string_index + 1 | 0;
          _decoded_char = _M0MPC13int3Int16unsafe__to__char(_bind$5);
          break _L;
        }
      }
      const code = _M0MPC14char4Char8to__uint(_decoded_char);
      if (code >>> 0 < 128 >>> 0) {
        const bit = 1 << (code & 31);
        const _bind$5 = code >>> 5 | 0;
        switch (_bind$5) {
          case 0: {
            bits0 = bits0 | bit;
            break;
          }
          case 1: {
            bits1 = bits1 | bit;
            break;
          }
          case 2: {
            bits2 = bits2 | bit;
            break;
          }
          default: {
            bits3 = bits3 | bit;
          }
        }
      } else {
        return undefined;
      }
      _tmp = _decoded_next_string_index;
      continue;
    } else {
      break;
    }
  }
  return { _0: bits0, _1: bits1, _2: bits2, _3: bits3 };
}
function _M0FPB26ascii__char__set__contains(bits0, bits1, bits2, bits3, code) {
  if (code >>> 0 < 128 >>> 0) {
    const bit = 1 << (code & 31);
    const _bind$2 = code >>> 5 | 0;
    switch (_bind$2) {
      case 0: {
        return (bits0 & bit) !== 0;
      }
      case 1: {
        return (bits1 & bit) !== 0;
      }
      case 2: {
        return (bits2 & bit) !== 0;
      }
      default: {
        return (bits3 & bit) !== 0;
      }
    }
  } else {
    return false;
  }
}
function _M0FPB34string__trim__start__ascii__scalar(str, start, end, bits0, bits1, bits2, bits3) {
  let _tmp = start;
  while (true) {
    const pos = _tmp;
    if (pos < end && _M0FPB26ascii__char__set__contains(bits0, bits1, bits2, bits3, _M0MPC16uint166UInt168to__uint(str.charCodeAt(pos)))) {
      _tmp = pos + 1 | 0;
      continue;
    } else {
      return pos;
    }
  }
}
function _M0FPB32string__trim__end__ascii__scalar(str, start, end, bits0, bits1, bits2, bits3) {
  let _tmp = end;
  while (true) {
    const pos = _tmp;
    if (pos > start && _M0FPB26ascii__char__set__contains(bits0, bits1, bits2, bits3, _M0MPC16uint166UInt168to__uint(str.charCodeAt(pos - 1 | 0)))) {
      _tmp = pos - 1 | 0;
      continue;
    } else {
      return pos;
    }
  }
}
function _M0FPB26string__trim__start__ascii(str, start, end, _chars, bits0, bits1, bits2, bits3) {
  return _M0FPB34string__trim__start__ascii__scalar(str, start, end, bits0, bits1, bits2, bits3);
}
function _M0FPB24string__trim__end__ascii(str, start, end, _chars, bits0, bits1, bits2, bits3) {
  return _M0FPB32string__trim__end__ascii__scalar(str, start, end, bits0, bits1, bits2, bits3);
}
function _M0MPC16string10StringView14contains__char(self, c) {
  const len = self.end - self.start | 0;
  if (len > 0) {
    const c$2 = c;
    if (c$2 >= 0 && c$2 <= 65535) {
      return _M0MPC16string10StringView20contains__code__unit(self, c$2 & 65535);
    } else {
      if (c$2 < 0) {
        return false;
      } else {
        if (len >= 2) {
          const adj = c$2 - 65536 | 0;
          const high = 55296 + (adj >> 10) | 0;
          if (high <= 65535) {
            const high$2 = high & 65535;
            const low = (56320 + (adj & 1023) | 0) & 65535;
            let _tmp = 0;
            while (true) {
              const i = _tmp;
              if (i < (len - 1 | 0)) {
                if (_M0IPC16uint166UInt16PB2Eq5equal(self.str.charCodeAt(self.start + i | 0), high$2)) {
                  if (_M0IPC16uint166UInt16PB2Eq5equal(self.str.charCodeAt(self.start + (i + 1 | 0) | 0), low)) {
                    return true;
                  }
                  _tmp = i + 2 | 0;
                  continue;
                }
                _tmp = i + 1 | 0;
                continue;
              } else {
                break;
              }
            }
          } else {
            return false;
          }
        } else {
          return false;
        }
      }
    }
    return false;
  } else {
    return false;
  }
}
function _M0MPC16string10StringView24trim__start__with__chars(self, chars) {
  let _tmp = self;
  while (true) {
    const x = _tmp;
    if ((x.end - x.start | 0) === 0) {
      return x;
    } else {
      const _c = _M0MPC16string6String16unsafe__char__at(x.str, _M0MPC16string6String29offset__of__nth__char_2einner(x.str, 0, x.start, x.end));
      const _tmp$2 = x.str;
      const _bind$2 = _M0MPC16string6String29offset__of__nth__char_2einner(x.str, 1, x.start, x.end);
      let _tmp$3;
      if (_bind$2 === undefined) {
        _tmp$3 = x.end;
      } else {
        const _Some = _bind$2;
        _tmp$3 = _Some;
      }
      const _x = new _M0TPC16string10StringView(_tmp$2, _tmp$3, x.end);
      if (_M0MPC16string10StringView14contains__char(chars, _c)) {
        _tmp = _x;
        continue;
      } else {
        return x;
      }
    }
  }
}
function _M0MPC16string10StringView22trim__end__with__chars(self, chars) {
  let _tmp = self;
  while (true) {
    const x = _tmp;
    if ((x.end - x.start | 0) === 0) {
      return x;
    } else {
      const _c = _M0MPC16string6String16unsafe__char__at(x.str, _M0MPC16string6String29offset__of__nth__char_2einner(x.str, -1, x.start, x.end));
      const _x = new _M0TPC16string10StringView(x.str, x.start, _M0MPC16string6String29offset__of__nth__char_2einner(x.str, -1, x.start, x.end));
      if (_M0MPC16string10StringView14contains__char(chars, _c)) {
        _tmp = _x;
        continue;
      } else {
        return x;
      }
    }
  }
}
function _M0MPC16string10StringView12trim_2einner(self, chars) {
  const _bind$2 = _M0FPB23build__ascii__char__set(chars);
  if (_bind$2 === undefined) {
    return _M0MPC16string10StringView22trim__end__with__chars(_M0MPC16string10StringView24trim__start__with__chars(self, chars), chars);
  } else {
    const _Some = _bind$2;
    const _x = _Some;
    const _bits0 = _x._0;
    const _bits1 = _x._1;
    const _bits2 = _x._2;
    const _bits3 = _x._3;
    const start = _M0FPB26string__trim__start__ascii(self.str, self.start, self.end, chars, _bits0, _bits1, _bits2, _bits3);
    const end = _M0FPB24string__trim__end__ascii(self.str, start, self.end, chars, _bits0, _bits1, _bits2, _bits3);
    return new _M0TPC16string10StringView(self.str, start, end);
  }
}
function _M0MPC16string10StringView4trim(self, chars$46$opt) {
  let chars;
  if (chars$46$opt === undefined) {
    chars = new _M0TPC16string10StringView(_M0MPC16string10StringView4trimN7_2abindS6760, 0, _M0MPC16string10StringView4trimN7_2abindS6760.length);
  } else {
    const _Some = chars$46$opt;
    chars = _Some;
  }
  return _M0MPC16string10StringView12trim_2einner(self, chars);
}
function _M0MPC16string6String12trim_2einner(self, chars) {
  return _M0MPC16string10StringView12trim_2einner(new _M0TPC16string10StringView(self, 0, self.length), chars);
}
function _M0MPC16string6String4trim(self, chars$46$opt) {
  let chars;
  if (chars$46$opt === undefined) {
    chars = new _M0TPC16string10StringView(_M0MPC16string6String4trimN7_2abindS6861, 0, _M0MPC16string6String4trimN7_2abindS6861.length);
  } else {
    const _Some = chars$46$opt;
    chars = _Some;
  }
  return _M0MPC16string6String12trim_2einner(self, chars);
}
function _M0MPC16string10StringView9is__empty(self) {
  return (self.end - self.start | 0) === 0;
}
function _M0MPC16string6String9is__empty(self) {
  return self === "";
}
function _M0MPC16string6String4iter(self) {
  const len = self.length;
  const index = new _M0TPB8MutLocalGiE(0);
  return _M0MPB4Iter3newGcE(() => {
    if (index.val < len) {
      const c1 = self.charCodeAt(index.val);
      if (_M0MPC16uint166UInt1622is__leading__surrogate(c1) && (index.val + 1 | 0) < len) {
        const c2 = self.charCodeAt(index.val + 1 | 0);
        if (_M0MPC16uint166UInt1623is__trailing__surrogate(c2)) {
          const c = _M0FPB32code__point__of__surrogate__pair(c1, c2);
          index.val = index.val + 2 | 0;
          return c;
        }
      }
      index.val = index.val + 1 | 0;
      return _M0MPC16uint166UInt1616unsafe__to__char(c1);
    } else {
      return -1;
    }
  }, undefined);
}
function _M0MPB4Iter3mapGcRPC16string10StringViewE(self, f) {
  return new _M0TPB4IterGRPC16string10StringViewE(() => {
    const _bind$2 = _M0MPB4Iter4nextGcE(self);
    if (_bind$2 === -1) {
      return undefined;
    } else {
      const _Some = _bind$2;
      const _x = _Some;
      return f(_x);
    }
  }, self.size_hint);
}
function _M0MPB4Iter3mapGRPC16string10StringViewsE(self, f) {
  return new _M0TPB4IterGsE(() => {
    const _bind$2 = _M0MPB4Iter4nextGUsRPB4JsonEE(self);
    if (_bind$2 === undefined) {
      return undefined;
    } else {
      const _Some = _bind$2;
      const _x = _Some;
      return f(_x);
    }
  }, self.size_hint);
}
function _M0IPC14char4CharPB4Show10to__string(self) {
  return String.fromCodePoint(self);
}
function _M0MPC16string10StringView5split(self, sep) {
  const sep_len = sep.end - sep.start | 0;
  if (sep_len === 0) {
    return _M0MPB4Iter3mapGcRPC16string10StringViewE(_M0MPC16string10StringView4iter(self), (c) => _M0MPC16string6String12view_2einner(_M0IPC14char4CharPB4Show10to__string(c), 0, undefined));
  }
  const remaining = new _M0TPB8MutLocalGORPC16string10StringViewE(self);
  return _M0MPB4Iter3newGUsRPB4JsonEE(() => {
    const _bind$2 = remaining.val;
    if (_bind$2 === undefined) {
      return undefined;
    } else {
      const _Some = _bind$2;
      const _view = _Some;
      const _bind$3 = _M0MPC16string10StringView4find(_view, sep);
      if (_bind$3 === undefined) {
        remaining.val = undefined;
        return _view;
      } else {
        const _Some$2 = _bind$3;
        const _end = _Some$2;
        remaining.val = _M0MPC16string10StringView12view_2einner(_view, _end + sep_len | 0, undefined);
        return _M0MPC16string10StringView12view_2einner(_view, 0, _end);
      }
    }
  }, undefined);
}
function _M0MPC16string6String5split(self, sep) {
  return _M0MPC16string10StringView5split(new _M0TPC16string10StringView(self, 0, self.length), sep);
}
function _M0MPB4Iter9to__arrayGRPC16string10StringViewE(self) {
  const _bind$2 = self.size_hint;
  let result;
  if (_bind$2 === undefined) {
    result = [];
  } else {
    const _Some = _bind$2;
    const _n = _Some;
    result = _M0MPC15array5Array13Array_2einnerGRPC16string10StringViewE(_n);
  }
  while (true) {
    const _bind$3 = _M0MPB4Iter4nextGUsRPB4JsonEE(self);
    if (_bind$3 === undefined) {
      break;
    } else {
      const _Some = _bind$3;
      const _x = _Some;
      _M0MPC15array5Array4pushGRPC14json10WriteFrameE(result, _x);
      continue;
    }
  }
  return result;
}
function _M0MPC16string6String12replace__all(self, old, new_) {
  const len = self.length;
  const buf = _M0MPB13StringBuilder21StringBuilder_2einner(len);
  const old_len = old.end - old.start | 0;
  const new$2 = _M0MPC16string10StringView9to__owned(new_);
  if (old_len === 0) {
    _M0IPB13StringBuilderPB6Logger13write__string(buf, new$2);
    const _bind$2 = self.length;
    let _tmp = 0;
    while (true) {
      const _string_index = _tmp;
      if (_string_index < _bind$2) {
        let _decoded_next_string_index;
        let _decoded_char;
        _L: {
          const _bind$3 = self.charCodeAt(_string_index);
          if (_bind$3 >= 55296 && _bind$3 <= 56319 && (_string_index + 1 | 0) < _bind$2) {
            const _bind$4 = self.charCodeAt(_string_index + 1 | 0);
            if (_bind$4 >= 56320 && _bind$4 <= 57343) {
              _decoded_next_string_index = _string_index + 2 | 0;
              _decoded_char = _M0MPC13int3Int16unsafe__to__char((((Math.imul(_bind$3 - 55296 | 0, 1024) | 0) + _bind$4 | 0) - 56320 | 0) + 65536 | 0);
              break _L;
            } else {
              _decoded_next_string_index = _string_index + 1 | 0;
              _decoded_char = _M0MPC13int3Int16unsafe__to__char(_bind$3);
              break _L;
            }
          } else {
            _decoded_next_string_index = _string_index + 1 | 0;
            _decoded_char = _M0MPC13int3Int16unsafe__to__char(_bind$3);
            break _L;
          }
        }
        _M0IPB13StringBuilderPB6Logger11write__char(buf, _decoded_char);
        _M0IPB13StringBuilderPB6Logger13write__string(buf, new$2);
        _tmp = _decoded_next_string_index;
        continue;
      } else {
        break;
      }
    }
    return _M0MPB13StringBuilder10to__string(buf);
  } else {
    const first_end = _M0MPC16string6String4find(self, old);
    if (first_end === undefined) {
      return self;
    } else {
      const _Some = first_end;
      const _end = _Some;
      let _tmp = new _M0TPC16string10StringView(self, 0, self.length);
      let _tmp$2 = _end;
      while (true) {
        const view = _tmp;
        const end = _tmp$2;
        const seg = _M0MPC16string10StringView12view_2einner(view, 0, end);
        _M0IP016_24default__implPB6Logger16write__substringGRPB13StringBuilderE(buf, _M0MPC16string10StringView4data(seg), _M0MPC16string10StringView13start__offset(seg), seg.end - seg.start | 0);
        _M0IPB13StringBuilderPB6Logger13write__string(buf, new$2);
        if ((end + old_len | 0) <= len) {
          const next_view = _M0MPC16string10StringView12view_2einner(view, end + old_len | 0, undefined);
          const _bind$2 = _M0MPC16string10StringView4find(next_view, old);
          if (_bind$2 === undefined) {
            _M0IP016_24default__implPB6Logger16write__substringGRPB13StringBuilderE(buf, _M0MPC16string10StringView4data(next_view), _M0MPC16string10StringView13start__offset(next_view), next_view.end - next_view.start | 0);
            break;
          } else {
            const _Some$2 = _bind$2;
            const _next_end = _Some$2;
            _tmp = next_view;
            _tmp$2 = _next_end;
            continue;
          }
        } else {
          break;
        }
      }
      return _M0MPB13StringBuilder10to__string(buf);
    }
  }
}
function _M0MPC14char4Char20is__ascii__uppercase(self) {
  return self >= 65 && self <= 90;
}
function _M0MPC16string6String9to__lower(self) {
  const _bind$2 = _M0MPC16string6String8find__by(self, (c) => _M0MPC14char4Char20is__ascii__uppercase(c));
  if (_bind$2 === undefined) {
    return self;
  } else {
    const _Some = _bind$2;
    const _idx = _Some;
    const buf = _M0MPB13StringBuilder21StringBuilder_2einner(self.length);
    const head = _M0MPC16string6String12view_2einner(self, 0, _idx);
    _M0IP016_24default__implPB6Logger16write__substringGRPB13StringBuilderE(buf, _M0MPC16string10StringView4data(head), _M0MPC16string10StringView13start__offset(head), head.end - head.start | 0);
    const _bind$3 = _M0MPC16string6String12view_2einner(self, _idx, undefined);
    const _bind$4 = _bind$3.str;
    const _bind$5 = _bind$3.start;
    const _bind$6 = _bind$3.end;
    let _tmp = _bind$5;
    while (true) {
      const _string_index = _tmp;
      if (_string_index < _bind$6) {
        let _decoded_next_string_index;
        let _decoded_char;
        _L: {
          const _bind$7 = _bind$4.charCodeAt(_string_index);
          if (_bind$7 >= 55296 && _bind$7 <= 56319 && (_string_index + 1 | 0) < _bind$6) {
            const _bind$8 = _bind$4.charCodeAt(_string_index + 1 | 0);
            if (_bind$8 >= 56320 && _bind$8 <= 57343) {
              _decoded_next_string_index = _string_index + 2 | 0;
              _decoded_char = _M0MPC13int3Int16unsafe__to__char((((Math.imul(_bind$7 - 55296 | 0, 1024) | 0) + _bind$8 | 0) - 56320 | 0) + 65536 | 0);
              break _L;
            } else {
              _decoded_next_string_index = _string_index + 1 | 0;
              _decoded_char = _M0MPC13int3Int16unsafe__to__char(_bind$7);
              break _L;
            }
          } else {
            _decoded_next_string_index = _string_index + 1 | 0;
            _decoded_char = _M0MPC13int3Int16unsafe__to__char(_bind$7);
            break _L;
          }
        }
        if (_M0MPC14char4Char20is__ascii__uppercase(_decoded_char)) {
          _M0IPB13StringBuilderPB6Logger11write__char(buf, _decoded_char + 32 | 0);
        } else {
          _M0IPB13StringBuilderPB6Logger11write__char(buf, _decoded_char);
        }
        _tmp = _decoded_next_string_index;
        continue;
      } else {
        break;
      }
    }
    return _M0MPB13StringBuilder10to__string(buf);
  }
}
function _M0MPC14char4Char20is__ascii__lowercase(self) {
  return self >= 97 && self <= 122;
}
function _M0MPC16string6String9to__upper(self) {
  const _bind$2 = _M0MPC16string6String8find__by(self, (c) => _M0MPC14char4Char20is__ascii__lowercase(c));
  if (_bind$2 === undefined) {
    return self;
  } else {
    const _Some = _bind$2;
    const _idx = _Some;
    const buf = _M0MPB13StringBuilder21StringBuilder_2einner(self.length);
    const head = _M0MPC16string6String12view_2einner(self, 0, _idx);
    _M0IP016_24default__implPB6Logger16write__substringGRPB13StringBuilderE(buf, _M0MPC16string10StringView4data(head), _M0MPC16string10StringView13start__offset(head), head.end - head.start | 0);
    const _bind$3 = _M0MPC16string6String12view_2einner(self, _idx, undefined);
    const _bind$4 = _bind$3.str;
    const _bind$5 = _bind$3.start;
    const _bind$6 = _bind$3.end;
    let _tmp = _bind$5;
    while (true) {
      const _string_index = _tmp;
      if (_string_index < _bind$6) {
        let _decoded_next_string_index;
        let _decoded_char;
        _L: {
          const _bind$7 = _bind$4.charCodeAt(_string_index);
          if (_bind$7 >= 55296 && _bind$7 <= 56319 && (_string_index + 1 | 0) < _bind$6) {
            const _bind$8 = _bind$4.charCodeAt(_string_index + 1 | 0);
            if (_bind$8 >= 56320 && _bind$8 <= 57343) {
              _decoded_next_string_index = _string_index + 2 | 0;
              _decoded_char = _M0MPC13int3Int16unsafe__to__char((((Math.imul(_bind$7 - 55296 | 0, 1024) | 0) + _bind$8 | 0) - 56320 | 0) + 65536 | 0);
              break _L;
            } else {
              _decoded_next_string_index = _string_index + 1 | 0;
              _decoded_char = _M0MPC13int3Int16unsafe__to__char(_bind$7);
              break _L;
            }
          } else {
            _decoded_next_string_index = _string_index + 1 | 0;
            _decoded_char = _M0MPC13int3Int16unsafe__to__char(_bind$7);
            break _L;
          }
        }
        if (_M0MPC14char4Char20is__ascii__lowercase(_decoded_char)) {
          _M0IPB13StringBuilderPB6Logger11write__char(buf, _decoded_char - 32 | 0);
        } else {
          _M0IPB13StringBuilderPB6Logger11write__char(buf, _decoded_char);
        }
        _tmp = _decoded_next_string_index;
        continue;
      } else {
        break;
      }
    }
    return _M0MPB13StringBuilder10to__string(buf);
  }
}
function _M0MPC16string10StringView9get__char(self, idx) {
  if (idx >= 0 && idx < (self.end - self.start | 0)) {
    const c = self.str.charCodeAt(self.start + idx | 0);
    if (_M0MPC16uint166UInt1622is__leading__surrogate(c)) {
      if ((idx + 1 | 0) < (self.end - self.start | 0)) {
        const next = self.str.charCodeAt(self.start + (idx + 1 | 0) | 0);
        return _M0MPC16uint166UInt1623is__trailing__surrogate(next) ? _M0FPB32code__point__of__surrogate__pair(c, next) : -1;
      } else {
        return -1;
      }
    } else {
      return _M0MPC16uint166UInt1623is__trailing__surrogate(c) ? -1 : _M0MPC16uint166UInt1616unsafe__to__char(c);
    }
  } else {
    return -1;
  }
}
function _M0IPC16string6StringPB12ToStringView16to__string__view(self) {
  return new _M0TPC16string10StringView(self, 0, self.length);
}
function _M0IPC16string10StringViewPB12ToStringView16to__string__view(self) {
  return self;
}
function _M0IPC16string6StringPB7Compare7compare(self, other) {
  const len = self.length;
  const _bind$2 = $compare_int(len, other.length);
  if (_bind$2 === 0) {
    let _tmp = 0;
    while (true) {
      const i = _tmp;
      if (i < len) {
        const order = _M0IPC16uint166UInt16PB7Compare7compare(self.charCodeAt(i), other.charCodeAt(i));
        if (order !== 0) {
          return order;
        }
        _tmp = i + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    return 0;
  } else {
    return _bind$2;
  }
}
function _M0MPC16string6String9to__array(self) {
  return _M0MPB4Iter4foldGcRPB5ArrayGcEE(_M0MPC16string6String4iter(self), _M0MPC15array5Array13Array_2einnerGcE(self.length), (rv, c) => {
    _M0MPC15array5Array4pushGcE(rv, c);
    return rv;
  });
}
function _M0IPC14bool4BoolPB4Show10to__string(self) {
  return self ? "true" : "false";
}
function _M0IPC13int3IntPB4Show10to__string(self) {
  return _M0MPC13int3Int18to__string_2einner(self, 10);
}
function _M0MPC15array9ArrayView4iterGsE(self) {
  const i = new _M0TPB8MutLocalGiE(0);
  const len = self.end - self.start | 0;
  return _M0MPB4Iter3newGUsRPB4JsonEE(() => {
    if (i.val < len) {
      const elem = self.buf[self.start + i.val | 0];
      i.val = i.val + 1 | 0;
      return elem;
    } else {
      return undefined;
    }
  }, len);
}
function _M0MPC15array9ArrayView4iterGcE(self) {
  const i = new _M0TPB8MutLocalGiE(0);
  const len = self.end - self.start | 0;
  return _M0MPB4Iter3newGcE(() => {
    if (i.val < len) {
      const elem = self.buf[self.start + i.val | 0];
      i.val = i.val + 1 | 0;
      return elem;
    } else {
      return -1;
    }
  }, len);
}
function _M0MPC15array9ArrayView4iterGdE(self) {
  const i = new _M0TPB8MutLocalGiE(0);
  const len = self.end - self.start | 0;
  return _M0MPB4Iter3newGdE(() => {
    if (i.val < len) {
      const elem = self.buf[self.start + i.val | 0];
      i.val = i.val + 1 | 0;
      return new _M0DTPC16option6OptionGdE4Some(elem);
    } else {
      return _M0DTPC16option6OptionGdE4None__;
    }
  }, len);
}
function _M0MPC15array5Array4iterGcE(self) {
  return _M0MPC15array9ArrayView4iterGcE(new _M0TPB9ArrayViewGcE(self, 0, self.length));
}
function _M0MPC15array5Array4iterGsE(self) {
  return _M0MPC15array9ArrayView4iterGsE(new _M0TPB9ArrayViewGsE(self, 0, self.length));
}
function _M0MPC15array5Array4iterGdE(self) {
  return _M0MPC15array9ArrayView4iterGdE(new _M0TPB9ArrayViewGdE(self, 0, self.length));
}
function _M0MPC15array13ReadOnlyArray2atGmE(self, index) {
  return index >>> 0 < self.length ? self[index] : $oob();
}
function _M0MPC15array13ReadOnlyArray2atGdE(self, index) {
  return index >>> 0 < self.length ? self[index] : $oob();
}
function _M0MPC15array13ReadOnlyArray2atGiE(self, index) {
  return index >>> 0 < self.length ? self[index] : $oob();
}
function _M0MPC15array13ReadOnlyArray6lengthGiE(self) {
  return self.length;
}
function _M0MPC13int3Int3min(self, other) {
  return self < other ? self : other;
}
function _M0MPC15array9ArrayView4joinGsE(self, separator) {
  if ((self.end - self.start | 0) === 0) {
    return "";
  } else {
    const _hd = self.buf[self.start];
    const _x_buf = self.buf;
    const _x_start = 1 + self.start | 0;
    const _x_end = self.end;
    const hd = _M0IPC16string6StringPB12ToStringView16to__string__view(_hd);
    const _bind$2 = _x_end - _x_start | 0;
    let size_hint;
    let _tmp = 0;
    let _tmp$2 = hd.end - hd.start | 0;
    while (true) {
      const _ = _tmp;
      const size_hint$2 = _tmp$2;
      if (_ < _bind$2) {
        const s = _x_buf[_x_start + _ | 0];
        _tmp = _ + 1 | 0;
        const _bind$3 = _M0IPC16string6StringPB12ToStringView16to__string__view(s);
        _tmp$2 = (size_hint$2 + (_bind$3.end - _bind$3.start | 0) | 0) + (separator.end - separator.start | 0) | 0;
        continue;
      } else {
        size_hint = size_hint$2;
        break;
      }
    }
    const size_hint$2 = size_hint << 1;
    const buf = _M0MPB13StringBuilder21StringBuilder_2einner(size_hint$2);
    _M0IPB13StringBuilderPB6Logger11write__view(buf, hd);
    if ((separator.end - separator.start | 0) === 0) {
      const _bind$3 = _x_end - _x_start | 0;
      let _tmp$3 = 0;
      while (true) {
        const _ = _tmp$3;
        if (_ < _bind$3) {
          const s = _x_buf[_x_start + _ | 0];
          const s$2 = _M0IPC16string6StringPB12ToStringView16to__string__view(s);
          _M0IPB13StringBuilderPB6Logger11write__view(buf, s$2);
          _tmp$3 = _ + 1 | 0;
          continue;
        } else {
          break;
        }
      }
    } else {
      const _bind$3 = _x_end - _x_start | 0;
      let _tmp$3 = 0;
      while (true) {
        const _ = _tmp$3;
        if (_ < _bind$3) {
          const s = _x_buf[_x_start + _ | 0];
          const s$2 = _M0IPC16string6StringPB12ToStringView16to__string__view(s);
          _M0IPB13StringBuilderPB6Logger11write__view(buf, separator);
          _M0IPB13StringBuilderPB6Logger11write__view(buf, s$2);
          _tmp$3 = _ + 1 | 0;
          continue;
        } else {
          break;
        }
      }
    }
    return _M0MPB13StringBuilder10to__string(buf);
  }
}
function _M0MPC15array9ArrayView4joinGRPC16string10StringViewE(self, separator) {
  if ((self.end - self.start | 0) === 0) {
    return "";
  } else {
    const _hd = self.buf[self.start];
    const _x_buf = self.buf;
    const _x_start = 1 + self.start | 0;
    const _x_end = self.end;
    const hd = _M0IPC16string10StringViewPB12ToStringView16to__string__view(_hd);
    const _bind$2 = _x_end - _x_start | 0;
    let size_hint;
    let _tmp = 0;
    let _tmp$2 = hd.end - hd.start | 0;
    while (true) {
      const _ = _tmp;
      const size_hint$2 = _tmp$2;
      if (_ < _bind$2) {
        const s = _x_buf[_x_start + _ | 0];
        _tmp = _ + 1 | 0;
        const _bind$3 = _M0IPC16string10StringViewPB12ToStringView16to__string__view(s);
        _tmp$2 = (size_hint$2 + (_bind$3.end - _bind$3.start | 0) | 0) + (separator.end - separator.start | 0) | 0;
        continue;
      } else {
        size_hint = size_hint$2;
        break;
      }
    }
    const size_hint$2 = size_hint << 1;
    const buf = _M0MPB13StringBuilder21StringBuilder_2einner(size_hint$2);
    _M0IPB13StringBuilderPB6Logger11write__view(buf, hd);
    if ((separator.end - separator.start | 0) === 0) {
      const _bind$3 = _x_end - _x_start | 0;
      let _tmp$3 = 0;
      while (true) {
        const _ = _tmp$3;
        if (_ < _bind$3) {
          const s = _x_buf[_x_start + _ | 0];
          const s$2 = _M0IPC16string10StringViewPB12ToStringView16to__string__view(s);
          _M0IPB13StringBuilderPB6Logger11write__view(buf, s$2);
          _tmp$3 = _ + 1 | 0;
          continue;
        } else {
          break;
        }
      }
    } else {
      const _bind$3 = _x_end - _x_start | 0;
      let _tmp$3 = 0;
      while (true) {
        const _ = _tmp$3;
        if (_ < _bind$3) {
          const s = _x_buf[_x_start + _ | 0];
          const s$2 = _M0IPC16string10StringViewPB12ToStringView16to__string__view(s);
          _M0IPB13StringBuilderPB6Logger11write__view(buf, separator);
          _M0IPB13StringBuilderPB6Logger11write__view(buf, s$2);
          _tmp$3 = _ + 1 | 0;
          continue;
        } else {
          break;
        }
      }
    }
    return _M0MPB13StringBuilder10to__string(buf);
  }
}
function _M0IPC16option6OptionPB2Eq5equalGsE(self, other) {
  if (self === undefined) {
    return other === undefined;
  } else {
    const _Some = self;
    const _x = _Some;
    if (other === undefined) {
      return false;
    } else {
      const _Some$2 = other;
      const _y = _Some$2;
      return _x === _y;
    }
  }
}
function _M0IPC16option6OptionPB2Eq5equalGcE(self, other) {
  if (self === -1) {
    return other === -1;
  } else {
    const _Some = self;
    const _x = _Some;
    if (other === -1) {
      return false;
    } else {
      const _Some$2 = other;
      const _y = _Some$2;
      return _x === _y;
    }
  }
}
function _M0MPC16option6Option6unwrapGRPB5EntryGssEE(self) {
  if (self === undefined) {
    return $panic();
  } else {
    const _Some = self;
    return _Some;
  }
}
function _M0MPC16option6Option6unwrapGdE(self) {
  if (self.$tag === 0) {
    return $panic();
  } else {
    const _Some = self;
    return _Some._0;
  }
}
function _M0MPC16option6Option10unwrap__orGcE(self, default_) {
  if (self === -1) {
    return default_;
  } else {
    const _Some = self;
    const _t = _Some;
    return _t;
  }
}
function _M0MPC16option6Option10unwrap__orGRP217zhengxin_2dcoding4scss9SassValueE(self, default_) {
  if (self === undefined) {
    return default_;
  } else {
    const _Some = self;
    const _t = _Some;
    return _t;
  }
}
function _M0MPC16option6Option16unwrap__or__elseGiEHRP217zhengxin_2dcoding4scss10ParseError(self, default_) {
  if (self === undefined) {
    return default_();
  } else {
    const _Some = self;
    const _t = _Some;
    return new _M0DTPC16result6ResultGiRP217zhengxin_2dcoding4scss10ParseErrorE2Ok(_t);
  }
}
function _M0MPC16option6Option16unwrap__or__elseGdEHRP217zhengxin_2dcoding4scss10ParseError(self, default_) {
  if (self.$tag === 0) {
    return default_();
  } else {
    const _Some = self;
    const _t = _Some._0;
    return new _M0DTPC16result6ResultGdRP217zhengxin_2dcoding4scss10ParseErrorE2Ok(_t);
  }
}
function _M0MPC16option6Option3mapGRPC16string10StringViewsE(self, f) {
  if (self === undefined) {
    return undefined;
  } else {
    const _Some = self;
    const _t = _Some;
    return f(_t);
  }
}
function _M0MPC15array5Array31unsafe__make__and__blit_2einnerGsE(src, allocate_len, len, src_offset, dst_offset) {
  const dst = new Array(allocate_len);
  _M0MPB18UninitializedArray12unsafe__blitGsE(dst, dst_offset, src, src_offset, len);
  return dst;
}
function _M0MPC15array5Array31unsafe__make__and__blit_2einnerGcE(src, allocate_len, len, src_offset, dst_offset) {
  const dst = new Array(allocate_len);
  _M0MPB18UninitializedArray12unsafe__blitGcE(dst, dst_offset, src, src_offset, len);
  return dst;
}
function _M0MPC15array9ArrayView9to__ownedGsE(self) {
  const len = self.end - self.start | 0;
  return len === 0 ? [] : _M0MPC15array5Array31unsafe__make__and__blit_2einnerGsE(self.buf, len, len, self.start, 0);
}
function _M0MPC15array9ArrayView9to__ownedGcE(self) {
  const len = self.end - self.start | 0;
  return len === 0 ? [] : _M0MPC15array5Array31unsafe__make__and__blit_2einnerGcE(self.buf, len, len, self.start, 0);
}
function _M0FPB21calc__grow__threshold(capacity) {
  if (16 === 0) {
    $panic();
  }
  return (Math.imul(capacity, 13) | 0) / 16 | 0;
}
function _M0MPC13int3Int20next__power__of__two(self) {
  if (self >= 0) {
    if (self <= 1) {
      return 1;
    }
    if (self > 1073741824) {
      return 1073741824;
    }
    return (2147483647 >> (Math.clz32(self - 1 | 0) - 1 | 0)) + 1 | 0;
  } else {
    return $panic();
  }
}
function _M0FPB8new__mapGsRPB4JsonE(capacity) {
  const capacity$2 = _M0MPC13int3Int20next__power__of__two(capacity);
  const _bind$2 = capacity$2 - 1 | 0;
  const _bind$3 = _M0FPB21calc__grow__threshold(capacity$2);
  const _bind$4 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$5 = undefined;
  return new _M0TPB3MapGsRPB4JsonE(_bind$4, 0, capacity$2, _bind$2, _bind$3, _bind$5, -1);
}
function _M0FPB8new__mapGsRPB5ArrayGsEE(capacity) {
  const capacity$2 = _M0MPC13int3Int20next__power__of__two(capacity);
  const _bind$2 = capacity$2 - 1 | 0;
  const _bind$3 = _M0FPB21calc__grow__threshold(capacity$2);
  const _bind$4 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$5 = undefined;
  return new _M0TPB3MapGsRPB5ArrayGsEE(_bind$4, 0, capacity$2, _bind$2, _bind$3, _bind$5, -1);
}
function _M0FPB8new__mapGsbE(capacity) {
  const capacity$2 = _M0MPC13int3Int20next__power__of__two(capacity);
  const _bind$2 = capacity$2 - 1 | 0;
  const _bind$3 = _M0FPB21calc__grow__threshold(capacity$2);
  const _bind$4 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$5 = undefined;
  return new _M0TPB3MapGsbE(_bind$4, 0, capacity$2, _bind$2, _bind$3, _bind$5, -1);
}
function _M0FPB8new__mapGibE(capacity) {
  const capacity$2 = _M0MPC13int3Int20next__power__of__two(capacity);
  const _bind$2 = capacity$2 - 1 | 0;
  const _bind$3 = _M0FPB21calc__grow__threshold(capacity$2);
  const _bind$4 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$5 = undefined;
  return new _M0TPB3MapGibE(_bind$4, 0, capacity$2, _bind$2, _bind$3, _bind$5, -1);
}
function _M0FPB21capacity__for__length(length) {
  let capacity = _M0MPC13int3Int20next__power__of__two(length);
  if (length > _M0FPB21calc__grow__threshold(capacity)) {
    capacity = Math.imul(capacity, 2) | 0;
  }
  return capacity;
}
function _M0MPC13int3Int3max(self, other) {
  return self > other ? self : other;
}
function _M0MPB3Map20add__entry__to__tailGssE(self, idx, entry) {
  const _bind$2 = self.tail;
  if (_bind$2 === -1) {
    self.head = entry;
  } else {
    const _tmp = self.entries;
    _M0MPC16option6Option6unwrapGRPB5EntryGssEE(_bind$2 >>> 0 < _tmp.length ? _tmp[_bind$2] : $oob()).next = entry;
  }
  self.tail = idx;
  self.entries[idx] = entry;
  self.size = self.size + 1 | 0;
}
function _M0MPB3Map20add__entry__to__tailGsRPB5ArrayGsEE(self, idx, entry) {
  const _bind$2 = self.tail;
  if (_bind$2 === -1) {
    self.head = entry;
  } else {
    const _tmp = self.entries;
    _M0MPC16option6Option6unwrapGRPB5EntryGssEE(_bind$2 >>> 0 < _tmp.length ? _tmp[_bind$2] : $oob()).next = entry;
  }
  self.tail = idx;
  self.entries[idx] = entry;
  self.size = self.size + 1 | 0;
}
function _M0MPB3Map20add__entry__to__tailGsbE(self, idx, entry) {
  const _bind$2 = self.tail;
  if (_bind$2 === -1) {
    self.head = entry;
  } else {
    const _tmp = self.entries;
    _M0MPC16option6Option6unwrapGRPB5EntryGssEE(_bind$2 >>> 0 < _tmp.length ? _tmp[_bind$2] : $oob()).next = entry;
  }
  self.tail = idx;
  self.entries[idx] = entry;
  self.size = self.size + 1 | 0;
}
function _M0MPB3Map20add__entry__to__tailGibE(self, idx, entry) {
  const _bind$2 = self.tail;
  if (_bind$2 === -1) {
    self.head = entry;
  } else {
    const _tmp = self.entries;
    _M0MPC16option6Option6unwrapGRPB5EntryGssEE(_bind$2 >>> 0 < _tmp.length ? _tmp[_bind$2] : $oob()).next = entry;
  }
  self.tail = idx;
  self.entries[idx] = entry;
  self.size = self.size + 1 | 0;
}
function _M0MPB3Map10set__entryGssE(self, entry, new_idx) {
  const _bind$2 = entry.next;
  if (_bind$2 === undefined) {
    self.tail = new_idx;
  } else {
    const _Some = _bind$2;
    const _next = _Some;
    _next.prev = new_idx;
  }
  self.entries[new_idx] = entry;
}
function _M0MPB3Map10set__entryGsRPB5ArrayGsEE(self, entry, new_idx) {
  const _bind$2 = entry.next;
  if (_bind$2 === undefined) {
    self.tail = new_idx;
  } else {
    const _Some = _bind$2;
    const _next = _Some;
    _next.prev = new_idx;
  }
  self.entries[new_idx] = entry;
}
function _M0MPB3Map10set__entryGsbE(self, entry, new_idx) {
  const _bind$2 = entry.next;
  if (_bind$2 === undefined) {
    self.tail = new_idx;
  } else {
    const _Some = _bind$2;
    const _next = _Some;
    _next.prev = new_idx;
  }
  self.entries[new_idx] = entry;
}
function _M0MPB3Map10set__entryGibE(self, entry, new_idx) {
  const _bind$2 = entry.next;
  if (_bind$2 === undefined) {
    self.tail = new_idx;
  } else {
    const _Some = _bind$2;
    const _next = _Some;
    _next.prev = new_idx;
  }
  self.entries[new_idx] = entry;
}
function _M0MPB3Map10push__awayGssE(self, idx, entry) {
  let _tmp = entry.psl + 1 | 0;
  let _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
  let _tmp$3 = entry;
  while (true) {
    const psl = _tmp;
    const idx$2 = _tmp$2;
    const entry$2 = _tmp$3;
    const _bind$2 = self.entries[idx$2];
    if (_bind$2 === undefined) {
      entry$2.psl = psl;
      _M0MPB3Map10set__entryGssE(self, entry$2, idx$2);
      return;
    } else {
      const _Some = _bind$2;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        _M0MPB3Map10set__entryGssE(self, entry$2, idx$2);
        _tmp = _curr_entry.psl + 1 | 0;
        _tmp$2 = (idx$2 + 1 | 0) & self.capacity_mask;
        _tmp$3 = _curr_entry;
        continue;
      } else {
        _tmp = psl + 1 | 0;
        _tmp$2 = (idx$2 + 1 | 0) & self.capacity_mask;
        continue;
      }
    }
  }
}
function _M0MPB3Map10push__awayGsRPB5ArrayGsEE(self, idx, entry) {
  let _tmp = entry.psl + 1 | 0;
  let _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
  let _tmp$3 = entry;
  while (true) {
    const psl = _tmp;
    const idx$2 = _tmp$2;
    const entry$2 = _tmp$3;
    const _bind$2 = self.entries[idx$2];
    if (_bind$2 === undefined) {
      entry$2.psl = psl;
      _M0MPB3Map10set__entryGsRPB5ArrayGsEE(self, entry$2, idx$2);
      return;
    } else {
      const _Some = _bind$2;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        _M0MPB3Map10set__entryGsRPB5ArrayGsEE(self, entry$2, idx$2);
        _tmp = _curr_entry.psl + 1 | 0;
        _tmp$2 = (idx$2 + 1 | 0) & self.capacity_mask;
        _tmp$3 = _curr_entry;
        continue;
      } else {
        _tmp = psl + 1 | 0;
        _tmp$2 = (idx$2 + 1 | 0) & self.capacity_mask;
        continue;
      }
    }
  }
}
function _M0MPB3Map10push__awayGsbE(self, idx, entry) {
  let _tmp = entry.psl + 1 | 0;
  let _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
  let _tmp$3 = entry;
  while (true) {
    const psl = _tmp;
    const idx$2 = _tmp$2;
    const entry$2 = _tmp$3;
    const _bind$2 = self.entries[idx$2];
    if (_bind$2 === undefined) {
      entry$2.psl = psl;
      _M0MPB3Map10set__entryGsbE(self, entry$2, idx$2);
      return;
    } else {
      const _Some = _bind$2;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        _M0MPB3Map10set__entryGsbE(self, entry$2, idx$2);
        _tmp = _curr_entry.psl + 1 | 0;
        _tmp$2 = (idx$2 + 1 | 0) & self.capacity_mask;
        _tmp$3 = _curr_entry;
        continue;
      } else {
        _tmp = psl + 1 | 0;
        _tmp$2 = (idx$2 + 1 | 0) & self.capacity_mask;
        continue;
      }
    }
  }
}
function _M0MPB3Map10push__awayGibE(self, idx, entry) {
  let _tmp = entry.psl + 1 | 0;
  let _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
  let _tmp$3 = entry;
  while (true) {
    const psl = _tmp;
    const idx$2 = _tmp$2;
    const entry$2 = _tmp$3;
    const _bind$2 = self.entries[idx$2];
    if (_bind$2 === undefined) {
      entry$2.psl = psl;
      _M0MPB3Map10set__entryGibE(self, entry$2, idx$2);
      return;
    } else {
      const _Some = _bind$2;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        _M0MPB3Map10set__entryGibE(self, entry$2, idx$2);
        _tmp = _curr_entry.psl + 1 | 0;
        _tmp$2 = (idx$2 + 1 | 0) & self.capacity_mask;
        _tmp$3 = _curr_entry;
        continue;
      } else {
        _tmp = psl + 1 | 0;
        _tmp$2 = (idx$2 + 1 | 0) & self.capacity_mask;
        continue;
      }
    }
  }
}
function _M0MPB3Map20rehash__place__entryGssE(self, outer) {
  const hash = outer.hash;
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _bind$2 = self.entries[idx];
    if (_bind$2 === undefined) {
      outer.psl = psl;
      outer.prev = self.tail;
      _M0MPB3Map20add__entry__to__tailGssE(self, idx, outer);
      return undefined;
    } else {
      const _Some = _bind$2;
      const _curr = _Some;
      if (psl > _curr.psl) {
        _M0MPB3Map10push__awayGssE(self, idx, _curr);
        outer.psl = psl;
        outer.prev = self.tail;
        _M0MPB3Map20add__entry__to__tailGssE(self, idx, outer);
        return undefined;
      } else {
        _tmp = psl + 1 | 0;
        _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
        continue;
      }
    }
  }
}
function _M0MPB3Map20rehash__place__entryGsRPB5ArrayGsEE(self, outer) {
  const hash = outer.hash;
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _bind$2 = self.entries[idx];
    if (_bind$2 === undefined) {
      outer.psl = psl;
      outer.prev = self.tail;
      _M0MPB3Map20add__entry__to__tailGsRPB5ArrayGsEE(self, idx, outer);
      return undefined;
    } else {
      const _Some = _bind$2;
      const _curr = _Some;
      if (psl > _curr.psl) {
        _M0MPB3Map10push__awayGsRPB5ArrayGsEE(self, idx, _curr);
        outer.psl = psl;
        outer.prev = self.tail;
        _M0MPB3Map20add__entry__to__tailGsRPB5ArrayGsEE(self, idx, outer);
        return undefined;
      } else {
        _tmp = psl + 1 | 0;
        _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
        continue;
      }
    }
  }
}
function _M0MPB3Map20rehash__place__entryGsbE(self, outer) {
  const hash = outer.hash;
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _bind$2 = self.entries[idx];
    if (_bind$2 === undefined) {
      outer.psl = psl;
      outer.prev = self.tail;
      _M0MPB3Map20add__entry__to__tailGsbE(self, idx, outer);
      return undefined;
    } else {
      const _Some = _bind$2;
      const _curr = _Some;
      if (psl > _curr.psl) {
        _M0MPB3Map10push__awayGsbE(self, idx, _curr);
        outer.psl = psl;
        outer.prev = self.tail;
        _M0MPB3Map20add__entry__to__tailGsbE(self, idx, outer);
        return undefined;
      } else {
        _tmp = psl + 1 | 0;
        _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
        continue;
      }
    }
  }
}
function _M0MPB3Map20rehash__place__entryGibE(self, outer) {
  const hash = outer.hash;
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _bind$2 = self.entries[idx];
    if (_bind$2 === undefined) {
      outer.psl = psl;
      outer.prev = self.tail;
      _M0MPB3Map20add__entry__to__tailGibE(self, idx, outer);
      return undefined;
    } else {
      const _Some = _bind$2;
      const _curr = _Some;
      if (psl > _curr.psl) {
        _M0MPB3Map10push__awayGibE(self, idx, _curr);
        outer.psl = psl;
        outer.prev = self.tail;
        _M0MPB3Map20add__entry__to__tailGibE(self, idx, outer);
        return undefined;
      } else {
        _tmp = psl + 1 | 0;
        _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
        continue;
      }
    }
  }
}
function _M0MPB3Map4growGssE(self) {
  const old_head = self.head;
  const new_capacity = self.capacity << 1;
  self.entries = $make_array_len_and_init(new_capacity, undefined);
  self.capacity = new_capacity;
  self.capacity_mask = new_capacity - 1 | 0;
  self.grow_at = _M0FPB21calc__grow__threshold(self.capacity);
  self.size = 0;
  self.head = undefined;
  self.tail = -1;
  let _tmp = old_head;
  while (true) {
    const x = _tmp;
    if (x === undefined) {
      return;
    } else {
      const _Some = x;
      const _e = _Some;
      const next_in_chain = _e.next;
      _e.next = undefined;
      _M0MPB3Map20rehash__place__entryGssE(self, _e);
      _tmp = next_in_chain;
      continue;
    }
  }
}
function _M0MPB3Map4growGsRPB5ArrayGsEE(self) {
  const old_head = self.head;
  const new_capacity = self.capacity << 1;
  self.entries = $make_array_len_and_init(new_capacity, undefined);
  self.capacity = new_capacity;
  self.capacity_mask = new_capacity - 1 | 0;
  self.grow_at = _M0FPB21calc__grow__threshold(self.capacity);
  self.size = 0;
  self.head = undefined;
  self.tail = -1;
  let _tmp = old_head;
  while (true) {
    const x = _tmp;
    if (x === undefined) {
      return;
    } else {
      const _Some = x;
      const _e = _Some;
      const next_in_chain = _e.next;
      _e.next = undefined;
      _M0MPB3Map20rehash__place__entryGsRPB5ArrayGsEE(self, _e);
      _tmp = next_in_chain;
      continue;
    }
  }
}
function _M0MPB3Map4growGsbE(self) {
  const old_head = self.head;
  const new_capacity = self.capacity << 1;
  self.entries = $make_array_len_and_init(new_capacity, undefined);
  self.capacity = new_capacity;
  self.capacity_mask = new_capacity - 1 | 0;
  self.grow_at = _M0FPB21calc__grow__threshold(self.capacity);
  self.size = 0;
  self.head = undefined;
  self.tail = -1;
  let _tmp = old_head;
  while (true) {
    const x = _tmp;
    if (x === undefined) {
      return;
    } else {
      const _Some = x;
      const _e = _Some;
      const next_in_chain = _e.next;
      _e.next = undefined;
      _M0MPB3Map20rehash__place__entryGsbE(self, _e);
      _tmp = next_in_chain;
      continue;
    }
  }
}
function _M0MPB3Map4growGibE(self) {
  const old_head = self.head;
  const new_capacity = self.capacity << 1;
  self.entries = $make_array_len_and_init(new_capacity, undefined);
  self.capacity = new_capacity;
  self.capacity_mask = new_capacity - 1 | 0;
  self.grow_at = _M0FPB21calc__grow__threshold(self.capacity);
  self.size = 0;
  self.head = undefined;
  self.tail = -1;
  let _tmp = old_head;
  while (true) {
    const x = _tmp;
    if (x === undefined) {
      return;
    } else {
      const _Some = x;
      const _e = _Some;
      const next_in_chain = _e.next;
      _e.next = undefined;
      _M0MPB3Map20rehash__place__entryGibE(self, _e);
      _tmp = next_in_chain;
      continue;
    }
  }
}
function _M0MPB3Map15set__with__hashGssE(self, key, value, hash) {
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _bind$2 = self.entries[idx];
    if (_bind$2 === undefined) {
      if (self.size >= self.grow_at) {
        _M0MPB3Map4growGssE(self);
        _tmp = 0;
        _tmp$2 = hash & self.capacity_mask;
        continue;
      }
      const _bind$3 = self.tail;
      const _bind$4 = undefined;
      const entry = new _M0TPB5EntryGssE(_bind$3, _bind$4, psl, hash, key, value);
      _M0MPB3Map20add__entry__to__tailGssE(self, idx, entry);
      return undefined;
    } else {
      const _Some = _bind$2;
      const _curr_entry = _Some;
      if (_curr_entry.hash === hash && _curr_entry.key === key) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        if (self.size >= self.grow_at) {
          _M0MPB3Map4growGssE(self);
          _tmp = 0;
          _tmp$2 = hash & self.capacity_mask;
          continue;
        }
        _M0MPB3Map10push__awayGssE(self, idx, _curr_entry);
        const _bind$3 = self.tail;
        const _bind$4 = undefined;
        const entry = new _M0TPB5EntryGssE(_bind$3, _bind$4, psl, hash, key, value);
        _M0MPB3Map20add__entry__to__tailGssE(self, idx, entry);
        return undefined;
      }
      _tmp = psl + 1 | 0;
      _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map15set__with__hashGsRPB4JsonE(self, key, value, hash) {
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _bind$2 = self.entries[idx];
    if (_bind$2 === undefined) {
      if (self.size >= self.grow_at) {
        _M0MPB3Map4growGssE(self);
        _tmp = 0;
        _tmp$2 = hash & self.capacity_mask;
        continue;
      }
      const _bind$3 = self.tail;
      const _bind$4 = undefined;
      const entry = new _M0TPB5EntryGsRPB4JsonE(_bind$3, _bind$4, psl, hash, key, value);
      _M0MPB3Map20add__entry__to__tailGssE(self, idx, entry);
      return undefined;
    } else {
      const _Some = _bind$2;
      const _curr_entry = _Some;
      if (_curr_entry.hash === hash && _curr_entry.key === key) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        if (self.size >= self.grow_at) {
          _M0MPB3Map4growGssE(self);
          _tmp = 0;
          _tmp$2 = hash & self.capacity_mask;
          continue;
        }
        _M0MPB3Map10push__awayGssE(self, idx, _curr_entry);
        const _bind$3 = self.tail;
        const _bind$4 = undefined;
        const entry = new _M0TPB5EntryGsRPB4JsonE(_bind$3, _bind$4, psl, hash, key, value);
        _M0MPB3Map20add__entry__to__tailGssE(self, idx, entry);
        return undefined;
      }
      _tmp = psl + 1 | 0;
      _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map15set__with__hashGsRPB5ArrayGsEE(self, key, value, hash) {
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _bind$2 = self.entries[idx];
    if (_bind$2 === undefined) {
      if (self.size >= self.grow_at) {
        _M0MPB3Map4growGsRPB5ArrayGsEE(self);
        _tmp = 0;
        _tmp$2 = hash & self.capacity_mask;
        continue;
      }
      const _bind$3 = self.tail;
      const _bind$4 = undefined;
      const entry = new _M0TPB5EntryGsRPB5ArrayGsEE(_bind$3, _bind$4, psl, hash, key, value);
      _M0MPB3Map20add__entry__to__tailGsRPB5ArrayGsEE(self, idx, entry);
      return undefined;
    } else {
      const _Some = _bind$2;
      const _curr_entry = _Some;
      if (_curr_entry.hash === hash && _curr_entry.key === key) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        if (self.size >= self.grow_at) {
          _M0MPB3Map4growGsRPB5ArrayGsEE(self);
          _tmp = 0;
          _tmp$2 = hash & self.capacity_mask;
          continue;
        }
        _M0MPB3Map10push__awayGsRPB5ArrayGsEE(self, idx, _curr_entry);
        const _bind$3 = self.tail;
        const _bind$4 = undefined;
        const entry = new _M0TPB5EntryGsRPB5ArrayGsEE(_bind$3, _bind$4, psl, hash, key, value);
        _M0MPB3Map20add__entry__to__tailGsRPB5ArrayGsEE(self, idx, entry);
        return undefined;
      }
      _tmp = psl + 1 | 0;
      _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map15set__with__hashGsRP217zhengxin_2dcoding4scss9SassValueE(self, key, value, hash) {
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _bind$2 = self.entries[idx];
    if (_bind$2 === undefined) {
      if (self.size >= self.grow_at) {
        _M0MPB3Map4growGssE(self);
        _tmp = 0;
        _tmp$2 = hash & self.capacity_mask;
        continue;
      }
      const _bind$3 = self.tail;
      const _bind$4 = undefined;
      const entry = new _M0TPB5EntryGsRP217zhengxin_2dcoding4scss9SassValueE(_bind$3, _bind$4, psl, hash, key, value);
      _M0MPB3Map20add__entry__to__tailGssE(self, idx, entry);
      return undefined;
    } else {
      const _Some = _bind$2;
      const _curr_entry = _Some;
      if (_curr_entry.hash === hash && _curr_entry.key === key) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        if (self.size >= self.grow_at) {
          _M0MPB3Map4growGssE(self);
          _tmp = 0;
          _tmp$2 = hash & self.capacity_mask;
          continue;
        }
        _M0MPB3Map10push__awayGssE(self, idx, _curr_entry);
        const _bind$3 = self.tail;
        const _bind$4 = undefined;
        const entry = new _M0TPB5EntryGsRP217zhengxin_2dcoding4scss9SassValueE(_bind$3, _bind$4, psl, hash, key, value);
        _M0MPB3Map20add__entry__to__tailGssE(self, idx, entry);
        return undefined;
      }
      _tmp = psl + 1 | 0;
      _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map15set__with__hashGsbE(self, key, value, hash) {
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _bind$2 = self.entries[idx];
    if (_bind$2 === undefined) {
      if (self.size >= self.grow_at) {
        _M0MPB3Map4growGsbE(self);
        _tmp = 0;
        _tmp$2 = hash & self.capacity_mask;
        continue;
      }
      const _bind$3 = self.tail;
      const _bind$4 = undefined;
      const entry = new _M0TPB5EntryGsbE(_bind$3, _bind$4, psl, hash, key, value);
      _M0MPB3Map20add__entry__to__tailGsbE(self, idx, entry);
      return undefined;
    } else {
      const _Some = _bind$2;
      const _curr_entry = _Some;
      if (_curr_entry.hash === hash && _curr_entry.key === key) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        if (self.size >= self.grow_at) {
          _M0MPB3Map4growGsbE(self);
          _tmp = 0;
          _tmp$2 = hash & self.capacity_mask;
          continue;
        }
        _M0MPB3Map10push__awayGsbE(self, idx, _curr_entry);
        const _bind$3 = self.tail;
        const _bind$4 = undefined;
        const entry = new _M0TPB5EntryGsbE(_bind$3, _bind$4, psl, hash, key, value);
        _M0MPB3Map20add__entry__to__tailGsbE(self, idx, entry);
        return undefined;
      }
      _tmp = psl + 1 | 0;
      _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map15set__with__hashGsRP217zhengxin_2dcoding4scss5ScopeE(self, key, value, hash) {
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _bind$2 = self.entries[idx];
    if (_bind$2 === undefined) {
      if (self.size >= self.grow_at) {
        _M0MPB3Map4growGssE(self);
        _tmp = 0;
        _tmp$2 = hash & self.capacity_mask;
        continue;
      }
      const _bind$3 = self.tail;
      const _bind$4 = undefined;
      const entry = new _M0TPB5EntryGsRP217zhengxin_2dcoding4scss5ScopeE(_bind$3, _bind$4, psl, hash, key, value);
      _M0MPB3Map20add__entry__to__tailGssE(self, idx, entry);
      return undefined;
    } else {
      const _Some = _bind$2;
      const _curr_entry = _Some;
      if (_curr_entry.hash === hash && _curr_entry.key === key) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        if (self.size >= self.grow_at) {
          _M0MPB3Map4growGssE(self);
          _tmp = 0;
          _tmp$2 = hash & self.capacity_mask;
          continue;
        }
        _M0MPB3Map10push__awayGssE(self, idx, _curr_entry);
        const _bind$3 = self.tail;
        const _bind$4 = undefined;
        const entry = new _M0TPB5EntryGsRP217zhengxin_2dcoding4scss5ScopeE(_bind$3, _bind$4, psl, hash, key, value);
        _M0MPB3Map20add__entry__to__tailGssE(self, idx, entry);
        return undefined;
      }
      _tmp = psl + 1 | 0;
      _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map15set__with__hashGsRP217zhengxin_2dcoding4scss5MixinE(self, key, value, hash) {
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _bind$2 = self.entries[idx];
    if (_bind$2 === undefined) {
      if (self.size >= self.grow_at) {
        _M0MPB3Map4growGssE(self);
        _tmp = 0;
        _tmp$2 = hash & self.capacity_mask;
        continue;
      }
      const _bind$3 = self.tail;
      const _bind$4 = undefined;
      const entry = new _M0TPB5EntryGsRP217zhengxin_2dcoding4scss5MixinE(_bind$3, _bind$4, psl, hash, key, value);
      _M0MPB3Map20add__entry__to__tailGssE(self, idx, entry);
      return undefined;
    } else {
      const _Some = _bind$2;
      const _curr_entry = _Some;
      if (_curr_entry.hash === hash && _curr_entry.key === key) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        if (self.size >= self.grow_at) {
          _M0MPB3Map4growGssE(self);
          _tmp = 0;
          _tmp$2 = hash & self.capacity_mask;
          continue;
        }
        _M0MPB3Map10push__awayGssE(self, idx, _curr_entry);
        const _bind$3 = self.tail;
        const _bind$4 = undefined;
        const entry = new _M0TPB5EntryGsRP217zhengxin_2dcoding4scss5MixinE(_bind$3, _bind$4, psl, hash, key, value);
        _M0MPB3Map20add__entry__to__tailGssE(self, idx, entry);
        return undefined;
      }
      _tmp = psl + 1 | 0;
      _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map15set__with__hashGsURP217zhengxin_2dcoding4scss5ScopesEE(self, key, value, hash) {
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _bind$2 = self.entries[idx];
    if (_bind$2 === undefined) {
      if (self.size >= self.grow_at) {
        _M0MPB3Map4growGssE(self);
        _tmp = 0;
        _tmp$2 = hash & self.capacity_mask;
        continue;
      }
      const _bind$3 = self.tail;
      const _bind$4 = undefined;
      const entry = new _M0TPB5EntryGsURP217zhengxin_2dcoding4scss5ScopesEE(_bind$3, _bind$4, psl, hash, key, value);
      _M0MPB3Map20add__entry__to__tailGssE(self, idx, entry);
      return undefined;
    } else {
      const _Some = _bind$2;
      const _curr_entry = _Some;
      if (_curr_entry.hash === hash && _curr_entry.key === key) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        if (self.size >= self.grow_at) {
          _M0MPB3Map4growGssE(self);
          _tmp = 0;
          _tmp$2 = hash & self.capacity_mask;
          continue;
        }
        _M0MPB3Map10push__awayGssE(self, idx, _curr_entry);
        const _bind$3 = self.tail;
        const _bind$4 = undefined;
        const entry = new _M0TPB5EntryGsURP217zhengxin_2dcoding4scss5ScopesEE(_bind$3, _bind$4, psl, hash, key, value);
        _M0MPB3Map20add__entry__to__tailGssE(self, idx, entry);
        return undefined;
      }
      _tmp = psl + 1 | 0;
      _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map15set__with__hashGibE(self, key, value, hash) {
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _bind$2 = self.entries[idx];
    if (_bind$2 === undefined) {
      if (self.size >= self.grow_at) {
        _M0MPB3Map4growGibE(self);
        _tmp = 0;
        _tmp$2 = hash & self.capacity_mask;
        continue;
      }
      const _bind$3 = self.tail;
      const _bind$4 = undefined;
      const entry = new _M0TPB5EntryGibE(_bind$3, _bind$4, psl, hash, key, value);
      _M0MPB3Map20add__entry__to__tailGibE(self, idx, entry);
      return undefined;
    } else {
      const _Some = _bind$2;
      const _curr_entry = _Some;
      if (_curr_entry.hash === hash && _curr_entry.key === key) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        if (self.size >= self.grow_at) {
          _M0MPB3Map4growGibE(self);
          _tmp = 0;
          _tmp$2 = hash & self.capacity_mask;
          continue;
        }
        _M0MPB3Map10push__awayGibE(self, idx, _curr_entry);
        const _bind$3 = self.tail;
        const _bind$4 = undefined;
        const entry = new _M0TPB5EntryGibE(_bind$3, _bind$4, psl, hash, key, value);
        _M0MPB3Map20add__entry__to__tailGibE(self, idx, entry);
        return undefined;
      }
      _tmp = psl + 1 | 0;
      _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map15set__with__hashGsUiiiiEE(self, key, value, hash) {
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _bind$2 = self.entries[idx];
    if (_bind$2 === undefined) {
      if (self.size >= self.grow_at) {
        _M0MPB3Map4growGssE(self);
        _tmp = 0;
        _tmp$2 = hash & self.capacity_mask;
        continue;
      }
      const _bind$3 = self.tail;
      const _bind$4 = undefined;
      const entry = new _M0TPB5EntryGsUiiiiEE(_bind$3, _bind$4, psl, hash, key, value);
      _M0MPB3Map20add__entry__to__tailGssE(self, idx, entry);
      return undefined;
    } else {
      const _Some = _bind$2;
      const _curr_entry = _Some;
      if (_curr_entry.hash === hash && _curr_entry.key === key) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        if (self.size >= self.grow_at) {
          _M0MPB3Map4growGssE(self);
          _tmp = 0;
          _tmp$2 = hash & self.capacity_mask;
          continue;
        }
        _M0MPB3Map10push__awayGssE(self, idx, _curr_entry);
        const _bind$3 = self.tail;
        const _bind$4 = undefined;
        const entry = new _M0TPB5EntryGsUiiiiEE(_bind$3, _bind$4, psl, hash, key, value);
        _M0MPB3Map20add__entry__to__tailGssE(self, idx, entry);
        return undefined;
      }
      _tmp = psl + 1 | 0;
      _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map15set__with__hashGsRPC15debug4ReprE(self, key, value, hash) {
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _bind$2 = self.entries[idx];
    if (_bind$2 === undefined) {
      if (self.size >= self.grow_at) {
        _M0MPB3Map4growGssE(self);
        _tmp = 0;
        _tmp$2 = hash & self.capacity_mask;
        continue;
      }
      const _bind$3 = self.tail;
      const _bind$4 = undefined;
      const entry = new _M0TPB5EntryGsRPC15debug4ReprE(_bind$3, _bind$4, psl, hash, key, value);
      _M0MPB3Map20add__entry__to__tailGssE(self, idx, entry);
      return undefined;
    } else {
      const _Some = _bind$2;
      const _curr_entry = _Some;
      if (_curr_entry.hash === hash && _curr_entry.key === key) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        if (self.size >= self.grow_at) {
          _M0MPB3Map4growGssE(self);
          _tmp = 0;
          _tmp$2 = hash & self.capacity_mask;
          continue;
        }
        _M0MPB3Map10push__awayGssE(self, idx, _curr_entry);
        const _bind$3 = self.tail;
        const _bind$4 = undefined;
        const entry = new _M0TPB5EntryGsRPC15debug4ReprE(_bind$3, _bind$4, psl, hash, key, value);
        _M0MPB3Map20add__entry__to__tailGssE(self, idx, entry);
        return undefined;
      }
      _tmp = psl + 1 | 0;
      _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map3setGssE(self, key, value) {
  _M0MPB3Map15set__with__hashGssE(self, key, value, _M0IPC16string6StringPB4Hash4hash(key));
}
function _M0MPB3Map3setGsRPB4JsonE(self, key, value) {
  _M0MPB3Map15set__with__hashGsRPB4JsonE(self, key, value, _M0IPC16string6StringPB4Hash4hash(key));
}
function _M0MPB3Map3setGsRP217zhengxin_2dcoding4scss9SassValueE(self, key, value) {
  _M0MPB3Map15set__with__hashGsRP217zhengxin_2dcoding4scss9SassValueE(self, key, value, _M0IPC16string6StringPB4Hash4hash(key));
}
function _M0MPB3Map3setGsbE(self, key, value) {
  _M0MPB3Map15set__with__hashGsbE(self, key, value, _M0IPC16string6StringPB4Hash4hash(key));
}
function _M0MPB3Map3setGsRP217zhengxin_2dcoding4scss5ScopeE(self, key, value) {
  _M0MPB3Map15set__with__hashGsRP217zhengxin_2dcoding4scss5ScopeE(self, key, value, _M0IPC16string6StringPB4Hash4hash(key));
}
function _M0MPB3Map3setGsRPB5ArrayGsEE(self, key, value) {
  _M0MPB3Map15set__with__hashGsRPB5ArrayGsEE(self, key, value, _M0IPC16string6StringPB4Hash4hash(key));
}
function _M0MPB3Map3setGsRP217zhengxin_2dcoding4scss5MixinE(self, key, value) {
  _M0MPB3Map15set__with__hashGsRP217zhengxin_2dcoding4scss5MixinE(self, key, value, _M0IPC16string6StringPB4Hash4hash(key));
}
function _M0MPB3Map3setGsURP217zhengxin_2dcoding4scss5ScopesEE(self, key, value) {
  _M0MPB3Map15set__with__hashGsURP217zhengxin_2dcoding4scss5ScopesEE(self, key, value, _M0IPC16string6StringPB4Hash4hash(key));
}
function _M0MPB3Map3setGibE(self, key, value) {
  _M0MPB3Map15set__with__hashGibE(self, key, value, _M0IPC13int3IntPB4Hash4hash(key));
}
function _M0MPB3Map3setGsUiiiiEE(self, key, value) {
  _M0MPB3Map15set__with__hashGsUiiiiEE(self, key, value, _M0IPC16string6StringPB4Hash4hash(key));
}
function _M0MPB3Map3setGsRPC15debug4ReprE(self, key, value) {
  _M0MPB3Map15set__with__hashGsRPC15debug4ReprE(self, key, value, _M0IPC16string6StringPB4Hash4hash(key));
}
function _M0MPB3Map3MapGsRPB4JsonE(arr, capacity) {
  const length = arr.end - arr.start | 0;
  let capacity$2;
  if (capacity === undefined) {
    capacity$2 = length === 0 ? 8 : _M0FPB21capacity__for__length(length);
  } else {
    const _Some = capacity;
    const _capacity = _Some;
    capacity$2 = _M0MPC13int3Int3max(_capacity, _M0FPB21capacity__for__length(length));
  }
  const m = _M0FPB8new__mapGsRPB4JsonE(capacity$2);
  const _bind$2 = arr.end - arr.start | 0;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind$2) {
      const e = arr.buf[arr.start + _ | 0];
      _M0MPB3Map3setGsRPB4JsonE(m, e._0, e._1);
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return m;
}
function _M0MPB3Map3MapGssE(arr, capacity) {
  const length = arr.end - arr.start | 0;
  let capacity$2;
  if (capacity === undefined) {
    capacity$2 = length === 0 ? 8 : _M0FPB21capacity__for__length(length);
  } else {
    const _Some = capacity;
    const _capacity = _Some;
    capacity$2 = _M0MPC13int3Int3max(_capacity, _M0FPB21capacity__for__length(length));
  }
  const m = _M0FPB8new__mapGsRPB4JsonE(capacity$2);
  const _bind$2 = arr.end - arr.start | 0;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind$2) {
      const e = arr.buf[arr.start + _ | 0];
      _M0MPB3Map3setGssE(m, e._0, e._1);
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return m;
}
function _M0MPB3Map3MapGsRP217zhengxin_2dcoding4scss9SassValueE(arr, capacity) {
  const length = arr.end - arr.start | 0;
  let capacity$2;
  if (capacity === undefined) {
    capacity$2 = length === 0 ? 8 : _M0FPB21capacity__for__length(length);
  } else {
    const _Some = capacity;
    const _capacity = _Some;
    capacity$2 = _M0MPC13int3Int3max(_capacity, _M0FPB21capacity__for__length(length));
  }
  const m = _M0FPB8new__mapGsRPB4JsonE(capacity$2);
  const _bind$2 = arr.end - arr.start | 0;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind$2) {
      const e = arr.buf[arr.start + _ | 0];
      _M0MPB3Map3setGsRP217zhengxin_2dcoding4scss9SassValueE(m, e._0, e._1);
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return m;
}
function _M0MPB3Map3MapGsRP217zhengxin_2dcoding4scss5ScopeE(arr, capacity) {
  const length = arr.end - arr.start | 0;
  let capacity$2;
  if (capacity === undefined) {
    capacity$2 = length === 0 ? 8 : _M0FPB21capacity__for__length(length);
  } else {
    const _Some = capacity;
    const _capacity = _Some;
    capacity$2 = _M0MPC13int3Int3max(_capacity, _M0FPB21capacity__for__length(length));
  }
  const m = _M0FPB8new__mapGsRPB4JsonE(capacity$2);
  const _bind$2 = arr.end - arr.start | 0;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind$2) {
      const e = arr.buf[arr.start + _ | 0];
      _M0MPB3Map3setGsRP217zhengxin_2dcoding4scss5ScopeE(m, e._0, e._1);
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return m;
}
function _M0MPB3Map3MapGsRPB5ArrayGsEE(arr, capacity) {
  const length = arr.end - arr.start | 0;
  let capacity$2;
  if (capacity === undefined) {
    capacity$2 = length === 0 ? 8 : _M0FPB21capacity__for__length(length);
  } else {
    const _Some = capacity;
    const _capacity = _Some;
    capacity$2 = _M0MPC13int3Int3max(_capacity, _M0FPB21capacity__for__length(length));
  }
  const m = _M0FPB8new__mapGsRPB5ArrayGsEE(capacity$2);
  const _bind$2 = arr.end - arr.start | 0;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind$2) {
      const e = arr.buf[arr.start + _ | 0];
      _M0MPB3Map3setGsRPB5ArrayGsEE(m, e._0, e._1);
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return m;
}
function _M0MPB3Map3MapGsRP217zhengxin_2dcoding4scss5MixinE(arr, capacity) {
  const length = arr.end - arr.start | 0;
  let capacity$2;
  if (capacity === undefined) {
    capacity$2 = length === 0 ? 8 : _M0FPB21capacity__for__length(length);
  } else {
    const _Some = capacity;
    const _capacity = _Some;
    capacity$2 = _M0MPC13int3Int3max(_capacity, _M0FPB21capacity__for__length(length));
  }
  const m = _M0FPB8new__mapGsRPB4JsonE(capacity$2);
  const _bind$2 = arr.end - arr.start | 0;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind$2) {
      const e = arr.buf[arr.start + _ | 0];
      _M0MPB3Map3setGsRP217zhengxin_2dcoding4scss5MixinE(m, e._0, e._1);
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return m;
}
function _M0MPB3Map3MapGsURP217zhengxin_2dcoding4scss5ScopesEE(arr, capacity) {
  const length = arr.end - arr.start | 0;
  let capacity$2;
  if (capacity === undefined) {
    capacity$2 = length === 0 ? 8 : _M0FPB21capacity__for__length(length);
  } else {
    const _Some = capacity;
    const _capacity = _Some;
    capacity$2 = _M0MPC13int3Int3max(_capacity, _M0FPB21capacity__for__length(length));
  }
  const m = _M0FPB8new__mapGsRPB4JsonE(capacity$2);
  const _bind$2 = arr.end - arr.start | 0;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind$2) {
      const e = arr.buf[arr.start + _ | 0];
      _M0MPB3Map3setGsURP217zhengxin_2dcoding4scss5ScopesEE(m, e._0, e._1);
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return m;
}
function _M0MPB3Map3MapGsbE(arr, capacity) {
  const length = arr.end - arr.start | 0;
  let capacity$2;
  if (capacity === undefined) {
    capacity$2 = length === 0 ? 8 : _M0FPB21capacity__for__length(length);
  } else {
    const _Some = capacity;
    const _capacity = _Some;
    capacity$2 = _M0MPC13int3Int3max(_capacity, _M0FPB21capacity__for__length(length));
  }
  const m = _M0FPB8new__mapGsbE(capacity$2);
  const _bind$2 = arr.end - arr.start | 0;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind$2) {
      const e = arr.buf[arr.start + _ | 0];
      _M0MPB3Map3setGsbE(m, e._0, e._1);
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return m;
}
function _M0MPB3Map3MapGsUiiiiEE(arr, capacity) {
  const length = arr.end - arr.start | 0;
  let capacity$2;
  if (capacity === undefined) {
    capacity$2 = length === 0 ? 8 : _M0FPB21capacity__for__length(length);
  } else {
    const _Some = capacity;
    const _capacity = _Some;
    capacity$2 = _M0MPC13int3Int3max(_capacity, _M0FPB21capacity__for__length(length));
  }
  const m = _M0FPB8new__mapGsRPB4JsonE(capacity$2);
  const _bind$2 = arr.end - arr.start | 0;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind$2) {
      const e = arr.buf[arr.start + _ | 0];
      _M0MPB3Map3setGsUiiiiEE(m, e._0, e._1);
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return m;
}
function _M0MPB3Map3MapGibE(arr, capacity) {
  const length = arr.end - arr.start | 0;
  let capacity$2;
  if (capacity === undefined) {
    capacity$2 = length === 0 ? 8 : _M0FPB21capacity__for__length(length);
  } else {
    const _Some = capacity;
    const _capacity = _Some;
    capacity$2 = _M0MPC13int3Int3max(_capacity, _M0FPB21capacity__for__length(length));
  }
  const m = _M0FPB8new__mapGibE(capacity$2);
  const _bind$2 = arr.end - arr.start | 0;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind$2) {
      const e = arr.buf[arr.start + _ | 0];
      _M0MPB3Map3setGibE(m, e._0, e._1);
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return m;
}
function _M0MPB3Map3MapGsRPC15debug4ReprE(arr, capacity) {
  const length = arr.end - arr.start | 0;
  let capacity$2;
  if (capacity === undefined) {
    capacity$2 = length === 0 ? 8 : _M0FPB21capacity__for__length(length);
  } else {
    const _Some = capacity;
    const _capacity = _Some;
    capacity$2 = _M0MPC13int3Int3max(_capacity, _M0FPB21capacity__for__length(length));
  }
  const m = _M0FPB8new__mapGsRPB4JsonE(capacity$2);
  const _bind$2 = arr.end - arr.start | 0;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind$2) {
      const e = arr.buf[arr.start + _ | 0];
      _M0MPB3Map3setGsRPC15debug4ReprE(m, e._0, e._1);
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return m;
}
function _M0MPB3Map3getGsRPB4JsonE(self, key) {
  const hash = _M0IPC16string6StringPB4Hash4hash(key);
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _bind$2 = self.entries[idx];
    if (_bind$2 === undefined) {
      return undefined;
    } else {
      const _Some = _bind$2;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        return _entry.value;
      }
      if (i > _entry.psl) {
        return undefined;
      }
      _tmp = i + 1 | 0;
      _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map3getGsRP217zhengxin_2dcoding4scss5ScopeE(self, key) {
  const hash = _M0IPC16string6StringPB4Hash4hash(key);
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _bind$2 = self.entries[idx];
    if (_bind$2 === undefined) {
      return undefined;
    } else {
      const _Some = _bind$2;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        return _entry.value;
      }
      if (i > _entry.psl) {
        return undefined;
      }
      _tmp = i + 1 | 0;
      _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map3getGssE(self, key) {
  const hash = _M0IPC16string6StringPB4Hash4hash(key);
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _bind$2 = self.entries[idx];
    if (_bind$2 === undefined) {
      return undefined;
    } else {
      const _Some = _bind$2;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        return _entry.value;
      }
      if (i > _entry.psl) {
        return undefined;
      }
      _tmp = i + 1 | 0;
      _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map3getGsRP217zhengxin_2dcoding4scss9SassValueE(self, key) {
  const hash = _M0IPC16string6StringPB4Hash4hash(key);
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _bind$2 = self.entries[idx];
    if (_bind$2 === undefined) {
      return undefined;
    } else {
      const _Some = _bind$2;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        return _entry.value;
      }
      if (i > _entry.psl) {
        return undefined;
      }
      _tmp = i + 1 | 0;
      _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map3getGsRPB5ArrayGsEE(self, key) {
  const hash = _M0IPC16string6StringPB4Hash4hash(key);
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _bind$2 = self.entries[idx];
    if (_bind$2 === undefined) {
      return _M0DTPC16option6OptionGRPB5ArrayGsEE4None__;
    } else {
      const _Some = _bind$2;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        return new _M0DTPC16option6OptionGRPB5ArrayGsEE4Some(_entry.value);
      }
      if (i > _entry.psl) {
        return _M0DTPC16option6OptionGRPB5ArrayGsEE4None__;
      }
      _tmp = i + 1 | 0;
      _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map3getGsURP217zhengxin_2dcoding4scss5ScopesEE(self, key) {
  const hash = _M0IPC16string6StringPB4Hash4hash(key);
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _bind$2 = self.entries[idx];
    if (_bind$2 === undefined) {
      return undefined;
    } else {
      const _Some = _bind$2;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        return _entry.value;
      }
      if (i > _entry.psl) {
        return undefined;
      }
      _tmp = i + 1 | 0;
      _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map3getGsRP217zhengxin_2dcoding4scss5MixinE(self, key) {
  const hash = _M0IPC16string6StringPB4Hash4hash(key);
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _bind$2 = self.entries[idx];
    if (_bind$2 === undefined) {
      return undefined;
    } else {
      const _Some = _bind$2;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        return _entry.value;
      }
      if (i > _entry.psl) {
        return undefined;
      }
      _tmp = i + 1 | 0;
      _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map3getGsUiiiiEE(self, key) {
  const hash = _M0IPC16string6StringPB4Hash4hash(key);
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _bind$2 = self.entries[idx];
    if (_bind$2 === undefined) {
      return undefined;
    } else {
      const _Some = _bind$2;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        return _entry.value;
      }
      if (i > _entry.psl) {
        return undefined;
      }
      _tmp = i + 1 | 0;
      _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map13get__or__initGsRPB5ArrayGsEE(self, key, default_) {
  const hash = _M0IPC16string6StringPB4Hash4hash(key);
  let idx;
  let psl;
  let new_value;
  let push_away;
  _L: {
    let _tmp = 0;
    let _tmp$2 = hash & self.capacity_mask;
    while (true) {
      const psl$2 = _tmp;
      const idx$2 = _tmp$2;
      const _bind$2 = self.entries[idx$2];
      if (_bind$2 === undefined) {
        const new_value$2 = default_();
        idx = idx$2;
        psl = psl$2;
        new_value = new_value$2;
        push_away = undefined;
        break _L;
      } else {
        const _Some = _bind$2;
        const _entry = _Some;
        if (_entry.hash === hash && _entry.key === key) {
          return _entry.value;
        }
        if (psl$2 > _entry.psl) {
          const new_value$2 = default_();
          idx = idx$2;
          psl = psl$2;
          new_value = new_value$2;
          push_away = _entry;
          break _L;
        }
        _tmp = psl$2 + 1 | 0;
        _tmp$2 = (idx$2 + 1 | 0) & self.capacity_mask;
        continue;
      }
    }
  }
  if (self.size >= self.grow_at) {
    _M0MPB3Map4growGsRPB5ArrayGsEE(self);
    _M0MPB3Map15set__with__hashGsRPB5ArrayGsEE(self, key, new_value, hash);
  } else {
    if (push_away === undefined) {
    } else {
      const _Some = push_away;
      const _entry = _Some;
      _M0MPB3Map10push__awayGsRPB5ArrayGsEE(self, idx, _entry);
    }
    const entry = new _M0TPB5EntryGsRPB5ArrayGsEE(self.tail, undefined, psl, hash, key, new_value);
    _M0MPB3Map20add__entry__to__tailGsRPB5ArrayGsEE(self, idx, entry);
  }
  return new_value;
}
function _M0MPB3Map8containsGssE(self, key) {
  const hash = _M0IPC16string6StringPB4Hash4hash(key);
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _bind$2 = self.entries[idx];
    if (_bind$2 === undefined) {
      return false;
    } else {
      const _Some = _bind$2;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        return true;
      }
      if (i > _entry.psl) {
        return false;
      }
      _tmp = i + 1 | 0;
      _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map8containsGsbE(self, key) {
  const hash = _M0IPC16string6StringPB4Hash4hash(key);
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _bind$2 = self.entries[idx];
    if (_bind$2 === undefined) {
      return false;
    } else {
      const _Some = _bind$2;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        return true;
      }
      if (i > _entry.psl) {
        return false;
      }
      _tmp = i + 1 | 0;
      _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map8containsGsRP217zhengxin_2dcoding4scss9SassValueE(self, key) {
  const hash = _M0IPC16string6StringPB4Hash4hash(key);
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _bind$2 = self.entries[idx];
    if (_bind$2 === undefined) {
      return false;
    } else {
      const _Some = _bind$2;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        return true;
      }
      if (i > _entry.psl) {
        return false;
      }
      _tmp = i + 1 | 0;
      _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map8containsGsRP217zhengxin_2dcoding4scss5ScopeE(self, key) {
  const hash = _M0IPC16string6StringPB4Hash4hash(key);
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _bind$2 = self.entries[idx];
    if (_bind$2 === undefined) {
      return false;
    } else {
      const _Some = _bind$2;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        return true;
      }
      if (i > _entry.psl) {
        return false;
      }
      _tmp = i + 1 | 0;
      _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map8containsGibE(self, key) {
  const hash = _M0IPC13int3IntPB4Hash4hash(key);
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _bind$2 = self.entries[idx];
    if (_bind$2 === undefined) {
      return false;
    } else {
      const _Some = _bind$2;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        return true;
      }
      if (i > _entry.psl) {
        return false;
      }
      _tmp = i + 1 | 0;
      _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map13remove__entryGsbE(self, entry) {
  const _bind$2 = entry.prev;
  if (_bind$2 === -1) {
    self.head = entry.next;
  } else {
    const _tmp = self.entries;
    _M0MPC16option6Option6unwrapGRPB5EntryGssEE(_bind$2 >>> 0 < _tmp.length ? _tmp[_bind$2] : $oob()).next = entry.next;
  }
  const _bind$3 = entry.next;
  if (_bind$3 === undefined) {
    self.tail = entry.prev;
    return;
  } else {
    const _Some = _bind$3;
    const _next = _Some;
    _next.prev = entry.prev;
    return;
  }
}
function _M0MPB3Map13remove__entryGsRP217zhengxin_2dcoding4scss9SassValueE(self, entry) {
  const _bind$2 = entry.prev;
  if (_bind$2 === -1) {
    self.head = entry.next;
  } else {
    const _tmp = self.entries;
    _M0MPC16option6Option6unwrapGRPB5EntryGssEE(_bind$2 >>> 0 < _tmp.length ? _tmp[_bind$2] : $oob()).next = entry.next;
  }
  const _bind$3 = entry.next;
  if (_bind$3 === undefined) {
    self.tail = entry.prev;
    return;
  } else {
    const _Some = _bind$3;
    const _next = _Some;
    _next.prev = entry.prev;
    return;
  }
}
function _M0MPB3Map11shift__backGsbE(self, idx) {
  let _tmp = idx;
  while (true) {
    const cur = _tmp;
    const next = (cur + 1 | 0) & self.capacity_mask;
    _L: {
      const _bind$2 = self.entries[next];
      if (_bind$2 === undefined) {
        break _L;
      } else {
        const _Some = _bind$2;
        const _x = _Some;
        const _x$2 = _x.psl;
        if (_x$2 === 0) {
          break _L;
        } else {
          _x.psl = _x.psl - 1 | 0;
          _M0MPB3Map10set__entryGsbE(self, _x, cur);
          _tmp = next;
          continue;
        }
      }
    }
    self.entries[cur] = undefined;
    return;
  }
}
function _M0MPB3Map11shift__backGsRP217zhengxin_2dcoding4scss9SassValueE(self, idx) {
  let _tmp = idx;
  while (true) {
    const cur = _tmp;
    const next = (cur + 1 | 0) & self.capacity_mask;
    _L: {
      const _bind$2 = self.entries[next];
      if (_bind$2 === undefined) {
        break _L;
      } else {
        const _Some = _bind$2;
        const _x = _Some;
        const _x$2 = _x.psl;
        if (_x$2 === 0) {
          break _L;
        } else {
          _x.psl = _x.psl - 1 | 0;
          _M0MPB3Map10set__entryGssE(self, _x, cur);
          _tmp = next;
          continue;
        }
      }
    }
    self.entries[cur] = undefined;
    return;
  }
}
function _M0MPB3Map18remove__with__hashGsbE(self, key, hash) {
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _bind$2 = self.entries[idx];
    if (_bind$2 === undefined) {
      return;
    } else {
      const _Some = _bind$2;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        _M0MPB3Map13remove__entryGsbE(self, _entry);
        _M0MPB3Map11shift__backGsbE(self, idx);
        self.size = self.size - 1 | 0;
        return;
      }
      if (i > _entry.psl) {
        return;
      }
      _tmp = i + 1 | 0;
      _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map18remove__with__hashGsRP217zhengxin_2dcoding4scss9SassValueE(self, key, hash) {
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _bind$2 = self.entries[idx];
    if (_bind$2 === undefined) {
      return;
    } else {
      const _Some = _bind$2;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        _M0MPB3Map13remove__entryGsRP217zhengxin_2dcoding4scss9SassValueE(self, _entry);
        _M0MPB3Map11shift__backGsRP217zhengxin_2dcoding4scss9SassValueE(self, idx);
        self.size = self.size - 1 | 0;
        return;
      }
      if (i > _entry.psl) {
        return;
      }
      _tmp = i + 1 | 0;
      _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map6removeGsbE(self, key) {
  _M0MPB3Map18remove__with__hashGsbE(self, key, _M0IPC16string6StringPB4Hash4hash(key));
}
function _M0MPB3Map6removeGsRP217zhengxin_2dcoding4scss9SassValueE(self, key) {
  _M0MPB3Map18remove__with__hashGsRP217zhengxin_2dcoding4scss9SassValueE(self, key, _M0IPC16string6StringPB4Hash4hash(key));
}
function _M0MPB3Map6lengthGssE(self) {
  return self.size;
}
function _M0MPB3Map9is__emptyGssE(self) {
  return self.size === 0;
}
function _M0MPB3Map9is__emptyGsbE(self) {
  return self.size === 0;
}
function _M0MPB3Map4iterGsRPB4JsonE(self) {
  const curr_entry = new _M0TPB8MutLocalGORPB5EntryGsRPB4JsonEE(self.head);
  const len = self.size;
  const remaining = new _M0TPB8MutLocalGiE(len);
  return _M0MPB4Iter3newGUsRPB4JsonEE(() => {
    _L: {
      if (remaining.val > 0) {
        const _bind$2 = curr_entry.val;
        if (_bind$2 === undefined) {
          break _L;
        } else {
          const _Some = _bind$2;
          const _x = _Some;
          const _key = _x.key;
          const _value = _x.value;
          const _next = _x.next;
          curr_entry.val = _next;
          remaining.val = remaining.val - 1 | 0;
          return { _0: _key, _1: _value };
        }
      } else {
        break _L;
      }
    }
    return undefined;
  }, len);
}
function _M0MPB3Map4iterGsbE(self) {
  const curr_entry = new _M0TPB8MutLocalGORPB5EntryGsbEE(self.head);
  const len = self.size;
  const remaining = new _M0TPB8MutLocalGiE(len);
  return _M0MPB4Iter3newGUsRPB4JsonEE(() => {
    _L: {
      if (remaining.val > 0) {
        const _bind$2 = curr_entry.val;
        if (_bind$2 === undefined) {
          break _L;
        } else {
          const _Some = _bind$2;
          const _x = _Some;
          const _key = _x.key;
          const _value = _x.value;
          const _next = _x.next;
          curr_entry.val = _next;
          remaining.val = remaining.val - 1 | 0;
          return { _0: _key, _1: _value };
        }
      } else {
        break _L;
      }
    }
    return undefined;
  }, len);
}
function _M0MPB3Map5iter2GsRPB4JsonE(self) {
  return _M0MPB3Map4iterGsRPB4JsonE(self);
}
function _M0MPB3Map5iter2GsbE(self) {
  return _M0MPB3Map4iterGsbE(self);
}
function _M0MPB3Map4copyGsRP217zhengxin_2dcoding4scss9SassValueE(self) {
  const _bind$2 = self.capacity;
  const _bind$3 = $make_array_len_and_init(self.capacity, undefined);
  const _bind$4 = self.size;
  const _bind$5 = self.capacity_mask;
  const _bind$6 = self.grow_at;
  const _bind$7 = undefined;
  const _bind$8 = self.tail;
  const other = new _M0TPB3MapGsRP217zhengxin_2dcoding4scss9SassValueE(_bind$3, _bind$4, _bind$2, _bind$5, _bind$6, _bind$7, _bind$8);
  if (self.size === 0) {
    return other;
  }
  const _tmp = self.entries;
  const _tmp$2 = self.tail;
  const _bind$9 = _tmp$2 >>> 0 < _tmp.length ? _tmp[_tmp$2] : $oob();
  if (_bind$9 === undefined) {
    return $panic();
  } else {
    const _Some = _bind$9;
    const _last = _Some;
    let _tmp$3 = _last;
    let _tmp$4 = self.tail;
    let _tmp$5 = undefined;
    while (true) {
      const entry = _tmp$3;
      const idx = _tmp$4;
      const next = _tmp$5;
      const _prev = entry.prev;
      const _psl = entry.psl;
      const _hash = entry.hash;
      const _key = entry.key;
      const _value = entry.value;
      const new_entry = new _M0TPB5EntryGsRP217zhengxin_2dcoding4scss9SassValueE(_prev, next, _psl, _hash, _key, _value);
      const _tmp$6 = other.entries;
      if (idx >>> 0 < _tmp$6.length) {
        _tmp$6[idx] = new_entry;
      } else {
        $oob();
      }
      if (_prev !== -1) {
        const _tmp$7 = self.entries;
        _tmp$3 = _M0MPC16option6Option6unwrapGRPB5EntryGssEE(_prev >>> 0 < _tmp$7.length ? _tmp$7[_prev] : $oob());
        _tmp$4 = _prev;
        _tmp$5 = new_entry;
        continue;
      } else {
        other.head = new_entry;
        break;
      }
    }
    return other;
  }
}
function _M0IPC14byte4BytePB2Eq5equal(self, that) {
  return self === that;
}
function _M0MPC14json4Json6string(string) {
  return new _M0DTPB4Json6String(string);
}
function _M0MPC14json4Json7boolean(boolean) {
  return boolean ? _M0DTPB4Json4True__ : _M0DTPB4Json5False__;
}
function _M0MPC14json4Json6object(object) {
  return new _M0DTPB4Json6Object(object);
}
function _M0MPC15array5Array3mapGsRPB4JsonE(self, f) {
  const arr = new Array(self.length);
  const _bind$2 = self.length;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < _bind$2) {
      const v = self[i];
      arr[i] = f(v);
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return arr;
}
function _M0MPC15array5Array3mapGUOsRPC15debug4ReprERPC15debug4ReprE(self, f) {
  const arr = new Array(self.length);
  const _bind$2 = self.length;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < _bind$2) {
      const v = self[i];
      arr[i] = f(v);
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return arr;
}
function _M0MPC15array5Array3mapGRPC15debug4ReprRPC15debug7ContentE(self, f) {
  const arr = new Array(self.length);
  const _bind$2 = self.length;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < _bind$2) {
      const v = self[i];
      arr[i] = f(v);
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return arr;
}
function _M0MPC15array5Array3mapGssEHRP217zhengxin_2dcoding4scss10ParseError(self, f) {
  const arr = new Array(self.length);
  const _bind$2 = self.length;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < _bind$2) {
      const v = self[i];
      const _bind$3 = f(v);
      let _tmp$2;
      if (_bind$3.$tag === 1) {
        const _ok = _bind$3;
        _tmp$2 = _ok._0;
      } else {
        return _bind$3;
      }
      arr[i] = _tmp$2;
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return new _M0DTPC16result6ResultGRPB5ArrayGsERP217zhengxin_2dcoding4scss10ParseErrorE2Ok(arr);
}
function _M0MPC15array5Array3mapGURP217zhengxin_2dcoding4scss9SassValueRP217zhengxin_2dcoding4scss9SassValueEsEHRP217zhengxin_2dcoding4scss10ParseError(self, f) {
  const arr = new Array(self.length);
  const _bind$2 = self.length;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < _bind$2) {
      const v = self[i];
      const _bind$3 = f(v);
      let _tmp$2;
      if (_bind$3.$tag === 1) {
        const _ok = _bind$3;
        _tmp$2 = _ok._0;
      } else {
        return _bind$3;
      }
      arr[i] = _tmp$2;
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return new _M0DTPC16result6ResultGRPB5ArrayGsERP217zhengxin_2dcoding4scss10ParseErrorE2Ok(arr);
}
function _M0MPC15array5Array3mapGRP217zhengxin_2dcoding4scss9SassValuesEHRP217zhengxin_2dcoding4scss10ParseError(self, f) {
  const arr = new Array(self.length);
  const _bind$2 = self.length;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < _bind$2) {
      const v = self[i];
      const _bind$3 = f(v);
      let _tmp$2;
      if (_bind$3.$tag === 1) {
        const _ok = _bind$3;
        _tmp$2 = _ok._0;
      } else {
        return _bind$3;
      }
      arr[i] = _tmp$2;
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return new _M0DTPC16result6ResultGRPB5ArrayGsERP217zhengxin_2dcoding4scss10ParseErrorE2Ok(arr);
}
function _M0MPC15array5Array3mapGssE(self, f) {
  const arr = new Array(self.length);
  const _bind$2 = self.length;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < _bind$2) {
      const v = self[i];
      arr[i] = f(v);
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return arr;
}
function _M0MPC15array5Array3mapGRPC15debug7ContentRPC15debug13ContentParensE(self, f) {
  const arr = new Array(self.length);
  const _bind$2 = self.length;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < _bind$2) {
      const v = self[i];
      arr[i] = f(v);
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return arr;
}
function _M0MPC15array5Array3mapGRP217zhengxin_2dcoding4scss10ExpressionRP217zhengxin_2dcoding4scss9SassValueEHRP217zhengxin_2dcoding4scss10ParseError(self, f) {
  const arr = new Array(self.length);
  const _bind$2 = self.length;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < _bind$2) {
      const v = self[i];
      const _bind$3 = f(v);
      let _tmp$2;
      if (_bind$3.$tag === 1) {
        const _ok = _bind$3;
        _tmp$2 = _ok._0;
      } else {
        return _bind$3;
      }
      arr[i] = _tmp$2;
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return new _M0DTPC16result6ResultGRPB5ArrayGRP217zhengxin_2dcoding4scss9SassValueERP217zhengxin_2dcoding4scss10ParseErrorE2Ok(arr);
}
function _M0MPC15array5Array3mapGURP217zhengxin_2dcoding4scss9SassValueRP217zhengxin_2dcoding4scss9SassValueERP217zhengxin_2dcoding4scss9SassValueE(self, f) {
  const arr = new Array(self.length);
  const _bind$2 = self.length;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < _bind$2) {
      const v = self[i];
      arr[i] = f(v);
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return arr;
}
function _M0MPC15array5Array3mapGdsE(self, f) {
  const arr = new Array(self.length);
  const _bind$2 = self.length;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < _bind$2) {
      const v = self[i];
      arr[i] = f(v);
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return arr;
}
function _M0MPC15array5Array3mapGRPC15debug4ReprRPC15debug4ReprE(self, f) {
  const arr = new Array(self.length);
  const _bind$2 = self.length;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < _bind$2) {
      const v = self[i];
      arr[i] = f(v);
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return arr;
}
function _M0MPC15array5Array3mapGRPC15debug13ContentParensRPB5ArrayGsEE(self, f) {
  const arr = new Array(self.length);
  const _bind$2 = self.length;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < _bind$2) {
      const v = self[i];
      arr[i] = f(v);
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return arr;
}
function _M0MPB4Iter10size__hintGsE(self) {
  return self.size_hint;
}
function _M0MPB4Iter3anyGURP217zhengxin_2dcoding4scss9SassValueRP217zhengxin_2dcoding4scss9SassValueEE(self, f) {
  while (true) {
    const _bind$2 = _M0MPB4Iter4nextGUsRPB4JsonEE(self);
    if (_bind$2 === undefined) {
      return false;
    } else {
      const _Some = _bind$2;
      const _x = _Some;
      if (f(_x)) {
        return true;
      }
      continue;
    }
  }
}
function _M0MPB4Iter3allGcE(self, f) {
  while (true) {
    const _bind$2 = _M0MPB4Iter4nextGcE(self);
    if (_bind$2 === -1) {
      return true;
    } else {
      const _Some = _bind$2;
      const _x = _Some;
      if (f(_x)) {
      } else {
        return false;
      }
      continue;
    }
  }
}
function _M0MPB4Iter3allGUOsRP217zhengxin_2dcoding4scss10ExpressionbEE(self, f) {
  while (true) {
    const _bind$2 = _M0MPB4Iter4nextGUsRPB4JsonEE(self);
    if (_bind$2 === undefined) {
      return true;
    } else {
      const _Some = _bind$2;
      const _x = _Some;
      if (f(_x)) {
      } else {
        return false;
      }
      continue;
    }
  }
}
function _M0MPB4Iter3allGdE(self, f) {
  while (true) {
    const _bind$2 = _M0MPB4Iter4nextGdE(self);
    if (_bind$2.$tag === 1) {
      const _Some = _bind$2;
      const _x = _Some._0;
      if (f(_x)) {
      } else {
        return false;
      }
      continue;
    } else {
      return true;
    }
  }
}
function _M0MPB4Iter6filterGRPC16string10StringViewE(self, f) {
  return _M0MPB4Iter3newGUsRPB4JsonEE(() => {
    while (true) {
      const _bind$2 = _M0MPB4Iter4nextGUsRPB4JsonEE(self);
      if (_bind$2 === undefined) {
        return undefined;
      } else {
        const _Some = _bind$2;
        const _x = _Some;
        if (f(_x)) {
          return _x;
        }
        continue;
      }
    }
  }, undefined);
}
function _M0MPB4Iter4iterGsE(self) {
  return self;
}
function _M0MPB5Iter24nextGsRPB4JsonE(self) {
  return _M0MPB4Iter4nextGUsRPB4JsonEE(self);
}
function _M0MPB5Iter24nextGsbE(self) {
  return _M0MPB4Iter4nextGUsRPB4JsonEE(self);
}
function _M0MPC14byte4Byte9to__int64(self) {
  return BigInt.asUintN(64, BigInt(self));
}
function _M0MPC13int3Int13is__surrogate(self) {
  return 55296 <= self && self <= 57343;
}
function _M0IPC16string6StringPB4Hash4hash(self) {
  let acc = (_M0FPB4seed >>> 0) + (374761393 >>> 0) | 0;
  const _bind$2 = self.length;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < _bind$2) {
      acc = (acc >>> 0) + (4 >>> 0) | 0;
      const v = self.charCodeAt(i);
      acc = _M0FPB13consume4__acc(acc, v);
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return _M0FPB13finalize__acc(acc);
}
function _M0IPC13int3IntPB4Hash4hash(self) {
  const acc = (((_M0FPB4seed >>> 0) + (374761393 >>> 0) | 0) >>> 0) + (4 >>> 0) | 0;
  return _M0FPB13finalize__acc(_M0FPB13consume4__acc(acc, self));
}
function _M0MPC16double6Double7to__int(self) {
  return self !== self ? 0 : self >= 2147483647 ? 2147483647 : self <= -2147483648 ? -2147483648 : self | 0;
}
function _M0MPC16double6Double4ceil(_tmp) {
  return Math.ceil(_tmp);
}
function _M0MPC16double6Double5floor(_tmp) {
  return Math.floor(_tmp);
}
function _M0MPC16double6Double5round(_tmp) {
  return Math.round(_tmp);
}
function _M0MPC16double6Double7is__nan(self) {
  return self !== self;
}
function _M0MPC16double6Double3min(self, other) {
  return _M0MPC16double6Double7is__nan(self) ? other : _M0MPC16double6Double7is__nan(other) ? self : self < other ? self : other;
}
function _M0MPC16double6Double3max(self, other) {
  return _M0MPC16double6Double7is__nan(self) ? other : _M0MPC16double6Double7is__nan(other) ? self : self > other ? self : other;
}
function _M0MPC16double6Double7is__inf(self) {
  return self > _M0FPB18double__max__value || self < _M0FPB18double__min__value;
}
function _M0IPC16double6DoublePB4Show10to__string(self) {
  return String(self);
}
function _M0MPC14char4Char7to__hex(char) {
  const code = char;
  return code >= 0 && code <= 255 ? _M0MPC14byte4Byte7to__hex(code & 255) : code <= 65535 ? `${_M0MPC14byte4Byte7to__hex(code >> 8 & 255)}${_M0MPC14byte4Byte7to__hex(code & 255)}` : `${_M0MPC14byte4Byte7to__hex(code >> 16 & 255)}${_M0MPC14byte4Byte7to__hex(code >> 8 & 255)}${_M0MPC14byte4Byte7to__hex(code & 255)}`;
}
function _M0MPC14char4Char11is__control(self) {
  return self >= 0 && self <= 31 ? true : self >= 127 && self <= 159;
}
function _M0MPC14char4Char13is__printable(self) {
  if (_M0MPC14char4Char11is__control(self)) {
    return false;
  }
  const self$2 = self;
  _L: {
    _L$2: {
      if (self$2 >= 57344 && self$2 <= 63743) {
        break _L$2;
      } else {
        if (self$2 >= 983040 && self$2 <= 1048573) {
          break _L$2;
        } else {
          if (self$2 >= 1048576 && self$2 <= 1114109) {
            break _L$2;
          }
        }
      }
      break _L;
    }
    return false;
  }
  _L$2: {
    _L$3: {
      if (self$2 === 173) {
        break _L$3;
      } else {
        if (self$2 >= 1536 && self$2 <= 1541) {
          break _L$3;
        } else {
          if (self$2 === 1564) {
            break _L$3;
          } else {
            if (self$2 === 1757) {
              break _L$3;
            } else {
              if (self$2 === 1807) {
                break _L$3;
              } else {
                if (self$2 >= 2192 && self$2 <= 2193) {
                  break _L$3;
                } else {
                  if (self$2 === 2274) {
                    break _L$3;
                  } else {
                    if (self$2 === 6158) {
                      break _L$3;
                    } else {
                      if (self$2 >= 8203 && self$2 <= 8207) {
                        break _L$3;
                      } else {
                        if (self$2 >= 8234 && self$2 <= 8238) {
                          break _L$3;
                        } else {
                          if (self$2 >= 8288 && self$2 <= 8292) {
                            break _L$3;
                          } else {
                            if (self$2 >= 8294 && self$2 <= 8303) {
                              break _L$3;
                            } else {
                              if (self$2 === 65279) {
                                break _L$3;
                              } else {
                                if (self$2 >= 65529 && self$2 <= 65531) {
                                  break _L$3;
                                } else {
                                  if (self$2 === 69821) {
                                    break _L$3;
                                  } else {
                                    if (self$2 === 69837) {
                                      break _L$3;
                                    } else {
                                      if (self$2 >= 78896 && self$2 <= 78911) {
                                        break _L$3;
                                      } else {
                                        if (self$2 >= 113824 && self$2 <= 113827) {
                                          break _L$3;
                                        } else {
                                          if (self$2 >= 119155 && self$2 <= 119162) {
                                            break _L$3;
                                          } else {
                                            if (self$2 === 917505) {
                                              break _L$3;
                                            } else {
                                              if (self$2 >= 917536 && self$2 <= 917631) {
                                                break _L$3;
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
      break _L$2;
    }
    return false;
  }
  if (_M0MPC13int3Int13is__surrogate(self$2)) {
    return false;
  }
  if (self$2 === 8232 || self$2 === 8233) {
    return false;
  }
  _L$3: {
    _L$4: {
      if (self$2 >= 64976 && self$2 <= 65007) {
        break _L$4;
      } else {
        if (self$2 >= 65534 && self$2 <= 65535) {
          break _L$4;
        } else {
          if (self$2 >= 131070 && self$2 <= 131071) {
            break _L$4;
          } else {
            if (self$2 >= 196606 && self$2 <= 196607) {
              break _L$4;
            } else {
              if (self$2 >= 262142 && self$2 <= 262143) {
                break _L$4;
              } else {
                if (self$2 >= 327678 && self$2 <= 327679) {
                  break _L$4;
                } else {
                  if (self$2 >= 393214 && self$2 <= 393215) {
                    break _L$4;
                  } else {
                    if (self$2 >= 458750 && self$2 <= 458751) {
                      break _L$4;
                    } else {
                      if (self$2 >= 524286 && self$2 <= 524287) {
                        break _L$4;
                      } else {
                        if (self$2 >= 589822 && self$2 <= 589823) {
                          break _L$4;
                        } else {
                          if (self$2 >= 655358 && self$2 <= 655359) {
                            break _L$4;
                          } else {
                            if (self$2 >= 720894 && self$2 <= 720895) {
                              break _L$4;
                            } else {
                              if (self$2 >= 786430 && self$2 <= 786431) {
                                break _L$4;
                              } else {
                                if (self$2 >= 851966 && self$2 <= 851967) {
                                  break _L$4;
                                } else {
                                  if (self$2 >= 917502 && self$2 <= 917503) {
                                    break _L$4;
                                  } else {
                                    if (self$2 >= 983038 && self$2 <= 983039) {
                                      break _L$4;
                                    } else {
                                      if (self$2 >= 1048574 && self$2 <= 1048575) {
                                        break _L$4;
                                      } else {
                                        if (self$2 >= 1114110 && self$2 <= 1114111) {
                                          break _L$4;
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
      break _L$3;
    }
    return false;
  }
  return true;
}
function _M0MPC14char4Char18escape__to_2einner(self, logger, quote) {
  if (quote) {
    logger.method_table.method_3(logger.self, 39);
  }
  _L: {
    _L$2: {
      if (self === 39) {
        break _L$2;
      } else {
        if (self === 92) {
          break _L$2;
        } else {
          if (self === 10) {
            logger.method_table.method_0(logger.self, "\\n");
          } else {
            if (self === 13) {
              logger.method_table.method_0(logger.self, "\\r");
            } else {
              if (self === 8) {
                logger.method_table.method_0(logger.self, "\\b");
              } else {
                if (self === 9) {
                  logger.method_table.method_0(logger.self, "\\t");
                } else {
                  if (self >= 32 && self <= 126) {
                    logger.method_table.method_3(logger.self, self);
                  } else {
                    if (!_M0MPC14char4Char13is__printable(self)) {
                      logger.method_table.method_0(logger.self, "\\u{");
                      logger.method_table.method_0(logger.self, _M0MPC14char4Char7to__hex(self));
                      logger.method_table.method_3(logger.self, 125);
                    } else {
                      logger.method_table.method_3(logger.self, self);
                    }
                  }
                }
              }
            }
          }
        }
      }
      break _L;
    }
    logger.method_table.method_3(logger.self, 92);
    logger.method_table.method_3(logger.self, self);
  }
  if (quote) {
    logger.method_table.method_3(logger.self, 39);
    return;
  } else {
    return;
  }
}
function _M0MPC14char4Char14escape_2einner(self, quote) {
  const buf = _M0MPB13StringBuilder21StringBuilder_2einner(0);
  _M0MPC14char4Char18escape__to_2einner(self, { self: buf, method_table: _M0FP092moonbitlang_2fcore_2fbuiltin_2fStringBuilder_24as_24_40moonbitlang_2fcore_2fbuiltin_2eLogger }, quote);
  return _M0MPB13StringBuilder10to__string(buf);
}
function _M0MPC15array5Array12view_2einnerGsE(self, start, end) {
  const len = self.length;
  let end$2;
  if (end === undefined) {
    end$2 = len;
  } else {
    const _Some = end;
    const _end = _Some;
    end$2 = _end;
  }
  if (start >= 0 && (start <= end$2 && end$2 <= len)) {
    const _bind$2 = self;
    const _bind$3 = end$2 - start | 0;
    return new _M0TPB9ArrayViewGsE(_bind$2, start, start + _bind$3 | 0);
  } else {
    return _M0FPC15abort5abortGRPB4JsonE("View index out of bounds");
  }
}
function _M0MPC15array5Array12view_2einnerGcE(self, start, end) {
  const len = self.length;
  let end$2;
  if (end === undefined) {
    end$2 = len;
  } else {
    const _Some = end;
    const _end = _Some;
    end$2 = _end;
  }
  if (start >= 0 && (start <= end$2 && end$2 <= len)) {
    const _bind$2 = self;
    const _bind$3 = end$2 - start | 0;
    return new _M0TPB9ArrayViewGcE(_bind$2, start, start + _bind$3 | 0);
  } else {
    return _M0FPC15abort5abortGRPB4JsonE("View index out of bounds");
  }
}
function _M0MPC15array5Array28unsafe__truncate__to__lengthGsE(self, new_len) {
  _M0MPB7JSArray11set__length(self, new_len);
}
function _M0MPC15array5Array17reserve__capacityGsE(self, capacity) {}
function _M0MPC15array5Array6appendGRP217zhengxin_2dcoding4scss7CssRuleE(self, other) {
  const old_len = self.length;
  const append_len = other.end - other.start | 0;
  if ((old_len + append_len | 0) >= old_len) {
    _M0MPB7JSArray12append__view(self, other.buf, other.start, append_len);
    return;
  } else {
    $panic();
    return;
  }
}
function _M0MPC15array5Array9is__emptyGRPB4JsonE(self) {
  return self.length === 0;
}
function _M0MPC15array5Array9is__emptyGcE(self) {
  return self.length === 0;
}
function _M0MPC15array5Array11unsafe__popGRPC14json10WriteFrameE(self) {
  return _M0MPB7JSArray3pop(self);
}
function _M0MPC15array5Array11unsafe__popGcE(self) {
  return _M0MPB7JSArray3pop(self);
}
function _M0MPC15array5Array3popGRPC14json10WriteFrameE(self) {
  if (_M0MPC15array5Array9is__emptyGRPB4JsonE(self)) {
    return undefined;
  } else {
    const v = _M0MPC15array5Array11unsafe__popGRPC14json10WriteFrameE(self);
    return v;
  }
}
function _M0MPC15array5Array3popGcE(self) {
  if (_M0MPC15array5Array9is__emptyGcE(self)) {
    return -1;
  } else {
    const v = _M0MPC15array5Array11unsafe__popGcE(self);
    return v;
  }
}
function _M0MPC15array5Array6removeGsE(self, index) {
  if (index >= 0 && index < self.length) {
    const value = index >>> 0 < self.length ? self[index] : $oob();
    _M0MPB7JSArray6splice(self, index, 1);
    return value;
  } else {
    const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(60);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "index out of bounds: the len is from 0 to ");
    _M0MPB13StringBuilder13write__objectGiE(_string_builder, self.length);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, " but the index is ");
    _M0MPB13StringBuilder13write__objectGiE(_string_builder, index);
    return _M0FPC15abort5abortGRPB4JsonE(_M0MPB13StringBuilder10to__string(_string_builder));
  }
}
function _M0MPC15array5Array4copyGsE(self) {
  return _M0MPB7JSArray4copy(self);
}
function _M0MPC15array5Array2atGRPB4JsonE(self, index) {
  const len = self.length;
  return index >= 0 && index < len ? self[index] : $panic();
}
function _M0MPC15array5Array2atGcE(self, index) {
  const len = self.length;
  return index >= 0 && index < len ? self[index] : $panic();
}
function _M0MPC15array5Array2atGiE(self, index) {
  const len = self.length;
  return index >= 0 && index < len ? self[index] : $panic();
}
function _M0MPC15array5Array3setGURP217zhengxin_2dcoding4scss9SassValueRP217zhengxin_2dcoding4scss9SassValueEE(self, index, value) {
  const len = self.length;
  if (index >= 0 && index < len) {
    self[index] = value;
    return;
  } else {
    $panic();
    return;
  }
}
function _M0MPC15array5Array3getGRP217zhengxin_2dcoding4scss9SassValueE(self, index) {
  const len = self.length;
  return index >= 0 && index < len ? self[index] : undefined;
}
function _M0MPC15array5Array3getGcE(self, index) {
  const len = self.length;
  return index >= 0 && index < len ? self[index] : -1;
}
function _M0IPC15array5ArrayPB2Eq5equalGsE(self, other) {
  const self_len = self.length;
  const other_len = other.length;
  if (self_len === other_len) {
    let _tmp = 0;
    while (true) {
      const i = _tmp;
      if (i < self_len) {
        if (self[i] === other[i]) {
        } else {
          return false;
        }
        _tmp = i + 1 | 0;
        continue;
      } else {
        return true;
      }
    }
  } else {
    return false;
  }
}
function _M0IPC15array5ArrayPB2Eq5equalGcE(self, other) {
  const self_len = self.length;
  const other_len = other.length;
  if (self_len === other_len) {
    let _tmp = 0;
    while (true) {
      const i = _tmp;
      if (i < self_len) {
        if (self[i] === other[i]) {
        } else {
          return false;
        }
        _tmp = i + 1 | 0;
        continue;
      } else {
        return true;
      }
    }
  } else {
    return false;
  }
}
function _M0IPC15array5ArrayPB3Add3addGsE(self, other) {
  const len_self = self.length;
  const len_other = other.length;
  if (len_self === 0) {
    return _M0MPC15array5Array31unsafe__make__and__blit_2einnerGsE(other, len_other, len_other, 0, 0);
  } else {
    const result = _M0MPC15array5Array31unsafe__make__and__blit_2einnerGsE(self, len_self + len_other | 0, len_self, 0, 0);
    _M0MPB18UninitializedArray12unsafe__blitGsE(result, len_self, other, 0, len_other);
    return result;
  }
}
function _M0MPC15array5Array3allGsE(self, f) {
  const _bind$2 = self.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind$2) {
      const v = self[_];
      if (!f(v)) {
        return false;
      }
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return true;
}
function _M0MPC15array5Array3anyGsE(self, f) {
  const _bind$2 = self.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind$2) {
      const v = self[_];
      if (f(v)) {
        return true;
      }
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return false;
}
function _M0MPC15array5Array5clearGsE(self) {
  _M0MPC15array5Array28unsafe__truncate__to__lengthGsE(self, 0);
}
function _M0MPC15array5Array6filterGsE(self, f) {
  const arr = [];
  const _bind$2 = self.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind$2) {
      const v = self[_];
      if (f(v)) {
        _M0MPC15array5Array4pushGRPC14json10WriteFrameE(arr, v);
      }
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return arr;
}
function _M0MPC15array5Array6filterGRP217zhengxin_2dcoding4scss9SassValueE(self, f) {
  const arr = [];
  const _bind$2 = self.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind$2) {
      const v = self[_];
      if (f(v)) {
        _M0MPC15array5Array4pushGRPC14json10WriteFrameE(arr, v);
      }
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return arr;
}
function _M0MPC15array5Array6filterGURP217zhengxin_2dcoding4scss9SassValueRP217zhengxin_2dcoding4scss9SassValueEE(self, f) {
  const arr = [];
  const _bind$2 = self.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind$2) {
      const v = self[_];
      if (f(v)) {
        _M0MPC15array5Array4pushGRPC14json10WriteFrameE(arr, v);
      }
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return arr;
}
function _M0MPC15array5Array8containsGsE(self, value) {
  const _bind$2 = self.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind$2) {
      const v = self[_];
      if (v === value) {
        return true;
      }
      _tmp = _ + 1 | 0;
      continue;
    } else {
      return false;
    }
  }
}
function _M0MPC15array5Array8containsGcE(self, value) {
  const _bind$2 = self.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind$2) {
      const v = self[_];
      if (v === value) {
        return true;
      }
      _tmp = _ + 1 | 0;
      continue;
    } else {
      return false;
    }
  }
}
function _M0MPC15array5Array8containsGiE(self, value) {
  const _bind$2 = self.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind$2) {
      const v = self[_];
      if (v === value) {
        return true;
      }
      _tmp = _ + 1 | 0;
      continue;
    } else {
      return false;
    }
  }
}
function _M0MPC15array5Array10push__iterGsE(self, iter) {
  const _bind$2 = _M0MPB4Iter10size__hintGsE(iter);
  if (_bind$2 === undefined) {
  } else {
    const _Some = _bind$2;
    const _n = _Some;
    _M0MPC15array5Array17reserve__capacityGsE(self, self.length + _n | 0);
  }
  while (true) {
    const _bind$3 = _M0MPB4Iter4nextGUsRPB4JsonEE(iter);
    if (_bind$3 === undefined) {
      return;
    } else {
      const _Some = _bind$3;
      const _x = _Some;
      _M0MPC15array5Array4pushGRPC14json10WriteFrameE(self, _x);
      continue;
    }
  }
}
function _M0MPC15array5Array4lastGsE(self) {
  if (self.length === 0) {
    return undefined;
  } else {
    const _last = self[self.length - 1 | 0];
    return _last;
  }
}
function _M0MPC15array5Array4lastGcE(self) {
  if (self.length === 0) {
    return -1;
  } else {
    const _last = self[self.length - 1 | 0];
    return _last;
  }
}
function _M0MPC15array5Array4joinGsE(self, separator) {
  return _M0MPC15array9ArrayView4joinGsE(new _M0TPB9ArrayViewGsE(self, 0, self.length), separator);
}
function _M0MPC15array5Array4joinGRPC16string10StringViewE(self, separator) {
  return _M0MPC15array9ArrayView4joinGRPC16string10StringViewE(new _M0TPB9ArrayViewGRPC16string10StringViewE(self, 0, self.length), separator);
}
function _M0IPC15float5FloatPB4Show10to__string(self) {
  return String(self);
}
function _M0MPC15debug4Repr4ReprGRP217zhengxin_2dcoding4scss10ParseErrorE(value) {
  return _M0IP217zhengxin_2dcoding4scss10ParseErrorPC15debug5Debug8to__repr(value);
}
function _M0MPC15debug4Repr4ReprGRPC15error5ErrorE(value) {
  return _M0IPC15error5ErrorPC15debug5Debug8to__repr(value);
}
function _M0MPC15debug4Repr8children(self) {
  let value;
  _L: {
    _L$2: {
      switch (self.$tag) {
        case 0: {
          break _L$2;
        }
        case 1: {
          break _L$2;
        }
        case 2: {
          break _L$2;
        }
        case 3: {
          break _L$2;
        }
        case 4: {
          break _L$2;
        }
        case 5: {
          break _L$2;
        }
        case 6: {
          break _L$2;
        }
        case 15: {
          break _L$2;
        }
        case 17: {
          break _L$2;
        }
        case 7: {
          const _Tuple = self;
          const _xs = _Tuple._0;
          return _xs;
        }
        case 8: {
          const _Array = self;
          const _xs$2 = _Array._0;
          return _xs$2;
        }
        case 9: {
          const _Record = self;
          const _xs$3 = _Record._0;
          return _xs$3;
        }
        case 10: {
          const _Enum = self;
          const _xs$4 = _Enum._1;
          return _xs$4;
        }
        case 11: {
          const _Map = self;
          const _xs$5 = _Map._0;
          return _xs$5;
        }
        case 14: {
          const _Opaque = self;
          const _value = _Opaque._1;
          value = _value;
          break _L;
        }
        case 12: {
          const _RecordField = self;
          const _value$2 = _RecordField._1;
          value = _value$2;
          break _L;
        }
        case 13: {
          const _EnumLabeledArg = self;
          const _value$3 = _EnumLabeledArg._1;
          value = _value$3;
          break _L;
        }
        default: {
          const _MapEntry = self;
          const _key = _MapEntry._0;
          const _value$4 = _MapEntry._1;
          return [_key, _value$4];
        }
      }
    }
    return [];
  }
  return [value];
}
function _M0MPC15debug4Repr14with__children(self, children) {
  _L: {
    switch (self.$tag) {
      case 0: {
        break _L;
      }
      case 1: {
        break _L;
      }
      case 2: {
        break _L;
      }
      case 3: {
        break _L;
      }
      case 4: {
        break _L;
      }
      case 5: {
        break _L;
      }
      case 6: {
        break _L;
      }
      case 15: {
        break _L;
      }
      case 17: {
        break _L;
      }
      case 7: {
        return new _M0DTPC15debug4Repr5Tuple(children);
      }
      case 8: {
        return new _M0DTPC15debug4Repr5Array(children);
      }
      case 9: {
        return new _M0DTPC15debug4Repr6Record(children);
      }
      case 10: {
        const _Enum = self;
        const _name = _Enum._0;
        return new _M0DTPC15debug4Repr4Enum(_name, children);
      }
      case 11: {
        return new _M0DTPC15debug4Repr3Map(children);
      }
      case 12: {
        const _RecordField = self;
        const _name$2 = _RecordField._0;
        if (children.length === 1) {
          const _value = children[0];
          return new _M0DTPC15debug4Repr11RecordField(_name$2, _value);
        } else {
          return new _M0DTPC15debug4Repr11RecordField(_name$2, _M0DTPC15debug4Repr7Omitted__);
        }
      }
      case 13: {
        const _EnumLabeledArg = self;
        const _label = _EnumLabeledArg._0;
        if (children.length === 1) {
          const _value = children[0];
          return new _M0DTPC15debug4Repr14EnumLabeledArg(_label, _value);
        } else {
          return new _M0DTPC15debug4Repr14EnumLabeledArg(_label, _M0DTPC15debug4Repr7Omitted__);
        }
      }
      case 16: {
        if (children.length === 2) {
          const _key = children[0];
          const _value = children[1];
          return new _M0DTPC15debug4Repr8MapEntry(_key, _value);
        } else {
          return new _M0DTPC15debug4Repr8MapEntry(_M0DTPC15debug4Repr7Omitted__, _M0DTPC15debug4Repr7Omitted__);
        }
      }
      default: {
        const _Opaque = self;
        const _name$3 = _Opaque._0;
        if (children.length === 1) {
          const _value = children[0];
          return new _M0DTPC15debug4Repr6Opaque(_name$3, _value);
        } else {
          return new _M0DTPC15debug4Repr6Opaque(_name$3, _M0DTPC15debug4Repr7Omitted__);
        }
      }
    }
  }
  return self;
}
function _M0MPC15debug4Repr7integer(x) {
  return new _M0DTPC15debug4Repr7Integer(x);
}
function _M0MPC15debug4Repr4char(x) {
  return new _M0DTPC15debug4Repr7CharLit(x);
}
function _M0MPC15debug4Repr6string(x) {
  return new _M0DTPC15debug4Repr9StringLit(x);
}
function _M0MPC15debug4Repr6record(fields) {
  const _acc = [];
  const _it = _M0MPB3Map5iter2GsRPB4JsonE(fields);
  let _tmp;
  while (true) {
    const _bind$2 = _M0MPB5Iter24nextGsRPB4JsonE(_it);
    if (_bind$2 === undefined) {
      _tmp = _acc;
      break;
    } else {
      const _Some = _bind$2;
      const _x = _Some;
      const _name = _x._0;
      const _value = _x._1;
      _M0MPC15array5Array4pushGRPC14json10WriteFrameE(_acc, new _M0DTPC15debug4Repr11RecordField(_name, _value));
      continue;
    }
  }
  return new _M0DTPC15debug4Repr6Record(_tmp);
}
function _M0MPC15debug4Repr7omitted() {
  return _M0DTPC15debug4Repr7Omitted__;
}
function _M0MPC15debug4Repr4ctor(name, args) {
  return new _M0DTPC15debug4Repr4Enum(name, _M0MPC15array5Array3mapGUOsRPC15debug4ReprERPC15debug4ReprE(args, (arg) => {
    const _label = arg._0;
    const _value = arg._1;
    if (_label === undefined) {
      return _value;
    } else {
      const _Some = _label;
      const _label$2 = _Some;
      return new _M0DTPC15debug4Repr14EnumLabeledArg(_label$2, _value);
    }
  }));
}
function _M0MPC15debug4Repr7shallow(self) {
  return _M0MPC15debug4Repr14with__children(self, []);
}
function _M0IPC15debug13ContentParensPB3Add3add(self, other) {
  return new _M0TPC15debug13ContentParens(self.size + other.size | 0, _M0IPC15array5ArrayPB3Add3addGsE(self.lines, other.lines));
}
function _M0FPC15debug14empty__content() {
  return new _M0TPC15debug7Content(0, [], false);
}
function _M0FPC15debug8verbatim(x) {
  return new _M0TPC15debug13ContentParens(1, [x]);
}
function _M0FPC15debug15content__parens(size, lines) {
  return new _M0TPC15debug13ContentParens(size, lines);
}
function _M0FPC15debug12leaf_2einner(x, needs_parens) {
  return new _M0TPC15debug7Content(1, [x], needs_parens);
}
function _M0FPC15debug11with__lines(r, f) {
  return new _M0TPC15debug13ContentParens(r.size, f(r.lines));
}
function _M0MPC15debug7Content20with__lines__content(r, f) {
  return new _M0TPC15debug7Content(r.size, f(r.lines), r.needs_parens);
}
function _M0FPC15debug15surround__lines(start, finish, lines) {
  if (lines.length === 0) {
    return [`${start}${finish}`];
  } else {
    if (lines.length === 1) {
      const _item = lines[0];
      return [`${start}${_item}${finish}`];
    } else {
      const _first = lines[0];
      const _last = lines[lines.length - 1 | 0];
      const _x = new _M0TPB9ArrayViewGsE(lines, 1, lines.length - 1 | 0);
      const _self = [];
      _M0MPC15array5Array4pushGRPC14json10WriteFrameE(_self, `${start}${_first}`);
      _M0MPC15array5Array10push__iterGsE(_self, _M0MPC15array9ArrayView4iterGsE(_x));
      _M0MPC15array5Array4pushGRPC14json10WriteFrameE(_self, `${_last}${finish}`);
      return _self;
    }
  }
}
function _M0FPC15debug8surround(start, finish, r) {
  return _M0FPC15debug11with__lines(r, (lines) => _M0FPC15debug15surround__lines(start, finish, lines));
}
function _M0MPC15debug7Content8no__wrap(c) {
  return new _M0TPC15debug13ContentParens(c.size, c.lines);
}
function _M0FPC15debug6parens(r) {
  return new _M0TPC15debug7Content(r.size, r.lines, true);
}
function _M0FPC15debug10no__parens(r) {
  return new _M0TPC15debug7Content(r.size, r.lines, false);
}
function _M0FPC15debug14compact__lines(lines) {
  if (lines.length === 0) {
    return [];
  } else {
    if (lines.length === 1) {
      const _x = lines[0];
      return [_x];
    } else {
      const _first = lines[0];
      const _last = lines[lines.length - 1 | 0];
      const _x_end = lines.length - 1 | 0;
      if (_first === "[" && _last === "]" || _first === "{" && _last === "}") {
        const parts = [];
        const _bind$2 = _x_end - 1 | 0;
        let _tmp = 0;
        while (true) {
          const _ = _tmp;
          if (_ < _bind$2) {
            const m = lines[1 + _ | 0];
            const t = _M0MPC16string6String4trim(m, undefined);
            if (_M0IP016_24default__implPB2Eq10not__equalGRPC16string10StringViewE(t, new _M0TPC16string10StringView(_M0FPC15debug14compact__linesN7_2abindS1134, 0, _M0FPC15debug14compact__linesN7_2abindS1134.length))) {
              _M0MPC15array5Array4pushGRPC14json10WriteFrameE(parts, t);
            }
            _tmp = _ + 1 | 0;
            continue;
          } else {
            break;
          }
        }
        const joined0 = _M0MPC15array5Array4joinGRPC16string10StringViewE(parts, new _M0TPC16string10StringView(_M0FPC15debug14compact__linesN7_2abindS1147, 0, _M0FPC15debug14compact__linesN7_2abindS1147.length));
        const _bind$3 = _M0MPC16string6String13strip__suffix(joined0, new _M0TPC16string10StringView(_M0FPC15debug14compact__linesN7_2abindS1141, 0, _M0FPC15debug14compact__linesN7_2abindS1141.length));
        let joined;
        if (_bind$3 === undefined) {
          joined = new _M0TPC16string10StringView(joined0, 0, joined0.length);
        } else {
          const _Some = _bind$3;
          joined = _Some;
        }
        if (_first === "{") {
          const s1 = _M0MPC16option6Option10unwrap__orGRP217zhengxin_2dcoding4scss9SassValueE(_M0MPC16string10StringView13strip__prefix(joined, new _M0TPC16string10StringView(_M0FPC15debug14compact__linesN7_2abindS1139, 0, _M0FPC15debug14compact__linesN7_2abindS1139.length)), joined);
          const inner = _M0MPC16option6Option10unwrap__orGRP217zhengxin_2dcoding4scss9SassValueE(_M0MPC16string10StringView13strip__suffix(s1, new _M0TPC16string10StringView(_M0FPC15debug14compact__linesN7_2abindS1138, 0, _M0FPC15debug14compact__linesN7_2abindS1138.length)), s1);
          if (_M0IPC16string10StringViewPB2Eq5equal(inner, new _M0TPC16string10StringView(_M0FPC15debug14compact__linesN7_2abindS1136, 0, _M0FPC15debug14compact__linesN7_2abindS1136.length))) {
            return ["{}"];
          } else {
            const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(4);
            _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "{ ");
            _M0MPB13StringBuilder13write__objectGRPC16string10StringViewE(_string_builder, inner);
            _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, " }");
            return [_M0MPB13StringBuilder10to__string(_string_builder)];
          }
        } else {
          const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(2);
          _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "[");
          _M0MPB13StringBuilder13write__objectGRPC16string10StringViewE(_string_builder, joined);
          _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "]");
          return [_M0MPB13StringBuilder10to__string(_string_builder)];
        }
      } else {
        if (_M0MPC16string6String11has__suffix(_first, new _M0TPC16string10StringView(_M0FPC15debug14compact__linesN7_2abindS1148, 0, _M0FPC15debug14compact__linesN7_2abindS1148.length)) && _last === ")") {
          const parts = [];
          const _bind$2 = _x_end - 1 | 0;
          let _tmp = 0;
          while (true) {
            const _ = _tmp;
            if (_ < _bind$2) {
              const m = lines[1 + _ | 0];
              const t = _M0MPC16string6String4trim(m, undefined);
              if (_M0IP016_24default__implPB2Eq10not__equalGRPC16string10StringViewE(t, new _M0TPC16string10StringView(_M0FPC15debug14compact__linesN7_2abindS1152, 0, _M0FPC15debug14compact__linesN7_2abindS1152.length))) {
                _M0MPC15array5Array4pushGRPC14json10WriteFrameE(parts, t);
              }
              _tmp = _ + 1 | 0;
              continue;
            } else {
              break;
            }
          }
          const joined0 = _M0MPC15array5Array4joinGRPC16string10StringViewE(parts, new _M0TPC16string10StringView(_M0FPC15debug14compact__linesN7_2abindS1161, 0, _M0FPC15debug14compact__linesN7_2abindS1161.length));
          const _bind$3 = _M0MPC16string6String13strip__suffix(joined0, new _M0TPC16string10StringView(_M0FPC15debug14compact__linesN7_2abindS1155, 0, _M0FPC15debug14compact__linesN7_2abindS1155.length));
          let joined;
          if (_bind$3 === undefined) {
            joined = new _M0TPC16string10StringView(joined0, 0, joined0.length);
          } else {
            const _Some = _bind$3;
            joined = _Some;
          }
          const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(0);
          _M0MPB13StringBuilder13write__objectGsE(_string_builder, _first);
          _M0MPB13StringBuilder13write__objectGRPC16string10StringViewE(_string_builder, joined);
          _M0MPB13StringBuilder13write__objectGsE(_string_builder, _last);
          return [_M0MPB13StringBuilder10to__string(_string_builder)];
        } else {
          const parts = [new _M0TPC16string10StringView(_first, 0, _first.length)];
          const _bind$2 = _x_end - 1 | 0;
          let _tmp = 0;
          while (true) {
            const _ = _tmp;
            if (_ < _bind$2) {
              const m = lines[1 + _ | 0];
              _M0MPC15array5Array4pushGRPC14json10WriteFrameE(parts, _M0MPC16string6String4trim(m, undefined));
              _tmp = _ + 1 | 0;
              continue;
            } else {
              break;
            }
          }
          _M0MPC15array5Array4pushGRPC14json10WriteFrameE(parts, _M0MPC16string6String4trim(_last, undefined));
          return [_M0MPC15array5Array4joinGRPC16string10StringViewE(parts, new _M0TPC16string10StringView(_M0FPC15debug14compact__linesN7_2abindS1166, 0, _M0FPC15debug14compact__linesN7_2abindS1166.length))];
        }
      }
    }
  }
}
function _M0MPC15debug7Content7compact(r) {
  return _M0MPC15debug7Content20with__lines__content(r, _M0FPC15debug14compact__lines);
}
function _M0FPC15debug6indent(prefix, r) {
  return _M0FPC15debug11with__lines(r, (lines) => _M0MPC15array5Array3mapGssE(lines, (line) => `${prefix}${line}`));
}
function _M0FPC15debug14indent__spaces(n, r) {
  return _M0FPC15debug6indent(_M0MPC16string6String6repeat(" ", n), r);
}
function _M0FPC15debug19bracket__seq__lines(open, close, indent_by, contents) {
  if (contents.length === 0) {
    return [`${open}${close}`];
  } else {
    if (contents.length === 1) {
      const _item = contents[0];
      if (_item.length > 1) {
        const lines = _M0FPC15debug14indent__spaces(indent_by, new _M0TPC15debug13ContentParens(0, _item)).lines;
        if (!_M0MPC15array5Array9is__emptyGRPB4JsonE(lines)) {
          const last_i = lines.length - 1 | 0;
          _M0MPC15array5Array3setGURP217zhengxin_2dcoding4scss9SassValueRP217zhengxin_2dcoding4scss9SassValueEE(lines, last_i, `${_M0MPC15array5Array2atGRPB4JsonE(lines, last_i)},`);
        }
        const _self = [];
        _M0MPC15array5Array4pushGRPC14json10WriteFrameE(_self, open);
        _M0MPC15array5Array10push__iterGsE(_self, _M0MPC15array5Array4iterGsE(lines));
        _M0MPC15array5Array4pushGRPC14json10WriteFrameE(_self, close);
        return _self;
      } else {
        const inner = _M0FPC15debug14compact__lines(_item);
        if (inner.length === 0) {
          return [`${open}${close}`];
        } else {
          if (inner.length === 1) {
            const _x = inner[0];
            if (open === "{" && close === "}") {
              const inner$2 = _M0MPC16string6String4trim(_x, undefined);
              if (_M0IPC16string10StringViewPB2Eq5equal(inner$2, new _M0TPC16string10StringView(_M0FPC15debug19bracket__seq__linesN7_2abindS1175, 0, _M0FPC15debug19bracket__seq__linesN7_2abindS1175.length))) {
                return ["{}"];
              } else {
                const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(4);
                _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "{ ");
                _M0MPB13StringBuilder13write__objectGRPC16string10StringViewE(_string_builder, inner$2);
                _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, " }");
                return [_M0MPB13StringBuilder10to__string(_string_builder)];
              }
            } else {
              return [`${open}${_x}${close}`];
            }
          } else {
            const _self = [];
            _M0MPC15array5Array4pushGRPC14json10WriteFrameE(_self, open);
            _M0MPC15array5Array10push__iterGsE(_self, _M0MPC15array5Array4iterGsE(_M0FPC15debug14indent__spaces(indent_by, new _M0TPC15debug13ContentParens(0, _item)).lines));
            _M0MPC15array5Array4pushGRPC14json10WriteFrameE(_self, close);
            return _self;
          }
        }
      }
    } else {
      const out = [open];
      const _bind$2 = contents.length;
      let _tmp = 0;
      while (true) {
        const _ = _tmp;
        if (_ < _bind$2) {
          const item = contents[_];
          const item_lines = _M0MPC15array5Array6filterGsE(item, (line) => _M0IP016_24default__implPB2Eq10not__equalGsE(line, ""));
          if (item_lines.length === 0) {
          } else {
            if (item_lines.length === 1) {
              const _x = item_lines[0];
              _M0MPC15array5Array4pushGRPC14json10WriteFrameE(out, `${_M0MPC16string6String6repeat(" ", indent_by)}${_x},`);
            } else {
              const _first = item_lines[0];
              const _last = item_lines[item_lines.length - 1 | 0];
              const _x_end = item_lines.length - 1 | 0;
              _M0MPC15array5Array4pushGRPC14json10WriteFrameE(out, `${_M0MPC16string6String6repeat(" ", indent_by)}${_first}`);
              const _bind$3 = _x_end - 1 | 0;
              let _tmp$2 = 0;
              while (true) {
                const _$2 = _tmp$2;
                if (_$2 < _bind$3) {
                  const mid = item_lines[1 + _$2 | 0];
                  _M0MPC15array5Array4pushGRPC14json10WriteFrameE(out, `${_M0MPC16string6String6repeat(" ", indent_by)}${mid}`);
                  _tmp$2 = _$2 + 1 | 0;
                  continue;
                } else {
                  break;
                }
              }
              _M0MPC15array5Array4pushGRPC14json10WriteFrameE(out, `${_M0MPC16string6String6repeat(" ", indent_by)}${_last},`);
            }
          }
          _tmp = _ + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      _M0MPC15array5Array4pushGRPC14json10WriteFrameE(out, close);
      return out;
    }
  }
}
function _M0FPC15debug17comma__seq__lines(begin, end, contents) {
  if (begin === "[" && end === "]") {
    return _M0FPC15debug19bracket__seq__lines("[", "]", 2, contents);
  } else {
    if (begin === "{" && end === "}") {
      return _M0FPC15debug19bracket__seq__lines("{", "}", 2, contents);
    } else {
      if (begin === "" && end === "") {
        let lines;
        if (contents.length === 0) {
          lines = [`${begin}${end}`];
        } else {
          if (contents.length === 1) {
            const _item = contents[0];
            lines = _M0FPC15debug15surround__lines(begin, end, _item);
          } else {
            const _first = contents[0];
            const _last = contents[contents.length - 1 | 0];
            const _x_end = contents.length - 1 | 0;
            const space = _M0MPC16string6String6repeat(" ", begin.length);
            const middle_lines = [];
            const _bind$2 = _x_end - 1 | 0;
            let _tmp = 0;
            while (true) {
              const _ = _tmp;
              if (_ < _bind$2) {
                const item = contents[1 + _ | 0];
                const _bind$3 = _M0FPC15debug15surround__lines(space, ",", item);
                _M0MPC15array5Array6appendGRP217zhengxin_2dcoding4scss7CssRuleE(middle_lines, new _M0TPB9ArrayViewGsE(_bind$3, 0, _bind$3.length));
                _tmp = _ + 1 | 0;
                continue;
              } else {
                break;
              }
            }
            const _self = [];
            _M0MPC15array5Array10push__iterGsE(_self, _M0MPC15array5Array4iterGsE(_M0FPC15debug15surround__lines(begin, ",", _first)));
            _M0MPC15array5Array10push__iterGsE(_self, _M0MPC15array5Array4iterGsE(middle_lines));
            _M0MPC15array5Array10push__iterGsE(_self, _M0MPC15array5Array4iterGsE(_M0FPC15debug15surround__lines(space, end, _last)));
            lines = _self;
          }
        }
        return _M0MPC15array5Array6filterGsE(lines, (line) => _M0IP016_24default__implPB2Eq10not__equalGsE(line, ""));
      } else {
        if (contents.length === 0) {
          return [`${begin}${end}`];
        } else {
          if (contents.length === 1) {
            const _item = contents[0];
            const item_lines = _M0MPC15array5Array6filterGsE(_item, (line) => _M0IP016_24default__implPB2Eq10not__equalGsE(line, ""));
            if (item_lines.length === 0) {
              return [`${begin}${end}`];
            } else {
              if (item_lines.length === 1) {
                const _x = item_lines[0];
                return [`${begin}${_x}${end}`];
              } else {
                const _last_line = item_lines[item_lines.length - 1 | 0];
                const _x = new _M0TPB9ArrayViewGsE(item_lines, 0, item_lines.length - 1 | 0);
                const _self = [];
                _M0MPC15array5Array4pushGRPC14json10WriteFrameE(_self, begin);
                _M0MPC15array5Array10push__iterGsE(_self, _M0MPB4Iter4iterGsE(_M0MPB4Iter3mapGRPC16string10StringViewsE(_M0MPC15array9ArrayView4iterGsE(_x), (line) => `${_M0MPC16string6String6repeat(" ", 2)}${line}`)));
                _M0MPC15array5Array4pushGRPC14json10WriteFrameE(_self, `${_M0MPC16string6String6repeat(" ", 2)}${_last_line},`);
                _M0MPC15array5Array4pushGRPC14json10WriteFrameE(_self, end);
                return _self;
              }
            }
          } else {
            const out = [begin];
            const _bind$2 = contents.length;
            let _tmp = 0;
            while (true) {
              const _ = _tmp;
              if (_ < _bind$2) {
                const item = contents[_];
                const item_lines = _M0MPC15array5Array6filterGsE(item, (line) => _M0IP016_24default__implPB2Eq10not__equalGsE(line, ""));
                if (item_lines.length === 0) {
                } else {
                  if (item_lines.length === 1) {
                    const _x = item_lines[0];
                    _M0MPC15array5Array4pushGRPC14json10WriteFrameE(out, `${_M0MPC16string6String6repeat(" ", 2)}${_x},`);
                  } else {
                    const _first = item_lines[0];
                    const _last = item_lines[item_lines.length - 1 | 0];
                    const _x_end = item_lines.length - 1 | 0;
                    _M0MPC15array5Array4pushGRPC14json10WriteFrameE(out, `${_M0MPC16string6String6repeat(" ", 2)}${_first}`);
                    const _bind$3 = _x_end - 1 | 0;
                    let _tmp$2 = 0;
                    while (true) {
                      const _$2 = _tmp$2;
                      if (_$2 < _bind$3) {
                        const mid = item_lines[1 + _$2 | 0];
                        _M0MPC15array5Array4pushGRPC14json10WriteFrameE(out, `${_M0MPC16string6String6repeat(" ", 2)}${mid}`);
                        _tmp$2 = _$2 + 1 | 0;
                        continue;
                      } else {
                        break;
                      }
                    }
                    _M0MPC15array5Array4pushGRPC14json10WriteFrameE(out, `${_M0MPC16string6String6repeat(" ", 2)}${_last},`);
                  }
                }
                _tmp = _ + 1 | 0;
                continue;
              } else {
                break;
              }
            }
            _M0MPC15array5Array4pushGRPC14json10WriteFrameE(out, end);
            return out;
          }
        }
      }
    }
  }
}
function _M0FPC15debug10comma__seq(begin, end, contents) {
  const _bind$2 = contents.length;
  let _tmp = 0;
  let _tmp$2 = 0;
  while (true) {
    const _ = _tmp;
    const size = _tmp$2;
    if (_ < _bind$2) {
      const c = contents[_];
      _tmp = _ + 1 | 0;
      _tmp$2 = size + c.size | 0;
      continue;
    } else {
      return new _M0TPC15debug7Content(size, _M0FPC15debug17comma__seq__lines(begin, end, _M0MPC15array5Array3mapGRPC15debug13ContentParensRPB5ArrayGsEE(contents, (c) => c.lines)), false);
    }
  }
}
function _M0FPC15debug14print__content(r) {
  return _M0MPC15array5Array4joinGsE(r.lines, new _M0TPC16string10StringView(_M0FPC15debug14print__contentN7_2abindS1244, 0, _M0FPC15debug14print__contentN7_2abindS1244.length));
}
function _M0FPC15debug14with__resizing(_root_size, threshold, rendered_children) {
  if (threshold <= 0) {
    return rendered_children;
  } else {
    const compacted = _M0MPC15debug7Content7compact(rendered_children);
    return _M0MPC15array5Array3allGsE(compacted.lines, (line) => line.length <= threshold) ? compacted : rendered_children;
  }
}
function _M0MPC15debug4Repr17info__adds__depth(info) {
  let _tmp;
  switch (info.$tag) {
    case 12: {
      _tmp = true;
      break;
    }
    case 13: {
      _tmp = true;
      break;
    }
    case 16: {
      _tmp = true;
      break;
    }
    default: {
      _tmp = false;
    }
  }
  return !_tmp;
}
function _M0MPC15debug4Repr19prune__info_2einnerN2goS259(replacement, d, node) {
  const children = _M0MPC15debug4Repr8children(node);
  if (d <= 0) {
    return _M0MPC15array5Array9is__emptyGRPB4JsonE(children) ? node : !_M0MPC15debug4Repr17info__adds__depth(node) ? _M0MPC15debug4Repr14with__children(node, _M0MPC15array5Array3mapGRPC15debug4ReprRPC15debug4ReprE(children, (child) => _M0MPC15debug4Repr19prune__info_2einnerN2goS259(replacement, d, child))) : replacement;
  } else {
    if (_M0MPC15array5Array9is__emptyGRPB4JsonE(children)) {
      return node;
    } else {
      const next_depth = _M0MPC15debug4Repr17info__adds__depth(node) ? d - 1 | 0 : d;
      return _M0MPC15debug4Repr14with__children(node, _M0MPC15array5Array3mapGRPC15debug4ReprRPC15debug4ReprE(children, (child) => _M0MPC15debug4Repr19prune__info_2einnerN2goS259(replacement, next_depth, child)));
    }
  }
}
function _M0MPC15debug4Repr19prune__info_2einner(self, replacement, max_depth) {
  if (max_depth === undefined) {
    return self;
  } else {
    const _Some = max_depth;
    const _depth = _Some;
    return _M0MPC15debug4Repr19prune__info_2einnerN2goS259(replacement, _M0MPC13int3Int3max(1, _depth), self);
  }
}
function _M0MPC15debug4Repr11prune__info(self, replacement$46$opt, max_depth) {
  let replacement;
  if (replacement$46$opt === undefined) {
    replacement = _M0MPC15debug4Repr7omitted();
  } else {
    const _Some = replacement$46$opt;
    replacement = _Some;
  }
  return _M0MPC15debug4Repr19prune__info_2einner(self, replacement, max_depth);
}
function _M0FPC15debug10info__size(info) {
  switch (info.$tag) {
    case 0: {
      return 1;
    }
    case 1: {
      return 1;
    }
    case 2: {
      return 1;
    }
    case 3: {
      return 1;
    }
    case 4: {
      return 1;
    }
    case 5: {
      return 1;
    }
    case 6: {
      const _StringLit = info;
      const _s = _StringLit._0;
      return _s.length <= 15 ? 1 : 2;
    }
    case 7: {
      return 1;
    }
    case 8: {
      return 1;
    }
    case 9: {
      return 2;
    }
    case 12: {
      const _RecordField = info;
      const _name = _RecordField._0;
      return _name.length <= 15 ? 0 : 1;
    }
    case 13: {
      const _EnumLabeledArg = info;
      const _name$2 = _EnumLabeledArg._0;
      return _name$2.length <= 15 ? 0 : 1;
    }
    case 10: {
      const _Enum = info;
      const _name$3 = _Enum._0;
      return _name$3.length <= 15 ? 1 : 2;
    }
    case 14: {
      const _Opaque = info;
      const _name$4 = _Opaque._0;
      return _name$4.length <= 15 ? 1 : 2;
    }
    case 15: {
      const _Literal = info;
      const _s$2 = _Literal._0;
      return _s$2.length <= 15 ? 1 : 2;
    }
    case 11: {
      return 2;
    }
    case 16: {
      return 0;
    }
    default: {
      return 0;
    }
  }
}
function _M0FPC15debug17is__unquoted__key(key) {
  let rest;
  _L: {
    if (key.length >= 1) {
      const _x = key.charCodeAt(0);
      if (_x >= 97 && _x <= 122) {
        const _x$2 = new _M0TPC16string10StringView(key, 1, key.length);
        rest = _x$2;
        break _L;
      } else {
        if (_x === 95) {
          const _x$2 = new _M0TPC16string10StringView(key, 1, key.length);
          rest = _x$2;
          break _L;
        } else {
          return false;
        }
      }
    } else {
      return false;
    }
  }
  return _M0MPC16string10StringView3all(rest, (c) => c >= 97 && c <= 122 ? true : c >= 65 && c <= 90 ? true : c >= 48 && c <= 57 ? true : c === 95);
}
function _M0FPC15debug20pretty__print__label(name) {
  return _M0FPC15debug17is__unquoted__key(name) ? name : _M0MPC16string6String14escape_2einner(name, true);
}
function _M0MPC15debug4Repr13pretty__print(self, children) {
  switch (self.$tag) {
    case 0: {
      return _M0FPC15debug10comma__seq("(", ")", []);
    }
    case 1: {
      const _Integer = self;
      const _s = _Integer._0;
      let _tmp;
      if (_s.length >= 1) {
        const _x = _s.charCodeAt(0);
        if (_x === 45) {
          _tmp = 1;
        } else {
          _tmp = 0;
        }
      } else {
        _tmp = 0;
      }
      return _M0FPC15debug10no__parens(_M0FPC15debug15content__parens(_tmp, [_s]));
    }
    case 2: {
      const _DoubleLit = self;
      const _x = _DoubleLit._0;
      const needs_parens = 1 / _x < 0;
      return _M0FPC15debug12leaf_2einner(String(_x), needs_parens);
    }
    case 3: {
      const _FloatLit = self;
      const _x$2 = _FloatLit._0;
      const needs_parens$2 = Math.fround(Math.fround(1) / _x$2) < Math.fround(0);
      return _M0FPC15debug12leaf_2einner(_M0IPC15float5FloatPB4Show10to__string(_x$2), needs_parens$2);
    }
    case 4: {
      const _BoolLit = self;
      const _x$3 = _BoolLit._0;
      return _M0FPC15debug12leaf_2einner(_M0IPC14bool4BoolPB4Show10to__string(_x$3), false);
    }
    case 5: {
      const _CharLit = self;
      const _x$4 = _CharLit._0;
      return _M0FPC15debug12leaf_2einner(_M0MPC14char4Char14escape_2einner(_x$4, true), false);
    }
    case 6: {
      const _StringLit = self;
      const _x$5 = _StringLit._0;
      return _M0FPC15debug10no__parens(_M0FPC15debug8verbatim(_M0MPC16string6String14escape_2einner(_x$5, true)));
    }
    case 7: {
      return _M0FPC15debug10comma__seq("(", ")", _M0MPC15array5Array3mapGRPC15debug7ContentRPC15debug13ContentParensE(children, (x) => _M0MPC15debug7Content8no__wrap(x)));
    }
    case 10: {
      const _Enum = self;
      const _name = _Enum._0;
      return children.length === 0 ? _M0FPC15debug10no__parens(_M0FPC15debug8verbatim(_name)) : _name === "Tuple" ? _M0FPC15debug10comma__seq("(", ")", _M0MPC15array5Array3mapGRPC15debug7ContentRPC15debug13ContentParensE(children, (x) => _M0MPC15debug7Content8no__wrap(x))) : _M0FPC15debug10comma__seq(`${_name}(`, ")", _M0MPC15array5Array3mapGRPC15debug7ContentRPC15debug13ContentParensE(children, (x) => _M0MPC15debug7Content8no__wrap(x)));
    }
    case 8: {
      return _M0FPC15debug10comma__seq("[", "]", _M0MPC15array5Array3mapGRPC15debug7ContentRPC15debug13ContentParensE(children, (x) => _M0MPC15debug7Content8no__wrap(x)));
    }
    case 9: {
      return _M0FPC15debug10comma__seq("{", "}", _M0MPC15array5Array3mapGRPC15debug7ContentRPC15debug13ContentParensE(children, (x) => _M0MPC15debug7Content8no__wrap(x)));
    }
    case 14: {
      const _Opaque = self;
      const _name$2 = _Opaque._0;
      if (_M0MPC15array5Array9is__emptyGRPB4JsonE(children)) {
        return _M0FPC15debug10no__parens(_M0FPC15debug8surround("<", ">", _M0FPC15debug8verbatim(_name$2)));
      } else {
        const body = _M0IPC15debug13ContentParensPB3Add3add(_M0FPC15debug8verbatim(`${_name$2}:`), _M0FPC15debug6indent("  ", _M0MPC15debug7Content8no__wrap(_M0FPC15debug10comma__seq("", "", _M0MPC15array5Array3mapGRPC15debug7ContentRPC15debug13ContentParensE(children, (x) => _M0MPC15debug7Content8no__wrap(x))))));
        return _M0FPC15debug10no__parens(_M0FPC15debug8surround("<", ">", body));
      }
    }
    case 15: {
      const _Literal = self;
      const _str = _Literal._0;
      return _M0FPC15debug10no__parens(_M0FPC15debug8verbatim(_str));
    }
    case 11: {
      return _M0FPC15debug10comma__seq("{", "}", _M0MPC15array5Array3mapGRPC15debug7ContentRPC15debug13ContentParensE(children, (x) => _M0MPC15debug7Content8no__wrap(x)));
    }
    case 16: {
      if (children.length === 2) {
        const _key = children[0];
        const _val = children[1];
        const k = _M0MPC15debug7Content8no__wrap(_key);
        const v = _M0MPC15debug7Content8no__wrap(_val);
        const _bind$2 = v.lines;
        if (_bind$2.length === 0) {
          return _M0FPC15debug14empty__content();
        } else {
          if (_bind$2.length === 1) {
            const _one = _bind$2[0];
            return _M0FPC15debug10no__parens(_M0FPC15debug15content__parens((1 + k.size | 0) + v.size | 0, [`${_M0FPC15debug14print__content(_M0FPC15debug8surround("", ": ", k))}${_one}`]));
          } else {
            const _first = _bind$2[0];
            const _x$6 = new _M0TPB9ArrayViewGsE(_bind$2, 1, _bind$2.length);
            const head = `${_M0FPC15debug14print__content(_M0FPC15debug8surround("", ": ", k))}${_first}`;
            const _tmp$2 = (1 + k.size | 0) + v.size | 0;
            const _self = [];
            _M0MPC15array5Array4pushGRPC14json10WriteFrameE(_self, head);
            _M0MPC15array5Array10push__iterGsE(_self, _M0MPC15array9ArrayView4iterGsE(_x$6));
            return _M0FPC15debug10no__parens(_M0FPC15debug15content__parens(_tmp$2, _self));
          }
        }
      } else {
        return _M0FPC15debug14empty__content();
      }
    }
    case 13: {
      const _EnumLabeledArg = self;
      const _name$3 = _EnumLabeledArg._0;
      if (children.length === 1) {
        const _val = children[0];
        const _bind$2 = _val.lines;
        if (_bind$2.length === 0) {
          return _M0FPC15debug14empty__content();
        } else {
          if (_bind$2.length === 1) {
            const _first = _bind$2[0];
            return _M0FPC15debug10no__parens(_M0FPC15debug15content__parens(1 + _val.size | 0, [`${_name$3}=${_first}`]));
          } else {
            const _first = _bind$2[0];
            const _x$6 = new _M0TPB9ArrayViewGsE(_bind$2, 1, _bind$2.length);
            const _tmp$2 = 1 + _val.size | 0;
            const _self = [];
            _M0MPC15array5Array4pushGRPC14json10WriteFrameE(_self, `${_name$3}=${_first}`);
            _M0MPC15array5Array10push__iterGsE(_self, _M0MPC15array9ArrayView4iterGsE(_x$6));
            return _M0FPC15debug10no__parens(_M0FPC15debug15content__parens(_tmp$2, _self));
          }
        }
      } else {
        return _M0FPC15debug14empty__content();
      }
    }
    case 12: {
      const _RecordField = self;
      const _name$4 = _RecordField._0;
      if (children.length === 1) {
        const _val = children[0];
        const label = _M0FPC15debug20pretty__print__label(_name$4);
        const v = _M0MPC15debug7Content8no__wrap(_val);
        const _bind$2 = v.lines;
        if (_bind$2.length === 0) {
          return _M0FPC15debug14empty__content();
        } else {
          if (_bind$2.length === 1) {
            const _one = _bind$2[0];
            return _M0FPC15debug10no__parens(_M0FPC15debug15content__parens(1 + v.size | 0, [`${label}: ${_one}`]));
          } else {
            const _first = _bind$2[0];
            const _x$6 = new _M0TPB9ArrayViewGsE(_bind$2, 1, _bind$2.length);
            const _tmp$2 = 1 + v.size | 0;
            const _self = [];
            _M0MPC15array5Array4pushGRPC14json10WriteFrameE(_self, `${label}: ${_first}`);
            _M0MPC15array5Array10push__iterGsE(_self, _M0MPC15array9ArrayView4iterGsE(_x$6));
            return _M0FPC15debug10no__parens(_M0FPC15debug15content__parens(_tmp$2, _self));
          }
        }
      } else {
        return _M0FPC15debug14empty__content();
      }
    }
    default: {
      return _M0FPC15debug6parens(_M0FPC15debug8verbatim("..."));
    }
  }
}
function _M0MPC15debug4Repr12render__repr(self, threshold) {
  const label = _M0MPC15debug4Repr7shallow(self);
  const children = _M0MPC15array5Array3mapGRPC15debug4ReprRPC15debug7ContentE(_M0MPC15debug4Repr8children(self), (child) => _M0MPC15debug4Repr12render__repr(child, threshold));
  return _M0FPC15debug14with__resizing(_M0FPC15debug10info__size(label), threshold, _M0MPC15debug4Repr13pretty__print(label, children));
}
function _M0FPC15debug6render(r, max_depth) {
  const max_depth$2 = max_depth === undefined ? _M0FPC15debug6renderN6constrS1705 : max_depth;
  const info = _M0MPC15debug4Repr11prune__info(r, undefined, max_depth$2);
  return _M0FPC15debug14print__content(_M0MPC15debug7Content8no__wrap(_M0MPC15debug4Repr12render__repr(info, 70)));
}
function _M0IPC15debug4ReprPB4Show6output(self, logger) {
  logger.method_table.method_0(logger.self, _M0FPC15debug6render(self, undefined));
}
function _M0IPC13int3IntPC15debug5Debug8to__repr(self) {
  return _M0MPC15debug4Repr7integer(_M0MPC13int3Int18to__string_2einner(self, 10));
}
function _M0IPC14char4CharPC15debug5Debug8to__repr(self) {
  return _M0MPC15debug4Repr4char(self);
}
function _M0IPC16string6StringPC15debug5Debug8to__repr(self) {
  return _M0MPC15debug4Repr6string(self);
}
function _M0IPB7FailurePC15debug5Debug8to__reprGRPB7FailureE(self) {
  const _Failure = self;
  const _msg = _Failure._0;
  return _M0MPC15debug4Repr4ctor("Failure", [{ _0: undefined, _1: _M0MPC15debug4Repr6string(_msg) }]);
}
function _M0MPC13ref3Ref3RefGiE(x) {
  return new _M0TPC13ref3RefGiE(x);
}
function _M0MPC13ref3Ref3RefGORP217zhengxin_2dcoding4scss9SassValueE(x) {
  return new _M0TPC13ref3RefGORP217zhengxin_2dcoding4scss9SassValueE(x);
}
function _M0IPC15error5ErrorPC15debug5Debug8to__repr(self) {
  return _M0FP15Error8to__repr(self);
}
function _M0FPC28internal7strconv9base__errGUiRPC16string10StringViewbEE() {
  return new _M0DTPC16result6ResultGUiRPC16string10StringViewbERPB7FailureE3Err(new _M0DTPC15error5Error48moonbitlang_2fcore_2fbuiltin_2eFailure_2eFailure(_M0FPC28internal7strconv14base__err__str));
}
function _M0FPC28internal7strconv25check__and__consume__base(view, base) {
  if (base === 0) {
    _L: {
      let rest;
      _L$2: {
        let rest$2;
        _L$3: {
          let rest$3;
          _L$4: {
            if ((view.end - view.start | 0) >= 2) {
              const _x = view.str.charCodeAt(view.start);
              if (_x === 48) {
                const _x$2 = view.str.charCodeAt(view.start + 1 | 0);
                switch (_x$2) {
                  case 120: {
                    const _x$3 = new _M0TPC16string10StringView(view.str, view.start + 2 | 0, view.end);
                    rest$3 = _x$3;
                    break _L$4;
                  }
                  case 88: {
                    const _x$4 = new _M0TPC16string10StringView(view.str, view.start + 2 | 0, view.end);
                    rest$3 = _x$4;
                    break _L$4;
                  }
                  case 111: {
                    const _x$5 = new _M0TPC16string10StringView(view.str, view.start + 2 | 0, view.end);
                    rest$2 = _x$5;
                    break _L$3;
                  }
                  case 79: {
                    const _x$6 = new _M0TPC16string10StringView(view.str, view.start + 2 | 0, view.end);
                    rest$2 = _x$6;
                    break _L$3;
                  }
                  case 98: {
                    const _x$7 = new _M0TPC16string10StringView(view.str, view.start + 2 | 0, view.end);
                    rest = _x$7;
                    break _L$2;
                  }
                  case 66: {
                    const _x$8 = new _M0TPC16string10StringView(view.str, view.start + 2 | 0, view.end);
                    rest = _x$8;
                    break _L$2;
                  }
                  default: {
                    break _L;
                  }
                }
              } else {
                break _L;
              }
            } else {
              break _L;
            }
          }
          return new _M0DTPC16result6ResultGUiRPC16string10StringViewbERPC15error5ErrorE2Ok({ _0: 16, _1: rest$3, _2: true });
        }
        return new _M0DTPC16result6ResultGUiRPC16string10StringViewbERPC15error5ErrorE2Ok({ _0: 8, _1: rest$2, _2: true });
      }
      return new _M0DTPC16result6ResultGUiRPC16string10StringViewbERPC15error5ErrorE2Ok({ _0: 2, _1: rest, _2: true });
    }
    return new _M0DTPC16result6ResultGUiRPC16string10StringViewbERPC15error5ErrorE2Ok({ _0: 10, _1: view, _2: false });
  } else {
    _L: {
      let rest;
      _L$2: {
        let rest$2;
        _L$3: {
          let rest$3;
          _L$4: {
            if ((view.end - view.start | 0) >= 2) {
              const _x = view.str.charCodeAt(view.start);
              if (_x === 48) {
                const _x$2 = view.str.charCodeAt(view.start + 1 | 0);
                switch (_x$2) {
                  case 120: {
                    const _x$3 = new _M0TPC16string10StringView(view.str, view.start + 2 | 0, view.end);
                    if (base === 16) {
                      rest$3 = _x$3;
                      break _L$4;
                    } else {
                      break _L;
                    }
                  }
                  case 88: {
                    const _x$4 = new _M0TPC16string10StringView(view.str, view.start + 2 | 0, view.end);
                    if (base === 16) {
                      rest$3 = _x$4;
                      break _L$4;
                    } else {
                      break _L;
                    }
                  }
                  case 111: {
                    const _x$5 = new _M0TPC16string10StringView(view.str, view.start + 2 | 0, view.end);
                    if (base === 8) {
                      rest$2 = _x$5;
                      break _L$3;
                    } else {
                      break _L;
                    }
                  }
                  case 79: {
                    const _x$6 = new _M0TPC16string10StringView(view.str, view.start + 2 | 0, view.end);
                    if (base === 8) {
                      rest$2 = _x$6;
                      break _L$3;
                    } else {
                      break _L;
                    }
                  }
                  case 98: {
                    const _x$7 = new _M0TPC16string10StringView(view.str, view.start + 2 | 0, view.end);
                    if (base === 2) {
                      rest = _x$7;
                      break _L$2;
                    } else {
                      break _L;
                    }
                  }
                  case 66: {
                    const _x$8 = new _M0TPC16string10StringView(view.str, view.start + 2 | 0, view.end);
                    if (base === 2) {
                      rest = _x$8;
                      break _L$2;
                    } else {
                      break _L;
                    }
                  }
                  default: {
                    break _L;
                  }
                }
              } else {
                break _L;
              }
            } else {
              break _L;
            }
          }
          return new _M0DTPC16result6ResultGUiRPC16string10StringViewbERPC15error5ErrorE2Ok({ _0: 16, _1: rest$3, _2: true });
        }
        return new _M0DTPC16result6ResultGUiRPC16string10StringViewbERPC15error5ErrorE2Ok({ _0: 8, _1: rest$2, _2: true });
      }
      return new _M0DTPC16result6ResultGUiRPC16string10StringViewbERPC15error5ErrorE2Ok({ _0: 2, _1: rest, _2: true });
    }
    return base >= 2 && base <= 36 ? new _M0DTPC16result6ResultGUiRPC16string10StringViewbERPC15error5ErrorE2Ok({ _0: base, _1: view, _2: false }) : _M0FPC28internal7strconv9base__errGUiRPC16string10StringViewbEE();
  }
}
function _M0FPC28internal7strconv10range__errGuE() {
  return new _M0DTPC16result6ResultGuRPB7FailureE3Err(new _M0DTPC15error5Error48moonbitlang_2fcore_2fbuiltin_2eFailure_2eFailure(_M0FPC28internal7strconv15range__err__str));
}
function _M0FPC28internal7strconv11syntax__errGdE() {
  return new _M0DTPC16result6ResultGdRPB7FailureE3Err(new _M0DTPC15error5Error48moonbitlang_2fcore_2fbuiltin_2eFailure_2eFailure(_M0FPC28internal7strconv16syntax__err__str));
}
function _M0FPC28internal7strconv11syntax__errGORPC28internal7strconv6NumberE() {
  return new _M0DTPC16result6ResultGORPC28internal7strconv6NumberRPB7FailureE3Err(new _M0DTPC15error5Error48moonbitlang_2fcore_2fbuiltin_2eFailure_2eFailure(_M0FPC28internal7strconv16syntax__err__str));
}
function _M0FPC28internal7strconv11syntax__errGiE() {
  return new _M0DTPC16result6ResultGiRPB7FailureE3Err(new _M0DTPC15error5Error48moonbitlang_2fcore_2fbuiltin_2eFailure_2eFailure(_M0FPC28internal7strconv16syntax__err__str));
}
function _M0FPC28internal7strconv11syntax__errGuE() {
  return new _M0DTPC16result6ResultGuRPB7FailureE3Err(new _M0DTPC15error5Error48moonbitlang_2fcore_2fbuiltin_2eFailure_2eFailure(_M0FPC28internal7strconv16syntax__err__str));
}
function _M0FPC28internal7strconv11syntax__errGlE() {
  return new _M0DTPC16result6ResultGlRPB7FailureE3Err(new _M0DTPC15error5Error48moonbitlang_2fcore_2fbuiltin_2eFailure_2eFailure(_M0FPC28internal7strconv16syntax__err__str));
}
function _M0EPC16string10StringViewPC28internal7strconv12fold__digitsGmE(self, init, f) {
  let _tmp = self;
  let _tmp$2 = init;
  let _tmp$3 = 0;
  while (true) {
    const str = _tmp;
    const ret = _tmp$2;
    const len = _tmp$3;
    _L: {
      if ((str.end - str.start | 0) >= 1) {
        const _x = str.str.charCodeAt(str.start);
        if (_x >= 48 && _x <= 57) {
          const _x$2 = new _M0TPC16string10StringView(str.str, str.start + 1 | 0, str.end);
          _tmp = _x$2;
          _tmp$2 = f(_x - 48 | 0, ret);
          _tmp$3 = len + 1 | 0;
          continue;
        } else {
          if (_x === 95) {
            const _x$2 = new _M0TPC16string10StringView(str.str, str.start + 1 | 0, str.end);
            _tmp = _x$2;
            continue;
          } else {
            break _L;
          }
        }
      } else {
        break _L;
      }
    }
    return { _0: str, _1: ret, _2: len };
  }
}
function _M0FPC28internal7strconv13parse__digits(s, x) {
  return _M0EPC16string10StringViewPC28internal7strconv12fold__digitsGmE(s, x, (digit, acc) => BigInt.asUintN(64, BigInt.asUintN(64, acc * 10n) + BigInt.asUintN(64, BigInt(digit >>> 0))));
}
function _M0FPC28internal7strconv20try__parse__19digits(s, x) {
  let x$2 = x;
  let len = 0;
  let _tmp = s;
  while (true) {
    const s$2 = _tmp;
    let s$3;
    _L: {
      if ((s$2.end - s$2.start | 0) >= 1) {
        const _x = s$2.str.charCodeAt(s$2.start);
        if (_x >= 48 && _x <= 57) {
          const _x$2 = new _M0TPC16string10StringView(s$2.str, s$2.start + 1 | 0, s$2.end);
          if (BigInt.asUintN(64, x$2) < BigInt.asUintN(64, _M0FPC28internal7strconv17min__19digit__int)) {
            len = len + 1 | 0;
            x$2 = BigInt.asUintN(64, BigInt.asUintN(64, x$2 * 10n) + BigInt.asUintN(64, BigInt((_x - 48 | 0) >>> 0)));
            _tmp = _x$2;
            continue;
          } else {
            s$3 = s$2;
            break _L;
          }
        } else {
          if (_x === 95) {
            const _x$2 = new _M0TPC16string10StringView(s$2.str, s$2.start + 1 | 0, s$2.end);
            _tmp = _x$2;
            continue;
          } else {
            s$3 = s$2;
            break _L;
          }
        }
      } else {
        s$3 = s$2;
        break _L;
      }
    }
    return { _0: s$3, _1: x$2, _2: len };
  }
}
function _M0FPC28internal7strconv17parse__scientific(s) {
  let s$2 = s;
  let neg_exp = false;
  let rest;
  let ch;
  _L: {
    _L$2: {
      const _bind$2 = s$2;
      if ((_bind$2.end - _bind$2.start | 0) >= 1) {
        const _x = _bind$2.str.charCodeAt(_bind$2.start);
        switch (_x) {
          case 43: {
            const _x$2 = new _M0TPC16string10StringView(_bind$2.str, _bind$2.start + 1 | 0, _bind$2.end);
            rest = _x$2;
            ch = _x;
            break _L$2;
          }
          case 45: {
            const _x$3 = new _M0TPC16string10StringView(_bind$2.str, _bind$2.start + 1 | 0, _bind$2.end);
            rest = _x$3;
            ch = _x;
            break _L$2;
          }
        }
      }
      break _L;
    }
    neg_exp = ch === 45;
    s$2 = rest;
  }
  _L$2: {
    const _bind$2 = s$2;
    if ((_bind$2.end - _bind$2.start | 0) >= 1) {
      const _x = _bind$2.str.charCodeAt(_bind$2.start);
      if (_x >= 48 && _x <= 57) {
        const _bind$3 = _M0EPC16string10StringViewPC28internal7strconv12fold__digitsGmE(s$2, _M0FPC28internal7strconv17parse__scientificN8exp__numS354, (digit, exp_num) => BigInt.asIntN(64, exp_num) < BigInt.asIntN(64, 65536n) ? BigInt.asUintN(64, BigInt.asUintN(64, 10n * exp_num) + BigInt.asUintN(64, BigInt(digit))) : exp_num);
        const _s = _bind$3._0;
        const _exp_num = _bind$3._1;
        return neg_exp ? { _0: _s, _1: BigInt.asUintN(64, -_exp_num) } : { _0: _s, _1: _exp_num };
      } else {
        break _L$2;
      }
    } else {
      break _L$2;
    }
  }
  return undefined;
}
function _M0FPC28internal7strconv13parse__number(s) {
  let s$2;
  let negative;
  _L: {
    let rest;
    _L$2: {
      if ((s.end - s.start | 0) >= 1) {
        const _x = s.str.charCodeAt(s.start);
        switch (_x) {
          case 45: {
            const _x$2 = new _M0TPC16string10StringView(s.str, s.start + 1 | 0, s.end);
            s$2 = _x$2;
            negative = true;
            break _L;
          }
          case 43: {
            const _x$3 = new _M0TPC16string10StringView(s.str, s.start + 1 | 0, s.end);
            rest = _x$3;
            break _L$2;
          }
          default: {
            rest = s;
            break _L$2;
          }
        }
      } else {
        rest = s;
        break _L$2;
      }
    }
    s$2 = rest;
    negative = false;
    break _L;
  }
  if (_M0MPC16string10StringView9is__empty(s$2)) {
    return new _M0DTPC16result6ResultGORPC28internal7strconv6NumberRPC15error5ErrorE2Ok(undefined);
  }
  const _bind$2 = _M0FPC28internal7strconv13parse__digits(s$2, 0n);
  const _s = _bind$2._0;
  const _mantissa = _bind$2._1;
  const _consumed = _bind$2._2;
  let mantissa = _mantissa;
  let s$3 = _s;
  let n_digits = _consumed;
  let n_after_dot = 0;
  let exponent = 0n;
  const _bind$3 = s$3;
  if ((_bind$3.end - _bind$3.start | 0) >= 1) {
    const _x = _bind$3.str.charCodeAt(_bind$3.start);
    if (_x === 46) {
      const _x$2 = new _M0TPC16string10StringView(_bind$3.str, _bind$3.start + 1 | 0, _bind$3.end);
      s$3 = _x$2;
      const _bind$4 = _M0FPC28internal7strconv13parse__digits(s$3, mantissa);
      const _new_s = _bind$4._0;
      const _new_mantissa = _bind$4._1;
      const _consumed_digit = _bind$4._2;
      s$3 = _new_s;
      mantissa = _new_mantissa;
      n_after_dot = _consumed_digit;
      exponent = BigInt.asUintN(64, -BigInt.asUintN(64, BigInt(n_after_dot)));
    }
  }
  n_digits = n_digits + n_after_dot | 0;
  if (n_digits === 0) {
    return new _M0DTPC16result6ResultGORPC28internal7strconv6NumberRPC15error5ErrorE2Ok(undefined);
  }
  let exp_number = 0n;
  let rest;
  _L$2: {
    _L$3: {
      const _bind$4 = s$3;
      if ((_bind$4.end - _bind$4.start | 0) >= 1) {
        const _x = _bind$4.str.charCodeAt(_bind$4.start);
        switch (_x) {
          case 101: {
            const _x$2 = new _M0TPC16string10StringView(_bind$4.str, _bind$4.start + 1 | 0, _bind$4.end);
            rest = _x$2;
            break _L$3;
          }
          case 69: {
            const _x$3 = new _M0TPC16string10StringView(_bind$4.str, _bind$4.start + 1 | 0, _bind$4.end);
            rest = _x$3;
            break _L$3;
          }
        }
      }
      break _L$2;
    }
    const _bind$4 = _M0FPC28internal7strconv17parse__scientific(rest);
    let _bind$5;
    if (_bind$4 === undefined) {
      return new _M0DTPC16result6ResultGORPC28internal7strconv6NumberRPC15error5ErrorE2Ok(undefined);
    } else {
      const _Some = _bind$4;
      _bind$5 = _Some;
    }
    const _new_s = _bind$5._0;
    const _exp_number_val = _bind$5._1;
    s$3 = _new_s;
    exp_number = _exp_number_val;
    exponent = BigInt.asUintN(64, exponent + exp_number);
  }
  const _bind$4 = s$3;
  if ((_bind$4.end - _bind$4.start | 0) === 0) {
    if (n_digits <= 19) {
      return new _M0DTPC16result6ResultGORPC28internal7strconv6NumberRPC15error5ErrorE2Ok(new _M0TPC28internal7strconv6Number(exponent, mantissa, negative, false));
    }
    n_digits = n_digits - 19 | 0;
    let many_digits = false;
    let _tmp = s.str;
    let _tmp$2 = s.start;
    let _tmp$3 = s.end;
    _L$3: while (true) {
      const s_str = _tmp;
      const s_start = _tmp$2;
      const s_end = _tmp$3;
      _L$4: {
        let rest$2;
        let ch;
        _L$5: {
          if ((s_end - s_start | 0) >= 1) {
            const _x = s_str.charCodeAt(s_start);
            switch (_x) {
              case 48: {
                const _x$2 = new _M0TPC16string10StringView(s_str, s_start + 1 | 0, s_end);
                rest$2 = _x$2;
                ch = _x;
                break _L$5;
              }
              case 46: {
                const _x$3 = new _M0TPC16string10StringView(s_str, s_start + 1 | 0, s_end);
                rest$2 = _x$3;
                ch = _x;
                break _L$5;
              }
              default: {
                break _L$4;
              }
            }
          } else {
            break _L$4;
          }
        }
        const _tmp$4 = n_digits;
        if (2 === 0) {
          $panic();
        }
        n_digits = _tmp$4 - ((ch - 46 | 0) / 2 | 0) | 0;
        _tmp = rest$2.str;
        _tmp$2 = rest$2.start;
        _tmp$3 = rest$2.end;
        continue;
      }
      break;
    }
    let mantissa$2 = mantissa;
    if (n_digits > 0) {
      many_digits = true;
      mantissa$2 = 0n;
      const _bind$5 = _M0FPC28internal7strconv20try__parse__19digits(s, mantissa$2);
      const _s$2 = _bind$5._0;
      const _new_mantissa = _bind$5._1;
      const _consumed_digit = _bind$5._2;
      mantissa$2 = _new_mantissa;
      let _tmp$4;
      if (BigInt.asUintN(64, mantissa$2) >= BigInt.asUintN(64, _M0FPC28internal7strconv17min__19digit__int)) {
        _tmp$4 = _consumed_digit;
      } else {
        if (_M0MPC16string6String24char__length__ge_2einner(_s$2.str, 1, _s$2.start, _s$2.end)) {
          const _tmp$5 = _s$2.str;
          const _bind$6 = _M0MPC16string6String29offset__of__nth__char_2einner(_s$2.str, 1, _s$2.start, _s$2.end);
          let _tmp$6;
          if (_bind$6 === undefined) {
            _tmp$6 = _s$2.end;
          } else {
            const _Some = _bind$6;
            _tmp$6 = _Some;
          }
          const _x = new _M0TPC16string10StringView(_tmp$5, _tmp$6, _s$2.end);
          const _bind$7 = _M0FPC28internal7strconv20try__parse__19digits(_x, mantissa$2);
          const _new_mantissa$2 = _bind$7._1;
          const _consumed_digit$2 = _bind$7._2;
          mantissa$2 = _new_mantissa$2;
          _tmp$4 = _consumed_digit$2;
        } else {
          return new _M0DTPC16result6ResultGORPC28internal7strconv6NumberRPC15error5ErrorE2Ok(undefined);
        }
      }
      exponent = BigInt.asUintN(64, BigInt(_tmp$4));
      exponent = BigInt.asUintN(64, exponent + exp_number);
    }
    return new _M0DTPC16result6ResultGORPC28internal7strconv6NumberRPC15error5ErrorE2Ok(new _M0TPC28internal7strconv6Number(exponent, mantissa$2, negative, many_digits));
  } else {
    return _M0FPC28internal7strconv11syntax__errGORPC28internal7strconv6NumberE();
  }
}
function _M0FPC28internal7strconv15parse__inf__nan(rest) {
  let pos;
  let rest$2;
  _L: {
    let rest$3;
    _L$2: {
      if ((rest.end - rest.start | 0) >= 1) {
        const _x = rest.str.charCodeAt(rest.start);
        switch (_x) {
          case 45: {
            const _x$2 = new _M0TPC16string10StringView(rest.str, rest.start + 1 | 0, rest.end);
            pos = false;
            rest$2 = _x$2;
            break _L;
          }
          case 43: {
            const _x$3 = new _M0TPC16string10StringView(rest.str, rest.start + 1 | 0, rest.end);
            rest$3 = _x$3;
            break _L$2;
          }
          default: {
            rest$3 = rest;
            break _L$2;
          }
        }
      } else {
        rest$3 = rest;
        break _L$2;
      }
    }
    pos = true;
    rest$2 = rest$3;
    break _L;
  }
  let _cursor_295 = 0;
  const _input_end_297 = rest$2.end - rest$2.start | 0;
  const _start_296 = _cursor_295;
  let _accept_state_298 = -1;
  let _match_end_299 = -1;
  let _state_300 = 2;
  while (true) {
    if (_state_300 !== 14) {
      if (_state_300 < 2) {
        _accept_state_298 = _state_300;
        _match_end_299 = _cursor_295;
      }
      const _tmp = Math.imul(_state_300, 8) | 0;
      let _next_char_303;
      if (_cursor_295 < _input_end_297) {
        const _char_302 = rest$2.str.charCodeAt(rest$2.start + _cursor_295 | 0);
        _cursor_295 = _cursor_295 + 1 | 0;
        _next_char_303 = _char_302;
      } else {
        _next_char_303 = -1;
      }
      _state_300 = _M0MPC15array13ReadOnlyArray11unsafe__getGiE(_M0FPC28internal7strconv15parse__inf__nanN25_2atransition__table__304S312, _tmp + (_next_char_303 < 90 ? (_next_char_303 < 73 ? (_next_char_303 < 66 ? (_next_char_303 < 0 ? 0 : _next_char_303 > 64 ? 1 : 7) : _next_char_303 > 69 ? (_next_char_303 < 71 ? 2 : 7) : 7) : _next_char_303 > 73 ? (_next_char_303 < 84 ? (_next_char_303 < 78 ? 7 : _next_char_303 > 78 ? 7 : 4) : _next_char_303 > 84 ? (_next_char_303 < 89 ? 7 : 6) : 5) : 3) : _next_char_303 > 96 ? (_next_char_303 < 110 ? (_next_char_303 < 103 ? (_next_char_303 < 98 ? 1 : _next_char_303 > 101 ? 2 : 7) : _next_char_303 > 104 ? (_next_char_303 < 106 ? 3 : 7) : 7) : _next_char_303 > 110 ? (_next_char_303 < 117 ? (_next_char_303 < 116 ? 7 : 5) : _next_char_303 > 120 ? (_next_char_303 < 122 ? 6 : 7) : 7) : 4) : 7) | 0);
      continue;
    } else {
      break;
    }
  }
  const _bind$2 = _accept_state_298;
  switch (_bind$2) {
    case 0: {
      _cursor_295 = _match_end_299;
      return new _M0DTPC16result6ResultGdRPC15error5ErrorE2Ok(_M0FPC16double14not__a__number);
    }
    case 1: {
      _cursor_295 = _match_end_299;
      return pos ? new _M0DTPC16result6ResultGdRPC15error5ErrorE2Ok(_M0FPC16double8infinity) : new _M0DTPC16result6ResultGdRPC15error5ErrorE2Ok(_M0FPC16double13neg__infinity);
    }
    default: {
      _cursor_295 = _start_296;
      return _M0FPC28internal7strconv11syntax__errGdE();
    }
  }
}
function _M0FPC28internal7strconv12checked__mul(a, b) {
  if (BigInt.asUintN(64, a) === BigInt.asUintN(64, 0n) || BigInt.asUintN(64, b) === BigInt.asUintN(64, 0n)) {
    return _M0FPC28internal7strconv12checked__mulN6constrS1164;
  }
  if (BigInt.asUintN(64, a) === BigInt.asUintN(64, 1n)) {
    return b;
  }
  if (BigInt.asUintN(64, b) === BigInt.asUintN(64, 1n)) {
    return a;
  }
  if ($i64_clz(b) === 0 || $i64_clz(a) === 0) {
    return undefined;
  }
  if (b === 0n) {
    $panic();
  }
  const quotient = BigInt.asUintN(64, BigInt.asUintN(64, 18446744073709551615n) / BigInt.asUintN(64, b));
  if (BigInt.asUintN(64, a) > BigInt.asUintN(64, quotient)) {
    return undefined;
  }
  return BigInt.asUintN(64, a * b);
}
function _M0FPC28internal7strconv19overflow__threshold(base, neg) {
  if (!neg) {
    if (base === 10) {
      return 922337203685477581n;
    } else {
      if (base === 16) {
        return 576460752303423488n;
      } else {
        const _tmp = BigInt.asUintN(64, BigInt(base));
        if (_tmp === 0n) {
          $panic();
        }
        return BigInt.asUintN(64, BigInt.asUintN(64, BigInt.asIntN(64, 9223372036854775807n) / BigInt.asIntN(64, _tmp)) + 1n);
      }
    }
  } else {
    if (base === 10) {
      return 17524406870024074036n;
    } else {
      if (base === 16) {
        return 17870283321406128128n;
      } else {
        const _tmp = BigInt.asUintN(64, BigInt(base));
        if (_tmp === 0n) {
          $panic();
        }
        return BigInt.asUintN(64, BigInt.asIntN(64, 9223372036854775808n) / BigInt.asIntN(64, _tmp));
      }
    }
  }
}
function _M0FPC28internal7strconv20parse__int64_2einner(str, base) {
  if (_M0IP016_24default__implPB2Eq10not__equalGRPC16string10StringViewE(str, new _M0TPC16string10StringView(_M0FPC28internal7strconv20parse__int64_2einnerN7_2abindS682, 0, _M0FPC28internal7strconv20parse__int64_2einnerN7_2abindS682.length))) {
    let neg;
    let rest;
    _L: {
      let rest$2;
      _L$2: {
        const _bind$2 = _M0MPC16string10StringView12view_2einner(str, 0, undefined);
        if ((_bind$2.end - _bind$2.start | 0) >= 1) {
          const _x = _bind$2.str.charCodeAt(_bind$2.start);
          switch (_x) {
            case 43: {
              const _x$2 = new _M0TPC16string10StringView(_bind$2.str, _bind$2.start + 1 | 0, _bind$2.end);
              neg = false;
              rest = _x$2;
              break _L;
            }
            case 45: {
              const _x$3 = new _M0TPC16string10StringView(_bind$2.str, _bind$2.start + 1 | 0, _bind$2.end);
              neg = true;
              rest = _x$3;
              break _L;
            }
            default: {
              rest$2 = _bind$2;
              break _L$2;
            }
          }
        } else {
          rest$2 = _bind$2;
          break _L$2;
        }
      }
      neg = false;
      rest = rest$2;
      break _L;
    }
    const _bind$2 = _M0FPC28internal7strconv25check__and__consume__base(rest, base);
    let _bind$3;
    if (_bind$2.$tag === 1) {
      const _ok = _bind$2;
      _bind$3 = _ok._0;
    } else {
      return _bind$2;
    }
    const _num_base = _bind$3._0;
    const _rest = _bind$3._1;
    const _allow_underscore = _bind$3._2;
    const overflow_threshold = _M0FPC28internal7strconv19overflow__threshold(_num_base, neg);
    let has_digit;
    if ((_rest.end - _rest.start | 0) >= 1) {
      const _x = _rest.str.charCodeAt(_rest.start);
      if (_x >= 48 && _x <= 57) {
        has_digit = true;
      } else {
        if (_x >= 97 && _x <= 122) {
          has_digit = true;
        } else {
          if (_x >= 65 && _x <= 90) {
            has_digit = true;
          } else {
            if ((_rest.end - _rest.start | 0) >= 2) {
              if (_x === 95) {
                const _x$2 = _rest.str.charCodeAt(_rest.start + 1 | 0);
                has_digit = _x$2 >= 48 && _x$2 <= 57 ? true : _x$2 >= 97 && _x$2 <= 122 ? true : _x$2 >= 65 && _x$2 <= 90;
              } else {
                has_digit = false;
              }
            } else {
              has_digit = false;
            }
          }
        }
      }
    } else {
      has_digit = false;
    }
    if (has_digit) {
      let _tmp;
      let _tmp$2 = _rest;
      let _tmp$3 = 0n;
      let _tmp$4 = _allow_underscore;
      while (true) {
        const rest$2 = _tmp$2;
        const acc = _tmp$3;
        const allow_underscore = _tmp$4;
        let acc$2;
        let rest$3;
        let c;
        _L$2: {
          _L$3: {
            if ((rest$2.end - rest$2.start | 0) === 1) {
              const _x = rest$2.str.charCodeAt(rest$2.start);
              if (_x === 95) {
                const _bind$4 = _M0FPC28internal7strconv11syntax__errGuE();
                if (_bind$4.$tag === 1) {
                  const _ok = _bind$4;
                  _ok._0;
                } else {
                  return _bind$4;
                }
              } else {
                const _c = _M0MPC16string6String16unsafe__char__at(rest$2.str, _M0MPC16string6String29offset__of__nth__char_2einner(rest$2.str, 0, rest$2.start, rest$2.end));
                const _tmp$5 = rest$2.str;
                const _bind$4 = _M0MPC16string6String29offset__of__nth__char_2einner(rest$2.str, 1, rest$2.start, rest$2.end);
                let _tmp$6;
                if (_bind$4 === undefined) {
                  _tmp$6 = rest$2.end;
                } else {
                  const _Some = _bind$4;
                  _tmp$6 = _Some;
                }
                const _x$2 = new _M0TPC16string10StringView(_tmp$5, _tmp$6, rest$2.end);
                acc$2 = acc;
                rest$3 = _x$2;
                c = _c;
                break _L$3;
              }
            } else {
              if ((rest$2.end - rest$2.start | 0) >= 1) {
                const _x = rest$2.str.charCodeAt(rest$2.start);
                if (_x === 95) {
                  if (allow_underscore === false) {
                    const _bind$4 = _M0FPC28internal7strconv11syntax__errGuE();
                    if (_bind$4.$tag === 1) {
                      const _ok = _bind$4;
                      _ok._0;
                    } else {
                      return _bind$4;
                    }
                  } else {
                    const _x$2 = new _M0TPC16string10StringView(rest$2.str, rest$2.start + 1 | 0, rest$2.end);
                    _tmp$2 = _x$2;
                    _tmp$4 = false;
                    continue;
                  }
                } else {
                  const _c = _M0MPC16string6String16unsafe__char__at(rest$2.str, _M0MPC16string6String29offset__of__nth__char_2einner(rest$2.str, 0, rest$2.start, rest$2.end));
                  const _tmp$5 = rest$2.str;
                  const _bind$4 = _M0MPC16string6String29offset__of__nth__char_2einner(rest$2.str, 1, rest$2.start, rest$2.end);
                  let _tmp$6;
                  if (_bind$4 === undefined) {
                    _tmp$6 = rest$2.end;
                  } else {
                    const _Some = _bind$4;
                    _tmp$6 = _Some;
                  }
                  const _x$2 = new _M0TPC16string10StringView(_tmp$5, _tmp$6, rest$2.end);
                  acc$2 = acc;
                  rest$3 = _x$2;
                  c = _c;
                  break _L$3;
                }
              } else {
                _tmp = acc;
                break;
              }
            }
            break _L$2;
          }
          const c$2 = c;
          let d;
          if (c$2 >= 48 && c$2 <= 57) {
            d = c$2 - 48 | 0;
          } else {
            if (c$2 >= 97 && c$2 <= 122) {
              d = c$2 + -87 | 0;
            } else {
              if (c$2 >= 65 && c$2 <= 90) {
                d = c$2 + -55 | 0;
              } else {
                const _bind$4 = _M0FPC28internal7strconv11syntax__errGiE();
                if (_bind$4.$tag === 1) {
                  const _ok = _bind$4;
                  d = _ok._0;
                } else {
                  return _bind$4;
                }
              }
            }
          }
          if (d < _num_base) {
            if (neg) {
              if (BigInt.asIntN(64, acc$2) >= BigInt.asIntN(64, overflow_threshold)) {
                const next_acc = BigInt.asUintN(64, BigInt.asUintN(64, acc$2 * BigInt.asUintN(64, BigInt(_num_base))) - BigInt.asUintN(64, BigInt(d)));
                if (BigInt.asIntN(64, next_acc) <= BigInt.asIntN(64, acc$2)) {
                  _tmp$2 = rest$3;
                  _tmp$3 = next_acc;
                  _tmp$4 = true;
                  continue;
                } else {
                  const _bind$4 = _M0FPC28internal7strconv10range__errGuE();
                  if (_bind$4.$tag === 1) {
                    const _ok = _bind$4;
                    _ok._0;
                  } else {
                    return _bind$4;
                  }
                }
              } else {
                const _bind$4 = _M0FPC28internal7strconv10range__errGuE();
                if (_bind$4.$tag === 1) {
                  const _ok = _bind$4;
                  _ok._0;
                } else {
                  return _bind$4;
                }
              }
            } else {
              if (BigInt.asIntN(64, acc$2) < BigInt.asIntN(64, overflow_threshold)) {
                const next_acc = BigInt.asUintN(64, BigInt.asUintN(64, acc$2 * BigInt.asUintN(64, BigInt(_num_base))) + BigInt.asUintN(64, BigInt(d)));
                if (BigInt.asIntN(64, next_acc) >= BigInt.asIntN(64, acc$2)) {
                  _tmp$2 = rest$3;
                  _tmp$3 = next_acc;
                  _tmp$4 = true;
                  continue;
                } else {
                  const _bind$4 = _M0FPC28internal7strconv10range__errGuE();
                  if (_bind$4.$tag === 1) {
                    const _ok = _bind$4;
                    _ok._0;
                  } else {
                    return _bind$4;
                  }
                }
              } else {
                const _bind$4 = _M0FPC28internal7strconv10range__errGuE();
                if (_bind$4.$tag === 1) {
                  const _ok = _bind$4;
                  _ok._0;
                } else {
                  return _bind$4;
                }
              }
            }
          } else {
            const _bind$4 = _M0FPC28internal7strconv11syntax__errGuE();
            if (_bind$4.$tag === 1) {
              const _ok = _bind$4;
              _ok._0;
            } else {
              return _bind$4;
            }
          }
        }
        continue;
      }
      return new _M0DTPC16result6ResultGlRPC15error5ErrorE2Ok(_tmp);
    } else {
      return _M0FPC28internal7strconv11syntax__errGlE();
    }
  } else {
    return _M0FPC28internal7strconv11syntax__errGlE();
  }
}
function _M0FPC28internal7strconv18parse__int_2einner(str, base) {
  const _bind$2 = _M0FPC28internal7strconv20parse__int64_2einner(str, base);
  let n;
  if (_bind$2.$tag === 1) {
    const _ok = _bind$2;
    n = _ok._0;
  } else {
    return _bind$2;
  }
  if (BigInt.asIntN(64, n) < BigInt.asIntN(64, 18446744071562067968n) || BigInt.asIntN(64, n) > BigInt.asIntN(64, 2147483647n)) {
    const _bind$3 = _M0FPC28internal7strconv10range__errGuE();
    if (_bind$3.$tag === 1) {
      const _ok = _bind$3;
      _ok._0;
    } else {
      return _bind$3;
    }
  }
  return new _M0DTPC16result6ResultGiRPC15error5ErrorE2Ok(Number(BigInt.asIntN(32, n)) | 0);
}
function _M0FPC28internal7strconv17check__underscore(str) {
  if (_M0MPC16string10StringView20contains__code__unit(str, 95)) {
    let rest;
    if ((str.end - str.start | 0) >= 1) {
      const _x = str.str.charCodeAt(str.start);
      switch (_x) {
        case 43: {
          const _x$2 = new _M0TPC16string10StringView(str.str, str.start + 1 | 0, str.end);
          rest = _x$2;
          break;
        }
        case 45: {
          const _x$3 = new _M0TPC16string10StringView(str.str, str.start + 1 | 0, str.end);
          rest = _x$3;
          break;
        }
        default: {
          rest = str;
        }
      }
    } else {
      rest = str;
    }
    let rest$2;
    let allow_underscore;
    let hex;
    _L: {
      let _cursor_213 = 0;
      const _input_end_215 = rest.end - rest.start | 0;
      const _start_214 = _cursor_213;
      let _accept_state_216 = -1;
      let _match_end_217 = -1;
      let _state_218 = 3;
      while (true) {
        if (_state_218 !== 5) {
          if (_state_218 < 3) {
            _accept_state_216 = _state_218;
            _match_end_217 = _cursor_213;
          }
          const _tmp = Math.imul(_state_218, 5) | 0;
          let _next_char_221;
          if (_cursor_213 < _input_end_215) {
            const _char_220 = rest.str.charCodeAt(rest.start + _cursor_213 | 0);
            _cursor_213 = _cursor_213 + 1 | 0;
            _next_char_221 = _char_220;
          } else {
            _next_char_221 = -1;
          }
          _state_218 = _M0MPC15array13ReadOnlyArray11unsafe__getGiE(_M0FPC28internal7strconv17check__underscoreN25_2atransition__table__222S230, _tmp + (_next_char_221 < 88 ? (_next_char_221 < 66 ? (_next_char_221 < 48 ? 4 : _next_char_221 > 48 ? 4 : 0) : _next_char_221 > 66 ? (_next_char_221 < 79 ? 4 : _next_char_221 > 79 ? 4 : 2) : 1) : _next_char_221 > 88 ? (_next_char_221 < 111 ? (_next_char_221 < 98 ? 4 : _next_char_221 > 98 ? 4 : 1) : _next_char_221 > 111 ? (_next_char_221 < 120 ? 4 : _next_char_221 > 120 ? 4 : 3) : 2) : 3) | 0);
          continue;
        } else {
          break;
        }
      }
      const _bind$2 = _accept_state_216;
      switch (_bind$2) {
        case 0: {
          _cursor_213 = _match_end_217;
          const rest$3 = _M0MPC16string10StringView12view_2einner(rest, _match_end_217, _input_end_215);
          rest$2 = rest$3;
          allow_underscore = true;
          hex = false;
          break _L;
        }
        case 1: {
          _cursor_213 = _match_end_217;
          const rest$4 = _M0MPC16string10StringView12view_2einner(rest, _match_end_217, _input_end_215);
          rest$2 = rest$4;
          allow_underscore = true;
          hex = false;
          break _L;
        }
        case 2: {
          _cursor_213 = _match_end_217;
          const rest$5 = _M0MPC16string10StringView12view_2einner(rest, _match_end_217, _input_end_215);
          rest$2 = rest$5;
          allow_underscore = true;
          hex = true;
          break _L;
        }
        default: {
          _cursor_213 = _start_214;
          rest$2 = rest;
          allow_underscore = false;
          hex = false;
          break _L;
        }
      }
    }
    let _tmp = rest$2.str;
    let _tmp$2 = rest$2.start;
    let _tmp$3 = rest$2.end;
    let _tmp$4 = allow_underscore;
    let _tmp$5 = false;
    while (true) {
      const rest_str = _tmp;
      const rest_start = _tmp$2;
      const rest_end = _tmp$3;
      const allow_underscore$2 = _tmp$4;
      const follow_underscore = _tmp$5;
      let rest$3;
      _L$2: {
        _L$3: {
          let rest$4;
          _L$4: {
            _L$5: {
              let rest$5;
              _L$6: {
                let rest$6;
                _L$7: {
                  if ((rest_end - rest_start | 0) === 0) {
                    return true;
                  } else {
                    if ((rest_end - rest_start | 0) === 1) {
                      const _x = rest_str.charCodeAt(rest_start);
                      if (_x === 95) {
                        return false;
                      } else {
                        if (_x >= 48 && _x <= 57) {
                          const _x$2 = new _M0TPC16string10StringView(rest_str, rest_start + 1 | 0, rest_end);
                          rest$6 = _x$2;
                          break _L$7;
                        } else {
                          if (_x >= 97 && _x <= 102) {
                            const _x$2 = new _M0TPC16string10StringView(rest_str, rest_start + 1 | 0, rest_end);
                            if (hex) {
                              rest$5 = _x$2;
                              break _L$6;
                            } else {
                              if (_x === 101) {
                                if (follow_underscore === true) {
                                  break _L$5;
                                } else {
                                  rest$4 = _x$2;
                                  break _L$4;
                                }
                              } else {
                                if (follow_underscore === true) {
                                  break _L$3;
                                } else {
                                  rest$3 = _x$2;
                                  break _L$2;
                                }
                              }
                            }
                          } else {
                            if (_x >= 65 && _x <= 70) {
                              const _x$2 = new _M0TPC16string10StringView(rest_str, rest_start + 1 | 0, rest_end);
                              if (hex) {
                                rest$5 = _x$2;
                                break _L$6;
                              } else {
                                if (_x === 69) {
                                  if (follow_underscore === true) {
                                    break _L$5;
                                  } else {
                                    rest$4 = _x$2;
                                    break _L$4;
                                  }
                                } else {
                                  if (follow_underscore === true) {
                                    break _L$3;
                                  } else {
                                    rest$3 = _x$2;
                                    break _L$2;
                                  }
                                }
                              }
                            } else {
                              if (_x === 46) {
                                if (follow_underscore === true) {
                                  break _L$5;
                                } else {
                                  const _x$2 = new _M0TPC16string10StringView(rest_str, rest_start + 1 | 0, rest_end);
                                  rest$4 = _x$2;
                                  break _L$4;
                                }
                              } else {
                                if (_x === 43) {
                                  if (follow_underscore === true) {
                                    break _L$5;
                                  } else {
                                    const _x$2 = new _M0TPC16string10StringView(rest_str, rest_start + 1 | 0, rest_end);
                                    rest$4 = _x$2;
                                    break _L$4;
                                  }
                                } else {
                                  if (_x === 45) {
                                    if (follow_underscore === true) {
                                      break _L$5;
                                    } else {
                                      const _x$2 = new _M0TPC16string10StringView(rest_str, rest_start + 1 | 0, rest_end);
                                      rest$4 = _x$2;
                                      break _L$4;
                                    }
                                  } else {
                                    if (follow_underscore === true) {
                                      break _L$3;
                                    } else {
                                      const _bind$2 = _M0MPC16string6String29offset__of__nth__char_2einner(rest_str, 1, rest_start, rest_end);
                                      let _tmp$6;
                                      if (_bind$2 === undefined) {
                                        _tmp$6 = rest_end;
                                      } else {
                                        const _Some = _bind$2;
                                        _tmp$6 = _Some;
                                      }
                                      const _x$2 = new _M0TPC16string10StringView(rest_str, _tmp$6, rest_end);
                                      rest$3 = _x$2;
                                      break _L$2;
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    } else {
                      const _x = rest_str.charCodeAt(rest_start);
                      if (_x === 95) {
                        if (allow_underscore$2 === false) {
                          return false;
                        } else {
                          const _bind$2 = rest_start + 1 | 0;
                          _tmp$2 = _bind$2;
                          _tmp$4 = false;
                          _tmp$5 = true;
                          continue;
                        }
                      } else {
                        if (_x >= 48 && _x <= 57) {
                          const _x$2 = new _M0TPC16string10StringView(rest_str, rest_start + 1 | 0, rest_end);
                          rest$6 = _x$2;
                          break _L$7;
                        } else {
                          if (_x >= 97 && _x <= 102) {
                            const _x$2 = new _M0TPC16string10StringView(rest_str, rest_start + 1 | 0, rest_end);
                            if (hex) {
                              rest$5 = _x$2;
                              break _L$6;
                            } else {
                              if (_x === 101) {
                                if (follow_underscore === true) {
                                  break _L$5;
                                } else {
                                  rest$4 = _x$2;
                                  break _L$4;
                                }
                              } else {
                                if (follow_underscore === true) {
                                  break _L$3;
                                } else {
                                  rest$3 = _x$2;
                                  break _L$2;
                                }
                              }
                            }
                          } else {
                            if (_x >= 65 && _x <= 70) {
                              const _x$2 = new _M0TPC16string10StringView(rest_str, rest_start + 1 | 0, rest_end);
                              if (hex) {
                                rest$5 = _x$2;
                                break _L$6;
                              } else {
                                if (_x === 69) {
                                  if (follow_underscore === true) {
                                    break _L$5;
                                  } else {
                                    rest$4 = _x$2;
                                    break _L$4;
                                  }
                                } else {
                                  if (follow_underscore === true) {
                                    break _L$3;
                                  } else {
                                    rest$3 = _x$2;
                                    break _L$2;
                                  }
                                }
                              }
                            } else {
                              if (_x === 46) {
                                if (follow_underscore === true) {
                                  break _L$5;
                                } else {
                                  const _x$2 = new _M0TPC16string10StringView(rest_str, rest_start + 1 | 0, rest_end);
                                  rest$4 = _x$2;
                                  break _L$4;
                                }
                              } else {
                                if (_x === 43) {
                                  if (follow_underscore === true) {
                                    break _L$5;
                                  } else {
                                    const _x$2 = new _M0TPC16string10StringView(rest_str, rest_start + 1 | 0, rest_end);
                                    rest$4 = _x$2;
                                    break _L$4;
                                  }
                                } else {
                                  if (_x === 45) {
                                    if (follow_underscore === true) {
                                      break _L$5;
                                    } else {
                                      const _x$2 = new _M0TPC16string10StringView(rest_str, rest_start + 1 | 0, rest_end);
                                      rest$4 = _x$2;
                                      break _L$4;
                                    }
                                  } else {
                                    if (follow_underscore === true) {
                                      break _L$3;
                                    } else {
                                      const _bind$2 = _M0MPC16string6String29offset__of__nth__char_2einner(rest_str, 1, rest_start, rest_end);
                                      let _tmp$6;
                                      if (_bind$2 === undefined) {
                                        _tmp$6 = rest_end;
                                      } else {
                                        const _Some = _bind$2;
                                        _tmp$6 = _Some;
                                      }
                                      const _x$2 = new _M0TPC16string10StringView(rest_str, _tmp$6, rest_end);
                                      rest$3 = _x$2;
                                      break _L$2;
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
                _tmp = rest$6.str;
                _tmp$2 = rest$6.start;
                _tmp$3 = rest$6.end;
                _tmp$4 = true;
                _tmp$5 = false;
                continue;
              }
              _tmp = rest$5.str;
              _tmp$2 = rest$5.start;
              _tmp$3 = rest$5.end;
              _tmp$4 = true;
              _tmp$5 = false;
              continue;
            }
            return false;
          }
          _tmp = rest$4.str;
          _tmp$2 = rest$4.start;
          _tmp$3 = rest$4.end;
          _tmp$4 = false;
          _tmp$5 = false;
          continue;
        }
        return false;
      }
      _tmp = rest$3.str;
      _tmp$2 = rest$3.start;
      _tmp$3 = rest$3.end;
      _tmp$4 = false;
      _tmp$5 = false;
      continue;
    }
  } else {
    return true;
  }
}
function _M0FPC28internal7strconv14eisel__umul128(a, b) {
  const a_lo = BigInt.asUintN(64, a & 4294967295n);
  const a_hi = BigInt.asUintN(64, BigInt.asUintN(64, a) >> BigInt(32 & 63));
  const b_lo = BigInt.asUintN(64, b & 4294967295n);
  const b_hi = BigInt.asUintN(64, BigInt.asUintN(64, b) >> BigInt(32 & 63));
  const x = BigInt.asUintN(64, a_lo * b_lo);
  const y = BigInt.asUintN(64, BigInt.asUintN(64, a_hi * b_lo) + BigInt.asUintN(64, BigInt.asUintN(64, x) >> BigInt(32 & 63)));
  const z = BigInt.asUintN(64, BigInt.asUintN(64, a_lo * b_hi) + BigInt.asUintN(64, y & 4294967295n));
  const hi = BigInt.asUintN(64, BigInt.asUintN(64, BigInt.asUintN(64, a_hi * b_hi) + BigInt.asUintN(64, BigInt.asUintN(64, y) >> BigInt(32 & 63))) + BigInt.asUintN(64, BigInt.asUintN(64, z) >> BigInt(32 & 63)));
  return new _M0TPC28internal7strconv12EiselProduct(BigInt.asUintN(64, a * b), hi);
}
function _M0FPC28internal7strconv20eisel__mul__log2__10(exponent) {
  return (Math.imul(exponent, 108853) | 0) >> 15;
}
function _M0FPC28internal7strconv20try__eisel__lemire64(mantissa, exponent, negative) {
  if (BigInt.asUintN(64, mantissa) === BigInt.asUintN(64, 0n)) {
    return negative ? $i64_reinterpret_f64(9223372036854775808n) : 0;
  }
  if (BigInt.asIntN(64, exponent) < BigInt.asIntN(64, 18446744073709551268n) || BigInt.asIntN(64, exponent) > BigInt.asIntN(64, 347n)) {
    return _M0FPC16double14not__a__number;
  }
  const exponent$2 = Number(BigInt.asIntN(32, exponent)) | 0;
  const table_index = Math.imul(exponent$2 - -348 | 0, 2) | 0;
  const pow_hi = _M0MPC15array13ReadOnlyArray2atGmE(_M0FPC28internal7strconv27eisel__lemire__pow10__table, table_index);
  const pow_lo = _M0MPC15array13ReadOnlyArray2atGmE(_M0FPC28internal7strconv27eisel__lemire__pow10__table, table_index + 1 | 0);
  const pow_exp2 = 1 + _M0FPC28internal7strconv20eisel__mul__log2__10(exponent$2) | 0;
  const leading_zeros = $i64_clz(mantissa);
  const normalized = BigInt.asUintN(64, mantissa << BigInt(leading_zeros & 63));
  let result_exp2 = ((pow_exp2 + 63 | 0) + 1023 | 0) - leading_zeros | 0;
  const product = _M0FPC28internal7strconv14eisel__umul128(normalized, pow_hi);
  let product_hi = product.hi;
  let product_lo = product.lo;
  if (BigInt.asUintN(64, BigInt.asUintN(64, product_hi & 511n)) === BigInt.asUintN(64, 511n) && BigInt.asUintN(64, BigInt.asUintN(64, product_lo + normalized)) < BigInt.asUintN(64, normalized)) {
    const wider = _M0FPC28internal7strconv14eisel__umul128(normalized, pow_lo);
    let merged_hi = product_hi;
    const merged_lo = BigInt.asUintN(64, product_lo + wider.hi);
    if (BigInt.asUintN(64, merged_lo) < BigInt.asUintN(64, product_lo)) {
      merged_hi = BigInt.asUintN(64, merged_hi + 1n);
    }
    if (BigInt.asUintN(64, BigInt.asUintN(64, merged_hi & 511n)) === BigInt.asUintN(64, 511n) && (BigInt.asUintN(64, BigInt.asUintN(64, merged_lo + 1n)) === BigInt.asUintN(64, 0n) && BigInt.asUintN(64, BigInt.asUintN(64, wider.lo + normalized)) < BigInt.asUintN(64, normalized))) {
      return _M0FPC16double14not__a__number;
    }
    product_hi = merged_hi;
    product_lo = merged_lo;
  }
  const top_bit = Number(BigInt.asIntN(32, BigInt.asUintN(64, BigInt.asUintN(64, product_hi) >> BigInt(63 & 63)))) | 0;
  let result_mantissa = BigInt.asUintN(64, BigInt.asUintN(64, product_hi) >> BigInt((top_bit + 9 | 0) & 63));
  result_exp2 = result_exp2 - (1 - top_bit | 0) | 0;
  if (BigInt.asUintN(64, product_lo) === BigInt.asUintN(64, 0n) && (BigInt.asUintN(64, BigInt.asUintN(64, product_hi & 511n)) === BigInt.asUintN(64, 0n) && BigInt.asUintN(64, BigInt.asUintN(64, result_mantissa & 3n)) === BigInt.asUintN(64, 1n))) {
    return _M0FPC16double14not__a__number;
  }
  result_mantissa = BigInt.asUintN(64, result_mantissa + BigInt.asUintN(64, result_mantissa & 1n));
  result_mantissa = BigInt.asUintN(64, BigInt.asUintN(64, result_mantissa) >> BigInt(1 & 63));
  if (BigInt.asUintN(64, BigInt.asUintN(64, BigInt.asUintN(64, result_mantissa) >> BigInt(53 & 63))) > BigInt.asUintN(64, 0n)) {
    result_mantissa = BigInt.asUintN(64, BigInt.asUintN(64, result_mantissa) >> BigInt(1 & 63));
    result_exp2 = result_exp2 + 1 | 0;
  }
  if (result_exp2 <= 0 || result_exp2 >= 2047) {
    return _M0FPC16double14not__a__number;
  }
  const exponent_bits = BigInt.asUintN(64, BigInt.asUintN(64, BigInt(result_exp2 >>> 0)) << BigInt(52 & 63));
  let result_bits = BigInt.asUintN(64, exponent_bits | BigInt.asUintN(64, result_mantissa & 4503599627370495n));
  if (negative) {
    result_bits = BigInt.asUintN(64, result_bits | 9223372036854775808n);
  }
  return $i64_reinterpret_f64(result_bits);
}
function _M0MPC28internal7strconv7Decimal9new__priv() {
  return new _M0TPC28internal7strconv7Decimal($makebytes(800, 0), 0, 0, false, false, 0);
}
function _M0MPC28internal7strconv7Decimal4trim(self) {
  while (true) {
    let _tmp;
    if (self.digits_num > 0) {
      const _tmp$2 = self.digits;
      const _tmp$3 = self.digits_num - 1 | 0;
      _tmp = _M0IPC14byte4BytePB2Eq5equal(_tmp$3 >>> 0 < _tmp$2.length ? _tmp$2[_tmp$3] : $oob(), 0);
    } else {
      _tmp = false;
    }
    if (_tmp) {
      self.digits_num = self.digits_num - 1 | 0;
      continue;
    } else {
      break;
    }
  }
  if (self.digits_num === 0) {
    self.decimal_point = 0;
    return;
  } else {
    return;
  }
}
function _M0FPC28internal7strconv26parse__decimal__from__view(str) {
  const d = _M0MPC28internal7strconv7Decimal9new__priv();
  let has_dp = false;
  let has_digits = false;
  let rest;
  _L: {
    _L$2: {
      if ((str.end - str.start | 0) >= 1) {
        const _x = str.str.charCodeAt(str.start);
        switch (_x) {
          case 45: {
            const _x$2 = new _M0TPC16string10StringView(str.str, str.start + 1 | 0, str.end);
            d.negative = true;
            rest = _x$2;
            break;
          }
          case 43: {
            rest = new _M0TPC16string10StringView(str.str, str.start + 1 | 0, str.end);
            break;
          }
          default: {
            break _L$2;
          }
        }
      } else {
        break _L$2;
      }
      break _L;
    }
    rest = str;
  }
  let rest$2;
  let _tmp = rest;
  while (true) {
    const rest$3 = _tmp;
    let rest$4;
    _L$2: {
      _L$3: {
        if ((rest$3.end - rest$3.start | 0) >= 1) {
          const _x = rest$3.str.charCodeAt(rest$3.start);
          if (_x === 95) {
            const _x$2 = new _M0TPC16string10StringView(rest$3.str, rest$3.start + 1 | 0, rest$3.end);
            _tmp = _x$2;
            continue;
          } else {
            if (_x === 46) {
              const _x$2 = new _M0TPC16string10StringView(rest$3.str, rest$3.start + 1 | 0, rest$3.end);
              if (!has_dp) {
                has_dp = true;
                d.decimal_point = d.digits_num;
                _tmp = _x$2;
                continue;
              } else {
                const _bind$2 = _M0FPC28internal7strconv11syntax__errGuE();
                if (_bind$2.$tag === 1) {
                  const _ok = _bind$2;
                  _ok._0;
                } else {
                  return _bind$2;
                }
              }
            } else {
              if (_x >= 48 && _x <= 57) {
                const _x$2 = new _M0TPC16string10StringView(rest$3.str, rest$3.start + 1 | 0, rest$3.end);
                has_digits = true;
                if (_x === 48 && d.digits_num === 0) {
                  d.decimal_point = d.decimal_point - 1 | 0;
                  _tmp = _x$2;
                  continue;
                }
                if (d.digits_num < d.digits.length) {
                  const _tmp$2 = d.digits;
                  const _tmp$3 = d.digits_num;
                  if (_tmp$3 >>> 0 < _tmp$2.length) {
                    _tmp$2[_tmp$3] = (_x - 48 | 0) & 255;
                  } else {
                    $oob();
                  }
                  d.digits_num = d.digits_num + 1 | 0;
                } else {
                  if (!has_dp) {
                    d.overflowed = d.overflowed + 1 | 0;
                  }
                  if (_x !== 48) {
                    d.truncated = true;
                  }
                }
                _tmp = _x$2;
                continue;
              } else {
                rest$4 = rest$3;
                break _L$3;
              }
            }
          }
        } else {
          rest$4 = rest$3;
          break _L$3;
        }
        break _L$2;
      }
      rest$2 = rest$4;
      break;
    }
    continue;
  }
  if (has_digits) {
    if (!has_dp) {
      d.decimal_point = d.digits_num;
    }
    let rest$3;
    let rest$4;
    _L$2: {
      _L$3: {
        if ((rest$2.end - rest$2.start | 0) >= 1) {
          const _x = rest$2.str.charCodeAt(rest$2.start);
          switch (_x) {
            case 101: {
              const _x$2 = new _M0TPC16string10StringView(rest$2.str, rest$2.start + 1 | 0, rest$2.end);
              rest$4 = _x$2;
              break _L$3;
            }
            case 69: {
              const _x$3 = new _M0TPC16string10StringView(rest$2.str, rest$2.start + 1 | 0, rest$2.end);
              rest$4 = _x$3;
              break _L$3;
            }
            default: {
              rest$3 = rest$2;
            }
          }
        } else {
          rest$3 = rest$2;
        }
        break _L$2;
      }
      let exp_sign = 1;
      let rest$5;
      if ((rest$4.end - rest$4.start | 0) >= 1) {
        const _x = rest$4.str.charCodeAt(rest$4.start);
        switch (_x) {
          case 43: {
            rest$5 = new _M0TPC16string10StringView(rest$4.str, rest$4.start + 1 | 0, rest$4.end);
            break;
          }
          case 45: {
            const _x$2 = new _M0TPC16string10StringView(rest$4.str, rest$4.start + 1 | 0, rest$4.end);
            exp_sign = -1;
            rest$5 = _x$2;
            break;
          }
          default: {
            rest$5 = rest$4;
          }
        }
      } else {
        rest$5 = rest$4;
      }
      _L$4: {
        _L$5: {
          if ((rest$5.end - rest$5.start | 0) >= 1) {
            const _x = rest$5.str.charCodeAt(rest$5.start);
            if (_x >= 48 && _x <= 57) {
              const effective_dp = d.decimal_point + d.overflowed | 0;
              const exp_limit = exp_sign > 0 ? (effective_dp < 311 ? 311 - effective_dp | 0 : 0) : effective_dp > -331 ? effective_dp + 331 | 0 : 0;
              let exp = 0;
              let rest$6;
              let _tmp$2 = rest$5;
              while (true) {
                const rest$7 = _tmp$2;
                let rest$8;
                _L$6: {
                  if ((rest$7.end - rest$7.start | 0) >= 1) {
                    const _x$2 = rest$7.str.charCodeAt(rest$7.start);
                    if (_x$2 === 95) {
                      const _x$3 = new _M0TPC16string10StringView(rest$7.str, rest$7.start + 1 | 0, rest$7.end);
                      _tmp$2 = _x$3;
                      continue;
                    } else {
                      if (_x$2 >= 48 && _x$2 <= 57) {
                        const _x$3 = new _M0TPC16string10StringView(rest$7.str, rest$7.start + 1 | 0, rest$7.end);
                        if (exp < exp_limit) {
                          exp = (Math.imul(exp, 10) | 0) + (_x$2 - 48 | 0) | 0;
                          if (exp > exp_limit) {
                            exp = exp_limit;
                          }
                        }
                        _tmp$2 = _x$3;
                        continue;
                      } else {
                        rest$8 = rest$7;
                        break _L$6;
                      }
                    }
                  } else {
                    rest$8 = rest$7;
                    break _L$6;
                  }
                }
                rest$6 = rest$8;
                break;
              }
              d.decimal_point = d.decimal_point + (Math.imul(exp_sign, exp) | 0) | 0;
              rest$3 = rest$6;
            } else {
              break _L$5;
            }
          } else {
            break _L$5;
          }
          break _L$4;
        }
        const _bind$2 = _M0FPC28internal7strconv11syntax__errGlE();
        if (_bind$2.$tag === 1) {
          const _ok = _bind$2;
          rest$3 = _ok._0;
        } else {
          return _bind$2;
        }
      }
    }
    if ((rest$3.end - rest$3.start | 0) === 0) {
      _M0MPC28internal7strconv7Decimal4trim(d);
      return new _M0DTPC16result6ResultGRPC28internal7strconv7DecimalRPC15error5ErrorE2Ok(d);
    } else {
      return _M0FPC28internal7strconv11syntax__errGlE();
    }
  } else {
    return _M0FPC28internal7strconv11syntax__errGlE();
  }
}
function _M0FPC28internal7strconv20parse__decimal__priv(str) {
  return _M0FPC28internal7strconv26parse__decimal__from__view(str);
}
function _M0FPC28internal7strconv14assemble__bits(mantissa, exponent, negative) {
  const biased_exp = exponent - _M0FPC28internal7strconv12double__info.bias | 0;
  let bits = BigInt.asUintN(64, mantissa & BigInt.asUintN(64, BigInt.asUintN(64, 1n << BigInt(_M0FPC28internal7strconv12double__info.mantissa_bits & 63)) - 1n));
  const exp_bits = BigInt.asUintN(64, BigInt(biased_exp & ((1 << _M0FPC28internal7strconv12double__info.exponent_bits) - 1 | 0)));
  bits = BigInt.asUintN(64, bits | BigInt.asUintN(64, exp_bits << BigInt(_M0FPC28internal7strconv12double__info.mantissa_bits & 63)));
  if (negative) {
    bits = BigInt.asUintN(64, bits | BigInt.asUintN(64, BigInt.asUintN(64, 1n << BigInt(_M0FPC28internal7strconv12double__info.mantissa_bits & 63)) << BigInt(_M0FPC28internal7strconv12double__info.exponent_bits & 63)));
  }
  return bits;
}
function _M0MPC28internal7strconv7Decimal17should__round__up(self, d) {
  if (d < 0 || d >= self.digits_num) {
    return false;
  }
  let _tmp;
  const _tmp$2 = self.digits;
  if ((d >>> 0 < _tmp$2.length ? _tmp$2[d] : $oob()) === 5) {
    _tmp = (d + 1 | 0) === self.digits_num;
  } else {
    _tmp = false;
  }
  if (_tmp) {
    if (self.truncated) {
      return true;
    }
    let _tmp$3;
    if (d > 0) {
      const _tmp$4 = self.digits;
      const _tmp$5 = d - 1 | 0;
      if (2 === 0) {
        $panic();
      }
      _tmp$3 = ((_tmp$5 >>> 0 < _tmp$4.length ? _tmp$4[_tmp$5] : $oob()) % 2 | 0) !== 0;
    } else {
      _tmp$3 = false;
    }
    return _tmp$3;
  }
  const _tmp$3 = self.digits;
  return (d >>> 0 < _tmp$3.length ? _tmp$3[d] : $oob()) >= 5;
}
function _M0MPC28internal7strconv7Decimal16rounded__integer(self) {
  if (self.decimal_point > 20) {
    return 18446744073709551615n;
  }
  let _tmp = 0n;
  let _tmp$2 = 0;
  while (true) {
    const n = _tmp;
    const i = _tmp$2;
    if (i < self.decimal_point && i < self.digits_num) {
      const _tmp$3 = BigInt.asUintN(64, n * 10n);
      const _tmp$4 = self.digits;
      _tmp = BigInt.asUintN(64, _tmp$3 + _M0MPC14byte4Byte9to__int64(i >>> 0 < _tmp$4.length ? _tmp$4[i] : $oob()));
      _tmp$2 = i + 1 | 0;
      continue;
    } else {
      let n$2;
      let _tmp$3 = n;
      let _tmp$4 = i;
      while (true) {
        const n$3 = _tmp$3;
        const i$2 = _tmp$4;
        if (i$2 < self.decimal_point) {
          _tmp$3 = BigInt.asUintN(64, n$3 * 10n);
          _tmp$4 = i$2 + 1 | 0;
          continue;
        } else {
          n$2 = n$3;
          break;
        }
      }
      return _M0MPC28internal7strconv7Decimal17should__round__up(self, self.decimal_point) ? BigInt.asUintN(64, n$2 + 1n) : n$2;
    }
  }
}
function _M0MPC28internal7strconv7Decimal11new__digits(self, s) {
  const new_digits = _M0MPC15array13ReadOnlyArray2atGmE(_M0FPC28internal7strconv19left__shift__cheats, s)._0;
  const cheat_num = _M0MPC15array13ReadOnlyArray2atGmE(_M0FPC28internal7strconv19left__shift__cheats, s)._1;
  const _bind$2 = cheat_num.length;
  let less;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < _bind$2) {
      const code_unit = cheat_num.charCodeAt(i);
      if (i >= self.digits_num) {
        less = true;
        break;
      }
      const d = code_unit - 48 | 0;
      const _tmp$2 = self.digits;
      if ((i >>> 0 < _tmp$2.length ? _tmp$2[i] : $oob()) !== d) {
        const _tmp$3 = self.digits;
        less = (i >>> 0 < _tmp$3.length ? _tmp$3[i] : $oob()) < d;
        break;
      }
      _tmp = i + 1 | 0;
      continue;
    } else {
      less = false;
      break;
    }
  }
  return less ? new_digits - 1 | 0 : new_digits;
}
function _M0MPC28internal7strconv7Decimal11left__shift(self, s) {
  const new_digits = _M0MPC28internal7strconv7Decimal11new__digits(self, s);
  let read_index = self.digits_num;
  let write_index = self.digits_num + new_digits | 0;
  let acc = 0n;
  read_index = read_index - 1 | 0;
  while (true) {
    if (read_index >= 0) {
      const _tmp = self.digits;
      const _tmp$2 = read_index;
      const d = _M0MPC14byte4Byte9to__int64(_tmp$2 >>> 0 < _tmp.length ? _tmp[_tmp$2] : $oob());
      acc = BigInt.asUintN(64, acc + BigInt.asUintN(64, d << BigInt(s & 63)));
      if (10n === 0n) {
        $panic();
      }
      const quo = BigInt.asUintN(64, BigInt.asIntN(64, acc) / BigInt.asIntN(64, 10n));
      const rem = Number(BigInt.asIntN(32, BigInt.asUintN(64, acc - BigInt.asUintN(64, quo * 10n)))) | 0;
      write_index = write_index - 1 | 0;
      if (write_index < self.digits.length) {
        const _tmp$3 = self.digits;
        const _tmp$4 = write_index;
        if (_tmp$4 >>> 0 < _tmp$3.length) {
          _tmp$3[_tmp$4] = rem & 255;
        } else {
          $oob();
        }
      } else {
        if (rem !== 0) {
          self.truncated = true;
        }
      }
      acc = quo;
      read_index = read_index - 1 | 0;
      continue;
    } else {
      break;
    }
  }
  while (true) {
    if (BigInt.asIntN(64, acc) > BigInt.asIntN(64, 0n)) {
      if (10n === 0n) {
        $panic();
      }
      const quo = BigInt.asUintN(64, BigInt.asIntN(64, acc) / BigInt.asIntN(64, 10n));
      const rem = Number(BigInt.asIntN(32, BigInt.asUintN(64, acc - BigInt.asUintN(64, 10n * quo)))) | 0;
      write_index = write_index - 1 | 0;
      if (write_index < self.digits.length) {
        const _tmp = self.digits;
        const _tmp$2 = write_index;
        if (_tmp$2 >>> 0 < _tmp.length) {
          _tmp[_tmp$2] = rem & 255;
        } else {
          $oob();
        }
      } else {
        if (rem !== 0) {
          self.truncated = true;
        }
      }
      acc = quo;
      continue;
    } else {
      break;
    }
  }
  self.digits_num = self.digits_num + new_digits | 0;
  if (self.digits_num > self.digits.length) {
    self.digits_num = self.digits.length;
  }
  self.decimal_point = self.decimal_point + new_digits | 0;
  _M0MPC28internal7strconv7Decimal4trim(self);
}
function _M0MPC28internal7strconv7Decimal12right__shift(self, s) {
  let read_index = 0;
  let write_index = 0;
  let acc = 0n;
  while (true) {
    if (BigInt.asUintN(64, BigInt.asUintN(64, BigInt.asUintN(64, acc) >> BigInt(s & 63))) === BigInt.asUintN(64, 0n)) {
      if (read_index >= self.digits_num) {
        while (true) {
          if (BigInt.asUintN(64, BigInt.asUintN(64, BigInt.asUintN(64, acc) >> BigInt(s & 63))) === BigInt.asUintN(64, 0n)) {
            acc = BigInt.asUintN(64, acc * 10n);
            read_index = read_index + 1 | 0;
            continue;
          } else {
            break;
          }
        }
        break;
      }
      const _tmp = self.digits;
      const _tmp$2 = read_index;
      const d = _tmp$2 >>> 0 < _tmp.length ? _tmp[_tmp$2] : $oob();
      acc = BigInt.asUintN(64, BigInt.asUintN(64, acc * 10n) + _M0MPC14byte4Byte9to__int64(d));
      read_index = read_index + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  self.decimal_point = self.decimal_point - (read_index - 1 | 0) | 0;
  const mask = BigInt.asUintN(64, BigInt.asUintN(64, 1n << BigInt(s & 63)) - 1n);
  while (true) {
    if (read_index < self.digits_num) {
      const out = BigInt.asUintN(64, BigInt.asUintN(64, acc) >> BigInt(s & 63));
      const _tmp = self.digits;
      const _tmp$2 = write_index;
      if (_tmp$2 >>> 0 < _tmp.length) {
        _tmp[_tmp$2] = _M0MPC16uint646UInt648to__byte(out);
      } else {
        $oob();
      }
      write_index = write_index + 1 | 0;
      acc = BigInt.asUintN(64, acc & mask);
      const _tmp$3 = self.digits;
      const _tmp$4 = read_index;
      const d = _tmp$4 >>> 0 < _tmp$3.length ? _tmp$3[_tmp$4] : $oob();
      acc = BigInt.asUintN(64, BigInt.asUintN(64, acc * 10n) + _M0MPC14byte4Byte9to__int64(d));
      read_index = read_index + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  while (true) {
    if (BigInt.asUintN(64, acc) > BigInt.asUintN(64, 0n)) {
      const out = BigInt.asUintN(64, BigInt.asUintN(64, acc) >> BigInt(s & 63));
      if (write_index < self.digits.length) {
        const _tmp = self.digits;
        const _tmp$2 = write_index;
        if (_tmp$2 >>> 0 < _tmp.length) {
          _tmp[_tmp$2] = _M0MPC16uint646UInt648to__byte(out);
        } else {
          $oob();
        }
        write_index = write_index + 1 | 0;
      } else {
        if (BigInt.asUintN(64, out) > BigInt.asUintN(64, 0n)) {
          self.truncated = true;
        }
      }
      acc = BigInt.asUintN(64, acc & mask);
      acc = BigInt.asUintN(64, acc * 10n);
      continue;
    } else {
      break;
    }
  }
  self.digits_num = write_index;
  _M0MPC28internal7strconv7Decimal4trim(self);
}
function _M0MPC28internal7strconv7Decimal11shift__priv(self, s) {
  if (self.digits_num === 0) {
    return undefined;
  }
  let s$2 = s;
  if (s$2 > 0) {
    while (true) {
      if (s$2 > 59) {
        _M0MPC28internal7strconv7Decimal11left__shift(self, 59);
        s$2 = s$2 - 59 | 0;
        continue;
      } else {
        break;
      }
    }
    _M0MPC28internal7strconv7Decimal11left__shift(self, s$2);
  }
  if (s$2 < 0) {
    while (true) {
      if (s$2 < -59) {
        _M0MPC28internal7strconv7Decimal12right__shift(self, 59);
        s$2 = s$2 + 59 | 0;
        continue;
      } else {
        break;
      }
    }
    _M0MPC28internal7strconv7Decimal12right__shift(self, -s$2 | 0);
    return;
  } else {
    return;
  }
}
function _M0MPC28internal7strconv7Decimal16to__double__priv(self) {
  let exponent = 0;
  let mantissa = 0n;
  const effective_dp = self.decimal_point + self.overflowed | 0;
  if (self.digits_num === 0 || effective_dp < -330) {
    mantissa = 0n;
    exponent = _M0FPC28internal7strconv12double__info.bias;
    const bits = _M0FPC28internal7strconv14assemble__bits(mantissa, exponent, self.negative);
    return new _M0DTPC16result6ResultGdRPC15error5ErrorE2Ok($i64_reinterpret_f64(bits));
  }
  if (self.decimal_point > 310) {
    const _bind$2 = _M0FPC28internal7strconv10range__errGuE();
    if (_bind$2.$tag === 1) {
      const _ok = _bind$2;
      _ok._0;
    } else {
      return _bind$2;
    }
  }
  self.decimal_point = self.decimal_point + self.overflowed | 0;
  while (true) {
    if (self.decimal_point > 0) {
      let n = 0;
      if (self.decimal_point >= _M0MPC15array13ReadOnlyArray6lengthGiE(_M0FPC28internal7strconv6powtab)) {
        n = 60;
      } else {
        n = _M0MPC15array13ReadOnlyArray2atGiE(_M0FPC28internal7strconv6powtab, self.decimal_point);
      }
      _M0MPC28internal7strconv7Decimal11shift__priv(self, -n | 0);
      exponent = exponent + n | 0;
      continue;
    } else {
      break;
    }
  }
  while (true) {
    let _tmp;
    if (self.decimal_point < 0) {
      _tmp = true;
    } else {
      let _tmp$2;
      if (self.decimal_point === 0) {
        const _tmp$3 = self.digits;
        _tmp$2 = (0 >>> 0 < _tmp$3.length ? _tmp$3[0] : $oob()) < 5;
      } else {
        _tmp$2 = false;
      }
      _tmp = _tmp$2;
    }
    if (_tmp) {
      let n = 0;
      if ((-self.decimal_point | 0) >= _M0MPC15array13ReadOnlyArray6lengthGiE(_M0FPC28internal7strconv6powtab)) {
        n = 60;
      } else {
        n = _M0MPC15array13ReadOnlyArray2atGiE(_M0FPC28internal7strconv6powtab, -self.decimal_point | 0);
      }
      _M0MPC28internal7strconv7Decimal11shift__priv(self, n);
      exponent = exponent - n | 0;
      continue;
    } else {
      break;
    }
  }
  exponent = exponent - 1 | 0;
  if (exponent < (_M0FPC28internal7strconv12double__info.bias + 1 | 0)) {
    const n = (_M0FPC28internal7strconv12double__info.bias + 1 | 0) - exponent | 0;
    _M0MPC28internal7strconv7Decimal11shift__priv(self, -n | 0);
    exponent = exponent + n | 0;
  }
  if ((exponent - _M0FPC28internal7strconv12double__info.bias | 0) >= ((1 << _M0FPC28internal7strconv12double__info.exponent_bits) - 1 | 0)) {
    const _bind$2 = _M0FPC28internal7strconv10range__errGuE();
    if (_bind$2.$tag === 1) {
      const _ok = _bind$2;
      _ok._0;
    } else {
      return _bind$2;
    }
  }
  _M0MPC28internal7strconv7Decimal11shift__priv(self, _M0FPC28internal7strconv12double__info.mantissa_bits + 1 | 0);
  mantissa = _M0MPC28internal7strconv7Decimal16rounded__integer(self);
  if (BigInt.asUintN(64, mantissa) === BigInt.asUintN(64, BigInt.asUintN(64, 2n << BigInt(_M0FPC28internal7strconv12double__info.mantissa_bits & 63)))) {
    mantissa = BigInt.asUintN(64, BigInt.asIntN(64, mantissa) >> BigInt(1 & 63));
    exponent = exponent + 1 | 0;
    if ((exponent - _M0FPC28internal7strconv12double__info.bias | 0) >= ((1 << _M0FPC28internal7strconv12double__info.exponent_bits) - 1 | 0)) {
      const _bind$2 = _M0FPC28internal7strconv10range__errGuE();
      if (_bind$2.$tag === 1) {
        const _ok = _bind$2;
        _ok._0;
      } else {
        return _bind$2;
      }
    }
  }
  if (BigInt.asUintN(64, BigInt.asUintN(64, mantissa & BigInt.asUintN(64, 1n << BigInt(_M0FPC28internal7strconv12double__info.mantissa_bits & 63)))) === BigInt.asUintN(64, 0n)) {
    exponent = _M0FPC28internal7strconv12double__info.bias;
  }
  const bits = _M0FPC28internal7strconv14assemble__bits(mantissa, exponent, self.negative);
  return new _M0DTPC16result6ResultGdRPC15error5ErrorE2Ok($i64_reinterpret_f64(bits));
}
function _M0FPC28internal7strconv17pow10__fast__path(exponent) {
  return _M0MPC15array13ReadOnlyArray2atGdE(_M0FPC28internal7strconv5table, exponent & 31);
}
function _M0MPC28internal7strconv6Number14is__fast__path(self) {
  return BigInt.asIntN(64, _M0FPC28internal7strconv25min__exponent__fast__path) <= BigInt.asIntN(64, self.exponent) && (BigInt.asIntN(64, self.exponent) <= BigInt.asIntN(64, _M0FPC28internal7strconv36max__exponent__disguised__fast__path) && (BigInt.asUintN(64, self.mantissa) <= BigInt.asUintN(64, _M0FPC28internal7strconv25max__mantissa__fast__path) && !self.many_digits));
}
function _M0MPC28internal7strconv6Number15try__fast__path(self) {
  if (_M0MPC28internal7strconv6Number14is__fast__path(self)) {
    let value;
    if (BigInt.asIntN(64, self.exponent) <= BigInt.asIntN(64, _M0FPC28internal7strconv25max__exponent__fast__path)) {
      const value$2 = $f64_convert_i64_u(BigInt.asUintN(64, self.mantissa));
      value = BigInt.asIntN(64, self.exponent) < BigInt.asIntN(64, 0n) ? value$2 / _M0FPC28internal7strconv17pow10__fast__path(-(Number(BigInt.asIntN(32, self.exponent)) | 0) | 0) : value$2 * _M0FPC28internal7strconv17pow10__fast__path(Number(BigInt.asIntN(32, self.exponent)) | 0);
    } else {
      const shift = BigInt.asUintN(64, self.exponent - _M0FPC28internal7strconv25max__exponent__fast__path);
      const _bind$2 = _M0FPC28internal7strconv12checked__mul(self.mantissa, _M0MPC15array13ReadOnlyArray2atGmE(_M0FPC28internal7strconv10int__pow10, Number(BigInt.asIntN(32, shift)) | 0));
      if (_bind$2 === undefined) {
        return _M0DTPC16option6OptionGdE4None__;
      } else {
        const _Some = _bind$2;
        const _mantissa = _Some;
        if (BigInt.asUintN(64, _mantissa) > BigInt.asUintN(64, _M0FPC28internal7strconv25max__mantissa__fast__path)) {
          return _M0DTPC16option6OptionGdE4None__;
        }
        value = $f64_convert_i64_u(BigInt.asUintN(64, _mantissa)) * _M0FPC28internal7strconv17pow10__fast__path(Number(BigInt.asIntN(32, _M0FPC28internal7strconv25max__exponent__fast__path)) | 0);
      }
    }
    if (self.negative) {
      value = -value;
    }
    return new _M0DTPC16option6OptionGdE4Some(value);
  } else {
    return _M0DTPC16option6OptionGdE4None__;
  }
}
function _M0FPC28internal7strconv13parse__double(str) {
  if (!_M0MPC16string10StringView9is__empty(str)) {
    if (_M0FPC28internal7strconv17check__underscore(str)) {
      const _bind$2 = _M0FPC28internal7strconv13parse__number(str);
      let _bind$3;
      if (_bind$2.$tag === 1) {
        const _ok = _bind$2;
        _bind$3 = _ok._0;
      } else {
        return _bind$2;
      }
      if (_bind$3 === undefined) {
        return _M0FPC28internal7strconv15parse__inf__nan(str);
      } else {
        const _Some = _bind$3;
        const _num = _Some;
        const _bind$4 = _M0MPC28internal7strconv6Number15try__fast__path(_num);
        if (_bind$4.$tag === 1) {
          const _Some$2 = _bind$4;
          const _value = _Some$2._0;
          return new _M0DTPC16result6ResultGdRPC15error5ErrorE2Ok(_value);
        } else {
          const fast = _num.many_digits ? _M0FPC16double14not__a__number : _M0FPC28internal7strconv20try__eisel__lemire64(_num.mantissa, _num.exponent, _num.negative);
          if (_M0MPC16double6Double7is__nan(fast)) {
            const _bind$5 = _M0FPC28internal7strconv20parse__decimal__priv(str);
            let _tmp;
            if (_bind$5.$tag === 1) {
              const _ok = _bind$5;
              _tmp = _ok._0;
            } else {
              return _bind$5;
            }
            return _M0MPC28internal7strconv7Decimal16to__double__priv(_tmp);
          } else {
            return new _M0DTPC16result6ResultGdRPC15error5ErrorE2Ok(fast);
          }
        }
      }
    } else {
      return _M0FPC28internal7strconv11syntax__errGdE();
    }
  } else {
    return _M0FPC28internal7strconv11syntax__errGdE();
  }
}
function _M0IPC14json10ParseErrorPC15debug5Debug8to__reprGRPC14json10ParseErrorE(_x_813) {
  switch (_x_813.$tag) {
    case 6: {
      const _InvalidChar = _x_813;
      const _$42$arg_814 = _InvalidChar._0;
      const _$42$arg_815 = _InvalidChar._1;
      return _M0MPC15debug4Repr4ctor("InvalidChar", [{ _0: undefined, _1: _M0IPC14json8PositionPC15debug5Debug8to__repr(_$42$arg_814) }, { _0: undefined, _1: _M0IPC14char4CharPC15debug5Debug8to__repr(_$42$arg_815) }]);
    }
    case 5: {
      return _M0MPC15debug4Repr4ctor("InvalidEof", []);
    }
    case 4: {
      const _InvalidNumber = _x_813;
      const _$42$arg_816 = _InvalidNumber._0;
      const _$42$arg_817 = _InvalidNumber._1;
      return _M0MPC15debug4Repr4ctor("InvalidNumber", [{ _0: undefined, _1: _M0IPC14json8PositionPC15debug5Debug8to__repr(_$42$arg_816) }, { _0: undefined, _1: _M0IPC16string6StringPC15debug5Debug8to__repr(_$42$arg_817) }]);
    }
    case 3: {
      const _InvalidIdentEscape = _x_813;
      const _$42$arg_818 = _InvalidIdentEscape._0;
      return _M0MPC15debug4Repr4ctor("InvalidIdentEscape", [{ _0: undefined, _1: _M0IPC14json8PositionPC15debug5Debug8to__repr(_$42$arg_818) }]);
    }
    default: {
      return _M0MPC15debug4Repr4ctor("DepthLimitExceeded", []);
    }
  }
}
function _M0IPC14json8PositionPC15debug5Debug8to__repr(_x_774) {
  const _bind$2 = [{ _0: "line", _1: _M0IPC13int3IntPC15debug5Debug8to__repr(_x_774.line) }, { _0: "column", _1: _M0IPC13int3IntPC15debug5Debug8to__repr(_x_774.column) }];
  return _M0MPC15debug4Repr6record(_M0MPB3Map3MapGsRPC15debug4ReprE(new _M0TPB9ArrayViewGUsRPC15debug4ReprEE(_bind$2, 0, 2), undefined));
}
function _M0FPC14json20offset__to__position(input, offset) {
  const _bind$2 = _M0MPC16string10StringView11code__units(input);
  const _bind$3 = _bind$2.end - _bind$2.start | 0;
  if (offset < 0 || offset > _bind$3) {
    $panic();
  }
  const _bind$4 = new _M0TPB9ArrayViewGkE(_bind$2.buf, _bind$2.start, offset + _bind$2.start | 0);
  const _bind$5 = _bind$4.end - _bind$4.start | 0;
  let _tmp = 0;
  let _tmp$2 = 1;
  let _tmp$3 = 0;
  while (true) {
    const _ = _tmp;
    const line = _tmp$2;
    const column = _tmp$3;
    if (_ < _bind$5) {
      const code_unit = _bind$4.buf[_bind$4.start + _ | 0];
      if (_M0IPC16uint166UInt16PB2Eq5equal(code_unit, 10)) {
        _tmp = _ + 1 | 0;
        _tmp$2 = line + 1 | 0;
        _tmp$3 = 0;
        continue;
      } else {
        _tmp = _ + 1 | 0;
        _tmp$3 = column + 1 | 0;
        continue;
      }
    } else {
      return new _M0TPC14json8Position(line, column);
    }
  }
}
function _M0MPC14json12ParseContext21invalid__char_2einnerGRPB4JsonE(ctx, shift) {
  const offset = ctx.offset + shift | 0;
  return new _M0DTPC16result6ResultGRPB4JsonRPC14json10ParseErrorE3Err(new _M0DTPC15error5Error52moonbitlang_2fcore_2fjson_2eParseError_2eInvalidChar(_M0FPC14json20offset__to__position(ctx.input, offset), _M0MPC16option6Option10unwrap__orGcE(_M0MPC16string10StringView9get__char(ctx.input, offset), 65533)));
}
function _M0MPC14json12ParseContext21invalid__char_2einnerGuE(ctx, shift) {
  const offset = ctx.offset + shift | 0;
  return new _M0DTPC16result6ResultGuRPC14json10ParseErrorE3Err(new _M0DTPC15error5Error52moonbitlang_2fcore_2fjson_2eParseError_2eInvalidChar(_M0FPC14json20offset__to__position(ctx.input, offset), _M0MPC16option6Option10unwrap__orGcE(_M0MPC16string10StringView9get__char(ctx.input, offset), 65533)));
}
function _M0MPC14json12ParseContext21invalid__char_2einnerGiE(ctx, shift) {
  const offset = ctx.offset + shift | 0;
  return new _M0DTPC16result6ResultGiRPC14json10ParseErrorE3Err(new _M0DTPC15error5Error52moonbitlang_2fcore_2fjson_2eParseError_2eInvalidChar(_M0FPC14json20offset__to__position(ctx.input, offset), _M0MPC16option6Option10unwrap__orGcE(_M0MPC16string10StringView9get__char(ctx.input, offset), 65533)));
}
function _M0MPC14json12ParseContext21lex__skip__whitespace(ctx) {
  const end = ctx.end_offset;
  let _tmp;
  let _tmp$2 = ctx.offset;
  _L: while (true) {
    const offset = _tmp$2;
    if (offset >= end) {
      _tmp = offset;
      break;
    }
    _L$2: {
      const _bind$2 = ctx.input;
      const _bind$3 = _bind$2.str.charCodeAt(_bind$2.start + offset | 0);
      switch (_bind$3) {
        case 32: {
          break _L$2;
        }
        case 9: {
          break _L$2;
        }
        case 13: {
          break _L$2;
        }
        case 10: {
          break _L$2;
        }
        default: {
          _tmp = offset;
          break _L;
        }
      }
    }
    _tmp$2 = offset + 1 | 0;
    continue;
  }
  ctx.offset = _tmp;
}
function _M0MPC14json12ParseContext4make(input) {
  return new _M0TPC14json12ParseContext(0, input, input.end - input.start | 0);
}
function _M0MPC14json12ParseContext19expect__ascii__char(ctx, c) {
  if (ctx.offset < ctx.end_offset) {
    const _bind$2 = ctx.input;
    const c1 = _bind$2.str.charCodeAt(_bind$2.start + ctx.offset | 0);
    ctx.offset = ctx.offset + 1 | 0;
    return c !== c1 ? _M0MPC14json12ParseContext21invalid__char_2einnerGuE(ctx, -1) : new _M0DTPC16result6ResultGuRPC14json10ParseErrorE2Ok(undefined);
  } else {
    return new _M0DTPC16result6ResultGuRPC14json10ParseErrorE3Err(_M0DTPC15error5Error51moonbitlang_2fcore_2fjson_2eParseError_2eInvalidEof__);
  }
}
function _M0FPC14json12checked__mul(a, b) {
  if (BigInt.asUintN(64, a) === BigInt.asUintN(64, 0n) || BigInt.asUintN(64, b) === BigInt.asUintN(64, 0n)) {
    return _M0FPC14json12checked__mulN6constrS1891;
  }
  if (BigInt.asUintN(64, a) === BigInt.asUintN(64, 1n)) {
    return b;
  }
  if (BigInt.asUintN(64, b) === BigInt.asUintN(64, 1n)) {
    return a;
  }
  if ($i64_clz(b) === 0 || $i64_clz(a) === 0) {
    return undefined;
  }
  if (b === 0n) {
    $panic();
  }
  const quotient = BigInt.asUintN(64, BigInt.asUintN(64, 18446744073709551615n) / BigInt.asUintN(64, b));
  return BigInt.asUintN(64, a) > BigInt.asUintN(64, quotient) ? undefined : BigInt.asUintN(64, a * b);
}
function _M0FPC14json23json__pow10__fast__path(exponent) {
  return _M0MPC15array13ReadOnlyArray2atGdE(_M0FPC14json12pow10__table, exponent & 31);
}
function _M0MPC14json14JsonNumberScan17try__fast__double(self) {
  if (BigInt.asUintN(64, self.mantissa) === BigInt.asUintN(64, 0n)) {
    return self.negative ? -0 : 0;
  }
  if (self.many_digits || (BigInt.asIntN(64, self.exponent) < BigInt.asIntN(64, 18446744073709551594n) || (BigInt.asIntN(64, self.exponent) > BigInt.asIntN(64, 37n) || BigInt.asUintN(64, self.mantissa) > BigInt.asUintN(64, 9007199254740992n)))) {
    return _M0FPC16double14not__a__number;
  }
  let value;
  if (BigInt.asIntN(64, self.exponent) <= BigInt.asIntN(64, 22n)) {
    const value$2 = $f64_convert_i64_u(BigInt.asUintN(64, self.mantissa));
    value = BigInt.asIntN(64, self.exponent) < BigInt.asIntN(64, 0n) ? value$2 / _M0FPC14json23json__pow10__fast__path(-(Number(BigInt.asIntN(32, self.exponent)) | 0) | 0) : value$2 * _M0FPC14json23json__pow10__fast__path(Number(BigInt.asIntN(32, self.exponent)) | 0);
  } else {
    const shift = BigInt.asUintN(64, self.exponent - 22n);
    const _bind$2 = _M0FPC14json12checked__mul(self.mantissa, _M0MPC15array13ReadOnlyArray2atGmE(_M0FPC14json17int__pow10__table, Number(BigInt.asIntN(32, shift)) | 0));
    if (_bind$2 === undefined) {
      return _M0FPC16double14not__a__number;
    } else {
      const _Some = _bind$2;
      const _mantissa = _Some;
      if (BigInt.asUintN(64, _mantissa) > BigInt.asUintN(64, 9007199254740992n)) {
        return _M0FPC16double14not__a__number;
      }
      value = $f64_convert_i64_u(BigInt.asUintN(64, _mantissa)) * _M0FPC14json23json__pow10__fast__path(22);
    }
  }
  return self.negative ? -value : value;
}
function _M0MPC14json12ParseContext17lex__integer__end(ctx, start, end) {
  const _bind$2 = ctx.input;
  const negative = _M0IPC16uint166UInt16PB2Eq5equal(_bind$2.str.charCodeAt(_bind$2.start + start | 0), 45);
  const number_start = negative ? start + 1 | 0 : start;
  let _tmp = number_start;
  let _tmp$2 = 0n;
  while (true) {
    const i = _tmp;
    const acc = _tmp$2;
    if (i >= end) {
      const value = negative ? BigInt.asUintN(64, -acc) : acc;
      const _bind$3 = $f64_convert_i64(BigInt.asIntN(64, value));
      const _bind$4 = undefined;
      return new _M0TPC14json11LexedNumber(_bind$4, _bind$3);
    }
    const _bind$3 = ctx.input;
    const digit = BigInt.asUintN(64, BigInt(_bind$3.str.charCodeAt(_bind$3.start + i | 0) - 48 | 0));
    if (10n === 0n) {
      $panic();
    }
    if (BigInt.asIntN(64, acc) > BigInt.asIntN(64, BigInt.asUintN(64, BigInt.asIntN(64, BigInt.asUintN(64, 9007199254740991n - digit)) / BigInt.asIntN(64, 10n)))) {
      const s = _M0MPC16string10StringView12view_2einner(ctx.input, start, end);
      let _try_err;
      _L: {
        const _bind$4 = _M0FPC28internal7strconv13parse__double(s);
        let value;
        if (_bind$4.$tag === 1) {
          const _ok = _bind$4;
          value = _ok._0;
        } else {
          const _err = _bind$4;
          _try_err = _err._0;
          break _L;
        }
        const _bind$5 = s;
        return new _M0TPC14json11LexedNumber(_bind$5, value);
      }
      let _tmp$3;
      if (negative) {
        const _bind$4 = s;
        _tmp$3 = new _M0TPC14json11LexedNumber(_bind$4, _M0FPC16double13neg__infinity);
      } else {
        const _bind$4 = s;
        _tmp$3 = new _M0TPC14json11LexedNumber(_bind$4, _M0FPC16double8infinity);
      }
      return _tmp$3;
    }
    _tmp = i + 1 | 0;
    _tmp$2 = BigInt.asUintN(64, BigInt.asUintN(64, acc * 10n) + digit);
    continue;
  }
}
function _M0MPC14json12ParseContext18scan__json__number(ctx, start, end) {
  const _bind$2 = ctx.input;
  const negative = _M0IPC16uint166UInt16PB2Eq5equal(_bind$2.str.charCodeAt(_bind$2.start + start | 0), 45);
  let has_decimal = false;
  let has_exponent = false;
  let exponent_negative = false;
  let exponent_part = 0n;
  let fractional_digits = 0;
  let mantissa = 0n;
  let significant_digits = 0;
  let seen_nonzero = false;
  const _bind$3 = negative ? start + 1 | 0 : start;
  let _tmp = _bind$3;
  while (true) {
    const i = _tmp;
    if (i < end) {
      _L: {
        _L$2: {
          const _bind$4 = ctx.input;
          const _bind$5 = _bind$4.str.charCodeAt(_bind$4.start + i | 0);
          if (_bind$5 >= 48 && _bind$5 <= 57) {
            const digit = _bind$5 - 48 | 0;
            if (has_exponent) {
              if (BigInt.asIntN(64, exponent_part) < BigInt.asIntN(64, 100000n)) {
                const next_exponent = BigInt.asUintN(64, BigInt.asUintN(64, exponent_part * 10n) + BigInt.asUintN(64, BigInt(digit)));
                exponent_part = BigInt.asIntN(64, next_exponent) > BigInt.asIntN(64, 100000n) ? 100000n : next_exponent;
              }
            } else {
              if (has_decimal) {
                fractional_digits = fractional_digits + 1 | 0;
              }
              if (digit !== 0 || seen_nonzero) {
                seen_nonzero = true;
                significant_digits = significant_digits + 1 | 0;
                if (significant_digits <= 19) {
                  mantissa = BigInt.asUintN(64, BigInt.asUintN(64, mantissa * 10n) + BigInt.asUintN(64, BigInt(digit >>> 0)));
                }
              }
            }
          } else {
            if (_bind$5 === 46) {
              has_decimal = true;
            } else {
              if (_bind$5 === 101) {
                break _L$2;
              } else {
                if (_bind$5 === 69) {
                  break _L$2;
                }
              }
            }
          }
          break _L;
        }
        has_exponent = true;
        if ((i + 1 | 0) < end) {
          const _bind$4 = ctx.input;
          const next = _bind$4.str.charCodeAt(_bind$4.start + (i + 1 | 0) | 0);
          if (_M0IPC16uint166UInt16PB2Eq5equal(next, 45)) {
            exponent_negative = true;
          }
        }
      }
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const exponent_part$2 = exponent_negative ? BigInt.asUintN(64, -exponent_part) : exponent_part;
  return new _M0TPC14json14JsonNumberScan(negative, !has_decimal && !has_exponent, mantissa, BigInt.asUintN(64, exponent_part$2 - BigInt.asUintN(64, BigInt(fractional_digits))), significant_digits > 19);
}
function _M0MPC14json12ParseContext16lex__number__end(ctx, start, end) {
  const scan = _M0MPC14json12ParseContext18scan__json__number(ctx, start, end);
  if (scan.is_integer) {
    if (!scan.many_digits && (BigInt.asUintN(64, scan.exponent) === BigInt.asUintN(64, 0n) && BigInt.asUintN(64, scan.mantissa) <= BigInt.asUintN(64, 9007199254740991n))) {
      const v = $f64_convert_i64(BigInt.asIntN(64, scan.mantissa));
      const value = scan.negative ? -v : v;
      const _bind$2 = undefined;
      return new _M0TPC14json11LexedNumber(_bind$2, value);
    }
    return _M0MPC14json12ParseContext17lex__integer__end(ctx, start, end);
  }
  const fast = _M0MPC14json14JsonNumberScan17try__fast__double(scan);
  if (!_M0MPC16double6Double7is__nan(fast)) {
    const _bind$2 = undefined;
    return new _M0TPC14json11LexedNumber(_bind$2, fast);
  }
  if (!scan.many_digits) {
    const fast$2 = _M0FPC28internal7strconv20try__eisel__lemire64(scan.mantissa, scan.exponent, scan.negative);
    if (!_M0MPC16double6Double7is__nan(fast$2)) {
      const _bind$2 = undefined;
      return new _M0TPC14json11LexedNumber(_bind$2, fast$2);
    }
  }
  const s = _M0MPC16string10StringView12view_2einner(ctx.input, start, end);
  let _try_err;
  _L: {
    const _bind$2 = _M0FPC28internal7strconv13parse__double(s);
    let d;
    if (_bind$2.$tag === 1) {
      const _ok = _bind$2;
      d = _ok._0;
    } else {
      const _err = _bind$2;
      _try_err = _err._0;
      break _L;
    }
    const _bind$3 = undefined;
    return new _M0TPC14json11LexedNumber(_bind$3, d);
  }
  if (scan.negative) {
    const _bind$2 = s;
    return new _M0TPC14json11LexedNumber(_bind$2, _M0FPC16double13neg__infinity);
  } else {
    const _bind$2 = s;
    return new _M0TPC14json11LexedNumber(_bind$2, _M0FPC16double8infinity);
  }
}
function _M0MPC14json12ParseContext10read__char(ctx) {
  if (ctx.offset < ctx.end_offset) {
    const _bind$2 = ctx.input;
    const c1 = _bind$2.str.charCodeAt(_bind$2.start + ctx.offset | 0);
    ctx.offset = ctx.offset + 1 | 0;
    if (c1 >= 55296 && c1 <= 56319) {
      if (ctx.offset < ctx.end_offset) {
        const _bind$3 = ctx.input;
        const c2 = _bind$3.str.charCodeAt(_bind$3.start + ctx.offset | 0);
        if (c2 >= 56320 && c2 <= 57343) {
          ctx.offset = ctx.offset + 1 | 0;
          const c3 = ((c1 << 10) + c2 | 0) - 56613888 | 0;
          return c3;
        }
      }
    }
    return c1;
  } else {
    return -1;
  }
}
function _M0MPC14json12ParseContext31lex__decimal__exponent__integer(ctx, start) {
  while (true) {
    const _bind$2 = _M0MPC14json12ParseContext10read__char(ctx);
    if (_bind$2 === -1) {
      return _M0MPC14json12ParseContext16lex__number__end(ctx, start, ctx.offset);
    } else {
      const _Some = _bind$2;
      const _x = _Some;
      if (_x >= 48 && _x <= 57) {
        continue;
      } else {
        ctx.offset = ctx.offset - 1 | 0;
        return _M0MPC14json12ParseContext16lex__number__end(ctx, start, ctx.offset);
      }
    }
  }
}
function _M0MPC14json12ParseContext28lex__decimal__exponent__sign(ctx, start) {
  const _bind$2 = _M0MPC14json12ParseContext10read__char(ctx);
  if (_bind$2 === -1) {
    return new _M0DTPC16result6ResultGRPC14json11LexedNumberRPC14json10ParseErrorE3Err(_M0DTPC15error5Error51moonbitlang_2fcore_2fjson_2eParseError_2eInvalidEof__);
  } else {
    const _Some = _bind$2;
    const _x = _Some;
    if (_x >= 48 && _x <= 57) {
      return new _M0DTPC16result6ResultGRPC14json11LexedNumberRPC14json10ParseErrorE2Ok(_M0MPC14json12ParseContext31lex__decimal__exponent__integer(ctx, start));
    } else {
      ctx.offset = ctx.offset - 1 | 0;
      return _M0MPC14json12ParseContext21invalid__char_2einnerGRPB4JsonE(ctx, 0);
    }
  }
}
function _M0MPC14json12ParseContext22lex__decimal__exponent(ctx, start) {
  _L: {
    const _bind$2 = _M0MPC14json12ParseContext10read__char(ctx);
    if (_bind$2 === -1) {
      return new _M0DTPC16result6ResultGRPC14json11LexedNumberRPC14json10ParseErrorE3Err(_M0DTPC15error5Error51moonbitlang_2fcore_2fjson_2eParseError_2eInvalidEof__);
    } else {
      const _Some = _bind$2;
      const _x = _Some;
      if (_x === 43) {
        break _L;
      } else {
        if (_x === 45) {
          break _L;
        } else {
          if (_x >= 48 && _x <= 57) {
            return new _M0DTPC16result6ResultGRPC14json11LexedNumberRPC14json10ParseErrorE2Ok(_M0MPC14json12ParseContext31lex__decimal__exponent__integer(ctx, start));
          } else {
            ctx.offset = ctx.offset - 1 | 0;
            return _M0MPC14json12ParseContext21invalid__char_2einnerGRPB4JsonE(ctx, 0);
          }
        }
      }
    }
  }
  const _bind$2 = _M0MPC14json12ParseContext28lex__decimal__exponent__sign(ctx, start);
  let _tmp;
  if (_bind$2.$tag === 1) {
    const _ok = _bind$2;
    _tmp = _ok._0;
  } else {
    return _bind$2;
  }
  return new _M0DTPC16result6ResultGRPC14json11LexedNumberRPC14json10ParseErrorE2Ok(_tmp);
}
function _M0MPC14json12ParseContext22lex__decimal__fraction(ctx, start) {
  while (true) {
    _L: {
      const _bind$2 = _M0MPC14json12ParseContext10read__char(ctx);
      if (_bind$2 === -1) {
        return new _M0DTPC16result6ResultGRPC14json11LexedNumberRPC14json10ParseErrorE2Ok(_M0MPC14json12ParseContext16lex__number__end(ctx, start, ctx.offset));
      } else {
        const _Some = _bind$2;
        const _x = _Some;
        if (_x === 101) {
          break _L;
        } else {
          if (_x === 69) {
            break _L;
          } else {
            if (_x >= 48 && _x <= 57) {
              continue;
            } else {
              ctx.offset = ctx.offset - 1 | 0;
              return new _M0DTPC16result6ResultGRPC14json11LexedNumberRPC14json10ParseErrorE2Ok(_M0MPC14json12ParseContext16lex__number__end(ctx, start, ctx.offset));
            }
          }
        }
      }
    }
    const _bind$2 = _M0MPC14json12ParseContext22lex__decimal__exponent(ctx, start);
    let _tmp;
    if (_bind$2.$tag === 1) {
      const _ok = _bind$2;
      _tmp = _ok._0;
    } else {
      return _bind$2;
    }
    return new _M0DTPC16result6ResultGRPC14json11LexedNumberRPC14json10ParseErrorE2Ok(_tmp);
  }
}
function _M0MPC14json12ParseContext19lex__decimal__point(ctx, start) {
  const _bind$2 = _M0MPC14json12ParseContext10read__char(ctx);
  if (_bind$2 === -1) {
    return new _M0DTPC16result6ResultGRPC14json11LexedNumberRPC14json10ParseErrorE3Err(_M0DTPC15error5Error51moonbitlang_2fcore_2fjson_2eParseError_2eInvalidEof__);
  } else {
    const _Some = _bind$2;
    const _x = _Some;
    return _x >= 48 && _x <= 57 ? _M0MPC14json12ParseContext22lex__decimal__fraction(ctx, start) : _M0MPC14json12ParseContext21invalid__char_2einnerGRPB4JsonE(ctx, -1);
  }
}
function _M0MPC14json12ParseContext21lex__decimal__integer(ctx, start) {
  while (true) {
    _L: {
      const _bind$2 = _M0MPC14json12ParseContext10read__char(ctx);
      if (_bind$2 === -1) {
        return new _M0DTPC16result6ResultGRPC14json11LexedNumberRPC14json10ParseErrorE2Ok(_M0MPC14json12ParseContext16lex__number__end(ctx, start, ctx.offset));
      } else {
        const _Some = _bind$2;
        const _x = _Some;
        if (_x === 46) {
          const _bind$3 = _M0MPC14json12ParseContext19lex__decimal__point(ctx, start);
          let _tmp;
          if (_bind$3.$tag === 1) {
            const _ok = _bind$3;
            _tmp = _ok._0;
          } else {
            return _bind$3;
          }
          return new _M0DTPC16result6ResultGRPC14json11LexedNumberRPC14json10ParseErrorE2Ok(_tmp);
        } else {
          if (_x === 101) {
            break _L;
          } else {
            if (_x === 69) {
              break _L;
            } else {
              if (_x >= 48 && _x <= 57) {
                continue;
              } else {
                ctx.offset = ctx.offset - 1 | 0;
                return new _M0DTPC16result6ResultGRPC14json11LexedNumberRPC14json10ParseErrorE2Ok(_M0MPC14json12ParseContext16lex__number__end(ctx, start, ctx.offset));
              }
            }
          }
        }
      }
    }
    const _bind$2 = _M0MPC14json12ParseContext22lex__decimal__exponent(ctx, start);
    let _tmp;
    if (_bind$2.$tag === 1) {
      const _ok = _bind$2;
      _tmp = _ok._0;
    } else {
      return _bind$2;
    }
    return new _M0DTPC16result6ResultGRPC14json11LexedNumberRPC14json10ParseErrorE2Ok(_tmp);
  }
}
function _M0MPC14json12ParseContext16lex__hex__digits(ctx, n) {
  let _tmp;
  let _tmp$2 = 0;
  let _tmp$3 = 0;
  while (true) {
    const _ = _tmp$2;
    const r = _tmp$3;
    if (_ < n) {
      const _bind$2 = _M0MPC14json12ParseContext10read__char(ctx);
      let d;
      if (_bind$2 === -1) {
        return new _M0DTPC16result6ResultGiRPC14json10ParseErrorE3Err(_M0DTPC15error5Error51moonbitlang_2fcore_2fjson_2eParseError_2eInvalidEof__);
      } else {
        const _Some = _bind$2;
        const _x = _Some;
        if (_x >= 48 && _x <= 57) {
          d = _x - 48 | 0;
        } else {
          if (_x >= 65 && _x <= 70) {
            d = (_x - 65 | 0) + 10 | 0;
          } else {
            if (_x >= 97 && _x <= 102) {
              d = (_x - 97 | 0) + 10 | 0;
            } else {
              const _bind$3 = _M0MPC14json12ParseContext21invalid__char_2einnerGiE(ctx, -_M0MPC14char4Char10utf16__len(_x) | 0);
              if (_bind$3.$tag === 1) {
                const _ok = _bind$3;
                d = _ok._0;
              } else {
                return _bind$3;
              }
            }
          }
        }
      }
      _tmp$2 = _ + 1 | 0;
      _tmp$3 = r << 4 | d;
      continue;
    } else {
      _tmp = r;
      break;
    }
  }
  return new _M0DTPC16result6ResultGiRPC14json10ParseErrorE2Ok(_tmp);
}
function _M0MPC14json12ParseContext19unpaired__surrogateGuE(ctx, escape_start) {
  return _M0MPC14json12ParseContext21invalid__char_2einnerGuE(ctx, escape_start - ctx.offset | 0);
}
function _M0MPC14json12ParseContext17lex__string__slowN5flushS353(_env, end) {
  const ctx = _env._2;
  const start = _env._1;
  const buf = _env._0;
  if (start.val > 0 && end > start.val) {
    _M0IPB13StringBuilderPB6Logger11write__view(buf, _M0MPC16string10StringView11sub_2einner(ctx.input, start.val, end));
    return;
  } else {
    return;
  }
}
function _M0MPC14json12ParseContext17lex__string__slow(ctx) {
  const buf = _M0MPB13StringBuilder21StringBuilder_2einner(0);
  const start = new _M0TPB8MutLocalGiE(ctx.offset);
  const _env = { _0: buf, _1: start, _2: ctx };
  _L: while (true) {
    const _bind$2 = _M0MPC14json12ParseContext10read__char(ctx);
    if (_bind$2 === -1) {
      return new _M0DTPC16result6ResultGsRPC14json10ParseErrorE3Err(_M0DTPC15error5Error51moonbitlang_2fcore_2fjson_2eParseError_2eInvalidEof__);
    } else {
      const _Some = _bind$2;
      const _x = _Some;
      switch (_x) {
        case 34: {
          _M0MPC14json12ParseContext17lex__string__slowN5flushS353(_env, ctx.offset - 1 | 0);
          break _L;
        }
        case 92: {
          _M0MPC14json12ParseContext17lex__string__slowN5flushS353(_env, ctx.offset - 1 | 0);
          const _bind$3 = _M0MPC14json12ParseContext10read__char(ctx);
          if (_bind$3 === -1) {
            return new _M0DTPC16result6ResultGsRPC14json10ParseErrorE3Err(_M0DTPC15error5Error51moonbitlang_2fcore_2fjson_2eParseError_2eInvalidEof__);
          } else {
            const _Some$2 = _bind$3;
            const _x$2 = _Some$2;
            switch (_x$2) {
              case 98: {
                _M0IPB13StringBuilderPB6Logger11write__char(buf, 8);
                break;
              }
              case 102: {
                _M0IPB13StringBuilderPB6Logger11write__char(buf, 12);
                break;
              }
              case 110: {
                _M0IPB13StringBuilderPB6Logger11write__char(buf, 10);
                break;
              }
              case 114: {
                _M0IPB13StringBuilderPB6Logger11write__char(buf, 13);
                break;
              }
              case 116: {
                _M0IPB13StringBuilderPB6Logger11write__char(buf, 9);
                break;
              }
              case 34: {
                _M0IPB13StringBuilderPB6Logger11write__char(buf, 34);
                break;
              }
              case 92: {
                _M0IPB13StringBuilderPB6Logger11write__char(buf, 92);
                break;
              }
              case 47: {
                _M0IPB13StringBuilderPB6Logger11write__char(buf, 47);
                break;
              }
              case 117: {
                const escape_start = ctx.offset - 2 | 0;
                const _bind$4 = _M0MPC14json12ParseContext16lex__hex__digits(ctx, 4);
                let c;
                if (_bind$4.$tag === 1) {
                  const _ok = _bind$4;
                  c = _ok._0;
                } else {
                  return _bind$4;
                }
                if (c >= 55296 && c <= 56319) {
                  const _bind$5 = _M0MPC14json12ParseContext10read__char(ctx);
                  if (_bind$5 === -1) {
                    return new _M0DTPC16result6ResultGsRPC14json10ParseErrorE3Err(_M0DTPC15error5Error51moonbitlang_2fcore_2fjson_2eParseError_2eInvalidEof__);
                  } else {
                    const _Some$3 = _bind$5;
                    const _x$3 = _Some$3;
                    if (_x$3 === 92) {
                    } else {
                      const _bind$6 = _M0MPC14json12ParseContext19unpaired__surrogateGuE(ctx, escape_start);
                      if (_bind$6.$tag === 1) {
                        const _ok = _bind$6;
                        _ok._0;
                      } else {
                        return _bind$6;
                      }
                    }
                  }
                  const _bind$6 = _M0MPC14json12ParseContext10read__char(ctx);
                  if (_bind$6 === -1) {
                    return new _M0DTPC16result6ResultGsRPC14json10ParseErrorE3Err(_M0DTPC15error5Error51moonbitlang_2fcore_2fjson_2eParseError_2eInvalidEof__);
                  } else {
                    const _Some$3 = _bind$6;
                    const _x$3 = _Some$3;
                    if (_x$3 === 117) {
                    } else {
                      const _bind$7 = _M0MPC14json12ParseContext19unpaired__surrogateGuE(ctx, escape_start);
                      if (_bind$7.$tag === 1) {
                        const _ok = _bind$7;
                        _ok._0;
                      } else {
                        return _bind$7;
                      }
                    }
                  }
                  const _bind$7 = _M0MPC14json12ParseContext16lex__hex__digits(ctx, 4);
                  let c2;
                  if (_bind$7.$tag === 1) {
                    const _ok = _bind$7;
                    c2 = _ok._0;
                  } else {
                    return _bind$7;
                  }
                  if (c2 >= 56320 && c2 <= 57343) {
                    const combined = ((c << 10) + c2 | 0) - 56613888 | 0;
                    _M0IPB13StringBuilderPB6Logger11write__char(buf, combined);
                  } else {
                    const _bind$8 = _M0MPC14json12ParseContext19unpaired__surrogateGuE(ctx, escape_start);
                    if (_bind$8.$tag === 1) {
                      const _ok = _bind$8;
                      _ok._0;
                    } else {
                      return _bind$8;
                    }
                  }
                } else {
                  if (c >= 56320 && c <= 57343) {
                    const _bind$5 = _M0MPC14json12ParseContext19unpaired__surrogateGuE(ctx, escape_start);
                    if (_bind$5.$tag === 1) {
                      const _ok = _bind$5;
                      _ok._0;
                    } else {
                      return _bind$5;
                    }
                  } else {
                    _M0IPB13StringBuilderPB6Logger11write__char(buf, c);
                  }
                }
                break;
              }
              default: {
                const _bind$5 = _M0MPC14json12ParseContext21invalid__char_2einnerGuE(ctx, -_M0MPC14char4Char10utf16__len(_x$2) | 0);
                if (_bind$5.$tag === 1) {
                  const _ok = _bind$5;
                  _ok._0;
                } else {
                  return _bind$5;
                }
              }
            }
          }
          start.val = ctx.offset;
          break;
        }
        default: {
          if (_x < 32) {
            const _bind$4 = _M0MPC14json12ParseContext21invalid__char_2einnerGuE(ctx, -1);
            if (_bind$4.$tag === 1) {
              const _ok = _bind$4;
              _ok._0;
            } else {
              return _bind$4;
            }
          } else {
            continue _L;
          }
        }
      }
    }
    continue;
  }
  return new _M0DTPC16result6ResultGsRPC14json10ParseErrorE2Ok(_M0MPB13StringBuilder10to__string(buf));
}
function _M0MPC14json12ParseContext11lex__string(ctx) {
  const string_start = ctx.offset;
  const _bind$2 = ctx.end_offset;
  let _tmp = string_start;
  while (true) {
    const i = _tmp;
    if (i < _bind$2) {
      const _bind$3 = ctx.input;
      const c = _bind$3.str.charCodeAt(_bind$3.start + i | 0);
      if (_M0IPC16uint166UInt16PB2Eq5equal(c, 34)) {
        ctx.offset = i + 1 | 0;
        return new _M0DTPC16result6ResultGsRPC14json10ParseErrorE2Ok(_M0MPC16string10StringView9to__owned(_M0MPC16string10StringView12view_2einner(ctx.input, string_start, i)));
      } else {
        if (_M0IPC16uint166UInt16PB2Eq5equal(c, 92)) {
          const _bind$4 = _M0MPC14json12ParseContext17lex__string__slow(ctx);
          let _tmp$2;
          if (_bind$4.$tag === 1) {
            const _ok = _bind$4;
            _tmp$2 = _ok._0;
          } else {
            return _bind$4;
          }
          return new _M0DTPC16result6ResultGsRPC14json10ParseErrorE2Ok(_tmp$2);
        } else {
          if (c < 32) {
            ctx.offset = i + 1 | 0;
            const _bind$4 = _M0MPC14json12ParseContext21invalid__char_2einnerGuE(ctx, -1);
            if (_bind$4.$tag === 1) {
              const _ok = _bind$4;
              _ok._0;
            } else {
              return _bind$4;
            }
          }
        }
      }
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return new _M0DTPC16result6ResultGsRPC14json10ParseErrorE3Err(_M0DTPC15error5Error51moonbitlang_2fcore_2fjson_2eParseError_2eInvalidEof__);
}
function _M0MPC14json12ParseContext9lex__zero(ctx, start) {
  _L: {
    const _bind$2 = _M0MPC14json12ParseContext10read__char(ctx);
    if (_bind$2 === -1) {
      return new _M0DTPC16result6ResultGRPC14json11LexedNumberRPC14json10ParseErrorE2Ok(_M0MPC14json12ParseContext16lex__number__end(ctx, start, ctx.offset));
    } else {
      const _Some = _bind$2;
      const _x = _Some;
      if (_x === 46) {
        return _M0MPC14json12ParseContext19lex__decimal__point(ctx, start);
      } else {
        if (_x === 101) {
          break _L;
        } else {
          if (_x === 69) {
            break _L;
          } else {
            if (_x >= 48 && _x <= 57) {
              ctx.offset = ctx.offset - 1 | 0;
              return _M0MPC14json12ParseContext21invalid__char_2einnerGRPB4JsonE(ctx, 0);
            } else {
              ctx.offset = ctx.offset - 1 | 0;
              return new _M0DTPC16result6ResultGRPC14json11LexedNumberRPC14json10ParseErrorE2Ok(_M0MPC14json12ParseContext16lex__number__end(ctx, start, ctx.offset));
            }
          }
        }
      }
    }
  }
  return _M0MPC14json12ParseContext22lex__decimal__exponent(ctx, start);
}
function _M0MPC14json12ParseContext10lex__value(ctx, allow_rbracket) {
  _M0MPC14json12ParseContext21lex__skip__whitespace(ctx);
  const _bind$2 = _M0MPC14json12ParseContext10read__char(ctx);
  if (_bind$2 === -1) {
    return new _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE3Err(_M0DTPC15error5Error51moonbitlang_2fcore_2fjson_2eParseError_2eInvalidEof__);
  } else {
    const _Some = _bind$2;
    const _x = _Some;
    if (_x === 123) {
      return new _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE2Ok(_M0DTPC14json5Token6LBrace__);
    } else {
      if (_x === 91) {
        return new _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE2Ok(_M0DTPC14json5Token8LBracket__);
      } else {
        if (_x === 93) {
          if (allow_rbracket) {
            return new _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE2Ok(_M0DTPC14json5Token8RBracket__);
          } else {
            return _M0MPC14json12ParseContext21invalid__char_2einnerGRPB4JsonE(ctx, -1);
          }
        } else {
          if (_x === 110) {
            const _bind$3 = _M0MPC14json12ParseContext19expect__ascii__char(ctx, 117);
            if (_bind$3.$tag === 1) {
              const _ok = _bind$3;
              _ok._0;
            } else {
              return _bind$3;
            }
            const _bind$4 = _M0MPC14json12ParseContext19expect__ascii__char(ctx, 108);
            if (_bind$4.$tag === 1) {
              const _ok = _bind$4;
              _ok._0;
            } else {
              return _bind$4;
            }
            const _bind$5 = _M0MPC14json12ParseContext19expect__ascii__char(ctx, 108);
            if (_bind$5.$tag === 1) {
              const _ok = _bind$5;
              _ok._0;
            } else {
              return _bind$5;
            }
            return new _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE2Ok(_M0DTPC14json5Token4Null__);
          } else {
            if (_x === 116) {
              const _bind$3 = _M0MPC14json12ParseContext19expect__ascii__char(ctx, 114);
              if (_bind$3.$tag === 1) {
                const _ok = _bind$3;
                _ok._0;
              } else {
                return _bind$3;
              }
              const _bind$4 = _M0MPC14json12ParseContext19expect__ascii__char(ctx, 117);
              if (_bind$4.$tag === 1) {
                const _ok = _bind$4;
                _ok._0;
              } else {
                return _bind$4;
              }
              const _bind$5 = _M0MPC14json12ParseContext19expect__ascii__char(ctx, 101);
              if (_bind$5.$tag === 1) {
                const _ok = _bind$5;
                _ok._0;
              } else {
                return _bind$5;
              }
              return new _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE2Ok(_M0DTPC14json5Token4True__);
            } else {
              if (_x === 102) {
                const _bind$3 = _M0MPC14json12ParseContext19expect__ascii__char(ctx, 97);
                if (_bind$3.$tag === 1) {
                  const _ok = _bind$3;
                  _ok._0;
                } else {
                  return _bind$3;
                }
                const _bind$4 = _M0MPC14json12ParseContext19expect__ascii__char(ctx, 108);
                if (_bind$4.$tag === 1) {
                  const _ok = _bind$4;
                  _ok._0;
                } else {
                  return _bind$4;
                }
                const _bind$5 = _M0MPC14json12ParseContext19expect__ascii__char(ctx, 115);
                if (_bind$5.$tag === 1) {
                  const _ok = _bind$5;
                  _ok._0;
                } else {
                  return _bind$5;
                }
                const _bind$6 = _M0MPC14json12ParseContext19expect__ascii__char(ctx, 101);
                if (_bind$6.$tag === 1) {
                  const _ok = _bind$6;
                  _ok._0;
                } else {
                  return _bind$6;
                }
                return new _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE2Ok(_M0DTPC14json5Token5False__);
              } else {
                if (_x === 45) {
                  const _bind$3 = _M0MPC14json12ParseContext10read__char(ctx);
                  if (_bind$3 === -1) {
                    return new _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE3Err(_M0DTPC15error5Error51moonbitlang_2fcore_2fjson_2eParseError_2eInvalidEof__);
                  } else {
                    const _Some$2 = _bind$3;
                    const _x$2 = _Some$2;
                    if (_x$2 === 48) {
                      const _bind$4 = _M0MPC14json12ParseContext9lex__zero(ctx, ctx.offset - 2 | 0);
                      let _bind$5;
                      if (_bind$4.$tag === 1) {
                        const _ok = _bind$4;
                        _bind$5 = _ok._0;
                      } else {
                        return _bind$4;
                      }
                      const _n = _bind$5.value;
                      const _repr = _bind$5.repr;
                      return new _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE2Ok(new _M0DTPC14json5Token6Number(_n, _M0MPC16option6Option3mapGRPC16string10StringViewsE(_repr, (repr) => _M0MPC16string10StringView9to__owned(repr))));
                    } else {
                      if (_x$2 >= 49 && _x$2 <= 57) {
                        const _bind$4 = _M0MPC14json12ParseContext21lex__decimal__integer(ctx, ctx.offset - 2 | 0);
                        let _bind$5;
                        if (_bind$4.$tag === 1) {
                          const _ok = _bind$4;
                          _bind$5 = _ok._0;
                        } else {
                          return _bind$4;
                        }
                        const _n = _bind$5.value;
                        const _repr = _bind$5.repr;
                        return new _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE2Ok(new _M0DTPC14json5Token6Number(_n, _M0MPC16option6Option3mapGRPC16string10StringViewsE(_repr, (repr) => _M0MPC16string10StringView9to__owned(repr))));
                      } else {
                        return _M0MPC14json12ParseContext21invalid__char_2einnerGRPB4JsonE(ctx, -1);
                      }
                    }
                  }
                } else {
                  if (_x === 48) {
                    const _bind$3 = _M0MPC14json12ParseContext9lex__zero(ctx, ctx.offset - 1 | 0);
                    let _bind$4;
                    if (_bind$3.$tag === 1) {
                      const _ok = _bind$3;
                      _bind$4 = _ok._0;
                    } else {
                      return _bind$3;
                    }
                    const _n = _bind$4.value;
                    const _repr = _bind$4.repr;
                    return new _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE2Ok(new _M0DTPC14json5Token6Number(_n, _M0MPC16option6Option3mapGRPC16string10StringViewsE(_repr, (repr) => _M0MPC16string10StringView9to__owned(repr))));
                  } else {
                    if (_x >= 49 && _x <= 57) {
                      const _bind$3 = _M0MPC14json12ParseContext21lex__decimal__integer(ctx, ctx.offset - 1 | 0);
                      let _bind$4;
                      if (_bind$3.$tag === 1) {
                        const _ok = _bind$3;
                        _bind$4 = _ok._0;
                      } else {
                        return _bind$3;
                      }
                      const _n = _bind$4.value;
                      const _repr = _bind$4.repr;
                      return new _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE2Ok(new _M0DTPC14json5Token6Number(_n, _M0MPC16option6Option3mapGRPC16string10StringViewsE(_repr, (repr) => _M0MPC16string10StringView9to__owned(repr))));
                    } else {
                      if (_x === 34) {
                        const _bind$3 = _M0MPC14json12ParseContext11lex__string(ctx);
                        let s;
                        if (_bind$3.$tag === 1) {
                          const _ok = _bind$3;
                          s = _ok._0;
                        } else {
                          return _bind$3;
                        }
                        return new _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE2Ok(new _M0DTPC14json5Token6String(s));
                      } else {
                        const shift = -_M0MPC14char4Char10utf16__len(_x) | 0;
                        return _M0MPC14json12ParseContext21invalid__char_2einnerGRPB4JsonE(ctx, shift);
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
function _M0MPC14json12ParseContext24lex__after__array__value(ctx) {
  _M0MPC14json12ParseContext21lex__skip__whitespace(ctx);
  const _bind$2 = _M0MPC14json12ParseContext10read__char(ctx);
  if (_bind$2 === -1) {
    return new _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE3Err(_M0DTPC15error5Error51moonbitlang_2fcore_2fjson_2eParseError_2eInvalidEof__);
  } else {
    const _Some = _bind$2;
    const _x = _Some;
    switch (_x) {
      case 93: {
        return new _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE2Ok(_M0DTPC14json5Token8RBracket__);
      }
      case 44: {
        return new _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE2Ok(_M0DTPC14json5Token5Comma__);
      }
      default: {
        return _M0MPC14json12ParseContext21invalid__char_2einnerGRPB4JsonE(ctx, -1);
      }
    }
  }
}
function _M0MPC14json12ParseContext25lex__after__object__value(ctx) {
  _M0MPC14json12ParseContext21lex__skip__whitespace(ctx);
  const _bind$2 = _M0MPC14json12ParseContext10read__char(ctx);
  if (_bind$2 === -1) {
    return new _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE3Err(_M0DTPC15error5Error51moonbitlang_2fcore_2fjson_2eParseError_2eInvalidEof__);
  } else {
    const _Some = _bind$2;
    const _x = _Some;
    switch (_x) {
      case 125: {
        return new _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE2Ok(_M0DTPC14json5Token6RBrace__);
      }
      case 44: {
        return new _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE2Ok(_M0DTPC14json5Token5Comma__);
      }
      default: {
        return _M0MPC14json12ParseContext21invalid__char_2einnerGRPB4JsonE(ctx, -1);
      }
    }
  }
}
function _M0MPC14json12ParseContext26lex__after__property__name(ctx) {
  _M0MPC14json12ParseContext21lex__skip__whitespace(ctx);
  const _bind$2 = _M0MPC14json12ParseContext10read__char(ctx);
  if (_bind$2 === -1) {
    return new _M0DTPC16result6ResultGuRPC14json10ParseErrorE3Err(_M0DTPC15error5Error51moonbitlang_2fcore_2fjson_2eParseError_2eInvalidEof__);
  } else {
    const _Some = _bind$2;
    const _x = _Some;
    if (_x === 58) {
      return new _M0DTPC16result6ResultGuRPC14json10ParseErrorE2Ok(undefined);
    } else {
      return _M0MPC14json12ParseContext21invalid__char_2einnerGuE(ctx, -1);
    }
  }
}
function _M0MPC14json12ParseContext19lex__property__name(ctx) {
  _M0MPC14json12ParseContext21lex__skip__whitespace(ctx);
  const _bind$2 = _M0MPC14json12ParseContext10read__char(ctx);
  if (_bind$2 === -1) {
    return new _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE3Err(_M0DTPC15error5Error51moonbitlang_2fcore_2fjson_2eParseError_2eInvalidEof__);
  } else {
    const _Some = _bind$2;
    const _x = _Some;
    switch (_x) {
      case 125: {
        return new _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE2Ok(_M0DTPC14json5Token6RBrace__);
      }
      case 34: {
        const _bind$3 = _M0MPC14json12ParseContext11lex__string(ctx);
        let s;
        if (_bind$3.$tag === 1) {
          const _ok = _bind$3;
          s = _ok._0;
        } else {
          return _bind$3;
        }
        return new _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE2Ok(new _M0DTPC14json5Token6String(s));
      }
      default: {
        return _M0MPC14json12ParseContext21invalid__char_2einnerGRPB4JsonE(ctx, -1);
      }
    }
  }
}
function _M0MPC14json12ParseContext20lex__property__name2(ctx) {
  _M0MPC14json12ParseContext21lex__skip__whitespace(ctx);
  const _bind$2 = _M0MPC14json12ParseContext10read__char(ctx);
  if (_bind$2 === -1) {
    return new _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE3Err(_M0DTPC15error5Error51moonbitlang_2fcore_2fjson_2eParseError_2eInvalidEof__);
  } else {
    const _Some = _bind$2;
    const _x = _Some;
    if (_x === 34) {
      const _bind$3 = _M0MPC14json12ParseContext11lex__string(ctx);
      let s;
      if (_bind$3.$tag === 1) {
        const _ok = _bind$3;
        s = _ok._0;
      } else {
        return _bind$3;
      }
      return new _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE2Ok(new _M0DTPC14json5Token6String(s));
    } else {
      return _M0MPC14json12ParseContext21invalid__char_2einnerGRPB4JsonE(ctx, -1);
    }
  }
}
function _M0MPC14json12ParseContext12parse__value(ctx, remaining_available_depth) {
  const _bind$2 = _M0MPC14json12ParseContext10lex__value(ctx, false);
  let tok;
  if (_bind$2.$tag === 1) {
    const _ok = _bind$2;
    tok = _ok._0;
  } else {
    return _bind$2;
  }
  return _M0MPC14json12ParseContext13parse__value2(ctx, tok, remaining_available_depth);
}
function _M0MPC14json12ParseContext13parse__value2(ctx, tok, remaining_available_depth) {
  _L: {
    switch (tok.$tag) {
      case 0: {
        return new _M0DTPC16result6ResultGRPB4JsonRPC14json10ParseErrorE2Ok(_M0FPB4null);
      }
      case 1: {
        return new _M0DTPC16result6ResultGRPB4JsonRPC14json10ParseErrorE2Ok(_M0MPC14json4Json7boolean(true));
      }
      case 2: {
        return new _M0DTPC16result6ResultGRPB4JsonRPC14json10ParseErrorE2Ok(_M0MPC14json4Json7boolean(false));
      }
      case 3: {
        const _Number = tok;
        const _n = _Number._0;
        const _repr = _Number._1;
        return new _M0DTPC16result6ResultGRPB4JsonRPC14json10ParseErrorE2Ok(_M0MPC14json4Json6number(_n, _repr));
      }
      case 4: {
        const _String = tok;
        const _s = _String._0;
        return new _M0DTPC16result6ResultGRPB4JsonRPC14json10ParseErrorE2Ok(_M0MPC14json4Json6string(_s));
      }
      case 5: {
        return _M0MPC14json12ParseContext13parse__object(ctx, remaining_available_depth);
      }
      case 7: {
        return _M0MPC14json12ParseContext12parse__array(ctx, remaining_available_depth);
      }
      case 8: {
        break _L;
      }
      case 6: {
        break _L;
      }
      default: {
        break _L;
      }
    }
  }
  return new _M0DTPC16result6ResultGRPB4JsonRPC14json10ParseErrorE2Ok(_M0FPC15abort5abortGRPB4JsonE("unreachable"));
}
function _M0MPC14json12ParseContext12parse__array(ctx, remaining_available_depth) {
  if (remaining_available_depth <= 0) {
    return new _M0DTPC16result6ResultGRPB4JsonRPC14json10ParseErrorE3Err(_M0DTPC15error5Error59moonbitlang_2fcore_2fjson_2eParseError_2eDepthLimitExceeded__);
  }
  const child_remaining_available_depth = remaining_available_depth - 1 | 0;
  const vec = [];
  let _tmp;
  const _bind$2 = _M0MPC14json12ParseContext10lex__value(ctx, true);
  let _tmp$2;
  if (_bind$2.$tag === 1) {
    const _ok = _bind$2;
    _tmp$2 = _ok._0;
  } else {
    return _bind$2;
  }
  let _tmp$3 = _tmp$2;
  _L: while (true) {
    const x = _tmp$3;
    if (x.$tag === 8) {
      _tmp = _M0MPC14json4Json5array(vec);
      break;
    } else {
      const _bind$3 = _M0MPC14json12ParseContext13parse__value2(ctx, x, child_remaining_available_depth);
      let _tmp$4;
      if (_bind$3.$tag === 1) {
        const _ok = _bind$3;
        _tmp$4 = _ok._0;
      } else {
        return _bind$3;
      }
      _M0MPC15array5Array4pushGRPC14json10WriteFrameE(vec, _tmp$4);
      const _bind$4 = _M0MPC14json12ParseContext24lex__after__array__value(ctx);
      let tok2;
      if (_bind$4.$tag === 1) {
        const _ok = _bind$4;
        tok2 = _ok._0;
      } else {
        return _bind$4;
      }
      switch (tok2.$tag) {
        case 9: {
          const _bind$5 = _M0MPC14json12ParseContext10lex__value(ctx, false);
          if (_bind$5.$tag === 1) {
            const _ok = _bind$5;
            _tmp$3 = _ok._0;
          } else {
            return _bind$5;
          }
          continue _L;
        }
        case 8: {
          _tmp = _M0MPC14json4Json5array(vec);
          break _L;
        }
        default: {
          _M0FPC15abort5abortGuE("unreachable");
        }
      }
    }
    continue;
  }
  return new _M0DTPC16result6ResultGRPB4JsonRPC14json10ParseErrorE2Ok(_tmp);
}
function _M0MPC14json12ParseContext13parse__object(ctx, remaining_available_depth) {
  if (remaining_available_depth <= 0) {
    return new _M0DTPC16result6ResultGRPB4JsonRPC14json10ParseErrorE3Err(_M0DTPC15error5Error59moonbitlang_2fcore_2fjson_2eParseError_2eDepthLimitExceeded__);
  }
  const child_remaining_available_depth = remaining_available_depth - 1 | 0;
  const _bind$2 = [];
  const map = _M0MPB3Map3MapGsRPB4JsonE(new _M0TPB9ArrayViewGUsRPB4JsonEE(_bind$2, 0, 0), undefined);
  let _tmp;
  const _bind$3 = _M0MPC14json12ParseContext19lex__property__name(ctx);
  let _tmp$2;
  if (_bind$3.$tag === 1) {
    const _ok = _bind$3;
    _tmp$2 = _ok._0;
  } else {
    return _bind$3;
  }
  let _tmp$3 = _tmp$2;
  _L: while (true) {
    const x = _tmp$3;
    switch (x.$tag) {
      case 6: {
        _tmp = _M0MPC14json4Json6object(map);
        break _L;
      }
      case 4: {
        const _String = x;
        const _name = _String._0;
        const _bind$4 = _M0MPC14json12ParseContext26lex__after__property__name(ctx);
        if (_bind$4.$tag === 1) {
          const _ok = _bind$4;
          _ok._0;
        } else {
          return _bind$4;
        }
        const _bind$5 = _M0MPC14json12ParseContext12parse__value(ctx, child_remaining_available_depth);
        let _tmp$4;
        if (_bind$5.$tag === 1) {
          const _ok = _bind$5;
          _tmp$4 = _ok._0;
        } else {
          return _bind$5;
        }
        _M0MPB3Map3setGsRPB4JsonE(map, _name, _tmp$4);
        const _bind$6 = _M0MPC14json12ParseContext25lex__after__object__value(ctx);
        let _bind$7;
        if (_bind$6.$tag === 1) {
          const _ok = _bind$6;
          _bind$7 = _ok._0;
        } else {
          return _bind$6;
        }
        switch (_bind$7.$tag) {
          case 9: {
            const _bind$8 = _M0MPC14json12ParseContext20lex__property__name2(ctx);
            if (_bind$8.$tag === 1) {
              const _ok = _bind$8;
              _tmp$3 = _ok._0;
            } else {
              return _bind$8;
            }
            continue _L;
          }
          case 6: {
            _tmp = _M0MPC14json4Json6object(map);
            break _L;
          }
          default: {
            _M0FPC15abort5abortGuE("unreachable");
          }
        }
        break;
      }
      default: {
        _M0FPC15abort5abortGuE("unreachable");
      }
    }
    continue;
  }
  return new _M0DTPC16result6ResultGRPB4JsonRPC14json10ParseErrorE2Ok(_tmp);
}
function _M0FPC14json13parse_2einner(input, max_nesting_depth) {
  const ctx = _M0MPC14json12ParseContext4make(input);
  const _bind$2 = _M0MPC14json12ParseContext12parse__value(ctx, max_nesting_depth);
  let val;
  if (_bind$2.$tag === 1) {
    const _ok = _bind$2;
    val = _ok._0;
  } else {
    return _bind$2;
  }
  _M0MPC14json12ParseContext21lex__skip__whitespace(ctx);
  return ctx.offset >= ctx.end_offset ? new _M0DTPC16result6ResultGRPB4JsonRPC14json10ParseErrorE2Ok(val) : _M0MPC14json12ParseContext21invalid__char_2einnerGRPB4JsonE(ctx, 0);
}
function _M0FPC14json20need__escape__scalar(str, escape_slash, start, end) {
  let _tmp = start;
  while (true) {
    const i = _tmp;
    if (i < end) {
      const code = str.charCodeAt(i);
      if (_M0IPC16uint166UInt16PB2Eq5equal(code, 34) || (_M0IPC16uint166UInt16PB2Eq5equal(code, 92) || (code < 32 || escape_slash && _M0IPC16uint166UInt16PB2Eq5equal(code, 47)))) {
        return true;
      }
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return false;
}
function _M0FPC14json12need__escape(str, escape_slash) {
  return _M0FPC14json20need__escape__scalar(str, escape_slash, 0, str.length);
}
function _M0FPC14json14write__escaped(buf, str, escape_slash) {
  if (!_M0FPC14json12need__escape(str, escape_slash)) {
    _M0IPB13StringBuilderPB6Logger13write__string(buf, str);
    return undefined;
  }
  const _bind$2 = str.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind$2) {
      const code = str.charCodeAt(_);
      switch (code) {
        case 34: {
          _M0IPB13StringBuilderPB6Logger13write__string(buf, "\\\"");
          break;
        }
        case 92: {
          _M0IPB13StringBuilderPB6Logger13write__string(buf, "\\\\");
          break;
        }
        case 47: {
          if (escape_slash) {
            _M0IPB13StringBuilderPB6Logger13write__string(buf, "\\/");
          } else {
            _M0IPB13StringBuilderPB6Logger11write__char(buf, 47);
          }
          break;
        }
        case 10: {
          _M0IPB13StringBuilderPB6Logger13write__string(buf, "\\n");
          break;
        }
        case 13: {
          _M0IPB13StringBuilderPB6Logger13write__string(buf, "\\r");
          break;
        }
        case 8: {
          _M0IPB13StringBuilderPB6Logger13write__string(buf, "\\b");
          break;
        }
        case 9: {
          _M0IPB13StringBuilderPB6Logger13write__string(buf, "\\t");
          break;
        }
        case 12: {
          _M0IPB13StringBuilderPB6Logger13write__string(buf, "\\f");
          break;
        }
        default: {
          if (code < 32) {
            _M0IPB13StringBuilderPB6Logger13write__string(buf, "\\u00");
            _M0IPB13StringBuilderPB6Logger13write__string(buf, _M0MPC14byte4Byte7to__hex(code & 255));
          } else {
            _M0IPB13StringBuilderPB6Logger11write__char(buf, _M0MPC16uint166UInt1616unsafe__to__char(code));
          }
        }
      }
      _tmp = _ + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function _M0FPC14json13write__indent(buf, cache, level, indent) {
  while (true) {
    if (cache.length <= level) {
      if (cache.length >= 1) {
        const _last = cache[cache.length - 1 | 0];
        _M0MPC15array5Array4pushGRPC14json10WriteFrameE(cache, `${_last}${_M0MPC16string6String6repeat(" ", indent)}`);
      } else {
        _M0MPC15array5Array4pushGRPC14json10WriteFrameE(cache, "\n");
      }
      continue;
    } else {
      break;
    }
  }
  _M0IPB13StringBuilderPB6Logger13write__string(buf, _M0MPC15array5Array2atGRPB4JsonE(cache, level));
}
function _M0MPC14json4Json17stringify_2einner(self, escape_slash, indent, replacer) {
  const buf = _M0MPB13StringBuilder21StringBuilder_2einner(0);
  const indent_cache = [];
  const stack = [];
  let depth = 0;
  let _tmp = self;
  while (true) {
    const x = _tmp;
    if (x === undefined) {
      if (stack.length === 0) {
        break;
      } else {
        const _x = stack[stack.length - 1 | 0];
        if (_x.$tag === 0) {
          const _Array = _x;
          const _arr = _Array._0;
          const _i = _Array._1;
          if (_i < _arr.length) {
            const element = _M0MPC15array5Array2atGRPB4JsonE(_arr, _i);
            _Array._1 = _i + 1 | 0;
            if (_i > 0) {
              _M0IPB13StringBuilderPB6Logger11write__char(buf, 44);
              if (indent > 0) {
                _M0FPC14json13write__indent(buf, indent_cache, depth, indent);
              }
            }
            _tmp = element;
            continue;
          } else {
            depth = depth - 1 | 0;
            _M0MPC15array5Array3popGRPC14json10WriteFrameE(stack);
            if (indent > 0) {
              _M0FPC14json13write__indent(buf, indent_cache, depth, indent);
            }
            _M0IPB13StringBuilderPB6Logger11write__char(buf, 93);
            _tmp = undefined;
            continue;
          }
        } else {
          const _Object = _x;
          const _iterator = _Object._0;
          const _first = _Object._1;
          const _bind$2 = _M0MPB4Iter4nextGUsRPB4JsonEE(_iterator);
          if (_bind$2 === undefined) {
            depth = depth - 1 | 0;
            _M0MPC15array5Array3popGRPC14json10WriteFrameE(stack);
            if (indent > 0) {
              _M0FPC14json13write__indent(buf, indent_cache, depth, indent);
            }
            _M0IPB13StringBuilderPB6Logger11write__char(buf, 125);
            _tmp = undefined;
            continue;
          } else {
            const _Some = _bind$2;
            const _x$2 = _Some;
            const _k = _x$2._0;
            const _v = _x$2._1;
            let v2 = _v;
            if (replacer === undefined) {
            } else {
              const _Some$2 = replacer;
              const _replacer = _Some$2;
              const _func = _replacer.f;
              const _bind$3 = _func(_k, _v);
              if (_bind$3 === undefined) {
                _tmp = undefined;
                continue;
              } else {
                const _Some$3 = _bind$3;
                const _v$2 = _Some$3;
                v2 = _v$2;
              }
            }
            if (!_first) {
              _M0IPB13StringBuilderPB6Logger11write__char(buf, 44);
              if (indent > 0) {
                _M0FPC14json13write__indent(buf, indent_cache, depth, indent);
              }
            }
            _M0IPB13StringBuilderPB6Logger11write__char(buf, 34);
            _M0FPC14json14write__escaped(buf, _k, escape_slash);
            _M0IPB13StringBuilderPB6Logger11write__char(buf, 34);
            _M0IPB13StringBuilderPB6Logger11write__char(buf, 58);
            if (indent > 0) {
              _M0IPB13StringBuilderPB6Logger11write__char(buf, 32);
            }
            _Object._1 = false;
            _tmp = v2;
            continue;
          }
        }
      }
    } else {
      const _Some = x;
      const _value = _Some;
      switch (_value.$tag) {
        case 6: {
          const _Object = _value;
          const _members = _Object._0;
          if (_M0MPB3Map9is__emptyGssE(_members)) {
            _M0IPB13StringBuilderPB6Logger13write__string(buf, "{}");
          } else {
            depth = depth + 1 | 0;
            _M0IPB13StringBuilderPB6Logger11write__char(buf, 123);
            if (indent > 0) {
              _M0FPC14json13write__indent(buf, indent_cache, depth, indent);
            }
            _M0MPC15array5Array4pushGRPC14json10WriteFrameE(stack, new _M0DTPC14json10WriteFrame6Object(_M0MPB3Map4iterGsRPB4JsonE(_members), true));
          }
          break;
        }
        case 5: {
          const _Array = _value;
          const _arr = _Array._0;
          if (_M0MPC15array5Array9is__emptyGRPB4JsonE(_arr)) {
            _M0IPB13StringBuilderPB6Logger13write__string(buf, "[]");
          } else {
            depth = depth + 1 | 0;
            _M0IPB13StringBuilderPB6Logger11write__char(buf, 91);
            if (indent > 0) {
              _M0FPC14json13write__indent(buf, indent_cache, depth, indent);
            }
            _M0MPC15array5Array4pushGRPC14json10WriteFrameE(stack, new _M0DTPC14json10WriteFrame5Array(_arr, 0));
          }
          break;
        }
        case 4: {
          const _String = _value;
          const _s = _String._0;
          _M0IPB13StringBuilderPB6Logger11write__char(buf, 34);
          _M0FPC14json14write__escaped(buf, _s, escape_slash);
          _M0IPB13StringBuilderPB6Logger11write__char(buf, 34);
          break;
        }
        case 3: {
          const _Number = _value;
          const _n = _Number._0;
          const _repr = _Number._1;
          if (_repr === undefined) {
            _M0MPB13StringBuilder13write__objectGdE(buf, _n);
          } else {
            const _Some$2 = _repr;
            const _r = _Some$2;
            _M0IPB13StringBuilderPB6Logger13write__string(buf, _r);
          }
          break;
        }
        case 1: {
          _M0IPB13StringBuilderPB6Logger13write__string(buf, "true");
          break;
        }
        case 2: {
          _M0IPB13StringBuilderPB6Logger13write__string(buf, "false");
          break;
        }
        default: {
          _M0IPB13StringBuilderPB6Logger13write__string(buf, "null");
        }
      }
      _tmp = undefined;
      continue;
    }
  }
  return _M0MPB13StringBuilder10to__string(buf);
}
function _M0FPC14math3pow(_tmp, _tmp$2) {
  return Math.pow(_tmp, _tmp$2);
}
function _M0IP217zhengxin_2dcoding4scss10ParseErrorPC15debug5Debug8to__repr(_x_1091) {
  let _arg_1092;
  _L: {
    const _Invalid = _x_1091;
    const _$42$arg_1092 = _Invalid._0;
    _arg_1092 = _$42$arg_1092;
    break _L;
  }
  return _M0MPC15debug4Repr4ctor("Invalid", [{ _0: undefined, _1: _M0IPC16string6StringPC15debug5Debug8to__repr(_arg_1092) }]);
}
function _M0IP217zhengxin_2dcoding4scss10ParseErrorPC15debug5Debug8to__reprGRP217zhengxin_2dcoding4scss10ParseErrorE(_x_1091) {
  let _arg_1092;
  _L: {
    const _Invalid = _x_1091;
    const _$42$arg_1092 = _Invalid._0;
    _arg_1092 = _$42$arg_1092;
    break _L;
  }
  return _M0MPC15debug4Repr4ctor("Invalid", [{ _0: undefined, _1: _M0IPC16string6StringPC15debug5Debug8to__repr(_arg_1092) }]);
}
function _M0FP217zhengxin_2dcoding4scss15numeric_2einner(value, unit) {
  return new _M0DTP217zhengxin_2dcoding4scss9SassValue6Number(new _M0TP217zhengxin_2dcoding4scss10SassNumber(value, _M0MPC16string6String9is__empty(unit) ? [] : [unit], []));
}
function _M0FP217zhengxin_2dcoding4scss11unit__basis(unit) {
  switch (unit) {
    case "px": {
      return { _0: "length", _1: 1 };
    }
    case "in": {
      return { _0: "length", _1: 96 };
    }
    case "cm": {
      return { _0: "length", _1: 37.795275590551178 };
    }
    case "mm": {
      return { _0: "length", _1: 3.7795275590551185 };
    }
    case "q": {
      return { _0: "length", _1: 0.94488188976377963 };
    }
    case "pt": {
      return { _0: "length", _1: 1.3333333333333333 };
    }
    case "pc": {
      return { _0: "length", _1: 16 };
    }
    case "deg": {
      return { _0: "angle", _1: 1 };
    }
    case "grad": {
      return { _0: "angle", _1: 0.9 };
    }
    case "rad": {
      return { _0: "angle", _1: 57.295779513082323 };
    }
    case "turn": {
      return { _0: "angle", _1: 360 };
    }
    case "s": {
      return { _0: "time", _1: 1 };
    }
    case "ms": {
      return { _0: "time", _1: 0.001 };
    }
    case "Hz": {
      return { _0: "frequency", _1: 1 };
    }
    case "kHz": {
      return { _0: "frequency", _1: 1000 };
    }
    case "dpi": {
      return { _0: "resolution", _1: 1 };
    }
    case "dpcm": {
      return { _0: "resolution", _1: 2.54 };
    }
    case "dppx": {
      return { _0: "resolution", _1: 96 };
    }
    default: {
      return { _0: unit, _1: 1 };
    }
  }
}
function _M0FP217zhengxin_2dcoding4scss17normalize__number(n) {
  const top = _M0MPC15array5Array4copyGsE(n.numerator);
  const bottom = _M0MPC15array5Array4copyGsE(n.denominator);
  const amount = new _M0TPB8MutLocalGdE(n.amount);
  const i = new _M0TPB8MutLocalGiE(0);
  while (true) {
    if (i.val < top.length) {
      let kind;
      let factor;
      _L: {
        const _bind$2 = _M0FP217zhengxin_2dcoding4scss11unit__basis(_M0MPC15array5Array2atGRPB4JsonE(top, i.val));
        const _kind = _bind$2._0;
        const _factor = _bind$2._1;
        kind = _kind;
        factor = _factor;
        break _L;
      }
      const found = new _M0TPB8MutLocalGiE(-1);
      let _tmp = 0;
      while (true) {
        const j = _tmp;
        if (j < bottom.length) {
          if (_M0FP217zhengxin_2dcoding4scss11unit__basis(_M0MPC15array5Array2atGRPB4JsonE(bottom, j))._0 === kind) {
            found.val = j;
            break;
          }
          _tmp = j + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      if (found.val >= 0) {
        amount.val = amount.val * (factor / _M0FP217zhengxin_2dcoding4scss11unit__basis(_M0MPC15array5Array2atGRPB4JsonE(bottom, found.val))._1);
        _M0MPC15array5Array6removeGsE(top, i.val);
        _M0MPC15array5Array6removeGsE(bottom, found.val);
      } else {
        i.val = i.val + 1 | 0;
      }
      continue;
    } else {
      break;
    }
  }
  return new _M0TP217zhengxin_2dcoding4scss10SassNumber(amount.val, top, bottom);
}
function _M0FP217zhengxin_2dcoding4scss12unit__factor(source, target) {
  if (source.length !== target.length) {
    return _M0DTPC16option6OptionGdE4None__;
  }
  const remaining = _M0MPC15array5Array4copyGsE(target);
  const factor = new _M0TPB8MutLocalGdE(1);
  const _bind$2 = source.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind$2) {
      const unit = source[_];
      let kind;
      let scale;
      _L: {
        const _bind$3 = _M0FP217zhengxin_2dcoding4scss11unit__basis(unit);
        const _kind = _bind$3._0;
        const _scale = _bind$3._1;
        kind = _kind;
        scale = _scale;
        break _L;
      }
      const found = new _M0TPB8MutLocalGiE(-1);
      let _tmp$2 = 0;
      while (true) {
        const i = _tmp$2;
        if (i < remaining.length) {
          if (_M0FP217zhengxin_2dcoding4scss11unit__basis(_M0MPC15array5Array2atGRPB4JsonE(remaining, i))._0 === kind) {
            found.val = i;
            break;
          }
          _tmp$2 = i + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      if (found.val < 0) {
        return _M0DTPC16option6OptionGdE4None__;
      }
      factor.val = factor.val * (scale / _M0FP217zhengxin_2dcoding4scss11unit__basis(_M0MPC15array5Array2atGRPB4JsonE(remaining, found.val))._1);
      _M0MPC15array5Array6removeGsE(remaining, found.val);
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return new _M0DTPC16option6OptionGdE4Some(factor.val);
}
function _M0MP217zhengxin_2dcoding4scss10SassNumber8unitless(self) {
  return _M0MPC15array5Array9is__emptyGRPB4JsonE(self.numerator) && _M0MPC15array5Array9is__emptyGRPB4JsonE(self.denominator);
}
function _M0MP217zhengxin_2dcoding4scss10SassNumber15convert_2einner(self, target, unitless) {
  if (unitless && (_M0MP217zhengxin_2dcoding4scss10SassNumber8unitless(self) || _M0MP217zhengxin_2dcoding4scss10SassNumber8unitless(target))) {
    return new _M0DTPC16option6OptionGdE4Some(self.amount);
  }
  _L: {
    let a;
    let b;
    _L$2: {
      const _bind$2 = _M0FP217zhengxin_2dcoding4scss12unit__factor(self.numerator, target.numerator);
      const _bind$3 = _M0FP217zhengxin_2dcoding4scss12unit__factor(self.denominator, target.denominator);
      if (_bind$2.$tag === 1) {
        const _Some = _bind$2;
        const _a = _Some._0;
        if (_bind$3.$tag === 1) {
          const _Some$2 = _bind$3;
          const _b = _Some$2._0;
          a = _a;
          b = _b;
          break _L$2;
        } else {
          break _L;
        }
      } else {
        break _L;
      }
    }
    return new _M0DTPC16option6OptionGdE4Some(self.amount * a / b);
  }
  return _M0DTPC16option6OptionGdE4None__;
}
function _M0FP217zhengxin_2dcoding4scss12number__text(value) {
  if (_M0MPC16double6Double7is__nan(value)) {
    return "NaN";
  }
  if (_M0MPC16double6Double7is__inf(value)) {
    return value < 0 ? "-infinity" : "infinity";
  }
  if (value === 0) {
    return "0";
  }
  const n = Math.abs(value) < 900000 ? _M0MPC16double6Double5round(value * 10000000000) / 10000000000 : value;
  const text = String(n);
  const _bind$2 = "e";
  const parts = _M0MPB4Iter9to__arrayGRPC16string10StringViewE(_M0MPC16string6String5split(text, new _M0TPC16string10StringView(_bind$2, 0, _bind$2.length)));
  if (parts.length !== 2) {
    return text;
  }
  let exponent;
  let _try_err;
  _L: {
    _L$2: {
      const _bind$3 = _M0FPC28internal7strconv18parse__int_2einner(_M0MPC15array5Array2atGRPB4JsonE(parts, 1), 0);
      if (_bind$3.$tag === 1) {
        const _ok = _bind$3;
        exponent = _ok._0;
      } else {
        const _err = _bind$3;
        _try_err = _err._0;
        break _L$2;
      }
      break _L;
    }
    return text;
  }
  const _tmp = _M0MPC15array5Array2atGRPB4JsonE(parts, 0);
  const _bind$3 = "-";
  const negative = _M0MPC16string10StringView11has__prefix(_tmp, new _M0TPC16string10StringView(_bind$3, 0, _bind$3.length));
  const _tmp$2 = _M0MPC16string10StringView9to__owned(_M0MPC15array5Array2atGRPB4JsonE(parts, 0));
  const _bind$4 = "-";
  const _tmp$3 = new _M0TPC16string10StringView(_bind$4, 0, _bind$4.length);
  const _bind$5 = "";
  const _tmp$4 = _M0MPC16string6String12replace__all(_tmp$2, _tmp$3, new _M0TPC16string10StringView(_bind$5, 0, _bind$5.length));
  const _bind$6 = ".";
  const _tmp$5 = new _M0TPC16string10StringView(_bind$6, 0, _bind$6.length);
  const _bind$7 = "";
  const digits = _M0MPC16string6String12replace__all(_tmp$4, _tmp$5, new _M0TPC16string10StringView(_bind$7, 0, _bind$7.length));
  const _tmp$6 = _M0MPC15array5Array2atGRPB4JsonE(parts, 0);
  const _bind$8 = ".";
  const lead = _M0MPC16string10StringView6length(_M0MPC15array5Array2atGRPB4JsonE(_M0MPB4Iter9to__arrayGRPC16string10StringViewE(_M0MPC16string10StringView5split(_tmp$6, new _M0TPC16string10StringView(_bind$8, 0, _bind$8.length))), 0)) - (negative ? 1 : 0) | 0;
  const at = lead + exponent | 0;
  const plain = at <= 0 ? `0.${_M0MPC16string6String6repeat("0", -at | 0)}${digits}` : at >= digits.length ? `${digits}${_M0MPC16string6String6repeat("0", at - digits.length | 0)}` : `${_M0MPC16string10StringView9to__owned(_M0MPC16string6String11sub_2einner(digits, 0, at))}.${_M0MPC16string10StringView9to__owned(_M0MPC16string6String11sub_2einner(digits, at, undefined))}`;
  return `${negative ? "-" : ""}${plain}`;
}
function _M0MP217zhengxin_2dcoding4scss9SassValue5truth(self) {
  switch (self.$tag) {
    case 4: {
      return false;
    }
    case 3: {
      const _Boolean = self;
      const _x = _Boolean._0;
      if (_x === false) {
        return false;
      } else {
        return true;
      }
    }
    default: {
      return true;
    }
  }
}
function _M0MP217zhengxin_2dcoding4scss9SassValue5items(self) {
  let values;
  _L: {
    let values$2;
    _L$2: {
      switch (self.$tag) {
        case 5: {
          const _List = self;
          const _values = _List._0;
          values$2 = _values;
          break _L$2;
        }
        case 6: {
          const _Dictionary = self;
          const _values$2 = _Dictionary._0;
          values = _values$2;
          break _L;
        }
        default: {
          return [self];
        }
      }
    }
    return _M0MPC15array5Array4copyGsE(values$2);
  }
  return _M0MPC15array5Array3mapGURP217zhengxin_2dcoding4scss9SassValueRP217zhengxin_2dcoding4scss9SassValueERP217zhengxin_2dcoding4scss9SassValueE(values, (pair) => new _M0DTP217zhengxin_2dcoding4scss9SassValue4List([pair._0, pair._1], " ", false));
}
function _M0MP217zhengxin_2dcoding4scss9SassValue11check__size(self, remaining, depth) {
  if (depth > 64) {
    return new _M0DTPC16result6ResultGuRP217zhengxin_2dcoding4scss10ParseErrorE3Err(new _M0DTPC15error5Error47zhengxin_2dcoding_2fscss_2eParseError_2eInvalid("value nesting limit"));
  }
  remaining.val = remaining.val - 1 | 0;
  if (remaining.val < 0) {
    return new _M0DTPC16result6ResultGuRP217zhengxin_2dcoding4scss10ParseErrorE3Err(new _M0DTPC15error5Error47zhengxin_2dcoding_2fscss_2eParseError_2eInvalid("value structure limit"));
  }
  let values;
  _L: {
    let values$2;
    _L$2: {
      let n;
      _L$3: {
        let text;
        _L$4: {
          switch (self.$tag) {
            case 2: {
              const _Text = self;
              const _text = _Text._0;
              text = _text;
              break _L$4;
            }
            case 0: {
              const _Number = self;
              const _n = _Number._0;
              n = _n;
              break _L$3;
            }
            case 5: {
              const _List = self;
              const _values = _List._0;
              values$2 = _values;
              break _L$2;
            }
            case 6: {
              const _Dictionary = self;
              const _values$2 = _Dictionary._0;
              values = _values$2;
              break _L;
            }
            default: {
              return new _M0DTPC16result6ResultGuRP217zhengxin_2dcoding4scss10ParseErrorE2Ok(undefined);
            }
          }
        }
        if (text.length > 1000000) {
          return new _M0DTPC16result6ResultGuRP217zhengxin_2dcoding4scss10ParseErrorE3Err(new _M0DTPC15error5Error47zhengxin_2dcoding_2fscss_2eParseError_2eInvalid("string value limit"));
        } else {
          return new _M0DTPC16result6ResultGuRP217zhengxin_2dcoding4scss10ParseErrorE2Ok(undefined);
        }
      }
      if ((n.numerator.length + n.denominator.length | 0) > 128) {
        return new _M0DTPC16result6ResultGuRP217zhengxin_2dcoding4scss10ParseErrorE3Err(new _M0DTPC15error5Error47zhengxin_2dcoding_2fscss_2eParseError_2eInvalid("compound unit limit"));
      } else {
        return new _M0DTPC16result6ResultGuRP217zhengxin_2dcoding4scss10ParseErrorE2Ok(undefined);
      }
    }
    if (values$2.length > 4096) {
      return new _M0DTPC16result6ResultGuRP217zhengxin_2dcoding4scss10ParseErrorE3Err(new _M0DTPC15error5Error47zhengxin_2dcoding_2fscss_2eParseError_2eInvalid("list length limit"));
    }
    const _bind$2 = values$2.length;
    let _tmp = 0;
    while (true) {
      const _ = _tmp;
      if (_ < _bind$2) {
        const value = values$2[_];
        const _bind$3 = _M0MP217zhengxin_2dcoding4scss9SassValue11check__size(value, remaining, depth + 1 | 0);
        if (_bind$3.$tag === 1) {
          const _ok = _bind$3;
          _ok._0;
        } else {
          return _bind$3;
        }
        _tmp = _ + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    return new _M0DTPC16result6ResultGuRP217zhengxin_2dcoding4scss10ParseErrorE2Ok(undefined);
  }
  if (values.length > 4096) {
    return new _M0DTPC16result6ResultGuRP217zhengxin_2dcoding4scss10ParseErrorE3Err(new _M0DTPC15error5Error47zhengxin_2dcoding_2fscss_2eParseError_2eInvalid("map length limit"));
  }
  const _bind$2 = values.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind$2) {
      const _foreach_element = values[_];
      let key;
      let value;
      _L$2: {
        const _key = _foreach_element._0;
        const _value = _foreach_element._1;
        key = _key;
        value = _value;
        break _L$2;
      }
      const _bind$3 = _M0MP217zhengxin_2dcoding4scss9SassValue11check__size(key, remaining, depth + 1 | 0);
      if (_bind$3.$tag === 1) {
        const _ok = _bind$3;
        _ok._0;
      } else {
        return _bind$3;
      }
      const _bind$4 = _M0MP217zhengxin_2dcoding4scss9SassValue11check__size(value, remaining, depth + 1 | 0);
      if (_bind$4.$tag === 1) {
        const _ok = _bind$4;
        _ok._0;
      } else {
        return _bind$4;
      }
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return new _M0DTPC16result6ResultGuRP217zhengxin_2dcoding4scss10ParseErrorE2Ok(undefined);
}
function _M0FP217zhengxin_2dcoding4scss13bounded__join(parts, separator) {
  const length = new _M0TPB8MutLocalGiE(0);
  const _bind$2 = parts.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind$2) {
      const part = parts[_];
      length.val = length.val + (part.length + separator.length | 0) | 0;
      if (length.val > 1000000) {
        return new _M0DTPC16result6ResultGsRP217zhengxin_2dcoding4scss10ParseErrorE3Err(new _M0DTPC15error5Error47zhengxin_2dcoding_2fscss_2eParseError_2eInvalid("serialized value limit"));
      }
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return new _M0DTPC16result6ResultGsRP217zhengxin_2dcoding4scss10ParseErrorE2Ok(_M0MPC15array5Array4joinGsE(parts, new _M0TPC16string10StringView(separator, 0, separator.length)));
}
function _M0MP217zhengxin_2dcoding4scss9SassColor3hsl(self) {
  let channels;
  _L: {
    _L$2: {
      const _bind$2 = self.hsl_channels;
      if (_bind$2 === undefined) {
      } else {
        const _Some = _bind$2;
        const _channels = _Some;
        channels = _channels;
        break _L$2;
      }
      break _L;
    }
    return channels;
  }
  const r = self.red / 255;
  const g = self.green / 255;
  const b = self.blue / 255;
  const hi = _M0MPC16double6Double3max(_M0MPC16double6Double3max(r, g), b);
  const lo = _M0MPC16double6Double3min(_M0MPC16double6Double3min(r, g), b);
  const d = hi - lo;
  const l = (hi + lo) / 2;
  if (Math.abs(d) < 1e-012) {
    return { _0: 0, _1: 0, _2: l * 100 };
  }
  const h = hi === r ? (g - b) / d : hi === g ? (b - r) / d + 2 : (r - g) / d + 4;
  const h$2 = h * 60;
  return { _0: h$2 - _M0MPC16double6Double5floor(h$2 / 360) * 360, _1: d / (1 - Math.abs(2 * l - 1)) * 100, _2: l * 100 };
}
function _M0MP217zhengxin_2dcoding4scss9SassColor3css(self) {
  let text;
  _L: {
    _L$2: {
      const _bind$2 = self.original;
      if (_bind$2 === undefined) {
      } else {
        const _Some = _bind$2;
        const _text = _Some;
        text = _text;
        break _L$2;
      }
      break _L;
    }
    return text;
  }
  const alpha = self.alpha === 1 ? "" : `, ${_M0FP217zhengxin_2dcoding4scss12number__text(self.alpha)}`;
  if (self.format === "hsl") {
    let s;
    let h;
    let l;
    _L$2: {
      const _bind$2 = _M0MP217zhengxin_2dcoding4scss9SassColor3hsl(self);
      const _h = _bind$2._0;
      const _s = _bind$2._1;
      const _l = _bind$2._2;
      s = _s;
      h = _h;
      l = _l;
      break _L$2;
    }
    return `${self.alpha === 1 ? "hsl(" : "hsla("}${_M0FP217zhengxin_2dcoding4scss12number__text(h)}, ${_M0FP217zhengxin_2dcoding4scss12number__text(s)}%, ${_M0FP217zhengxin_2dcoding4scss12number__text(l)}%${alpha})`;
  }
  const rgb = [self.red, self.green, self.blue];
  const integers = _M0MPB4Iter3allGdE(_M0MPC15array5Array4iterGdE(rgb), (n) => Math.abs(n - _M0MPC16double6Double5round(n)) < 1e-010);
  if (self.format === "auto" && (integers && self.alpha === 1)) {
    const alphabet = "0123456789abcdef";
    const _tmp = _M0MPC15array5Array3mapGdsE(rgb, (n) => {
      const byte = _M0MPC13int3Int3min(_M0MPC13int3Int3max(_M0MPC16double6Double7to__int(_M0MPC16double6Double5round(n)), 0), 255);
      if (16 === 0) {
        $panic();
      }
      const _tmp$2 = byte / 16 | 0;
      if (16 === 0) {
        $panic();
      }
      const _tmp$3 = _M0MPC16string10StringView9to__owned(_M0MPC16string6String11sub_2einner(alphabet, _tmp$2, (byte / 16 | 0) + 1 | 0));
      if (16 === 0) {
        $panic();
      }
      const _tmp$4 = byte % 16 | 0;
      if (16 === 0) {
        $panic();
      }
      return `${_tmp$3}${_M0MPC16string10StringView9to__owned(_M0MPC16string6String11sub_2einner(alphabet, _tmp$4, (byte % 16 | 0) + 1 | 0))}`;
    });
    const _bind$2 = "";
    const hex = `#${_M0MPC15array5Array4joinGsE(_tmp, new _M0TPC16string10StringView(_bind$2, 0, _bind$2.length))}`;
    const shortest = new _M0TPB8MutLocalGsE(hex);
    const _it = _M0MPB3Map5iter2GsRPB4JsonE(_M0FP217zhengxin_2dcoding4scss13named__colors);
    while (true) {
      let name;
      let b;
      let r;
      let g;
      let a;
      _L$2: {
        const _bind$3 = _M0MPB5Iter24nextGsRPB4JsonE(_it);
        if (_bind$3 === undefined) {
          break;
        } else {
          const _Some = _bind$3;
          const _x = _Some;
          const _name = _x._0;
          const _x$2 = _x._1;
          const _r = _x$2._0;
          const _g = _x$2._1;
          const _b = _x$2._2;
          const _a = _x$2._3;
          name = _name;
          b = _b;
          r = _r;
          g = _g;
          a = _a;
          break _L$2;
        }
      }
      if (a === 1 && (r === _M0MPC16double6Double7to__int(_M0MPC16double6Double5round(self.red)) && (g === _M0MPC16double6Double7to__int(_M0MPC16double6Double5round(self.green)) && (b === _M0MPC16double6Double7to__int(_M0MPC16double6Double5round(self.blue)) && (name.length < shortest.val.length || name.length === shortest.val.length && _M0IP016_24default__implPB7Compare6op__ltGsE(name, shortest.val)))))) {
        shortest.val = name;
      }
      continue;
    }
    return shortest.val;
  }
  const percent = !integers || self.format === "percent";
  const _tmp = self.alpha === 1 ? "rgb(" : "rgba(";
  const _tmp$2 = _M0MPC15array5Array3mapGdsE(rgb, (n) => percent ? `${_M0FP217zhengxin_2dcoding4scss12number__text(n / 255 * 100)}%` : _M0FP217zhengxin_2dcoding4scss12number__text(_M0MPC16double6Double5round(n)));
  const _bind$2 = ", ";
  return `${_tmp}${_M0MPC15array5Array4joinGsE(_tmp$2, new _M0TPC16string10StringView(_bind$2, 0, _bind$2.length))}${alpha})`;
}
function _M0MP217zhengxin_2dcoding4scss9SassValue11css_2einner(self, unquote, inspect) {
  let values;
  _L: {
    let separator;
    let values$2;
    let bracketed;
    _L$2: {
      let text;
      let quoted;
      _L$3: {
        let n;
        _L$4: {
          let value;
          _L$5: {
            let c;
            _L$6: {
              switch (self.$tag) {
                case 4: {
                  return inspect ? new _M0DTPC16result6ResultGsRP217zhengxin_2dcoding4scss10ParseErrorE2Ok("null") : new _M0DTPC16result6ResultGsRP217zhengxin_2dcoding4scss10ParseErrorE2Ok("");
                }
                case 1: {
                  const _Color = self;
                  const _c = _Color._0;
                  c = _c;
                  break _L$6;
                }
                case 3: {
                  const _Boolean = self;
                  const _value = _Boolean._0;
                  value = _value;
                  break _L$5;
                }
                case 0: {
                  const _Number = self;
                  const _n = _Number._0;
                  n = _n;
                  break _L$4;
                }
                case 2: {
                  const _Text = self;
                  const _text = _Text._0;
                  const _quoted = _Text._1;
                  text = _text;
                  quoted = _quoted;
                  break _L$3;
                }
                case 5: {
                  const _List = self;
                  const _values = _List._0;
                  const _separator = _List._1;
                  const _bracketed = _List._2;
                  separator = _separator;
                  values$2 = _values;
                  bracketed = _bracketed;
                  break _L$2;
                }
                default: {
                  const _Dictionary = self;
                  const _values$2 = _Dictionary._0;
                  values = _values$2;
                  break _L;
                }
              }
            }
            return new _M0DTPC16result6ResultGsRP217zhengxin_2dcoding4scss10ParseErrorE2Ok(_M0MP217zhengxin_2dcoding4scss9SassColor3css(c));
          }
          return new _M0DTPC16result6ResultGsRP217zhengxin_2dcoding4scss10ParseErrorE2Ok(_M0IPC14bool4BoolPB4Show10to__string(value));
        }
        const value = _M0FP217zhengxin_2dcoding4scss12number__text(n.amount);
        if (n.numerator.length > 1 || !_M0MPC15array5Array9is__emptyGRPB4JsonE(n.denominator)) {
          let top;
          if (_M0MPC15array5Array9is__emptyGRPB4JsonE(n.numerator)) {
            top = value;
          } else {
            const _tmp = _M0MPC15array5Array2atGRPB4JsonE(n.numerator, 0);
            const _tmp$2 = _M0MPC15array5Array3mapGssE(_M0MPC15array9ArrayView9to__ownedGsE(_M0MPC15array5Array12view_2einnerGsE(n.numerator, 1, undefined)), (unit) => ` * 1${unit}`);
            const _bind$2 = "";
            top = `${value}${_tmp}${_M0MPC15array5Array4joinGsE(_tmp$2, new _M0TPC16string10StringView(_bind$2, 0, _bind$2.length))}`;
          }
          const _tmp = _M0MPC15array5Array3mapGssE(n.denominator, (unit) => ` / 1${unit}`);
          const _bind$2 = "";
          const bottom = _M0MPC15array5Array4joinGsE(_tmp, new _M0TPC16string10StringView(_bind$2, 0, _bind$2.length));
          return new _M0DTPC16result6ResultGsRP217zhengxin_2dcoding4scss10ParseErrorE2Ok(`calc(${top}${bottom})`);
        } else {
          if (_M0MPC16double6Double7is__nan(n.amount) || _M0MPC16double6Double7is__inf(n.amount)) {
            let _tmp;
            if (_M0MP217zhengxin_2dcoding4scss10SassNumber8unitless(n)) {
              _tmp = "";
            } else {
              const _tmp$2 = n.numerator;
              const _bind$2 = "*";
              _tmp = ` * 1${_M0MPC15array5Array4joinGsE(_tmp$2, new _M0TPC16string10StringView(_bind$2, 0, _bind$2.length))}`;
            }
            return new _M0DTPC16result6ResultGsRP217zhengxin_2dcoding4scss10ParseErrorE2Ok(`calc(${value}${_tmp})`);
          } else {
            const _tmp = n.numerator;
            const _bind$2 = "*";
            const _tmp$2 = _M0MPC15array5Array4joinGsE(_tmp, new _M0TPC16string10StringView(_bind$2, 0, _bind$2.length));
            let _tmp$3;
            if (_M0MPC15array5Array9is__emptyGRPB4JsonE(n.denominator)) {
              _tmp$3 = "";
            } else {
              const _tmp$4 = n.denominator;
              const _bind$3 = "*";
              _tmp$3 = `/${_M0MPC15array5Array4joinGsE(_tmp$4, new _M0TPC16string10StringView(_bind$3, 0, _bind$3.length))}`;
            }
            return new _M0DTPC16result6ResultGsRP217zhengxin_2dcoding4scss10ParseErrorE2Ok(`${value}${_tmp$2}${_tmp$3}`);
          }
        }
      }
      if (quoted && !unquote) {
        const _bind$2 = "\\";
        const _tmp = new _M0TPC16string10StringView(_bind$2, 0, _bind$2.length);
        const _bind$3 = "\\\\";
        const _tmp$2 = _M0MPC16string6String12replace__all(text, _tmp, new _M0TPC16string10StringView(_bind$3, 0, _bind$3.length));
        const _bind$4 = "\"";
        const _tmp$3 = new _M0TPC16string10StringView(_bind$4, 0, _bind$4.length);
        const _bind$5 = "\\\"";
        const _tmp$4 = _M0MPC16string6String12replace__all(_tmp$2, _tmp$3, new _M0TPC16string10StringView(_bind$5, 0, _bind$5.length));
        const _bind$6 = "\n";
        const _tmp$5 = new _M0TPC16string10StringView(_bind$6, 0, _bind$6.length);
        const _bind$7 = "\\a ";
        return new _M0DTPC16result6ResultGsRP217zhengxin_2dcoding4scss10ParseErrorE2Ok(`\"${_M0MPC16string6String12replace__all(_tmp$4, _tmp$5, new _M0TPC16string10StringView(_bind$7, 0, _bind$7.length))}\"`);
      } else {
        return new _M0DTPC16result6ResultGsRP217zhengxin_2dcoding4scss10ParseErrorE2Ok(text);
      }
    }
    const _bind$2 = _M0MPC15array5Array3mapGRP217zhengxin_2dcoding4scss9SassValuesEHRP217zhengxin_2dcoding4scss10ParseError(_M0MPC15array5Array6filterGRP217zhengxin_2dcoding4scss9SassValueE(values$2, (v) => {
      let _tmp;
      if (v.$tag === 4) {
        _tmp = true;
      } else {
        _tmp = false;
      }
      return !_tmp;
    }), (v) => _M0MP217zhengxin_2dcoding4scss9SassValue11css_2einner(v, unquote, inspect));
    let items;
    if (_bind$2.$tag === 1) {
      const _ok = _bind$2;
      items = _ok._0;
    } else {
      return _bind$2;
    }
    if (_M0MPC15array5Array9is__emptyGRPB4JsonE(items) && (!bracketed && !inspect)) {
      return new _M0DTPC16result6ResultGsRP217zhengxin_2dcoding4scss10ParseErrorE3Err(new _M0DTPC15error5Error47zhengxin_2dcoding_2fscss_2eParseError_2eInvalid("empty list is not a CSS value"));
    }
    const _bind$3 = _M0FP217zhengxin_2dcoding4scss13bounded__join(items, separator === "," ? ", " : separator);
    let inside;
    if (_bind$3.$tag === 1) {
      const _ok = _bind$3;
      inside = _ok._0;
    } else {
      return _bind$3;
    }
    return bracketed ? new _M0DTPC16result6ResultGsRP217zhengxin_2dcoding4scss10ParseErrorE2Ok(`[${inside}]`) : inspect && (_M0MPC15array5Array9is__emptyGRPB4JsonE(items) || separator === ",") ? new _M0DTPC16result6ResultGsRP217zhengxin_2dcoding4scss10ParseErrorE2Ok(`(${inside}${items.length === 1 ? "," : ""})`) : new _M0DTPC16result6ResultGsRP217zhengxin_2dcoding4scss10ParseErrorE2Ok(inside);
  }
  if (!inspect) {
    return new _M0DTPC16result6ResultGsRP217zhengxin_2dcoding4scss10ParseErrorE3Err(new _M0DTPC15error5Error47zhengxin_2dcoding_2fscss_2eParseError_2eInvalid("map is not a CSS value"));
  }
  const _bind$2 = _M0MPC15array5Array3mapGURP217zhengxin_2dcoding4scss9SassValueRP217zhengxin_2dcoding4scss9SassValueEsEHRP217zhengxin_2dcoding4scss10ParseError(values, (p) => {
    const _bind$3 = _M0MP217zhengxin_2dcoding4scss9SassValue11css_2einner(p._0, false, true);
    let _tmp;
    if (_bind$3.$tag === 1) {
      const _ok = _bind$3;
      _tmp = _ok._0;
    } else {
      return _bind$3;
    }
    const _tmp$2 = _tmp;
    const _bind$4 = _M0MP217zhengxin_2dcoding4scss9SassValue11css_2einner(p._1, false, true);
    let _tmp$3;
    if (_bind$4.$tag === 1) {
      const _ok = _bind$4;
      _tmp$3 = _ok._0;
    } else {
      return _bind$4;
    }
    return _M0FP217zhengxin_2dcoding4scss13bounded__join([_tmp$2, _tmp$3], ": ");
  });
  let _tmp;
  if (_bind$2.$tag === 1) {
    const _ok = _bind$2;
    _tmp = _ok._0;
  } else {
    return _bind$2;
  }
  const _bind$3 = _M0FP217zhengxin_2dcoding4scss13bounded__join(_tmp, ", ");
  let _tmp$2;
  if (_bind$3.$tag === 1) {
    const _ok = _bind$3;
    _tmp$2 = _ok._0;
  } else {
    return _bind$3;
  }
  return new _M0DTPC16result6ResultGsRP217zhengxin_2dcoding4scss10ParseErrorE2Ok(`(${_tmp$2})`);
}
function _M0MP217zhengxin_2dcoding4scss9SassValue4same(self, other) {
  let a;
  let b;
  _L: {
    let a$2;
    let b$2;
    _L$2: {
      let bracket;
      let a$3;
      let sep;
      let sep2;
      let b$3;
      let bracket2;
      _L$3: {
        let a$4;
        let b$4;
        _L$4: {
          let a$5;
          let b$5;
          _L$5: {
            let a$6;
            let b$6;
            _L$6: {
              let a$7;
              let b$7;
              _L$7: {
                switch (self.$tag) {
                  case 4: {
                    if (other.$tag === 4) {
                      return true;
                    } else {
                      return false;
                    }
                  }
                  case 3: {
                    const _Boolean = self;
                    const _a = _Boolean._0;
                    if (other.$tag === 3) {
                      const _Boolean$2 = other;
                      const _b = _Boolean$2._0;
                      a$7 = _a;
                      b$7 = _b;
                      break _L$7;
                    } else {
                      return false;
                    }
                  }
                  case 1: {
                    const _Color = self;
                    const _a$2 = _Color._0;
                    if (other.$tag === 1) {
                      const _Color$2 = other;
                      const _b = _Color$2._0;
                      a$6 = _a$2;
                      b$6 = _b;
                      break _L$6;
                    } else {
                      return false;
                    }
                  }
                  case 2: {
                    const _Text = self;
                    const _a$3 = _Text._0;
                    if (other.$tag === 2) {
                      const _Text$2 = other;
                      const _b = _Text$2._0;
                      a$5 = _a$3;
                      b$5 = _b;
                      break _L$5;
                    } else {
                      return false;
                    }
                  }
                  case 0: {
                    const _Number = self;
                    const _a$4 = _Number._0;
                    if (other.$tag === 0) {
                      const _Number$2 = other;
                      const _b = _Number$2._0;
                      a$4 = _a$4;
                      b$4 = _b;
                      break _L$4;
                    } else {
                      return false;
                    }
                  }
                  case 5: {
                    const _List = self;
                    const _a$5 = _List._0;
                    const _sep = _List._1;
                    const _bracket = _List._2;
                    if (other.$tag === 5) {
                      const _List$2 = other;
                      const _b = _List$2._0;
                      const _sep2 = _List$2._1;
                      const _bracket2 = _List$2._2;
                      bracket = _bracket;
                      a$3 = _a$5;
                      sep = _sep;
                      sep2 = _sep2;
                      b$3 = _b;
                      bracket2 = _bracket2;
                      break _L$3;
                    } else {
                      if (_bracket === false) {
                        if (other.$tag === 6) {
                          const _Dictionary = other;
                          const _b = _Dictionary._0;
                          a = _a$5;
                          b = _b;
                          break _L;
                        } else {
                          return false;
                        }
                      } else {
                        return false;
                      }
                    }
                  }
                  default: {
                    const _Dictionary = self;
                    const _a$6 = _Dictionary._0;
                    switch (other.$tag) {
                      case 6: {
                        const _Dictionary$2 = other;
                        const _b = _Dictionary$2._0;
                        a$2 = _a$6;
                        b$2 = _b;
                        break _L$2;
                      }
                      case 5: {
                        const _List$2 = other;
                        const _a$7 = _List$2._0;
                        const _x = _List$2._2;
                        if (_x === false) {
                          a = _a$7;
                          b = _a$6;
                          break _L;
                        } else {
                          return false;
                        }
                      }
                      default: {
                        return false;
                      }
                    }
                  }
                }
              }
              return a$7 === b$7;
            }
            return Math.abs(a$6.red - b$6.red) < 1e-010 && (Math.abs(a$6.green - b$6.green) < 1e-010 && (Math.abs(a$6.blue - b$6.blue) < 1e-010 && Math.abs(a$6.alpha - b$6.alpha) < 1e-010));
          }
          return a$5 === b$5;
        }
        let n;
        _L$5: {
          const _bind$2 = _M0MP217zhengxin_2dcoding4scss10SassNumber15convert_2einner(b$4, a$4, false);
          if (_bind$2.$tag === 1) {
            const _Some = _bind$2;
            const _n = _Some._0;
            n = _n;
            break _L$5;
          } else {
            return false;
          }
        }
        return Math.abs(a$4.amount - n) <= 1e-011 * _M0MPC16double6Double3max(_M0MPC16double6Double3max(Math.abs(a$4.amount), Math.abs(n)), 1);
      }
      return sep === sep2 && (bracket === bracket2 && (a$3.length === b$3.length && _M0FP217zhengxin_2dcoding4scss11same__items(a$3, b$3)));
    }
    return a$2.length === b$2.length && _M0MPB4Iter3allGUOsRP217zhengxin_2dcoding4scss10ExpressionbEE(_M0MPC15array5Array4iterGsE(a$2), (p) => _M0MPB4Iter3anyGURP217zhengxin_2dcoding4scss9SassValueRP217zhengxin_2dcoding4scss9SassValueEE(_M0MPC15array5Array4iterGsE(b$2), (q) => _M0MP217zhengxin_2dcoding4scss9SassValue4same(p._0, q._0) && _M0MP217zhengxin_2dcoding4scss9SassValue4same(p._1, q._1)));
  }
  return _M0MPC15array5Array9is__emptyGRPB4JsonE(a) && _M0MPC15array5Array9is__emptyGRPB4JsonE(b);
}
function _M0FP217zhengxin_2dcoding4scss11same__items(a, b) {
  if (a.length !== b.length) {
    return false;
  }
  const _bind$2 = 0;
  const _bind$3 = a.length;
  let _tmp = _bind$2;
  while (true) {
    const i = _tmp;
    if (i < _bind$3) {
      if (!_M0MP217zhengxin_2dcoding4scss9SassValue4same(_M0MPC15array5Array2atGRPB4JsonE(a, i), _M0MPC15array5Array2atGRPB4JsonE(b, i))) {
        return false;
      }
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return true;
}
function _M0FP217zhengxin_2dcoding4scss13binary__value(operator, left, right) {
  if (operator === "==" || operator === "!=") {
    return new _M0DTPC16result6ResultGRP217zhengxin_2dcoding4scss9SassValueRP217zhengxin_2dcoding4scss10ParseErrorE2Ok(new _M0DTP217zhengxin_2dcoding4scss9SassValue7Boolean(operator === "==" ? _M0MP217zhengxin_2dcoding4scss9SassValue4same(left, right) : !_M0MP217zhengxin_2dcoding4scss9SassValue4same(left, right)));
  }
  let a;
  let b;
  _L: {
    _L$2: {
      if (left.$tag === 0) {
        const _Number = left;
        const _a = _Number._0;
        if (right.$tag === 0) {
          const _Number$2 = right;
          const _b = _Number$2._0;
          a = _a;
          b = _b;
          break _L$2;
        }
      }
      break _L;
    }
    if (operator === "*" || operator === "/") {
      if ((((a.numerator.length + a.denominator.length | 0) + b.numerator.length | 0) + b.denominator.length | 0) > 128) {
        return new _M0DTPC16result6ResultGRP217zhengxin_2dcoding4scss9SassValueRP217zhengxin_2dcoding4scss10ParseErrorE3Err(new _M0DTPC15error5Error47zhengxin_2dcoding_2fscss_2eParseError_2eInvalid("compound unit limit"));
      }
      return new _M0DTPC16result6ResultGRP217zhengxin_2dcoding4scss9SassValueRP217zhengxin_2dcoding4scss10ParseErrorE2Ok(new _M0DTP217zhengxin_2dcoding4scss9SassValue6Number(_M0FP217zhengxin_2dcoding4scss17normalize__number(new _M0TP217zhengxin_2dcoding4scss10SassNumber(operator === "*" ? a.amount * b.amount : a.amount / b.amount, _M0IPC15array5ArrayPB3Add3addGsE(a.numerator, operator === "*" ? b.numerator : b.denominator), _M0IPC15array5ArrayPB3Add3addGsE(a.denominator, operator === "*" ? b.denominator : b.numerator)))));
    }
    const target = _M0MP217zhengxin_2dcoding4scss10SassNumber8unitless(a) ? b : a;
    const av = _M0MPC16option6Option6unwrapGdE(_M0MP217zhengxin_2dcoding4scss10SassNumber15convert_2einner(a, target, true));
    let bv;
    const _bind$2 = _M0MP217zhengxin_2dcoding4scss10SassNumber15convert_2einner(b, target, true);
    if (_bind$2.$tag === 1) {
      const _Some = _bind$2;
      const _v = _Some._0;
      bv = _v;
    } else {
      return new _M0DTPC16result6ResultGRP217zhengxin_2dcoding4scss9SassValueRP217zhengxin_2dcoding4scss10ParseErrorE3Err(new _M0DTPC15error5Error47zhengxin_2dcoding_2fscss_2eParseError_2eInvalid("incompatible units"));
    }
    switch (operator) {
      case "+": {
        return new _M0DTPC16result6ResultGRP217zhengxin_2dcoding4scss9SassValueRP217zhengxin_2dcoding4scss10ParseErrorE2Ok(new _M0DTP217zhengxin_2dcoding4scss9SassValue6Number(new _M0TP217zhengxin_2dcoding4scss10SassNumber(av + bv, target.numerator, target.denominator)));
      }
      case "-": {
        return new _M0DTPC16result6ResultGRP217zhengxin_2dcoding4scss9SassValueRP217zhengxin_2dcoding4scss10ParseErrorE2Ok(new _M0DTP217zhengxin_2dcoding4scss9SassValue6Number(new _M0TP217zhengxin_2dcoding4scss10SassNumber(av - bv, target.numerator, target.denominator)));
      }
      case "%": {
        return new _M0DTPC16result6ResultGRP217zhengxin_2dcoding4scss9SassValueRP217zhengxin_2dcoding4scss10ParseErrorE2Ok(new _M0DTP217zhengxin_2dcoding4scss9SassValue6Number(new _M0TP217zhengxin_2dcoding4scss10SassNumber(av - bv * _M0MPC16double6Double5floor(av / bv), target.numerator, target.denominator)));
      }
      case "<": {
        return new _M0DTPC16result6ResultGRP217zhengxin_2dcoding4scss9SassValueRP217zhengxin_2dcoding4scss10ParseErrorE2Ok(new _M0DTP217zhengxin_2dcoding4scss9SassValue7Boolean(av < bv));
      }
      case "<=": {
        return new _M0DTPC16result6ResultGRP217zhengxin_2dcoding4scss9SassValueRP217zhengxin_2dcoding4scss10ParseErrorE2Ok(new _M0DTP217zhengxin_2dcoding4scss9SassValue7Boolean(av <= bv));
      }
      case ">": {
        return new _M0DTPC16result6ResultGRP217zhengxin_2dcoding4scss9SassValueRP217zhengxin_2dcoding4scss10ParseErrorE2Ok(new _M0DTP217zhengxin_2dcoding4scss9SassValue7Boolean(av > bv));
      }
      case ">=": {
        return new _M0DTPC16result6ResultGRP217zhengxin_2dcoding4scss9SassValueRP217zhengxin_2dcoding4scss10ParseErrorE2Ok(new _M0DTP217zhengxin_2dcoding4scss9SassValue7Boolean(av >= bv));
      }
    }
  }
  _L$2: {
    _L$3: {
      _L$4: {
        if (left.$tag === 1) {
          if (right.$tag === 1) {
            break _L$3;
          } else {
            if (right.$tag === 0) {
              break _L$3;
            } else {
              break _L$4;
            }
          }
        } else {
          break _L$4;
        }
      }
      if (right.$tag === 1) {
        if (left.$tag === 0) {
          break _L$3;
        }
      }
      break _L$2;
    }
    return new _M0DTPC16result6ResultGRP217zhengxin_2dcoding4scss9SassValueRP217zhengxin_2dcoding4scss10ParseErrorE3Err(new _M0DTPC15error5Error47zhengxin_2dcoding_2fscss_2eParseError_2eInvalid(`undefined color operation ${operator}`));
  }
  if (operator === "+") {
    let quoted;
    if (left.$tag === 2) {
      const _Text = left;
      const _q = _Text._1;
      quoted = _q;
    } else {
      quoted = false;
    }
    const _bind$2 = _M0MP217zhengxin_2dcoding4scss9SassValue11css_2einner(left, true, false);
    let _tmp;
    if (_bind$2.$tag === 1) {
      const _ok = _bind$2;
      _tmp = _ok._0;
    } else {
      return _bind$2;
    }
    const _tmp$2 = _tmp;
    const _bind$3 = _M0MP217zhengxin_2dcoding4scss9SassValue11css_2einner(right, true, false);
    let _tmp$3;
    if (_bind$3.$tag === 1) {
      const _ok = _bind$3;
      _tmp$3 = _ok._0;
    } else {
      return _bind$3;
    }
    const _bind$4 = _M0FP217zhengxin_2dcoding4scss13bounded__join([_tmp$2, _tmp$3], "");
    let _tmp$4;
    if (_bind$4.$tag === 1) {
      const _ok = _bind$4;
      _tmp$4 = _ok._0;
    } else {
      return _bind$4;
    }
    return new _M0DTPC16result6ResultGRP217zhengxin_2dcoding4scss9SassValueRP217zhengxin_2dcoding4scss10ParseErrorE2Ok(new _M0DTP217zhengxin_2dcoding4scss9SassValue4Text(_tmp$4, quoted));
  }
  if (operator === "-" || operator === "/") {
    const _bind$2 = _M0MP217zhengxin_2dcoding4scss9SassValue11css_2einner(left, true, false);
    let _tmp;
    if (_bind$2.$tag === 1) {
      const _ok = _bind$2;
      _tmp = _ok._0;
    } else {
      return _bind$2;
    }
    const _tmp$2 = _tmp;
    const _bind$3 = _M0MP217zhengxin_2dcoding4scss9SassValue11css_2einner(right, true, false);
    let _tmp$3;
    if (_bind$3.$tag === 1) {
      const _ok = _bind$3;
      _tmp$3 = _ok._0;
    } else {
      return _bind$3;
    }
    const _bind$4 = _M0FP217zhengxin_2dcoding4scss13bounded__join([_tmp$2, _tmp$3], operator);
    let _tmp$4;
    if (_bind$4.$tag === 1) {
      const _ok = _bind$4;
      _tmp$4 = _ok._0;
    } else {
      return _bind$4;
    }
    return new _M0DTPC16result6ResultGRP217zhengxin_2dcoding4scss9SassValueRP217zhengxin_2dcoding4scss10ParseErrorE2Ok(new _M0DTP217zhengxin_2dcoding4scss9SassValue4Text(_tmp$4, false));
  }
  return new _M0DTPC16result6ResultGRP217zhengxin_2dcoding4scss9SassValueRP217zhengxin_2dcoding4scss10ParseErrorE3Err(new _M0DTPC15error5Error47zhengxin_2dcoding_2fscss_2eParseError_2eInvalid(`undefined operation ${operator}`));
}
function _M0MP217zhengxin_2dcoding4scss10Evaluation3new() {
  const _bind$2 = [];
  const _tmp = _M0MPB3Map3MapGssE(new _M0TPB9ArrayViewGUssEE(_bind$2, 0, 0), undefined);
  const _bind$3 = [];
  const _tmp$2 = _M0MPB3Map3MapGsRP217zhengxin_2dcoding4scss5ScopeE(new _M0TPB9ArrayViewGUsRP217zhengxin_2dcoding4scss5ScopeEE(_bind$3, 0, 0), undefined);
  const _tmp$3 = [];
  const _tmp$4 = [];
  const _tmp$5 = [];
  const _tmp$6 = [];
  const _bind$4 = [];
  return new _M0TP217zhengxin_2dcoding4scss10Evaluation(100000, 0, _tmp, _tmp$2, _tmp$3, _tmp$4, _tmp$5, _tmp$6, _M0MPB3Map3MapGsRPB5ArrayGsEE(new _M0TPB9ArrayViewGUsRPB5ArrayGsEEE(_bind$4, 0, 0), undefined), []);
}
function _M0MP217zhengxin_2dcoding4scss5Scope6charge(self) {
  const _bind$2 = self.evaluation;
  _bind$2.remaining = _bind$2.remaining - 1 | 0;
  if (self.evaluation.remaining < 0) {
    return new _M0DTPC16result6ResultGuRP217zhengxin_2dcoding4scss10ParseErrorE3Err(new _M0DTPC15error5Error47zhengxin_2dcoding_2fscss_2eParseError_2eInvalid("evaluation budget"));
  } else {
    return new _M0DTPC16result6ResultGuRP217zhengxin_2dcoding4scss10ParseErrorE2Ok(undefined);
  }
}
function _M0MP217zhengxin_2dcoding4scss16ExpressionParser12peek_2einner(self, offset) {
  return _M0MPC16option6Option10unwrap__orGcE(_M0MPC15array5Array3getGcE(self.chars, self.pos + offset | 0), 0);
}
function _M0FP217zhengxin_2dcoding4scss10whitespace(c) {
  return _M0MPC15array5Array8containsGcE([32, 9, 10, 13, 12], c);
}
function _M0FP217zhengxin_2dcoding4scss13color_2einner(red, green, blue, alpha, format, original) {
  return new _M0TP217zhengxin_2dcoding4scss9SassColor(red, green, blue, alpha, format, original, undefined);
}
function _M0FP217zhengxin_2dcoding4scss5color(red, green, blue, alpha$46$opt, format$46$opt, original$46$opt) {
  let alpha;
  if (alpha$46$opt.$tag === 1) {
    const _Some = alpha$46$opt;
    alpha = _Some._0;
  } else {
    alpha = 1;
  }
  let format;
  if (format$46$opt === undefined) {
    format = "auto";
  } else {
    const _Some = format$46$opt;
    format = _Some;
  }
  let original;
  if (original$46$opt.$tag === 1) {
    const _Some = original$46$opt;
    original = _Some._0;
  } else {
    original = undefined;
  }
  return _M0FP217zhengxin_2dcoding4scss13color_2einner(red, green, blue, alpha, format, original);
}
function _M0FP217zhengxin_2dcoding4scss17color__hex__digit(c) {
  const n = c;
  return n >= 48 && n <= 57 ? n - 48 | 0 : n >= 65 && n <= 70 ? n - 55 | 0 : n >= 97 && n <= 102 ? n - 87 | 0 : undefined;
}
function _M0FP217zhengxin_2dcoding4scss14color__literal(text) {
  let b;
  let r;
  let g;
  let a;
  _L: {
    _L$2: {
      const _bind$2 = _M0MPB3Map3getGsUiiiiEE(_M0FP217zhengxin_2dcoding4scss13named__colors, _M0MPC16string6String9to__lower(text));
      if (_bind$2 === undefined) {
      } else {
        const _Some = _bind$2;
        const _x = _Some;
        const _r = _x._0;
        const _g = _x._1;
        const _b = _x._2;
        const _a = _x._3;
        b = _b;
        r = _r;
        g = _g;
        a = _a;
        break _L$2;
      }
      break _L;
    }
    return new _M0DTPC16result6ResultGORP217zhengxin_2dcoding4scss9SassValueRP217zhengxin_2dcoding4scss10ParseErrorE2Ok(new _M0DTP217zhengxin_2dcoding4scss9SassValue5Color(_M0FP217zhengxin_2dcoding4scss13color_2einner(r + 0, g + 0, b + 0, a + 0, "auto", text)));
  }
  const _bind$2 = "#";
  if (!_M0MPC16string6String11has__prefix(text, new _M0TPC16string10StringView(_bind$2, 0, _bind$2.length))) {
    return new _M0DTPC16result6ResultGORP217zhengxin_2dcoding4scss9SassValueRP217zhengxin_2dcoding4scss10ParseErrorE2Ok(undefined);
  }
  const n = text.length - 1 | 0;
  if (!_M0MPC15array5Array8containsGiE([3, 4, 6, 8], n)) {
    return new _M0DTPC16result6ResultGORP217zhengxin_2dcoding4scss9SassValueRP217zhengxin_2dcoding4scss10ParseErrorE3Err(new _M0DTPC15error5Error47zhengxin_2dcoding_2fscss_2eParseError_2eInvalid("invalid hex color length"));
  }
  const digits = [];
  const _bind$3 = 1;
  const _bind$4 = text.length;
  let _tmp = _bind$3;
  while (true) {
    const i = _tmp;
    if (i < _bind$4) {
      const _bind$5 = _M0MPC16option6Option16unwrap__or__elseGiEHRP217zhengxin_2dcoding4scss10ParseError(_M0FP217zhengxin_2dcoding4scss17color__hex__digit(i >>> 0 < text.length ? text.charCodeAt(i) : $oob()), () => new _M0DTPC16result6ResultGiRP217zhengxin_2dcoding4scss10ParseErrorE3Err(new _M0DTPC15error5Error47zhengxin_2dcoding_2fscss_2eParseError_2eInvalid("invalid hex color")));
      let _tmp$2;
      if (_bind$5.$tag === 1) {
        const _ok = _bind$5;
        _tmp$2 = _ok._0;
      } else {
        return _bind$5;
      }
      _M0MPC15array5Array4pushGiE(digits, _tmp$2);
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const short = n <= 4;
  const channel = (i) => (short ? Math.imul(_M0MPC15array5Array2atGiE(digits, i), 17) | 0 : (Math.imul(_M0MPC15array5Array2atGiE(digits, Math.imul(i, 2) | 0), 16) | 0) + _M0MPC15array5Array2atGiE(digits, (Math.imul(i, 2) | 0) + 1 | 0) | 0) + 0;
  const alpha = n === 4 || n === 8 ? channel(3) / 255 : 1;
  return new _M0DTPC16result6ResultGORP217zhengxin_2dcoding4scss9SassValueRP217zhengxin_2dcoding4scss10ParseErrorE2Ok(new _M0DTP217zhengxin_2dcoding4scss9SassValue5Color(_M0FP217zhengxin_2dcoding4scss13color_2einner(channel(0), channel(1), channel(2), alpha, "auto", n === 3 || n === 6 ? text : undefined)));
}
function _M0FP217zhengxin_2dcoding4scss5digit(c) {
  return c >= 48 && c <= 57;
}
function _M0FP217zhengxin_2dcoding4scss10identifier(name) {
  const _bind$2 = "_";
  const _tmp = new _M0TPC16string10StringView(_bind$2, 0, _bind$2.length);
  const _bind$3 = "-";
  return _M0MPC16string6String12replace__all(name, _tmp, new _M0TPC16string10StringView(_bind$3, 0, _bind$3.length));
}
function _M0FP217zhengxin_2dcoding4scss4word(c) {
  return c >= 97 && c <= 122 || (c >= 65 && c <= 90 || (c >= 48 && c <= 57 || c === 95));
}
function _M0FP217zhengxin_2dcoding4scss10name__char(c) {
  return _M0FP217zhengxin_2dcoding4scss4word(c) || (c === 45 || c > 127);
}
function _M0FP217zhengxin_2dcoding4scss15reference__name(name) {
  const _bind$2 = ".";
  const parts = _M0MPB4Iter9to__arrayGRPC16string10StringViewE(_M0MPC16string6String5split(name, new _M0TPC16string10StringView(_bind$2, 0, _bind$2.length)));
  return parts.length === 2 ? `${_M0MPC16string10StringView9to__owned(_M0MPC15array5Array2atGRPB4JsonE(parts, 0))}.${_M0FP217zhengxin_2dcoding4scss10identifier(_M0MPC16string10StringView9to__owned(_M0MPC15array5Array2atGRPB4JsonE(parts, 1)))}` : _M0FP217zhengxin_2dcoding4scss10identifier(name);
}
function _M0MP217zhengxin_2dcoding4scss16ExpressionParser5space(self) {
  const start = self.pos;
  while (true) {
    if (_M0FP217zhengxin_2dcoding4scss10whitespace(_M0MP217zhengxin_2dcoding4scss16ExpressionParser12peek_2einner(self, 0))) {
      self.pos = self.pos + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return self.pos > start;
}
function _M0MP217zhengxin_2dcoding4scss16ExpressionParser4word(self, text) {
  const chars = _M0MPC16string6String9to__array(text);
  if ((self.pos + chars.length | 0) > self.chars.length) {
    return false;
  }
  const _bind$2 = 0;
  const _bind$3 = chars.length;
  let _tmp = _bind$2;
  while (true) {
    const i = _tmp;
    if (i < _bind$3) {
      if (_M0MPC15array5Array2atGcE(self.chars, self.pos + i | 0) !== _M0MPC15array5Array2atGcE(chars, i)) {
        return false;
      }
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const next = _M0MPC16option6Option10unwrap__orGcE(_M0MPC15array5Array3getGcE(self.chars, self.pos + chars.length | 0), 0);
  return !_M0FP217zhengxin_2dcoding4scss10name__char(next);
}
function _M0MP217zhengxin_2dcoding4scss16ExpressionParser8sequence(self, bracketed) {
  self.depth = self.depth + 1 | 0;
  if (self.depth > 64) {
    return new _M0DTPC16result6ResultGRP217zhengxin_2dcoding4scss10ExpressionRP217zhengxin_2dcoding4scss10ParseErrorE3Err(new _M0DTPC15error5Error47zhengxin_2dcoding_2fscss_2eParseError_2eInvalid("expression nesting limit"));
  }
  const comma = [];
  const trailing = new _M0TPB8MutLocalGbE(false);
  while (true) {
    const _bind$2 = _M0MP217zhengxin_2dcoding4scss16ExpressionParser6binary(self, 0);
    let _tmp;
    if (_bind$2.$tag === 1) {
      const _ok = _bind$2;
      _tmp = _ok._0;
    } else {
      return _bind$2;
    }
    const values = [_tmp];
    while (true) {
      const before = self.pos;
      const gap = _M0MP217zhengxin_2dcoding4scss16ExpressionParser5space(self);
      const c = _M0MP217zhengxin_2dcoding4scss16ExpressionParser12peek_2einner(self, 0);
      if (!gap || (_M0MPC15array5Array8containsGcE([0, 44, 41, 93, 58, 125], c) || c === 46 && _M0MP217zhengxin_2dcoding4scss16ExpressionParser12peek_2einner(self, 1) === 46)) {
        self.pos = before;
        break;
      }
      const _bind$3 = _M0MP217zhengxin_2dcoding4scss16ExpressionParser6binary(self, 0);
      let _tmp$2;
      if (_bind$3.$tag === 1) {
        const _ok = _bind$3;
        _tmp$2 = _ok._0;
      } else {
        return _bind$3;
      }
      _M0MPC15array5Array4pushGRPC14json10WriteFrameE(values, _tmp$2);
      if (values.length > 4096) {
        return new _M0DTPC16result6ResultGRP217zhengxin_2dcoding4scss10ExpressionRP217zhengxin_2dcoding4scss10ParseErrorE3Err(new _M0DTPC15error5Error47zhengxin_2dcoding_2fscss_2eParseError_2eInvalid("list length limit"));
      }
      continue;
    }
    _M0MPC15array5Array4pushGRPC14json10WriteFrameE(comma, values.length === 1 ? _M0MPC15array5Array2atGRPB4JsonE(values, 0) : new _M0DTP217zhengxin_2dcoding4scss10Expression8Sequence(values, " ", false));
    _M0MP217zhengxin_2dcoding4scss16ExpressionParser5space(self);
    if (_M0MP217zhengxin_2dcoding4scss16ExpressionParser12peek_2einner(self, 0) !== 44) {
      break;
    }
    self.pos = self.pos + 1 | 0;
    _M0MP217zhengxin_2dcoding4scss16ExpressionParser5space(self);
    if (_M0MPC15array5Array8containsGcE([0, 41, 93, 125], _M0MP217zhengxin_2dcoding4scss16ExpressionParser12peek_2einner(self, 0))) {
      trailing.val = true;
      break;
    }
    if (comma.length > 4096) {
      return new _M0DTPC16result6ResultGRP217zhengxin_2dcoding4scss10ExpressionRP217zhengxin_2dcoding4scss10ParseErrorE3Err(new _M0DTPC15error5Error47zhengxin_2dcoding_2fscss_2eParseError_2eInvalid("list length limit"));
    }
    continue;
  }
  self.depth = self.depth - 1 | 0;
  if (comma.length > 1 || trailing.val) {
    return new _M0DTPC16result6ResultGRP217zhengxin_2dcoding4scss10ExpressionRP217zhengxin_2dcoding4scss10ParseErrorE2Ok(new _M0DTP217zhengxin_2dcoding4scss10Expression8Sequence(comma, ",", bracketed));
  } else {
    if (bracketed) {
      let value;
      _L: {
        let separator;
        let values;
        _L$2: {
          const _bind$2 = _M0MPC15array5Array2atGRPB4JsonE(comma, 0);
          if (_bind$2.$tag === 4) {
            const _Sequence = _bind$2;
            const _values = _Sequence._0;
            const _separator = _Sequence._1;
            const _x = _Sequence._2;
            if (_x === false) {
              separator = _separator;
              values = _values;
              break _L$2;
            } else {
              value = _bind$2;
              break _L;
            }
          } else {
            value = _bind$2;
            break _L;
          }
        }
        return new _M0DTPC16result6ResultGRP217zhengxin_2dcoding4scss10ExpressionRP217zhengxin_2dcoding4scss10ParseErrorE2Ok(new _M0DTP217zhengxin_2dcoding4scss10Expression8Sequence(values, separator, true));
      }
      return new _M0DTPC16result6ResultGRP217zhengxin_2dcoding4scss10ExpressionRP217zhengxin_2dcoding4scss10ParseErrorE2Ok(new _M0DTP217zhengxin_2dcoding4scss10Expression8Sequence([value], " ", true));
    } else {
      return new _M0DTPC16result6ResultGRP217zhengxin_2dcoding4scss10ExpressionRP217zhengxin_2dcoding4scss10ParseErrorE2Ok(_M0MPC15array5Array2atGRPB4JsonE(comma, 0));
    }
  }
}
function _M0MP217zhengxin_2dcoding4scss16ExpressionParser6binary(self, minimum) {
  const _bind$2 = _M0MP217zhengxin_2dcoding4scss16ExpressionParser4atom(self);
  let _tmp;
  if (_bind$2.$tag === 1) {
    const _ok = _bind$2;
    _tmp = _ok._0;
  } else {
    return _bind$2;
  }
  const left = new _M0TPB8MutLocalGRP217zhengxin_2dcoding4scss10ExpressionE(_tmp);
  while (true) {
    const before = self.pos;
    const gap = _M0MP217zhengxin_2dcoding4scss16ExpressionParser5space(self);
    const c = _M0MP217zhengxin_2dcoding4scss16ExpressionParser12peek_2einner(self, 0);
    const pair = `${_M0IPC14char4CharPB4Show10to__string(c)}${_M0IPC14char4CharPB4Show10to__string(_M0MP217zhengxin_2dcoding4scss16ExpressionParser12peek_2einner(self, 1))}`;
    let operator;
    let precedence;
    let length;
    _L: {
      if (_M0MP217zhengxin_2dcoding4scss16ExpressionParser4word(self, "or")) {
        operator = "or";
        precedence = 1;
        length = 2;
        break _L;
      } else {
        if (_M0MP217zhengxin_2dcoding4scss16ExpressionParser4word(self, "and")) {
          operator = "and";
          precedence = 2;
          length = 3;
          break _L;
        } else {
          if (pair === "==" || pair === "!=") {
            operator = pair;
            precedence = 3;
            length = 2;
            break _L;
          } else {
            if (pair === ">=" || pair === "<=") {
              operator = pair;
              precedence = 4;
              length = 2;
              break _L;
            } else {
              if (c === 62 || c === 60) {
                operator = _M0IPC14char4CharPB4Show10to__string(c);
                precedence = 4;
                length = 1;
                break _L;
              } else {
                if (c === 43 || c === 45) {
                  if (c === 45 && (gap && !_M0FP217zhengxin_2dcoding4scss10whitespace(_M0MP217zhengxin_2dcoding4scss16ExpressionParser12peek_2einner(self, 1)))) {
                    operator = "";
                    precedence = 0;
                    length = 0;
                    break _L;
                  } else {
                    operator = _M0IPC14char4CharPB4Show10to__string(c);
                    precedence = 5;
                    length = 1;
                    break _L;
                  }
                } else {
                  if (c === 42 || (c === 47 || c === 37)) {
                    operator = _M0IPC14char4CharPB4Show10to__string(c);
                    precedence = 6;
                    length = 1;
                    break _L;
                  } else {
                    operator = "";
                    precedence = 0;
                    length = 0;
                    break _L;
                  }
                }
              }
            }
          }
        }
      }
    }
    if (precedence === 0 || precedence < minimum) {
      self.pos = before;
      break;
    }
    self.pos = self.pos + length | 0;
    _M0MP217zhengxin_2dcoding4scss16ExpressionParser5space(self);
    const _bind$3 = _M0MP217zhengxin_2dcoding4scss16ExpressionParser6binary(self, precedence + 1 | 0);
    let right;
    if (_bind$3.$tag === 1) {
      const _ok = _bind$3;
      right = _ok._0;
    } else {
      return _bind$3;
    }
    left.val = new _M0DTP217zhengxin_2dcoding4scss10Expression6Binary(operator, left.val, right);
    continue;
  }
  return new _M0DTPC16result6ResultGRP217zhengxin_2dcoding4scss10ExpressionRP217zhengxin_2dcoding4scss10ParseErrorE2Ok(left.val);
}
function _M0MP217zhengxin_2dcoding4scss16ExpressionParser4atom(self) {
  self.depth = self.depth + 1 | 0;
  if (self.depth > 64) {
    return new _M0DTPC16result6ResultGRP217zhengxin_2dcoding4scss10ExpressionRP217zhengxin_2dcoding4scss10ParseErrorE3Err(new _M0DTPC15error5Error47zhengxin_2dcoding_2fscss_2eParseError_2eInvalid("expression nesting limit"));
  }
  const _bind$2 = _M0MP217zhengxin_2dcoding4scss16ExpressionParser11atom__inner(self);
  let result;
  if (_bind$2.$tag === 1) {
    const _ok = _bind$2;
    result = _ok._0;
  } else {
    return _bind$2;
  }
  self.depth = self.depth - 1 | 0;
  return new _M0DTPC16result6ResultGRP217zhengxin_2dcoding4scss10ExpressionRP217zhengxin_2dcoding4scss10ParseErrorE2Ok(result);
}
function _M0MP217zhengxin_2dcoding4scss16ExpressionParser11atom__inner(self) {
  _M0MP217zhengxin_2dcoding4scss16ExpressionParser5space(self);
  const c = _M0MP217zhengxin_2dcoding4scss16ExpressionParser12peek_2einner(self, 0);
  if (c === 0) {
    return new _M0DTPC16result6ResultGRP217zhengxin_2dcoding4scss10ExpressionRP217zhengxin_2dcoding4scss10ParseErrorE3Err(new _M0DTPC15error5Error47zhengxin_2dcoding_2fscss_2eParseError_2eInvalid("expected expression"));
  }
  if (_M0MP217zhengxin_2dcoding4scss16ExpressionParser4word(self, "not")) {
    self.pos = self.pos + 3 | 0;
    const _bind$2 = _M0MP217zhengxin_2dcoding4scss16ExpressionParser4atom(self);
    let _tmp;
    if (_bind$2.$tag === 1) {
      const _ok = _bind$2;
      _tmp = _ok._0;
    } else {
      return _bind$2;
    }
    return new _M0DTPC16result6ResultGRP217zhengxin_2dcoding4scss10ExpressionRP217zhengxin_2dcoding4scss10ParseErrorE2Ok(new _M0DTP217zhengxin_2dcoding4scss10Expression5Unary("not", _tmp));
  }
  if (c === 43 || c === 45 && (_M0FP217zhengxin_2dcoding4scss5digit(_M0MP217zhengxin_2dcoding4scss16ExpressionParser12peek_2einner(self, 1)) || (_M0MP217zhengxin_2dcoding4scss16ExpressionParser12peek_2einner(self, 1) === 36 || (_M0MP217zhengxin_2dcoding4scss16ExpressionParser12peek_2einner(self, 1) === 40 || _M0MP217zhengxin_2dcoding4scss16ExpressionParser12peek_2einner(self, 1) === 46)))) {
    self.pos = self.pos + 1 | 0;
    const _bind$2 = _M0MP217zhengxin_2dcoding4scss16ExpressionParser4atom(self);
    let _tmp;
    if (_bind$2.$tag === 1) {
      const _ok = _bind$2;
      _tmp = _ok._0;
    } else {
      return _bind$2;
    }
    return new _M0DTPC16result6ResultGRP217zhengxin_2dcoding4scss10ExpressionRP217zhengxin_2dcoding4scss10ParseErrorE2Ok(new _M0DTP217zhengxin_2dcoding4scss10Expression5Unary(_M0IPC14char4CharPB4Show10to__string(c), _tmp));
  }
  if (c === 36) {
    self.pos = self.pos + 1 | 0;
    const start = self.pos;
    while (true) {
      if (_M0FP217zhengxin_2dcoding4scss10name__char(_M0MP217zhengxin_2dcoding4scss16ExpressionParser12peek_2einner(self, 0))) {
        self.pos = self.pos + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    if (start === self.pos) {
      return new _M0DTPC16result6ResultGRP217zhengxin_2dcoding4scss10ExpressionRP217zhengxin_2dcoding4scss10ParseErrorE3Err(new _M0DTPC15error5Error47zhengxin_2dcoding_2fscss_2eParseError_2eInvalid("invalid variable"));
    }
    return new _M0DTPC16result6ResultGRP217zhengxin_2dcoding4scss10ExpressionRP217zhengxin_2dcoding4scss10ParseErrorE2Ok(new _M0DTP217zhengxin_2dcoding4scss10Expression8Variable(_M0FP217zhengxin_2dcoding4scss10identifier(_M0MPC16string6String11from__array(_M0MPC15array5Array12view_2einnerGcE(self.chars, start, self.pos)))));
  }
  if (c === 34 || c === 39) {
    self.pos = self.pos + 1 | 0;
    const parts = [];
    const text = new _M0TPB8MutLocalGRPB13StringBuilderE(_M0MPB13StringBuilder21StringBuilder_2einner(0));
    while (true) {
      if (_M0MP217zhengxin_2dcoding4scss16ExpressionParser12peek_2einner(self, 0) !== c) {
        if (_M0MP217zhengxin_2dcoding4scss16ExpressionParser12peek_2einner(self, 0) === 0) {
          return new _M0DTPC16result6ResultGRP217zhengxin_2dcoding4scss10ExpressionRP217zhengxin_2dcoding4scss10ParseErrorE3Err(new _M0DTPC15error5Error47zhengxin_2dcoding_2fscss_2eParseError_2eInvalid("unterminated string"));
        }
        if (_M0MP217zhengxin_2dcoding4scss16ExpressionParser12peek_2einner(self, 0) === 35 && _M0MP217zhengxin_2dcoding4scss16ExpressionParser12peek_2einner(self, 1) === 123) {
          _M0MPC15array5Array4pushGRPC14json10WriteFrameE(parts, new _M0DTP217zhengxin_2dcoding4scss10Expression7Literal(new _M0DTP217zhengxin_2dcoding4scss9SassValue4Text(_M0MPB13StringBuilder10to__string(text.val), false)));
          text.val = _M0MPB13StringBuilder21StringBuilder_2einner(0);
          const _bind$2 = _M0MP217zhengxin_2dcoding4scss16ExpressionParser13interpolation(self);
          let _tmp;
          if (_bind$2.$tag === 1) {
            const _ok = _bind$2;
            _tmp = _ok._0;
          } else {
            return _bind$2;
          }
          _M0MPC15array5Array4pushGRPC14json10WriteFrameE(parts, _tmp);
        } else {
          if (_M0MP217zhengxin_2dcoding4scss16ExpressionParser12peek_2einner(self, 0) === 92) {
            self.pos = self.pos + 1 | 0;
            const next = _M0MP217zhengxin_2dcoding4scss16ExpressionParser12peek_2einner(self, 0);
            if (next === 0) {
              return new _M0DTPC16result6ResultGRP217zhengxin_2dcoding4scss10ExpressionRP217zhengxin_2dcoding4scss10ParseErrorE3Err(new _M0DTPC15error5Error47zhengxin_2dcoding_2fscss_2eParseError_2eInvalid("unterminated escape"));
            }
            _M0IPB13StringBuilderPB6Logger11write__char(text.val, next);
            self.pos = self.pos + 1 | 0;
          } else {
            _M0IPB13StringBuilderPB6Logger11write__char(text.val, _M0MP217zhengxin_2dcoding4scss16ExpressionParser12peek_2einner(self, 0));
            self.pos = self.pos + 1 | 0;
          }
        }
        continue;
      } else {
        break;
      }
    }
    self.pos = self.pos + 1 | 0;
    _M0MPC15array5Array4pushGRPC14json10WriteFrameE(parts, new _M0DTP217zhengxin_2dcoding4scss10Expression7Literal(new _M0DTP217zhengxin_2dcoding4scss9SassValue4Text(_M0MPB13StringBuilder10to__string(text.val), false)));
    return new _M0DTPC16result6ResultGRP217zhengxin_2dcoding4scss10ExpressionRP217zhengxin_2dcoding4scss10ParseErrorE2Ok(new _M0DTP217zhengxin_2dcoding4scss10Expression12Interpolated(parts, true));
  }
  if (c === 40 || c === 91) {
    self.pos = self.pos + 1 | 0;
    _M0MP217zhengxin_2dcoding4scss16ExpressionParser5space(self);
    const closing = c === 40 ? 41 : 93;
    if (_M0MP217zhengxin_2dcoding4scss16ExpressionParser12peek_2einner(self, 0) === closing) {
      self.pos = self.pos + 1 | 0;
      return new _M0DTPC16result6ResultGRP217zhengxin_2dcoding4scss10ExpressionRP217zhengxin_2dcoding4scss10ParseErrorE2Ok(new _M0DTP217zhengxin_2dcoding4scss10Expression7Literal(new _M0DTP217zhengxin_2dcoding4scss9SassValue4List([], ",", c === 91)));
    }
    const _bind$2 = _M0MP217zhengxin_2dcoding4scss16ExpressionParser8sequence(self, c === 91);
    let first;
    if (_bind$2.$tag === 1) {
      const _ok = _bind$2;
      first = _ok._0;
    } else {
      return _bind$2;
    }
    if (c === 40 && _M0MP217zhengxin_2dcoding4scss16ExpressionParser12peek_2einner(self, 0) === 58) {
      const pairs = [];
      const key = new _M0TPB8MutLocalGRP217zhengxin_2dcoding4scss10ExpressionE(first);
      while (true) {
        self.pos = self.pos + 1 | 0;
        _M0MP217zhengxin_2dcoding4scss16ExpressionParser5space(self);
        const _bind$3 = _M0MP217zhengxin_2dcoding4scss16ExpressionParser8argument(self);
        let value;
        if (_bind$3.$tag === 1) {
          const _ok = _bind$3;
          value = _ok._0;
        } else {
          return _bind$3;
        }
        _M0MPC15array5Array4pushGRPC14json10WriteFrameE(pairs, { _0: key.val, _1: value });
        _M0MP217zhengxin_2dcoding4scss16ExpressionParser5space(self);
        if (_M0MP217zhengxin_2dcoding4scss16ExpressionParser12peek_2einner(self, 0) !== 44) {
          break;
        }
        self.pos = self.pos + 1 | 0;
        _M0MP217zhengxin_2dcoding4scss16ExpressionParser5space(self);
        if (_M0MP217zhengxin_2dcoding4scss16ExpressionParser12peek_2einner(self, 0) === 41) {
          break;
        }
        const _bind$4 = _M0MP217zhengxin_2dcoding4scss16ExpressionParser8argument(self);
        let _tmp;
        if (_bind$4.$tag === 1) {
          const _ok = _bind$4;
          _tmp = _ok._0;
        } else {
          return _bind$4;
        }
        key.val = _tmp;
        _M0MP217zhengxin_2dcoding4scss16ExpressionParser5space(self);
        if (_M0MP217zhengxin_2dcoding4scss16ExpressionParser12peek_2einner(self, 0) !== 58) {
          return new _M0DTPC16result6ResultGRP217zhengxin_2dcoding4scss10ExpressionRP217zhengxin_2dcoding4scss10ParseErrorE3Err(new _M0DTPC15error5Error47zhengxin_2dcoding_2fscss_2eParseError_2eInvalid("expected map colon"));
        }
        continue;
      }
      if (_M0MP217zhengxin_2dcoding4scss16ExpressionParser12peek_2einner(self, 0) !== 41) {
        return new _M0DTPC16result6ResultGRP217zhengxin_2dcoding4scss10ExpressionRP217zhengxin_2dcoding4scss10ParseErrorE3Err(new _M0DTPC15error5Error47zhengxin_2dcoding_2fscss_2eParseError_2eInvalid("unterminated map"));
      }
      self.pos = self.pos + 1 | 0;
      return new _M0DTPC16result6ResultGRP217zhengxin_2dcoding4scss10ExpressionRP217zhengxin_2dcoding4scss10ParseErrorE2Ok(new _M0DTP217zhengxin_2dcoding4scss10Expression7Mapping(pairs));
    }
    if (_M0MP217zhengxin_2dcoding4scss16ExpressionParser12peek_2einner(self, 0) !== closing) {
      return new _M0DTPC16result6ResultGRP217zhengxin_2dcoding4scss10ExpressionRP217zhengxin_2dcoding4scss10ParseErrorE3Err(new _M0DTPC15error5Error47zhengxin_2dcoding_2fscss_2eParseError_2eInvalid("unterminated group"));
    }
    self.pos = self.pos + 1 | 0;
    return new _M0DTPC16result6ResultGRP217zhengxin_2dcoding4scss10ExpressionRP217zhengxin_2dcoding4scss10ParseErrorE2Ok(c === 40 ? new _M0DTP217zhengxin_2dcoding4scss10Expression5Group(first) : first);
  }
  if (_M0FP217zhengxin_2dcoding4scss5digit(c) || c === 46 && _M0FP217zhengxin_2dcoding4scss5digit(_M0MP217zhengxin_2dcoding4scss16ExpressionParser12peek_2einner(self, 1))) {
    const start = self.pos;
    while (true) {
      if (_M0FP217zhengxin_2dcoding4scss5digit(_M0MP217zhengxin_2dcoding4scss16ExpressionParser12peek_2einner(self, 0))) {
        self.pos = self.pos + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    if (_M0MP217zhengxin_2dcoding4scss16ExpressionParser12peek_2einner(self, 0) === 46 && _M0FP217zhengxin_2dcoding4scss5digit(_M0MP217zhengxin_2dcoding4scss16ExpressionParser12peek_2einner(self, 1))) {
      self.pos = self.pos + 1 | 0;
      while (true) {
        if (_M0FP217zhengxin_2dcoding4scss5digit(_M0MP217zhengxin_2dcoding4scss16ExpressionParser12peek_2einner(self, 0))) {
          self.pos = self.pos + 1 | 0;
          continue;
        } else {
          break;
        }
      }
    }
    if (_M0MP217zhengxin_2dcoding4scss16ExpressionParser12peek_2einner(self, 0) === 101 || _M0MP217zhengxin_2dcoding4scss16ExpressionParser12peek_2einner(self, 0) === 69) {
      const old = self.pos;
      self.pos = self.pos + 1 | 0;
      if (_M0MP217zhengxin_2dcoding4scss16ExpressionParser12peek_2einner(self, 0) === 43 || _M0MP217zhengxin_2dcoding4scss16ExpressionParser12peek_2einner(self, 0) === 45) {
        self.pos = self.pos + 1 | 0;
      }
      if (!_M0FP217zhengxin_2dcoding4scss5digit(_M0MP217zhengxin_2dcoding4scss16ExpressionParser12peek_2einner(self, 0))) {
        self.pos = old;
      } else {
        while (true) {
          if (_M0FP217zhengxin_2dcoding4scss5digit(_M0MP217zhengxin_2dcoding4scss16ExpressionParser12peek_2einner(self, 0))) {
            self.pos = self.pos + 1 | 0;
            continue;
          } else {
            break;
          }
        }
      }
    }
    let value;
    let _try_err;
    _L: {
      _L$2: {
        const _bind$2 = _M0MPC16string6String11from__array(_M0MPC15array5Array12view_2einnerGcE(self.chars, start, self.pos));
        const _bind$3 = _M0FPC28internal7strconv13parse__double(new _M0TPC16string10StringView(_bind$2, 0, _bind$2.length));
        if (_bind$3.$tag === 1) {
          const _ok = _bind$3;
          value = _ok._0;
        } else {
          const _err = _bind$3;
          _try_err = _err._0;
          break _L$2;
        }
        break _L;
      }
      return new _M0DTPC16result6ResultGRP217zhengxin_2dcoding4scss10ExpressionRP217zhengxin_2dcoding4scss10ParseErrorE3Err(new _M0DTPC15error5Error47zhengxin_2dcoding_2fscss_2eParseError_2eInvalid("invalid number"));
    }
    const unit_start = self.pos;
    if (_M0MP217zhengxin_2dcoding4scss16ExpressionParser12peek_2einner(self, 0) === 37) {
      self.pos = self.pos + 1 | 0;
    } else {
      while (true) {
        if (_M0FP217zhengxin_2dcoding4scss10name__char(_M0MP217zhengxin_2dcoding4scss16ExpressionParser12peek_2einner(self, 0)) && (!_M0FP217zhengxin_2dcoding4scss5digit(_M0MP217zhengxin_2dcoding4scss16ExpressionParser12peek_2einner(self, 0)) && _M0MP217zhengxin_2dcoding4scss16ExpressionParser12peek_2einner(self, 0) !== 45)) {
          self.pos = self.pos + 1 | 0;
          continue;
        } else {
          break;
        }
      }
    }
    return new _M0DTPC16result6ResultGRP217zhengxin_2dcoding4scss10ExpressionRP217zhengxin_2dcoding4scss10ParseErrorE2Ok(new _M0DTP217zhengxin_2dcoding4scss10Expression7Literal(_M0FP217zhengxin_2dcoding4scss15numeric_2einner(value, _M0MPC16string6String11from__array(_M0MPC15array5Array12view_2einnerGcE(self.chars, unit_start, self.pos)))));
  }
  const start = self.pos;
  const parts = [];
  const text = new _M0TPB8MutLocalGRPB13StringBuilderE(_M0MPB13StringBuilder21StringBuilder_2einner(0));
  const interpolated = new _M0TPB8MutLocalGbE(false);
  while (true) {
    const x = _M0MP217zhengxin_2dcoding4scss16ExpressionParser12peek_2einner(self, 0);
    if (x === 35 && _M0MP217zhengxin_2dcoding4scss16ExpressionParser12peek_2einner(self, 1) === 123) {
      _M0MPC15array5Array4pushGRPC14json10WriteFrameE(parts, new _M0DTP217zhengxin_2dcoding4scss10Expression7Literal(new _M0DTP217zhengxin_2dcoding4scss9SassValue4Text(_M0MPB13StringBuilder10to__string(text.val), false)));
      text.val = _M0MPB13StringBuilder21StringBuilder_2einner(0);
      const _bind$2 = _M0MP217zhengxin_2dcoding4scss16ExpressionParser13interpolation(self);
      let _tmp;
      if (_bind$2.$tag === 1) {
        const _ok = _bind$2;
        _tmp = _ok._0;
      } else {
        return _bind$2;
      }
      _M0MPC15array5Array4pushGRPC14json10WriteFrameE(parts, _tmp);
      interpolated.val = true;
    } else {
      if (_M0FP217zhengxin_2dcoding4scss10name__char(x) || (_M0MPC15array5Array8containsGcE([35, 37, 33], x) || (x === 46 && _M0MP217zhengxin_2dcoding4scss16ExpressionParser12peek_2einner(self, 1) !== 46 || x === 92 && _M0MP217zhengxin_2dcoding4scss16ExpressionParser12peek_2einner(self, 1) !== 0))) {
        _M0IPB13StringBuilderPB6Logger11write__char(text.val, x);
        self.pos = self.pos + 1 | 0;
        if (x === 92) {
          _M0IPB13StringBuilderPB6Logger11write__char(text.val, _M0MP217zhengxin_2dcoding4scss16ExpressionParser12peek_2einner(self, 0));
          self.pos = self.pos + 1 | 0;
        }
      } else {
        break;
      }
    }
    continue;
  }
  if (self.pos === start) {
    return new _M0DTPC16result6ResultGRP217zhengxin_2dcoding4scss10ExpressionRP217zhengxin_2dcoding4scss10ParseErrorE3Err(new _M0DTPC15error5Error47zhengxin_2dcoding_2fscss_2eParseError_2eInvalid("unexpected expression character"));
  }
  _M0MPC15array5Array4pushGRPC14json10WriteFrameE(parts, new _M0DTP217zhengxin_2dcoding4scss10Expression7Literal(new _M0DTP217zhengxin_2dcoding4scss9SassValue4Text(_M0MPB13StringBuilder10to__string(text.val), false)));
  if (interpolated.val) {
    return new _M0DTPC16result6ResultGRP217zhengxin_2dcoding4scss10ExpressionRP217zhengxin_2dcoding4scss10ParseErrorE2Ok(new _M0DTP217zhengxin_2dcoding4scss10Expression12Interpolated(parts, false));
  }
  const name = _M0MPB13StringBuilder10to__string(text.val);
  let _tmp;
  const _bind$2 = ".";
  if (_M0MPC16string6String11has__suffix(name, new _M0TPC16string10StringView(_bind$2, 0, _bind$2.length))) {
    _tmp = _M0MP217zhengxin_2dcoding4scss16ExpressionParser12peek_2einner(self, 0) === 36;
  } else {
    _tmp = false;
  }
  if (_tmp) {
    self.pos = self.pos + 1 | 0;
    const start$2 = self.pos;
    while (true) {
      if (_M0FP217zhengxin_2dcoding4scss10name__char(_M0MP217zhengxin_2dcoding4scss16ExpressionParser12peek_2einner(self, 0))) {
        self.pos = self.pos + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    if (start$2 === self.pos) {
      return new _M0DTPC16result6ResultGRP217zhengxin_2dcoding4scss10ExpressionRP217zhengxin_2dcoding4scss10ParseErrorE3Err(new _M0DTPC15error5Error47zhengxin_2dcoding_2fscss_2eParseError_2eInvalid("invalid module variable"));
    }
    return new _M0DTPC16result6ResultGRP217zhengxin_2dcoding4scss10ExpressionRP217zhengxin_2dcoding4scss10ParseErrorE2Ok(new _M0DTP217zhengxin_2dcoding4scss10Expression8Variable(_M0FP217zhengxin_2dcoding4scss15reference__name(`${name}${_M0MPC16string6String11from__array(_M0MPC15array5Array12view_2einnerGcE(self.chars, start$2, self.pos))}`)));
  }
  if (_M0MP217zhengxin_2dcoding4scss16ExpressionParser12peek_2einner(self, 0) === 40) {
    if (_M0MPC15array5Array8containsGsE(["url", "calc", "clamp", "element", "expression"], name)) {
      self.pos = self.pos + 1 | 0;
      const start$2 = self.pos;
      const depth = new _M0TPB8MutLocalGiE(1);
      const quote = new _M0TPB8MutLocalGcE(0);
      while (true) {
        if (self.pos < self.chars.length && depth.val > 0) {
          const x = _M0MP217zhengxin_2dcoding4scss16ExpressionParser12peek_2einner(self, 0);
          self.pos = self.pos + 1 | 0;
          if (x === 92) {
            self.pos = self.pos + 1 | 0;
            continue;
          }
          if (quote.val !== 0) {
            if (x === quote.val) {
              quote.val = 0;
            }
          } else {
            if (x === 34 || x === 39) {
              quote.val = x;
            } else {
              if (x === 40) {
                depth.val = depth.val + 1 | 0;
              } else {
                if (x === 41) {
                  depth.val = depth.val - 1 | 0;
                }
              }
            }
          }
          continue;
        } else {
          break;
        }
      }
      if (depth.val !== 0) {
        return new _M0DTPC16result6ResultGRP217zhengxin_2dcoding4scss10ExpressionRP217zhengxin_2dcoding4scss10ParseErrorE3Err(new _M0DTPC15error5Error47zhengxin_2dcoding_2fscss_2eParseError_2eInvalid("unterminated CSS function"));
      }
      return new _M0DTPC16result6ResultGRP217zhengxin_2dcoding4scss10ExpressionRP217zhengxin_2dcoding4scss10ParseErrorE2Ok(new _M0DTP217zhengxin_2dcoding4scss10Expression7RawCall(name, _M0MPC16string6String11from__array(_M0MPC15array5Array12view_2einnerGcE(self.chars, start$2, self.pos - 1 | 0))));
    }
    self.pos = self.pos + 1 | 0;
    _M0MP217zhengxin_2dcoding4scss16ExpressionParser5space(self);
    const args = [];
    if (_M0MP217zhengxin_2dcoding4scss16ExpressionParser12peek_2einner(self, 0) !== 41) {
      while (true) {
        const _bind$3 = _M0MP217zhengxin_2dcoding4scss16ExpressionParser8argument(self);
        let _tmp$2;
        if (_bind$3.$tag === 1) {
          const _ok = _bind$3;
          _tmp$2 = _ok._0;
        } else {
          return _bind$3;
        }
        const value = new _M0TPB8MutLocalGRP217zhengxin_2dcoding4scss10ExpressionE(_tmp$2);
        const key = new _M0TPB8MutLocalGOsE(undefined);
        _M0MP217zhengxin_2dcoding4scss16ExpressionParser5space(self);
        if (_M0MP217zhengxin_2dcoding4scss16ExpressionParser12peek_2einner(self, 0) === 58) {
          let variable;
          _L: {
            const _bind$4 = value.val;
            if (_bind$4.$tag === 1) {
              const _Variable = _bind$4;
              const _variable = _Variable._0;
              variable = _variable;
              break _L;
            } else {
              return new _M0DTPC16result6ResultGRP217zhengxin_2dcoding4scss10ExpressionRP217zhengxin_2dcoding4scss10ParseErrorE3Err(new _M0DTPC15error5Error47zhengxin_2dcoding_2fscss_2eParseError_2eInvalid("keyword argument requires variable"));
            }
          }
          key.val = variable;
          self.pos = self.pos + 1 | 0;
          _M0MP217zhengxin_2dcoding4scss16ExpressionParser5space(self);
          const _bind$4 = _M0MP217zhengxin_2dcoding4scss16ExpressionParser8argument(self);
          let _tmp$3;
          if (_bind$4.$tag === 1) {
            const _ok = _bind$4;
            _tmp$3 = _ok._0;
          } else {
            return _bind$4;
          }
          value.val = _tmp$3;
          _M0MP217zhengxin_2dcoding4scss16ExpressionParser5space(self);
        }
        const spread = _M0MP217zhengxin_2dcoding4scss16ExpressionParser12peek_2einner(self, 0) === 46 && (_M0MP217zhengxin_2dcoding4scss16ExpressionParser12peek_2einner(self, 1) === 46 && _M0MP217zhengxin_2dcoding4scss16ExpressionParser12peek_2einner(self, 2) === 46);
        if (spread) {
          self.pos = self.pos + 3 | 0;
          _M0MP217zhengxin_2dcoding4scss16ExpressionParser5space(self);
        }
        _M0MPC15array5Array4pushGRPC14json10WriteFrameE(args, { _0: key.val, _1: value.val, _2: spread });
        if (_M0MP217zhengxin_2dcoding4scss16ExpressionParser12peek_2einner(self, 0) !== 44) {
          break;
        }
        self.pos = self.pos + 1 | 0;
        _M0MP217zhengxin_2dcoding4scss16ExpressionParser5space(self);
        if (_M0MP217zhengxin_2dcoding4scss16ExpressionParser12peek_2einner(self, 0) === 41) {
          break;
        }
        if (args.length > 4096) {
          return new _M0DTPC16result6ResultGRP217zhengxin_2dcoding4scss10ExpressionRP217zhengxin_2dcoding4scss10ParseErrorE3Err(new _M0DTPC15error5Error47zhengxin_2dcoding_2fscss_2eParseError_2eInvalid("argument limit"));
        }
        continue;
      }
    }
    if (_M0MP217zhengxin_2dcoding4scss16ExpressionParser12peek_2einner(self, 0) !== 41) {
      return new _M0DTPC16result6ResultGRP217zhengxin_2dcoding4scss10ExpressionRP217zhengxin_2dcoding4scss10ParseErrorE3Err(new _M0DTPC15error5Error47zhengxin_2dcoding_2fscss_2eParseError_2eInvalid("unterminated function"));
    }
    self.pos = self.pos + 1 | 0;
    return new _M0DTPC16result6ResultGRP217zhengxin_2dcoding4scss10ExpressionRP217zhengxin_2dcoding4scss10ParseErrorE2Ok(new _M0DTP217zhengxin_2dcoding4scss10Expression4Call(_M0FP217zhengxin_2dcoding4scss15reference__name(name), args));
  }
  let _tmp$2;
  switch (name) {
    case "true": {
      _tmp$2 = new _M0DTP217zhengxin_2dcoding4scss10Expression7Literal(new _M0DTP217zhengxin_2dcoding4scss9SassValue7Boolean(true));
      break;
    }
    case "false": {
      _tmp$2 = new _M0DTP217zhengxin_2dcoding4scss10Expression7Literal(new _M0DTP217zhengxin_2dcoding4scss9SassValue7Boolean(false));
      break;
    }
    case "null": {
      _tmp$2 = new _M0DTP217zhengxin_2dcoding4scss10Expression7Literal(_M0DTP217zhengxin_2dcoding4scss9SassValue4Null__);
      break;
    }
    default: {
      const _bind$3 = _M0FP217zhengxin_2dcoding4scss14color__literal(name);
      let _tmp$3;
      if (_bind$3.$tag === 1) {
        const _ok = _bind$3;
        _tmp$3 = _ok._0;
      } else {
        return _bind$3;
      }
      _tmp$2 = new _M0DTP217zhengxin_2dcoding4scss10Expression7Literal(_M0MPC16option6Option10unwrap__orGRP217zhengxin_2dcoding4scss9SassValueE(_tmp$3, new _M0DTP217zhengxin_2dcoding4scss9SassValue4Text(name, false)));
    }
  }
  return new _M0DTPC16result6ResultGRP217zhengxin_2dcoding4scss10ExpressionRP217zhengxin_2dcoding4scss10ParseErrorE2Ok(_tmp$2);
}
function _M0MP217zhengxin_2dcoding4scss16ExpressionParser8argument(self) {
  const _bind$2 = _M0MP217zhengxin_2dcoding4scss16ExpressionParser6binary(self, 0);
  let _tmp;
  if (_bind$2.$tag === 1) {
    const _ok = _bind$2;
    _tmp = _ok._0;
  } else {
    return _bind$2;
  }
  const values = [_tmp];
  while (true) {
    const before = self.pos;
    if (!_M0MP217zhengxin_2dcoding4scss16ExpressionParser5space(self) || (_M0MPC15array5Array8containsGcE([44, 41, 93, 58, 0], _M0MP217zhengxin_2dcoding4scss16ExpressionParser12peek_2einner(self, 0)) || _M0MP217zhengxin_2dcoding4scss16ExpressionParser12peek_2einner(self, 0) === 46 && _M0MP217zhengxin_2dcoding4scss16ExpressionParser12peek_2einner(self, 1) === 46)) {
      self.pos = before;
      break;
    }
    const _bind$3 = _M0MP217zhengxin_2dcoding4scss16ExpressionParser6binary(self, 0);
    let _tmp$2;
    if (_bind$3.$tag === 1) {
      const _ok = _bind$3;
      _tmp$2 = _ok._0;
    } else {
      return _bind$3;
    }
    _M0MPC15array5Array4pushGRPC14json10WriteFrameE(values, _tmp$2);
    if (values.length > 4096) {
      return new _M0DTPC16result6ResultGRP217zhengxin_2dcoding4scss10ExpressionRP217zhengxin_2dcoding4scss10ParseErrorE3Err(new _M0DTPC15error5Error47zhengxin_2dcoding_2fscss_2eParseError_2eInvalid("argument length limit"));
    }
    continue;
  }
  return new _M0DTPC16result6ResultGRP217zhengxin_2dcoding4scss10ExpressionRP217zhengxin_2dcoding4scss10ParseErrorE2Ok(values.length === 1 ? _M0MPC15array5Array2atGRPB4JsonE(values, 0) : new _M0DTP217zhengxin_2dcoding4scss10Expression8Sequence(values, " ", false));
}
function _M0MP217zhengxin_2dcoding4scss16ExpressionParser13interpolation(self) {
  self.pos = self.pos + 2 | 0;
  _M0MP217zhengxin_2dcoding4scss16ExpressionParser5space(self);
  const _bind$2 = _M0MP217zhengxin_2dcoding4scss16ExpressionParser8sequence(self, false);
  let value;
  if (_bind$2.$tag === 1) {
    const _ok = _bind$2;
    value = _ok._0;
  } else {
    return _bind$2;
  }
  _M0MP217zhengxin_2dcoding4scss16ExpressionParser5space(self);
  if (_M0MP217zhengxin_2dcoding4scss16ExpressionParser12peek_2einner(self, 0) !== 125) {
    return new _M0DTPC16result6ResultGRP217zhengxin_2dcoding4scss10ExpressionRP217zhengxin_2dcoding4scss10ParseErrorE3Err(new _M0DTPC15error5Error47zhengxin_2dcoding_2fscss_2eParseError_2eInvalid("unterminated interpolation"));
  }
  self.pos = self.pos + 1 | 0;
  return new _M0DTPC16result6ResultGRP217zhengxin_2dcoding4scss10ExpressionRP217zhengxin_2dcoding4scss10ParseErrorE2Ok(value);
}
function _M0FP217zhengxin_2dcoding4scss17parse__expression(text) {
  const parser = new _M0TP217zhengxin_2dcoding4scss16ExpressionParser(_M0MPC16string6String9to__array(text), 0, 0);
  _M0MP217zhengxin_2dcoding4scss16ExpressionParser5space(parser);
  if (_M0MP217zhengxin_2dcoding4scss16ExpressionParser12peek_2einner(parser, 0) === 0) {
    return new _M0DTPC16result6ResultGRP217zhengxin_2dcoding4scss10ExpressionRP217zhengxin_2dcoding4scss10ParseErrorE3Err(new _M0DTPC15error5Error47zhengxin_2dcoding_2fscss_2eParseError_2eInvalid("expected expression"));
  }
  const _bind$2 = _M0MP217zhengxin_2dcoding4scss16ExpressionParser8sequence(parser, false);
  let result;
  if (_bind$2.$tag === 1) {
    const _ok = _bind$2;
    result = _ok._0;
  } else {
    return _bind$2;
  }
  _M0MP217zhengxin_2dcoding4scss16ExpressionParser5space(parser);
  if (parser.pos !== parser.chars.length) {
    return new _M0DTPC16result6ResultGRP217zhengxin_2dcoding4scss10ExpressionRP217zhengxin_2dcoding4scss10ParseErrorE3Err(new _M0DTPC15error5Error47zhengxin_2dcoding_2fscss_2eParseError_2eInvalid("unexpected expression token"));
  }
  return new _M0DTPC16result6ResultGRP217zhengxin_2dcoding4scss10ExpressionRP217zhengxin_2dcoding4scss10ParseErrorE2Ok(result);
}
function _M0FP217zhengxin_2dcoding4scss22arithmetic__expression(value) {
  switch (value.$tag) {
    case 0: {
      return false;
    }
    case 8: {
      return false;
    }
    default: {
      return true;
    }
  }
}
function _M0FP217zhengxin_2dcoding4scss22color__call__arguments(args) {
  if (args.length === 1) {
    const _bind$2 = _M0MPC15array5Array2atGRPB4JsonE(args, 0)._0;
    if (_bind$2 === undefined) {
      if (!_M0MPC15array5Array2atGRPB4JsonE(args, 0)._2) {
        let values;
        _L: {
          _L$2: {
            const _bind$3 = _M0MPC15array5Array2atGRPB4JsonE(args, 0)._1;
            if (_bind$3.$tag === 4) {
              const _Sequence = _bind$3;
              const _values = _Sequence._0;
              const _x = _Sequence._1;
              if (_x === " ") {
                const _x$2 = _Sequence._2;
                if (_x$2 === false) {
                  values = _values;
                  break _L$2;
                }
              }
            }
            break _L;
          }
          const out = [];
          const _bind$3 = 0;
          const _bind$4 = values.length;
          let _tmp = _bind$3;
          while (true) {
            const i = _tmp;
            if (i < _bind$4) {
              _L$3: {
                _L$4: {
                  if (i === (values.length - 1 | 0)) {
                    _L$5: {
                      _L$6: {
                        let channel;
                        let alpha;
                        _L$7: {
                          const _bind$5 = _M0MPC15array5Array2atGRPB4JsonE(values, i);
                          if (_bind$5.$tag === 3) {
                            const _Binary = _bind$5;
                            const _x = _Binary._0;
                            if (_x === "/") {
                              const _channel = _Binary._1;
                              const _alpha = _Binary._2;
                              channel = _channel;
                              alpha = _alpha;
                              break _L$7;
                            } else {
                              break _L$6;
                            }
                          } else {
                            break _L$6;
                          }
                        }
                        _M0MPC15array5Array4pushGRPC14json10WriteFrameE(out, { _0: undefined, _1: channel, _2: false });
                        _M0MPC15array5Array4pushGRPC14json10WriteFrameE(out, { _0: undefined, _1: alpha, _2: false });
                        break _L$5;
                      }
                      break _L$4;
                    }
                  } else {
                    break _L$4;
                  }
                  break _L$3;
                }
                _M0MPC15array5Array4pushGRPC14json10WriteFrameE(out, { _0: undefined, _1: _M0MPC15array5Array2atGRPB4JsonE(values, i), _2: false });
              }
              _tmp = i + 1 | 0;
              continue;
            } else {
              break;
            }
          }
          return out;
        }
      }
    }
  }
  return args;
}
function _M0FP217zhengxin_2dcoding4scss22global__color__builtin(name) {
  return _M0MPC15array5Array8containsGsE(["rgb", "rgba", "hsl", "hsla", "red", "green", "blue", "alpha", "opacity", "hue", "saturation", "lightness", "mix", "lighten", "darken", "saturate", "desaturate", "adjust-hue", "complement", "grayscale", "invert", "opacify", "fade-in", "transparentize", "fade-out", "adjust-color", "change-color", "scale-color"], name);
}
function _M0FP217zhengxin_2dcoding4scss15global__builtin(name) {
  if (_M0FP217zhengxin_2dcoding4scss22global__color__builtin(name)) {
    return true;
  }
  return _M0MPC15array5Array8containsGsE(["abs", "ceil", "floor", "round", "percentage", "unit", "unitless", "comparable", "min", "max", "length", "nth", "set-nth", "index", "append", "join", "map-get", "map-has-key", "map-keys", "map-values", "map-merge", "map-remove", "quote", "unquote", "str-length", "to-upper-case", "to-lower-case", "str-slice", "str-index", "str-insert", "type-of", "inspect", "variable-exists", "global-variable-exists", "function-exists", "mixin-exists"], name);
}
function _M0MP217zhengxin_2dcoding4scss5Scope3new(parent) {
  const _bind$2 = [];
  const _tmp = _M0MPB3Map3MapGsRP217zhengxin_2dcoding4scss9SassValueE(new _M0TPB9ArrayViewGUsRP217zhengxin_2dcoding4scss9SassValueEE(_bind$2, 0, 0), undefined);
  const _bind$3 = [];
  const _tmp$2 = _M0MPB3Map3MapGsRP217zhengxin_2dcoding4scss5MixinE(new _M0TPB9ArrayViewGUsRP217zhengxin_2dcoding4scss5MixinEE(_bind$3, 0, 0), undefined);
  const _bind$4 = [];
  const _tmp$3 = _M0MPB3Map3MapGsRP217zhengxin_2dcoding4scss5MixinE(new _M0TPB9ArrayViewGUsRP217zhengxin_2dcoding4scss5MixinEE(_bind$4, 0, 0), undefined);
  const _bind$5 = [];
  const _tmp$4 = _M0MPB3Map3MapGssE(new _M0TPB9ArrayViewGUssEE(_bind$5, 0, 0), undefined);
  const _bind$6 = [];
  const _tmp$5 = _M0MPB3Map3MapGsRP217zhengxin_2dcoding4scss5ScopeE(new _M0TPB9ArrayViewGUsRP217zhengxin_2dcoding4scss5ScopeEE(_bind$6, 0, 0), undefined);
  const _tmp$6 = [];
  const _bind$7 = [];
  const _tmp$7 = _M0MPB3Map3MapGsURP217zhengxin_2dcoding4scss5ScopesEE(new _M0TPB9ArrayViewGUsURP217zhengxin_2dcoding4scss5ScopesEEE(_bind$7, 0, 0), undefined);
  const _bind$8 = [];
  const _tmp$8 = _M0MPB3Map3MapGsRP217zhengxin_2dcoding4scss5MixinE(new _M0TPB9ArrayViewGUsRP217zhengxin_2dcoding4scss5MixinEE(_bind$8, 0, 0), undefined);
  const _bind$9 = [];
  const _tmp$9 = _M0MPB3Map3MapGsRP217zhengxin_2dcoding4scss5MixinE(new _M0TPB9ArrayViewGUsRP217zhengxin_2dcoding4scss5MixinEE(_bind$9, 0, 0), undefined);
  const _bind$10 = [];
  const _tmp$10 = _M0MPB3Map3MapGsbE(new _M0TPB9ArrayViewGUsbEE(_bind$10, 0, 0), undefined);
  const _bind$11 = [];
  const _tmp$11 = _M0MPB3Map3MapGsRP217zhengxin_2dcoding4scss9SassValueE(new _M0TPB9ArrayViewGUsRP217zhengxin_2dcoding4scss9SassValueEE(_bind$11, 0, 0), undefined);
  let _tmp$12;
  let p;
  _L: {
    _L$2: {
      if (parent === undefined) {
        _tmp$12 = "";
      } else {
        const _Some = parent;
        const _p = _Some;
        p = _p;
        break _L$2;
      }
      break _L;
    }
    _tmp$12 = p.path;
  }
  const _tmp$13 = _tmp$12;
  let _tmp$14;
  let p$2;
  _L$2: {
    _L$3: {
      if (parent === undefined) {
        _tmp$14 = _M0MP217zhengxin_2dcoding4scss10Evaluation3new();
      } else {
        const _Some = parent;
        const _p = _Some;
        p$2 = _p;
        break _L$3;
      }
      break _L$2;
    }
    _tmp$14 = p$2.evaluation;
  }
  const _tmp$15 = _tmp$14;
  let _tmp$16;
  let p$3;
  _L$3: {
    _L$4: {
      if (parent === undefined) {
        _tmp$16 = undefined;
      } else {
        const _Some = parent;
        const _p = _Some;
        p$3 = _p;
        break _L$4;
      }
      break _L$3;
    }
    _tmp$16 = p$3.returned;
  }
  return new _M0TP217zhengxin_2dcoding4scss5Scope(_tmp, _tmp$2, _tmp$3, _tmp$4, _tmp$5, _tmp$6, _tmp$7, _tmp$8, _tmp$9, _tmp$10, _tmp$11, _tmp$13, _tmp$15, _tmp$16, false, parent);
}
function _M0FP217zhengxin_2dcoding4scss15require__number(value) {
  let n;
  _L: {
    if (value.$tag === 0) {
      const _Number = value;
      const _n = _Number._0;
      n = _n;
      break _L;
    } else {
      return new _M0DTPC16result6ResultGRP217zhengxin_2dcoding4scss10SassNumberRP217zhengxin_2dcoding4scss10ParseErrorE3Err(new _M0DTPC15error5Error47zhengxin_2dcoding_2fscss_2eParseError_2eInvalid("expected number"));
    }
  }
  return new _M0DTPC16result6ResultGRP217zhengxin_2dcoding4scss10SassNumberRP217zhengxin_2dcoding4scss10ParseErrorE2Ok(n);
}
function _M0FP217zhengxin_2dcoding4scss24color__component_2einner(value, scale, percent_only) {
  const _bind$2 = _M0FP217zhengxin_2dcoding4scss15require__number(value);
  let n;
  if (_bind$2.$tag === 1) {
    const _ok = _bind$2;
    n = _ok._0;
  } else {
    return _bind$2;
  }
  if (_M0MPC16double6Double7is__nan(n.amount) || _M0MPC16double6Double7is__inf(n.amount)) {
    return new _M0DTPC16result6ResultGdRP217zhengxin_2dcoding4scss10ParseErrorE3Err(new _M0DTPC15error5Error47zhengxin_2dcoding_2fscss_2eParseError_2eInvalid("finite color component required"));
  }
  if (_M0IPC15array5ArrayPB2Eq5equalGsE(n.numerator, ["%"]) && _M0MPC15array5Array9is__emptyGRPB4JsonE(n.denominator)) {
    return new _M0DTPC16result6ResultGdRP217zhengxin_2dcoding4scss10ParseErrorE2Ok(n.amount * scale / 100);
  }
  if (_M0MP217zhengxin_2dcoding4scss10SassNumber8unitless(n) && !percent_only) {
    return new _M0DTPC16result6ResultGdRP217zhengxin_2dcoding4scss10ParseErrorE2Ok(n.amount);
  }
  return new _M0DTPC16result6ResultGdRP217zhengxin_2dcoding4scss10ParseErrorE3Err(new _M0DTPC15error5Error47zhengxin_2dcoding_2fscss_2eParseError_2eInvalid("invalid color component unit"));
}
function _M0FP217zhengxin_2dcoding4scss10color__hsl(hue, saturation, lightness, alpha, format) {
  const h = (hue - _M0MPC16double6Double5floor(hue / 360) * 360) / 60;
  const s = saturation / 100;
  const l = lightness / 100;
  const c = (1 - Math.abs(2 * l - 1)) * s;
  const x = c * (1 - Math.abs(h - _M0MPC16double6Double5floor(h / 2) * 2 - 1));
  const m = l - c / 2;
  let r;
  let g;
  let b;
  _L: {
    if (h < 1) {
      r = c;
      g = x;
      b = 0;
      break _L;
    } else {
      if (h < 2) {
        r = x;
        g = c;
        b = 0;
        break _L;
      } else {
        if (h < 3) {
          r = 0;
          g = c;
          b = x;
          break _L;
        } else {
          if (h < 4) {
            r = 0;
            g = x;
            b = c;
            break _L;
          } else {
            if (h < 5) {
              r = x;
              g = 0;
              b = c;
              break _L;
            } else {
              r = c;
              g = 0;
              b = x;
              break _L;
            }
          }
        }
      }
    }
  }
  const _tmp = _M0FP217zhengxin_2dcoding4scss5color((r + m) * 255, (g + m) * 255, (b + m) * 255, new _M0DTPC16option6OptionGdE4Some(alpha), format, _M0DTPC16option6OptionGOsE4None__);
  return new _M0TP217zhengxin_2dcoding4scss9SassColor(_tmp.red, _tmp.green, _tmp.blue, _tmp.alpha, _tmp.format, _tmp.original, { _0: h * 60, _1: saturation, _2: lightness });
}
function _M0FP217zhengxin_2dcoding4scss10color__mix(a, b, weight) {
  const p = weight / 100;
  const w = 2 * p - 1;
  const alpha = a.alpha - b.alpha;
  const adjusted = Math.abs(w * alpha + 1) < 1e-012 ? w : (w + alpha) / (1 + w * alpha);
  const first = (adjusted + 1) / 2;
  return _M0FP217zhengxin_2dcoding4scss5color(a.red * first + b.red * (1 - first), a.green * first + b.green * (1 - first), a.blue * first + b.blue * (1 - first), new _M0DTPC16option6OptionGdE4Some(a.alpha * p + b.alpha * (1 - p)), undefined, _M0DTPC16option6OptionGOsE4None__);
}
function _M0FP217zhengxin_2dcoding4scss14require__color(value) {
  let c;
  _L: {
    if (value.$tag === 1) {
      const _Color = value;
      const _c = _Color._0;
      c = _c;
      break _L;
    } else {
      return new _M0DTPC16result6ResultGRP217zhengxin_2dcoding4scss9SassColorRP217zhengxin_2dcoding4scss10ParseErrorE3Err(new _M0DTPC15error5Error47zhengxin_2dcoding_2fscss_2eParseError_2eInvalid("expected color"));
    }
  }
  return new _M0DTPC16result6ResultGRP217zhengxin_2dcoding4scss9SassColorRP217zhengxin_2dcoding4scss10ParseErrorE2Ok(c);
}
function _M0FP217zhengxin_2dcoding4scss13color__modify(operation, positional, keywords) {
  let c;
  if (positional.length === 1) {
    if (_M0MPB3Map8containsGsRP217zhengxin_2dcoding4scss9SassValueE(keywords, "color")) {
      return new _M0DTPC16result6ResultGRP217zhengxin_2dcoding4scss9SassColorRP217zhengxin_2dcoding4scss10ParseErrorE3Err(new _M0DTPC15error5Error47zhengxin_2dcoding_2fscss_2eParseError_2eInvalid("color supplied twice"));
    }
    const _bind$2 = _M0FP217zhengxin_2dcoding4scss14require__color(_M0MPC15array5Array2atGRPB4JsonE(positional, 0));
    if (_bind$2.$tag === 1) {
      const _ok = _bind$2;
      c = _ok._0;
    } else {
      return _bind$2;
    }
  } else {
    _L: {
      _L$2: {
        if (_M0MPC15array5Array9is__emptyGRPB4JsonE(positional)) {
          let v;
          _L$3: {
            const _bind$2 = _M0MPB3Map3getGsRP217zhengxin_2dcoding4scss9SassValueE(keywords, "color");
            if (_bind$2 === undefined) {
              break _L$2;
            } else {
              const _Some = _bind$2;
              const _v = _Some;
              v = _v;
              break _L$3;
            }
          }
          _M0MPB3Map6removeGsRP217zhengxin_2dcoding4scss9SassValueE(keywords, "color");
          const _bind$2 = _M0FP217zhengxin_2dcoding4scss14require__color(v);
          if (_bind$2.$tag === 1) {
            const _ok = _bind$2;
            c = _ok._0;
          } else {
            return _bind$2;
          }
        } else {
          break _L$2;
        }
        break _L;
      }
      return new _M0DTPC16result6ResultGRP217zhengxin_2dcoding4scss9SassColorRP217zhengxin_2dcoding4scss10ParseErrorE3Err(new _M0DTPC15error5Error47zhengxin_2dcoding_2fscss_2eParseError_2eInvalid("expected one color"));
    }
  }
  const rgb = _M0MPB4Iter3anyGURP217zhengxin_2dcoding4scss9SassValueRP217zhengxin_2dcoding4scss9SassValueEE(_M0MPC15array5Array4iterGsE(["red", "green", "blue"]), (k) => _M0MPB3Map8containsGsRP217zhengxin_2dcoding4scss9SassValueE(keywords, k));
  const hsl = _M0MPB4Iter3anyGURP217zhengxin_2dcoding4scss9SassValueRP217zhengxin_2dcoding4scss9SassValueEE(_M0MPC15array5Array4iterGsE(["hue", "saturation", "lightness"]), (k) => _M0MPB3Map8containsGsRP217zhengxin_2dcoding4scss9SassValueE(keywords, k));
  if (rgb && hsl) {
    return new _M0DTPC16result6ResultGRP217zhengxin_2dcoding4scss9SassColorRP217zhengxin_2dcoding4scss10ParseErrorE3Err(new _M0DTPC15error5Error47zhengxin_2dcoding_2fscss_2eParseError_2eInvalid("cannot mix RGB and HSL adjustments"));
  }
  const modify = (key, value, maximum) => {
    let v;
    _L: {
      const _bind$2 = _M0MPB3Map3getGsRP217zhengxin_2dcoding4scss9SassValueE(keywords, key);
      if (_bind$2 === undefined) {
        return new _M0DTPC16result6ResultGdRP217zhengxin_2dcoding4scss10ParseErrorE2Ok(value);
      } else {
        const _Some = _bind$2;
        const _v = _Some;
        v = _v;
        break _L;
      }
    }
    _M0MPB3Map6removeGsRP217zhengxin_2dcoding4scss9SassValueE(keywords, key);
    const _bind$2 = "scale";
    if (_M0MPC16string6String11has__prefix(operation, new _M0TPC16string10StringView(_bind$2, 0, _bind$2.length))) {
      if (key === "hue") {
        return new _M0DTPC16result6ResultGdRP217zhengxin_2dcoding4scss10ParseErrorE3Err(new _M0DTPC15error5Error47zhengxin_2dcoding_2fscss_2eParseError_2eInvalid("cannot scale hue"));
      }
      const _bind$3 = _M0FP217zhengxin_2dcoding4scss24color__component_2einner(v, 1, true);
      let amount;
      if (_bind$3.$tag === 1) {
        const _ok = _bind$3;
        amount = _ok._0;
      } else {
        return _bind$3;
      }
      if (amount < -1 || amount > 1) {
        return new _M0DTPC16result6ResultGdRP217zhengxin_2dcoding4scss10ParseErrorE3Err(new _M0DTPC15error5Error47zhengxin_2dcoding_2fscss_2eParseError_2eInvalid("scale amount out of range"));
      }
      return new _M0DTPC16result6ResultGdRP217zhengxin_2dcoding4scss10ParseErrorE2Ok(value + amount * (amount > 0 ? maximum - value : value));
    } else {
      let amount;
      if (key === "hue") {
        const _bind$3 = _M0FP217zhengxin_2dcoding4scss15require__number(v);
        let _tmp;
        if (_bind$3.$tag === 1) {
          const _ok = _bind$3;
          _tmp = _ok._0;
        } else {
          return _bind$3;
        }
        const _tmp$2 = _tmp;
        const _bind$4 = _M0FP217zhengxin_2dcoding4scss15require__number(_M0FP217zhengxin_2dcoding4scss15numeric_2einner(0, "deg"));
        let _tmp$3;
        if (_bind$4.$tag === 1) {
          const _ok = _bind$4;
          _tmp$3 = _ok._0;
        } else {
          return _bind$4;
        }
        const _bind$5 = _M0MPC16option6Option16unwrap__or__elseGdEHRP217zhengxin_2dcoding4scss10ParseError(_M0MP217zhengxin_2dcoding4scss10SassNumber15convert_2einner(_tmp$2, _tmp$3, true), () => new _M0DTPC16result6ResultGdRP217zhengxin_2dcoding4scss10ParseErrorE3Err(new _M0DTPC15error5Error47zhengxin_2dcoding_2fscss_2eParseError_2eInvalid("expected angle")));
        if (_bind$5.$tag === 1) {
          const _ok = _bind$5;
          amount = _ok._0;
        } else {
          return _bind$5;
        }
      } else {
        const _bind$3 = _M0FP217zhengxin_2dcoding4scss24color__component_2einner(v, maximum, false);
        if (_bind$3.$tag === 1) {
          const _ok = _bind$3;
          amount = _ok._0;
        } else {
          return _bind$3;
        }
      }
      let out;
      const _bind$3 = "change";
      if (_M0MPC16string6String11has__prefix(operation, new _M0TPC16string10StringView(_bind$3, 0, _bind$3.length))) {
        out = amount;
      } else {
        out = value + amount;
      }
      return _M0IP016_24default__implPB2Eq10not__equalGsE(key, "hue") ? new _M0DTPC16result6ResultGdRP217zhengxin_2dcoding4scss10ParseErrorE2Ok(_M0MPC16double6Double3min(_M0MPC16double6Double3max(out, 0), maximum)) : new _M0DTPC16result6ResultGdRP217zhengxin_2dcoding4scss10ParseErrorE2Ok(out);
    }
  };
  const _bind$2 = modify("alpha", c.alpha, 1);
  let alpha;
  if (_bind$2.$tag === 1) {
    const _ok = _bind$2;
    alpha = _ok._0;
  } else {
    return _bind$2;
  }
  let result;
  if (hsl) {
    let s;
    let h;
    let l;
    _L: {
      const _bind$3 = _M0MP217zhengxin_2dcoding4scss9SassColor3hsl(c);
      const _h = _bind$3._0;
      const _s = _bind$3._1;
      const _l = _bind$3._2;
      s = _s;
      h = _h;
      l = _l;
      break _L;
    }
    const _bind$3 = modify("hue", h, 360);
    let _tmp;
    if (_bind$3.$tag === 1) {
      const _ok = _bind$3;
      _tmp = _ok._0;
    } else {
      return _bind$3;
    }
    const _tmp$2 = _tmp;
    const _bind$4 = modify("saturation", s, 100);
    let _tmp$3;
    if (_bind$4.$tag === 1) {
      const _ok = _bind$4;
      _tmp$3 = _ok._0;
    } else {
      return _bind$4;
    }
    const _tmp$4 = _tmp$3;
    const _bind$5 = modify("lightness", l, 100);
    let _tmp$5;
    if (_bind$5.$tag === 1) {
      const _ok = _bind$5;
      _tmp$5 = _ok._0;
    } else {
      return _bind$5;
    }
    result = _M0FP217zhengxin_2dcoding4scss10color__hsl(_tmp$2, _tmp$4, _tmp$5, alpha, c.format === "hsl" ? "hsl" : "auto");
  } else {
    const _bind$3 = modify("red", c.red, 255);
    let _tmp;
    if (_bind$3.$tag === 1) {
      const _ok = _bind$3;
      _tmp = _ok._0;
    } else {
      return _bind$3;
    }
    const _tmp$2 = _tmp;
    const _bind$4 = modify("green", c.green, 255);
    let _tmp$3;
    if (_bind$4.$tag === 1) {
      const _ok = _bind$4;
      _tmp$3 = _ok._0;
    } else {
      return _bind$4;
    }
    const _tmp$4 = _tmp$3;
    const _bind$5 = modify("blue", c.blue, 255);
    let _tmp$5;
    if (_bind$5.$tag === 1) {
      const _ok = _bind$5;
      _tmp$5 = _ok._0;
    } else {
      return _bind$5;
    }
    result = _M0FP217zhengxin_2dcoding4scss5color(_tmp$2, _tmp$4, _tmp$5, new _M0DTPC16option6OptionGdE4Some(alpha), c.format === "hsl" ? "hsl" : "auto", _M0DTPC16option6OptionGOsE4None__);
  }
  if (!_M0MPB3Map9is__emptyGssE(keywords)) {
    return new _M0DTPC16result6ResultGRP217zhengxin_2dcoding4scss9SassColorRP217zhengxin_2dcoding4scss10ParseErrorE3Err(new _M0DTPC15error5Error47zhengxin_2dcoding_2fscss_2eParseError_2eInvalid("unsupported color adjustment keyword or color space"));
  }
  return new _M0DTPC16result6ResultGRP217zhengxin_2dcoding4scss9SassColorRP217zhengxin_2dcoding4scss10ParseErrorE2Ok(result);
}
function _M0FP217zhengxin_2dcoding4scss14color__builtin(name, positional, keywords) {
  let operation;
  const _bind$2 = "color.";
  if (_M0MPC16string6String11has__prefix(name, new _M0TPC16string10StringView(_bind$2, 0, _bind$2.length))) {
    operation = _M0MPC16string10StringView9to__owned(_M0MPC16string6String11sub_2einner(name, 6, undefined));
  } else {
    operation = name;
  }
  const rgb = operation === "rgb" || operation === "rgba";
  const hsl = operation === "hsl" || operation === "hsla";
  const _bind$3 = "color.";
  const qualified = _M0MPC16string6String11has__prefix(name, new _M0TPC16string10StringView(_bind$3, 0, _bind$3.length));
  if (qualified && _M0MPC15array5Array8containsGsE(["rgb", "rgba", "hsl", "hsla", "lighten", "darken", "saturate", "desaturate", "adjust-hue", "opacify", "transparentize", "fade-in", "fade-out"], operation)) {
    return new _M0DTPC16result6ResultGORP217zhengxin_2dcoding4scss9SassValueRP217zhengxin_2dcoding4scss10ParseErrorE2Ok(undefined);
  }
  if (_M0MPC15array5Array8containsGsE(["adjust", "change", "scale"], operation) && qualified || _M0MPC15array5Array8containsGsE(["adjust-color", "change-color", "scale-color"], operation)) {
    const _bind$4 = _M0FP217zhengxin_2dcoding4scss13color__modify(operation, positional, keywords);
    let _tmp;
    if (_bind$4.$tag === 1) {
      const _ok = _bind$4;
      _tmp = _ok._0;
    } else {
      return _bind$4;
    }
    return new _M0DTPC16result6ResultGORP217zhengxin_2dcoding4scss9SassValueRP217zhengxin_2dcoding4scss10ParseErrorE2Ok(new _M0DTP217zhengxin_2dcoding4scss9SassValue5Color(_tmp));
  }
  if (!_M0FP217zhengxin_2dcoding4scss22global__color__builtin(operation)) {
    return new _M0DTPC16result6ResultGORP217zhengxin_2dcoding4scss9SassValueRP217zhengxin_2dcoding4scss10ParseErrorE2Ok(undefined);
  }
  _L: {
    _L$2: {
      if (rgb) {
        break _L$2;
      } else {
        if (hsl) {
          break _L$2;
        }
      }
      break _L;
    }
    if (positional.length === 1) {
      if (_M0MPB3Map9is__emptyGssE(keywords)) {
        const _bind$4 = _M0MPC15array5Array2atGRPB4JsonE(positional, 0);
        if (_bind$4.$tag === 2) {
          return new _M0DTPC16result6ResultGORP217zhengxin_2dcoding4scss9SassValueRP217zhengxin_2dcoding4scss10ParseErrorE2Ok(undefined);
        }
      }
    }
  }
  if (_M0MPC15array5Array8containsGsE(["opacity", "saturate", "grayscale", "invert"], operation)) {
    if (!qualified) {
      if (positional.length === 1) {
        const _bind$4 = _M0MPC15array5Array2atGRPB4JsonE(positional, 0);
        if (_bind$4.$tag === 0) {
          if (_M0MPB3Map9is__emptyGssE(keywords)) {
            return new _M0DTPC16result6ResultGORP217zhengxin_2dcoding4scss9SassValueRP217zhengxin_2dcoding4scss10ParseErrorE2Ok(undefined);
          }
        }
      }
    }
  }
  const spec = rgb && (positional.length === 2 || _M0MPB3Map8containsGsRP217zhengxin_2dcoding4scss9SassValueE(keywords, "color")) ? ["color", "alpha"] : rgb ? ["red", "green", "blue", "alpha"] : hsl ? ["hue", "saturation", "lightness", "alpha"] : operation === "mix" ? ["color1", "color2", "weight"] : _M0MPC15array5Array8containsGsE(["lighten", "darken", "saturate", "desaturate", "opacify", "fade-in", "transparentize", "fade-out"], operation) ? ["color", "amount"] : operation === "adjust-hue" ? ["color", "degrees"] : operation === "invert" ? ["color", "weight"] : ["color"];
  const minimum = rgb && _M0MPC15array5Array2atGRPB4JsonE(spec, 0) === "color" ? 2 : rgb || hsl ? 3 : operation === "mix" ? 2 : operation === "invert" ? 1 : spec.length;
  const args = _M0MPC15array5Array4copyGsE(positional);
  if (args.length > spec.length) {
    return new _M0DTPC16result6ResultGORP217zhengxin_2dcoding4scss9SassValueRP217zhengxin_2dcoding4scss10ParseErrorE3Err(new _M0DTPC15error5Error47zhengxin_2dcoding_2fscss_2eParseError_2eInvalid("too many color arguments"));
  }
  const _bind$4 = 0;
  const _bind$5 = spec.length;
  let _tmp = _bind$4;
  while (true) {
    const i = _tmp;
    if (i < _bind$5) {
      let v;
      _L$2: {
        _L$3: {
          const _bind$6 = _M0MPB3Map3getGsRP217zhengxin_2dcoding4scss9SassValueE(keywords, _M0MPC15array5Array2atGRPB4JsonE(spec, i));
          if (_bind$6 === undefined) {
          } else {
            const _Some = _bind$6;
            const _v = _Some;
            v = _v;
            break _L$3;
          }
          break _L$2;
        }
        if (i < positional.length) {
          return new _M0DTPC16result6ResultGORP217zhengxin_2dcoding4scss9SassValueRP217zhengxin_2dcoding4scss10ParseErrorE3Err(new _M0DTPC15error5Error47zhengxin_2dcoding_2fscss_2eParseError_2eInvalid("color argument supplied twice"));
        }
        while (true) {
          if (args.length <= i) {
            _M0MPC15array5Array4pushGRPC14json10WriteFrameE(args, _M0DTP217zhengxin_2dcoding4scss9SassValue4Null__);
            continue;
          } else {
            break;
          }
        }
        _M0MPC15array5Array3setGURP217zhengxin_2dcoding4scss9SassValueRP217zhengxin_2dcoding4scss9SassValueEE(args, i, v);
        _M0MPB3Map6removeGsRP217zhengxin_2dcoding4scss9SassValueE(keywords, _M0MPC15array5Array2atGRPB4JsonE(spec, i));
      }
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  if (!_M0MPB3Map9is__emptyGssE(keywords)) {
    return new _M0DTPC16result6ResultGORP217zhengxin_2dcoding4scss9SassValueRP217zhengxin_2dcoding4scss10ParseErrorE3Err(new _M0DTPC15error5Error47zhengxin_2dcoding_2fscss_2eParseError_2eInvalid("unknown color keyword"));
  }
  if (args.length < minimum || _M0MPB4Iter3anyGURP217zhengxin_2dcoding4scss9SassValueRP217zhengxin_2dcoding4scss9SassValueEE(_M0MPC15array9ArrayView4iterGsE(_M0MPC15array5Array12view_2einnerGsE(args, 0, minimum)), (v) => {
    if (v.$tag === 4) {
      return true;
    } else {
      return false;
    }
  })) {
    return new _M0DTPC16result6ResultGORP217zhengxin_2dcoding4scss9SassValueRP217zhengxin_2dcoding4scss10ParseErrorE3Err(new _M0DTPC15error5Error47zhengxin_2dcoding_2fscss_2eParseError_2eInvalid("missing color argument"));
  }
  const optional = (i, fallback) => _M0MPC16option6Option10unwrap__orGRP217zhengxin_2dcoding4scss9SassValueE(_M0MPC15array5Array3getGRP217zhengxin_2dcoding4scss9SassValueE(args, i), fallback);
  if (rgb || hsl) {
    if (_M0MPB4Iter3anyGURP217zhengxin_2dcoding4scss9SassValueRP217zhengxin_2dcoding4scss9SassValueEE(_M0MPC15array5Array4iterGsE(args), (v) => {
      if (v.$tag === 2) {
        return true;
      } else {
        return false;
      }
    })) {
      if (_M0MPB4Iter3anyGURP217zhengxin_2dcoding4scss9SassValueRP217zhengxin_2dcoding4scss9SassValueEE(_M0MPC15array5Array4iterGsE(args), (v) => {
        let s;
        _L$2: {
          if (v.$tag === 2) {
            const _Text = v;
            const _s = _Text._0;
            const _x = _Text._1;
            if (_x === false) {
              s = _s;
              break _L$2;
            } else {
              return false;
            }
          } else {
            return false;
          }
        }
        const _bind$6 = "var(";
        if (_M0MPC16string6String11has__prefix(s, new _M0TPC16string10StringView(_bind$6, 0, _bind$6.length))) {
          return true;
        } else {
          const _bind$7 = "calc(";
          return _M0MPC16string6String11has__prefix(s, new _M0TPC16string10StringView(_bind$7, 0, _bind$7.length));
        }
      })) {
        const _bind$6 = _M0MPC15array5Array3mapGRP217zhengxin_2dcoding4scss9SassValuesEHRP217zhengxin_2dcoding4scss10ParseError(args, (v) => _M0MP217zhengxin_2dcoding4scss9SassValue11css_2einner(v, false, false));
        let _tmp$2;
        if (_bind$6.$tag === 1) {
          const _ok = _bind$6;
          _tmp$2 = _ok._0;
        } else {
          return _bind$6;
        }
        const _tmp$3 = _tmp$2;
        const _bind$7 = ", ";
        return new _M0DTPC16result6ResultGORP217zhengxin_2dcoding4scss9SassValueRP217zhengxin_2dcoding4scss10ParseErrorE2Ok(new _M0DTP217zhengxin_2dcoding4scss9SassValue4Text(`${operation}(${_M0MPC15array5Array4joinGsE(_tmp$3, new _M0TPC16string10StringView(_bind$7, 0, _bind$7.length))})`, false));
      }
    }
    if (rgb && _M0MPC15array5Array2atGRPB4JsonE(spec, 0) === "color") {
      const _bind$6 = _M0FP217zhengxin_2dcoding4scss14require__color(_M0MPC15array5Array2atGRPB4JsonE(args, 0));
      let c;
      if (_bind$6.$tag === 1) {
        const _ok = _bind$6;
        c = _ok._0;
      } else {
        return _bind$6;
      }
      const _bind$7 = _M0FP217zhengxin_2dcoding4scss24color__component_2einner(_M0MPC15array5Array2atGRPB4JsonE(args, 1), 1, false);
      let _tmp$2;
      if (_bind$7.$tag === 1) {
        const _ok = _bind$7;
        _tmp$2 = _ok._0;
      } else {
        return _bind$7;
      }
      return new _M0DTPC16result6ResultGORP217zhengxin_2dcoding4scss9SassValueRP217zhengxin_2dcoding4scss10ParseErrorE2Ok(new _M0DTP217zhengxin_2dcoding4scss9SassValue5Color(new _M0TP217zhengxin_2dcoding4scss9SassColor(c.red, c.green, c.blue, _M0MPC16double6Double3min(_M0MPC16double6Double3max(_tmp$2, 0), 1), "rgb", undefined, c.hsl_channels)));
    }
    const _bind$6 = _M0FP217zhengxin_2dcoding4scss24color__component_2einner(optional(3, _M0FP217zhengxin_2dcoding4scss15numeric_2einner(1, "")), 1, false);
    let _tmp$2;
    if (_bind$6.$tag === 1) {
      const _ok = _bind$6;
      _tmp$2 = _ok._0;
    } else {
      return _bind$6;
    }
    const alpha = _M0MPC16double6Double3min(_M0MPC16double6Double3max(_tmp$2, 0), 1);
    if (rgb) {
      const _bind$7 = _M0FP217zhengxin_2dcoding4scss24color__component_2einner(_M0MPC15array5Array2atGRPB4JsonE(args, 0), 255, false);
      let _tmp$3;
      if (_bind$7.$tag === 1) {
        const _ok = _bind$7;
        _tmp$3 = _ok._0;
      } else {
        return _bind$7;
      }
      const r = _M0MPC16double6Double3min(_M0MPC16double6Double3max(_tmp$3, 0), 255);
      const _bind$8 = _M0FP217zhengxin_2dcoding4scss24color__component_2einner(_M0MPC15array5Array2atGRPB4JsonE(args, 1), 255, false);
      let _tmp$4;
      if (_bind$8.$tag === 1) {
        const _ok = _bind$8;
        _tmp$4 = _ok._0;
      } else {
        return _bind$8;
      }
      const g = _M0MPC16double6Double3min(_M0MPC16double6Double3max(_tmp$4, 0), 255);
      const _bind$9 = _M0FP217zhengxin_2dcoding4scss24color__component_2einner(_M0MPC15array5Array2atGRPB4JsonE(args, 2), 255, false);
      let _tmp$5;
      if (_bind$9.$tag === 1) {
        const _ok = _bind$9;
        _tmp$5 = _ok._0;
      } else {
        return _bind$9;
      }
      const b = _M0MPC16double6Double3min(_M0MPC16double6Double3max(_tmp$5, 0), 255);
      const percent = _M0MPB4Iter3allGUOsRP217zhengxin_2dcoding4scss10ExpressionbEE(_M0MPC15array9ArrayView4iterGsE(_M0MPC15array5Array12view_2einnerGsE(args, 0, 3)), (v) => {
        let n;
        _L$2: {
          if (v.$tag === 0) {
            const _Number = v;
            const _n = _Number._0;
            n = _n;
            break _L$2;
          } else {
            return false;
          }
        }
        return _M0IPC15array5ArrayPB2Eq5equalGsE(n.numerator, ["%"]);
      });
      return new _M0DTPC16result6ResultGORP217zhengxin_2dcoding4scss9SassValueRP217zhengxin_2dcoding4scss10ParseErrorE2Ok(new _M0DTP217zhengxin_2dcoding4scss9SassValue5Color(_M0FP217zhengxin_2dcoding4scss5color(r, g, b, new _M0DTPC16option6OptionGdE4Some(alpha), percent ? "percent" : "rgb", _M0DTPC16option6OptionGOsE4None__)));
    }
    const _bind$7 = _M0FP217zhengxin_2dcoding4scss15require__number(_M0MPC15array5Array2atGRPB4JsonE(args, 0));
    let angle;
    if (_bind$7.$tag === 1) {
      const _ok = _bind$7;
      angle = _ok._0;
    } else {
      return _bind$7;
    }
    const _bind$8 = _M0FP217zhengxin_2dcoding4scss15require__number(_M0FP217zhengxin_2dcoding4scss15numeric_2einner(0, "deg"));
    let _tmp$3;
    if (_bind$8.$tag === 1) {
      const _ok = _bind$8;
      _tmp$3 = _ok._0;
    } else {
      return _bind$8;
    }
    const _bind$9 = _M0MPC16option6Option16unwrap__or__elseGdEHRP217zhengxin_2dcoding4scss10ParseError(_M0MP217zhengxin_2dcoding4scss10SassNumber15convert_2einner(angle, _tmp$3, true), () => new _M0DTPC16result6ResultGdRP217zhengxin_2dcoding4scss10ParseErrorE3Err(new _M0DTPC15error5Error47zhengxin_2dcoding_2fscss_2eParseError_2eInvalid("expected angle")));
    let hue;
    if (_bind$9.$tag === 1) {
      const _ok = _bind$9;
      hue = _ok._0;
    } else {
      return _bind$9;
    }
    const _bind$10 = _M0FP217zhengxin_2dcoding4scss24color__component_2einner(_M0MPC15array5Array2atGRPB4JsonE(args, 1), 100, false);
    let _tmp$4;
    if (_bind$10.$tag === 1) {
      const _ok = _bind$10;
      _tmp$4 = _ok._0;
    } else {
      return _bind$10;
    }
    const _tmp$5 = _tmp$4;
    const _bind$11 = _M0FP217zhengxin_2dcoding4scss24color__component_2einner(_M0MPC15array5Array2atGRPB4JsonE(args, 2), 100, false);
    let _tmp$6;
    if (_bind$11.$tag === 1) {
      const _ok = _bind$11;
      _tmp$6 = _ok._0;
    } else {
      return _bind$11;
    }
    return new _M0DTPC16result6ResultGORP217zhengxin_2dcoding4scss9SassValueRP217zhengxin_2dcoding4scss10ParseErrorE2Ok(new _M0DTP217zhengxin_2dcoding4scss9SassValue5Color(_M0FP217zhengxin_2dcoding4scss10color__hsl(hue, _tmp$5, _tmp$6, alpha, "hsl")));
  }
  const _bind$6 = _M0FP217zhengxin_2dcoding4scss14require__color(_M0MPC15array5Array2atGRPB4JsonE(args, 0));
  let c;
  if (_bind$6.$tag === 1) {
    const _ok = _bind$6;
    c = _ok._0;
  } else {
    return _bind$6;
  }
  _L$2: {
    _L$3: {
      _L$4: {
        switch (operation) {
          case "red": {
            return new _M0DTPC16result6ResultGORP217zhengxin_2dcoding4scss9SassValueRP217zhengxin_2dcoding4scss10ParseErrorE2Ok(_M0FP217zhengxin_2dcoding4scss15numeric_2einner(_M0MPC16double6Double5round(c.red), ""));
          }
          case "green": {
            return new _M0DTPC16result6ResultGORP217zhengxin_2dcoding4scss9SassValueRP217zhengxin_2dcoding4scss10ParseErrorE2Ok(_M0FP217zhengxin_2dcoding4scss15numeric_2einner(_M0MPC16double6Double5round(c.green), ""));
          }
          case "blue": {
            return new _M0DTPC16result6ResultGORP217zhengxin_2dcoding4scss9SassValueRP217zhengxin_2dcoding4scss10ParseErrorE2Ok(_M0FP217zhengxin_2dcoding4scss15numeric_2einner(_M0MPC16double6Double5round(c.blue), ""));
          }
          case "alpha": {
            break _L$4;
          }
          case "opacity": {
            break _L$4;
          }
          case "hue": {
            return new _M0DTPC16result6ResultGORP217zhengxin_2dcoding4scss9SassValueRP217zhengxin_2dcoding4scss10ParseErrorE2Ok(_M0FP217zhengxin_2dcoding4scss15numeric_2einner(_M0MP217zhengxin_2dcoding4scss9SassColor3hsl(c)._0, "deg"));
          }
          case "saturation": {
            return new _M0DTPC16result6ResultGORP217zhengxin_2dcoding4scss9SassValueRP217zhengxin_2dcoding4scss10ParseErrorE2Ok(_M0FP217zhengxin_2dcoding4scss15numeric_2einner(_M0MP217zhengxin_2dcoding4scss9SassColor3hsl(c)._1, "%"));
          }
          case "lightness": {
            return new _M0DTPC16result6ResultGORP217zhengxin_2dcoding4scss9SassValueRP217zhengxin_2dcoding4scss10ParseErrorE2Ok(_M0FP217zhengxin_2dcoding4scss15numeric_2einner(_M0MP217zhengxin_2dcoding4scss9SassColor3hsl(c)._2, "%"));
          }
          case "mix": {
            break _L$3;
          }
          case "invert": {
            break _L$3;
          }
          case "opacify": {
            break _L$2;
          }
          case "fade-in": {
            break _L$2;
          }
          case "transparentize": {
            break _L$2;
          }
          case "fade-out": {
            break _L$2;
          }
          default: {
            let s;
            let h;
            let l;
            _L$5: {
              const _bind$7 = _M0MP217zhengxin_2dcoding4scss9SassColor3hsl(c);
              const _h = _bind$7._0;
              const _s = _bind$7._1;
              const _l = _bind$7._2;
              s = _s;
              h = _h;
              l = _l;
              break _L$5;
            }
            const h$2 = new _M0TPB8MutLocalGdE(h);
            const s$2 = new _M0TPB8MutLocalGdE(s);
            const l$2 = new _M0TPB8MutLocalGdE(l);
            if (operation === "complement") {
              h$2.val = h$2.val + 180;
            } else {
              if (operation === "grayscale") {
                s$2.val = 0;
              } else {
                if (operation === "adjust-hue") {
                  const _bind$7 = _M0FP217zhengxin_2dcoding4scss15require__number(_M0MPC15array5Array2atGRPB4JsonE(args, 1));
                  let angle;
                  if (_bind$7.$tag === 1) {
                    const _ok = _bind$7;
                    angle = _ok._0;
                  } else {
                    return _bind$7;
                  }
                  const _tmp$2 = h$2.val;
                  const _bind$8 = _M0FP217zhengxin_2dcoding4scss15require__number(_M0FP217zhengxin_2dcoding4scss15numeric_2einner(0, "deg"));
                  let _tmp$3;
                  if (_bind$8.$tag === 1) {
                    const _ok = _bind$8;
                    _tmp$3 = _ok._0;
                  } else {
                    return _bind$8;
                  }
                  const _bind$9 = _M0MPC16option6Option16unwrap__or__elseGdEHRP217zhengxin_2dcoding4scss10ParseError(_M0MP217zhengxin_2dcoding4scss10SassNumber15convert_2einner(angle, _tmp$3, true), () => new _M0DTPC16result6ResultGdRP217zhengxin_2dcoding4scss10ParseErrorE3Err(new _M0DTPC15error5Error47zhengxin_2dcoding_2fscss_2eParseError_2eInvalid("expected angle")));
                  let _tmp$4;
                  if (_bind$9.$tag === 1) {
                    const _ok = _bind$9;
                    _tmp$4 = _ok._0;
                  } else {
                    return _bind$9;
                  }
                  h$2.val = _tmp$2 + _tmp$4;
                } else {
                  const _bind$7 = _M0FP217zhengxin_2dcoding4scss24color__component_2einner(_M0MPC15array5Array2atGRPB4JsonE(args, 1), 100, false);
                  let amount;
                  if (_bind$7.$tag === 1) {
                    const _ok = _bind$7;
                    amount = _ok._0;
                  } else {
                    return _bind$7;
                  }
                  if (amount < 0 || amount > 100) {
                    return new _M0DTPC16result6ResultGORP217zhengxin_2dcoding4scss9SassValueRP217zhengxin_2dcoding4scss10ParseErrorE3Err(new _M0DTPC15error5Error47zhengxin_2dcoding_2fscss_2eParseError_2eInvalid("color amount out of range"));
                  }
                  if (operation === "lighten") {
                    l$2.val = l$2.val + amount;
                  } else {
                    if (operation === "darken") {
                      l$2.val = l$2.val - amount;
                    } else {
                      if (operation === "saturate") {
                        s$2.val = s$2.val + amount;
                      } else {
                        if (operation === "desaturate") {
                          s$2.val = s$2.val - amount;
                        } else {
                          return new _M0DTPC16result6ResultGORP217zhengxin_2dcoding4scss9SassValueRP217zhengxin_2dcoding4scss10ParseErrorE2Ok(undefined);
                        }
                      }
                    }
                  }
                }
              }
            }
            return new _M0DTPC16result6ResultGORP217zhengxin_2dcoding4scss9SassValueRP217zhengxin_2dcoding4scss10ParseErrorE2Ok(new _M0DTP217zhengxin_2dcoding4scss9SassValue5Color(_M0FP217zhengxin_2dcoding4scss10color__hsl(h$2.val, _M0MPC16double6Double3min(_M0MPC16double6Double3max(s$2.val, 0), 100), _M0MPC16double6Double3min(_M0MPC16double6Double3max(l$2.val, 0), 100), c.alpha, c.format === "hsl" ? "hsl" : "auto")));
          }
        }
      }
      return new _M0DTPC16result6ResultGORP217zhengxin_2dcoding4scss9SassValueRP217zhengxin_2dcoding4scss10ParseErrorE2Ok(_M0FP217zhengxin_2dcoding4scss15numeric_2einner(c.alpha, ""));
    }
    const _bind$7 = _M0FP217zhengxin_2dcoding4scss24color__component_2einner(optional(operation === "mix" ? 2 : 1, _M0FP217zhengxin_2dcoding4scss15numeric_2einner(operation === "mix" ? 50 : 100, "%")), 100, true);
    let weight;
    if (_bind$7.$tag === 1) {
      const _ok = _bind$7;
      weight = _ok._0;
    } else {
      return _bind$7;
    }
    if (weight < 0 || weight > 100) {
      return new _M0DTPC16result6ResultGORP217zhengxin_2dcoding4scss9SassValueRP217zhengxin_2dcoding4scss10ParseErrorE3Err(new _M0DTPC15error5Error47zhengxin_2dcoding_2fscss_2eParseError_2eInvalid("color weight out of range"));
    }
    if (operation === "mix") {
      const _bind$8 = _M0FP217zhengxin_2dcoding4scss14require__color(_M0MPC15array5Array2atGRPB4JsonE(args, 1));
      let _tmp$2;
      if (_bind$8.$tag === 1) {
        const _ok = _bind$8;
        _tmp$2 = _ok._0;
      } else {
        return _bind$8;
      }
      return new _M0DTPC16result6ResultGORP217zhengxin_2dcoding4scss9SassValueRP217zhengxin_2dcoding4scss10ParseErrorE2Ok(new _M0DTP217zhengxin_2dcoding4scss9SassValue5Color(_M0FP217zhengxin_2dcoding4scss10color__mix(c, _tmp$2, weight)));
    } else {
      return new _M0DTPC16result6ResultGORP217zhengxin_2dcoding4scss9SassValueRP217zhengxin_2dcoding4scss10ParseErrorE2Ok(new _M0DTP217zhengxin_2dcoding4scss9SassValue5Color(_M0FP217zhengxin_2dcoding4scss10color__mix(_M0FP217zhengxin_2dcoding4scss5color(255 - c.red, 255 - c.green, 255 - c.blue, new _M0DTPC16option6OptionGdE4Some(c.alpha), undefined, _M0DTPC16option6OptionGOsE4None__), c, weight)));
    }
  }
  const _bind$7 = _M0FP217zhengxin_2dcoding4scss24color__component_2einner(_M0MPC15array5Array2atGRPB4JsonE(args, 1), 1, false);
  let amount;
  if (_bind$7.$tag === 1) {
    const _ok = _bind$7;
    amount = _ok._0;
  } else {
    return _bind$7;
  }
  if (amount < 0 || amount > 1) {
    return new _M0DTPC16result6ResultGORP217zhengxin_2dcoding4scss9SassValueRP217zhengxin_2dcoding4scss10ParseErrorE3Err(new _M0DTPC15error5Error47zhengxin_2dcoding_2fscss_2eParseError_2eInvalid("alpha amount out of range"));
  }
  const delta = operation === "opacify" || operation === "fade-in" ? amount : -amount;
  return new _M0DTPC16result6ResultGORP217zhengxin_2dcoding4scss9SassValueRP217zhengxin_2dcoding4scss10ParseErrorE2Ok(new _M0DTP217zhengxin_2dcoding4scss9SassValue5Color(new _M0TP217zhengxin_2dcoding4scss9SassColor(c.red, c.green, c.blue, _M0MPC16double6Double3min(_M0MPC16double6Double3max(c.alpha + delta, 0), 1), c.format, undefined, c.hsl_channels)));
}
function _M0FP217zhengxin_2dcoding4scss12require__int(value) {
  const _bind$2 = _M0FP217zhengxin_2dcoding4scss15require__number(value);
  let n;
  if (_bind$2.$tag === 1) {
    const _ok = _bind$2;
    n = _ok._0;
  } else {
    return _bind$2;
  }
  if (!_M0MP217zhengxin_2dcoding4scss10SassNumber8unitless(n) || (_M0MPC16double6Double7is__nan(n.amount) || (_M0MPC16double6Double7is__inf(n.amount) || (n.amount !== _M0MPC16double6Double5floor(n.amount) || Math.abs(n.amount) > 2147483647)))) {
    return new _M0DTPC16result6ResultGiRP217zhengxin_2dcoding4scss10ParseErrorE3Err(new _M0DTPC15error5Error47zhengxin_2dcoding_2fscss_2eParseError_2eInvalid("expected bounded integer"));
  }
  return new _M0DTPC16result6ResultGiRP217zhengxin_2dcoding4scss10ParseErrorE2Ok(_M0MPC16double6Double7to__int(n.amount));
}
function _M0FP217zhengxin_2dcoding4scss11list__index(value, length) {
  const _bind$2 = _M0FP217zhengxin_2dcoding4scss12require__int(value);
  let raw;
  if (_bind$2.$tag === 1) {
    const _ok = _bind$2;
    raw = _ok._0;
  } else {
    return _bind$2;
  }
  const index = raw < 0 ? length + raw | 0 : raw - 1 | 0;
  if (index < 0 || index >= length) {
    return new _M0DTPC16result6ResultGiRP217zhengxin_2dcoding4scss10ParseErrorE3Err(new _M0DTPC15error5Error47zhengxin_2dcoding_2fscss_2eParseError_2eInvalid("list index out of range"));
  }
  return new _M0DTPC16result6ResultGiRP217zhengxin_2dcoding4scss10ParseErrorE2Ok(index);
}
function _M0FP217zhengxin_2dcoding4scss12map__entries(value) {
  _L: {
    let values;
    _L$2: {
      switch (value.$tag) {
        case 6: {
          const _Dictionary = value;
          const _values = _Dictionary._0;
          values = _values;
          break _L$2;
        }
        case 5: {
          const _List = value;
          const _x = _List._0;
          if (_x.length === 0) {
            const _x$2 = _List._2;
            if (_x$2 === false) {
              return new _M0DTPC16result6ResultGRPB5ArrayGURP217zhengxin_2dcoding4scss9SassValueRP217zhengxin_2dcoding4scss9SassValueEERP217zhengxin_2dcoding4scss10ParseErrorE2Ok([]);
            } else {
              break _L;
            }
          } else {
            break _L;
          }
        }
        default: {
          break _L;
        }
      }
    }
    return new _M0DTPC16result6ResultGRPB5ArrayGURP217zhengxin_2dcoding4scss9SassValueRP217zhengxin_2dcoding4scss9SassValueEERP217zhengxin_2dcoding4scss10ParseErrorE2Ok(values);
  }
  return new _M0DTPC16result6ResultGRPB5ArrayGURP217zhengxin_2dcoding4scss9SassValueRP217zhengxin_2dcoding4scss9SassValueEERP217zhengxin_2dcoding4scss10ParseErrorE3Err(new _M0DTPC15error5Error47zhengxin_2dcoding_2fscss_2eParseError_2eInvalid("expected map"));
}
function _M0FP217zhengxin_2dcoding4scss13require__text(value) {
  let s;
  let q;
  _L: {
    if (value.$tag === 2) {
      const _Text = value;
      const _s = _Text._0;
      const _q = _Text._1;
      s = _s;
      q = _q;
      break _L;
    } else {
      return new _M0DTPC16result6ResultGUsbERP217zhengxin_2dcoding4scss10ParseErrorE3Err(new _M0DTPC15error5Error47zhengxin_2dcoding_2fscss_2eParseError_2eInvalid("expected string"));
    }
  }
  return new _M0DTPC16result6ResultGUsbERP217zhengxin_2dcoding4scss10ParseErrorE2Ok({ _0: s, _1: q });
}
function _M0MP217zhengxin_2dcoding4scss5Scope12find__module(self, prefix) {
  let _tmp = self;
  let _tmp$2 = prefix;
  while (true) {
    const self$2 = _tmp;
    const prefix$2 = _tmp$2;
    let value;
    _L: {
      const _bind$2 = _M0MPB3Map3getGsRP217zhengxin_2dcoding4scss5ScopeE(self$2.module_scopes, prefix$2);
      if (_bind$2 === undefined) {
        let parent;
        _L$2: {
          const _bind$3 = self$2.parent;
          if (_bind$3 === undefined) {
            return undefined;
          } else {
            const _Some = _bind$3;
            const _parent = _Some;
            parent = _parent;
            break _L$2;
          }
        }
        _tmp = parent;
        continue;
      } else {
        const _Some = _bind$2;
        const _value = _Some;
        value = _value;
        break _L;
      }
    }
    return value;
  }
}
function _M0FP217zhengxin_2dcoding4scss12public__name(name) {
  const _tmp = _M0FP217zhengxin_2dcoding4scss10identifier(name);
  const _bind$2 = "-";
  return !_M0MPC16string6String11has__prefix(_tmp, new _M0TPC16string10StringView(_bind$2, 0, _bind$2.length));
}
function _M0MP217zhengxin_2dcoding4scss5Scope16public__variable(self, name) {
  if (!_M0FP217zhengxin_2dcoding4scss12public__name(name)) {
    return undefined;
  }
  return _M0MPB3Map8containsGsRP217zhengxin_2dcoding4scss9SassValueE(self.vars, name) ? { _0: self, _1: name } : _M0MPB3Map3getGsURP217zhengxin_2dcoding4scss5ScopesEE(self.forwarded_vars, name);
}
function _M0MP217zhengxin_2dcoding4scss5Scope8standard(self, prefix) {
  let _tmp = self;
  let _tmp$2 = prefix;
  while (true) {
    const self$2 = _tmp;
    const prefix$2 = _tmp$2;
    let name;
    _L: {
      const _bind$2 = _M0MPB3Map3getGssE(self$2.standard_modules, prefix$2);
      if (_bind$2 === undefined) {
        let parent;
        _L$2: {
          const _bind$3 = self$2.parent;
          if (_bind$3 === undefined) {
            return undefined;
          } else {
            const _Some = _bind$3;
            const _parent = _Some;
            parent = _parent;
            break _L$2;
          }
        }
        _tmp = parent;
        continue;
      } else {
        const _Some = _bind$2;
        const _name = _Some;
        name = _name;
        break _L;
      }
    }
    return name;
  }
}
function _M0MP217zhengxin_2dcoding4scss5Scope16qualified__owner(self, name) {
  const _bind$2 = ".";
  const parts = _M0MPB4Iter9to__arrayGRPC16string10StringViewE(_M0MPC16string6String5split(name, new _M0TPC16string10StringView(_bind$2, 0, _bind$2.length)));
  if (parts.length !== 2) {
    return new _M0DTPC16result6ResultGURP217zhengxin_2dcoding4scss5ScopesERP217zhengxin_2dcoding4scss10ParseErrorE3Err(new _M0DTPC15error5Error47zhengxin_2dcoding_2fscss_2eParseError_2eInvalid("invalid module member"));
  }
  const prefix = _M0MPC16string10StringView9to__owned(_M0MPC15array5Array2atGRPB4JsonE(parts, 0));
  const _bind$3 = _M0MP217zhengxin_2dcoding4scss5Scope8standard(self, prefix);
  if (_bind$3 === undefined) {
  } else {
    return new _M0DTPC16result6ResultGURP217zhengxin_2dcoding4scss5ScopesERP217zhengxin_2dcoding4scss10ParseErrorE3Err(new _M0DTPC15error5Error47zhengxin_2dcoding_2fscss_2eParseError_2eInvalid("standard module variables are read-only"));
  }
  let library;
  const _bind$4 = _M0MP217zhengxin_2dcoding4scss5Scope12find__module(self, prefix);
  if (_bind$4 === undefined) {
    return new _M0DTPC16result6ResultGURP217zhengxin_2dcoding4scss5ScopesERP217zhengxin_2dcoding4scss10ParseErrorE3Err(new _M0DTPC15error5Error47zhengxin_2dcoding_2fscss_2eParseError_2eInvalid(`undefined module ${prefix}`));
  } else {
    const _Some = _bind$4;
    const _frame = _Some;
    library = _frame;
  }
  let origin;
  _L: {
    const _bind$5 = _M0MP217zhengxin_2dcoding4scss5Scope16public__variable(library, _M0MPC16string10StringView9to__owned(_M0MPC15array5Array2atGRPB4JsonE(parts, 1)));
    if (_bind$5 === undefined) {
      return new _M0DTPC16result6ResultGURP217zhengxin_2dcoding4scss5ScopesERP217zhengxin_2dcoding4scss10ParseErrorE3Err(new _M0DTPC15error5Error47zhengxin_2dcoding_2fscss_2eParseError_2eInvalid("undefined or private module variable"));
    } else {
      const _Some = _bind$5;
      const _origin = _Some;
      origin = _origin;
      break _L;
    }
  }
  return new _M0DTPC16result6ResultGURP217zhengxin_2dcoding4scss5ScopesERP217zhengxin_2dcoding4scss10ParseErrorE2Ok(origin);
}
function _M0MP217zhengxin_2dcoding4scss5Scope19qualified__variable(self, name) {
  const _bind$2 = ".";
  const parts = _M0MPB4Iter9to__arrayGRPC16string10StringViewE(_M0MPC16string6String5split(name, new _M0TPC16string10StringView(_bind$2, 0, _bind$2.length)));
  if (parts.length === 2 && _M0IPC16option6OptionPB2Eq5equalGsE(_M0MP217zhengxin_2dcoding4scss5Scope8standard(self, _M0MPC16string10StringView9to__owned(_M0MPC15array5Array2atGRPB4JsonE(parts, 0))), "math")) {
    const _bind$3 = _M0MPC16string10StringView9to__owned(_M0MPC15array5Array2atGRPB4JsonE(parts, 1));
    switch (_bind$3) {
      case "pi": {
        return new _M0DTPC16result6ResultGORP217zhengxin_2dcoding4scss9SassValueRP217zhengxin_2dcoding4scss10ParseErrorE2Ok(_M0FP217zhengxin_2dcoding4scss15numeric_2einner(3.1415926535897931, ""));
      }
      case "e": {
        return new _M0DTPC16result6ResultGORP217zhengxin_2dcoding4scss9SassValueRP217zhengxin_2dcoding4scss10ParseErrorE2Ok(_M0FP217zhengxin_2dcoding4scss15numeric_2einner(2.7182818284590451, ""));
      }
      case "epsilon": {
        return new _M0DTPC16result6ResultGORP217zhengxin_2dcoding4scss9SassValueRP217zhengxin_2dcoding4scss10ParseErrorE2Ok(_M0FP217zhengxin_2dcoding4scss15numeric_2einner(2.2204460492503131e-016, ""));
      }
      case "max-safe-integer": {
        return new _M0DTPC16result6ResultGORP217zhengxin_2dcoding4scss9SassValueRP217zhengxin_2dcoding4scss10ParseErrorE2Ok(_M0FP217zhengxin_2dcoding4scss15numeric_2einner(9007199254740991, ""));
      }
      case "min-safe-integer": {
        return new _M0DTPC16result6ResultGORP217zhengxin_2dcoding4scss9SassValueRP217zhengxin_2dcoding4scss10ParseErrorE2Ok(_M0FP217zhengxin_2dcoding4scss15numeric_2einner(-9007199254740991, ""));
      }
      default: {
        return new _M0DTPC16result6ResultGORP217zhengxin_2dcoding4scss9SassValueRP217zhengxin_2dcoding4scss10ParseErrorE3Err(new _M0DTPC15error5Error47zhengxin_2dcoding_2fscss_2eParseError_2eInvalid("undefined standard module variable"));
      }
    }
  }
  let owner;
  let key;
  _L: {
    const _bind$3 = _M0MP217zhengxin_2dcoding4scss5Scope16qualified__owner(self, name);
    let _bind$4;
    if (_bind$3.$tag === 1) {
      const _ok = _bind$3;
      _bind$4 = _ok._0;
    } else {
      return _bind$3;
    }
    const _owner = _bind$4._0;
    const _key = _bind$4._1;
    owner = _owner;
    key = _key;
    break _L;
  }
  return new _M0DTPC16result6ResultGORP217zhengxin_2dcoding4scss9SassValueRP217zhengxin_2dcoding4scss10ParseErrorE2Ok(_M0MPB3Map3getGsRP217zhengxin_2dcoding4scss9SassValueE(owner.vars, key));
}
function _M0FP217zhengxin_2dcoding4scss12same__origin(a, b) {
  return a._0.path === b._0.path && a._1 === b._1;
}
function _M0MP217zhengxin_2dcoding4scss5Scope14star__variable(self, name) {
  const result = new _M0TPB8MutLocalGOURP217zhengxin_2dcoding4scss5ScopesEE(undefined);
  const _bind$2 = self.star_scopes;
  const _bind$3 = _bind$2.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind$3) {
      const library = _bind$2[_];
      let origin;
      _L: {
        _L$2: {
          const _bind$4 = _M0MP217zhengxin_2dcoding4scss5Scope16public__variable(library, name);
          if (_bind$4 === undefined) {
          } else {
            const _Some = _bind$4;
            const _origin = _Some;
            origin = _origin;
            break _L$2;
          }
          break _L;
        }
        let previous;
        _L$3: {
          _L$4: {
            const _bind$4 = result.val;
            if (_bind$4 === undefined) {
            } else {
              const _Some = _bind$4;
              const _previous = _Some;
              previous = _previous;
              break _L$4;
            }
            break _L$3;
          }
          if (!_M0FP217zhengxin_2dcoding4scss12same__origin(previous, origin)) {
            return new _M0DTPC16result6ResultGOURP217zhengxin_2dcoding4scss5ScopesERP217zhengxin_2dcoding4scss10ParseErrorE3Err(new _M0DTPC15error5Error47zhengxin_2dcoding_2fscss_2eParseError_2eInvalid("ambiguous global module variable"));
          }
        }
        result.val = origin;
      }
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return new _M0DTPC16result6ResultGOURP217zhengxin_2dcoding4scss5ScopesERP217zhengxin_2dcoding4scss10ParseErrorE2Ok(result.val);
}
function _M0MP217zhengxin_2dcoding4scss5Scope3get(self, name) {
  let _tmp = self;
  let _tmp$2 = name;
  while (true) {
    const self$2 = _tmp;
    const name$2 = _tmp$2;
    const _bind$2 = ".";
    if (_M0MPC16string6String8contains(name$2, new _M0TPC16string10StringView(_bind$2, 0, _bind$2.length))) {
      const _bind$3 = _M0MP217zhengxin_2dcoding4scss5Scope19qualified__variable(self$2, name$2);
      let _tmp$3;
      if (_bind$3.$tag === 1) {
        const _ok = _bind$3;
        _tmp$3 = _ok._0;
      } else {
        return _bind$3;
      }
      return new _M0DTPC16result6ResultGORP217zhengxin_2dcoding4scss9SassValueRP217zhengxin_2dcoding4scss10ParseErrorE2Ok(_tmp$3);
    }
    let v;
    _L: {
      const _bind$3 = _M0MPB3Map3getGsRP217zhengxin_2dcoding4scss9SassValueE(self$2.vars, _M0FP217zhengxin_2dcoding4scss10identifier(name$2));
      if (_bind$3 === undefined) {
        let p;
        _L$2: {
          const _bind$4 = self$2.parent;
          if (_bind$4 === undefined) {
            let owner;
            let key;
            _L$3: {
              const _bind$5 = _M0MP217zhengxin_2dcoding4scss5Scope14star__variable(self$2, _M0FP217zhengxin_2dcoding4scss10identifier(name$2));
              let _bind$6;
              if (_bind$5.$tag === 1) {
                const _ok = _bind$5;
                _bind$6 = _ok._0;
              } else {
                return _bind$5;
              }
              if (_bind$6 === undefined) {
                return new _M0DTPC16result6ResultGORP217zhengxin_2dcoding4scss9SassValueRP217zhengxin_2dcoding4scss10ParseErrorE2Ok(undefined);
              } else {
                const _Some = _bind$6;
                const _x = _Some;
                const _owner = _x._0;
                const _key = _x._1;
                owner = _owner;
                key = _key;
                break _L$3;
              }
            }
            return new _M0DTPC16result6ResultGORP217zhengxin_2dcoding4scss9SassValueRP217zhengxin_2dcoding4scss10ParseErrorE2Ok(_M0MPB3Map3getGsRP217zhengxin_2dcoding4scss9SassValueE(owner.vars, key));
          } else {
            const _Some = _bind$4;
            const _p = _Some;
            p = _p;
            break _L$2;
          }
        }
        _tmp = p;
        continue;
      } else {
        const _Some = _bind$3;
        const _v = _Some;
        v = _v;
        break _L;
      }
    }
    return new _M0DTPC16result6ResultGORP217zhengxin_2dcoding4scss9SassValueRP217zhengxin_2dcoding4scss10ParseErrorE2Ok(v);
  }
}
function _M0MP217zhengxin_2dcoding4scss5Scope6global(self) {
  let _tmp = self;
  while (true) {
    const self$2 = _tmp;
    let p;
    _L: {
      const _bind$2 = self$2.parent;
      if (_bind$2 === undefined) {
        return self$2;
      } else {
        const _Some = _bind$2;
        const _p = _Some;
        p = _p;
        break _L;
      }
    }
    _tmp = p;
    continue;
  }
}
function _M0MP217zhengxin_2dcoding4scss5Scope16public__callable(self, name, function_) {
  if (!_M0FP217zhengxin_2dcoding4scss12public__name(name)) {
    return undefined;
  }
  if (function_) {
    let value;
    _L: {
      const _bind$2 = _M0MPB3Map3getGsRP217zhengxin_2dcoding4scss5MixinE(self.functions, name);
      if (_bind$2 === undefined) {
        return _M0MPB3Map3getGsRP217zhengxin_2dcoding4scss5MixinE(self.forwarded_functions, name);
      } else {
        const _Some = _bind$2;
        const _value = _Some;
        value = _value;
        break _L;
      }
    }
    return value;
  } else {
    let value;
    _L: {
      const _bind$2 = _M0MPB3Map3getGsRP217zhengxin_2dcoding4scss5MixinE(self.mixins, name);
      if (_bind$2 === undefined) {
        return _M0MPB3Map3getGsRP217zhengxin_2dcoding4scss5MixinE(self.forwarded_mixins, name);
      } else {
        const _Some = _bind$2;
        const _value = _Some;
        value = _value;
        break _L;
      }
    }
    return value;
  }
}
function _M0MP217zhengxin_2dcoding4scss5Scope19qualified__callable(self, name, function_) {
  const _bind$2 = ".";
  const parts = _M0MPB4Iter9to__arrayGRPC16string10StringViewE(_M0MPC16string6String5split(name, new _M0TPC16string10StringView(_bind$2, 0, _bind$2.length)));
  if (parts.length !== 2) {
    return new _M0DTPC16result6ResultGORP217zhengxin_2dcoding4scss5MixinRP217zhengxin_2dcoding4scss10ParseErrorE3Err(new _M0DTPC15error5Error47zhengxin_2dcoding_2fscss_2eParseError_2eInvalid("invalid module callable"));
  }
  const prefix = _M0MPC16string10StringView9to__owned(_M0MPC15array5Array2atGRPB4JsonE(parts, 0));
  const _bind$3 = _M0MP217zhengxin_2dcoding4scss5Scope8standard(self, prefix);
  if (_bind$3 === undefined) {
  } else {
    return new _M0DTPC16result6ResultGORP217zhengxin_2dcoding4scss5MixinRP217zhengxin_2dcoding4scss10ParseErrorE2Ok(undefined);
  }
  let library;
  const _bind$4 = _M0MP217zhengxin_2dcoding4scss5Scope12find__module(self, prefix);
  if (_bind$4 === undefined) {
    return new _M0DTPC16result6ResultGORP217zhengxin_2dcoding4scss5MixinRP217zhengxin_2dcoding4scss10ParseErrorE3Err(new _M0DTPC15error5Error47zhengxin_2dcoding_2fscss_2eParseError_2eInvalid(`undefined module ${prefix}`));
  } else {
    const _Some = _bind$4;
    const _frame = _Some;
    library = _frame;
  }
  return new _M0DTPC16result6ResultGORP217zhengxin_2dcoding4scss5MixinRP217zhengxin_2dcoding4scss10ParseErrorE2Ok(_M0MP217zhengxin_2dcoding4scss5Scope16public__callable(library, _M0MPC16string10StringView9to__owned(_M0MPC15array5Array2atGRPB4JsonE(parts, 1)), function_));
}
function _M0MP217zhengxin_2dcoding4scss5Scope14star__callable(self, name, function_) {
  const result = new _M0TPB8MutLocalGORP217zhengxin_2dcoding4scss5MixinE(undefined);
  const _bind$2 = self.star_scopes;
  const _bind$3 = _bind$2.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind$3) {
      const library = _bind$2[_];
      let value;
      _L: {
        _L$2: {
          const _bind$4 = _M0MP217zhengxin_2dcoding4scss5Scope16public__callable(library, name, function_);
          if (_bind$4 === undefined) {
          } else {
            const _Some = _bind$4;
            const _value = _Some;
            value = _value;
            break _L$2;
          }
          break _L;
        }
        let previous;
        _L$3: {
          _L$4: {
            const _bind$4 = result.val;
            if (_bind$4 === undefined) {
            } else {
              const _Some = _bind$4;
              const _previous = _Some;
              previous = _previous;
              break _L$4;
            }
            break _L$3;
          }
          _L$5: {
            _L$6: {
              if (_M0IP016_24default__implPB2Eq10not__equalGsE(previous.scope.path, value.scope.path)) {
                break _L$6;
              } else {
                if (_M0IP016_24default__implPB2Eq10not__equalGsE(previous.name, value.name)) {
                  break _L$6;
                }
              }
              break _L$5;
            }
            return new _M0DTPC16result6ResultGORP217zhengxin_2dcoding4scss5MixinRP217zhengxin_2dcoding4scss10ParseErrorE3Err(new _M0DTPC15error5Error47zhengxin_2dcoding_2fscss_2eParseError_2eInvalid("ambiguous global module callable"));
          }
        }
        result.val = value;
      }
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return new _M0DTPC16result6ResultGORP217zhengxin_2dcoding4scss5MixinRP217zhengxin_2dcoding4scss10ParseErrorE2Ok(result.val);
}
function _M0MP217zhengxin_2dcoding4scss5Scope16lookup__function(self, name) {
  let _tmp = self;
  let _tmp$2 = name;
  while (true) {
    const self$2 = _tmp;
    const name$2 = _tmp$2;
    const _bind$2 = ".";
    if (_M0MPC16string6String8contains(name$2, new _M0TPC16string10StringView(_bind$2, 0, _bind$2.length))) {
      const _bind$3 = _M0MP217zhengxin_2dcoding4scss5Scope19qualified__callable(self$2, name$2, true);
      let _tmp$3;
      if (_bind$3.$tag === 1) {
        const _ok = _bind$3;
        _tmp$3 = _ok._0;
      } else {
        return _bind$3;
      }
      return new _M0DTPC16result6ResultGORP217zhengxin_2dcoding4scss5MixinRP217zhengxin_2dcoding4scss10ParseErrorE2Ok(_tmp$3);
    }
    let value;
    _L: {
      const _bind$3 = _M0MPB3Map3getGsRP217zhengxin_2dcoding4scss5MixinE(self$2.functions, name$2);
      if (_bind$3 === undefined) {
        let parent;
        _L$2: {
          const _bind$4 = self$2.parent;
          if (_bind$4 === undefined) {
            return _M0MP217zhengxin_2dcoding4scss5Scope14star__callable(self$2, name$2, true);
          } else {
            const _Some = _bind$4;
            const _parent = _Some;
            parent = _parent;
            break _L$2;
          }
        }
        _tmp = parent;
        continue;
      } else {
        const _Some = _bind$3;
        const _value = _Some;
        value = _value;
        break _L;
      }
    }
    return new _M0DTPC16result6ResultGORP217zhengxin_2dcoding4scss5MixinRP217zhengxin_2dcoding4scss10ParseErrorE2Ok(value);
  }
}
function _M0MP217zhengxin_2dcoding4scss5Scope13lookup__mixin(self, name) {
  let _tmp = self;
  let _tmp$2 = name;
  while (true) {
    const self$2 = _tmp;
    const name$2 = _tmp$2;
    const _bind$2 = ".";
    if (_M0MPC16string6String8contains(name$2, new _M0TPC16string10StringView(_bind$2, 0, _bind$2.length))) {
      const _bind$3 = _M0MP217zhengxin_2dcoding4scss5Scope19qualified__callable(self$2, name$2, false);
      let _tmp$3;
      if (_bind$3.$tag === 1) {
        const _ok = _bind$3;
        _tmp$3 = _ok._0;
      } else {
        return _bind$3;
      }
      return new _M0DTPC16result6ResultGORP217zhengxin_2dcoding4scss5MixinRP217zhengxin_2dcoding4scss10ParseErrorE2Ok(_tmp$3);
    }
    let v;
    _L: {
      const _bind$3 = _M0MPB3Map3getGsRP217zhengxin_2dcoding4scss5MixinE(self$2.mixins, _M0FP217zhengxin_2dcoding4scss10identifier(name$2));
      if (_bind$3 === undefined) {
        let p;
        _L$2: {
          const _bind$4 = self$2.parent;
          if (_bind$4 === undefined) {
            return _M0MP217zhengxin_2dcoding4scss5Scope14star__callable(self$2, _M0FP217zhengxin_2dcoding4scss10identifier(name$2), false);
          } else {
            const _Some = _bind$4;
            const _p = _Some;
            p = _p;
            break _L$2;
          }
        }
        _tmp = p;
        continue;
      } else {
        const _Some = _bind$3;
        const _v = _Some;
        v = _v;
        break _L;
      }
    }
    return new _M0DTPC16result6ResultGORP217zhengxin_2dcoding4scss5MixinRP217zhengxin_2dcoding4scss10ParseErrorE2Ok(v);
  }
}
function _M0FP217zhengxin_2dcoding4scss7builtin(scope, original, positional, keywords) {
  const _bind$2 = ".";
  const pieces = _M0MPB4Iter9to__arrayGRPC16string10StringViewE(_M0MPC16string6String5split(original, new _M0TPC16string10StringView(_bind$2, 0, _bind$2.length)));
  let name;
  if (pieces.length === 2) {
    const library = _M0MPC16option6Option10unwrap__orGRP217zhengxin_2dcoding4scss9SassValueE(_M0MP217zhengxin_2dcoding4scss5Scope8standard(scope, _M0MPC16string10StringView9to__owned(_M0MPC15array5Array2atGRPB4JsonE(pieces, 0))), "");
    if (_M0MPC16string6String9is__empty(library)) {
      return new _M0DTPC16result6ResultGORP217zhengxin_2dcoding4scss9SassValueRP217zhengxin_2dcoding4scss10ParseErrorE2Ok(undefined);
    }
    name = `${library}.${_M0MPC16string10StringView9to__owned(_M0MPC15array5Array2atGRPB4JsonE(pieces, 1))}`;
  } else {
    name = original;
  }
  let value;
  _L: {
    _L$2: {
      const _bind$3 = _M0FP217zhengxin_2dcoding4scss14color__builtin(name, positional, keywords);
      let _bind$4;
      if (_bind$3.$tag === 1) {
        const _ok = _bind$3;
        _bind$4 = _ok._0;
      } else {
        return _bind$3;
      }
      if (_bind$4 === undefined) {
      } else {
        const _Some = _bind$4;
        const _value = _Some;
        value = _value;
        break _L$2;
      }
      break _L;
    }
    return new _M0DTPC16result6ResultGORP217zhengxin_2dcoding4scss9SassValueRP217zhengxin_2dcoding4scss10ParseErrorE2Ok(value);
  }
  let spec;
  _L$2: {
    _L$3: {
      _L$4: {
        _L$5: {
          _L$6: {
            _L$7: {
              _L$8: {
                _L$9: {
                  _L$10: {
                    _L$11: {
                      _L$12: {
                        _L$13: {
                          _L$14: {
                            _L$15: {
                              _L$16: {
                                _L$17: {
                                  _L$18: {
                                    _L$19: {
                                      _L$20: {
                                        _L$21: {
                                          _L$22: {
                                            _L$23: {
                                              _L$24: {
                                                _L$25: {
                                                  _L$26: {
                                                    _L$27: {
                                                      _L$28: {
                                                        _L$29: {
                                                          _L$30: {
                                                            _L$31: {
                                                              _L$32: {
                                                                _L$33: {
                                                                  _L$34: {
                                                                    _L$35: {
                                                                      _L$36: {
                                                                        _L$37: {
                                                                          _L$38: {
                                                                            _L$39: {
                                                                              _L$40: {
                                                                                _L$41: {
                                                                                  switch (name) {
                                                                                    case "math.div": {
                                                                                      spec = ["number1", "number2"];
                                                                                      break;
                                                                                    }
                                                                                    case "abs": {
                                                                                      break _L$41;
                                                                                    }
                                                                                    case "math.abs": {
                                                                                      break _L$41;
                                                                                    }
                                                                                    case "ceil": {
                                                                                      break _L$41;
                                                                                    }
                                                                                    case "math.ceil": {
                                                                                      break _L$41;
                                                                                    }
                                                                                    case "floor": {
                                                                                      break _L$41;
                                                                                    }
                                                                                    case "math.floor": {
                                                                                      break _L$41;
                                                                                    }
                                                                                    case "round": {
                                                                                      break _L$41;
                                                                                    }
                                                                                    case "math.round": {
                                                                                      break _L$41;
                                                                                    }
                                                                                    case "percentage": {
                                                                                      break _L$41;
                                                                                    }
                                                                                    case "math.percentage": {
                                                                                      break _L$41;
                                                                                    }
                                                                                    case "unit": {
                                                                                      break _L$41;
                                                                                    }
                                                                                    case "math.unit": {
                                                                                      break _L$41;
                                                                                    }
                                                                                    case "unitless": {
                                                                                      break _L$41;
                                                                                    }
                                                                                    case "math.is-unitless": {
                                                                                      break _L$41;
                                                                                    }
                                                                                    case "comparable": {
                                                                                      break _L$39;
                                                                                    }
                                                                                    case "math.compatible": {
                                                                                      break _L$39;
                                                                                    }
                                                                                    case "math.pow": {
                                                                                      spec = ["base", "exponent"];
                                                                                      break;
                                                                                    }
                                                                                    case "math.sqrt": {
                                                                                      spec = ["number"];
                                                                                      break;
                                                                                    }
                                                                                    case "length": {
                                                                                      break _L$37;
                                                                                    }
                                                                                    case "list.length": {
                                                                                      break _L$37;
                                                                                    }
                                                                                    case "list.separator": {
                                                                                      break _L$37;
                                                                                    }
                                                                                    case "list.is-bracketed": {
                                                                                      break _L$37;
                                                                                    }
                                                                                    case "nth": {
                                                                                      break _L$35;
                                                                                    }
                                                                                    case "list.nth": {
                                                                                      break _L$35;
                                                                                    }
                                                                                    case "set-nth": {
                                                                                      break _L$33;
                                                                                    }
                                                                                    case "list.set-nth": {
                                                                                      break _L$33;
                                                                                    }
                                                                                    case "index": {
                                                                                      break _L$31;
                                                                                    }
                                                                                    case "list.index": {
                                                                                      break _L$31;
                                                                                    }
                                                                                    case "append": {
                                                                                      break _L$29;
                                                                                    }
                                                                                    case "list.append": {
                                                                                      break _L$29;
                                                                                    }
                                                                                    case "join": {
                                                                                      break _L$27;
                                                                                    }
                                                                                    case "list.join": {
                                                                                      break _L$27;
                                                                                    }
                                                                                    case "list.slash": {
                                                                                      spec = [];
                                                                                      break;
                                                                                    }
                                                                                    case "map-get": {
                                                                                      break _L$25;
                                                                                    }
                                                                                    case "map.get": {
                                                                                      break _L$25;
                                                                                    }
                                                                                    case "map-has-key": {
                                                                                      break _L$25;
                                                                                    }
                                                                                    case "map.has-key": {
                                                                                      break _L$25;
                                                                                    }
                                                                                    case "map-keys": {
                                                                                      break _L$23;
                                                                                    }
                                                                                    case "map.keys": {
                                                                                      break _L$23;
                                                                                    }
                                                                                    case "map-values": {
                                                                                      break _L$23;
                                                                                    }
                                                                                    case "map.values": {
                                                                                      break _L$23;
                                                                                    }
                                                                                    case "map-merge": {
                                                                                      break _L$21;
                                                                                    }
                                                                                    case "map.merge": {
                                                                                      break _L$21;
                                                                                    }
                                                                                    case "map-remove": {
                                                                                      break _L$19;
                                                                                    }
                                                                                    case "map.remove": {
                                                                                      break _L$19;
                                                                                    }
                                                                                    case "quote": {
                                                                                      break _L$17;
                                                                                    }
                                                                                    case "string.quote": {
                                                                                      break _L$17;
                                                                                    }
                                                                                    case "unquote": {
                                                                                      break _L$17;
                                                                                    }
                                                                                    case "string.unquote": {
                                                                                      break _L$17;
                                                                                    }
                                                                                    case "str-length": {
                                                                                      break _L$17;
                                                                                    }
                                                                                    case "string.length": {
                                                                                      break _L$17;
                                                                                    }
                                                                                    case "to-upper-case": {
                                                                                      break _L$17;
                                                                                    }
                                                                                    case "string.to-upper-case": {
                                                                                      break _L$17;
                                                                                    }
                                                                                    case "to-lower-case": {
                                                                                      break _L$17;
                                                                                    }
                                                                                    case "string.to-lower-case": {
                                                                                      break _L$17;
                                                                                    }
                                                                                    case "str-slice": {
                                                                                      break _L$15;
                                                                                    }
                                                                                    case "string.slice": {
                                                                                      break _L$15;
                                                                                    }
                                                                                    case "str-index": {
                                                                                      break _L$13;
                                                                                    }
                                                                                    case "string.index": {
                                                                                      break _L$13;
                                                                                    }
                                                                                    case "str-insert": {
                                                                                      break _L$11;
                                                                                    }
                                                                                    case "string.insert": {
                                                                                      break _L$11;
                                                                                    }
                                                                                    case "type-of": {
                                                                                      break _L$9;
                                                                                    }
                                                                                    case "meta.type-of": {
                                                                                      break _L$9;
                                                                                    }
                                                                                    case "inspect": {
                                                                                      break _L$9;
                                                                                    }
                                                                                    case "meta.inspect": {
                                                                                      break _L$9;
                                                                                    }
                                                                                    case "variable-exists": {
                                                                                      break _L$7;
                                                                                    }
                                                                                    case "meta.variable-exists": {
                                                                                      break _L$7;
                                                                                    }
                                                                                    case "global-variable-exists": {
                                                                                      break _L$7;
                                                                                    }
                                                                                    case "meta.global-variable-exists": {
                                                                                      break _L$7;
                                                                                    }
                                                                                    case "function-exists": {
                                                                                      break _L$5;
                                                                                    }
                                                                                    case "meta.function-exists": {
                                                                                      break _L$5;
                                                                                    }
                                                                                    case "mixin-exists": {
                                                                                      break _L$5;
                                                                                    }
                                                                                    case "meta.mixin-exists": {
                                                                                      break _L$5;
                                                                                    }
                                                                                    case "min": {
                                                                                      break _L$3;
                                                                                    }
                                                                                    case "math.min": {
                                                                                      break _L$3;
                                                                                    }
                                                                                    case "max": {
                                                                                      break _L$3;
                                                                                    }
                                                                                    case "math.max": {
                                                                                      break _L$3;
                                                                                    }
                                                                                    default: {
                                                                                      return new _M0DTPC16result6ResultGORP217zhengxin_2dcoding4scss9SassValueRP217zhengxin_2dcoding4scss10ParseErrorE2Ok(undefined);
                                                                                    }
                                                                                  }
                                                                                  break _L$40;
                                                                                }
                                                                                spec = ["number"];
                                                                              }
                                                                              break _L$38;
                                                                            }
                                                                            spec = ["number1", "number2"];
                                                                          }
                                                                          break _L$36;
                                                                        }
                                                                        spec = ["list"];
                                                                      }
                                                                      break _L$34;
                                                                    }
                                                                    spec = ["list", "n"];
                                                                  }
                                                                  break _L$32;
                                                                }
                                                                spec = ["list", "n", "value"];
                                                              }
                                                              break _L$30;
                                                            }
                                                            spec = ["list", "value"];
                                                          }
                                                          break _L$28;
                                                        }
                                                        spec = ["list", "val", "separator"];
                                                      }
                                                      break _L$26;
                                                    }
                                                    spec = ["list1", "list2", "separator", "bracketed"];
                                                  }
                                                  break _L$24;
                                                }
                                                spec = ["map", "key"];
                                              }
                                              break _L$22;
                                            }
                                            spec = ["map"];
                                          }
                                          break _L$20;
                                        }
                                        spec = ["map1", "map2"];
                                      }
                                      break _L$18;
                                    }
                                    spec = ["map", "key"];
                                  }
                                  break _L$16;
                                }
                                spec = ["string"];
                              }
                              break _L$14;
                            }
                            spec = ["string", "start-at", "end-at"];
                          }
                          break _L$12;
                        }
                        spec = ["string", "substring"];
                      }
                      break _L$10;
                    }
                    spec = ["string", "insert", "index"];
                  }
                  break _L$8;
                }
                spec = ["value"];
              }
              break _L$6;
            }
            spec = ["name"];
          }
          break _L$4;
        }
        spec = ["name"];
      }
      break _L$2;
    }
    spec = [];
  }
  const variadic = _M0MPC15array5Array8containsGsE(["min", "math.min", "max", "math.max", "list.slash", "map-remove", "map.remove"], name);
  const args = _M0MPC15array5Array4copyGsE(positional);
  const _bind$3 = [];
  const supplied = _M0MPB3Map3MapGibE(new _M0TPB9ArrayViewGUibEE(_bind$3, 0, 0), undefined);
  const _bind$4 = 0;
  const _bind$5 = positional.length;
  let _tmp = _bind$4;
  while (true) {
    const i = _tmp;
    if (i < _bind$5) {
      _M0MPB3Map3setGibE(supplied, i, true);
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const _bind$6 = 0;
  const _bind$7 = spec.length;
  let _tmp$2 = _bind$6;
  while (true) {
    const i = _tmp$2;
    if (i < _bind$7) {
      let value$2;
      _L$3: {
        _L$4: {
          const _bind$8 = _M0MPB3Map3getGsRP217zhengxin_2dcoding4scss9SassValueE(keywords, _M0MPC15array5Array2atGRPB4JsonE(spec, i));
          if (_bind$8 === undefined) {
          } else {
            const _Some = _bind$8;
            const _value = _Some;
            value$2 = _value;
            break _L$4;
          }
          break _L$3;
        }
        if (i < args.length) {
          return new _M0DTPC16result6ResultGORP217zhengxin_2dcoding4scss9SassValueRP217zhengxin_2dcoding4scss10ParseErrorE3Err(new _M0DTPC15error5Error47zhengxin_2dcoding_2fscss_2eParseError_2eInvalid("argument supplied twice"));
        }
        while (true) {
          if (args.length < i) {
            _M0MPC15array5Array4pushGRPC14json10WriteFrameE(args, _M0DTP217zhengxin_2dcoding4scss9SassValue4Null__);
            continue;
          } else {
            break;
          }
        }
        _M0MPC15array5Array4pushGRPC14json10WriteFrameE(args, value$2);
        _M0MPB3Map6removeGsRP217zhengxin_2dcoding4scss9SassValueE(keywords, _M0MPC15array5Array2atGRPB4JsonE(spec, i));
        _M0MPB3Map3setGibE(supplied, i, true);
      }
      _tmp$2 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  if (!_M0MPB3Map9is__emptyGssE(keywords)) {
    return new _M0DTPC16result6ResultGORP217zhengxin_2dcoding4scss9SassValueRP217zhengxin_2dcoding4scss10ParseErrorE3Err(new _M0DTPC15error5Error47zhengxin_2dcoding_2fscss_2eParseError_2eInvalid("unknown builtin keyword"));
  }
  if (!variadic && args.length > spec.length) {
    return new _M0DTPC16result6ResultGORP217zhengxin_2dcoding4scss9SassValueRP217zhengxin_2dcoding4scss10ParseErrorE3Err(new _M0DTPC15error5Error47zhengxin_2dcoding_2fscss_2eParseError_2eInvalid("too many builtin arguments"));
  }
  let minimum;
  switch (name) {
    case "append": {
      minimum = 2;
      break;
    }
    case "list.append": {
      minimum = 2;
      break;
    }
    case "join": {
      minimum = 2;
      break;
    }
    case "list.join": {
      minimum = 2;
      break;
    }
    case "str-slice": {
      minimum = 2;
      break;
    }
    case "string.slice": {
      minimum = 2;
      break;
    }
    case "min": {
      minimum = 1;
      break;
    }
    case "math.min": {
      minimum = 1;
      break;
    }
    case "max": {
      minimum = 1;
      break;
    }
    case "math.max": {
      minimum = 1;
      break;
    }
    case "list.slash": {
      minimum = 2;
      break;
    }
    default: {
      minimum = spec.length;
    }
  }
  if (args.length < minimum) {
    return new _M0DTPC16result6ResultGORP217zhengxin_2dcoding4scss9SassValueRP217zhengxin_2dcoding4scss10ParseErrorE3Err(new _M0DTPC15error5Error47zhengxin_2dcoding_2fscss_2eParseError_2eInvalid("missing builtin argument"));
  }
  const _bind$8 = 0;
  let _tmp$3 = _bind$8;
  while (true) {
    const i = _tmp$3;
    if (i < minimum) {
      if (!_M0MPB3Map8containsGibE(supplied, i)) {
        return new _M0DTPC16result6ResultGORP217zhengxin_2dcoding4scss9SassValueRP217zhengxin_2dcoding4scss10ParseErrorE3Err(new _M0DTPC15error5Error47zhengxin_2dcoding_2fscss_2eParseError_2eInvalid("missing builtin argument"));
      }
      _tmp$3 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const at = (i) => _M0MPC16option6Option10unwrap__orGRP217zhengxin_2dcoding4scss9SassValueE(_M0MPC15array5Array3getGRP217zhengxin_2dcoding4scss9SassValueE(args, i), _M0DTP217zhengxin_2dcoding4scss9SassValue4Null__);
  let result;
  _L$3: {
    _L$4: {
      _L$5: {
        _L$6: {
          _L$7: {
            _L$8: {
              _L$9: {
                _L$10: {
                  _L$11: {
                    _L$12: {
                      _L$13: {
                        _L$14: {
                          _L$15: {
                            _L$16: {
                              _L$17: {
                                _L$18: {
                                  _L$19: {
                                    _L$20: {
                                      _L$21: {
                                        _L$22: {
                                          _L$23: {
                                            _L$24: {
                                              _L$25: {
                                                _L$26: {
                                                  _L$27: {
                                                    _L$28: {
                                                      _L$29: {
                                                        _L$30: {
                                                          _L$31: {
                                                            _L$32: {
                                                              _L$33: {
                                                                _L$34: {
                                                                  _L$35: {
                                                                    _L$36: {
                                                                      _L$37: {
                                                                        _L$38: {
                                                                          _L$39: {
                                                                            _L$40: {
                                                                              _L$41: {
                                                                                _L$42: {
                                                                                  _L$43: {
                                                                                    _L$44: {
                                                                                      _L$45: {
                                                                                        _L$46: {
                                                                                          _L$47: {
                                                                                            _L$48: {
                                                                                              _L$49: {
                                                                                                _L$50: {
                                                                                                  _L$51: {
                                                                                                    _L$52: {
                                                                                                      _L$53: {
                                                                                                        _L$54: {
                                                                                                          _L$55: {
                                                                                                            _L$56: {
                                                                                                              _L$57: {
                                                                                                                _L$58: {
                                                                                                                  _L$59: {
                                                                                                                    _L$60: {
                                                                                                                      switch (name) {
                                                                                                                        case "math.div": {
                                                                                                                          const _bind$9 = _M0FP217zhengxin_2dcoding4scss13binary__value("/", at(0), at(1));
                                                                                                                          if (_bind$9.$tag === 1) {
                                                                                                                            const _ok = _bind$9;
                                                                                                                            result = _ok._0;
                                                                                                                          } else {
                                                                                                                            return _bind$9;
                                                                                                                          }
                                                                                                                          break;
                                                                                                                        }
                                                                                                                        case "abs": {
                                                                                                                          break _L$60;
                                                                                                                        }
                                                                                                                        case "math.abs": {
                                                                                                                          break _L$60;
                                                                                                                        }
                                                                                                                        case "ceil": {
                                                                                                                          break _L$60;
                                                                                                                        }
                                                                                                                        case "math.ceil": {
                                                                                                                          break _L$60;
                                                                                                                        }
                                                                                                                        case "floor": {
                                                                                                                          break _L$60;
                                                                                                                        }
                                                                                                                        case "math.floor": {
                                                                                                                          break _L$60;
                                                                                                                        }
                                                                                                                        case "round": {
                                                                                                                          break _L$60;
                                                                                                                        }
                                                                                                                        case "math.round": {
                                                                                                                          break _L$60;
                                                                                                                        }
                                                                                                                        case "percentage": {
                                                                                                                          break _L$58;
                                                                                                                        }
                                                                                                                        case "math.percentage": {
                                                                                                                          break _L$58;
                                                                                                                        }
                                                                                                                        case "unit": {
                                                                                                                          break _L$56;
                                                                                                                        }
                                                                                                                        case "math.unit": {
                                                                                                                          break _L$56;
                                                                                                                        }
                                                                                                                        case "unitless": {
                                                                                                                          break _L$54;
                                                                                                                        }
                                                                                                                        case "math.is-unitless": {
                                                                                                                          break _L$54;
                                                                                                                        }
                                                                                                                        case "comparable": {
                                                                                                                          break _L$52;
                                                                                                                        }
                                                                                                                        case "math.compatible": {
                                                                                                                          break _L$52;
                                                                                                                        }
                                                                                                                        case "math.pow": {
                                                                                                                          break _L$50;
                                                                                                                        }
                                                                                                                        case "math.sqrt": {
                                                                                                                          break _L$50;
                                                                                                                        }
                                                                                                                        case "min": {
                                                                                                                          break _L$48;
                                                                                                                        }
                                                                                                                        case "math.min": {
                                                                                                                          break _L$48;
                                                                                                                        }
                                                                                                                        case "max": {
                                                                                                                          break _L$48;
                                                                                                                        }
                                                                                                                        case "math.max": {
                                                                                                                          break _L$48;
                                                                                                                        }
                                                                                                                        case "length": {
                                                                                                                          break _L$46;
                                                                                                                        }
                                                                                                                        case "list.length": {
                                                                                                                          break _L$46;
                                                                                                                        }
                                                                                                                        case "list.separator": {
                                                                                                                          let _tmp$4;
                                                                                                                          let sep;
                                                                                                                          _L$61: {
                                                                                                                            _L$62: {
                                                                                                                              const _bind$10 = at(0);
                                                                                                                              switch (_bind$10.$tag) {
                                                                                                                                case 5: {
                                                                                                                                  const _List = _bind$10;
                                                                                                                                  const _sep = _List._1;
                                                                                                                                  sep = _sep;
                                                                                                                                  break _L$62;
                                                                                                                                }
                                                                                                                                case 6: {
                                                                                                                                  _tmp$4 = "comma";
                                                                                                                                  break;
                                                                                                                                }
                                                                                                                                default: {
                                                                                                                                  _tmp$4 = "space";
                                                                                                                                }
                                                                                                                              }
                                                                                                                              break _L$61;
                                                                                                                            }
                                                                                                                            _tmp$4 = sep === "," ? "comma" : sep === " / " ? "slash" : "space";
                                                                                                                          }
                                                                                                                          result = new _M0DTP217zhengxin_2dcoding4scss9SassValue4Text(_tmp$4, false);
                                                                                                                          break;
                                                                                                                        }
                                                                                                                        case "list.is-bracketed": {
                                                                                                                          const _bind$10 = at(0);
                                                                                                                          let _tmp$5;
                                                                                                                          if (_bind$10.$tag === 5) {
                                                                                                                            const _List = _bind$10;
                                                                                                                            const _x = _List._2;
                                                                                                                            if (_x === true) {
                                                                                                                              _tmp$5 = true;
                                                                                                                            } else {
                                                                                                                              _tmp$5 = false;
                                                                                                                            }
                                                                                                                          } else {
                                                                                                                            _tmp$5 = false;
                                                                                                                          }
                                                                                                                          result = new _M0DTP217zhengxin_2dcoding4scss9SassValue7Boolean(_tmp$5);
                                                                                                                          break;
                                                                                                                        }
                                                                                                                        case "nth": {
                                                                                                                          break _L$44;
                                                                                                                        }
                                                                                                                        case "list.nth": {
                                                                                                                          break _L$44;
                                                                                                                        }
                                                                                                                        case "set-nth": {
                                                                                                                          break _L$42;
                                                                                                                        }
                                                                                                                        case "list.set-nth": {
                                                                                                                          break _L$42;
                                                                                                                        }
                                                                                                                        case "index": {
                                                                                                                          break _L$40;
                                                                                                                        }
                                                                                                                        case "list.index": {
                                                                                                                          break _L$40;
                                                                                                                        }
                                                                                                                        case "append": {
                                                                                                                          break _L$38;
                                                                                                                        }
                                                                                                                        case "list.append": {
                                                                                                                          break _L$38;
                                                                                                                        }
                                                                                                                        case "join": {
                                                                                                                          break _L$38;
                                                                                                                        }
                                                                                                                        case "list.join": {
                                                                                                                          break _L$38;
                                                                                                                        }
                                                                                                                        case "list.slash": {
                                                                                                                          result = new _M0DTP217zhengxin_2dcoding4scss9SassValue4List(args, " / ", false);
                                                                                                                          break;
                                                                                                                        }
                                                                                                                        case "map-get": {
                                                                                                                          break _L$36;
                                                                                                                        }
                                                                                                                        case "map.get": {
                                                                                                                          break _L$36;
                                                                                                                        }
                                                                                                                        case "map-has-key": {
                                                                                                                          break _L$36;
                                                                                                                        }
                                                                                                                        case "map.has-key": {
                                                                                                                          break _L$36;
                                                                                                                        }
                                                                                                                        case "map-keys": {
                                                                                                                          break _L$34;
                                                                                                                        }
                                                                                                                        case "map.keys": {
                                                                                                                          break _L$34;
                                                                                                                        }
                                                                                                                        case "map-values": {
                                                                                                                          break _L$32;
                                                                                                                        }
                                                                                                                        case "map.values": {
                                                                                                                          break _L$32;
                                                                                                                        }
                                                                                                                        case "map-merge": {
                                                                                                                          break _L$30;
                                                                                                                        }
                                                                                                                        case "map.merge": {
                                                                                                                          break _L$30;
                                                                                                                        }
                                                                                                                        case "map-remove": {
                                                                                                                          break _L$28;
                                                                                                                        }
                                                                                                                        case "map.remove": {
                                                                                                                          break _L$28;
                                                                                                                        }
                                                                                                                        case "quote": {
                                                                                                                          break _L$26;
                                                                                                                        }
                                                                                                                        case "string.quote": {
                                                                                                                          break _L$26;
                                                                                                                        }
                                                                                                                        case "unquote": {
                                                                                                                          break _L$26;
                                                                                                                        }
                                                                                                                        case "string.unquote": {
                                                                                                                          break _L$26;
                                                                                                                        }
                                                                                                                        case "str-length": {
                                                                                                                          break _L$24;
                                                                                                                        }
                                                                                                                        case "string.length": {
                                                                                                                          break _L$24;
                                                                                                                        }
                                                                                                                        case "to-upper-case": {
                                                                                                                          break _L$22;
                                                                                                                        }
                                                                                                                        case "string.to-upper-case": {
                                                                                                                          break _L$22;
                                                                                                                        }
                                                                                                                        case "to-lower-case": {
                                                                                                                          break _L$22;
                                                                                                                        }
                                                                                                                        case "string.to-lower-case": {
                                                                                                                          break _L$22;
                                                                                                                        }
                                                                                                                        case "str-slice": {
                                                                                                                          break _L$20;
                                                                                                                        }
                                                                                                                        case "string.slice": {
                                                                                                                          break _L$20;
                                                                                                                        }
                                                                                                                        case "str-index": {
                                                                                                                          break _L$18;
                                                                                                                        }
                                                                                                                        case "string.index": {
                                                                                                                          break _L$18;
                                                                                                                        }
                                                                                                                        case "str-insert": {
                                                                                                                          break _L$16;
                                                                                                                        }
                                                                                                                        case "string.insert": {
                                                                                                                          break _L$16;
                                                                                                                        }
                                                                                                                        case "type-of": {
                                                                                                                          break _L$14;
                                                                                                                        }
                                                                                                                        case "meta.type-of": {
                                                                                                                          break _L$14;
                                                                                                                        }
                                                                                                                        case "inspect": {
                                                                                                                          break _L$12;
                                                                                                                        }
                                                                                                                        case "meta.inspect": {
                                                                                                                          break _L$12;
                                                                                                                        }
                                                                                                                        case "variable-exists": {
                                                                                                                          break _L$10;
                                                                                                                        }
                                                                                                                        case "meta.variable-exists": {
                                                                                                                          break _L$10;
                                                                                                                        }
                                                                                                                        case "global-variable-exists": {
                                                                                                                          break _L$8;
                                                                                                                        }
                                                                                                                        case "meta.global-variable-exists": {
                                                                                                                          break _L$8;
                                                                                                                        }
                                                                                                                        case "function-exists": {
                                                                                                                          break _L$6;
                                                                                                                        }
                                                                                                                        case "meta.function-exists": {
                                                                                                                          break _L$6;
                                                                                                                        }
                                                                                                                        case "mixin-exists": {
                                                                                                                          break _L$4;
                                                                                                                        }
                                                                                                                        case "meta.mixin-exists": {
                                                                                                                          break _L$4;
                                                                                                                        }
                                                                                                                        default: {
                                                                                                                          return new _M0DTPC16result6ResultGORP217zhengxin_2dcoding4scss9SassValueRP217zhengxin_2dcoding4scss10ParseErrorE3Err(new _M0DTPC15error5Error47zhengxin_2dcoding_2fscss_2eParseError_2eInvalid("unimplemented builtin"));
                                                                                                                        }
                                                                                                                      }
                                                                                                                      break _L$59;
                                                                                                                    }
                                                                                                                    const _bind$9 = _M0FP217zhengxin_2dcoding4scss15require__number(at(0));
                                                                                                                    let n;
                                                                                                                    if (_bind$9.$tag === 1) {
                                                                                                                      const _ok = _bind$9;
                                                                                                                      n = _ok._0;
                                                                                                                    } else {
                                                                                                                      return _bind$9;
                                                                                                                    }
                                                                                                                    let _tmp$4;
                                                                                                                    const _bind$10 = "abs";
                                                                                                                    if (_M0MPC16string6String11has__suffix(name, new _M0TPC16string10StringView(_bind$10, 0, _bind$10.length))) {
                                                                                                                      _tmp$4 = Math.abs(n.amount);
                                                                                                                    } else {
                                                                                                                      const _bind$11 = "ceil";
                                                                                                                      if (_M0MPC16string6String11has__suffix(name, new _M0TPC16string10StringView(_bind$11, 0, _bind$11.length))) {
                                                                                                                        _tmp$4 = _M0MPC16double6Double4ceil(n.amount);
                                                                                                                      } else {
                                                                                                                        const _bind$12 = "floor";
                                                                                                                        if (_M0MPC16string6String11has__suffix(name, new _M0TPC16string10StringView(_bind$12, 0, _bind$12.length))) {
                                                                                                                          _tmp$4 = _M0MPC16double6Double5floor(n.amount);
                                                                                                                        } else {
                                                                                                                          _tmp$4 = n.amount < 0 ? -_M0MPC16double6Double5floor(Math.abs(n.amount) + 0.5) : _M0MPC16double6Double5floor(n.amount + 0.5);
                                                                                                                        }
                                                                                                                      }
                                                                                                                    }
                                                                                                                    result = new _M0DTP217zhengxin_2dcoding4scss9SassValue6Number(new _M0TP217zhengxin_2dcoding4scss10SassNumber(_tmp$4, n.numerator, n.denominator));
                                                                                                                  }
                                                                                                                  break _L$57;
                                                                                                                }
                                                                                                                const _bind$9 = _M0FP217zhengxin_2dcoding4scss15require__number(at(0));
                                                                                                                let n;
                                                                                                                if (_bind$9.$tag === 1) {
                                                                                                                  const _ok = _bind$9;
                                                                                                                  n = _ok._0;
                                                                                                                } else {
                                                                                                                  return _bind$9;
                                                                                                                }
                                                                                                                if (!_M0MP217zhengxin_2dcoding4scss10SassNumber8unitless(n)) {
                                                                                                                  return new _M0DTPC16result6ResultGORP217zhengxin_2dcoding4scss9SassValueRP217zhengxin_2dcoding4scss10ParseErrorE3Err(new _M0DTPC15error5Error47zhengxin_2dcoding_2fscss_2eParseError_2eInvalid("percentage expects unitless number"));
                                                                                                                }
                                                                                                                result = _M0FP217zhengxin_2dcoding4scss15numeric_2einner(n.amount * 100, "%");
                                                                                                              }
                                                                                                              break _L$55;
                                                                                                            }
                                                                                                            const _bind$9 = _M0FP217zhengxin_2dcoding4scss15require__number(at(0));
                                                                                                            let n;
                                                                                                            if (_bind$9.$tag === 1) {
                                                                                                              const _ok = _bind$9;
                                                                                                              n = _ok._0;
                                                                                                            } else {
                                                                                                              return _bind$9;
                                                                                                            }
                                                                                                            const _tmp$4 = n.numerator;
                                                                                                            const _bind$10 = "*";
                                                                                                            const _tmp$5 = _M0MPC15array5Array4joinGsE(_tmp$4, new _M0TPC16string10StringView(_bind$10, 0, _bind$10.length));
                                                                                                            let _tmp$6;
                                                                                                            if (_M0MPC15array5Array9is__emptyGRPB4JsonE(n.denominator)) {
                                                                                                              _tmp$6 = "";
                                                                                                            } else {
                                                                                                              const _tmp$7 = n.denominator;
                                                                                                              const _bind$11 = "*";
                                                                                                              _tmp$6 = `/${_M0MPC15array5Array4joinGsE(_tmp$7, new _M0TPC16string10StringView(_bind$11, 0, _bind$11.length))}`;
                                                                                                            }
                                                                                                            result = new _M0DTP217zhengxin_2dcoding4scss9SassValue4Text(`${_tmp$5}${_tmp$6}`, true);
                                                                                                          }
                                                                                                          break _L$53;
                                                                                                        }
                                                                                                        const _bind$9 = _M0FP217zhengxin_2dcoding4scss15require__number(at(0));
                                                                                                        let _tmp$4;
                                                                                                        if (_bind$9.$tag === 1) {
                                                                                                          const _ok = _bind$9;
                                                                                                          _tmp$4 = _ok._0;
                                                                                                        } else {
                                                                                                          return _bind$9;
                                                                                                        }
                                                                                                        result = new _M0DTP217zhengxin_2dcoding4scss9SassValue7Boolean(_M0MP217zhengxin_2dcoding4scss10SassNumber8unitless(_tmp$4));
                                                                                                      }
                                                                                                      break _L$51;
                                                                                                    }
                                                                                                    const _bind$9 = _M0FP217zhengxin_2dcoding4scss15require__number(at(0));
                                                                                                    let _tmp$4;
                                                                                                    if (_bind$9.$tag === 1) {
                                                                                                      const _ok = _bind$9;
                                                                                                      _tmp$4 = _ok._0;
                                                                                                    } else {
                                                                                                      return _bind$9;
                                                                                                    }
                                                                                                    const _tmp$5 = _tmp$4;
                                                                                                    const _bind$10 = _M0FP217zhengxin_2dcoding4scss15require__number(at(1));
                                                                                                    let _tmp$6;
                                                                                                    if (_bind$10.$tag === 1) {
                                                                                                      const _ok = _bind$10;
                                                                                                      _tmp$6 = _ok._0;
                                                                                                    } else {
                                                                                                      return _bind$10;
                                                                                                    }
                                                                                                    const _bind$11 = _M0MP217zhengxin_2dcoding4scss10SassNumber15convert_2einner(_tmp$5, _tmp$6, true);
                                                                                                    let _tmp$7;
                                                                                                    if (_bind$11.$tag === 1) {
                                                                                                      _tmp$7 = true;
                                                                                                    } else {
                                                                                                      _tmp$7 = false;
                                                                                                    }
                                                                                                    result = new _M0DTP217zhengxin_2dcoding4scss9SassValue7Boolean(_tmp$7);
                                                                                                  }
                                                                                                  break _L$49;
                                                                                                }
                                                                                                const _bind$9 = _M0FP217zhengxin_2dcoding4scss15require__number(at(0));
                                                                                                let n;
                                                                                                if (_bind$9.$tag === 1) {
                                                                                                  const _ok = _bind$9;
                                                                                                  n = _ok._0;
                                                                                                } else {
                                                                                                  return _bind$9;
                                                                                                }
                                                                                                if (!_M0MP217zhengxin_2dcoding4scss10SassNumber8unitless(n)) {
                                                                                                  return new _M0DTPC16result6ResultGORP217zhengxin_2dcoding4scss9SassValueRP217zhengxin_2dcoding4scss10ParseErrorE3Err(new _M0DTPC15error5Error47zhengxin_2dcoding_2fscss_2eParseError_2eInvalid("math function expects unitless number"));
                                                                                                }
                                                                                                if (name === "math.sqrt") {
                                                                                                  result = _M0FP217zhengxin_2dcoding4scss15numeric_2einner(Math.sqrt(n.amount), "");
                                                                                                } else {
                                                                                                  const _bind$10 = _M0FP217zhengxin_2dcoding4scss15require__number(at(1));
                                                                                                  let power;
                                                                                                  if (_bind$10.$tag === 1) {
                                                                                                    const _ok = _bind$10;
                                                                                                    power = _ok._0;
                                                                                                  } else {
                                                                                                    return _bind$10;
                                                                                                  }
                                                                                                  if (!_M0MP217zhengxin_2dcoding4scss10SassNumber8unitless(power)) {
                                                                                                    return new _M0DTPC16result6ResultGORP217zhengxin_2dcoding4scss9SassValueRP217zhengxin_2dcoding4scss10ParseErrorE3Err(new _M0DTPC15error5Error47zhengxin_2dcoding_2fscss_2eParseError_2eInvalid("power must be unitless"));
                                                                                                  }
                                                                                                  result = _M0FP217zhengxin_2dcoding4scss15numeric_2einner(_M0FPC14math3pow(n.amount, power.amount), "");
                                                                                                }
                                                                                              }
                                                                                              break _L$47;
                                                                                            }
                                                                                            const _bind$9 = _M0FP217zhengxin_2dcoding4scss15require__number(_M0MPC15array5Array2atGRPB4JsonE(args, 0));
                                                                                            let _tmp$4;
                                                                                            if (_bind$9.$tag === 1) {
                                                                                              const _ok = _bind$9;
                                                                                              _tmp$4 = _ok._0;
                                                                                            } else {
                                                                                              return _bind$9;
                                                                                            }
                                                                                            const best = new _M0TPB8MutLocalGRP217zhengxin_2dcoding4scss10SassNumberE(_tmp$4);
                                                                                            const _bind$10 = _M0MPC15array5Array12view_2einnerGsE(args, 1, undefined);
                                                                                            const _bind$11 = _bind$10.end - _bind$10.start | 0;
                                                                                            let _tmp$5 = 0;
                                                                                            while (true) {
                                                                                              const _ = _tmp$5;
                                                                                              if (_ < _bind$11) {
                                                                                                const value$2 = _bind$10.buf[_bind$10.start + _ | 0];
                                                                                                const _bind$12 = _M0FP217zhengxin_2dcoding4scss15require__number(value$2);
                                                                                                let n;
                                                                                                if (_bind$12.$tag === 1) {
                                                                                                  const _ok = _bind$12;
                                                                                                  n = _ok._0;
                                                                                                } else {
                                                                                                  return _bind$12;
                                                                                                }
                                                                                                let converted;
                                                                                                const _bind$13 = _M0MP217zhengxin_2dcoding4scss10SassNumber15convert_2einner(n, best.val, true);
                                                                                                if (_bind$13.$tag === 1) {
                                                                                                  const _Some = _bind$13;
                                                                                                  const _v = _Some._0;
                                                                                                  converted = _v;
                                                                                                } else {
                                                                                                  return new _M0DTPC16result6ResultGORP217zhengxin_2dcoding4scss9SassValueRP217zhengxin_2dcoding4scss10ParseErrorE3Err(new _M0DTPC15error5Error47zhengxin_2dcoding_2fscss_2eParseError_2eInvalid("incompatible min/max units"));
                                                                                                }
                                                                                                let _tmp$6;
                                                                                                let _tmp$7;
                                                                                                const _bind$14 = "min";
                                                                                                if (_M0MPC16string6String11has__suffix(name, new _M0TPC16string10StringView(_bind$14, 0, _bind$14.length))) {
                                                                                                  _tmp$7 = converted < best.val.amount;
                                                                                                } else {
                                                                                                  _tmp$7 = false;
                                                                                                }
                                                                                                if (_tmp$7) {
                                                                                                  _tmp$6 = true;
                                                                                                } else {
                                                                                                  let _tmp$8;
                                                                                                  const _bind$15 = "max";
                                                                                                  if (_M0MPC16string6String11has__suffix(name, new _M0TPC16string10StringView(_bind$15, 0, _bind$15.length))) {
                                                                                                    _tmp$8 = converted > best.val.amount;
                                                                                                  } else {
                                                                                                    _tmp$8 = false;
                                                                                                  }
                                                                                                  _tmp$6 = _tmp$8;
                                                                                                }
                                                                                                if (_tmp$6) {
                                                                                                  best.val = n;
                                                                                                }
                                                                                                _tmp$5 = _ + 1 | 0;
                                                                                                continue;
                                                                                              } else {
                                                                                                break;
                                                                                              }
                                                                                            }
                                                                                            result = new _M0DTP217zhengxin_2dcoding4scss9SassValue6Number(best.val);
                                                                                          }
                                                                                          break _L$45;
                                                                                        }
                                                                                        result = _M0FP217zhengxin_2dcoding4scss15numeric_2einner(_M0MP217zhengxin_2dcoding4scss9SassValue5items(at(0)).length + 0, "");
                                                                                      }
                                                                                      break _L$43;
                                                                                    }
                                                                                    const values = _M0MP217zhengxin_2dcoding4scss9SassValue5items(at(0));
                                                                                    const _bind$9 = _M0FP217zhengxin_2dcoding4scss11list__index(at(1), values.length);
                                                                                    let _tmp$4;
                                                                                    if (_bind$9.$tag === 1) {
                                                                                      const _ok = _bind$9;
                                                                                      _tmp$4 = _ok._0;
                                                                                    } else {
                                                                                      return _bind$9;
                                                                                    }
                                                                                    result = _M0MPC15array5Array2atGRPB4JsonE(values, _tmp$4);
                                                                                  }
                                                                                  break _L$41;
                                                                                }
                                                                                const values = _M0MP217zhengxin_2dcoding4scss9SassValue5items(at(0));
                                                                                const _bind$9 = _M0FP217zhengxin_2dcoding4scss11list__index(at(1), values.length);
                                                                                let _tmp$4;
                                                                                if (_bind$9.$tag === 1) {
                                                                                  const _ok = _bind$9;
                                                                                  _tmp$4 = _ok._0;
                                                                                } else {
                                                                                  return _bind$9;
                                                                                }
                                                                                _M0MPC15array5Array3setGURP217zhengxin_2dcoding4scss9SassValueRP217zhengxin_2dcoding4scss9SassValueEE(values, _tmp$4, at(2));
                                                                                let sep;
                                                                                let bracket;
                                                                                _L$43: {
                                                                                  _L$44: {
                                                                                    const _bind$10 = at(0);
                                                                                    if (_bind$10.$tag === 5) {
                                                                                      const _List = _bind$10;
                                                                                      const _sep = _List._1;
                                                                                      const _bracket = _List._2;
                                                                                      sep = _sep;
                                                                                      bracket = _bracket;
                                                                                      break _L$44;
                                                                                    } else {
                                                                                      result = new _M0DTP217zhengxin_2dcoding4scss9SassValue4List(values, " ", false);
                                                                                    }
                                                                                    break _L$43;
                                                                                  }
                                                                                  result = new _M0DTP217zhengxin_2dcoding4scss9SassValue4List(values, sep, bracket);
                                                                                }
                                                                              }
                                                                              break _L$39;
                                                                            }
                                                                            const values = _M0MP217zhengxin_2dcoding4scss9SassValue5items(at(0));
                                                                            const result$2 = new _M0TPB8MutLocalGRP217zhengxin_2dcoding4scss9SassValueE(_M0DTP217zhengxin_2dcoding4scss9SassValue4Null__);
                                                                            const _bind$9 = 0;
                                                                            const _bind$10 = values.length;
                                                                            let _tmp$4 = _bind$9;
                                                                            while (true) {
                                                                              const i = _tmp$4;
                                                                              if (i < _bind$10) {
                                                                                if (_M0MP217zhengxin_2dcoding4scss9SassValue4same(_M0MPC15array5Array2atGRPB4JsonE(values, i), at(1))) {
                                                                                  result$2.val = _M0FP217zhengxin_2dcoding4scss15numeric_2einner((i + 1 | 0) + 0, "");
                                                                                  break;
                                                                                }
                                                                                _tmp$4 = i + 1 | 0;
                                                                                continue;
                                                                              } else {
                                                                                break;
                                                                              }
                                                                            }
                                                                            result = result$2.val;
                                                                          }
                                                                          break _L$37;
                                                                        }
                                                                        const values = _M0MP217zhengxin_2dcoding4scss9SassValue5items(at(0));
                                                                        const _bind$9 = "append";
                                                                        if (_M0MPC16string6String11has__suffix(name, new _M0TPC16string10StringView(_bind$9, 0, _bind$9.length))) {
                                                                          _M0MPC15array5Array4pushGRPC14json10WriteFrameE(values, at(1));
                                                                        } else {
                                                                          const _bind$10 = _M0MP217zhengxin_2dcoding4scss9SassValue5items(at(1));
                                                                          const _bind$11 = _bind$10.length;
                                                                          let _tmp$4 = 0;
                                                                          while (true) {
                                                                            const _ = _tmp$4;
                                                                            if (_ < _bind$11) {
                                                                              const value$2 = _bind$10[_];
                                                                              _M0MPC15array5Array4pushGRPC14json10WriteFrameE(values, value$2);
                                                                              _tmp$4 = _ + 1 | 0;
                                                                              continue;
                                                                            } else {
                                                                              break;
                                                                            }
                                                                          }
                                                                        }
                                                                        let separator;
                                                                        _L$39: {
                                                                          _L$40: {
                                                                            const _bind$10 = at(2);
                                                                            if (_bind$10.$tag === 4) {
                                                                              break _L$40;
                                                                            } else {
                                                                              _L$41: {
                                                                                const _bind$11 = at(2);
                                                                                if (_bind$11.$tag === 2) {
                                                                                  const _Text = _bind$11;
                                                                                  const _x = _Text._0;
                                                                                  if (_x === "auto") {
                                                                                    break _L$40;
                                                                                  } else {
                                                                                    break _L$41;
                                                                                  }
                                                                                } else {
                                                                                  break _L$41;
                                                                                }
                                                                              }
                                                                              const _bind$11 = _M0FP217zhengxin_2dcoding4scss13require__text(at(2));
                                                                              let _tmp$4;
                                                                              if (_bind$11.$tag === 1) {
                                                                                const _ok = _bind$11;
                                                                                _tmp$4 = _ok._0;
                                                                              } else {
                                                                                return _bind$11;
                                                                              }
                                                                              const _bind$12 = _tmp$4._0;
                                                                              switch (_bind$12) {
                                                                                case "comma": {
                                                                                  separator = ",";
                                                                                  break;
                                                                                }
                                                                                case "space": {
                                                                                  separator = " ";
                                                                                  break;
                                                                                }
                                                                                default: {
                                                                                  return new _M0DTPC16result6ResultGORP217zhengxin_2dcoding4scss9SassValueRP217zhengxin_2dcoding4scss10ParseErrorE3Err(new _M0DTPC15error5Error47zhengxin_2dcoding_2fscss_2eParseError_2eInvalid("invalid separator"));
                                                                                }
                                                                              }
                                                                            }
                                                                            break _L$39;
                                                                          }
                                                                          const _bind$10 = at(0);
                                                                          if (_bind$10.$tag === 5) {
                                                                            const _List = _bind$10;
                                                                            const _sep = _List._1;
                                                                            separator = _sep;
                                                                          } else {
                                                                            const _bind$11 = "join";
                                                                            if (_M0MPC16string6String11has__suffix(name, new _M0TPC16string10StringView(_bind$11, 0, _bind$11.length))) {
                                                                              const _bind$12 = at(1);
                                                                              if (_bind$12.$tag === 5) {
                                                                                const _List = _bind$12;
                                                                                const _sep = _List._1;
                                                                                separator = _sep;
                                                                              } else {
                                                                                separator = " ";
                                                                              }
                                                                            } else {
                                                                              separator = " ";
                                                                            }
                                                                          }
                                                                        }
                                                                        let bracketed;
                                                                        _L$40: {
                                                                          _L$41: {
                                                                            const _bind$10 = at(3);
                                                                            if (_bind$10.$tag === 4) {
                                                                              break _L$41;
                                                                            } else {
                                                                              _L$42: {
                                                                                const _bind$11 = at(3);
                                                                                if (_bind$11.$tag === 2) {
                                                                                  const _Text = _bind$11;
                                                                                  const _x = _Text._0;
                                                                                  if (_x === "auto") {
                                                                                    break _L$41;
                                                                                  } else {
                                                                                    break _L$42;
                                                                                  }
                                                                                } else {
                                                                                  break _L$42;
                                                                                }
                                                                              }
                                                                              const _bind$11 = at(3);
                                                                              if (_bind$11.$tag === 3) {
                                                                                const _Boolean = _bind$11;
                                                                                const _v = _Boolean._0;
                                                                                bracketed = _v;
                                                                              } else {
                                                                                return new _M0DTPC16result6ResultGORP217zhengxin_2dcoding4scss9SassValueRP217zhengxin_2dcoding4scss10ParseErrorE3Err(new _M0DTPC15error5Error47zhengxin_2dcoding_2fscss_2eParseError_2eInvalid("bracketed must be boolean"));
                                                                              }
                                                                            }
                                                                            break _L$40;
                                                                          }
                                                                          const _bind$10 = at(0);
                                                                          if (_bind$10.$tag === 5) {
                                                                            const _List = _bind$10;
                                                                            const _x = _List._2;
                                                                            if (_x === true) {
                                                                              bracketed = true;
                                                                            } else {
                                                                              bracketed = false;
                                                                            }
                                                                          } else {
                                                                            bracketed = false;
                                                                          }
                                                                        }
                                                                        result = new _M0DTP217zhengxin_2dcoding4scss9SassValue4List(values, separator, bracketed);
                                                                      }
                                                                      break _L$35;
                                                                    }
                                                                    const _bind$9 = _M0FP217zhengxin_2dcoding4scss12map__entries(at(0));
                                                                    let values;
                                                                    if (_bind$9.$tag === 1) {
                                                                      const _ok = _bind$9;
                                                                      values = _ok._0;
                                                                    } else {
                                                                      return _bind$9;
                                                                    }
                                                                    const result$2 = new _M0TPB8MutLocalGRP217zhengxin_2dcoding4scss9SassValueE(_M0DTP217zhengxin_2dcoding4scss9SassValue4Null__);
                                                                    const found = new _M0TPB8MutLocalGbE(false);
                                                                    const _bind$10 = values.length;
                                                                    let _tmp$4 = 0;
                                                                    while (true) {
                                                                      const _ = _tmp$4;
                                                                      if (_ < _bind$10) {
                                                                        const _foreach_element = values[_];
                                                                        let key;
                                                                        let value$2;
                                                                        _L$37: {
                                                                          const _key = _foreach_element._0;
                                                                          const _value = _foreach_element._1;
                                                                          key = _key;
                                                                          value$2 = _value;
                                                                          break _L$37;
                                                                        }
                                                                        if (_M0MP217zhengxin_2dcoding4scss9SassValue4same(key, at(1))) {
                                                                          result$2.val = value$2;
                                                                          found.val = true;
                                                                          break;
                                                                        }
                                                                        _tmp$4 = _ + 1 | 0;
                                                                        continue;
                                                                      } else {
                                                                        break;
                                                                      }
                                                                    }
                                                                    const _bind$11 = "has-key";
                                                                    if (_M0MPC16string6String11has__suffix(name, new _M0TPC16string10StringView(_bind$11, 0, _bind$11.length))) {
                                                                      result = new _M0DTP217zhengxin_2dcoding4scss9SassValue7Boolean(found.val);
                                                                    } else {
                                                                      result = result$2.val;
                                                                    }
                                                                  }
                                                                  break _L$33;
                                                                }
                                                                const _bind$9 = _M0FP217zhengxin_2dcoding4scss12map__entries(at(0));
                                                                let _tmp$4;
                                                                if (_bind$9.$tag === 1) {
                                                                  const _ok = _bind$9;
                                                                  _tmp$4 = _ok._0;
                                                                } else {
                                                                  return _bind$9;
                                                                }
                                                                result = new _M0DTP217zhengxin_2dcoding4scss9SassValue4List(_M0MPC15array5Array3mapGURP217zhengxin_2dcoding4scss9SassValueRP217zhengxin_2dcoding4scss9SassValueERP217zhengxin_2dcoding4scss9SassValueE(_tmp$4, (p) => p._0), ",", false);
                                                              }
                                                              break _L$31;
                                                            }
                                                            const _bind$9 = _M0FP217zhengxin_2dcoding4scss12map__entries(at(0));
                                                            let _tmp$4;
                                                            if (_bind$9.$tag === 1) {
                                                              const _ok = _bind$9;
                                                              _tmp$4 = _ok._0;
                                                            } else {
                                                              return _bind$9;
                                                            }
                                                            result = new _M0DTP217zhengxin_2dcoding4scss9SassValue4List(_M0MPC15array5Array3mapGURP217zhengxin_2dcoding4scss9SassValueRP217zhengxin_2dcoding4scss9SassValueERP217zhengxin_2dcoding4scss9SassValueE(_tmp$4, (p) => p._1), ",", false);
                                                          }
                                                          break _L$29;
                                                        }
                                                        const _bind$9 = _M0FP217zhengxin_2dcoding4scss12map__entries(at(0));
                                                        let _tmp$4;
                                                        if (_bind$9.$tag === 1) {
                                                          const _ok = _bind$9;
                                                          _tmp$4 = _ok._0;
                                                        } else {
                                                          return _bind$9;
                                                        }
                                                        const values = _M0MPC15array5Array4copyGsE(_tmp$4);
                                                        const _bind$10 = _M0FP217zhengxin_2dcoding4scss12map__entries(at(1));
                                                        let _bind$11;
                                                        if (_bind$10.$tag === 1) {
                                                          const _ok = _bind$10;
                                                          _bind$11 = _ok._0;
                                                        } else {
                                                          return _bind$10;
                                                        }
                                                        const _bind$12 = _bind$11.length;
                                                        let _tmp$5 = 0;
                                                        while (true) {
                                                          const _ = _tmp$5;
                                                          if (_ < _bind$12) {
                                                            const _foreach_element = _bind$11[_];
                                                            let key;
                                                            let value$2;
                                                            _L$31: {
                                                              const _key = _foreach_element._0;
                                                              const _value = _foreach_element._1;
                                                              key = _key;
                                                              value$2 = _value;
                                                              break _L$31;
                                                            }
                                                            const replaced = new _M0TPB8MutLocalGbE(false);
                                                            const _bind$13 = 0;
                                                            const _bind$14 = values.length;
                                                            let _tmp$6 = _bind$13;
                                                            while (true) {
                                                              const i = _tmp$6;
                                                              if (i < _bind$14) {
                                                                if (_M0MP217zhengxin_2dcoding4scss9SassValue4same(_M0MPC15array5Array2atGRPB4JsonE(values, i)._0, key)) {
                                                                  _M0MPC15array5Array3setGURP217zhengxin_2dcoding4scss9SassValueRP217zhengxin_2dcoding4scss9SassValueEE(values, i, { _0: key, _1: value$2 });
                                                                  replaced.val = true;
                                                                  break;
                                                                }
                                                                _tmp$6 = i + 1 | 0;
                                                                continue;
                                                              } else {
                                                                break;
                                                              }
                                                            }
                                                            if (!replaced.val) {
                                                              _M0MPC15array5Array4pushGRPC14json10WriteFrameE(values, { _0: key, _1: value$2 });
                                                            }
                                                            _tmp$5 = _ + 1 | 0;
                                                            continue;
                                                          } else {
                                                            break;
                                                          }
                                                        }
                                                        result = new _M0DTP217zhengxin_2dcoding4scss9SassValue10Dictionary(values);
                                                      }
                                                      break _L$27;
                                                    }
                                                    const _bind$9 = _M0FP217zhengxin_2dcoding4scss12map__entries(at(0));
                                                    let _tmp$4;
                                                    if (_bind$9.$tag === 1) {
                                                      const _ok = _bind$9;
                                                      _tmp$4 = _ok._0;
                                                    } else {
                                                      return _bind$9;
                                                    }
                                                    result = new _M0DTP217zhengxin_2dcoding4scss9SassValue10Dictionary(_M0MPC15array5Array6filterGURP217zhengxin_2dcoding4scss9SassValueRP217zhengxin_2dcoding4scss9SassValueEE(_tmp$4, (p) => !_M0MPB4Iter3anyGURP217zhengxin_2dcoding4scss9SassValueRP217zhengxin_2dcoding4scss9SassValueEE(_M0MPC15array9ArrayView4iterGsE(_M0MPC15array5Array12view_2einnerGsE(args, 1, undefined)), (k) => _M0MP217zhengxin_2dcoding4scss9SassValue4same(k, p._0))));
                                                  }
                                                  break _L$25;
                                                }
                                                const _bind$9 = _M0FP217zhengxin_2dcoding4scss13require__text(at(0));
                                                let _tmp$4;
                                                if (_bind$9.$tag === 1) {
                                                  const _ok = _bind$9;
                                                  _tmp$4 = _ok._0;
                                                } else {
                                                  return _bind$9;
                                                }
                                                const _bind$10 = "unquote";
                                                result = new _M0DTP217zhengxin_2dcoding4scss9SassValue4Text(_tmp$4._0, !_M0MPC16string6String11has__suffix(name, new _M0TPC16string10StringView(_bind$10, 0, _bind$10.length)));
                                              }
                                              break _L$23;
                                            }
                                            const _bind$9 = _M0FP217zhengxin_2dcoding4scss13require__text(at(0));
                                            let _tmp$4;
                                            if (_bind$9.$tag === 1) {
                                              const _ok = _bind$9;
                                              _tmp$4 = _ok._0;
                                            } else {
                                              return _bind$9;
                                            }
                                            result = _M0FP217zhengxin_2dcoding4scss15numeric_2einner(_M0MPC16string6String9to__array(_tmp$4._0).length + 0, "");
                                          }
                                          break _L$21;
                                        }
                                        let text;
                                        let quoted;
                                        _L$23: {
                                          const _bind$9 = _M0FP217zhengxin_2dcoding4scss13require__text(at(0));
                                          let _bind$10;
                                          if (_bind$9.$tag === 1) {
                                            const _ok = _bind$9;
                                            _bind$10 = _ok._0;
                                          } else {
                                            return _bind$9;
                                          }
                                          const _text = _bind$10._0;
                                          const _quoted = _bind$10._1;
                                          text = _text;
                                          quoted = _quoted;
                                          break _L$23;
                                        }
                                        let _tmp$4;
                                        const _bind$9 = "upper-case";
                                        if (_M0MPC16string6String11has__suffix(name, new _M0TPC16string10StringView(_bind$9, 0, _bind$9.length))) {
                                          _tmp$4 = _M0MPC16string6String9to__upper(text);
                                        } else {
                                          _tmp$4 = _M0MPC16string6String9to__lower(text);
                                        }
                                        result = new _M0DTP217zhengxin_2dcoding4scss9SassValue4Text(_tmp$4, quoted);
                                      }
                                      break _L$19;
                                    }
                                    let text;
                                    let quoted;
                                    _L$21: {
                                      const _bind$9 = _M0FP217zhengxin_2dcoding4scss13require__text(at(0));
                                      let _bind$10;
                                      if (_bind$9.$tag === 1) {
                                        const _ok = _bind$9;
                                        _bind$10 = _ok._0;
                                      } else {
                                        return _bind$9;
                                      }
                                      const _text = _bind$10._0;
                                      const _quoted = _bind$10._1;
                                      text = _text;
                                      quoted = _quoted;
                                      break _L$21;
                                    }
                                    const chars = _M0MPC16string6String9to__array(text);
                                    const _bind$9 = _M0FP217zhengxin_2dcoding4scss12require__int(at(1));
                                    let start;
                                    if (_bind$9.$tag === 1) {
                                      const _ok = _bind$9;
                                      start = _ok._0;
                                    } else {
                                      return _bind$9;
                                    }
                                    const _bind$10 = at(2);
                                    let finish;
                                    if (_bind$10.$tag === 4) {
                                      finish = chars.length;
                                    } else {
                                      const _bind$11 = _M0FP217zhengxin_2dcoding4scss12require__int(at(2));
                                      if (_bind$11.$tag === 1) {
                                        const _ok = _bind$11;
                                        finish = _ok._0;
                                      } else {
                                        return _bind$11;
                                      }
                                    }
                                    const first = _M0MPC13int3Int3min(_M0MPC13int3Int3max(start < 0 ? chars.length + start | 0 : _M0MPC13int3Int3max(start - 1 | 0, 0), 0), chars.length);
                                    const last = _M0MPC13int3Int3min(_M0MPC13int3Int3max(finish < 0 ? (chars.length + finish | 0) + 1 | 0 : finish, 0), chars.length);
                                    result = new _M0DTP217zhengxin_2dcoding4scss9SassValue4Text(last < first ? "" : _M0MPC16string6String11from__array(_M0MPC15array5Array12view_2einnerGcE(chars, first, last)), quoted);
                                  }
                                  break _L$17;
                                }
                                const _bind$9 = _M0FP217zhengxin_2dcoding4scss13require__text(at(0));
                                let _tmp$4;
                                if (_bind$9.$tag === 1) {
                                  const _ok = _bind$9;
                                  _tmp$4 = _ok._0;
                                } else {
                                  return _bind$9;
                                }
                                const chars = _M0MPC16string6String9to__array(_tmp$4._0);
                                const _bind$10 = _M0FP217zhengxin_2dcoding4scss13require__text(at(1));
                                let _tmp$5;
                                if (_bind$10.$tag === 1) {
                                  const _ok = _bind$10;
                                  _tmp$5 = _ok._0;
                                } else {
                                  return _bind$10;
                                }
                                const needle = _M0MPC16string6String9to__array(_tmp$5._0);
                                const index = new _M0TPB8MutLocalGRP217zhengxin_2dcoding4scss9SassValueE(_M0DTP217zhengxin_2dcoding4scss9SassValue4Null__);
                                let _tmp$6 = 0;
                                while (true) {
                                  const i = _tmp$6;
                                  if ((i + needle.length | 0) <= chars.length) {
                                    if (_M0IPC15array5ArrayPB2Eq5equalGcE(_M0MPC15array9ArrayView9to__ownedGcE(_M0MPC15array5Array12view_2einnerGcE(chars, i, i + needle.length | 0)), needle)) {
                                      index.val = _M0FP217zhengxin_2dcoding4scss15numeric_2einner((i + 1 | 0) + 0, "");
                                      break;
                                    }
                                    _tmp$6 = i + 1 | 0;
                                    continue;
                                  } else {
                                    break;
                                  }
                                }
                                result = index.val;
                              }
                              break _L$15;
                            }
                            let text;
                            let quoted;
                            _L$17: {
                              const _bind$9 = _M0FP217zhengxin_2dcoding4scss13require__text(at(0));
                              let _bind$10;
                              if (_bind$9.$tag === 1) {
                                const _ok = _bind$9;
                                _bind$10 = _ok._0;
                              } else {
                                return _bind$9;
                              }
                              const _text = _bind$10._0;
                              const _quoted = _bind$10._1;
                              text = _text;
                              quoted = _quoted;
                              break _L$17;
                            }
                            const chars = _M0MPC16string6String9to__array(text);
                            const _bind$9 = _M0FP217zhengxin_2dcoding4scss13require__text(at(1));
                            let _tmp$4;
                            if (_bind$9.$tag === 1) {
                              const _ok = _bind$9;
                              _tmp$4 = _ok._0;
                            } else {
                              return _bind$9;
                            }
                            const insert = _tmp$4._0;
                            const _bind$10 = _M0FP217zhengxin_2dcoding4scss12require__int(at(2));
                            let index;
                            if (_bind$10.$tag === 1) {
                              const _ok = _bind$10;
                              index = _ok._0;
                            } else {
                              return _bind$10;
                            }
                            const at$2 = _M0MPC13int3Int3min(_M0MPC13int3Int3max(index < 0 ? (chars.length + index | 0) + 1 | 0 : _M0MPC13int3Int3max(index - 1 | 0, 0), 0), chars.length);
                            result = new _M0DTP217zhengxin_2dcoding4scss9SassValue4Text(`${_M0MPC16string6String11from__array(_M0MPC15array5Array12view_2einnerGcE(chars, 0, at$2))}${insert}${_M0MPC16string6String11from__array(_M0MPC15array5Array12view_2einnerGcE(chars, at$2, undefined))}`, quoted);
                          }
                          break _L$13;
                        }
                        const _bind$9 = at(0);
                        let _tmp$4;
                        switch (_bind$9.$tag) {
                          case 0: {
                            _tmp$4 = "number";
                            break;
                          }
                          case 1: {
                            _tmp$4 = "color";
                            break;
                          }
                          case 2: {
                            _tmp$4 = "string";
                            break;
                          }
                          case 3: {
                            _tmp$4 = "bool";
                            break;
                          }
                          case 4: {
                            _tmp$4 = "null";
                            break;
                          }
                          case 5: {
                            _tmp$4 = "list";
                            break;
                          }
                          default: {
                            _tmp$4 = "map";
                          }
                        }
                        result = new _M0DTP217zhengxin_2dcoding4scss9SassValue4Text(_tmp$4, false);
                      }
                      break _L$11;
                    }
                    const _bind$9 = _M0MP217zhengxin_2dcoding4scss9SassValue11css_2einner(at(0), false, true);
                    let _tmp$4;
                    if (_bind$9.$tag === 1) {
                      const _ok = _bind$9;
                      _tmp$4 = _ok._0;
                    } else {
                      return _bind$9;
                    }
                    result = new _M0DTP217zhengxin_2dcoding4scss9SassValue4Text(_tmp$4, false);
                  }
                  break _L$9;
                }
                const _bind$9 = _M0FP217zhengxin_2dcoding4scss13require__text(at(0));
                let _tmp$4;
                if (_bind$9.$tag === 1) {
                  const _ok = _bind$9;
                  _tmp$4 = _ok._0;
                } else {
                  return _bind$9;
                }
                const _bind$10 = _M0MP217zhengxin_2dcoding4scss5Scope3get(scope, _tmp$4._0);
                let _bind$11;
                if (_bind$10.$tag === 1) {
                  const _ok = _bind$10;
                  _bind$11 = _ok._0;
                } else {
                  return _bind$10;
                }
                result = new _M0DTP217zhengxin_2dcoding4scss9SassValue7Boolean(!(_bind$11 === undefined));
              }
              break _L$7;
            }
            const _tmp$4 = _M0MP217zhengxin_2dcoding4scss5Scope6global(scope).vars;
            const _bind$9 = _M0FP217zhengxin_2dcoding4scss13require__text(at(0));
            let _tmp$5;
            if (_bind$9.$tag === 1) {
              const _ok = _bind$9;
              _tmp$5 = _ok._0;
            } else {
              return _bind$9;
            }
            result = new _M0DTP217zhengxin_2dcoding4scss9SassValue7Boolean(_M0MPB3Map8containsGsRP217zhengxin_2dcoding4scss9SassValueE(_tmp$4, _M0FP217zhengxin_2dcoding4scss10identifier(_tmp$5._0)));
          }
          break _L$5;
        }
        const _bind$9 = _M0FP217zhengxin_2dcoding4scss13require__text(at(0));
        let _tmp$4;
        if (_bind$9.$tag === 1) {
          const _ok = _bind$9;
          _tmp$4 = _ok._0;
        } else {
          return _bind$9;
        }
        const name$2 = _M0FP217zhengxin_2dcoding4scss10identifier(_tmp$4._0);
        const _bind$10 = _M0MP217zhengxin_2dcoding4scss5Scope16lookup__function(scope, name$2);
        let _bind$11;
        if (_bind$10.$tag === 1) {
          const _ok = _bind$10;
          _bind$11 = _ok._0;
        } else {
          return _bind$10;
        }
        result = new _M0DTP217zhengxin_2dcoding4scss9SassValue7Boolean(_bind$11 === undefined ? _M0FP217zhengxin_2dcoding4scss15global__builtin(name$2) : true);
      }
      break _L$3;
    }
    const _bind$9 = _M0FP217zhengxin_2dcoding4scss13require__text(at(0));
    let _tmp$4;
    if (_bind$9.$tag === 1) {
      const _ok = _bind$9;
      _tmp$4 = _ok._0;
    } else {
      return _bind$9;
    }
    const _bind$10 = _M0MP217zhengxin_2dcoding4scss5Scope13lookup__mixin(scope, _tmp$4._0);
    let _bind$11;
    if (_bind$10.$tag === 1) {
      const _ok = _bind$10;
      _bind$11 = _ok._0;
    } else {
      return _bind$10;
    }
    result = new _M0DTP217zhengxin_2dcoding4scss9SassValue7Boolean(!(_bind$11 === undefined));
  }
  return new _M0DTPC16result6ResultGORP217zhengxin_2dcoding4scss9SassValueRP217zhengxin_2dcoding4scss10ParseErrorE2Ok(result);
}
function _M0FP217zhengxin_2dcoding4scss11has__parent(text) {
  const chars = _M0MPC16string6String9to__array(text);
  const quote = new _M0TPB8MutLocalGcE(0);
  const bracket = new _M0TPB8MutLocalGiE(0);
  const i = new _M0TPB8MutLocalGiE(0);
  while (true) {
    if (i.val < chars.length) {
      const c = _M0MPC15array5Array2atGcE(chars, i.val);
      if (c === 92) {
        i.val = i.val + 2 | 0;
        continue;
      }
      if (quote.val !== 0) {
        if (c === quote.val) {
          quote.val = 0;
        }
      } else {
        if (c === 34 || c === 39) {
          quote.val = c;
        } else {
          if (c === 91) {
            bracket.val = bracket.val + 1 | 0;
          } else {
            if (c === 93) {
              bracket.val = bracket.val - 1 | 0;
            } else {
              if (c === 38 && bracket.val === 0) {
                return true;
              }
            }
          }
        }
      }
      i.val = i.val + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return false;
}
function _M0FP217zhengxin_2dcoding4scss10split__top(text, delimiter) {
  const chars = _M0MPC16string6String9to__array(text);
  const out = [];
  const stack = [];
  const quote = new _M0TPB8MutLocalGcE(0);
  const start = new _M0TPB8MutLocalGiE(0);
  const i = new _M0TPB8MutLocalGiE(0);
  while (true) {
    if (i.val < chars.length) {
      const c = _M0MPC15array5Array2atGcE(chars, i.val);
      if (c === 92) {
        i.val = i.val + 2 | 0;
        continue;
      }
      if (quote.val !== 0) {
        if (c === quote.val) {
          quote.val = 0;
        }
      } else {
        if (c === 34 || c === 39) {
          quote.val = c;
        } else {
          if (c === 40 || c === 91) {
            _M0MPC15array5Array4pushGcE(stack, c);
          } else {
            if (c === 41 || c === 93) {
              if (_M0MPC15array5Array9is__emptyGcE(stack) || _M0IP016_24default__implPB2Eq10not__equalGOcE(_M0MPC15array5Array3popGcE(stack), c === 41 ? 40 : 91)) {
                return new _M0DTPC16result6ResultGRPB5ArrayGsERP217zhengxin_2dcoding4scss10ParseErrorE3Err(new _M0DTPC15error5Error47zhengxin_2dcoding_2fscss_2eParseError_2eInvalid("mismatched delimiters"));
              }
            } else {
              if (c === delimiter && _M0MPC15array5Array9is__emptyGcE(stack)) {
                _M0MPC15array5Array4pushGRPC14json10WriteFrameE(out, _M0MPC16string10StringView9to__owned(_M0MPC16string6String4trim(_M0MPC16string6String11from__array(_M0MPC15array5Array12view_2einnerGcE(chars, start.val, i.val)), undefined)));
                start.val = i.val + 1 | 0;
              }
            }
          }
        }
      }
      i.val = i.val + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  if (quote.val !== 0 || !_M0MPC15array5Array9is__emptyGcE(stack)) {
    return new _M0DTPC16result6ResultGRPB5ArrayGsERP217zhengxin_2dcoding4scss10ParseErrorE3Err(new _M0DTPC15error5Error47zhengxin_2dcoding_2fscss_2eParseError_2eInvalid("unterminated delimiter"));
  }
  _M0MPC15array5Array4pushGRPC14json10WriteFrameE(out, _M0MPC16string10StringView9to__owned(_M0MPC16string6String4trim(_M0MPC16string6String11from__array(_M0MPC15array5Array12view_2einnerGcE(chars, start.val, undefined)), undefined)));
  return new _M0DTPC16result6ResultGRPB5ArrayGsERP217zhengxin_2dcoding4scss10ParseErrorE2Ok(out);
}
function _M0FP217zhengxin_2dcoding4scss10invocation(text) {
  const cs = _M0MPC16string6String9to__array(_M0MPC16string10StringView9to__owned(_M0MPC16string6String4trim(text, undefined)));
  const at = new _M0TPB8MutLocalGiE(0);
  while (true) {
    if (at.val < cs.length && _M0MPC15array5Array2atGcE(cs, at.val) !== 40) {
      at.val = at.val + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const name = _M0MPC16string10StringView9to__owned(_M0MPC16string6String4trim(_M0MPC16string6String11from__array(_M0MPC15array5Array12view_2einnerGcE(cs, 0, at.val)), undefined));
  if (_M0MPC16string6String9is__empty(name) || !_M0MPB4Iter3allGcE(_M0MPC15array5Array4iterGcE(_M0MPC16string6String9to__array(name)), (c) => _M0FP217zhengxin_2dcoding4scss10name__char(c) || c === 46)) {
    return new _M0DTPC16result6ResultGUsRPB5ArrayGsEERP217zhengxin_2dcoding4scss10ParseErrorE3Err(new _M0DTPC15error5Error47zhengxin_2dcoding_2fscss_2eParseError_2eInvalid("invalid mixin name"));
  }
  if (at.val === cs.length) {
    return new _M0DTPC16result6ResultGUsRPB5ArrayGsEERP217zhengxin_2dcoding4scss10ParseErrorE2Ok({ _0: _M0FP217zhengxin_2dcoding4scss15reference__name(name), _1: [] });
  }
  if (_M0IP016_24default__implPB2Eq10not__equalGOcE(_M0MPC15array5Array4lastGcE(cs), 41)) {
    return new _M0DTPC16result6ResultGUsRPB5ArrayGsEERP217zhengxin_2dcoding4scss10ParseErrorE3Err(new _M0DTPC15error5Error47zhengxin_2dcoding_2fscss_2eParseError_2eInvalid("invalid mixin arguments"));
  }
  const inner = _M0MPC16string10StringView9to__owned(_M0MPC16string6String4trim(_M0MPC16string6String11from__array(_M0MPC15array5Array12view_2einnerGcE(cs, at.val + 1 | 0, cs.length - 1 | 0)), undefined));
  const _tmp = _M0FP217zhengxin_2dcoding4scss15reference__name(name);
  let _tmp$2;
  if (_M0MPC16string6String9is__empty(inner)) {
    _tmp$2 = [];
  } else {
    const _bind$2 = _M0FP217zhengxin_2dcoding4scss10split__top(inner, 44);
    if (_bind$2.$tag === 1) {
      const _ok = _bind$2;
      _tmp$2 = _ok._0;
    } else {
      return _bind$2;
    }
  }
  return new _M0DTPC16result6ResultGUsRPB5ArrayGsEERP217zhengxin_2dcoding4scss10ParseErrorE2Ok({ _0: _tmp, _1: _tmp$2 });
}
function _M0FP217zhengxin_2dcoding4scss14at__rule__name(header) {
  const chars = _M0MPC16string6String9to__array(header);
  const end = new _M0TPB8MutLocalGiE(1);
  while (true) {
    if (end.val < chars.length && _M0FP217zhengxin_2dcoding4scss10name__char(_M0MPC15array5Array2atGcE(chars, end.val))) {
      end.val = end.val + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return _M0MPC16string6String11from__array(_M0MPC15array5Array12view_2einnerGcE(chars, 1, end.val));
}
function _M0FP217zhengxin_2dcoding4scss18resolve__selectors(parent, child, implicit, depth) {
  const _bind$2 = _M0FP217zhengxin_2dcoding4scss10split__top(child, 44);
  let children;
  if (_bind$2.$tag === 1) {
    const _ok = _bind$2;
    children = _ok._0;
  } else {
    return _bind$2;
  }
  const prepared = [];
  const _bind$3 = children.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind$3) {
      const c = children[_];
      let _tmp$2;
      if (_M0MPC16string6String9is__empty(c)) {
        _tmp$2 = true;
      } else {
        const _bind$4 = "@";
        _tmp$2 = _M0MPC16string6String11has__prefix(c, new _M0TPC16string10StringView(_bind$4, 0, _bind$4.length));
      }
      if (_tmp$2) {
        return new _M0DTPC16result6ResultGRPB5ArrayGsERP217zhengxin_2dcoding4scss10ParseErrorE3Err(new _M0DTPC15error5Error47zhengxin_2dcoding_2fscss_2eParseError_2eInvalid("empty or invalid selector"));
      }
      if (_M0MPC15array5Array9is__emptyGRPB4JsonE(parent) && _M0FP217zhengxin_2dcoding4scss11has__parent(c)) {
        return new _M0DTPC16result6ResultGRPB5ArrayGsERP217zhengxin_2dcoding4scss10ParseErrorE3Err(new _M0DTPC15error5Error47zhengxin_2dcoding_2fscss_2eParseError_2eInvalid("parent selector at root"));
      }
      const _bind$4 = _M0FP217zhengxin_2dcoding4scss17prepare__selector(parent, c, depth);
      let _tmp$3;
      if (_bind$4.$tag === 1) {
        const _ok = _bind$4;
        _tmp$3 = _ok._0;
      } else {
        return _bind$4;
      }
      _M0MPC15array5Array4pushGRPC14json10WriteFrameE(prepared, { _0: c, _1: _tmp$3 });
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const out = [];
  const parents = _M0MPC15array5Array9is__emptyGRPB4JsonE(parent) ? [""] : parent;
  const _bind$4 = parents.length;
  let _tmp$2 = 0;
  while (true) {
    const _ = _tmp$2;
    if (_ < _bind$4) {
      const p = parents[_];
      const _bind$5 = prepared.length;
      let _tmp$3 = 0;
      while (true) {
        const _$2 = _tmp$3;
        if (_$2 < _bind$5) {
          const _foreach_element = prepared[_$2];
          let original;
          let parts;
          let nested;
          _L: {
            const _original = _foreach_element._0;
            const _x = _foreach_element._1;
            const _parts = _x._0;
            const _nested = _x._1;
            original = _original;
            parts = _parts;
            nested = _nested;
            break _L;
          }
          if (parts.length === 1) {
            const value = implicit && (!nested && !_M0MPC16string6String9is__empty(p)) ? `${p} ${_M0MPC15array5Array2atGRPB4JsonE(parts, 0)}` : _M0MPC15array5Array2atGRPB4JsonE(parts, 0);
            if (!nested && implicit || !_M0MPC15array5Array8containsGsE(out, value)) {
              _M0MPC15array5Array4pushGRPC14json10WriteFrameE(out, value);
            }
          } else {
            const values = new _M0TPB8MutLocalGRPB5ArrayGsEE([_M0MPC15array5Array2atGRPB4JsonE(parts, 0)]);
            const _bind$6 = 1;
            const _bind$7 = parts.length;
            let _tmp$4 = _bind$6;
            while (true) {
              const i = _tmp$4;
              if (i < _bind$7) {
                const choices = i === 1 ? [p] : parent;
                const next = [];
                const _bind$8 = values.val;
                const _bind$9 = _bind$8.length;
                let _tmp$5 = 0;
                while (true) {
                  const _$3 = _tmp$5;
                  if (_$3 < _bind$9) {
                    const prefix = _bind$8[_$3];
                    const _bind$10 = choices.length;
                    let _tmp$6 = 0;
                    while (true) {
                      const _$4 = _tmp$6;
                      if (_$4 < _bind$10) {
                        const choice = choices[_$4];
                        const suffix = _M0MPC15array5Array2atGRPB4JsonE(parts, i);
                        let _tmp$7;
                        if (!_M0MPC16string6String9is__empty(suffix)) {
                          let _tmp$8;
                          if (_M0FP217zhengxin_2dcoding4scss4word(_M0MPC15array5Array2atGcE(_M0MPC16string6String9to__array(suffix), 0))) {
                            _tmp$8 = true;
                          } else {
                            const _bind$11 = "-";
                            _tmp$8 = _M0MPC16string6String11has__prefix(suffix, new _M0TPC16string10StringView(_bind$11, 0, _bind$11.length));
                          }
                          _tmp$7 = _tmp$8;
                        } else {
                          _tmp$7 = false;
                        }
                        if (_tmp$7) {
                          const last = _M0MPC15array5Array4lastGcE(_M0MPC16string6String9to__array(choice));
                          let _tmp$8;
                          let c;
                          _L$2: {
                            _L$3: {
                              if (last === -1) {
                                _tmp$8 = false;
                              } else {
                                const _Some = last;
                                const _c = _Some;
                                c = _c;
                                break _L$3;
                              }
                              break _L$2;
                            }
                            _tmp$8 = _M0FP217zhengxin_2dcoding4scss4word(c) || c === 45;
                          }
                          if (!_tmp$8) {
                            return new _M0DTPC16result6ResultGRPB5ArrayGsERP217zhengxin_2dcoding4scss10ParseErrorE3Err(new _M0DTPC15error5Error47zhengxin_2dcoding_2fscss_2eParseError_2eInvalid("invalid parent selector suffix"));
                          }
                        }
                        _M0MPC15array5Array4pushGRPC14json10WriteFrameE(next, `${prefix}${choice}${suffix}`);
                        if (next.length > 256) {
                          return new _M0DTPC16result6ResultGRPB5ArrayGsERP217zhengxin_2dcoding4scss10ParseErrorE3Err(new _M0DTPC15error5Error47zhengxin_2dcoding_2fscss_2eParseError_2eInvalid("selector expansion limit"));
                        }
                        _tmp$6 = _$4 + 1 | 0;
                        continue;
                      } else {
                        break;
                      }
                    }
                    _tmp$5 = _$3 + 1 | 0;
                    continue;
                  } else {
                    break;
                  }
                }
                values.val = next;
                _tmp$4 = i + 1 | 0;
                continue;
              } else {
                break;
              }
            }
            const _bind$8 = values.val;
            const _bind$9 = _bind$8.length;
            let _tmp$5 = 0;
            while (true) {
              const _$3 = _tmp$5;
              if (_$3 < _bind$9) {
                const value = _bind$8[_$3];
                _M0MPC15array5Array4pushGRPC14json10WriteFrameE(out, value);
                _tmp$5 = _$3 + 1 | 0;
                continue;
              } else {
                break;
              }
            }
          }
          if (out.length > 256) {
            return new _M0DTPC16result6ResultGRPB5ArrayGsERP217zhengxin_2dcoding4scss10ParseErrorE3Err(new _M0DTPC15error5Error47zhengxin_2dcoding_2fscss_2eParseError_2eInvalid("selector expansion limit"));
          }
          _tmp$3 = _$2 + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      _tmp$2 = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return new _M0DTPC16result6ResultGRPB5ArrayGsERP217zhengxin_2dcoding4scss10ParseErrorE2Ok(out);
}
function _M0FP217zhengxin_2dcoding4scss17prepare__selector(parent, text, depth) {
  if (depth > 32) {
    return new _M0DTPC16result6ResultGURPB5ArrayGsEbERP217zhengxin_2dcoding4scss10ParseErrorE3Err(new _M0DTPC15error5Error47zhengxin_2dcoding_2fscss_2eParseError_2eInvalid("selector nesting limit"));
  }
  const chars = _M0MPC16string6String9to__array(text);
  const segments = [];
  const current = new _M0TPB8MutLocalGsE("");
  const quote = new _M0TPB8MutLocalGcE(0);
  const bracket = new _M0TPB8MutLocalGiE(0);
  const nested = new _M0TPB8MutLocalGbE(false);
  const i = new _M0TPB8MutLocalGiE(0);
  while (true) {
    if (i.val < chars.length) {
      const c = _M0MPC15array5Array2atGcE(chars, i.val);
      if (c === 92) {
        current.val = `${current.val}${_M0IPC14char4CharPB4Show10to__string(c)}`;
        i.val = i.val + 1 | 0;
        if (i.val < chars.length) {
          current.val = `${current.val}${_M0IPC14char4CharPB4Show10to__string(_M0MPC15array5Array2atGcE(chars, i.val))}`;
          i.val = i.val + 1 | 0;
        }
        continue;
      }
      if (quote.val !== 0) {
        current.val = `${current.val}${_M0IPC14char4CharPB4Show10to__string(c)}`;
        if (c === quote.val) {
          quote.val = 0;
        }
        i.val = i.val + 1 | 0;
        continue;
      }
      if (c === 34 || c === 39) {
        quote.val = c;
      }
      if (c === 123 || (c === 125 || c === 59)) {
        return new _M0DTPC16result6ResultGURPB5ArrayGsEbERP217zhengxin_2dcoding4scss10ParseErrorE3Err(new _M0DTPC15error5Error47zhengxin_2dcoding_2fscss_2eParseError_2eInvalid("invalid selector punctuation"));
      }
      if (c === 91) {
        bracket.val = bracket.val + 1 | 0;
      }
      if (c === 93) {
        bracket.val = bracket.val - 1 | 0;
      }
      if (c === 40 && bracket.val === 0) {
        const start = i.val + 1 | 0;
        const j = new _M0TPB8MutLocalGiE(start);
        const level = new _M0TPB8MutLocalGiE(1);
        const q = new _M0TPB8MutLocalGcE(0);
        while (true) {
          if (j.val < chars.length && level.val > 0) {
            const x = _M0MPC15array5Array2atGcE(chars, j.val);
            if (x === 92) {
              j.val = j.val + 2 | 0;
              continue;
            }
            if (q.val !== 0) {
              if (x === q.val) {
                q.val = 0;
              }
            } else {
              if (x === 34 || x === 39) {
                q.val = x;
              } else {
                if (x === 40) {
                  level.val = level.val + 1 | 0;
                } else {
                  if (x === 41) {
                    level.val = level.val - 1 | 0;
                  }
                }
              }
            }
            j.val = j.val + 1 | 0;
            continue;
          } else {
            break;
          }
        }
        if (level.val !== 0) {
          return new _M0DTPC16result6ResultGURPB5ArrayGsEbERP217zhengxin_2dcoding4scss10ParseErrorE3Err(new _M0DTPC15error5Error47zhengxin_2dcoding_2fscss_2eParseError_2eInvalid("unterminated selector function"));
        }
        const inner = _M0MPC16string6String11from__array(_M0MPC15array5Array12view_2einnerGcE(chars, start, j.val - 1 | 0));
        if (_M0FP217zhengxin_2dcoding4scss11has__parent(inner)) {
          const _bind$2 = _M0FP217zhengxin_2dcoding4scss18resolve__selectors(parent, inner, false, depth + 1 | 0);
          let expanded;
          if (_bind$2.$tag === 1) {
            const _ok = _bind$2;
            expanded = _ok._0;
          } else {
            return _bind$2;
          }
          const _tmp = current.val;
          const _bind$3 = ", ";
          current.val = `${_tmp}(${_M0MPC15array5Array4joinGsE(expanded, new _M0TPC16string10StringView(_bind$3, 0, _bind$3.length))})`;
          nested.val = true;
        } else {
          current.val = `${current.val}(${inner})`;
        }
        i.val = j.val;
        continue;
      }
      if (c === 38 && bracket.val === 0) {
        if (i.val > 0 && !_M0MPC15array5Array8containsGcE([32, 9, 10, 13, 62, 43, 126, 124], _M0MPC15array5Array2atGcE(chars, i.val - 1 | 0))) {
          return new _M0DTPC16result6ResultGURPB5ArrayGsEbERP217zhengxin_2dcoding4scss10ParseErrorE3Err(new _M0DTPC15error5Error47zhengxin_2dcoding_2fscss_2eParseError_2eInvalid("parent selector must start a compound"));
        }
        _M0MPC15array5Array4pushGRPC14json10WriteFrameE(segments, current.val);
        current.val = "";
        i.val = i.val + 1 | 0;
        continue;
      }
      current.val = `${current.val}${_M0IPC14char4CharPB4Show10to__string(c)}`;
      i.val = i.val + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  _M0MPC15array5Array4pushGRPC14json10WriteFrameE(segments, current.val);
  return new _M0DTPC16result6ResultGURPB5ArrayGsEbERP217zhengxin_2dcoding4scss10ParseErrorE2Ok({ _0: segments, _1: nested.val });
}
function _M0MP217zhengxin_2dcoding4scss7Emitter5flush(self) {
  if (_M0MPC15array5Array9is__emptyGRPB4JsonE(self.pending)) {
    return new _M0DTPC16result6ResultGuRP217zhengxin_2dcoding4scss10ParseErrorE2Ok(undefined);
  }
  const _tmp = self.pending;
  const _bind$2 = "";
  const declarations = _M0MPC15array5Array4joinGsE(_tmp, new _M0TPC16string10StringView(_bind$2, 0, _bind$2.length));
  const _tmp$2 = self.size;
  const _tmp$3 = declarations.length;
  const _tmp$4 = self.parents;
  const _bind$3 = ", ";
  self.size = _tmp$2 + ((_tmp$3 + _M0MPC15array5Array4joinGsE(_tmp$4, new _M0TPC16string10StringView(_bind$3, 0, _bind$3.length)).length | 0) + 5 | 0) | 0;
  if (self.size > 1000000) {
    return new _M0DTPC16result6ResultGuRP217zhengxin_2dcoding4scss10ParseErrorE3Err(new _M0DTPC15error5Error47zhengxin_2dcoding_2fscss_2eParseError_2eInvalid("CSS output limit"));
  }
  _M0MPC15array5Array4pushGRPC14json10WriteFrameE(self.output, new _M0TP217zhengxin_2dcoding4scss7CssRule(_M0MPC15array5Array4copyGsE(self.parents), declarations, _M0MPC15array5Array4copyGsE(self.context), self.path));
  self.pending = [];
  self.pending_size = 0;
  return new _M0DTPC16result6ResultGuRP217zhengxin_2dcoding4scss10ParseErrorE2Ok(undefined);
}
function _M0FP217zhengxin_2dcoding4scss17control__variable(source) {
  const value = _M0MPC16string10StringView9to__owned(_M0MPC16string6String4trim(source, undefined));
  let _tmp;
  const _bind$2 = "$";
  if (!_M0MPC16string6String11has__prefix(value, new _M0TPC16string10StringView(_bind$2, 0, _bind$2.length))) {
    _tmp = true;
  } else {
    _tmp = value.length < 2 || !_M0MPB4Iter3allGcE(_M0MPC15array5Array4iterGcE(_M0MPC16string6String9to__array(_M0MPC16string10StringView9to__owned(_M0MPC16string6String11sub_2einner(value, 1, undefined)))), _M0FP217zhengxin_2dcoding4scss10name__char);
  }
  if (_tmp) {
    return new _M0DTPC16result6ResultGsRP217zhengxin_2dcoding4scss10ParseErrorE3Err(new _M0DTPC15error5Error47zhengxin_2dcoding_2fscss_2eParseError_2eInvalid("invalid loop variable"));
  }
  return new _M0DTPC16result6ResultGsRP217zhengxin_2dcoding4scss10ParseErrorE2Ok(_M0FP217zhengxin_2dcoding4scss10identifier(_M0MPC16string10StringView9to__owned(_M0MPC16string6String11sub_2einner(value, 1, undefined))));
}
function _M0MP217zhengxin_2dcoding4scss5Scope11flow__scope(self) {
  const _tmp = _M0MP217zhengxin_2dcoding4scss5Scope3new(self);
  return new _M0TP217zhengxin_2dcoding4scss5Scope(_tmp.vars, _tmp.mixins, _tmp.functions, _tmp.standard_modules, _tmp.module_scopes, _tmp.star_scopes, _tmp.forwarded_vars, _tmp.forwarded_mixins, _tmp.forwarded_functions, _tmp.configured, _tmp.configuration, _tmp.path, _tmp.evaluation, _tmp.returned, true, _tmp.parent);
}
function _M0FP217zhengxin_2dcoding4scss9selectors(parent, child) {
  return _M0FP217zhengxin_2dcoding4scss18resolve__selectors(parent, child, true, 0);
}
function _M0FP217zhengxin_2dcoding4scss18validate__function(nodes) {
  const _bind$2 = nodes.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind$2) {
      const node = nodes[_];
      let header;
      let body;
      _L: {
        _L$2: {
          let value;
          _L$3: {
            if (node.$tag === 0) {
              const _Leaf = node;
              const _value = _Leaf._0;
              value = _value;
              break _L$3;
            } else {
              const _Block = node;
              const _header = _Block._0;
              const _body = _Block._1;
              header = _header;
              body = _body;
              break _L$2;
            }
          }
          let _tmp$2;
          const _bind$3 = "$";
          if (_M0MPC16string6String11has__prefix(value, new _M0TPC16string10StringView(_bind$3, 0, _bind$3.length))) {
            _tmp$2 = true;
          } else {
            let _tmp$3;
            const _bind$4 = "@return ";
            if (_M0MPC16string6String11has__prefix(value, new _M0TPC16string10StringView(_bind$4, 0, _bind$4.length))) {
              _tmp$3 = true;
            } else {
              let _tmp$4;
              const _bind$5 = "@error ";
              if (_M0MPC16string6String11has__prefix(value, new _M0TPC16string10StringView(_bind$5, 0, _bind$5.length))) {
                _tmp$4 = true;
              } else {
                let _tmp$5;
                const _bind$6 = "@warn ";
                if (_M0MPC16string6String11has__prefix(value, new _M0TPC16string10StringView(_bind$6, 0, _bind$6.length))) {
                  _tmp$5 = true;
                } else {
                  const _bind$7 = "@debug ";
                  _tmp$5 = _M0MPC16string6String11has__prefix(value, new _M0TPC16string10StringView(_bind$7, 0, _bind$7.length));
                }
                _tmp$4 = _tmp$5;
              }
              _tmp$3 = _tmp$4;
            }
            _tmp$2 = _tmp$3;
          }
          if (!_tmp$2) {
            return new _M0DTPC16result6ResultGuRP217zhengxin_2dcoding4scss10ParseErrorE3Err(new _M0DTPC15error5Error47zhengxin_2dcoding_2fscss_2eParseError_2eInvalid("function may only contain value statements"));
          }
          break _L;
        }
        let _tmp$2;
        const _bind$3 = "@if ";
        if (_M0MPC16string6String11has__prefix(header, new _M0TPC16string10StringView(_bind$3, 0, _bind$3.length))) {
          _tmp$2 = true;
        } else {
          let _tmp$3;
          if (header === "@else") {
            _tmp$3 = true;
          } else {
            let _tmp$4;
            const _bind$4 = "@else if ";
            if (_M0MPC16string6String11has__prefix(header, new _M0TPC16string10StringView(_bind$4, 0, _bind$4.length))) {
              _tmp$4 = true;
            } else {
              let _tmp$5;
              const _bind$5 = "@each ";
              if (_M0MPC16string6String11has__prefix(header, new _M0TPC16string10StringView(_bind$5, 0, _bind$5.length))) {
                _tmp$5 = true;
              } else {
                let _tmp$6;
                const _bind$6 = "@for ";
                if (_M0MPC16string6String11has__prefix(header, new _M0TPC16string10StringView(_bind$6, 0, _bind$6.length))) {
                  _tmp$6 = true;
                } else {
                  const _bind$7 = "@while ";
                  _tmp$6 = _M0MPC16string6String11has__prefix(header, new _M0TPC16string10StringView(_bind$7, 0, _bind$7.length));
                }
                _tmp$5 = _tmp$6;
              }
              _tmp$4 = _tmp$5;
            }
            _tmp$3 = _tmp$4;
          }
          _tmp$2 = _tmp$3;
        }
        if (!_tmp$2) {
          return new _M0DTPC16result6ResultGuRP217zhengxin_2dcoding4scss10ParseErrorE3Err(new _M0DTPC15error5Error47zhengxin_2dcoding_2fscss_2eParseError_2eInvalid("function cannot emit CSS"));
        }
        const _bind$4 = _M0FP217zhengxin_2dcoding4scss18validate__function(body);
        if (_bind$4.$tag === 1) {
          const _ok = _bind$4;
          _ok._0;
        } else {
          return _bind$4;
        }
      }
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return new _M0DTPC16result6ResultGuRP217zhengxin_2dcoding4scss10ParseErrorE2Ok(undefined);
}
function _M0FP217zhengxin_2dcoding4scss21validate__mixin__body(nodes) {
  const _bind$2 = nodes.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind$2) {
      const node = nodes[_];
      let header;
      let body;
      _L: {
        _L$2: {
          if (node.$tag === 1) {
            const _Block = node;
            const _header = _Block._0;
            const _body = _Block._1;
            header = _header;
            body = _body;
            break _L$2;
          }
          break _L;
        }
        const _bind$3 = "@mixin ";
        if (_M0MPC16string6String11has__prefix(header, new _M0TPC16string10StringView(_bind$3, 0, _bind$3.length))) {
          return new _M0DTPC16result6ResultGuRP217zhengxin_2dcoding4scss10ParseErrorE3Err(new _M0DTPC15error5Error47zhengxin_2dcoding_2fscss_2eParseError_2eInvalid("mixin definitions cannot be nested inside mixins"));
        }
        const _bind$4 = _M0FP217zhengxin_2dcoding4scss21validate__mixin__body(body);
        if (_bind$4.$tag === 1) {
          const _ok = _bind$4;
          _ok._0;
        } else {
          return _bind$4;
        }
      }
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return new _M0DTPC16result6ResultGuRP217zhengxin_2dcoding4scss10ParseErrorE2Ok(undefined);
}
function _M0FP217zhengxin_2dcoding4scss19selector__separator(text) {
  return _M0MPC15array5Array8containsGsE([" ", ">", "+", "~", "|"], text);
}
function _M0FP217zhengxin_2dcoding4scss15selector__units(text) {
  const chars = _M0MPC16string6String9to__array(text);
  const out = [];
  const i = new _M0TPB8MutLocalGiE(0);
  while (true) {
    if (i.val < chars.length) {
      if (_M0MPC15array5Array8containsGcE([32, 9, 10, 13], _M0MPC15array5Array2atGcE(chars, i.val))) {
        if (!_M0MPC15array5Array9is__emptyGRPB4JsonE(out) && _M0IP016_24default__implPB2Eq10not__equalGOsE(_M0MPC15array5Array4lastGsE(out), " ")) {
          _M0MPC15array5Array4pushGRPC14json10WriteFrameE(out, " ");
        }
        i.val = i.val + 1 | 0;
        continue;
      }
      if (_M0MPC15array5Array8containsGcE([62, 43, 126, 124], _M0MPC15array5Array2atGcE(chars, i.val))) {
        _M0MPC15array5Array4pushGRPC14json10WriteFrameE(out, _M0IPC14char4CharPB4Show10to__string(_M0MPC15array5Array2atGcE(chars, i.val)));
        i.val = i.val + 1 | 0;
        continue;
      }
      const start = i.val;
      if (_M0MPC15array5Array8containsGcE([46, 35, 37, 58], _M0MPC15array5Array2atGcE(chars, i.val))) {
        const c = _M0MPC15array5Array2atGcE(chars, i.val);
        i.val = i.val + 1 | 0;
        if (c === 58 && (i.val < chars.length && _M0MPC15array5Array2atGcE(chars, i.val) === 58)) {
          i.val = i.val + 1 | 0;
        }
      }
      const quote = new _M0TPB8MutLocalGcE(0);
      const level = new _M0TPB8MutLocalGiE(0);
      while (true) {
        if (i.val < chars.length) {
          const c = _M0MPC15array5Array2atGcE(chars, i.val);
          if (c === 92) {
            i.val = i.val + ((i.val + 1 | 0) < chars.length ? 2 : 1) | 0;
            continue;
          }
          if (quote.val !== 0) {
            if (c === quote.val) {
              quote.val = 0;
            }
          } else {
            if (c === 34 || c === 39) {
              quote.val = c;
            } else {
              if (c === 91 && (level.val === 0 && i.val > start)) {
                break;
              } else {
                if (c === 40 || c === 91) {
                  level.val = level.val + 1 | 0;
                } else {
                  if (c === 41 || c === 93) {
                    level.val = level.val - 1 | 0;
                  } else {
                    if (level.val === 0 && _M0MPC15array5Array8containsGcE([32, 9, 10, 13, 46, 35, 37, 58, 62, 43, 126, 124, 44], c)) {
                      break;
                    }
                  }
                }
              }
            }
          }
          i.val = i.val + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      if (i.val === start || (level.val !== 0 || quote.val !== 0)) {
        return new _M0DTPC16result6ResultGRPB5ArrayGsERP217zhengxin_2dcoding4scss10ParseErrorE3Err(new _M0DTPC15error5Error47zhengxin_2dcoding_2fscss_2eParseError_2eInvalid("invalid selector"));
      }
      _M0MPC15array5Array4pushGRPC14json10WriteFrameE(out, _M0MPC16string6String11from__array(_M0MPC15array5Array12view_2einnerGcE(chars, start, i.val)));
      continue;
    } else {
      break;
    }
  }
  if (_M0IPC16option6OptionPB2Eq5equalGsE(_M0MPC15array5Array4lastGsE(out), " ")) {
    _M0MPC15array5Array3popGRPC14json10WriteFrameE(out);
  }
  return new _M0DTPC16result6ResultGRPB5ArrayGsERP217zhengxin_2dcoding4scss10ParseErrorE2Ok(out);
}
function _M0MP217zhengxin_2dcoding4scss7Emitter14add__extension(self, source, parents) {
  if (_M0MPC15array5Array9is__emptyGRPB4JsonE(parents)) {
    return new _M0DTPC16result6ResultGuRP217zhengxin_2dcoding4scss10ParseErrorE3Err(new _M0DTPC15error5Error47zhengxin_2dcoding_2fscss_2eParseError_2eInvalid("extend outside rule"));
  }
  const _bind$2 = "!optional";
  const optional = _M0MPC16string6String11has__suffix(source, new _M0TPC16string10StringView(_bind$2, 0, _bind$2.length));
  const text = optional ? _M0MPC16string10StringView9to__owned(_M0MPC16string10StringView4trim(_M0MPC16string6String11sub_2einner(source, 0, source.length - 9 | 0), undefined)) : source;
  const _bind$3 = _M0FP217zhengxin_2dcoding4scss10split__top(text, 44);
  let _bind$4;
  if (_bind$3.$tag === 1) {
    const _ok = _bind$3;
    _bind$4 = _ok._0;
  } else {
    return _bind$3;
  }
  const _bind$5 = _bind$4.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind$5) {
      const target = _bind$4[_];
      const _bind$6 = _M0FP217zhengxin_2dcoding4scss15selector__units(target);
      let tokens;
      if (_bind$6.$tag === 1) {
        const _ok = _bind$6;
        tokens = _ok._0;
      } else {
        return _bind$6;
      }
      let _tmp$2;
      if (tokens.length !== 1) {
        _tmp$2 = true;
      } else {
        let _tmp$3;
        if (_M0FP217zhengxin_2dcoding4scss19selector__separator(_M0MPC15array5Array2atGRPB4JsonE(tokens, 0))) {
          _tmp$3 = true;
        } else {
          let _tmp$4;
          const _bind$7 = "&";
          if (_M0MPC16string6String8contains(target, new _M0TPC16string10StringView(_bind$7, 0, _bind$7.length))) {
            _tmp$4 = true;
          } else {
            _tmp$4 = _M0MPC16string6String9is__empty(target);
          }
          _tmp$3 = _tmp$4;
        }
        _tmp$2 = _tmp$3;
      }
      if (_tmp$2) {
        return new _M0DTPC16result6ResultGuRP217zhengxin_2dcoding4scss10ParseErrorE3Err(new _M0DTPC15error5Error47zhengxin_2dcoding_2fscss_2eParseError_2eInvalid("extend requires a simple selector"));
      }
      _M0MPC15array5Array4pushGRPC14json10WriteFrameE(self.extensions, new _M0TP217zhengxin_2dcoding4scss9Extension(target, _M0MPC15array5Array4copyGsE(parents), _M0MPC15array5Array4copyGsE(self.context), self.path, optional, false));
      if (self.extensions.length > 4096) {
        return new _M0DTPC16result6ResultGuRP217zhengxin_2dcoding4scss10ParseErrorE3Err(new _M0DTPC15error5Error47zhengxin_2dcoding_2fscss_2eParseError_2eInvalid("extension limit"));
      }
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return new _M0DTPC16result6ResultGuRP217zhengxin_2dcoding4scss10ParseErrorE2Ok(undefined);
}
function _M0MP217zhengxin_2dcoding4scss7Emitter8property(self, parents, key, value) {
  if (_M0IP016_24default__implPB2Eq10not__equalGRPB5ArrayGsEE(self.parents, parents)) {
    const _bind$2 = _M0MP217zhengxin_2dcoding4scss7Emitter5flush(self);
    if (_bind$2.$tag === 1) {
      const _ok = _bind$2;
      _ok._0;
    } else {
      return _bind$2;
    }
    self.parents = parents;
  }
  let _tmp;
  const _bind$2 = "--";
  if (_M0MPC16string6String11has__prefix(key, new _M0TPC16string10StringView(_bind$2, 0, _bind$2.length))) {
    _tmp = ":";
  } else {
    _tmp = ": ";
  }
  const text = `  ${key}${_tmp}${value};\n`;
  if (text.length > 1000000) {
    return new _M0DTPC16result6ResultGuRP217zhengxin_2dcoding4scss10ParseErrorE3Err(new _M0DTPC15error5Error47zhengxin_2dcoding_2fscss_2eParseError_2eInvalid("property limit"));
  }
  self.pending_size = self.pending_size + text.length | 0;
  if (self.pending_size > (1000000 - self.size | 0)) {
    return new _M0DTPC16result6ResultGuRP217zhengxin_2dcoding4scss10ParseErrorE3Err(new _M0DTPC15error5Error47zhengxin_2dcoding_2fscss_2eParseError_2eInvalid("CSS output limit"));
  }
  return new _M0DTPC16result6ResultGuRP217zhengxin_2dcoding4scss10ParseErrorE2Ok(_M0MPC15array5Array4pushGRPC14json10WriteFrameE(self.pending, text));
}
function _M0MP217zhengxin_2dcoding4scss7Emitter16release__hoisted(self) {
  const retained = [];
  const _bind$2 = self.hoisted;
  const _bind$3 = _bind$2.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind$3) {
      const _foreach_element = _bind$2[_];
      let depth;
      let rules;
      _L: {
        const _depth = _foreach_element._0;
        const _rules = _foreach_element._1;
        depth = _depth;
        rules = _rules;
        break _L;
      }
      if (self.context.length <= depth) {
        _M0MPC15array5Array6appendGRP217zhengxin_2dcoding4scss7CssRuleE(self.output, new _M0TPB9ArrayViewGRP217zhengxin_2dcoding4scss7CssRuleE(rules, 0, rules.length));
      } else {
        _M0MPC15array5Array4pushGRPC14json10WriteFrameE(retained, { _0: depth, _1: rules });
      }
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  _M0MPC15array5Array5clearGsE(self.hoisted);
  _M0MPC15array5Array6appendGRP217zhengxin_2dcoding4scss7CssRuleE(self.hoisted, new _M0TPB9ArrayViewGUiRPB5ArrayGRP217zhengxin_2dcoding4scss7CssRuleEEE(retained, 0, retained.length));
}
function _M0MP217zhengxin_2dcoding4scss5Scope6assign(self, name, value) {
  const _bind$2 = ".";
  if (_M0MPC16string6String8contains(name, new _M0TPC16string10StringView(_bind$2, 0, _bind$2.length))) {
    let owner;
    let key;
    _L: {
      const _bind$3 = _M0MP217zhengxin_2dcoding4scss5Scope16qualified__owner(self, name);
      let _bind$4;
      if (_bind$3.$tag === 1) {
        const _ok = _bind$3;
        _bind$4 = _ok._0;
      } else {
        return _bind$3;
      }
      const _owner = _bind$4._0;
      const _key = _bind$4._1;
      owner = _owner;
      key = _key;
      break _L;
    }
    _M0MPB3Map3setGsRP217zhengxin_2dcoding4scss9SassValueE(owner.vars, key, value);
    return new _M0DTPC16result6ResultGuRP217zhengxin_2dcoding4scss10ParseErrorE2Ok(undefined);
  }
  if (self.flow && !_M0MPB3Map8containsGsRP217zhengxin_2dcoding4scss9SassValueE(self.vars, name)) {
    let parent;
    _L: {
      _L$2: {
        const _bind$3 = self.parent;
        if (_bind$3 === undefined) {
        } else {
          const _Some = _bind$3;
          const _parent = _Some;
          parent = _parent;
          break _L$2;
        }
        break _L;
      }
      const _bind$3 = _M0MP217zhengxin_2dcoding4scss5Scope3get(parent, name);
      let _bind$4;
      if (_bind$3.$tag === 1) {
        const _ok = _bind$3;
        _bind$4 = _ok._0;
      } else {
        return _bind$3;
      }
      if (_bind$4 === undefined) {
      } else {
        const _bind$5 = _M0MP217zhengxin_2dcoding4scss5Scope6assign(parent, name, value);
        if (_bind$5.$tag === 1) {
          const _ok = _bind$5;
          _ok._0;
        } else {
          return _bind$5;
        }
        return new _M0DTPC16result6ResultGuRP217zhengxin_2dcoding4scss10ParseErrorE2Ok(undefined);
      }
    }
  }
  const _bind$3 = self.parent;
  if (_bind$3 === undefined) {
    if (!_M0MPB3Map8containsGsRP217zhengxin_2dcoding4scss9SassValueE(self.vars, name)) {
      let owner;
      let key;
      _L: {
        _L$2: {
          const _bind$4 = _M0MP217zhengxin_2dcoding4scss5Scope14star__variable(self, name);
          let _bind$5;
          if (_bind$4.$tag === 1) {
            const _ok = _bind$4;
            _bind$5 = _ok._0;
          } else {
            return _bind$4;
          }
          if (_bind$5 === undefined) {
          } else {
            const _Some = _bind$5;
            const _x = _Some;
            const _owner = _x._0;
            const _key = _x._1;
            owner = _owner;
            key = _key;
            break _L$2;
          }
          break _L;
        }
        _M0MPB3Map3setGsRP217zhengxin_2dcoding4scss9SassValueE(owner.vars, key, value);
        return new _M0DTPC16result6ResultGuRP217zhengxin_2dcoding4scss10ParseErrorE2Ok(undefined);
      }
    }
  }
  return new _M0DTPC16result6ResultGuRP217zhengxin_2dcoding4scss10ParseErrorE2Ok(_M0MPB3Map3setGsRP217zhengxin_2dcoding4scss9SassValueE(self.vars, name, value));
}
function _M0FP217zhengxin_2dcoding4scss9directory(path) {
  const _bind$2 = "/";
  const parts = _M0MPB4Iter9to__arrayGRPC16string10StringViewE(_M0MPC16string6String5split(path, new _M0TPC16string10StringView(_bind$2, 0, _bind$2.length)));
  if (parts.length < 2) {
    return "";
  } else {
    const _tmp = _M0MPC15array9ArrayView9to__ownedGsE(_M0MPC15array5Array12view_2einnerGsE(parts, 0, parts.length - 1 | 0));
    const _bind$3 = "/";
    return `${_M0MPC15array5Array4joinGRPC16string10StringViewE(_tmp, new _M0TPC16string10StringView(_bind$3, 0, _bind$3.length))}/`;
  }
}
function _M0FP217zhengxin_2dcoding4scss15forward__policy(clause) {
  const tail = new _M0TPB8MutLocalGsE(clause);
  const prefix = new _M0TPB8MutLocalGsE("");
  const _tmp = tail.val;
  const _bind$2 = "as ";
  if (_M0MPC16string6String11has__prefix(_tmp, new _M0TPC16string10StringView(_bind$2, 0, _bind$2.length))) {
    const _tmp$2 = _M0MPC16string6String11sub_2einner(tail.val, 3, undefined);
    const _bind$3 = " ";
    const parts = _M0MPB4Iter9to__arrayGRPC16string10StringViewE(_M0MPC16string10StringView5split(_tmp$2, new _M0TPC16string10StringView(_bind$3, 0, _bind$3.length)));
    const value = _M0MPC16string10StringView9to__owned(_M0MPC15array5Array2atGRPB4JsonE(parts, 0));
    const _bind$4 = "*";
    if (!_M0MPC16string6String11has__suffix(value, new _M0TPC16string10StringView(_bind$4, 0, _bind$4.length))) {
      return new _M0DTPC16result6ResultGUsbbRPB5ArrayGsEERP217zhengxin_2dcoding4scss10ParseErrorE3Err(new _M0DTPC15error5Error47zhengxin_2dcoding_2fscss_2eParseError_2eInvalid("forward prefix requires star"));
    }
    prefix.val = _M0FP217zhengxin_2dcoding4scss10identifier(_M0MPC16string10StringView9to__owned(_M0MPC16string6String11sub_2einner(value, 0, value.length - 1 | 0)));
    const _tmp$3 = _M0MPC15array9ArrayView9to__ownedGsE(_M0MPC15array5Array12view_2einnerGsE(parts, 1, undefined));
    const _bind$5 = " ";
    tail.val = _M0MPC16string10StringView9to__owned(_M0MPC16string6String4trim(_M0MPC15array5Array4joinGRPC16string10StringViewE(_tmp$3, new _M0TPC16string10StringView(_bind$5, 0, _bind$5.length)), undefined));
  }
  const _tmp$2 = tail.val;
  const _bind$3 = "show ";
  const show = _M0MPC16string6String11has__prefix(_tmp$2, new _M0TPC16string10StringView(_bind$3, 0, _bind$3.length));
  const _tmp$3 = tail.val;
  const _bind$4 = "hide ";
  const hide = _M0MPC16string6String11has__prefix(_tmp$3, new _M0TPC16string10StringView(_bind$4, 0, _bind$4.length));
  if (!_M0MPC16string6String9is__empty(tail.val) && (!show && !hide)) {
    return new _M0DTPC16result6ResultGUsbbRPB5ArrayGsEERP217zhengxin_2dcoding4scss10ParseErrorE3Err(new _M0DTPC15error5Error47zhengxin_2dcoding_2fscss_2eParseError_2eInvalid("invalid forward clause"));
  }
  let filters;
  if (show || hide) {
    const _bind$5 = _M0FP217zhengxin_2dcoding4scss10split__top(_M0MPC16string10StringView9to__owned(_M0MPC16string6String11sub_2einner(tail.val, 5, undefined)), 44);
    let _tmp$4;
    if (_bind$5.$tag === 1) {
      const _ok = _bind$5;
      _tmp$4 = _ok._0;
    } else {
      return _bind$5;
    }
    filters = _M0MPC15array5Array3mapGssE(_tmp$4, _M0FP217zhengxin_2dcoding4scss10identifier);
  } else {
    filters = [];
  }
  return new _M0DTPC16result6ResultGUsbbRPB5ArrayGsEERP217zhengxin_2dcoding4scss10ParseErrorE2Ok({ _0: prefix.val, _1: show, _2: hide, _3: filters });
}
function _M0FP217zhengxin_2dcoding4scss16forward__visible(name, show, hide, filters) {
  return (!show || _M0MPC15array5Array8containsGsE(filters, name)) && (!hide || !_M0MPC15array5Array8containsGsE(filters, name));
}
function _M0FP217zhengxin_2dcoding4scss17validate__content(nodes, inside) {
  const _bind$2 = nodes.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind$2) {
      const node = nodes[_];
      let header;
      let body;
      _L: {
        _L$2: {
          let text;
          _L$3: {
            if (node.$tag === 0) {
              const _Leaf = node;
              const _text = _Leaf._0;
              text = _text;
              break _L$3;
            } else {
              const _Block = node;
              const _header = _Block._0;
              const _body = _Block._1;
              header = _header;
              body = _body;
              break _L$2;
            }
          }
          if (text === "@content" && !inside) {
            return new _M0DTPC16result6ResultGuRP217zhengxin_2dcoding4scss10ParseErrorE3Err(new _M0DTPC15error5Error47zhengxin_2dcoding_2fscss_2eParseError_2eInvalid("content outside mixin"));
          }
          break _L;
        }
        let _tmp$2;
        if (inside) {
          _tmp$2 = true;
        } else {
          const _bind$3 = "@mixin ";
          _tmp$2 = _M0MPC16string6String11has__prefix(header, new _M0TPC16string10StringView(_bind$3, 0, _bind$3.length));
        }
        const _bind$3 = _M0FP217zhengxin_2dcoding4scss17validate__content(body, _tmp$2);
        if (_bind$3.$tag === 1) {
          const _ok = _bind$3;
          _ok._0;
        } else {
          return _bind$3;
        }
      }
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return new _M0DTPC16result6ResultGuRP217zhengxin_2dcoding4scss10ParseErrorE2Ok(undefined);
}
function _M0FP217zhengxin_2dcoding4scss19validate__semantics(nodes, root, function_, inside_mixin, flow) {
  const before_rules = new _M0TPB8MutLocalGbE(true);
  const _bind$2 = nodes.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind$2) {
      const node = nodes[_];
      let header;
      let body;
      _L: {
        _L$2: {
          let text;
          _L$3: {
            if (node.$tag === 0) {
              const _Leaf = node;
              const _text = _Leaf._0;
              text = _text;
              break _L$3;
            } else {
              const _Block = node;
              const _header = _Block._0;
              const _body = _Block._1;
              header = _header;
              body = _body;
              break _L$2;
            }
          }
          let _tmp$2;
          const _bind$3 = "@return";
          if (_M0MPC16string6String11has__prefix(text, new _M0TPC16string10StringView(_bind$3, 0, _bind$3.length))) {
            _tmp$2 = !function_;
          } else {
            _tmp$2 = false;
          }
          if (_tmp$2) {
            return new _M0DTPC16result6ResultGuRP217zhengxin_2dcoding4scss10ParseErrorE3Err(new _M0DTPC15error5Error47zhengxin_2dcoding_2fscss_2eParseError_2eInvalid("return outside function"));
          }
          let _tmp$3;
          const _bind$4 = "@use ";
          if (_M0MPC16string6String11has__prefix(text, new _M0TPC16string10StringView(_bind$4, 0, _bind$4.length))) {
            _tmp$3 = true;
          } else {
            const _bind$5 = "@forward ";
            _tmp$3 = _M0MPC16string6String11has__prefix(text, new _M0TPC16string10StringView(_bind$5, 0, _bind$5.length));
          }
          if (_tmp$3) {
            if (!root || !before_rules.val) {
              return new _M0DTPC16result6ResultGuRP217zhengxin_2dcoding4scss10ParseErrorE3Err(new _M0DTPC15error5Error47zhengxin_2dcoding_2fscss_2eParseError_2eInvalid("module directives must precede rules"));
            }
          } else {
            const _bind$5 = "$";
            if (!_M0MPC16string6String11has__prefix(text, new _M0TPC16string10StringView(_bind$5, 0, _bind$5.length))) {
              before_rules.val = false;
            }
          }
          break _L;
        }
        before_rules.val = false;
        const _bind$3 = "@function ";
        const is_function = _M0MPC16string6String11has__prefix(header, new _M0TPC16string10StringView(_bind$3, 0, _bind$3.length));
        const _bind$4 = "@mixin ";
        const is_mixin = _M0MPC16string6String11has__prefix(header, new _M0TPC16string10StringView(_bind$4, 0, _bind$4.length));
        let is_flow;
        const _bind$5 = "@if ";
        if (_M0MPC16string6String11has__prefix(header, new _M0TPC16string10StringView(_bind$5, 0, _bind$5.length))) {
          is_flow = true;
        } else {
          let _tmp$2;
          if (header === "@else") {
            _tmp$2 = true;
          } else {
            let _tmp$3;
            const _bind$6 = "@else if ";
            if (_M0MPC16string6String11has__prefix(header, new _M0TPC16string10StringView(_bind$6, 0, _bind$6.length))) {
              _tmp$3 = true;
            } else {
              let _tmp$4;
              const _bind$7 = "@while ";
              if (_M0MPC16string6String11has__prefix(header, new _M0TPC16string10StringView(_bind$7, 0, _bind$7.length))) {
                _tmp$4 = true;
              } else {
                let _tmp$5;
                const _bind$8 = "@each ";
                if (_M0MPC16string6String11has__prefix(header, new _M0TPC16string10StringView(_bind$8, 0, _bind$8.length))) {
                  _tmp$5 = true;
                } else {
                  const _bind$9 = "@for ";
                  _tmp$5 = _M0MPC16string6String11has__prefix(header, new _M0TPC16string10StringView(_bind$9, 0, _bind$9.length));
                }
                _tmp$4 = _tmp$5;
              }
              _tmp$3 = _tmp$4;
            }
            _tmp$2 = _tmp$3;
          }
          is_flow = _tmp$2;
        }
        if ((is_function || is_mixin) && (flow || (function_ || inside_mixin))) {
          return new _M0DTPC16result6ResultGuRP217zhengxin_2dcoding4scss10ParseErrorE3Err(new _M0DTPC15error5Error47zhengxin_2dcoding_2fscss_2eParseError_2eInvalid("nested callable definition"));
        }
        if (is_function) {
          const _bind$6 = _M0FP217zhengxin_2dcoding4scss18validate__function(body);
          if (_bind$6.$tag === 1) {
            const _ok = _bind$6;
            _ok._0;
          } else {
            return _bind$6;
          }
        }
        const _bind$6 = _M0FP217zhengxin_2dcoding4scss19validate__semantics(body, false, function_ || is_function, inside_mixin || is_mixin, flow || is_flow);
        if (_bind$6.$tag === 1) {
          const _ok = _bind$6;
          _ok._0;
        } else {
          return _bind$6;
        }
      }
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return new _M0DTPC16result6ResultGuRP217zhengxin_2dcoding4scss10ParseErrorE2Ok(undefined);
}
function _M0MP217zhengxin_2dcoding4scss6Source7segment(self) {
  const out = new _M0TPB8MutLocalGsE("");
  const quote = new _M0TPB8MutLocalGcE(0);
  const level = new _M0TPB8MutLocalGiE(0);
  while (true) {
    if (self.pos < self.chars.length) {
      const c = _M0MPC15array5Array2atGcE(self.chars, self.pos);
      self.pos = self.pos + 1 | 0;
      if (quote.val !== 0) {
        out.val = `${out.val}${_M0IPC14char4CharPB4Show10to__string(c)}`;
        if (c === 92 && self.pos < self.chars.length) {
          out.val = `${out.val}${_M0IPC14char4CharPB4Show10to__string(_M0MPC15array5Array2atGcE(self.chars, self.pos))}`;
          self.pos = self.pos + 1 | 0;
        } else {
          if (c === quote.val) {
            quote.val = 0;
          }
        }
        continue;
      }
      if (c === 34 || c === 39) {
        quote.val = c;
        out.val = `${out.val}${_M0IPC14char4CharPB4Show10to__string(c)}`;
        continue;
      }
      if (c === 47 && (self.pos < self.chars.length && _M0MPC15array5Array2atGcE(self.chars, self.pos) === 42)) {
        self.pos = self.pos + 1 | 0;
        const closed = new _M0TPB8MutLocalGbE(false);
        while (true) {
          if ((self.pos + 1 | 0) < self.chars.length) {
            if (_M0MPC15array5Array2atGcE(self.chars, self.pos) === 42 && _M0MPC15array5Array2atGcE(self.chars, self.pos + 1 | 0) === 47) {
              self.pos = self.pos + 2 | 0;
              closed.val = true;
              break;
            }
            self.pos = self.pos + 1 | 0;
            continue;
          } else {
            break;
          }
        }
        if (!closed.val) {
          return new _M0DTPC16result6ResultGUscERP217zhengxin_2dcoding4scss10ParseErrorE3Err(new _M0DTPC15error5Error47zhengxin_2dcoding_2fscss_2eParseError_2eInvalid("unterminated comment"));
        }
        out.val = `${out.val} `;
        continue;
      }
      if (c === 35 && (self.pos < self.chars.length && _M0MPC15array5Array2atGcE(self.chars, self.pos) === 123)) {
        out.val = `${out.val}#{`;
        self.pos = self.pos + 1 | 0;
        const nesting = new _M0TPB8MutLocalGiE(1);
        const q = new _M0TPB8MutLocalGcE(0);
        while (true) {
          if (self.pos < self.chars.length && nesting.val > 0) {
            const x = _M0MPC15array5Array2atGcE(self.chars, self.pos);
            self.pos = self.pos + 1 | 0;
            out.val = `${out.val}${_M0IPC14char4CharPB4Show10to__string(x)}`;
            if (x === 92 && self.pos < self.chars.length) {
              out.val = `${out.val}${_M0IPC14char4CharPB4Show10to__string(_M0MPC15array5Array2atGcE(self.chars, self.pos))}`;
              self.pos = self.pos + 1 | 0;
              continue;
            }
            if (q.val !== 0) {
              if (x === q.val) {
                q.val = 0;
              }
            } else {
              if (x === 34 || x === 39) {
                q.val = x;
              } else {
                if (x === 123) {
                  nesting.val = nesting.val + 1 | 0;
                } else {
                  if (x === 125) {
                    nesting.val = nesting.val - 1 | 0;
                  }
                }
              }
            }
            continue;
          } else {
            break;
          }
        }
        if (nesting.val !== 0) {
          return new _M0DTPC16result6ResultGUscERP217zhengxin_2dcoding4scss10ParseErrorE3Err(new _M0DTPC15error5Error47zhengxin_2dcoding_2fscss_2eParseError_2eInvalid("unterminated interpolation"));
        }
        continue;
      }
      if (c === 47 && (self.pos < self.chars.length && (_M0MPC15array5Array2atGcE(self.chars, self.pos) === 47 && level.val === 0))) {
        while (true) {
          if (self.pos < self.chars.length && _M0MPC15array5Array2atGcE(self.chars, self.pos) !== 10) {
            self.pos = self.pos + 1 | 0;
            continue;
          } else {
            break;
          }
        }
        out.val = `${out.val} `;
        continue;
      }
      if (c === 40 || c === 91) {
        level.val = level.val + 1 | 0;
      }
      if (c === 41 || c === 93) {
        level.val = level.val - 1 | 0;
        if (level.val < 0) {
          return new _M0DTPC16result6ResultGUscERP217zhengxin_2dcoding4scss10ParseErrorE3Err(new _M0DTPC15error5Error47zhengxin_2dcoding_2fscss_2eParseError_2eInvalid("unbalanced value"));
        }
      }
      if (level.val === 0 && (c === 59 || (c === 123 || c === 125))) {
        return new _M0DTPC16result6ResultGUscERP217zhengxin_2dcoding4scss10ParseErrorE2Ok({ _0: _M0MPC16string10StringView9to__owned(_M0MPC16string6String4trim(out.val, undefined)), _1: c });
      }
      out.val = `${out.val}${_M0IPC14char4CharPB4Show10to__string(c)}`;
      continue;
    } else {
      break;
    }
  }
  if (quote.val !== 0 || level.val !== 0) {
    return new _M0DTPC16result6ResultGUscERP217zhengxin_2dcoding4scss10ParseErrorE3Err(new _M0DTPC15error5Error47zhengxin_2dcoding_2fscss_2eParseError_2eInvalid("unterminated value"));
  }
  return new _M0DTPC16result6ResultGUscERP217zhengxin_2dcoding4scss10ParseErrorE2Ok({ _0: _M0MPC16string10StringView9to__owned(_M0MPC16string6String4trim(out.val, undefined)), _1: 0 });
}
function _M0MP217zhengxin_2dcoding4scss6Source10statements(self, closing, depth) {
  if (depth > 32) {
    return new _M0DTPC16result6ResultGRPB5ArrayGRP217zhengxin_2dcoding4scss9StatementERP217zhengxin_2dcoding4scss10ParseErrorE3Err(new _M0DTPC15error5Error47zhengxin_2dcoding_2fscss_2eParseError_2eInvalid("nesting limit"));
  }
  const nodes = [];
  while (true) {
    let text;
    let end;
    _L: {
      const _bind$2 = _M0MP217zhengxin_2dcoding4scss6Source7segment(self);
      let _bind$3;
      if (_bind$2.$tag === 1) {
        const _ok = _bind$2;
        _bind$3 = _ok._0;
      } else {
        return _bind$2;
      }
      const _text = _bind$3._0;
      const _end = _bind$3._1;
      text = _text;
      end = _end;
      break _L;
    }
    if (end === 123) {
      const _bind$2 = _M0MP217zhengxin_2dcoding4scss6Source10statements(self, true, depth + 1 | 0);
      let _tmp;
      if (_bind$2.$tag === 1) {
        const _ok = _bind$2;
        _tmp = _ok._0;
      } else {
        return _bind$2;
      }
      _M0MPC15array5Array4pushGRPC14json10WriteFrameE(nodes, new _M0DTP217zhengxin_2dcoding4scss9Statement5Block(text, _tmp));
    } else {
      if (!_M0MPC16string6String9is__empty(text)) {
        _M0MPC15array5Array4pushGRPC14json10WriteFrameE(nodes, new _M0DTP217zhengxin_2dcoding4scss9Statement4Leaf(text));
      }
    }
    if (end === 125) {
      if (!closing) {
        return new _M0DTPC16result6ResultGRPB5ArrayGRP217zhengxin_2dcoding4scss9StatementERP217zhengxin_2dcoding4scss10ParseErrorE3Err(new _M0DTPC15error5Error47zhengxin_2dcoding_2fscss_2eParseError_2eInvalid("unexpected closing brace"));
      }
      break;
    }
    if (end === 0) {
      if (closing) {
        return new _M0DTPC16result6ResultGRPB5ArrayGRP217zhengxin_2dcoding4scss9StatementERP217zhengxin_2dcoding4scss10ParseErrorE3Err(new _M0DTPC15error5Error47zhengxin_2dcoding_2fscss_2eParseError_2eInvalid("missing closing brace"));
      }
      break;
    }
    continue;
  }
  return new _M0DTPC16result6ResultGRPB5ArrayGRP217zhengxin_2dcoding4scss9StatementERP217zhengxin_2dcoding4scss10ParseErrorE2Ok(nodes);
}
function _M0FP217zhengxin_2dcoding4scss11clean__path(path) {
  let _tmp;
  if (_M0MPC16string6String9is__empty(path)) {
    _tmp = true;
  } else {
    let _tmp$2;
    const _bind$2 = "/";
    if (_M0MPC16string6String11has__prefix(path, new _M0TPC16string10StringView(_bind$2, 0, _bind$2.length))) {
      _tmp$2 = true;
    } else {
      let _tmp$3;
      const _bind$3 = "\\";
      if (_M0MPC16string6String8contains(path, new _M0TPC16string10StringView(_bind$3, 0, _bind$3.length))) {
        _tmp$3 = true;
      } else {
        let _tmp$4;
        const _bind$4 = ":";
        if (_M0MPC16string6String8contains(path, new _M0TPC16string10StringView(_bind$4, 0, _bind$4.length))) {
          _tmp$4 = true;
        } else {
          const _bind$5 = "\u0000";
          _tmp$4 = _M0MPC16string6String8contains(path, new _M0TPC16string10StringView(_bind$5, 0, _bind$5.length));
        }
        _tmp$3 = _tmp$4;
      }
      _tmp$2 = _tmp$3;
    }
    _tmp = _tmp$2;
  }
  if (_tmp) {
    return new _M0DTPC16result6ResultGsRP217zhengxin_2dcoding4scss10ParseErrorE3Err(new _M0DTPC15error5Error47zhengxin_2dcoding_2fscss_2eParseError_2eInvalid("expected relative virtual file path"));
  }
  const parts = [];
  const _bind$2 = "/";
  const _it = _M0MPC16string6String5split(path, new _M0TPC16string10StringView(_bind$2, 0, _bind$2.length));
  while (true) {
    let item;
    _L: {
      const _bind$3 = _M0MPB4Iter4nextGUsRPB4JsonEE(_it);
      if (_bind$3 === undefined) {
        break;
      } else {
        const _Some = _bind$3;
        const _item = _Some;
        item = _item;
        break _L;
      }
    }
    const part = _M0MPC16string10StringView9to__owned(item);
    if (_M0MPC16string6String9is__empty(part) || part === ".") {
      continue;
    }
    if (part === "..") {
      if (_M0MPC15array5Array9is__emptyGRPB4JsonE(parts)) {
        return new _M0DTPC16result6ResultGsRP217zhengxin_2dcoding4scss10ParseErrorE3Err(new _M0DTPC15error5Error47zhengxin_2dcoding_2fscss_2eParseError_2eInvalid("module escapes virtual root"));
      }
      _M0MPC15array5Array3popGRPC14json10WriteFrameE(parts);
    } else {
      _M0MPC15array5Array4pushGRPC14json10WriteFrameE(parts, part);
    }
    continue;
  }
  if (_M0MPC15array5Array9is__emptyGRPB4JsonE(parts)) {
    return new _M0DTPC16result6ResultGsRP217zhengxin_2dcoding4scss10ParseErrorE3Err(new _M0DTPC15error5Error47zhengxin_2dcoding_2fscss_2eParseError_2eInvalid("empty file path"));
  }
  const _bind$3 = "/";
  return new _M0DTPC16result6ResultGsRP217zhengxin_2dcoding4scss10ParseErrorE2Ok(_M0MPC15array5Array4joinGsE(parts, new _M0TPC16string10StringView(_bind$3, 0, _bind$3.length)));
}
function _M0MP217zhengxin_2dcoding4scss10Evaluation7resolve(self, from, url) {
  let _tmp;
  const _bind$2 = "/";
  if (_M0MPC16string6String11has__prefix(url, new _M0TPC16string10StringView(_bind$2, 0, _bind$2.length))) {
    _tmp = true;
  } else {
    let _tmp$2;
    const _bind$3 = "\\";
    if (_M0MPC16string6String8contains(url, new _M0TPC16string10StringView(_bind$3, 0, _bind$3.length))) {
      _tmp$2 = true;
    } else {
      const _bind$4 = ":";
      _tmp$2 = _M0MPC16string6String8contains(url, new _M0TPC16string10StringView(_bind$4, 0, _bind$4.length));
    }
    _tmp = _tmp$2;
  }
  if (_tmp) {
    return new _M0DTPC16result6ResultGsRP217zhengxin_2dcoding4scss10ParseErrorE3Err(new _M0DTPC15error5Error47zhengxin_2dcoding_2fscss_2eParseError_2eInvalid("unsupported module URL"));
  }
  const _bind$3 = _M0FP217zhengxin_2dcoding4scss11clean__path(`${_M0FP217zhengxin_2dcoding4scss9directory(from)}${url}`);
  let path;
  if (_bind$3.$tag === 1) {
    const _ok = _bind$3;
    path = _ok._0;
  } else {
    return _bind$3;
  }
  const dir = _M0FP217zhengxin_2dcoding4scss9directory(path);
  const base = _M0MPC16string10StringView9to__owned(_M0MPC16string6String11sub_2einner(path, dir.length, undefined));
  let suffix;
  const _bind$4 = ".scss";
  if (_M0MPC16string6String11has__suffix(base, new _M0TPC16string10StringView(_bind$4, 0, _bind$4.length))) {
    suffix = "";
  } else {
    suffix = ".scss";
  }
  const candidates = [`${path}${suffix}`, `${dir}_${base}${suffix}`];
  const found = _M0MPC15array5Array6filterGsE(candidates, (p) => _M0MPB3Map8containsGssE(self.files, p));
  if (found.length > 1) {
    return new _M0DTPC16result6ResultGsRP217zhengxin_2dcoding4scss10ParseErrorE3Err(new _M0DTPC15error5Error47zhengxin_2dcoding_2fscss_2eParseError_2eInvalid(`ambiguous module ${url}`));
  }
  if (found.length === 1) {
    return new _M0DTPC16result6ResultGsRP217zhengxin_2dcoding4scss10ParseErrorE2Ok(_M0MPC15array5Array2atGRPB4JsonE(found, 0));
  }
  const _bind$5 = ".scss";
  if (!_M0MPC16string6String11has__suffix(base, new _M0TPC16string10StringView(_bind$5, 0, _bind$5.length))) {
    const found$2 = _M0MPC15array5Array6filterGsE([`${path}/index.scss`, `${path}/_index.scss`], (p) => _M0MPB3Map8containsGssE(self.files, p));
    if (found$2.length > 1) {
      return new _M0DTPC16result6ResultGsRP217zhengxin_2dcoding4scss10ParseErrorE3Err(new _M0DTPC15error5Error47zhengxin_2dcoding_2fscss_2eParseError_2eInvalid(`ambiguous index module ${url}`));
    }
    if (found$2.length === 1) {
      return new _M0DTPC16result6ResultGsRP217zhengxin_2dcoding4scss10ParseErrorE2Ok(_M0MPC15array5Array2atGRPB4JsonE(found$2, 0));
    }
  }
  return new _M0DTPC16result6ResultGsRP217zhengxin_2dcoding4scss10ParseErrorE3Err(new _M0DTPC15error5Error47zhengxin_2dcoding_2fscss_2eParseError_2eInvalid(`module not found ${url}`));
}
function _M0MP217zhengxin_2dcoding4scss5Scope16forward__members(self, library, clause) {
  let hide;
  let prefix;
  let show;
  let filters;
  _L: {
    const _bind$2 = _M0FP217zhengxin_2dcoding4scss15forward__policy(clause);
    let _bind$3;
    if (_bind$2.$tag === 1) {
      const _ok = _bind$2;
      _bind$3 = _ok._0;
    } else {
      return _bind$2;
    }
    const _prefix = _bind$3._0;
    const _show = _bind$3._1;
    const _hide = _bind$3._2;
    const _filters = _bind$3._3;
    hide = _hide;
    prefix = _prefix;
    show = _show;
    filters = _filters;
    break _L;
  }
  const visible = (name) => _M0FP217zhengxin_2dcoding4scss16forward__visible(name, show, hide, filters);
  const vars = _M0MPB3Map4copyGsRP217zhengxin_2dcoding4scss9SassValueE(library.forwarded_vars);
  const _it = _M0MPB3Map5iter2GsRPB4JsonE(library.vars);
  while (true) {
    let name;
    _L$2: {
      const _bind$2 = _M0MPB5Iter24nextGsRPB4JsonE(_it);
      if (_bind$2 === undefined) {
        break;
      } else {
        const _Some = _bind$2;
        const _x = _Some;
        const _name = _x._0;
        name = _name;
        break _L$2;
      }
    }
    if (_M0FP217zhengxin_2dcoding4scss12public__name(name)) {
      _M0MPB3Map3setGsURP217zhengxin_2dcoding4scss5ScopesEE(vars, name, { _0: library, _1: name });
    }
    continue;
  }
  const _it$2 = _M0MPB3Map5iter2GsRPB4JsonE(vars);
  while (true) {
    let name;
    let origin;
    _L$2: {
      const _bind$2 = _M0MPB5Iter24nextGsRPB4JsonE(_it$2);
      if (_bind$2 === undefined) {
        break;
      } else {
        const _Some = _bind$2;
        const _x = _Some;
        const _name = _x._0;
        const _origin = _x._1;
        name = _name;
        origin = _origin;
        break _L$2;
      }
    }
    if (!_M0FP217zhengxin_2dcoding4scss12public__name(name) || !visible(`$${prefix}${name}`)) {
      continue;
    }
    const key = `${prefix}${name}`;
    let previous;
    _L$3: {
      _L$4: {
        const _bind$2 = _M0MPB3Map3getGsURP217zhengxin_2dcoding4scss5ScopesEE(self.forwarded_vars, key);
        if (_bind$2 === undefined) {
        } else {
          const _Some = _bind$2;
          const _previous = _Some;
          previous = _previous;
          break _L$4;
        }
        break _L$3;
      }
      if (!_M0FP217zhengxin_2dcoding4scss12same__origin(previous, origin)) {
        return new _M0DTPC16result6ResultGuRP217zhengxin_2dcoding4scss10ParseErrorE3Err(new _M0DTPC15error5Error47zhengxin_2dcoding_2fscss_2eParseError_2eInvalid("conflicting forwarded variable"));
      }
    }
    _M0MPB3Map3setGsURP217zhengxin_2dcoding4scss5ScopesEE(self.forwarded_vars, key, origin);
    continue;
  }
  const functions = _M0MPB3Map4copyGsRP217zhengxin_2dcoding4scss9SassValueE(library.forwarded_functions);
  const _it$3 = _M0MPB3Map5iter2GsRPB4JsonE(library.functions);
  while (true) {
    let name;
    let value;
    _L$2: {
      const _bind$2 = _M0MPB5Iter24nextGsRPB4JsonE(_it$3);
      if (_bind$2 === undefined) {
        break;
      } else {
        const _Some = _bind$2;
        const _x = _Some;
        const _name = _x._0;
        const _value = _x._1;
        name = _name;
        value = _value;
        break _L$2;
      }
    }
    if (_M0FP217zhengxin_2dcoding4scss12public__name(name)) {
      _M0MPB3Map3setGsRP217zhengxin_2dcoding4scss5MixinE(functions, name, value);
    }
    continue;
  }
  const _it$4 = _M0MPB3Map5iter2GsRPB4JsonE(functions);
  while (true) {
    let name;
    let value;
    _L$2: {
      const _bind$2 = _M0MPB5Iter24nextGsRPB4JsonE(_it$4);
      if (_bind$2 === undefined) {
        break;
      } else {
        const _Some = _bind$2;
        const _x = _Some;
        const _name = _x._0;
        const _value = _x._1;
        name = _name;
        value = _value;
        break _L$2;
      }
    }
    if (!_M0FP217zhengxin_2dcoding4scss12public__name(name) || !visible(`${prefix}${name}`)) {
      continue;
    }
    const key = `${prefix}${name}`;
    let previous;
    _L$3: {
      _L$4: {
        const _bind$2 = _M0MPB3Map3getGsRP217zhengxin_2dcoding4scss5MixinE(self.forwarded_functions, key);
        if (_bind$2 === undefined) {
        } else {
          const _Some = _bind$2;
          const _previous = _Some;
          previous = _previous;
          break _L$4;
        }
        break _L$3;
      }
      _L$5: {
        _L$6: {
          if (_M0IP016_24default__implPB2Eq10not__equalGsE(previous.scope.path, value.scope.path)) {
            break _L$6;
          } else {
            if (_M0IP016_24default__implPB2Eq10not__equalGsE(previous.name, value.name)) {
              break _L$6;
            }
          }
          break _L$5;
        }
        return new _M0DTPC16result6ResultGuRP217zhengxin_2dcoding4scss10ParseErrorE3Err(new _M0DTPC15error5Error47zhengxin_2dcoding_2fscss_2eParseError_2eInvalid("conflicting forwarded function"));
      }
    }
    _M0MPB3Map3setGsRP217zhengxin_2dcoding4scss5MixinE(self.forwarded_functions, key, value);
    continue;
  }
  const mixins = _M0MPB3Map4copyGsRP217zhengxin_2dcoding4scss9SassValueE(library.forwarded_mixins);
  const _it$5 = _M0MPB3Map5iter2GsRPB4JsonE(library.mixins);
  while (true) {
    let name;
    let value;
    _L$2: {
      const _bind$2 = _M0MPB5Iter24nextGsRPB4JsonE(_it$5);
      if (_bind$2 === undefined) {
        break;
      } else {
        const _Some = _bind$2;
        const _x = _Some;
        const _name = _x._0;
        const _value = _x._1;
        name = _name;
        value = _value;
        break _L$2;
      }
    }
    if (_M0FP217zhengxin_2dcoding4scss12public__name(name)) {
      _M0MPB3Map3setGsRP217zhengxin_2dcoding4scss5MixinE(mixins, name, value);
    }
    continue;
  }
  const _it$6 = _M0MPB3Map5iter2GsRPB4JsonE(mixins);
  while (true) {
    let name;
    let value;
    _L$2: {
      const _bind$2 = _M0MPB5Iter24nextGsRPB4JsonE(_it$6);
      if (_bind$2 === undefined) {
        break;
      } else {
        const _Some = _bind$2;
        const _x = _Some;
        const _name = _x._0;
        const _value = _x._1;
        name = _name;
        value = _value;
        break _L$2;
      }
    }
    if (!_M0FP217zhengxin_2dcoding4scss12public__name(name) || !visible(`${prefix}${name}`)) {
      continue;
    }
    const key = `${prefix}${name}`;
    let previous;
    _L$3: {
      _L$4: {
        const _bind$2 = _M0MPB3Map3getGsRP217zhengxin_2dcoding4scss5MixinE(self.forwarded_mixins, key);
        if (_bind$2 === undefined) {
        } else {
          const _Some = _bind$2;
          const _previous = _Some;
          previous = _previous;
          break _L$4;
        }
        break _L$3;
      }
      _L$5: {
        _L$6: {
          if (_M0IP016_24default__implPB2Eq10not__equalGsE(previous.scope.path, value.scope.path)) {
            break _L$6;
          } else {
            if (_M0IP016_24default__implPB2Eq10not__equalGsE(previous.name, value.name)) {
              break _L$6;
            }
          }
          break _L$5;
        }
        return new _M0DTPC16result6ResultGuRP217zhengxin_2dcoding4scss10ParseErrorE3Err(new _M0DTPC15error5Error47zhengxin_2dcoding_2fscss_2eParseError_2eInvalid("conflicting forwarded mixin"));
      }
    }
    _M0MPB3Map3setGsRP217zhengxin_2dcoding4scss5MixinE(self.forwarded_mixins, key, value);
    continue;
  }
  return new _M0DTPC16result6ResultGuRP217zhengxin_2dcoding4scss10ParseErrorE2Ok(undefined);
}
function _M0MP217zhengxin_2dcoding4scss5Scope16evaluate_2einner(self, source, division) {
  const _bind$2 = _M0FP217zhengxin_2dcoding4scss17parse__expression(source);
  let _tmp;
  if (_bind$2.$tag === 1) {
    const _ok = _bind$2;
    _tmp = _ok._0;
  } else {
    return _bind$2;
  }
  return _M0MP217zhengxin_2dcoding4scss5Scope9eval__ast(self, _tmp, division, 0);
}
function _M0MP217zhengxin_2dcoding4scss5Scope9eval__ast(self, expression, division, depth) {
  const _bind$2 = _M0MP217zhengxin_2dcoding4scss5Scope6charge(self);
  if (_bind$2.$tag === 1) {
    const _ok = _bind$2;
    _ok._0;
  } else {
    return _bind$2;
  }
  if (depth > 128) {
    return new _M0DTPC16result6ResultGRP217zhengxin_2dcoding4scss9SassValueRP217zhengxin_2dcoding4scss10ParseErrorE3Err(new _M0DTPC15error5Error47zhengxin_2dcoding_2fscss_2eParseError_2eInvalid("expression evaluation depth"));
  }
  let result;
  let name;
  let arguments_;
  _L: {
    _L$2: {
      let name$2;
      let body;
      _L$3: {
        _L$4: {
          let a;
          let operator;
          let b;
          _L$5: {
            _L$6: {
              let operator$2;
              let value;
              _L$7: {
                _L$8: {
                  let values;
                  _L$9: {
                    _L$10: {
                      let separator;
                      let values$2;
                      let bracketed;
                      _L$11: {
                        _L$12: {
                          let parts;
                          let quoted;
                          _L$13: {
                            _L$14: {
                              let value$2;
                              _L$15: {
                                _L$16: {
                                  let name$3;
                                  _L$17: {
                                    _L$18: {
                                      switch (expression.$tag) {
                                        case 0: {
                                          const _Literal = expression;
                                          const _value = _Literal._0;
                                          result = _value;
                                          break;
                                        }
                                        case 1: {
                                          const _Variable = expression;
                                          const _name = _Variable._0;
                                          name$3 = _name;
                                          break _L$18;
                                        }
                                        case 9: {
                                          const _Group = expression;
                                          const _value$2 = _Group._0;
                                          value$2 = _value$2;
                                          break _L$16;
                                        }
                                        case 8: {
                                          const _Interpolated = expression;
                                          const _parts = _Interpolated._0;
                                          const _quoted = _Interpolated._1;
                                          parts = _parts;
                                          quoted = _quoted;
                                          break _L$14;
                                        }
                                        case 4: {
                                          const _Sequence = expression;
                                          const _values = _Sequence._0;
                                          const _separator = _Sequence._1;
                                          const _bracketed = _Sequence._2;
                                          separator = _separator;
                                          values$2 = _values;
                                          bracketed = _bracketed;
                                          break _L$12;
                                        }
                                        case 5: {
                                          const _Mapping = expression;
                                          const _values$2 = _Mapping._0;
                                          values = _values$2;
                                          break _L$10;
                                        }
                                        case 2: {
                                          const _Unary = expression;
                                          const _operator = _Unary._0;
                                          const _value$3 = _Unary._1;
                                          operator$2 = _operator;
                                          value = _value$3;
                                          break _L$8;
                                        }
                                        case 3: {
                                          const _Binary = expression;
                                          const _operator$2 = _Binary._0;
                                          const _a = _Binary._1;
                                          const _b = _Binary._2;
                                          a = _a;
                                          operator = _operator$2;
                                          b = _b;
                                          break _L$6;
                                        }
                                        case 7: {
                                          const _RawCall = expression;
                                          const _name$2 = _RawCall._0;
                                          const _body = _RawCall._1;
                                          name$2 = _name$2;
                                          body = _body;
                                          break _L$4;
                                        }
                                        default: {
                                          const _Call = expression;
                                          const _name$3 = _Call._0;
                                          const _arguments = _Call._1;
                                          name = _name$3;
                                          arguments_ = _arguments;
                                          break _L$2;
                                        }
                                      }
                                      break _L$17;
                                    }
                                    const _bind$3 = _M0MP217zhengxin_2dcoding4scss5Scope3get(self, name$3);
                                    let _bind$4;
                                    if (_bind$3.$tag === 1) {
                                      const _ok = _bind$3;
                                      _bind$4 = _ok._0;
                                    } else {
                                      return _bind$3;
                                    }
                                    if (_bind$4 === undefined) {
                                      return new _M0DTPC16result6ResultGRP217zhengxin_2dcoding4scss9SassValueRP217zhengxin_2dcoding4scss10ParseErrorE3Err(new _M0DTPC15error5Error47zhengxin_2dcoding_2fscss_2eParseError_2eInvalid(`undefined variable ${name$3}`));
                                    } else {
                                      const _Some = _bind$4;
                                      const _value = _Some;
                                      result = _value;
                                    }
                                  }
                                  break _L$15;
                                }
                                const _bind$3 = _M0MP217zhengxin_2dcoding4scss5Scope9eval__ast(self, value$2, true, depth + 1 | 0);
                                if (_bind$3.$tag === 1) {
                                  const _ok = _bind$3;
                                  result = _ok._0;
                                } else {
                                  return _bind$3;
                                }
                              }
                              break _L$13;
                            }
                            const out = _M0MPB13StringBuilder21StringBuilder_2einner(0);
                            const length = new _M0TPB8MutLocalGiE(0);
                            const _bind$3 = parts.length;
                            let _tmp = 0;
                            while (true) {
                              const _ = _tmp;
                              if (_ < _bind$3) {
                                const part = parts[_];
                                const _bind$4 = _M0MP217zhengxin_2dcoding4scss5Scope9eval__ast(self, part, true, depth + 1 | 0);
                                let value$2;
                                if (_bind$4.$tag === 1) {
                                  const _ok = _bind$4;
                                  value$2 = _ok._0;
                                } else {
                                  return _bind$4;
                                }
                                let text;
                                _L$15: {
                                  _L$16: {
                                    if (value$2.$tag === 5) {
                                      const _List = value$2;
                                      const _x = _List._0;
                                      if (_x.length === 0) {
                                        text = "";
                                      } else {
                                        break _L$16;
                                      }
                                    } else {
                                      break _L$16;
                                    }
                                    break _L$15;
                                  }
                                  if (value$2.$tag === 4) {
                                    text = "";
                                  } else {
                                    const _bind$5 = _M0MP217zhengxin_2dcoding4scss9SassValue11css_2einner(value$2, true, false);
                                    if (_bind$5.$tag === 1) {
                                      const _ok = _bind$5;
                                      text = _ok._0;
                                    } else {
                                      return _bind$5;
                                    }
                                  }
                                }
                                length.val = length.val + text.length | 0;
                                if (length.val > 1000000) {
                                  return new _M0DTPC16result6ResultGRP217zhengxin_2dcoding4scss9SassValueRP217zhengxin_2dcoding4scss10ParseErrorE3Err(new _M0DTPC15error5Error47zhengxin_2dcoding_2fscss_2eParseError_2eInvalid("interpolation size limit"));
                                }
                                _M0IPB13StringBuilderPB6Logger13write__string(out, text);
                                _tmp = _ + 1 | 0;
                                continue;
                              } else {
                                break;
                              }
                            }
                            result = new _M0DTP217zhengxin_2dcoding4scss9SassValue4Text(_M0MPB13StringBuilder10to__string(out), quoted);
                          }
                          break _L$11;
                        }
                        const _bind$3 = _M0MPC15array5Array3mapGRP217zhengxin_2dcoding4scss10ExpressionRP217zhengxin_2dcoding4scss9SassValueEHRP217zhengxin_2dcoding4scss10ParseError(values$2, (v) => _M0MP217zhengxin_2dcoding4scss5Scope9eval__ast(self, v, division, depth + 1 | 0));
                        let _tmp;
                        if (_bind$3.$tag === 1) {
                          const _ok = _bind$3;
                          _tmp = _ok._0;
                        } else {
                          return _bind$3;
                        }
                        result = new _M0DTP217zhengxin_2dcoding4scss9SassValue4List(_tmp, separator, bracketed);
                      }
                      break _L$9;
                    }
                    const result$2 = [];
                    const _bind$3 = values.length;
                    let _tmp = 0;
                    while (true) {
                      const _ = _tmp;
                      if (_ < _bind$3) {
                        const _foreach_element = values[_];
                        let key;
                        let value$2;
                        _L$11: {
                          const _key = _foreach_element._0;
                          const _value = _foreach_element._1;
                          key = _key;
                          value$2 = _value;
                          break _L$11;
                        }
                        const _bind$4 = _M0MP217zhengxin_2dcoding4scss5Scope9eval__ast(self, key, true, depth + 1 | 0);
                        let key$2;
                        if (_bind$4.$tag === 1) {
                          const _ok = _bind$4;
                          key$2 = _ok._0;
                        } else {
                          return _bind$4;
                        }
                        if (_M0MPB4Iter3anyGURP217zhengxin_2dcoding4scss9SassValueRP217zhengxin_2dcoding4scss9SassValueEE(_M0MPC15array5Array4iterGsE(result$2), (p) => _M0MP217zhengxin_2dcoding4scss9SassValue4same(p._0, key$2))) {
                          return new _M0DTPC16result6ResultGRP217zhengxin_2dcoding4scss9SassValueRP217zhengxin_2dcoding4scss10ParseErrorE3Err(new _M0DTPC15error5Error47zhengxin_2dcoding_2fscss_2eParseError_2eInvalid("duplicate map key"));
                        }
                        const _bind$5 = _M0MP217zhengxin_2dcoding4scss5Scope9eval__ast(self, value$2, true, depth + 1 | 0);
                        let _tmp$2;
                        if (_bind$5.$tag === 1) {
                          const _ok = _bind$5;
                          _tmp$2 = _ok._0;
                        } else {
                          return _bind$5;
                        }
                        _M0MPC15array5Array4pushGRPC14json10WriteFrameE(result$2, { _0: key$2, _1: _tmp$2 });
                        _tmp = _ + 1 | 0;
                        continue;
                      } else {
                        break;
                      }
                    }
                    result = new _M0DTP217zhengxin_2dcoding4scss9SassValue10Dictionary(result$2);
                  }
                  break _L$7;
                }
                const _bind$3 = _M0MP217zhengxin_2dcoding4scss5Scope9eval__ast(self, value, true, depth + 1 | 0);
                let v;
                if (_bind$3.$tag === 1) {
                  const _ok = _bind$3;
                  v = _ok._0;
                } else {
                  return _bind$3;
                }
                if (operator$2 === "not") {
                  result = new _M0DTP217zhengxin_2dcoding4scss9SassValue7Boolean(!_M0MP217zhengxin_2dcoding4scss9SassValue5truth(v));
                } else {
                  let n;
                  _L$9: {
                    _L$10: {
                      if (v.$tag === 0) {
                        const _Number = v;
                        const _n = _Number._0;
                        n = _n;
                        break _L$10;
                      } else {
                        const _bind$4 = _M0MP217zhengxin_2dcoding4scss9SassValue11css_2einner(v, true, false);
                        let _tmp;
                        if (_bind$4.$tag === 1) {
                          const _ok = _bind$4;
                          _tmp = _ok._0;
                        } else {
                          return _bind$4;
                        }
                        result = new _M0DTP217zhengxin_2dcoding4scss9SassValue4Text(`${operator$2}${_tmp}`, false);
                      }
                      break _L$9;
                    }
                    result = new _M0DTP217zhengxin_2dcoding4scss9SassValue6Number(new _M0TP217zhengxin_2dcoding4scss10SassNumber(operator$2 === "-" ? -n.amount : n.amount, n.numerator, n.denominator));
                  }
                }
              }
              break _L$5;
            }
            const _bind$3 = _M0MP217zhengxin_2dcoding4scss5Scope9eval__ast(self, a, division || _M0IP016_24default__implPB2Eq10not__equalGsE(operator, "/"), depth + 1 | 0);
            let left;
            if (_bind$3.$tag === 1) {
              const _ok = _bind$3;
              left = _ok._0;
            } else {
              return _bind$3;
            }
            if (operator === "and") {
              if (_M0MP217zhengxin_2dcoding4scss9SassValue5truth(left)) {
                const _bind$4 = _M0MP217zhengxin_2dcoding4scss5Scope9eval__ast(self, b, division, depth + 1 | 0);
                if (_bind$4.$tag === 1) {
                  const _ok = _bind$4;
                  result = _ok._0;
                } else {
                  return _bind$4;
                }
              } else {
                result = left;
              }
            } else {
              if (operator === "or") {
                if (_M0MP217zhengxin_2dcoding4scss9SassValue5truth(left)) {
                  result = left;
                } else {
                  const _bind$4 = _M0MP217zhengxin_2dcoding4scss5Scope9eval__ast(self, b, division, depth + 1 | 0);
                  if (_bind$4.$tag === 1) {
                    const _ok = _bind$4;
                    result = _ok._0;
                  } else {
                    return _bind$4;
                  }
                }
              } else {
                const _bind$4 = _M0MP217zhengxin_2dcoding4scss5Scope9eval__ast(self, b, division || _M0IP016_24default__implPB2Eq10not__equalGsE(operator, "/"), depth + 1 | 0);
                let right;
                if (_bind$4.$tag === 1) {
                  const _ok = _bind$4;
                  right = _ok._0;
                } else {
                  return _bind$4;
                }
                if (operator === "/" && (!division && (!_M0FP217zhengxin_2dcoding4scss22arithmetic__expression(a) && !_M0FP217zhengxin_2dcoding4scss22arithmetic__expression(b)))) {
                  const _bind$5 = _M0MP217zhengxin_2dcoding4scss9SassValue11css_2einner(left, false, false);
                  let _tmp;
                  if (_bind$5.$tag === 1) {
                    const _ok = _bind$5;
                    _tmp = _ok._0;
                  } else {
                    return _bind$5;
                  }
                  const _tmp$2 = _tmp;
                  const _bind$6 = _M0MP217zhengxin_2dcoding4scss9SassValue11css_2einner(right, false, false);
                  let _tmp$3;
                  if (_bind$6.$tag === 1) {
                    const _ok = _bind$6;
                    _tmp$3 = _ok._0;
                  } else {
                    return _bind$6;
                  }
                  result = new _M0DTP217zhengxin_2dcoding4scss9SassValue4Text(`${_tmp$2}/${_tmp$3}`, false);
                } else {
                  const _bind$5 = _M0FP217zhengxin_2dcoding4scss13binary__value(operator, left, right);
                  if (_bind$5.$tag === 1) {
                    const _ok = _bind$5;
                    result = _ok._0;
                  } else {
                    return _bind$5;
                  }
                }
              }
            }
          }
          break _L$3;
        }
        const _bind$3 = _M0MP217zhengxin_2dcoding4scss5Scope14expand_2einner(self, body, true);
        let _tmp;
        if (_bind$3.$tag === 1) {
          const _ok = _bind$3;
          _tmp = _ok._0;
        } else {
          return _bind$3;
        }
        result = new _M0DTP217zhengxin_2dcoding4scss9SassValue4Text(`${name$2}(${_tmp})`, false);
      }
      break _L;
    }
    let args;
    _L$3: {
      _L$4: {
        if (_M0MPC15array5Array8containsGsE(["rgb", "rgba", "hsl", "hsla"], name)) {
          const _bind$3 = _M0MP217zhengxin_2dcoding4scss5Scope16lookup__function(self, name);
          let _bind$4;
          if (_bind$3.$tag === 1) {
            const _ok = _bind$3;
            _bind$4 = _ok._0;
          } else {
            return _bind$3;
          }
          if (_bind$4 === undefined) {
            args = _M0FP217zhengxin_2dcoding4scss22color__call__arguments(arguments_);
          } else {
            break _L$4;
          }
        } else {
          break _L$4;
        }
        break _L$3;
      }
      args = arguments_;
    }
    if (name === "if" && (args.length === 3 && _M0MPB4Iter3allGUOsRP217zhengxin_2dcoding4scss10ExpressionbEE(_M0MPC15array5Array4iterGsE(args), (a) => {
      const _bind$3 = a._0;
      return _bind$3 === undefined ? !a._2 : false;
    }))) {
      const _bind$3 = _M0MP217zhengxin_2dcoding4scss5Scope9eval__ast(self, _M0MPC15array5Array2atGRPB4JsonE(args, 0)._1, true, depth + 1 | 0);
      let condition;
      if (_bind$3.$tag === 1) {
        const _ok = _bind$3;
        condition = _ok._0;
      } else {
        return _bind$3;
      }
      const _bind$4 = _M0MP217zhengxin_2dcoding4scss5Scope9eval__ast(self, _M0MPC15array5Array2atGRPB4JsonE(args, _M0MP217zhengxin_2dcoding4scss9SassValue5truth(condition) ? 1 : 2)._1, division, depth + 1 | 0);
      if (_bind$4.$tag === 1) {
        const _ok = _bind$4;
        result = _ok._0;
      } else {
        return _bind$4;
      }
    } else {
      const positional = [];
      const _bind$3 = [];
      const keywords = _M0MPB3Map3MapGsRP217zhengxin_2dcoding4scss9SassValueE(new _M0TPB9ArrayViewGUsRP217zhengxin_2dcoding4scss9SassValueEE(_bind$3, 0, 0), undefined);
      const named = new _M0TPB8MutLocalGbE(false);
      const _bind$4 = args.length;
      let _tmp = 0;
      while (true) {
        const _ = _tmp;
        if (_ < _bind$4) {
          const _foreach_element = args[_];
          let expr;
          let key;
          let spread;
          _L$4: {
            const _key = _foreach_element._0;
            const _expr = _foreach_element._1;
            const _spread = _foreach_element._2;
            expr = _expr;
            key = _key;
            spread = _spread;
            break _L$4;
          }
          let expr$2;
          _L$5: {
            _L$6: {
              if (_M0MPC15array5Array8containsGsE(["rgb", "rgba", "hsl", "hsla"], name)) {
                const _bind$5 = _M0MP217zhengxin_2dcoding4scss5Scope16lookup__function(self, name);
                let _bind$6;
                if (_bind$5.$tag === 1) {
                  const _ok = _bind$5;
                  _bind$6 = _ok._0;
                } else {
                  return _bind$5;
                }
                if (_bind$6 === undefined) {
                  _L$7: {
                    _L$8: {
                      let body;
                      _L$9: {
                        if (expr.$tag === 7) {
                          const _RawCall = expr;
                          const _x = _RawCall._0;
                          if (_x === "calc") {
                            const _body = _RawCall._1;
                            body = _body;
                            break _L$9;
                          } else {
                            break _L$8;
                          }
                        } else {
                          break _L$8;
                        }
                      }
                      let computed;
                      let _try_err;
                      _L$10: {
                        _L$11: {
                          const _bind$7 = _M0MP217zhengxin_2dcoding4scss5Scope16evaluate_2einner(self, body, true);
                          if (_bind$7.$tag === 1) {
                            const _ok = _bind$7;
                            computed = _ok._0;
                          } else {
                            const _err = _bind$7;
                            _try_err = _err._0;
                            break _L$11;
                          }
                          break _L$10;
                        }
                        computed = undefined;
                      }
                      _L$11: {
                        _L$12: {
                          let n;
                          _L$13: {
                            if (computed === undefined) {
                              break _L$12;
                            } else {
                              const _Some = computed;
                              const _x = _Some;
                              if (_x.$tag === 0) {
                                const _Number = _x;
                                const _n = _Number._0;
                                n = _n;
                                break _L$13;
                              } else {
                                break _L$12;
                              }
                            }
                          }
                          expr$2 = _M0MP217zhengxin_2dcoding4scss10SassNumber8unitless(n) ? new _M0DTP217zhengxin_2dcoding4scss10Expression7Literal(new _M0DTP217zhengxin_2dcoding4scss9SassValue6Number(n)) : expr;
                          break _L$11;
                        }
                        expr$2 = expr;
                      }
                      break _L$7;
                    }
                    break _L$6;
                  }
                } else {
                  break _L$6;
                }
              } else {
                break _L$6;
              }
              break _L$5;
            }
            expr$2 = expr;
          }
          let _tmp$2;
          if (division) {
            _tmp$2 = true;
          } else {
            let _tmp$3;
            const _bind$5 = ".";
            if (_M0MPC16string6String8contains(name, new _M0TPC16string10StringView(_bind$5, 0, _bind$5.length))) {
              _tmp$3 = true;
            } else {
              const _bind$6 = _M0MP217zhengxin_2dcoding4scss5Scope16lookup__function(self, name);
              let _bind$7;
              if (_bind$6.$tag === 1) {
                const _ok = _bind$6;
                _bind$7 = _ok._0;
              } else {
                return _bind$6;
              }
              _tmp$3 = _bind$7 === undefined ? _M0FP217zhengxin_2dcoding4scss15global__builtin(name) : true;
            }
            _tmp$2 = _tmp$3;
          }
          const _bind$5 = _M0MP217zhengxin_2dcoding4scss5Scope9eval__ast(self, expr$2, _tmp$2, depth + 1 | 0);
          let value;
          if (_bind$5.$tag === 1) {
            const _ok = _bind$5;
            value = _ok._0;
          } else {
            return _bind$5;
          }
          if (spread) {
            if (key === undefined) {
            } else {
              return new _M0DTPC16result6ResultGRP217zhengxin_2dcoding4scss9SassValueRP217zhengxin_2dcoding4scss10ParseErrorE3Err(new _M0DTPC15error5Error47zhengxin_2dcoding_2fscss_2eParseError_2eInvalid("keyword cannot spread"));
            }
            let entries;
            _L$6: {
              _L$7: {
                if (value.$tag === 6) {
                  const _Dictionary = value;
                  const _entries = _Dictionary._0;
                  entries = _entries;
                  break _L$7;
                } else {
                  if (named.val) {
                    return new _M0DTPC16result6ResultGRP217zhengxin_2dcoding4scss9SassValueRP217zhengxin_2dcoding4scss10ParseErrorE3Err(new _M0DTPC15error5Error47zhengxin_2dcoding_2fscss_2eParseError_2eInvalid("positional after keyword"));
                  }
                  const _bind$6 = _M0MP217zhengxin_2dcoding4scss9SassValue5items(value);
                  const _bind$7 = _bind$6.length;
                  let _tmp$3 = 0;
                  while (true) {
                    const _$2 = _tmp$3;
                    if (_$2 < _bind$7) {
                      const item = _bind$6[_$2];
                      _M0MPC15array5Array4pushGRPC14json10WriteFrameE(positional, item);
                      _tmp$3 = _$2 + 1 | 0;
                      continue;
                    } else {
                      break;
                    }
                  }
                }
                break _L$6;
              }
              const _bind$6 = entries.length;
              let _tmp$3 = 0;
              while (true) {
                const _$2 = _tmp$3;
                if (_$2 < _bind$6) {
                  const _foreach_element$2 = entries[_$2];
                  let k;
                  let v;
                  _L$8: {
                    const _k = _foreach_element$2._0;
                    const _v = _foreach_element$2._1;
                    k = _k;
                    v = _v;
                    break _L$8;
                  }
                  let name$2;
                  _L$9: {
                    if (k.$tag === 2) {
                      const _Text = k;
                      const _name = _Text._0;
                      name$2 = _name;
                      break _L$9;
                    } else {
                      return new _M0DTPC16result6ResultGRP217zhengxin_2dcoding4scss9SassValueRP217zhengxin_2dcoding4scss10ParseErrorE3Err(new _M0DTPC15error5Error47zhengxin_2dcoding_2fscss_2eParseError_2eInvalid("keyword map key must be string"));
                    }
                  }
                  const name$3 = _M0FP217zhengxin_2dcoding4scss10identifier(name$2);
                  if (_M0MPB3Map8containsGsRP217zhengxin_2dcoding4scss9SassValueE(keywords, name$3)) {
                    return new _M0DTPC16result6ResultGRP217zhengxin_2dcoding4scss9SassValueRP217zhengxin_2dcoding4scss10ParseErrorE3Err(new _M0DTPC15error5Error47zhengxin_2dcoding_2fscss_2eParseError_2eInvalid("duplicate keyword"));
                  }
                  _M0MPB3Map3setGsRP217zhengxin_2dcoding4scss9SassValueE(keywords, name$3, v);
                  named.val = true;
                  _tmp$3 = _$2 + 1 | 0;
                  continue;
                } else {
                  break;
                }
              }
            }
          } else {
            let name$2;
            _L$6: {
              _L$7: {
                if (key === undefined) {
                  if (named.val) {
                    return new _M0DTPC16result6ResultGRP217zhengxin_2dcoding4scss9SassValueRP217zhengxin_2dcoding4scss10ParseErrorE3Err(new _M0DTPC15error5Error47zhengxin_2dcoding_2fscss_2eParseError_2eInvalid("positional after keyword"));
                  }
                  _M0MPC15array5Array4pushGRPC14json10WriteFrameE(positional, value);
                } else {
                  const _Some = key;
                  const _name = _Some;
                  name$2 = _name;
                  break _L$7;
                }
                break _L$6;
              }
              if (_M0MPB3Map8containsGsRP217zhengxin_2dcoding4scss9SassValueE(keywords, name$2)) {
                return new _M0DTPC16result6ResultGRP217zhengxin_2dcoding4scss9SassValueRP217zhengxin_2dcoding4scss10ParseErrorE3Err(new _M0DTPC15error5Error47zhengxin_2dcoding_2fscss_2eParseError_2eInvalid("duplicate keyword"));
              }
              _M0MPB3Map3setGsRP217zhengxin_2dcoding4scss9SassValueE(keywords, name$2, value);
              named.val = true;
            }
          }
          _tmp = _ + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      const _bind$5 = _M0MP217zhengxin_2dcoding4scss5Scope14call__function(self, name, positional, keywords, depth);
      if (_bind$5.$tag === 1) {
        const _ok = _bind$5;
        result = _ok._0;
      } else {
        return _bind$5;
      }
    }
  }
  const _bind$3 = _M0MP217zhengxin_2dcoding4scss9SassValue11check__size(result, _M0MPC13ref3Ref3RefGiE(16384), 0);
  if (_bind$3.$tag === 1) {
    const _ok = _bind$3;
    _ok._0;
  } else {
    return _bind$3;
  }
  return new _M0DTPC16result6ResultGRP217zhengxin_2dcoding4scss9SassValueRP217zhengxin_2dcoding4scss10ParseErrorE2Ok(result);
}
function _M0MP217zhengxin_2dcoding4scss5Scope14call__function(self, name, args, keywords, depth) {
  let definition;
  _L: {
    const _bind$2 = _M0MP217zhengxin_2dcoding4scss5Scope16lookup__function(self, name);
    let _bind$3;
    if (_bind$2.$tag === 1) {
      const _ok = _bind$2;
      _bind$3 = _ok._0;
    } else {
      return _bind$2;
    }
    if (_bind$3 === undefined) {
      let value;
      _L$2: {
        const _bind$4 = _M0FP217zhengxin_2dcoding4scss7builtin(self, name, args, keywords);
        let _bind$5;
        if (_bind$4.$tag === 1) {
          const _ok = _bind$4;
          _bind$5 = _ok._0;
        } else {
          return _bind$4;
        }
        if (_bind$5 === undefined) {
          const _bind$6 = ".";
          if (_M0MPC16string6String8contains(name, new _M0TPC16string10StringView(_bind$6, 0, _bind$6.length))) {
            return new _M0DTPC16result6ResultGRP217zhengxin_2dcoding4scss9SassValueRP217zhengxin_2dcoding4scss10ParseErrorE3Err(new _M0DTPC15error5Error47zhengxin_2dcoding_2fscss_2eParseError_2eInvalid("undefined namespaced function"));
          }
          if (!_M0MPB3Map9is__emptyGssE(keywords)) {
            return new _M0DTPC16result6ResultGRP217zhengxin_2dcoding4scss9SassValueRP217zhengxin_2dcoding4scss10ParseErrorE3Err(new _M0DTPC15error5Error47zhengxin_2dcoding_2fscss_2eParseError_2eInvalid("plain CSS function cannot use keyword arguments"));
          }
          const _bind$7 = _M0MPC15array5Array3mapGRP217zhengxin_2dcoding4scss9SassValuesEHRP217zhengxin_2dcoding4scss10ParseError(_M0MPC15array5Array6filterGRP217zhengxin_2dcoding4scss9SassValueE(args, (v) => {
            let _tmp;
            if (v.$tag === 4) {
              _tmp = true;
            } else {
              _tmp = false;
            }
            return !_tmp;
          }), (v) => _M0MP217zhengxin_2dcoding4scss9SassValue11css_2einner(v, false, false));
          let _tmp;
          if (_bind$7.$tag === 1) {
            const _ok = _bind$7;
            _tmp = _ok._0;
          } else {
            return _bind$7;
          }
          const _tmp$2 = _tmp;
          const _bind$8 = ", ";
          return new _M0DTPC16result6ResultGRP217zhengxin_2dcoding4scss9SassValueRP217zhengxin_2dcoding4scss10ParseErrorE2Ok(new _M0DTP217zhengxin_2dcoding4scss9SassValue4Text(`${name}(${_M0MPC15array5Array4joinGsE(_tmp$2, new _M0TPC16string10StringView(_bind$8, 0, _bind$8.length))})`, false));
        } else {
          const _Some = _bind$5;
          const _value = _Some;
          value = _value;
          break _L$2;
        }
      }
      return new _M0DTPC16result6ResultGRP217zhengxin_2dcoding4scss9SassValueRP217zhengxin_2dcoding4scss10ParseErrorE2Ok(value);
    } else {
      const _Some = _bind$3;
      const _definition = _Some;
      definition = _definition;
      break _L;
    }
  }
  const _bind$2 = self.evaluation;
  _bind$2.calls = _bind$2.calls + 1 | 0;
  if (self.evaluation.calls > 64) {
    return new _M0DTPC16result6ResultGRP217zhengxin_2dcoding4scss9SassValueRP217zhengxin_2dcoding4scss10ParseErrorE3Err(new _M0DTPC15error5Error47zhengxin_2dcoding_2fscss_2eParseError_2eInvalid("function recursion limit"));
  }
  const _bind$3 = _M0FP217zhengxin_2dcoding4scss15bind__arguments(definition, args, keywords);
  let frame;
  if (_bind$3.$tag === 1) {
    const _ok = _bind$3;
    frame = _ok._0;
  } else {
    return _bind$3;
  }
  const returned = _M0MPC13ref3Ref3RefGORP217zhengxin_2dcoding4scss9SassValueE(undefined);
  const frame$2 = new _M0TP217zhengxin_2dcoding4scss5Scope(frame.vars, frame.mixins, frame.functions, frame.standard_modules, frame.module_scopes, frame.star_scopes, frame.forwarded_vars, frame.forwarded_mixins, frame.forwarded_functions, frame.configured, frame.configuration, frame.path, frame.evaluation, returned, frame.flow, frame.parent);
  const emitter = new _M0TP217zhengxin_2dcoding4scss7Emitter([], [], self.path, [], [], [], 0, 10000, 0, [], []);
  const _bind$4 = _M0FP217zhengxin_2dcoding4scss6render(definition.body, [], frame$2, emitter, depth + 1 | 0, undefined, false, "");
  if (_bind$4.$tag === 1) {
    const _ok = _bind$4;
    _ok._0;
  } else {
    return _bind$4;
  }
  const _bind$5 = self.evaluation;
  _bind$5.calls = _bind$5.calls - 1 | 0;
  let value;
  _L$2: {
    const _bind$6 = returned.val;
    if (_bind$6 === undefined) {
      return new _M0DTPC16result6ResultGRP217zhengxin_2dcoding4scss9SassValueRP217zhengxin_2dcoding4scss10ParseErrorE3Err(new _M0DTPC15error5Error47zhengxin_2dcoding_2fscss_2eParseError_2eInvalid("function finished without return"));
    } else {
      const _Some = _bind$6;
      const _value = _Some;
      value = _value;
      break _L$2;
    }
  }
  return new _M0DTPC16result6ResultGRP217zhengxin_2dcoding4scss9SassValueRP217zhengxin_2dcoding4scss10ParseErrorE2Ok(value);
}
function _M0FP217zhengxin_2dcoding4scss15bind__arguments(definition, args, keywords) {
  const frame = _M0MP217zhengxin_2dcoding4scss5Scope3new(definition.scope);
  const _bind$2 = 0;
  const _bind$3 = definition.params.length;
  let _tmp = _bind$2;
  while (true) {
    const i = _tmp;
    if (i < _bind$3) {
      let key;
      let default_;
      _L: {
        const _bind$4 = _M0MPC15array5Array2atGRPB4JsonE(definition.params, i);
        const _key = _bind$4._0;
        const _default = _bind$4._1;
        key = _key;
        default_ = _default;
        break _L;
      }
      let value;
      if (i < args.length) {
        if (_M0MPB3Map8containsGsRP217zhengxin_2dcoding4scss9SassValueE(keywords, key)) {
          return new _M0DTPC16result6ResultGRP217zhengxin_2dcoding4scss5ScopeRP217zhengxin_2dcoding4scss10ParseErrorE3Err(new _M0DTPC15error5Error47zhengxin_2dcoding_2fscss_2eParseError_2eInvalid("argument supplied twice"));
        }
        value = _M0MPC15array5Array2atGRPB4JsonE(args, i);
      } else {
        let value$2;
        _L$2: {
          _L$3: {
            const _bind$4 = _M0MPB3Map3getGsRP217zhengxin_2dcoding4scss9SassValueE(keywords, key);
            if (_bind$4 === undefined) {
              let text;
              _L$4: {
                if (default_ === undefined) {
                  return new _M0DTPC16result6ResultGRP217zhengxin_2dcoding4scss5ScopeRP217zhengxin_2dcoding4scss10ParseErrorE3Err(new _M0DTPC15error5Error47zhengxin_2dcoding_2fscss_2eParseError_2eInvalid(`missing argument ${key}`));
                } else {
                  const _Some = default_;
                  const _text = _Some;
                  text = _text;
                  break _L$4;
                }
              }
              const _bind$5 = _M0MP217zhengxin_2dcoding4scss5Scope16evaluate_2einner(frame, text, true);
              if (_bind$5.$tag === 1) {
                const _ok = _bind$5;
                value = _ok._0;
              } else {
                return _bind$5;
              }
            } else {
              const _Some = _bind$4;
              const _value = _Some;
              value$2 = _value;
              break _L$3;
            }
            break _L$2;
          }
          _M0MPB3Map6removeGsRP217zhengxin_2dcoding4scss9SassValueE(keywords, key);
          value = value$2;
        }
      }
      _M0MPB3Map3setGsRP217zhengxin_2dcoding4scss9SassValueE(frame.vars, key, value);
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  if (!_M0MPB3Map9is__emptyGssE(keywords)) {
    return new _M0DTPC16result6ResultGRP217zhengxin_2dcoding4scss5ScopeRP217zhengxin_2dcoding4scss10ParseErrorE3Err(new _M0DTPC15error5Error47zhengxin_2dcoding_2fscss_2eParseError_2eInvalid("unknown keyword argument"));
  }
  let key;
  _L: {
    _L$2: {
      const _bind$4 = definition.rest;
      if (_bind$4 === undefined) {
        if (args.length > definition.params.length) {
          return new _M0DTPC16result6ResultGRP217zhengxin_2dcoding4scss5ScopeRP217zhengxin_2dcoding4scss10ParseErrorE3Err(new _M0DTPC15error5Error47zhengxin_2dcoding_2fscss_2eParseError_2eInvalid("too many arguments"));
        }
      } else {
        const _Some = _bind$4;
        const _key = _Some;
        key = _key;
        break _L$2;
      }
      break _L;
    }
    _M0MPB3Map3setGsRP217zhengxin_2dcoding4scss9SassValueE(frame.vars, key, new _M0DTP217zhengxin_2dcoding4scss9SassValue4List(args.length > definition.params.length ? _M0MPC15array9ArrayView9to__ownedGsE(_M0MPC15array5Array12view_2einnerGsE(args, definition.params.length, undefined)) : [], ",", false));
  }
  return new _M0DTPC16result6ResultGRP217zhengxin_2dcoding4scss5ScopeRP217zhengxin_2dcoding4scss10ParseErrorE2Ok(frame);
}
function _M0FP217zhengxin_2dcoding4scss6render(nodes, parents, scope, emitter, depth, content, raw, prefix) {
  if (depth > 64) {
    return new _M0DTPC16result6ResultGuRP217zhengxin_2dcoding4scss10ParseErrorE3Err(new _M0DTPC15error5Error47zhengxin_2dcoding_2fscss_2eParseError_2eInvalid("evaluation nesting limit"));
  }
  const conditional = new _M0TPB8MutLocalGObE(-1);
  const _bind$2 = nodes.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind$2) {
      const node = nodes[_];
      _L: {
        let cell;
        _L$2: {
          _L$3: {
            const _bind$3 = scope.returned;
            if (_bind$3 === undefined) {
            } else {
              const _Some = _bind$3;
              const _cell = _Some;
              cell = _cell;
              break _L$3;
            }
            break _L$2;
          }
          const _bind$3 = cell.val;
          if (_bind$3 === undefined) {
          } else {
            return new _M0DTPC16result6ResultGuRP217zhengxin_2dcoding4scss10ParseErrorE2Ok(undefined);
          }
        }
        const _bind$3 = _M0MP217zhengxin_2dcoding4scss5Scope6charge(scope);
        if (_bind$3.$tag === 1) {
          const _ok = _bind$3;
          _ok._0;
        } else {
          return _bind$3;
        }
        emitter.budget = emitter.budget - 1 | 0;
        if (emitter.budget < 0) {
          return new _M0DTPC16result6ResultGuRP217zhengxin_2dcoding4scss10ParseErrorE3Err(new _M0DTPC15error5Error47zhengxin_2dcoding_2fscss_2eParseError_2eInvalid("evaluation budget"));
        }
        let header;
        let body;
        _L$3: {
          _L$4: {
            if (node.$tag === 1) {
              const _Block = node;
              const _header = _Block._0;
              const _body = _Block._1;
              header = _header;
              body = _body;
              break _L$4;
            }
            break _L$3;
          }
          const _bind$4 = "@if ";
          if (_M0MPC16string6String11has__prefix(header, new _M0TPC16string10StringView(_bind$4, 0, _bind$4.length))) {
            const _bind$5 = _M0MP217zhengxin_2dcoding4scss5Scope16evaluate_2einner(scope, _M0MPC16string10StringView9to__owned(_M0MPC16string6String11sub_2einner(header, 4, undefined)), true);
            let _tmp$2;
            if (_bind$5.$tag === 1) {
              const _ok = _bind$5;
              _tmp$2 = _ok._0;
            } else {
              return _bind$5;
            }
            const selected = _M0MP217zhengxin_2dcoding4scss9SassValue5truth(_tmp$2);
            conditional.val = selected;
            if (selected) {
              const _bind$6 = _M0FP217zhengxin_2dcoding4scss6render(body, parents, _M0MP217zhengxin_2dcoding4scss5Scope11flow__scope(scope), emitter, depth + 1 | 0, content, raw, prefix);
              if (_bind$6.$tag === 1) {
                const _ok = _bind$6;
                _ok._0;
              } else {
                return _bind$6;
              }
            }
            break _L;
          }
          let _tmp$2;
          if (header === "@else") {
            _tmp$2 = true;
          } else {
            const _bind$5 = "@else if ";
            _tmp$2 = _M0MPC16string6String11has__prefix(header, new _M0TPC16string10StringView(_bind$5, 0, _bind$5.length));
          }
          if (_tmp$2) {
            let previous;
            _L$5: {
              const _bind$5 = conditional.val;
              if (_bind$5 === -1) {
                return new _M0DTPC16result6ResultGuRP217zhengxin_2dcoding4scss10ParseErrorE3Err(new _M0DTPC15error5Error47zhengxin_2dcoding_2fscss_2eParseError_2eInvalid("else without adjacent if"));
              } else {
                const _Some = _bind$5;
                const _previous = _Some;
                previous = _previous;
                break _L$5;
              }
            }
            let selected;
            if (!previous) {
              let _tmp$3;
              if (header === "@else") {
                _tmp$3 = true;
              } else {
                const _bind$5 = _M0MP217zhengxin_2dcoding4scss5Scope16evaluate_2einner(scope, _M0MPC16string10StringView9to__owned(_M0MPC16string6String11sub_2einner(header, 9, undefined)), true);
                let _tmp$4;
                if (_bind$5.$tag === 1) {
                  const _ok = _bind$5;
                  _tmp$4 = _ok._0;
                } else {
                  return _bind$5;
                }
                _tmp$3 = _M0MP217zhengxin_2dcoding4scss9SassValue5truth(_tmp$4);
              }
              selected = _tmp$3;
            } else {
              selected = false;
            }
            conditional.val = header === "@else" ? -1 : previous || selected;
            if (selected) {
              const _bind$5 = _M0FP217zhengxin_2dcoding4scss6render(body, parents, _M0MP217zhengxin_2dcoding4scss5Scope11flow__scope(scope), emitter, depth + 1 | 0, content, raw, prefix);
              if (_bind$5.$tag === 1) {
                const _ok = _bind$5;
                _ok._0;
              } else {
                return _bind$5;
              }
            }
            break _L;
          }
          const _bind$5 = _M0FP217zhengxin_2dcoding4scss12render__loop(header, body, parents, scope, emitter, depth, content, raw, prefix);
          let _tmp$3;
          if (_bind$5.$tag === 1) {
            const _ok = _bind$5;
            _tmp$3 = _ok._0;
          } else {
            return _bind$5;
          }
          if (_tmp$3) {
            conditional.val = -1;
            break _L;
          }
        }
        conditional.val = -1;
        let part;
        _L$4: {
          _L$5: {
            let header$2;
            let body$2;
            _L$6: {
              if (node.$tag === 1) {
                const _Block = node;
                const _header = _Block._0;
                const _body = _Block._1;
                header$2 = _header;
                body$2 = _body;
                break _L$6;
              } else {
                const _Leaf = node;
                const _part = _Leaf._0;
                part = _part;
                break _L$5;
              }
            }
            let _tmp$2;
            const _bind$4 = "@mixin ";
            if (_M0MPC16string6String11has__prefix(header$2, new _M0TPC16string10StringView(_bind$4, 0, _bind$4.length))) {
              _tmp$2 = true;
            } else {
              const _bind$5 = "@function ";
              _tmp$2 = _M0MPC16string6String11has__prefix(header$2, new _M0TPC16string10StringView(_bind$5, 0, _bind$5.length));
            }
            if (_tmp$2) {
              const _bind$5 = "@function ";
              const function_ = _M0MPC16string6String11has__prefix(header$2, new _M0TPC16string10StringView(_bind$5, 0, _bind$5.length));
              if (function_) {
                const _bind$6 = _M0FP217zhengxin_2dcoding4scss18validate__function(body$2);
                if (_bind$6.$tag === 1) {
                  const _ok = _bind$6;
                  _ok._0;
                } else {
                  return _bind$6;
                }
              } else {
                const _bind$6 = _M0FP217zhengxin_2dcoding4scss21validate__mixin__body(body$2);
                if (_bind$6.$tag === 1) {
                  const _ok = _bind$6;
                  _ok._0;
                } else {
                  return _bind$6;
                }
              }
              let name;
              let args;
              _L$7: {
                const _bind$6 = _M0FP217zhengxin_2dcoding4scss10invocation(_M0MPC16string10StringView9to__owned(_M0MPC16string6String11sub_2einner(header$2, function_ ? 10 : 7, undefined)));
                let _bind$7;
                if (_bind$6.$tag === 1) {
                  const _ok = _bind$6;
                  _bind$7 = _ok._0;
                } else {
                  return _bind$6;
                }
                const _name = _bind$7._0;
                const _args = _bind$7._1;
                name = _name;
                args = _args;
                break _L$7;
              }
              const params = [];
              const rest = new _M0TPB8MutLocalGOsE(undefined);
              const _bind$6 = [];
              const seen = _M0MPB3Map3MapGsbE(new _M0TPB9ArrayViewGUsbEE(_bind$6, 0, 0), undefined);
              const _bind$7 = 0;
              const _bind$8 = args.length;
              let _tmp$3 = _bind$7;
              while (true) {
                const i = _tmp$3;
                if (i < _bind$8) {
                  const _bind$9 = _M0FP217zhengxin_2dcoding4scss10split__top(_M0MPC15array5Array2atGRPB4JsonE(args, i), 58);
                  let pieces;
                  if (_bind$9.$tag === 1) {
                    const _ok = _bind$9;
                    pieces = _ok._0;
                  } else {
                    return _bind$9;
                  }
                  const key = new _M0TPB8MutLocalGsE(_M0MPC15array5Array2atGRPB4JsonE(pieces, 0));
                  const _tmp$4 = key.val;
                  const _bind$10 = "...";
                  if (_M0MPC16string6String11has__suffix(_tmp$4, new _M0TPC16string10StringView(_bind$10, 0, _bind$10.length))) {
                    if (i !== (args.length - 1 | 0) || pieces.length !== 1) {
                      return new _M0DTPC16result6ResultGuRP217zhengxin_2dcoding4scss10ParseErrorE3Err(new _M0DTPC15error5Error47zhengxin_2dcoding_2fscss_2eParseError_2eInvalid("variadic parameter must be last"));
                    }
                    key.val = _M0MPC16string10StringView9to__owned(_M0MPC16string6String11sub_2einner(key.val, 0, key.val.length - 3 | 0));
                    let _tmp$5;
                    const _tmp$6 = key.val;
                    const _bind$11 = "$";
                    if (!_M0MPC16string6String11has__prefix(_tmp$6, new _M0TPC16string10StringView(_bind$11, 0, _bind$11.length))) {
                      _tmp$5 = true;
                    } else {
                      _tmp$5 = key.val.length < 2;
                    }
                    if (_tmp$5) {
                      return new _M0DTPC16result6ResultGuRP217zhengxin_2dcoding4scss10ParseErrorE3Err(new _M0DTPC15error5Error47zhengxin_2dcoding_2fscss_2eParseError_2eInvalid("invalid variadic parameter"));
                    }
                    rest.val = _M0FP217zhengxin_2dcoding4scss10identifier(_M0MPC16string10StringView9to__owned(_M0MPC16string6String11sub_2einner(key.val, 1, undefined)));
                  }
                  let _tmp$5;
                  const _tmp$6 = key.val;
                  const _bind$11 = "$";
                  if (!_M0MPC16string6String11has__prefix(_tmp$6, new _M0TPC16string10StringView(_bind$11, 0, _bind$11.length))) {
                    _tmp$5 = true;
                  } else {
                    _tmp$5 = key.val.length < 2;
                  }
                  if (_tmp$5) {
                    return new _M0DTPC16result6ResultGuRP217zhengxin_2dcoding4scss10ParseErrorE3Err(new _M0DTPC15error5Error47zhengxin_2dcoding_2fscss_2eParseError_2eInvalid("invalid mixin parameter"));
                  }
                  key.val = _M0FP217zhengxin_2dcoding4scss10identifier(_M0MPC16string10StringView9to__owned(_M0MPC16string6String11sub_2einner(key.val, 1, undefined)));
                  if (_M0MPB3Map8containsGsbE(seen, key.val)) {
                    return new _M0DTPC16result6ResultGuRP217zhengxin_2dcoding4scss10ParseErrorE3Err(new _M0DTPC15error5Error47zhengxin_2dcoding_2fscss_2eParseError_2eInvalid("duplicate parameter"));
                  }
                  _M0MPB3Map3setGsbE(seen, key.val, true);
                  const _bind$12 = rest.val;
                  if (_bind$12 === undefined) {
                    const _tmp$7 = key.val;
                    let _tmp$8;
                    if (pieces.length > 1) {
                      const _tmp$9 = _M0MPC15array9ArrayView9to__ownedGsE(_M0MPC15array5Array12view_2einnerGsE(pieces, 1, undefined));
                      const _bind$13 = ":";
                      _tmp$8 = _M0MPC15array5Array4joinGsE(_tmp$9, new _M0TPC16string10StringView(_bind$13, 0, _bind$13.length));
                    } else {
                      _tmp$8 = undefined;
                    }
                    _M0MPC15array5Array4pushGRPC14json10WriteFrameE(params, { _0: _tmp$7, _1: _tmp$8 });
                  }
                  _tmp$3 = i + 1 | 0;
                  continue;
                } else {
                  break;
                }
              }
              if (function_) {
                _M0MPB3Map3setGsRP217zhengxin_2dcoding4scss5MixinE(scope.functions, name, new _M0TP217zhengxin_2dcoding4scss5Mixin(name, params, rest.val, body$2, scope));
              } else {
                _M0MPB3Map3setGsRP217zhengxin_2dcoding4scss5MixinE(scope.mixins, name, new _M0TP217zhengxin_2dcoding4scss5Mixin(name, params, rest.val, body$2, scope));
              }
            } else {
              const _bind$5 = "@include ";
              if (_M0MPC16string6String11has__prefix(header$2, new _M0TPC16string10StringView(_bind$5, 0, _bind$5.length))) {
                const _bind$6 = _M0FP217zhengxin_2dcoding4scss14include__mixin(_M0MPC16string10StringView9to__owned(_M0MPC16string6String11sub_2einner(header$2, 9, undefined)), new _M0TP217zhengxin_2dcoding4scss7Content(body$2, scope, content), parents, scope, emitter, depth, raw, prefix);
                if (_bind$6.$tag === 1) {
                  const _ok = _bind$6;
                  _ok._0;
                } else {
                  return _bind$6;
                }
              } else {
                let _tmp$3;
                if (header$2 === "@at-root") {
                  _tmp$3 = true;
                } else {
                  let _tmp$4;
                  const _bind$6 = "@at-root ";
                  if (_M0MPC16string6String11has__prefix(header$2, new _M0TPC16string10StringView(_bind$6, 0, _bind$6.length))) {
                    _tmp$4 = true;
                  } else {
                    const _bind$7 = "@at-root(";
                    _tmp$4 = _M0MPC16string6String11has__prefix(header$2, new _M0TPC16string10StringView(_bind$7, 0, _bind$7.length));
                  }
                  _tmp$3 = _tmp$4;
                }
                if (_tmp$3) {
                  const _bind$6 = _M0FP217zhengxin_2dcoding4scss16render__at__root(header$2, body$2, parents, scope, emitter, depth, content);
                  if (_bind$6.$tag === 1) {
                    const _ok = _bind$6;
                    _ok._0;
                  } else {
                    return _bind$6;
                  }
                } else {
                  let _tmp$4;
                  const _bind$6 = "@media ";
                  if (_M0MPC16string6String11has__prefix(header$2, new _M0TPC16string10StringView(_bind$6, 0, _bind$6.length))) {
                    _tmp$4 = true;
                  } else {
                    let _tmp$5;
                    const _bind$7 = "@supports (";
                    if (_M0MPC16string6String11has__prefix(header$2, new _M0TPC16string10StringView(_bind$7, 0, _bind$7.length))) {
                      _tmp$5 = true;
                    } else {
                      let _tmp$6;
                      const _bind$8 = "@supports(";
                      if (_M0MPC16string6String11has__prefix(header$2, new _M0TPC16string10StringView(_bind$8, 0, _bind$8.length))) {
                        _tmp$6 = true;
                      } else {
                        let _tmp$7;
                        const _bind$9 = "@layer ";
                        if (_M0MPC16string6String11has__prefix(header$2, new _M0TPC16string10StringView(_bind$9, 0, _bind$9.length))) {
                          _tmp$7 = true;
                        } else {
                          _tmp$7 = header$2 === "@font-face";
                        }
                        _tmp$6 = _tmp$7;
                      }
                      _tmp$5 = _tmp$6;
                    }
                    _tmp$4 = _tmp$5;
                  }
                  if (_tmp$4) {
                    const _bind$7 = _M0MP217zhengxin_2dcoding4scss7Emitter5flush(emitter);
                    if (_bind$7.$tag === 1) {
                      const _ok = _bind$7;
                      _ok._0;
                    } else {
                      return _bind$7;
                    }
                    const _tmp$5 = emitter.context;
                    const _bind$8 = _M0MP217zhengxin_2dcoding4scss5Scope14expand_2einner(scope, header$2, true);
                    let _tmp$6;
                    if (_bind$8.$tag === 1) {
                      const _ok = _bind$8;
                      _tmp$6 = _ok._0;
                    } else {
                      return _bind$8;
                    }
                    _M0MPC15array5Array4pushGRPC14json10WriteFrameE(_tmp$5, _tmp$6);
                    const _bind$9 = _M0FP217zhengxin_2dcoding4scss6render(body$2, header$2 === "@font-face" ? [] : parents, _M0MP217zhengxin_2dcoding4scss5Scope3new(scope), emitter, depth + 1 | 0, content, header$2 === "@font-face", prefix);
                    if (_bind$9.$tag === 1) {
                      const _ok = _bind$9;
                      _ok._0;
                    } else {
                      return _bind$9;
                    }
                    const _bind$10 = _M0MP217zhengxin_2dcoding4scss7Emitter5flush(emitter);
                    if (_bind$10.$tag === 1) {
                      const _ok = _bind$10;
                      _ok._0;
                    } else {
                      return _bind$10;
                    }
                    _M0MPC15array5Array3popGRPC14json10WriteFrameE(emitter.context);
                    _M0MP217zhengxin_2dcoding4scss7Emitter16release__hoisted(emitter);
                  } else {
                    const _bind$7 = ":";
                    if (_M0MPC16string6String11has__suffix(header$2, new _M0TPC16string10StringView(_bind$7, 0, _bind$7.length))) {
                      const _tmp$5 = _M0MP217zhengxin_2dcoding4scss5Scope3new(scope);
                      const _tmp$6 = depth + 1 | 0;
                      const _bind$8 = _M0MP217zhengxin_2dcoding4scss5Scope14expand_2einner(scope, _M0MPC16string10StringView9to__owned(_M0MPC16string6String11sub_2einner(header$2, 0, header$2.length - 1 | 0)), true);
                      let _tmp$7;
                      if (_bind$8.$tag === 1) {
                        const _ok = _bind$8;
                        _tmp$7 = _ok._0;
                      } else {
                        return _bind$8;
                      }
                      const _bind$9 = _M0FP217zhengxin_2dcoding4scss6render(body$2, parents, _tmp$5, emitter, _tmp$6, content, raw, `${prefix}${_tmp$7}-`);
                      if (_bind$9.$tag === 1) {
                        const _ok = _bind$9;
                        _ok._0;
                      } else {
                        return _bind$9;
                      }
                    } else {
                      const _bind$8 = _M0MP217zhengxin_2dcoding4scss7Emitter5flush(emitter);
                      if (_bind$8.$tag === 1) {
                        const _ok = _bind$8;
                        _ok._0;
                      } else {
                        return _bind$8;
                      }
                      const _bind$9 = _M0MP217zhengxin_2dcoding4scss5Scope14expand_2einner(scope, header$2, true);
                      let expanded;
                      if (_bind$9.$tag === 1) {
                        const _ok = _bind$9;
                        expanded = _ok._0;
                      } else {
                        return _bind$9;
                      }
                      const inherited = _M0MPC15array5Array9is__emptyGRPB4JsonE(parents) && _M0FP217zhengxin_2dcoding4scss11has__parent(expanded) ? emitter.root_parent : parents;
                      const _bind$10 = _M0FP217zhengxin_2dcoding4scss9selectors(inherited, expanded);
                      let selected;
                      if (_bind$10.$tag === 1) {
                        const _ok = _bind$10;
                        selected = _ok._0;
                      } else {
                        return _bind$10;
                      }
                      _M0MPC15array5Array4pushGRPC14json10WriteFrameE(emitter.output, new _M0TP217zhengxin_2dcoding4scss7CssRule(_M0MPC15array5Array4copyGsE(selected), "", _M0MPC15array5Array4copyGsE(emitter.context), emitter.path));
                      const _bind$11 = _M0FP217zhengxin_2dcoding4scss6render(body$2, selected, _M0MP217zhengxin_2dcoding4scss5Scope3new(scope), emitter, depth + 1 | 0, content, false, "");
                      if (_bind$11.$tag === 1) {
                        const _ok = _bind$11;
                        _ok._0;
                      } else {
                        return _bind$11;
                      }
                      const _bind$12 = _M0MP217zhengxin_2dcoding4scss7Emitter5flush(emitter);
                      if (_bind$12.$tag === 1) {
                        const _ok = _bind$12;
                        _ok._0;
                      } else {
                        return _bind$12;
                      }
                    }
                  }
                }
              }
            }
            break _L$4;
          }
          const _bind$4 = "@return ";
          if (_M0MPC16string6String11has__prefix(part, new _M0TPC16string10StringView(_bind$4, 0, _bind$4.length))) {
            let cell$2;
            _L$6: {
              const _bind$5 = scope.returned;
              if (_bind$5 === undefined) {
                return new _M0DTPC16result6ResultGuRP217zhengxin_2dcoding4scss10ParseErrorE3Err(new _M0DTPC15error5Error47zhengxin_2dcoding_2fscss_2eParseError_2eInvalid("return outside function"));
              } else {
                const _Some = _bind$5;
                const _cell = _Some;
                cell$2 = _cell;
                break _L$6;
              }
            }
            const _bind$5 = _M0MP217zhengxin_2dcoding4scss5Scope16evaluate_2einner(scope, _M0MPC16string10StringView9to__owned(_M0MPC16string6String11sub_2einner(part, 8, undefined)), true);
            let _tmp$2;
            if (_bind$5.$tag === 1) {
              const _ok = _bind$5;
              _tmp$2 = _ok._0;
            } else {
              return _bind$5;
            }
            cell$2.val = _tmp$2;
            return new _M0DTPC16result6ResultGuRP217zhengxin_2dcoding4scss10ParseErrorE2Ok(undefined);
          } else {
            const _bind$5 = "@error ";
            if (_M0MPC16string6String11has__prefix(part, new _M0TPC16string10StringView(_bind$5, 0, _bind$5.length))) {
              const _bind$6 = _M0MP217zhengxin_2dcoding4scss5Scope16evaluate_2einner(scope, _M0MPC16string10StringView9to__owned(_M0MPC16string6String11sub_2einner(part, 7, undefined)), true);
              let _tmp$2;
              if (_bind$6.$tag === 1) {
                const _ok = _bind$6;
                _tmp$2 = _ok._0;
              } else {
                return _bind$6;
              }
              const _bind$7 = _M0MP217zhengxin_2dcoding4scss9SassValue11css_2einner(_tmp$2, true, true);
              let _tmp$3;
              if (_bind$7.$tag === 1) {
                const _ok = _bind$7;
                _tmp$3 = _ok._0;
              } else {
                return _bind$7;
              }
              return new _M0DTPC16result6ResultGuRP217zhengxin_2dcoding4scss10ParseErrorE3Err(new _M0DTPC15error5Error47zhengxin_2dcoding_2fscss_2eParseError_2eInvalid(_tmp$3));
            } else {
              const _bind$6 = "@extend ";
              if (_M0MPC16string6String11has__prefix(part, new _M0TPC16string10StringView(_bind$6, 0, _bind$6.length))) {
                const _bind$7 = _M0MP217zhengxin_2dcoding4scss5Scope14expand_2einner(scope, _M0MPC16string10StringView9to__owned(_M0MPC16string6String11sub_2einner(part, 8, undefined)), true);
                let _tmp$2;
                if (_bind$7.$tag === 1) {
                  const _ok = _bind$7;
                  _tmp$2 = _ok._0;
                } else {
                  return _bind$7;
                }
                const _bind$8 = _M0MP217zhengxin_2dcoding4scss7Emitter14add__extension(emitter, _tmp$2, parents);
                if (_bind$8.$tag === 1) {
                  const _ok = _bind$8;
                  _ok._0;
                } else {
                  return _bind$8;
                }
              } else {
                const _bind$7 = "@use ";
                if (_M0MPC16string6String11has__prefix(part, new _M0TPC16string10StringView(_bind$7, 0, _bind$7.length))) {
                  const _bind$8 = _M0MP217zhengxin_2dcoding4scss5Scope15load__directive(scope, _M0MPC16string10StringView9to__owned(_M0MPC16string6String11sub_2einner(part, 5, undefined)), false);
                  if (_bind$8.$tag === 1) {
                    const _ok = _bind$8;
                    _ok._0;
                  } else {
                    return _bind$8;
                  }
                } else {
                  const _bind$8 = "@forward ";
                  if (_M0MPC16string6String11has__prefix(part, new _M0TPC16string10StringView(_bind$8, 0, _bind$8.length))) {
                    const _bind$9 = _M0MP217zhengxin_2dcoding4scss5Scope15load__directive(scope, _M0MPC16string10StringView9to__owned(_M0MPC16string6String11sub_2einner(part, 9, undefined)), true);
                    if (_bind$9.$tag === 1) {
                      const _ok = _bind$9;
                      _ok._0;
                    } else {
                      return _bind$9;
                    }
                  } else {
                    let _tmp$2;
                    const _bind$9 = "@warn ";
                    if (_M0MPC16string6String11has__prefix(part, new _M0TPC16string10StringView(_bind$9, 0, _bind$9.length))) {
                      _tmp$2 = true;
                    } else {
                      const _bind$10 = "@debug ";
                      _tmp$2 = _M0MPC16string6String11has__prefix(part, new _M0TPC16string10StringView(_bind$10, 0, _bind$10.length));
                    }
                    if (_tmp$2) {
                      const _bind$10 = "@debug ";
                      const debug = _M0MPC16string6String11has__prefix(part, new _M0TPC16string10StringView(_bind$10, 0, _bind$10.length));
                      const _tmp$3 = scope.evaluation.diagnostics;
                      const _tmp$4 = debug ? "debug: " : "warn: ";
                      const _bind$11 = _M0MP217zhengxin_2dcoding4scss5Scope16evaluate_2einner(scope, _M0MPC16string10StringView9to__owned(_M0MPC16string6String11sub_2einner(part, debug ? 7 : 6, undefined)), true);
                      let _tmp$5;
                      if (_bind$11.$tag === 1) {
                        const _ok = _bind$11;
                        _tmp$5 = _ok._0;
                      } else {
                        return _bind$11;
                      }
                      const _bind$12 = _M0MP217zhengxin_2dcoding4scss9SassValue11css_2einner(_tmp$5, true, true);
                      let _tmp$6;
                      if (_bind$12.$tag === 1) {
                        const _ok = _bind$12;
                        _tmp$6 = _ok._0;
                      } else {
                        return _bind$12;
                      }
                      _M0MPC15array5Array4pushGRPC14json10WriteFrameE(_tmp$3, `${_tmp$4}${_tmp$6}`);
                    } else {
                      const _bind$10 = "@include ";
                      if (_M0MPC16string6String11has__prefix(part, new _M0TPC16string10StringView(_bind$10, 0, _bind$10.length))) {
                        const _bind$11 = _M0FP217zhengxin_2dcoding4scss14include__mixin(_M0MPC16string10StringView9to__owned(_M0MPC16string6String11sub_2einner(part, 9, undefined)), undefined, parents, scope, emitter, depth, raw, prefix);
                        if (_bind$11.$tag === 1) {
                          const _ok = _bind$11;
                          _ok._0;
                        } else {
                          return _bind$11;
                        }
                      } else {
                        if (part === "@content") {
                          let c;
                          _L$6: {
                            _L$7: {
                              if (content === undefined) {
                              } else {
                                const _Some = content;
                                const _c = _Some;
                                c = _c;
                                break _L$7;
                              }
                              break _L$6;
                            }
                            const _bind$11 = _M0FP217zhengxin_2dcoding4scss6render(c.body, parents, c.scope, emitter, depth + 1 | 0, c.outer, raw, prefix);
                            if (_bind$11.$tag === 1) {
                              const _ok = _bind$11;
                              _ok._0;
                            } else {
                              return _bind$11;
                            }
                          }
                        } else {
                          const _bind$11 = _M0FP217zhengxin_2dcoding4scss10split__top(part, 58);
                          let pieces;
                          if (_bind$11.$tag === 1) {
                            const _ok = _bind$11;
                            pieces = _ok._0;
                          } else {
                            return _bind$11;
                          }
                          if (pieces.length < 2) {
                            return new _M0DTPC16result6ResultGuRP217zhengxin_2dcoding4scss10ParseErrorE3Err(new _M0DTPC15error5Error47zhengxin_2dcoding_2fscss_2eParseError_2eInvalid("declaration requires colon"));
                          }
                          const key = _M0MPC15array5Array2atGRPB4JsonE(pieces, 0);
                          const _tmp$3 = _M0MPC15array9ArrayView9to__ownedGsE(_M0MPC15array5Array12view_2einnerGsE(pieces, 1, undefined));
                          const _bind$12 = ":";
                          const value = new _M0TPB8MutLocalGsE(_M0MPC15array5Array4joinGsE(_tmp$3, new _M0TPC16string10StringView(_bind$12, 0, _bind$12.length)));
                          let _tmp$4;
                          const _bind$13 = "$";
                          if (_M0MPC16string6String11has__prefix(key, new _M0TPC16string10StringView(_bind$13, 0, _bind$13.length))) {
                            _tmp$4 = true;
                          } else {
                            const _bind$14 = ".$";
                            _tmp$4 = _M0MPC16string6String8contains(key, new _M0TPC16string10StringView(_bind$14, 0, _bind$14.length));
                          }
                          if (_tmp$4) {
                            const global = new _M0TPB8MutLocalGbE(false);
                            const default_ = new _M0TPB8MutLocalGbE(false);
                            while (true) {
                              const _tmp$5 = value.val;
                              const _bind$14 = "!global";
                              if (_M0MPC16string6String11has__suffix(_tmp$5, new _M0TPC16string10StringView(_bind$14, 0, _bind$14.length))) {
                                global.val = true;
                                value.val = _M0MPC16string10StringView9to__owned(_M0MPC16string10StringView4trim(_M0MPC16string6String11sub_2einner(value.val, 0, value.val.length - 7 | 0), undefined));
                              } else {
                                const _tmp$6 = value.val;
                                const _bind$15 = "!default";
                                if (_M0MPC16string6String11has__suffix(_tmp$6, new _M0TPC16string10StringView(_bind$15, 0, _bind$15.length))) {
                                  default_.val = true;
                                  value.val = _M0MPC16string10StringView9to__owned(_M0MPC16string10StringView4trim(_M0MPC16string6String11sub_2einner(value.val, 0, value.val.length - 8 | 0), undefined));
                                } else {
                                  break;
                                }
                              }
                              continue;
                            }
                            let _tmp$5;
                            const _bind$14 = "$";
                            if (_M0MPC16string6String11has__prefix(key, new _M0TPC16string10StringView(_bind$14, 0, _bind$14.length))) {
                              _tmp$5 = _M0MPC16string10StringView9to__owned(_M0MPC16string6String11sub_2einner(key, 1, undefined));
                            } else {
                              const _bind$15 = ".$";
                              const _tmp$6 = new _M0TPC16string10StringView(_bind$15, 0, _bind$15.length);
                              const _bind$16 = ".";
                              _tmp$5 = _M0MPC16string6String12replace__all(key, _tmp$6, new _M0TPC16string10StringView(_bind$16, 0, _bind$16.length));
                            }
                            const name = _M0FP217zhengxin_2dcoding4scss15reference__name(_tmp$5);
                            if (default_.val) {
                              if (_M0MPB3Map8containsGsbE(scope.configured, name)) {
                                let supplied;
                                _L$6: {
                                  _L$7: {
                                    const _bind$15 = _M0MPB3Map3getGsRP217zhengxin_2dcoding4scss9SassValueE(scope.configuration, name);
                                    if (_bind$15 === undefined) {
                                    } else {
                                      const _Some = _bind$15;
                                      const _supplied = _Some;
                                      supplied = _supplied;
                                      break _L$7;
                                    }
                                    break _L$6;
                                  }
                                  _M0MPB3Map6removeGsbE(scope.configured, name);
                                  let _tmp$6;
                                  if (supplied.$tag === 4) {
                                    _tmp$6 = true;
                                  } else {
                                    _tmp$6 = false;
                                  }
                                  if (!_tmp$6) {
                                    const _bind$15 = _M0MP217zhengxin_2dcoding4scss5Scope6assign(scope, name, supplied);
                                    if (_bind$15.$tag === 1) {
                                      const _ok = _bind$15;
                                      _ok._0;
                                    } else {
                                      return _bind$15;
                                    }
                                  }
                                }
                              }
                            }
                            _L$6: {
                              _L$7: {
                                if (!default_.val) {
                                  break _L$7;
                                } else {
                                  const _bind$15 = _M0MP217zhengxin_2dcoding4scss5Scope3get(scope, name);
                                  let _bind$16;
                                  if (_bind$15.$tag === 1) {
                                    const _ok = _bind$15;
                                    _bind$16 = _ok._0;
                                  } else {
                                    return _bind$15;
                                  }
                                  if (_bind$16 === undefined) {
                                    break _L$7;
                                  } else {
                                    const _bind$17 = _M0MP217zhengxin_2dcoding4scss5Scope3get(scope, name);
                                    let _bind$18;
                                    if (_bind$17.$tag === 1) {
                                      const _ok = _bind$17;
                                      _bind$18 = _ok._0;
                                    } else {
                                      return _bind$17;
                                    }
                                    if (_bind$18 === undefined) {
                                    } else {
                                      const _Some = _bind$18;
                                      const _x = _Some;
                                      if (_x.$tag === 4) {
                                        break _L$7;
                                      }
                                    }
                                  }
                                }
                                break _L$6;
                              }
                              const _bind$15 = _M0MP217zhengxin_2dcoding4scss5Scope16evaluate_2einner(scope, value.val, true);
                              let computed;
                              if (_bind$15.$tag === 1) {
                                const _ok = _bind$15;
                                computed = _ok._0;
                              } else {
                                return _bind$15;
                              }
                              if (global.val) {
                                const _bind$16 = _M0MP217zhengxin_2dcoding4scss5Scope6assign(_M0MP217zhengxin_2dcoding4scss5Scope6global(scope), name, computed);
                                if (_bind$16.$tag === 1) {
                                  const _ok = _bind$16;
                                  _ok._0;
                                } else {
                                  return _bind$16;
                                }
                              } else {
                                const _bind$16 = _M0MP217zhengxin_2dcoding4scss5Scope6assign(scope, name, computed);
                                if (_bind$16.$tag === 1) {
                                  const _ok = _bind$16;
                                  _ok._0;
                                } else {
                                  return _bind$16;
                                }
                              }
                            }
                          } else {
                            if (_M0MPC15array5Array9is__emptyGRPB4JsonE(parents) && !raw) {
                              return new _M0DTPC16result6ResultGuRP217zhengxin_2dcoding4scss10ParseErrorE3Err(new _M0DTPC15error5Error47zhengxin_2dcoding_2fscss_2eParseError_2eInvalid("property outside rule"));
                            }
                            const _bind$14 = _M0MP217zhengxin_2dcoding4scss5Scope14expand_2einner(scope, key, true);
                            let _tmp$5;
                            if (_bind$14.$tag === 1) {
                              const _ok = _bind$14;
                              _tmp$5 = _ok._0;
                            } else {
                              return _bind$14;
                            }
                            const key$2 = `${prefix}${_tmp$5}`;
                            const _bind$15 = "--";
                            if (_M0MPC16string6String11has__prefix(key$2, new _M0TPC16string10StringView(_bind$15, 0, _bind$15.length))) {
                              const chars = _M0MPC16string6String9to__array(part);
                              const at = new _M0TPB8MutLocalGiE(0);
                              while (true) {
                                if (at.val < chars.length && _M0MPC15array5Array2atGcE(chars, at.val) !== 58) {
                                  at.val = at.val + 1 | 0;
                                  continue;
                                } else {
                                  break;
                                }
                              }
                              const _bind$16 = _M0MP217zhengxin_2dcoding4scss5Scope14expand_2einner(scope, _M0MPC16string6String11from__array(_M0MPC15array5Array12view_2einnerGcE(chars, at.val + 1 | 0, undefined)), false);
                              let _tmp$6;
                              if (_bind$16.$tag === 1) {
                                const _ok = _bind$16;
                                _tmp$6 = _ok._0;
                              } else {
                                return _bind$16;
                              }
                              value.val = _tmp$6;
                            } else {
                              const _bind$16 = _M0MP217zhengxin_2dcoding4scss5Scope16evaluate_2einner(scope, value.val, false);
                              let computed;
                              if (_bind$16.$tag === 1) {
                                const _ok = _bind$16;
                                computed = _ok._0;
                              } else {
                                return _bind$16;
                              }
                              let _tmp$6;
                              if (computed.$tag === 4) {
                                _tmp$6 = "";
                              } else {
                                const _bind$17 = _M0MP217zhengxin_2dcoding4scss9SassValue11css_2einner(computed, false, false);
                                if (_bind$17.$tag === 1) {
                                  const _ok = _bind$17;
                                  _tmp$6 = _ok._0;
                                } else {
                                  return _bind$17;
                                }
                              }
                              value.val = _tmp$6;
                            }
                            let _tmp$6;
                            const _bind$16 = "@";
                            if (_M0MPC16string6String11has__prefix(key$2, new _M0TPC16string10StringView(_bind$16, 0, _bind$16.length))) {
                              _tmp$6 = true;
                            } else {
                              const _bind$17 = " ";
                              _tmp$6 = _M0MPC16string6String8contains(key$2, new _M0TPC16string10StringView(_bind$17, 0, _bind$17.length));
                            }
                            if (_tmp$6) {
                              return new _M0DTPC16result6ResultGuRP217zhengxin_2dcoding4scss10ParseErrorE3Err(new _M0DTPC15error5Error47zhengxin_2dcoding_2fscss_2eParseError_2eInvalid("unsupported declaration"));
                            }
                            if (value.val === "()") {
                              return new _M0DTPC16result6ResultGuRP217zhengxin_2dcoding4scss10ParseErrorE3Err(new _M0DTPC15error5Error47zhengxin_2dcoding_2fscss_2eParseError_2eInvalid("empty list is not a CSS value"));
                            }
                            if (!_M0MPC16string6String9is__empty(value.val)) {
                              const _bind$17 = _M0MP217zhengxin_2dcoding4scss7Emitter8property(emitter, parents, key$2, value.val);
                              if (_bind$17.$tag === 1) {
                                const _ok = _bind$17;
                                _ok._0;
                              } else {
                                return _bind$17;
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
        break _L;
      }
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return new _M0DTPC16result6ResultGuRP217zhengxin_2dcoding4scss10ParseErrorE2Ok(undefined);
}
function _M0FP217zhengxin_2dcoding4scss14include__mixin(header, body, parents, caller, emitter, depth, raw, prefix) {
  let name;
  let args;
  _L: {
    const _bind$2 = _M0FP217zhengxin_2dcoding4scss10invocation(header);
    let _bind$3;
    if (_bind$2.$tag === 1) {
      const _ok = _bind$2;
      _bind$3 = _ok._0;
    } else {
      return _bind$2;
    }
    const _name = _bind$3._0;
    const _args = _bind$3._1;
    name = _name;
    args = _args;
    break _L;
  }
  let definition;
  const _bind$2 = _M0MP217zhengxin_2dcoding4scss5Scope13lookup__mixin(caller, name);
  let _bind$3;
  if (_bind$2.$tag === 1) {
    const _ok = _bind$2;
    _bind$3 = _ok._0;
  } else {
    return _bind$2;
  }
  if (_bind$3 === undefined) {
    return new _M0DTPC16result6ResultGuRP217zhengxin_2dcoding4scss10ParseErrorE3Err(new _M0DTPC15error5Error47zhengxin_2dcoding_2fscss_2eParseError_2eInvalid(`undefined mixin ${name}`));
  } else {
    const _Some = _bind$3;
    const _m = _Some;
    definition = _m;
  }
  const scope = _M0MP217zhengxin_2dcoding4scss5Scope3new(definition.scope);
  const _bind$4 = [];
  const keywords = _M0MPB3Map3MapGsRP217zhengxin_2dcoding4scss9SassValueE(new _M0TPB9ArrayViewGUsRP217zhengxin_2dcoding4scss9SassValueEE(_bind$4, 0, 0), undefined);
  const positional = [];
  const named = new _M0TPB8MutLocalGbE(false);
  const _bind$5 = args.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind$5) {
      const arg = args[_];
      const _bind$6 = _M0FP217zhengxin_2dcoding4scss10split__top(arg, 58);
      let parts;
      if (_bind$6.$tag === 1) {
        const _ok = _bind$6;
        parts = _ok._0;
      } else {
        return _bind$6;
      }
      let _tmp$2;
      if (parts.length > 1) {
        const _tmp$3 = _M0MPC15array5Array2atGRPB4JsonE(parts, 0);
        const _bind$7 = "$";
        _tmp$2 = _M0MPC16string6String11has__prefix(_tmp$3, new _M0TPC16string10StringView(_bind$7, 0, _bind$7.length));
      } else {
        _tmp$2 = false;
      }
      if (_tmp$2) {
        named.val = true;
        const key = _M0FP217zhengxin_2dcoding4scss10identifier(_M0MPC16string10StringView9to__owned(_M0MPC16string6String11sub_2einner(_M0MPC15array5Array2atGRPB4JsonE(parts, 0), 1, undefined)));
        if (_M0MPB3Map8containsGsRP217zhengxin_2dcoding4scss9SassValueE(keywords, key)) {
          return new _M0DTPC16result6ResultGuRP217zhengxin_2dcoding4scss10ParseErrorE3Err(new _M0DTPC15error5Error47zhengxin_2dcoding_2fscss_2eParseError_2eInvalid("duplicate keyword argument"));
        }
        const _tmp$3 = _M0MPC15array9ArrayView9to__ownedGsE(_M0MPC15array5Array12view_2einnerGsE(parts, 1, undefined));
        const _bind$7 = ":";
        const _bind$8 = _M0MP217zhengxin_2dcoding4scss5Scope16evaluate_2einner(caller, _M0MPC15array5Array4joinGsE(_tmp$3, new _M0TPC16string10StringView(_bind$7, 0, _bind$7.length)), true);
        let _tmp$4;
        if (_bind$8.$tag === 1) {
          const _ok = _bind$8;
          _tmp$4 = _ok._0;
        } else {
          return _bind$8;
        }
        _M0MPB3Map3setGsRP217zhengxin_2dcoding4scss9SassValueE(keywords, key, _tmp$4);
      } else {
        if (named.val) {
          return new _M0DTPC16result6ResultGuRP217zhengxin_2dcoding4scss10ParseErrorE3Err(new _M0DTPC15error5Error47zhengxin_2dcoding_2fscss_2eParseError_2eInvalid("positional argument after keyword"));
        }
        const _bind$7 = _M0MP217zhengxin_2dcoding4scss5Scope16evaluate_2einner(caller, arg, true);
        let _tmp$3;
        if (_bind$7.$tag === 1) {
          const _ok = _bind$7;
          _tmp$3 = _ok._0;
        } else {
          return _bind$7;
        }
        _M0MPC15array5Array4pushGRPC14json10WriteFrameE(positional, _tmp$3);
      }
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const _bind$6 = 0;
  const _bind$7 = definition.params.length;
  let _tmp$2 = _bind$6;
  while (true) {
    const i = _tmp$2;
    if (i < _bind$7) {
      let key;
      let default_;
      _L$2: {
        const _bind$8 = _M0MPC15array5Array2atGRPB4JsonE(definition.params, i);
        const _key = _bind$8._0;
        const _default = _bind$8._1;
        key = _key;
        default_ = _default;
        break _L$2;
      }
      let value;
      if (i < positional.length) {
        if (_M0MPB3Map8containsGsRP217zhengxin_2dcoding4scss9SassValueE(keywords, key)) {
          return new _M0DTPC16result6ResultGuRP217zhengxin_2dcoding4scss10ParseErrorE3Err(new _M0DTPC15error5Error47zhengxin_2dcoding_2fscss_2eParseError_2eInvalid("argument supplied twice"));
        }
        value = _M0MPC15array5Array2atGRPB4JsonE(positional, i);
      } else {
        let v;
        _L$3: {
          _L$4: {
            const _bind$8 = _M0MPB3Map3getGsRP217zhengxin_2dcoding4scss9SassValueE(keywords, key);
            if (_bind$8 === undefined) {
              let v$2;
              _L$5: {
                if (default_ === undefined) {
                  return new _M0DTPC16result6ResultGuRP217zhengxin_2dcoding4scss10ParseErrorE3Err(new _M0DTPC15error5Error47zhengxin_2dcoding_2fscss_2eParseError_2eInvalid(`missing mixin argument ${key}`));
                } else {
                  const _Some = default_;
                  const _v = _Some;
                  v$2 = _v;
                  break _L$5;
                }
              }
              const _bind$9 = _M0MP217zhengxin_2dcoding4scss5Scope16evaluate_2einner(scope, v$2, true);
              if (_bind$9.$tag === 1) {
                const _ok = _bind$9;
                value = _ok._0;
              } else {
                return _bind$9;
              }
            } else {
              const _Some = _bind$8;
              const _v = _Some;
              v = _v;
              break _L$4;
            }
            break _L$3;
          }
          _M0MPB3Map6removeGsRP217zhengxin_2dcoding4scss9SassValueE(keywords, key);
          value = v;
        }
      }
      _M0MPB3Map3setGsRP217zhengxin_2dcoding4scss9SassValueE(scope.vars, key, value);
      _tmp$2 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  if (!_M0MPB3Map9is__emptyGssE(keywords)) {
    return new _M0DTPC16result6ResultGuRP217zhengxin_2dcoding4scss10ParseErrorE3Err(new _M0DTPC15error5Error47zhengxin_2dcoding_2fscss_2eParseError_2eInvalid("unknown keyword argument"));
  }
  let key;
  _L$2: {
    _L$3: {
      const _bind$8 = definition.rest;
      if (_bind$8 === undefined) {
        if (positional.length > definition.params.length) {
          return new _M0DTPC16result6ResultGuRP217zhengxin_2dcoding4scss10ParseErrorE3Err(new _M0DTPC15error5Error47zhengxin_2dcoding_2fscss_2eParseError_2eInvalid("too many mixin arguments"));
        }
      } else {
        const _Some = _bind$8;
        const _key = _Some;
        key = _key;
        break _L$3;
      }
      break _L$2;
    }
    _M0MPB3Map3setGsRP217zhengxin_2dcoding4scss9SassValueE(scope.vars, key, positional.length > definition.params.length ? new _M0DTP217zhengxin_2dcoding4scss9SassValue4List(_M0MPC15array9ArrayView9to__ownedGsE(_M0MPC15array5Array12view_2einnerGsE(positional, definition.params.length, undefined)), ",", false) : new _M0DTP217zhengxin_2dcoding4scss9SassValue4List([], ",", false));
  }
  return _M0FP217zhengxin_2dcoding4scss6render(definition.body, parents, scope, emitter, depth + 1 | 0, body, raw, prefix);
}
function _M0FP217zhengxin_2dcoding4scss16render__at__root(header, body, parents, scope, emitter, depth, content) {
  const _tmp = _M0MPC16string10StringView9to__owned(_M0MPC16string6String11sub_2einner(header, 8, undefined));
  const _bind$2 = "#{&}";
  const _tmp$2 = new _M0TPC16string10StringView(_bind$2, 0, _bind$2.length);
  const _bind$3 = ", ";
  const _bind$4 = _M0MPC15array5Array4joinGsE(parents, new _M0TPC16string10StringView(_bind$3, 0, _bind$3.length));
  const _bind$5 = _M0MP217zhengxin_2dcoding4scss5Scope14expand_2einner(scope, _M0MPC16string6String12replace__all(_tmp, _tmp$2, new _M0TPC16string10StringView(_bind$4, 0, _bind$4.length)), true);
  let _tmp$3;
  if (_bind$5.$tag === 1) {
    const _ok = _bind$5;
    _tmp$3 = _ok._0;
  } else {
    return _bind$5;
  }
  const tail = _M0MPC16string10StringView9to__owned(_M0MPC16string6String4trim(_tmp$3, undefined));
  const saved_context = emitter.context;
  const saved_parent = emitter.root_parent;
  const next_parents = new _M0TPB8MutLocalGRPB5ArrayGsEE([]);
  const next_context = new _M0TPB8MutLocalGRPB5ArrayGsEE(saved_context);
  const _bind$6 = "(";
  if (_M0MPC16string6String11has__prefix(tail, new _M0TPC16string10StringView(_bind$6, 0, _bind$6.length))) {
    const _bind$7 = ")";
    if (!_M0MPC16string6String11has__suffix(tail, new _M0TPC16string10StringView(_bind$7, 0, _bind$7.length))) {
      return new _M0DTPC16result6ResultGuRP217zhengxin_2dcoding4scss10ParseErrorE3Err(new _M0DTPC15error5Error47zhengxin_2dcoding_2fscss_2eParseError_2eInvalid("invalid at-root query"));
    }
    const _bind$8 = _M0FP217zhengxin_2dcoding4scss10split__top(_M0MPC16string10StringView9to__owned(_M0MPC16string6String11sub_2einner(tail, 1, tail.length - 1 | 0)), 58);
    let parts;
    if (_bind$8.$tag === 1) {
      const _ok = _bind$8;
      parts = _ok._0;
    } else {
      return _bind$8;
    }
    if (parts.length !== 2 || !_M0MPC15array5Array8containsGsE(["with", "without"], _M0MPC15array5Array2atGRPB4JsonE(parts, 0))) {
      return new _M0DTPC16result6ResultGuRP217zhengxin_2dcoding4scss10ParseErrorE3Err(new _M0DTPC15error5Error47zhengxin_2dcoding_2fscss_2eParseError_2eInvalid("at-root query requires with or without"));
    }
    const _tmp$4 = _M0MPC15array5Array2atGRPB4JsonE(parts, 1);
    const _bind$9 = "\t";
    const _tmp$5 = new _M0TPC16string10StringView(_bind$9, 0, _bind$9.length);
    const _bind$10 = " ";
    const _tmp$6 = _M0MPC16string6String12replace__all(_tmp$4, _tmp$5, new _M0TPC16string10StringView(_bind$10, 0, _bind$10.length));
    const _bind$11 = "\n";
    const _tmp$7 = new _M0TPC16string10StringView(_bind$11, 0, _bind$11.length);
    const _bind$12 = " ";
    const _tmp$8 = _M0MPC16string6String12replace__all(_tmp$6, _tmp$7, new _M0TPC16string10StringView(_bind$12, 0, _bind$12.length));
    const _bind$13 = " ";
    const names = _M0MPB4Iter9to__arrayGRPC16string10StringViewE(_M0MPB4Iter3mapGRPC16string10StringViewsE(_M0MPB4Iter6filterGRPC16string10StringViewE(_M0MPC16string6String5split(_tmp$8, new _M0TPC16string10StringView(_bind$13, 0, _bind$13.length)), (s) => !_M0MPC16string10StringView9is__empty(s)), (s) => _M0MPC16string10StringView9to__owned(s)));
    if (_M0MPC15array5Array9is__emptyGRPB4JsonE(names)) {
      return new _M0DTPC16result6ResultGuRP217zhengxin_2dcoding4scss10ParseErrorE3Err(new _M0DTPC15error5Error47zhengxin_2dcoding_2fscss_2eParseError_2eInvalid("empty at-root query"));
    }
    const keep = (name) => {
      const listed = _M0MPC15array5Array8containsGsE(names, "all") || _M0MPC15array5Array8containsGsE(names, name);
      return _M0MPC15array5Array2atGRPB4JsonE(parts, 0) === "with" ? listed : !listed;
    };
    if (keep("rule")) {
      next_parents.val = parents;
    }
    next_context.val = _M0MPC15array5Array6filterGsE(saved_context, (h) => keep(_M0FP217zhengxin_2dcoding4scss14at__rule__name(h)));
  } else {
    if (!_M0MPC16string6String9is__empty(tail)) {
      const _bind$7 = _M0FP217zhengxin_2dcoding4scss18resolve__selectors(parents, tail, false, 0);
      let _tmp$4;
      if (_bind$7.$tag === 1) {
        const _ok = _bind$7;
        _tmp$4 = _ok._0;
      } else {
        return _bind$7;
      }
      next_parents.val = _tmp$4;
    }
  }
  if (_M0IP016_24default__implPB2Eq10not__equalGRPB5ArrayGsEE(next_context.val, saved_context)) {
    const shared = new _M0TPB8MutLocalGiE(0);
    while (true) {
      if (shared.val < next_context.val.length && (shared.val < saved_context.length && _M0MPC15array5Array2atGRPB4JsonE(next_context.val, shared.val) === _M0MPC15array5Array2atGRPB4JsonE(saved_context, shared.val))) {
        shared.val = shared.val + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    const lifted = new _M0TP217zhengxin_2dcoding4scss7Emitter([], emitter.extensions, emitter.path, next_context.val, parents, [], 0, emitter.budget, 0, [], []);
    const _bind$7 = _M0FP217zhengxin_2dcoding4scss6render(body, next_parents.val, _M0MP217zhengxin_2dcoding4scss5Scope3new(scope), lifted, depth + 1 | 0, content, false, "");
    if (_bind$7.$tag === 1) {
      const _ok = _bind$7;
      _ok._0;
    } else {
      return _bind$7;
    }
    const _bind$8 = _M0MP217zhengxin_2dcoding4scss7Emitter5flush(lifted);
    if (_bind$8.$tag === 1) {
      const _ok = _bind$8;
      _ok._0;
    } else {
      return _bind$8;
    }
    emitter.budget = lifted.budget;
    _M0MPC15array5Array4pushGRPC14json10WriteFrameE(emitter.hoisted, { _0: shared.val, _1: lifted.output });
    const _bind$9 = lifted.hoisted;
    const _bind$10 = _bind$9.length;
    let _tmp$4 = 0;
    while (true) {
      const _ = _tmp$4;
      if (_ < _bind$10) {
        const item = _bind$9[_];
        _M0MPC15array5Array4pushGRPC14json10WriteFrameE(emitter.hoisted, item);
        _tmp$4 = _ + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    return new _M0DTPC16result6ResultGuRP217zhengxin_2dcoding4scss10ParseErrorE2Ok(undefined);
  }
  const _bind$7 = _M0MP217zhengxin_2dcoding4scss7Emitter5flush(emitter);
  if (_bind$7.$tag === 1) {
    const _ok = _bind$7;
    _ok._0;
  } else {
    return _bind$7;
  }
  if (!_M0MPC15array5Array9is__emptyGRPB4JsonE(next_parents.val)) {
    _M0MPC15array5Array4pushGRPC14json10WriteFrameE(emitter.output, new _M0TP217zhengxin_2dcoding4scss7CssRule(_M0MPC15array5Array4copyGsE(next_parents.val), "", _M0MPC15array5Array4copyGsE(emitter.context), emitter.path));
  }
  emitter.root_parent = _M0MPC15array5Array9is__emptyGRPB4JsonE(parents) ? saved_parent : parents;
  const _bind$8 = _M0FP217zhengxin_2dcoding4scss6render(body, next_parents.val, _M0MP217zhengxin_2dcoding4scss5Scope3new(scope), emitter, depth + 1 | 0, content, false, "");
  if (_bind$8.$tag === 1) {
    const _ok = _bind$8;
    _ok._0;
  } else {
    return _bind$8;
  }
  const _bind$9 = _M0MP217zhengxin_2dcoding4scss7Emitter5flush(emitter);
  if (_bind$9.$tag === 1) {
    const _ok = _bind$9;
    _ok._0;
  } else {
    return _bind$9;
  }
  emitter.context = saved_context;
  emitter.root_parent = saved_parent;
  return new _M0DTPC16result6ResultGuRP217zhengxin_2dcoding4scss10ParseErrorE2Ok(undefined);
}
function _M0MP217zhengxin_2dcoding4scss5Scope14expand_2einner(self, text, variables) {
  const cs = _M0MPC16string6String9to__array(text);
  const out = _M0MPB13StringBuilder21StringBuilder_2einner(0);
  const size = new _M0TPB8MutLocalGiE(0);
  const i = new _M0TPB8MutLocalGiE(0);
  const quote = new _M0TPB8MutLocalGcE(0);
  while (true) {
    if (i.val < cs.length) {
      const c = _M0MPC15array5Array2atGcE(cs, i.val);
      if (c === 92) {
        _M0IPB13StringBuilderPB6Logger11write__char(out, c);
        i.val = i.val + 1 | 0;
        size.val = size.val + 1 | 0;
        if (i.val < cs.length) {
          _M0IPB13StringBuilderPB6Logger11write__char(out, _M0MPC15array5Array2atGcE(cs, i.val));
          i.val = i.val + 1 | 0;
          size.val = size.val + 2 | 0;
        }
        continue;
      }
      if (c === 35 && ((i.val + 1 | 0) < cs.length && _M0MPC15array5Array2atGcE(cs, i.val + 1 | 0) === 123)) {
        const parser = new _M0TP217zhengxin_2dcoding4scss16ExpressionParser(cs, i.val, 0);
        const _bind$2 = _M0MP217zhengxin_2dcoding4scss16ExpressionParser13interpolation(parser);
        let expression;
        if (_bind$2.$tag === 1) {
          const _ok = _bind$2;
          expression = _ok._0;
        } else {
          return _bind$2;
        }
        i.val = parser.pos;
        const _bind$3 = _M0MP217zhengxin_2dcoding4scss5Scope9eval__ast(self, expression, true, 0);
        let computed;
        if (_bind$3.$tag === 1) {
          const _ok = _bind$3;
          computed = _ok._0;
        } else {
          return _bind$3;
        }
        let value;
        _L: {
          _L$2: {
            if (computed.$tag === 5) {
              const _List = computed;
              const _x = _List._0;
              if (_x.length === 0) {
                value = "";
              } else {
                break _L$2;
              }
            } else {
              break _L$2;
            }
            break _L;
          }
          if (computed.$tag === 4) {
            value = "";
          } else {
            const _bind$4 = _M0MP217zhengxin_2dcoding4scss9SassValue11css_2einner(computed, true, false);
            if (_bind$4.$tag === 1) {
              const _ok = _bind$4;
              value = _ok._0;
            } else {
              return _bind$4;
            }
          }
        }
        _M0IPB13StringBuilderPB6Logger13write__string(out, value);
        size.val = size.val + value.length | 0;
      } else {
        if (variables && (c === 36 && quote.val === 0)) {
          i.val = i.val + 1 | 0;
          const start = i.val;
          while (true) {
            if (i.val < cs.length && (_M0FP217zhengxin_2dcoding4scss4word(_M0MPC15array5Array2atGcE(cs, i.val)) || _M0MPC15array5Array2atGcE(cs, i.val) === 45)) {
              i.val = i.val + 1 | 0;
              continue;
            } else {
              break;
            }
          }
          const key = _M0MPC16string6String11from__array(_M0MPC15array5Array12view_2einnerGcE(cs, start, i.val));
          let value;
          let v;
          _L: {
            const _bind$2 = _M0MP217zhengxin_2dcoding4scss5Scope3get(self, key);
            let _bind$3;
            if (_bind$2.$tag === 1) {
              const _ok = _bind$2;
              _bind$3 = _ok._0;
            } else {
              return _bind$2;
            }
            if (_bind$3 === undefined) {
              return new _M0DTPC16result6ResultGsRP217zhengxin_2dcoding4scss10ParseErrorE3Err(new _M0DTPC15error5Error47zhengxin_2dcoding_2fscss_2eParseError_2eInvalid(`undefined variable ${key}`));
            } else {
              const _Some = _bind$3;
              const _v = _Some;
              v = _v;
              break _L;
            }
          }
          const _bind$2 = _M0MP217zhengxin_2dcoding4scss9SassValue11css_2einner(v, false, false);
          if (_bind$2.$tag === 1) {
            const _ok = _bind$2;
            value = _ok._0;
          } else {
            return _bind$2;
          }
          _M0IPB13StringBuilderPB6Logger13write__string(out, value);
          size.val = size.val + value.length | 0;
        } else {
          if (quote.val === 0 && (c === 39 || c === 34)) {
            quote.val = c;
          } else {
            if (c === quote.val) {
              quote.val = 0;
            }
          }
          _M0IPB13StringBuilderPB6Logger11write__char(out, c);
          i.val = i.val + 1 | 0;
          size.val = size.val + _M0MPC14char4Char10utf16__len(c) | 0;
        }
      }
      if (size.val > 1000000) {
        return new _M0DTPC16result6ResultGsRP217zhengxin_2dcoding4scss10ParseErrorE3Err(new _M0DTPC15error5Error47zhengxin_2dcoding_2fscss_2eParseError_2eInvalid("expanded value limit"));
      }
      continue;
    } else {
      break;
    }
  }
  if (size.val > 1000000) {
    return new _M0DTPC16result6ResultGsRP217zhengxin_2dcoding4scss10ParseErrorE3Err(new _M0DTPC15error5Error47zhengxin_2dcoding_2fscss_2eParseError_2eInvalid("expanded value limit"));
  }
  return new _M0DTPC16result6ResultGsRP217zhengxin_2dcoding4scss10ParseErrorE2Ok(_M0MPB13StringBuilder10to__string(out));
}
function _M0FP217zhengxin_2dcoding4scss12render__loop(header, body, parents, scope, emitter, depth, content, raw, prefix) {
  let _tmp;
  const _bind$2 = "@while ";
  if (_M0MPC16string6String11has__prefix(header, new _M0TPC16string10StringView(_bind$2, 0, _bind$2.length))) {
    const _bind$3 = _M0FP217zhengxin_2dcoding4scss17parse__expression(_M0MPC16string10StringView9to__owned(_M0MPC16string6String11sub_2einner(header, 7, undefined)));
    let expression;
    if (_bind$3.$tag === 1) {
      const _ok = _bind$3;
      expression = _ok._0;
    } else {
      return _bind$3;
    }
    const frame = _M0MP217zhengxin_2dcoding4scss5Scope11flow__scope(scope);
    while (true) {
      const _bind$4 = _M0MP217zhengxin_2dcoding4scss5Scope9eval__ast(frame, expression, true, 0);
      let _tmp$2;
      if (_bind$4.$tag === 1) {
        const _ok = _bind$4;
        _tmp$2 = _ok._0;
      } else {
        return _bind$4;
      }
      if (_M0MP217zhengxin_2dcoding4scss9SassValue5truth(_tmp$2)) {
        const _bind$5 = _M0MP217zhengxin_2dcoding4scss5Scope6charge(frame);
        if (_bind$5.$tag === 1) {
          const _ok = _bind$5;
          _ok._0;
        } else {
          return _bind$5;
        }
        const _bind$6 = _M0FP217zhengxin_2dcoding4scss6render(body, parents, frame, emitter, depth + 1 | 0, content, raw, prefix);
        if (_bind$6.$tag === 1) {
          const _ok = _bind$6;
          _ok._0;
        } else {
          return _bind$6;
        }
        let cell;
        _L: {
          _L$2: {
            const _bind$7 = frame.returned;
            if (_bind$7 === undefined) {
            } else {
              const _Some = _bind$7;
              const _cell = _Some;
              cell = _cell;
              break _L$2;
            }
            break _L;
          }
          const _bind$7 = cell.val;
          if (_bind$7 === undefined) {
          } else {
            break;
          }
        }
        continue;
      } else {
        break;
      }
    }
    _tmp = true;
  } else {
    const _bind$3 = "@for ";
    if (_M0MPC16string6String11has__prefix(header, new _M0TPC16string10StringView(_bind$3, 0, _bind$3.length))) {
      const _tmp$2 = _M0MPC16string6String11sub_2einner(header, 5, undefined);
      const _bind$4 = " from ";
      const parts = _M0MPB4Iter9to__arrayGRPC16string10StringViewE(_M0MPC16string10StringView5split(_tmp$2, new _M0TPC16string10StringView(_bind$4, 0, _bind$4.length)));
      if (parts.length !== 2) {
        return new _M0DTPC16result6ResultGbRP217zhengxin_2dcoding4scss10ParseErrorE3Err(new _M0DTPC15error5Error47zhengxin_2dcoding_2fscss_2eParseError_2eInvalid("for requires from"));
      }
      const _bind$5 = _M0FP217zhengxin_2dcoding4scss17control__variable(_M0MPC16string10StringView9to__owned(_M0MPC15array5Array2atGRPB4JsonE(parts, 0)));
      let name;
      if (_bind$5.$tag === 1) {
        const _ok = _bind$5;
        name = _ok._0;
      } else {
        return _bind$5;
      }
      const _tmp$3 = _M0MPC15array5Array2atGRPB4JsonE(parts, 1);
      const _bind$6 = " through ";
      const bounds = new _M0TPB8MutLocalGRPB5ArrayGRPC16string10StringViewEE(_M0MPB4Iter9to__arrayGRPC16string10StringViewE(_M0MPC16string10StringView5split(_tmp$3, new _M0TPC16string10StringView(_bind$6, 0, _bind$6.length))));
      const inclusive = bounds.val.length === 2;
      if (!inclusive) {
        const _tmp$4 = _M0MPC15array5Array2atGRPB4JsonE(parts, 1);
        const _bind$7 = " to ";
        bounds.val = _M0MPB4Iter9to__arrayGRPC16string10StringViewE(_M0MPC16string10StringView5split(_tmp$4, new _M0TPC16string10StringView(_bind$7, 0, _bind$7.length)));
      }
      if (bounds.val.length !== 2) {
        return new _M0DTPC16result6ResultGbRP217zhengxin_2dcoding4scss10ParseErrorE3Err(new _M0DTPC15error5Error47zhengxin_2dcoding_2fscss_2eParseError_2eInvalid("for requires through or to"));
      }
      const _bind$7 = _M0MP217zhengxin_2dcoding4scss5Scope16evaluate_2einner(scope, _M0MPC16string10StringView9to__owned(_M0MPC15array5Array2atGRPB4JsonE(bounds.val, 0)), true);
      let _tmp$4;
      if (_bind$7.$tag === 1) {
        const _ok = _bind$7;
        _tmp$4 = _ok._0;
      } else {
        return _bind$7;
      }
      const _bind$8 = _M0FP217zhengxin_2dcoding4scss12require__int(_tmp$4);
      let first;
      if (_bind$8.$tag === 1) {
        const _ok = _bind$8;
        first = _ok._0;
      } else {
        return _bind$8;
      }
      const _bind$9 = _M0MP217zhengxin_2dcoding4scss5Scope16evaluate_2einner(scope, _M0MPC16string10StringView9to__owned(_M0MPC15array5Array2atGRPB4JsonE(bounds.val, 1)), true);
      let _tmp$5;
      if (_bind$9.$tag === 1) {
        const _ok = _bind$9;
        _tmp$5 = _ok._0;
      } else {
        return _bind$9;
      }
      const _bind$10 = _M0FP217zhengxin_2dcoding4scss12require__int(_tmp$5);
      let last;
      if (_bind$10.$tag === 1) {
        const _ok = _bind$10;
        last = _ok._0;
      } else {
        return _bind$10;
      }
      const direction = first <= last ? 1 : -1;
      const frame = _M0MP217zhengxin_2dcoding4scss5Scope11flow__scope(scope);
      const i = new _M0TPB8MutLocalGiE(first);
      while (true) {
        if (direction > 0 ? i.val < last || inclusive && i.val === last : i.val > last || inclusive && i.val === last) {
          const _bind$11 = _M0MP217zhengxin_2dcoding4scss5Scope6charge(frame);
          if (_bind$11.$tag === 1) {
            const _ok = _bind$11;
            _ok._0;
          } else {
            return _bind$11;
          }
          _M0MPB3Map3setGsRP217zhengxin_2dcoding4scss9SassValueE(frame.vars, name, _M0FP217zhengxin_2dcoding4scss15numeric_2einner(i.val + 0, ""));
          const _bind$12 = _M0FP217zhengxin_2dcoding4scss6render(body, parents, frame, emitter, depth + 1 | 0, content, raw, prefix);
          if (_bind$12.$tag === 1) {
            const _ok = _bind$12;
            _ok._0;
          } else {
            return _bind$12;
          }
          _L: {
            _L$2: {
              if (i.val === last) {
                break _L$2;
              } else {
                let cell;
                _L$3: {
                  _L$4: {
                    const _bind$13 = frame.returned;
                    if (_bind$13 === undefined) {
                    } else {
                      const _Some = _bind$13;
                      const _cell = _Some;
                      cell = _cell;
                      break _L$4;
                    }
                    break _L$3;
                  }
                  const _bind$13 = cell.val;
                  if (_bind$13 === undefined) {
                  } else {
                    break _L$2;
                  }
                }
              }
              break _L;
            }
            break;
          }
          i.val = i.val + direction | 0;
          continue;
        } else {
          break;
        }
      }
      _tmp = true;
    } else {
      const _bind$4 = "@each ";
      if (_M0MPC16string6String11has__prefix(header, new _M0TPC16string10StringView(_bind$4, 0, _bind$4.length))) {
        const _tmp$2 = _M0MPC16string6String11sub_2einner(header, 6, undefined);
        const _bind$5 = " in ";
        const pieces = _M0MPB4Iter9to__arrayGRPC16string10StringViewE(_M0MPC16string10StringView5split(_tmp$2, new _M0TPC16string10StringView(_bind$5, 0, _bind$5.length)));
        if (pieces.length < 2) {
          return new _M0DTPC16result6ResultGbRP217zhengxin_2dcoding4scss10ParseErrorE3Err(new _M0DTPC15error5Error47zhengxin_2dcoding_2fscss_2eParseError_2eInvalid("each requires in"));
        }
        const _bind$6 = _M0FP217zhengxin_2dcoding4scss10split__top(_M0MPC16string10StringView9to__owned(_M0MPC15array5Array2atGRPB4JsonE(pieces, 0)), 44);
        let _tmp$3;
        if (_bind$6.$tag === 1) {
          const _ok = _bind$6;
          _tmp$3 = _ok._0;
        } else {
          return _bind$6;
        }
        const _bind$7 = _M0MPC15array5Array3mapGssEHRP217zhengxin_2dcoding4scss10ParseError(_tmp$3, _M0FP217zhengxin_2dcoding4scss17control__variable);
        let names;
        if (_bind$7.$tag === 1) {
          const _ok = _bind$7;
          names = _ok._0;
        } else {
          return _bind$7;
        }
        const _tmp$4 = _M0MPC15array9ArrayView9to__ownedGsE(_M0MPC15array5Array12view_2einnerGsE(pieces, 1, undefined));
        const _bind$8 = " in ";
        const expression = _M0MPC15array5Array4joinGRPC16string10StringViewE(_tmp$4, new _M0TPC16string10StringView(_bind$8, 0, _bind$8.length));
        const _bind$9 = _M0MP217zhengxin_2dcoding4scss5Scope16evaluate_2einner(scope, expression, true);
        let _tmp$5;
        if (_bind$9.$tag === 1) {
          const _ok = _bind$9;
          _tmp$5 = _ok._0;
        } else {
          return _bind$9;
        }
        const values = _M0MP217zhengxin_2dcoding4scss9SassValue5items(_tmp$5);
        const frame = _M0MP217zhengxin_2dcoding4scss5Scope11flow__scope(scope);
        const _bind$10 = values.length;
        let _tmp$6 = 0;
        while (true) {
          const _ = _tmp$6;
          if (_ < _bind$10) {
            const value = values[_];
            const _bind$11 = _M0MP217zhengxin_2dcoding4scss5Scope6charge(frame);
            if (_bind$11.$tag === 1) {
              const _ok = _bind$11;
              _ok._0;
            } else {
              return _bind$11;
            }
            const components = names.length === 1 ? [value] : _M0MP217zhengxin_2dcoding4scss9SassValue5items(value);
            const _bind$12 = 0;
            const _bind$13 = names.length;
            let _tmp$7 = _bind$12;
            while (true) {
              const i = _tmp$7;
              if (i < _bind$13) {
                _M0MPB3Map3setGsRP217zhengxin_2dcoding4scss9SassValueE(frame.vars, _M0MPC15array5Array2atGRPB4JsonE(names, i), _M0MPC16option6Option10unwrap__orGRP217zhengxin_2dcoding4scss9SassValueE(_M0MPC15array5Array3getGRP217zhengxin_2dcoding4scss9SassValueE(components, i), _M0DTP217zhengxin_2dcoding4scss9SassValue4Null__));
                _tmp$7 = i + 1 | 0;
                continue;
              } else {
                break;
              }
            }
            const _bind$14 = _M0FP217zhengxin_2dcoding4scss6render(body, parents, frame, emitter, depth + 1 | 0, content, raw, prefix);
            if (_bind$14.$tag === 1) {
              const _ok = _bind$14;
              _ok._0;
            } else {
              return _bind$14;
            }
            let cell;
            _L: {
              _L$2: {
                const _bind$15 = frame.returned;
                if (_bind$15 === undefined) {
                } else {
                  const _Some = _bind$15;
                  const _cell = _Some;
                  cell = _cell;
                  break _L$2;
                }
                break _L;
              }
              const _bind$15 = cell.val;
              if (_bind$15 === undefined) {
              } else {
                break;
              }
            }
            _tmp$6 = _ + 1 | 0;
            continue;
          } else {
            break;
          }
        }
        _tmp = true;
      } else {
        _tmp = false;
      }
    }
  }
  return new _M0DTPC16result6ResultGbRP217zhengxin_2dcoding4scss10ParseErrorE2Ok(_tmp);
}
function _M0MP217zhengxin_2dcoding4scss5Scope15load__directive(self, source, forward) {
  const _bind$2 = self.parent;
  if (_bind$2 === undefined) {
  } else {
    return new _M0DTPC16result6ResultGuRP217zhengxin_2dcoding4scss10ParseErrorE3Err(new _M0DTPC15error5Error47zhengxin_2dcoding_2fscss_2eParseError_2eInvalid("module directives must be at root"));
  }
  const parser = new _M0TP217zhengxin_2dcoding4scss16ExpressionParser(_M0MPC16string6String9to__array(source), 0, 0);
  _M0MP217zhengxin_2dcoding4scss16ExpressionParser5space(parser);
  if (_M0MP217zhengxin_2dcoding4scss16ExpressionParser12peek_2einner(parser, 0) !== 34 && _M0MP217zhengxin_2dcoding4scss16ExpressionParser12peek_2einner(parser, 0) !== 39) {
    return new _M0DTPC16result6ResultGuRP217zhengxin_2dcoding4scss10ParseErrorE3Err(new _M0DTPC15error5Error47zhengxin_2dcoding_2fscss_2eParseError_2eInvalid("module URL must be quoted"));
  }
  const _bind$3 = _M0MP217zhengxin_2dcoding4scss16ExpressionParser4atom(parser);
  let expression;
  if (_bind$3.$tag === 1) {
    const _ok = _bind$3;
    expression = _ok._0;
  } else {
    return _bind$3;
  }
  const _bind$4 = _M0MP217zhengxin_2dcoding4scss5Scope9eval__ast(self, expression, true, 0);
  let _tmp;
  if (_bind$4.$tag === 1) {
    const _ok = _bind$4;
    _tmp = _ok._0;
  } else {
    return _bind$4;
  }
  const _bind$5 = _M0FP217zhengxin_2dcoding4scss13require__text(_tmp);
  let _tmp$2;
  if (_bind$5.$tag === 1) {
    const _ok = _bind$5;
    _tmp$2 = _ok._0;
  } else {
    return _bind$5;
  }
  const url = _tmp$2._0;
  const tail = new _M0TPB8MutLocalGsE(_M0MPC16string10StringView9to__owned(_M0MPC16string6String4trim(_M0MPC16string6String11from__array(_M0MPC15array5Array12view_2einnerGcE(parser.chars, parser.pos, undefined)), undefined)));
  const _bind$6 = "sass:";
  if (_M0MPC16string6String11has__prefix(url, new _M0TPC16string10StringView(_bind$6, 0, _bind$6.length))) {
    if (forward) {
      return new _M0DTPC16result6ResultGuRP217zhengxin_2dcoding4scss10ParseErrorE3Err(new _M0DTPC15error5Error47zhengxin_2dcoding_2fscss_2eParseError_2eInvalid("forwarding standard modules is not implemented"));
    }
    const _bind$7 = _M0MP217zhengxin_2dcoding4scss5Scope13use__standard(self, source);
    if (_bind$7.$tag === 1) {
      const _ok = _bind$7;
      _ok._0;
    } else {
      return _bind$7;
    }
    return new _M0DTPC16result6ResultGuRP217zhengxin_2dcoding4scss10ParseErrorE2Ok(undefined);
  }
  const _bind$7 = [];
  const configuration = _M0MPB3Map3MapGsRP217zhengxin_2dcoding4scss9SassValueE(new _M0TPB9ArrayViewGUsRP217zhengxin_2dcoding4scss9SassValueEE(_bind$7, 0, 0), undefined);
  const _bind$8 = [];
  const defaults = _M0MPB3Map3MapGsbE(new _M0TPB9ArrayViewGUsbEE(_bind$8, 0, 0), undefined);
  const _tmp$3 = tail.val;
  const _bind$9 = "with ";
  const config_parts = _M0MPB4Iter9to__arrayGRPC16string10StringViewE(_M0MPC16string6String5split(_tmp$3, new _M0TPC16string10StringView(_bind$9, 0, _bind$9.length)));
  if (config_parts.length > 2) {
    return new _M0DTPC16result6ResultGuRP217zhengxin_2dcoding4scss10ParseErrorE3Err(new _M0DTPC15error5Error47zhengxin_2dcoding_2fscss_2eParseError_2eInvalid("invalid module configuration"));
  }
  if (config_parts.length === 2) {
    tail.val = _M0MPC16string10StringView9to__owned(_M0MPC16string10StringView4trim(_M0MPC15array5Array2atGRPB4JsonE(config_parts, 0), undefined));
    const values = _M0MPC16string10StringView9to__owned(_M0MPC16string10StringView4trim(_M0MPC15array5Array2atGRPB4JsonE(config_parts, 1), undefined));
    let _tmp$4;
    const _bind$10 = "(";
    if (!_M0MPC16string6String11has__prefix(values, new _M0TPC16string10StringView(_bind$10, 0, _bind$10.length))) {
      _tmp$4 = true;
    } else {
      const _bind$11 = ")";
      _tmp$4 = !_M0MPC16string6String11has__suffix(values, new _M0TPC16string10StringView(_bind$11, 0, _bind$11.length));
    }
    if (_tmp$4) {
      return new _M0DTPC16result6ResultGuRP217zhengxin_2dcoding4scss10ParseErrorE3Err(new _M0DTPC15error5Error47zhengxin_2dcoding_2fscss_2eParseError_2eInvalid("configuration requires parentheses"));
    }
    const _bind$11 = _M0FP217zhengxin_2dcoding4scss10split__top(_M0MPC16string10StringView9to__owned(_M0MPC16string6String11sub_2einner(values, 1, values.length - 1 | 0)), 44);
    let _bind$12;
    if (_bind$11.$tag === 1) {
      const _ok = _bind$11;
      _bind$12 = _ok._0;
    } else {
      return _bind$11;
    }
    const _bind$13 = _bind$12.length;
    let _tmp$5 = 0;
    while (true) {
      const _ = _tmp$5;
      if (_ < _bind$13) {
        const part = _bind$12[_];
        _L: {
          if (_M0MPC16string6String9is__empty(part)) {
            break _L;
          }
          const _bind$14 = _M0FP217zhengxin_2dcoding4scss10split__top(part, 58);
          let pieces;
          if (_bind$14.$tag === 1) {
            const _ok = _bind$14;
            pieces = _ok._0;
          } else {
            return _bind$14;
          }
          if (pieces.length < 2) {
            return new _M0DTPC16result6ResultGuRP217zhengxin_2dcoding4scss10ParseErrorE3Err(new _M0DTPC15error5Error47zhengxin_2dcoding_2fscss_2eParseError_2eInvalid("configuration requires variable"));
          }
          const _bind$15 = _M0FP217zhengxin_2dcoding4scss17control__variable(_M0MPC15array5Array2atGRPB4JsonE(pieces, 0));
          let key;
          if (_bind$15.$tag === 1) {
            const _ok = _bind$15;
            key = _ok._0;
          } else {
            return _bind$15;
          }
          if (!_M0FP217zhengxin_2dcoding4scss12public__name(key)) {
            return new _M0DTPC16result6ResultGuRP217zhengxin_2dcoding4scss10ParseErrorE3Err(new _M0DTPC15error5Error47zhengxin_2dcoding_2fscss_2eParseError_2eInvalid("cannot configure private variable"));
          }
          if (_M0MPB3Map8containsGsRP217zhengxin_2dcoding4scss9SassValueE(configuration, key)) {
            return new _M0DTPC16result6ResultGuRP217zhengxin_2dcoding4scss10ParseErrorE3Err(new _M0DTPC15error5Error47zhengxin_2dcoding_2fscss_2eParseError_2eInvalid("duplicate configuration variable"));
          }
          const _tmp$6 = _M0MPC15array9ArrayView9to__ownedGsE(_M0MPC15array5Array12view_2einnerGsE(pieces, 1, undefined));
          const _bind$16 = ":";
          const expression$2 = new _M0TPB8MutLocalGsE(_M0MPC15array5Array4joinGsE(_tmp$6, new _M0TPC16string10StringView(_bind$16, 0, _bind$16.length)));
          const _tmp$7 = expression$2.val;
          const _bind$17 = "!default";
          if (_M0MPC16string6String11has__suffix(_tmp$7, new _M0TPC16string10StringView(_bind$17, 0, _bind$17.length))) {
            if (!forward) {
              return new _M0DTPC16result6ResultGuRP217zhengxin_2dcoding4scss10ParseErrorE3Err(new _M0DTPC15error5Error47zhengxin_2dcoding_2fscss_2eParseError_2eInvalid("default flag is only allowed in forward configuration"));
            }
            expression$2.val = _M0MPC16string10StringView9to__owned(_M0MPC16string10StringView4trim(_M0MPC16string6String11sub_2einner(expression$2.val, 0, expression$2.val.length - 8 | 0), undefined));
            _M0MPB3Map3setGsbE(defaults, key, true);
          }
          const _bind$18 = _M0MP217zhengxin_2dcoding4scss5Scope16evaluate_2einner(self, expression$2.val, true);
          let _tmp$8;
          if (_bind$18.$tag === 1) {
            const _ok = _bind$18;
            _tmp$8 = _ok._0;
          } else {
            return _bind$18;
          }
          _M0MPB3Map3setGsRP217zhengxin_2dcoding4scss9SassValueE(configuration, key, _tmp$8);
          break _L;
        }
        _tmp$5 = _ + 1 | 0;
        continue;
      } else {
        break;
      }
    }
  }
  const _bind$10 = _M0MP217zhengxin_2dcoding4scss10Evaluation7resolve(self.evaluation, self.path, url);
  let path;
  if (_bind$10.$tag === 1) {
    const _ok = _bind$10;
    path = _ok._0;
  } else {
    return _bind$10;
  }
  if (forward) {
    let hide;
    let prefix;
    let show;
    let filters;
    _L: {
      const _bind$11 = _M0FP217zhengxin_2dcoding4scss15forward__policy(tail.val);
      let _bind$12;
      if (_bind$11.$tag === 1) {
        const _ok = _bind$11;
        _bind$12 = _ok._0;
      } else {
        return _bind$11;
      }
      const _prefix = _bind$12._0;
      const _show = _bind$12._1;
      const _hide = _bind$12._2;
      const _filters = _bind$12._3;
      hide = _hide;
      prefix = _prefix;
      show = _show;
      filters = _filters;
      break _L;
    }
    const _bind$11 = [];
    const incoming = _M0MPB3Map3MapGssE(new _M0TPB9ArrayViewGUssEE(_bind$11, 0, 0), undefined);
    const explicit = _M0MPB3Map4copyGsRP217zhengxin_2dcoding4scss9SassValueE(configuration);
    const _it = _M0MPB3Map5iter2GsbE(self.configured);
    while (true) {
      let key;
      _L$2: {
        const _bind$12 = _M0MPB5Iter24nextGsbE(_it);
        if (_bind$12 === undefined) {
          break;
        } else {
          const _Some = _bind$12;
          const _x = _Some;
          const _key = _x._0;
          key = _key;
          break _L$2;
        }
      }
      if (!_M0MPC16string6String11has__prefix(key, new _M0TPC16string10StringView(prefix, 0, prefix.length))) {
        continue;
      }
      const original = _M0MPC16string10StringView9to__owned(_M0MPC16string6String11sub_2einner(key, prefix.length, undefined));
      if (!_M0FP217zhengxin_2dcoding4scss16forward__visible(`$${key}`, show, hide, filters)) {
        continue;
      }
      if (_M0MPB3Map8containsGsRP217zhengxin_2dcoding4scss9SassValueE(configuration, original) && !_M0MPB3Map8containsGsbE(defaults, original)) {
        return new _M0DTPC16result6ResultGuRP217zhengxin_2dcoding4scss10ParseErrorE3Err(new _M0DTPC15error5Error47zhengxin_2dcoding_2fscss_2eParseError_2eInvalid("forward configuration cannot be overridden"));
      }
      let value;
      _L$3: {
        _L$4: {
          const _bind$12 = _M0MPB3Map3getGsRP217zhengxin_2dcoding4scss9SassValueE(self.configuration, key);
          if (_bind$12 === undefined) {
          } else {
            const _Some = _bind$12;
            const _value = _Some;
            value = _value;
            break _L$4;
          }
          break _L$3;
        }
        _M0MPB3Map3setGsRP217zhengxin_2dcoding4scss9SassValueE(configuration, original, value);
        _M0MPB3Map3setGssE(incoming, original, key);
      }
      continue;
    }
    const _bind$12 = _M0MP217zhengxin_2dcoding4scss10Evaluation18load__file_2einner(self.evaluation, path, configuration, false);
    let library;
    if (_bind$12.$tag === 1) {
      const _ok = _bind$12;
      library = _ok._0;
    } else {
      return _bind$12;
    }
    const _it$2 = _M0MPB3Map5iter2GsRPB4JsonE(explicit);
    while (true) {
      let key;
      _L$2: {
        const _bind$13 = _M0MPB5Iter24nextGsRPB4JsonE(_it$2);
        if (_bind$13 === undefined) {
          break;
        } else {
          const _Some = _bind$13;
          const _x = _Some;
          const _key = _x._0;
          key = _key;
          break _L$2;
        }
      }
      if (_M0MPB3Map8containsGsbE(library.configured, key)) {
        return new _M0DTPC16result6ResultGuRP217zhengxin_2dcoding4scss10ParseErrorE3Err(new _M0DTPC15error5Error47zhengxin_2dcoding_2fscss_2eParseError_2eInvalid("forward configured variable was not declared with !default"));
      }
      continue;
    }
    const _it$3 = _M0MPB3Map5iter2GsRPB4JsonE(incoming);
    while (true) {
      let original;
      let key;
      _L$2: {
        const _bind$13 = _M0MPB5Iter24nextGsRPB4JsonE(_it$3);
        if (_bind$13 === undefined) {
          break;
        } else {
          const _Some = _bind$13;
          const _x = _Some;
          const _original = _x._0;
          const _key = _x._1;
          original = _original;
          key = _key;
          break _L$2;
        }
      }
      if (!_M0MPB3Map8containsGsbE(library.configured, original)) {
        _M0MPB3Map6removeGsbE(self.configured, key);
      }
      continue;
    }
    const _bind$13 = _M0MP217zhengxin_2dcoding4scss5Scope16forward__members(self, library, tail.val);
    if (_bind$13.$tag === 1) {
      const _ok = _bind$13;
      _ok._0;
    } else {
      return _bind$13;
    }
    return new _M0DTPC16result6ResultGuRP217zhengxin_2dcoding4scss10ParseErrorE2Ok(undefined);
  }
  const _bind$11 = _M0MP217zhengxin_2dcoding4scss10Evaluation18load__file_2einner(self.evaluation, path, configuration, true);
  let library;
  if (_bind$11.$tag === 1) {
    const _ok = _bind$11;
    library = _ok._0;
  } else {
    return _bind$11;
  }
  const base = _M0MPC16string10StringView9to__owned(_M0MPC16string6String11sub_2einner(path, _M0FP217zhengxin_2dcoding4scss9directory(path).length, path.length - 5 | 0));
  let default_prefix;
  const _bind$12 = "_";
  if (_M0MPC16string6String11has__prefix(base, new _M0TPC16string10StringView(_bind$12, 0, _bind$12.length))) {
    default_prefix = _M0MPC16string10StringView9to__owned(_M0MPC16string6String11sub_2einner(base, 1, undefined));
  } else {
    default_prefix = base;
  }
  let default_prefix$2;
  if (default_prefix === "index") {
    const _bind$13 = "/";
    const parts = _M0MPB4Iter9to__arrayGRPC16string10StringViewE(_M0MPC16string6String5split(url, new _M0TPC16string10StringView(_bind$13, 0, _bind$13.length)));
    const _tmp$4 = _M0MPC15array5Array4lastGsE(parts);
    const _bind$14 = "";
    default_prefix$2 = _M0MPC16string10StringView9to__owned(_M0MPC16option6Option10unwrap__orGRP217zhengxin_2dcoding4scss9SassValueE(_tmp$4, new _M0TPC16string10StringView(_bind$14, 0, _bind$14.length)));
  } else {
    default_prefix$2 = default_prefix;
  }
  let prefix;
  if (_M0MPC16string6String9is__empty(tail.val)) {
    prefix = default_prefix$2;
  } else {
    const _tmp$4 = tail.val;
    const _bind$13 = "as ";
    if (!_M0MPC16string6String11has__prefix(_tmp$4, new _M0TPC16string10StringView(_bind$13, 0, _bind$13.length))) {
      return new _M0DTPC16result6ResultGuRP217zhengxin_2dcoding4scss10ParseErrorE3Err(new _M0DTPC15error5Error47zhengxin_2dcoding_2fscss_2eParseError_2eInvalid("invalid use clause"));
    }
    prefix = _M0MPC16string10StringView9to__owned(_M0MPC16string10StringView4trim(_M0MPC16string6String11sub_2einner(tail.val, 3, undefined), undefined));
  }
  if (prefix === "*") {
    const _it = _M0MPB3Map5iter2GsRPB4JsonE(self.vars);
    while (true) {
      let name;
      _L: {
        const _bind$13 = _M0MPB5Iter24nextGsRPB4JsonE(_it);
        if (_bind$13 === undefined) {
          break;
        } else {
          const _Some = _bind$13;
          const _x = _Some;
          const _name = _x._0;
          name = _name;
          break _L;
        }
      }
      const _bind$13 = _M0MP217zhengxin_2dcoding4scss5Scope16public__variable(library, name);
      if (_bind$13 === undefined) {
      } else {
        return new _M0DTPC16result6ResultGuRP217zhengxin_2dcoding4scss10ParseErrorE3Err(new _M0DTPC15error5Error47zhengxin_2dcoding_2fscss_2eParseError_2eInvalid("global module variable conflicts with existing variable"));
      }
      continue;
    }
    _M0MPC15array5Array4pushGRPC14json10WriteFrameE(self.star_scopes, library);
    return new _M0DTPC16result6ResultGuRP217zhengxin_2dcoding4scss10ParseErrorE2Ok(undefined);
  }
  if (_M0MPC16string6String9is__empty(prefix) || !_M0MPB4Iter3allGcE(_M0MPC15array5Array4iterGcE(_M0MPC16string6String9to__array(prefix)), _M0FP217zhengxin_2dcoding4scss10name__char)) {
    return new _M0DTPC16result6ResultGuRP217zhengxin_2dcoding4scss10ParseErrorE3Err(new _M0DTPC15error5Error47zhengxin_2dcoding_2fscss_2eParseError_2eInvalid("invalid module namespace"));
  }
  if (_M0MPB3Map8containsGsRP217zhengxin_2dcoding4scss5ScopeE(self.module_scopes, prefix) || _M0MPB3Map8containsGssE(self.standard_modules, prefix)) {
    return new _M0DTPC16result6ResultGuRP217zhengxin_2dcoding4scss10ParseErrorE3Err(new _M0DTPC15error5Error47zhengxin_2dcoding_2fscss_2eParseError_2eInvalid("module namespace already used"));
  }
  return new _M0DTPC16result6ResultGuRP217zhengxin_2dcoding4scss10ParseErrorE2Ok(_M0MPB3Map3setGsRP217zhengxin_2dcoding4scss5ScopeE(self.module_scopes, prefix, library));
}
function _M0MP217zhengxin_2dcoding4scss10Evaluation18load__file_2einner(self, path, configuration, strict) {
  let owner;
  _L: {
    _L$2: {
      const _bind$2 = _M0MPC15array5Array4lastGsE(self.loading);
      if (_bind$2 === undefined) {
      } else {
        const _Some = _bind$2;
        const _owner = _Some;
        owner = _owner;
        break _L$2;
      }
      break _L;
    }
    const dependencies = _M0MPB3Map13get__or__initGsRPB5ArrayGsEE(self.dependencies, owner, () => []);
    if (!_M0MPC15array5Array8containsGsE(dependencies, path)) {
      _M0MPC15array5Array4pushGRPC14json10WriteFrameE(dependencies, path);
    }
  }
  if (_M0MPC15array5Array8containsGsE(self.loading, path)) {
    return new _M0DTPC16result6ResultGRP217zhengxin_2dcoding4scss5ScopeRP217zhengxin_2dcoding4scss10ParseErrorE3Err(new _M0DTPC15error5Error47zhengxin_2dcoding_2fscss_2eParseError_2eInvalid(`module load cycle ${path}`));
  }
  let frame;
  _L$2: {
    _L$3: {
      const _bind$2 = _M0MPB3Map3getGsRP217zhengxin_2dcoding4scss5ScopeE(self.loaded, path);
      if (_bind$2 === undefined) {
      } else {
        const _Some = _bind$2;
        const _frame = _Some;
        frame = _frame;
        break _L$3;
      }
      break _L$2;
    }
    if (!_M0MPB3Map9is__emptyGssE(configuration)) {
      return new _M0DTPC16result6ResultGRP217zhengxin_2dcoding4scss5ScopeRP217zhengxin_2dcoding4scss10ParseErrorE3Err(new _M0DTPC15error5Error47zhengxin_2dcoding_2fscss_2eParseError_2eInvalid(`module already loaded; cannot configure ${path}`));
    }
    return new _M0DTPC16result6ResultGRP217zhengxin_2dcoding4scss5ScopeRP217zhengxin_2dcoding4scss10ParseErrorE2Ok(frame);
  }
  if (self.loading.length >= 32) {
    return new _M0DTPC16result6ResultGRP217zhengxin_2dcoding4scss5ScopeRP217zhengxin_2dcoding4scss10ParseErrorE3Err(new _M0DTPC15error5Error47zhengxin_2dcoding_2fscss_2eParseError_2eInvalid("module nesting limit"));
  }
  let source;
  const _bind$2 = _M0MPB3Map3getGssE(self.files, path);
  if (_bind$2 === undefined) {
    return new _M0DTPC16result6ResultGRP217zhengxin_2dcoding4scss5ScopeRP217zhengxin_2dcoding4scss10ParseErrorE3Err(new _M0DTPC15error5Error47zhengxin_2dcoding_2fscss_2eParseError_2eInvalid("entry file not found"));
  } else {
    const _Some = _bind$2;
    const _value = _Some;
    source = _value;
  }
  const _bind$3 = _M0MP217zhengxin_2dcoding4scss6Source10statements(new _M0TP217zhengxin_2dcoding4scss6Source(_M0MPC16string6String9to__array(source), 0), false, 0);
  let nodes;
  if (_bind$3.$tag === 1) {
    const _ok = _bind$3;
    nodes = _ok._0;
  } else {
    return _bind$3;
  }
  const _bind$4 = _M0FP217zhengxin_2dcoding4scss17validate__content(nodes, false);
  if (_bind$4.$tag === 1) {
    const _ok = _bind$4;
    _ok._0;
  } else {
    return _bind$4;
  }
  const _bind$5 = _M0FP217zhengxin_2dcoding4scss19validate__semantics(nodes, true, false, false, false);
  if (_bind$5.$tag === 1) {
    const _ok = _bind$5;
    _ok._0;
  } else {
    return _bind$5;
  }
  const _tmp = _M0MP217zhengxin_2dcoding4scss5Scope3new(undefined);
  const frame$2 = new _M0TP217zhengxin_2dcoding4scss5Scope(_tmp.vars, _tmp.mixins, _tmp.functions, _tmp.standard_modules, _tmp.module_scopes, _tmp.star_scopes, _tmp.forwarded_vars, _tmp.forwarded_mixins, _tmp.forwarded_functions, _tmp.configured, _tmp.configuration, path, self, _tmp.returned, _tmp.flow, _tmp.parent);
  const _it = _M0MPB3Map5iter2GsRPB4JsonE(configuration);
  while (true) {
    let key;
    let value;
    _L$3: {
      const _bind$6 = _M0MPB5Iter24nextGsRPB4JsonE(_it);
      if (_bind$6 === undefined) {
        break;
      } else {
        const _Some = _bind$6;
        const _x = _Some;
        const _key = _x._0;
        const _value = _x._1;
        key = _key;
        value = _value;
        break _L$3;
      }
    }
    _M0MPB3Map3setGsRP217zhengxin_2dcoding4scss9SassValueE(frame$2.configuration, key, value);
    _M0MPB3Map3setGsbE(frame$2.configured, key, true);
    continue;
  }
  _M0MPC15array5Array4pushGRPC14json10WriteFrameE(self.loading, path);
  const _bind$6 = [];
  const _bind$7 = self.extensions;
  const _bind$8 = [];
  const _bind$9 = [];
  const _bind$10 = [];
  const _bind$11 = 0;
  const _bind$12 = 10000;
  const _bind$13 = [];
  const _bind$14 = 0;
  const _bind$15 = [];
  const emitter = new _M0TP217zhengxin_2dcoding4scss7Emitter(_bind$6, _bind$7, path, _bind$8, _bind$9, _bind$10, _bind$11, _bind$12, _bind$14, _bind$13, _bind$15);
  const _bind$16 = _M0FP217zhengxin_2dcoding4scss6render(nodes, [], frame$2, emitter, 0, undefined, false, "");
  if (_bind$16.$tag === 1) {
    const _ok = _bind$16;
    _ok._0;
  } else {
    return _bind$16;
  }
  const _bind$17 = _M0MP217zhengxin_2dcoding4scss7Emitter5flush(emitter);
  if (_bind$17.$tag === 1) {
    const _ok = _bind$17;
    _ok._0;
  } else {
    return _bind$17;
  }
  if (strict && !_M0MPB3Map9is__emptyGsbE(frame$2.configured)) {
    return new _M0DTPC16result6ResultGRP217zhengxin_2dcoding4scss5ScopeRP217zhengxin_2dcoding4scss10ParseErrorE3Err(new _M0DTPC15error5Error47zhengxin_2dcoding_2fscss_2eParseError_2eInvalid("configured variable was not declared with !default"));
  }
  _M0MPC15array5Array3popGRPC14json10WriteFrameE(self.loading);
  _M0MPB3Map3setGsRP217zhengxin_2dcoding4scss5ScopeE(self.loaded, path, frame$2);
  _M0MPC15array5Array4pushGRPC14json10WriteFrameE(self.order, path);
  _M0MPC15array5Array4pushGRPB5ArrayGRP217zhengxin_2dcoding4scss7CssRuleEE(self.css, emitter.output);
  return new _M0DTPC16result6ResultGRP217zhengxin_2dcoding4scss5ScopeRP217zhengxin_2dcoding4scss10ParseErrorE2Ok(frame$2);
}
function _M0MP217zhengxin_2dcoding4scss5Scope13use__standard(self, source) {
  const _bind$2 = self.parent;
  if (_bind$2 === undefined) {
  } else {
    return new _M0DTPC16result6ResultGuRP217zhengxin_2dcoding4scss10ParseErrorE3Err(new _M0DTPC15error5Error47zhengxin_2dcoding_2fscss_2eParseError_2eInvalid("use must be at root"));
  }
  const _bind$3 = " as ";
  const parts = _M0MPB4Iter9to__arrayGRPC16string10StringViewE(_M0MPC16string6String5split(source, new _M0TPC16string10StringView(_bind$3, 0, _bind$3.length)));
  if (parts.length > 2) {
    return new _M0DTPC16result6ResultGuRP217zhengxin_2dcoding4scss10ParseErrorE3Err(new _M0DTPC15error5Error47zhengxin_2dcoding_2fscss_2eParseError_2eInvalid("invalid module prefix_name"));
  }
  const _bind$4 = _M0MP217zhengxin_2dcoding4scss5Scope16evaluate_2einner(self, _M0MPC16string10StringView9to__owned(_M0MPC15array5Array2atGRPB4JsonE(parts, 0)), true);
  let _tmp;
  if (_bind$4.$tag === 1) {
    const _ok = _bind$4;
    _tmp = _ok._0;
  } else {
    return _bind$4;
  }
  const _bind$5 = _M0FP217zhengxin_2dcoding4scss13require__text(_tmp);
  let _tmp$2;
  if (_bind$5.$tag === 1) {
    const _ok = _bind$5;
    _tmp$2 = _ok._0;
  } else {
    return _bind$5;
  }
  const path = _tmp$2._0;
  const _bind$6 = "sass:";
  if (!_M0MPC16string6String11has__prefix(path, new _M0TPC16string10StringView(_bind$6, 0, _bind$6.length))) {
    return new _M0DTPC16result6ResultGuRP217zhengxin_2dcoding4scss10ParseErrorE3Err(new _M0DTPC15error5Error47zhengxin_2dcoding_2fscss_2eParseError_2eInvalid("file module resolver required"));
  }
  const name = _M0MPC16string10StringView9to__owned(_M0MPC16string6String11sub_2einner(path, 5, undefined));
  if (!_M0MPC15array5Array8containsGsE(["math", "list", "map", "string", "meta", "color"], name)) {
    return new _M0DTPC16result6ResultGuRP217zhengxin_2dcoding4scss10ParseErrorE3Err(new _M0DTPC15error5Error47zhengxin_2dcoding_2fscss_2eParseError_2eInvalid("unsupported standard module"));
  }
  const prefix_name = parts.length === 2 ? _M0MPC16string10StringView9to__owned(_M0MPC16string10StringView4trim(_M0MPC15array5Array2atGRPB4JsonE(parts, 1), undefined)) : name;
  if (prefix_name === "*" || (_M0MPC16string6String9is__empty(prefix_name) || !_M0MPB4Iter3allGcE(_M0MPC15array5Array4iterGcE(_M0MPC16string6String9to__array(prefix_name)), _M0FP217zhengxin_2dcoding4scss10name__char))) {
    return new _M0DTPC16result6ResultGuRP217zhengxin_2dcoding4scss10ParseErrorE3Err(new _M0DTPC15error5Error47zhengxin_2dcoding_2fscss_2eParseError_2eInvalid("invalid standard module prefix_name"));
  }
  if (_M0MPB3Map8containsGssE(self.standard_modules, prefix_name) || _M0MPB3Map8containsGsRP217zhengxin_2dcoding4scss5ScopeE(self.module_scopes, prefix_name)) {
    return new _M0DTPC16result6ResultGuRP217zhengxin_2dcoding4scss10ParseErrorE3Err(new _M0DTPC15error5Error47zhengxin_2dcoding_2fscss_2eParseError_2eInvalid("module namespace already used"));
  }
  return new _M0DTPC16result6ResultGuRP217zhengxin_2dcoding4scss10ParseErrorE2Ok(_M0MPB3Map3setGssE(self.standard_modules, prefix_name, name));
}
function _M0FP217zhengxin_2dcoding4scss15unify__compound(left, right) {
  const out = [];
  const type_name = new _M0TPB8MutLocalGOsE(undefined);
  const id = new _M0TPB8MutLocalGOsE(undefined);
  const pseudo_element = new _M0TPB8MutLocalGOsE(undefined);
  const _self = [];
  _M0MPC15array5Array10push__iterGsE(_self, _M0MPC15array5Array4iterGsE(left));
  _M0MPC15array5Array10push__iterGsE(_self, _M0MPC15array5Array4iterGsE(right));
  const _bind$2 = _self;
  const _bind$3 = _bind$2.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind$3) {
      const value = _bind$2[_];
      _L: {
        if (value === "*") {
          break _L;
        }
        const _bind$4 = "#";
        if (_M0MPC16string6String11has__prefix(value, new _M0TPC16string10StringView(_bind$4, 0, _bind$4.length))) {
          let old;
          _L$2: {
            _L$3: {
              const _bind$5 = id.val;
              if (_bind$5 === undefined) {
              } else {
                const _Some = _bind$5;
                const _old = _Some;
                old = _old;
                break _L$3;
              }
              break _L$2;
            }
            if (_M0IP016_24default__implPB2Eq10not__equalGsE(old, value)) {
              return _M0DTPC16option6OptionGRPB5ArrayGsEE4None__;
            }
          }
          id.val = value;
        } else {
          const _bind$5 = "::";
          if (_M0MPC16string6String11has__prefix(value, new _M0TPC16string10StringView(_bind$5, 0, _bind$5.length))) {
            let old;
            _L$2: {
              _L$3: {
                const _bind$6 = pseudo_element.val;
                if (_bind$6 === undefined) {
                } else {
                  const _Some = _bind$6;
                  const _old = _Some;
                  old = _old;
                  break _L$3;
                }
                break _L$2;
              }
              if (_M0IP016_24default__implPB2Eq10not__equalGsE(old, value)) {
                return _M0DTPC16option6OptionGRPB5ArrayGsEE4None__;
              }
            }
            pseudo_element.val = value;
          } else {
            let _tmp$2;
            const _bind$6 = ".";
            if (!_M0MPC16string6String11has__prefix(value, new _M0TPC16string10StringView(_bind$6, 0, _bind$6.length))) {
              let _tmp$3;
              const _bind$7 = "%";
              if (!_M0MPC16string6String11has__prefix(value, new _M0TPC16string10StringView(_bind$7, 0, _bind$7.length))) {
                let _tmp$4;
                const _bind$8 = ":";
                if (!_M0MPC16string6String11has__prefix(value, new _M0TPC16string10StringView(_bind$8, 0, _bind$8.length))) {
                  const _bind$9 = "[";
                  _tmp$4 = !_M0MPC16string6String11has__prefix(value, new _M0TPC16string10StringView(_bind$9, 0, _bind$9.length));
                } else {
                  _tmp$4 = false;
                }
                _tmp$3 = _tmp$4;
              } else {
                _tmp$3 = false;
              }
              _tmp$2 = _tmp$3;
            } else {
              _tmp$2 = false;
            }
            if (_tmp$2) {
              let old;
              _L$2: {
                _L$3: {
                  const _bind$7 = type_name.val;
                  if (_bind$7 === undefined) {
                  } else {
                    const _Some = _bind$7;
                    const _old = _Some;
                    old = _old;
                    break _L$3;
                  }
                  break _L$2;
                }
                if (_M0IP016_24default__implPB2Eq10not__equalGsE(old, value)) {
                  return _M0DTPC16option6OptionGRPB5ArrayGsEE4None__;
                }
              }
              type_name.val = value;
            }
          }
        }
        if (!_M0MPC15array5Array8containsGsE(out, value)) {
          _M0MPC15array5Array4pushGRPC14json10WriteFrameE(out, value);
        }
        break _L;
      }
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const ordered = [];
  let value;
  _L: {
    _L$2: {
      const _bind$4 = type_name.val;
      if (_bind$4 === undefined) {
      } else {
        const _Some = _bind$4;
        const _value = _Some;
        value = _value;
        break _L$2;
      }
      break _L;
    }
    _M0MPC15array5Array4pushGRPC14json10WriteFrameE(ordered, value);
  }
  const _bind$4 = out.length;
  let _tmp$2 = 0;
  while (true) {
    const _ = _tmp$2;
    if (_ < _bind$4) {
      const value$2 = out[_];
      let _tmp$3;
      if (_M0IP016_24default__implPB2Eq10not__equalGOsE(value$2, type_name.val)) {
        const _bind$5 = ":";
        _tmp$3 = !_M0MPC16string6String11has__prefix(value$2, new _M0TPC16string10StringView(_bind$5, 0, _bind$5.length));
      } else {
        _tmp$3 = false;
      }
      if (_tmp$3) {
        _M0MPC15array5Array4pushGRPC14json10WriteFrameE(ordered, value$2);
      }
      _tmp$2 = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const _bind$5 = out.length;
  let _tmp$3 = 0;
  while (true) {
    const _ = _tmp$3;
    if (_ < _bind$5) {
      const value$2 = out[_];
      const _bind$6 = ":";
      if (_M0MPC16string6String11has__prefix(value$2, new _M0TPC16string10StringView(_bind$6, 0, _bind$6.length))) {
        _M0MPC15array5Array4pushGRPC14json10WriteFrameE(ordered, value$2);
      }
      _tmp$3 = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  if (_M0MPC15array5Array9is__emptyGRPB4JsonE(ordered)) {
    _M0MPC15array5Array4pushGRPC14json10WriteFrameE(ordered, "*");
  }
  return new _M0DTPC16option6OptionGRPB5ArrayGsEE4Some(ordered);
}
function _M0FP217zhengxin_2dcoding4scss16extend__selector(original, target, replacement) {
  const _bind$2 = _M0FP217zhengxin_2dcoding4scss15selector__units(original);
  let units;
  if (_bind$2.$tag === 1) {
    const _ok = _bind$2;
    units = _ok._0;
  } else {
    return _bind$2;
  }
  const _bind$3 = _M0FP217zhengxin_2dcoding4scss15selector__units(replacement);
  let extender;
  if (_bind$3.$tag === 1) {
    const _ok = _bind$3;
    extender = _ok._0;
  } else {
    return _bind$3;
  }
  const compound_start = new _M0TPB8MutLocalGiE(extender.length);
  while (true) {
    if (compound_start.val > 0 && !_M0FP217zhengxin_2dcoding4scss19selector__separator(_M0MPC15array5Array2atGRPB4JsonE(extender, compound_start.val - 1 | 0))) {
      compound_start.val = compound_start.val - 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const lead = _M0MPC15array9ArrayView9to__ownedGsE(_M0MPC15array5Array12view_2einnerGsE(extender, 0, compound_start.val));
  const tail = _M0MPC15array9ArrayView9to__ownedGsE(_M0MPC15array5Array12view_2einnerGsE(extender, compound_start.val, undefined));
  const out = [];
  const matched = new _M0TPB8MutLocalGbE(false);
  const _bind$4 = 0;
  const _bind$5 = units.length;
  let _tmp = _bind$4;
  while (true) {
    const i = _tmp;
    if (i < _bind$5) {
      _L: {
        if (_M0IP016_24default__implPB2Eq10not__equalGsE(_M0MPC15array5Array2atGRPB4JsonE(units, i), target)) {
          break _L;
        }
        matched.val = true;
        const start = new _M0TPB8MutLocalGiE(i);
        const end = new _M0TPB8MutLocalGiE(i + 1 | 0);
        while (true) {
          if (start.val > 0 && !_M0FP217zhengxin_2dcoding4scss19selector__separator(_M0MPC15array5Array2atGRPB4JsonE(units, start.val - 1 | 0))) {
            start.val = start.val - 1 | 0;
            continue;
          } else {
            break;
          }
        }
        while (true) {
          if (end.val < units.length && !_M0FP217zhengxin_2dcoding4scss19selector__separator(_M0MPC15array5Array2atGRPB4JsonE(units, end.val))) {
            end.val = end.val + 1 | 0;
            continue;
          } else {
            break;
          }
        }
        const _self = [];
        _M0MPC15array5Array10push__iterGsE(_self, _M0MPC15array9ArrayView4iterGsE(_M0MPC15array5Array12view_2einnerGsE(units, start.val, i)));
        _M0MPC15array5Array10push__iterGsE(_self, _M0MPC15array9ArrayView4iterGsE(_M0MPC15array5Array12view_2einnerGsE(units, i + 1 | 0, end.val)));
        const rest = _self;
        let compound;
        _L$2: {
          _L$3: {
            const _bind$6 = _M0FP217zhengxin_2dcoding4scss15unify__compound(rest, tail);
            if (_bind$6.$tag === 1) {
              const _Some = _bind$6;
              const _compound = _Some._0;
              compound = _compound;
              break _L$3;
            }
            break _L$2;
          }
          const prefix = _M0MPC15array9ArrayView9to__ownedGsE(_M0MPC15array5Array12view_2einnerGsE(units, 0, start.val));
          const _tmp$2 = _M0MPC15array9ArrayView9to__ownedGsE(_M0MPC15array5Array12view_2einnerGsE(units, end.val, undefined));
          const _bind$6 = "";
          const suffix = _M0MPC15array5Array4joinGsE(_tmp$2, new _M0TPC16string10StringView(_bind$6, 0, _bind$6.length));
          const _bind$7 = "";
          const merged = `${_M0MPC15array5Array4joinGsE(compound, new _M0TPC16string10StringView(_bind$7, 0, _bind$7.length))}${suffix}`;
          if (_M0IPC15array5ArrayPB2Eq5equalGsE(prefix, lead) || _M0MPC15array5Array9is__emptyGRPB4JsonE(lead)) {
            const _bind$8 = "";
            _M0MPC15array5Array4pushGRPC14json10WriteFrameE(out, `${_M0MPC15array5Array4joinGsE(prefix, new _M0TPC16string10StringView(_bind$8, 0, _bind$8.length))}${merged}`);
          } else {
            if (_M0MPC15array5Array9is__emptyGRPB4JsonE(prefix)) {
              const _bind$8 = "";
              _M0MPC15array5Array4pushGRPC14json10WriteFrameE(out, `${_M0MPC15array5Array4joinGsE(lead, new _M0TPC16string10StringView(_bind$8, 0, _bind$8.length))}${merged}`);
            } else {
              if (_M0MPC15array5Array3anyGsE(lead, (s) => _M0IP016_24default__implPB2Eq10not__equalGsE(s, " ") && _M0FP217zhengxin_2dcoding4scss19selector__separator(s))) {
                return new _M0DTPC16result6ResultGUbRPB5ArrayGsEERP217zhengxin_2dcoding4scss10ParseErrorE3Err(new _M0DTPC15error5Error47zhengxin_2dcoding_2fscss_2eParseError_2eInvalid("complex extender combinators are not supported"));
              }
              const _bind$8 = "";
              const _tmp$3 = _M0MPC15array5Array4joinGsE(prefix, new _M0TPC16string10StringView(_bind$8, 0, _bind$8.length));
              const _bind$9 = "";
              _M0MPC15array5Array4pushGRPC14json10WriteFrameE(out, `${_tmp$3}${_M0MPC15array5Array4joinGsE(lead, new _M0TPC16string10StringView(_bind$9, 0, _bind$9.length))}${merged}`);
              const _bind$10 = "";
              const _tmp$4 = _M0MPC15array5Array4joinGsE(lead, new _M0TPC16string10StringView(_bind$10, 0, _bind$10.length));
              const _bind$11 = "";
              _M0MPC15array5Array4pushGRPC14json10WriteFrameE(out, `${_tmp$4}${_M0MPC15array5Array4joinGsE(prefix, new _M0TPC16string10StringView(_bind$11, 0, _bind$11.length))}${merged}`);
            }
          }
        }
        break _L;
      }
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return new _M0DTPC16result6ResultGUbRPB5ArrayGsEERP217zhengxin_2dcoding4scss10ParseErrorE2Ok({ _0: matched.val, _1: out });
}
function _M0FP217zhengxin_2dcoding4scss21selector__placeholder(text) {
  let units;
  let _try_err;
  _L: {
    _L$2: {
      const _bind$2 = _M0FP217zhengxin_2dcoding4scss15selector__units(text);
      if (_bind$2.$tag === 1) {
        const _ok = _bind$2;
        units = _ok._0;
      } else {
        const _err = _bind$2;
        _try_err = _err._0;
        break _L$2;
      }
      break _L;
    }
    return true;
  }
  return _M0MPC15array5Array3anyGsE(units, (s) => {
    const _bind$2 = "%";
    return _M0MPC16string6String11has__prefix(s, new _M0TPC16string10StringView(_bind$2, 0, _bind$2.length));
  });
}
function _M0MP217zhengxin_2dcoding4scss10Evaluation18extension__visible(self, from, target) {
  const pending = [from];
  const _bind$2 = [];
  const seen = _M0MPB3Map3MapGsbE(new _M0TPB9ArrayViewGUsbEE(_bind$2, 0, 0), undefined);
  while (true) {
    let path;
    _L: {
      const _bind$3 = _M0MPC15array5Array3popGRPC14json10WriteFrameE(pending);
      if (_bind$3 === undefined) {
        break;
      } else {
        const _Some = _bind$3;
        const _path = _Some;
        path = _path;
        break _L;
      }
    }
    if (path === target) {
      return true;
    }
    if (!_M0MPB3Map8containsGsbE(seen, path)) {
      _M0MPB3Map3setGsbE(seen, path, true);
      let paths;
      _L$2: {
        _L$3: {
          const _bind$3 = _M0MPB3Map3getGsRPB5ArrayGsEE(self.dependencies, path);
          if (_bind$3.$tag === 1) {
            const _Some = _bind$3;
            const _paths = _Some._0;
            paths = _paths;
            break _L$3;
          }
          break _L$2;
        }
        const _bind$3 = paths.length;
        let _tmp = 0;
        while (true) {
          const _ = _tmp;
          if (_ < _bind$3) {
            const path$2 = paths[_];
            _M0MPC15array5Array4pushGRPC14json10WriteFrameE(pending, path$2);
            _tmp = _ + 1 | 0;
            continue;
          } else {
            break;
          }
        }
      }
    }
    continue;
  }
  return false;
}
function _M0MP217zhengxin_2dcoding4scss10Evaluation11render__css(self) {
  const rules = [];
  const _bind$2 = self.css;
  const _bind$3 = _bind$2.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind$3) {
      const group = _bind$2[_];
      const _bind$4 = group.length;
      let _tmp$2 = 0;
      while (true) {
        const _$2 = _tmp$2;
        if (_$2 < _bind$4) {
          const rule = group[_$2];
          _M0MPC15array5Array4pushGRPC14json10WriteFrameE(rules, rule);
          _tmp$2 = _$2 + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const _bind$4 = rules.length;
  let _tmp$2 = 0;
  while (true) {
    const _ = _tmp$2;
    if (_ < _bind$4) {
      const rule = rules[_];
      const originals = _M0MPC15array5Array4copyGsE(rule.selectors);
      _M0MPC15array5Array5clearGsE(rule.selectors);
      const _bind$5 = originals.length;
      let _tmp$3 = 0;
      while (true) {
        const _$2 = _tmp$3;
        if (_$2 < _bind$5) {
          const source = originals[_$2];
          const expanded = [source];
          const cursor = new _M0TPB8MutLocalGiE(0);
          while (true) {
            if (cursor.val < expanded.length) {
              const original = _M0MPC15array5Array2atGRPB4JsonE(expanded, cursor.val);
              cursor.val = cursor.val + 1 | 0;
              const _bind$6 = self.extensions;
              const _bind$7 = _bind$6.length;
              let _tmp$4 = 0;
              while (true) {
                const _$3 = _tmp$4;
                if (_$3 < _bind$7) {
                  const extension = _bind$6[_$3];
                  _L: {
                    self.remaining = self.remaining - 1 | 0;
                    if (self.remaining < 0) {
                      return new _M0DTPC16result6ResultGsRP217zhengxin_2dcoding4scss10ParseErrorE3Err(new _M0DTPC15error5Error47zhengxin_2dcoding_2fscss_2eParseError_2eInvalid("extension evaluation budget"));
                    }
                    if (!_M0MP217zhengxin_2dcoding4scss10Evaluation18extension__visible(self, extension.path, rule.path)) {
                      break _L;
                    }
                    let _tmp$5;
                    const _tmp$6 = extension.target;
                    const _bind$8 = "%_";
                    if (_M0MPC16string6String11has__prefix(_tmp$6, new _M0TPC16string10StringView(_bind$8, 0, _bind$8.length))) {
                      _tmp$5 = true;
                    } else {
                      const _tmp$7 = extension.target;
                      const _bind$9 = "%-";
                      _tmp$5 = _M0MPC16string6String11has__prefix(_tmp$7, new _M0TPC16string10StringView(_bind$9, 0, _bind$9.length));
                    }
                    if (_tmp$5) {
                      if (_M0IP016_24default__implPB2Eq10not__equalGsE(extension.path, rule.path)) {
                        break _L;
                      }
                    }
                    const _bind$9 = extension.selectors;
                    const _bind$10 = _bind$9.length;
                    let _tmp$7 = 0;
                    while (true) {
                      const _$4 = _tmp$7;
                      if (_$4 < _bind$10) {
                        const selector = _bind$9[_$4];
                        let matched;
                        let added;
                        _L$2: {
                          const _bind$11 = _M0FP217zhengxin_2dcoding4scss16extend__selector(original, extension.target, selector);
                          let _bind$12;
                          if (_bind$11.$tag === 1) {
                            const _ok = _bind$11;
                            _bind$12 = _ok._0;
                          } else {
                            return _bind$11;
                          }
                          const _matched = _bind$12._0;
                          const _added = _bind$12._1;
                          matched = _matched;
                          added = _added;
                          break _L$2;
                        }
                        if (matched) {
                          const media = _M0MPC15array5Array6filterGsE(extension.context, (s) => {
                            const _bind$11 = "@media ";
                            return _M0MPC16string6String11has__prefix(s, new _M0TPC16string10StringView(_bind$11, 0, _bind$11.length));
                          });
                          if (!_M0MPC15array5Array9is__emptyGRPB4JsonE(media) && _M0IP016_24default__implPB2Eq10not__equalGRPB5ArrayGsEE(media, _M0MPC15array5Array6filterGsE(rule.context, (s) => {
                            const _bind$11 = "@media ";
                            return _M0MPC16string6String11has__prefix(s, new _M0TPC16string10StringView(_bind$11, 0, _bind$11.length));
                          }))) {
                            return new _M0DTPC16result6ResultGsRP217zhengxin_2dcoding4scss10ParseErrorE3Err(new _M0DTPC15error5Error47zhengxin_2dcoding_2fscss_2eParseError_2eInvalid("cannot extend across media contexts"));
                          }
                          extension.matched = true;
                          const _bind$11 = added.length;
                          let _tmp$8 = 0;
                          while (true) {
                            const _$5 = _tmp$8;
                            if (_$5 < _bind$11) {
                              const value = added[_$5];
                              if (!_M0MPC15array5Array8containsGsE(expanded, value)) {
                                _M0MPC15array5Array4pushGRPC14json10WriteFrameE(expanded, value);
                                if (expanded.length > 256) {
                                  return new _M0DTPC16result6ResultGsRP217zhengxin_2dcoding4scss10ParseErrorE3Err(new _M0DTPC15error5Error47zhengxin_2dcoding_2fscss_2eParseError_2eInvalid("selector expansion limit"));
                                }
                              }
                              _tmp$8 = _$5 + 1 | 0;
                              continue;
                            } else {
                              break;
                            }
                          }
                        }
                        _tmp$7 = _$4 + 1 | 0;
                        continue;
                      } else {
                        break;
                      }
                    }
                    break _L;
                  }
                  _tmp$4 = _$3 + 1 | 0;
                  continue;
                } else {
                  break;
                }
              }
              continue;
            } else {
              break;
            }
          }
          const _bind$6 = expanded.length;
          let _tmp$4 = 0;
          while (true) {
            const _$3 = _tmp$4;
            if (_$3 < _bind$6) {
              const value = expanded[_$3];
              if (!_M0MPC15array5Array8containsGsE(rule.selectors, value)) {
                _M0MPC15array5Array4pushGRPC14json10WriteFrameE(rule.selectors, value);
              }
              _tmp$4 = _$3 + 1 | 0;
              continue;
            } else {
              break;
            }
          }
          if (rule.selectors.length > 256) {
            return new _M0DTPC16result6ResultGsRP217zhengxin_2dcoding4scss10ParseErrorE3Err(new _M0DTPC15error5Error47zhengxin_2dcoding_2fscss_2eParseError_2eInvalid("selector expansion limit"));
          }
          _tmp$3 = _$2 + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      _tmp$2 = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const _bind$5 = self.extensions;
  const _bind$6 = _bind$5.length;
  let _tmp$3 = 0;
  while (true) {
    const _ = _tmp$3;
    if (_ < _bind$6) {
      const extension = _bind$5[_];
      if (!extension.matched && !extension.optional) {
        return new _M0DTPC16result6ResultGsRP217zhengxin_2dcoding4scss10ParseErrorE3Err(new _M0DTPC15error5Error47zhengxin_2dcoding_2fscss_2eParseError_2eInvalid(`extend target not found ${extension.target}`));
      }
      _tmp$3 = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const out = _M0MPB13StringBuilder21StringBuilder_2einner(0);
  const context = new _M0TPB8MutLocalGRPB5ArrayGsEE([]);
  const length = new _M0TPB8MutLocalGiE(0);
  const write = (text) => {
    length.val = length.val + text.length | 0;
    if (length.val > 1000000) {
      return new _M0DTPC16result6ResultGuRP217zhengxin_2dcoding4scss10ParseErrorE3Err(new _M0DTPC15error5Error47zhengxin_2dcoding_2fscss_2eParseError_2eInvalid("CSS output limit"));
    }
    return new _M0DTPC16result6ResultGuRP217zhengxin_2dcoding4scss10ParseErrorE2Ok(_M0IPB13StringBuilderPB6Logger13write__string(out, text));
  };
  const _bind$7 = rules.length;
  let _tmp$4 = 0;
  while (true) {
    const _ = _tmp$4;
    if (_ < _bind$7) {
      const rule = rules[_];
      _L: {
        if (_M0MPC16string6String9is__empty(rule.declarations)) {
          break _L;
        }
        const selectors = _M0MPC15array5Array6filterGsE(rule.selectors, (s) => !_M0FP217zhengxin_2dcoding4scss21selector__placeholder(s));
        if (!_M0MPC15array5Array9is__emptyGRPB4JsonE(rule.selectors) && _M0MPC15array5Array9is__emptyGRPB4JsonE(selectors)) {
          break _L;
        }
        const shared = new _M0TPB8MutLocalGiE(0);
        while (true) {
          if (shared.val < context.val.length && (shared.val < rule.context.length && _M0MPC15array5Array2atGRPB4JsonE(context.val, shared.val) === _M0MPC15array5Array2atGRPB4JsonE(rule.context, shared.val))) {
            shared.val = shared.val + 1 | 0;
            continue;
          } else {
            break;
          }
        }
        const _bind$8 = shared.val;
        const _bind$9 = context.val.length;
        let _tmp$5 = _bind$8;
        while (true) {
          const _$2 = _tmp$5;
          if (_$2 < _bind$9) {
            const _bind$10 = write("}\n");
            if (_bind$10.$tag === 1) {
              const _ok = _bind$10;
              _ok._0;
            } else {
              return _bind$10;
            }
            _tmp$5 = _$2 + 1 | 0;
            continue;
          } else {
            break;
          }
        }
        const _bind$10 = shared.val;
        const _bind$11 = rule.context.length;
        let _tmp$6 = _bind$10;
        while (true) {
          const i = _tmp$6;
          if (i < _bind$11) {
            const _bind$12 = write(`${_M0MPC15array5Array2atGRPB4JsonE(rule.context, i)} {\n`);
            if (_bind$12.$tag === 1) {
              const _ok = _bind$12;
              _ok._0;
            } else {
              return _bind$12;
            }
            _tmp$6 = i + 1 | 0;
            continue;
          } else {
            break;
          }
        }
        context.val = rule.context;
        if (!_M0MPC15array5Array9is__emptyGRPB4JsonE(selectors)) {
          const _bind$12 = ", ";
          const _bind$13 = write(`${_M0MPC15array5Array4joinGsE(selectors, new _M0TPC16string10StringView(_bind$12, 0, _bind$12.length))} {\n`);
          if (_bind$13.$tag === 1) {
            const _ok = _bind$13;
            _ok._0;
          } else {
            return _bind$13;
          }
        }
        const _bind$12 = write(rule.declarations);
        if (_bind$12.$tag === 1) {
          const _ok = _bind$12;
          _ok._0;
        } else {
          return _bind$12;
        }
        if (!_M0MPC15array5Array9is__emptyGRPB4JsonE(selectors)) {
          const _bind$13 = write("}\n");
          if (_bind$13.$tag === 1) {
            const _ok = _bind$13;
            _ok._0;
          } else {
            return _bind$13;
          }
        }
        break _L;
      }
      _tmp$4 = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const _bind$8 = context.val;
  const _bind$9 = _bind$8.length;
  let _tmp$5 = 0;
  while (true) {
    const _ = _tmp$5;
    if (_ < _bind$9) {
      const _bind$10 = write("}\n");
      if (_bind$10.$tag === 1) {
        const _ok = _bind$10;
        _ok._0;
      } else {
        return _bind$10;
      }
      _tmp$5 = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return new _M0DTPC16result6ResultGsRP217zhengxin_2dcoding4scss10ParseErrorE2Ok(_M0MPB13StringBuilder10to__string(out));
}
function _M0FP217zhengxin_2dcoding4scss14compile__files(entry, files) {
  if (_M0MPB3Map9is__emptyGssE(files) || _M0MPB3Map6lengthGssE(files) > 256) {
    return new _M0DTPC16result6ResultGRP217zhengxin_2dcoding4scss11CompilationRP217zhengxin_2dcoding4scss10ParseErrorE3Err(new _M0DTPC15error5Error47zhengxin_2dcoding_2fscss_2eParseError_2eInvalid("virtual file count limit"));
  }
  const evaluation = _M0MP217zhengxin_2dcoding4scss10Evaluation3new();
  const size = new _M0TPB8MutLocalGiE(0);
  const _it = _M0MPB3Map5iter2GsRPB4JsonE(files);
  while (true) {
    let path;
    let source;
    _L: {
      const _bind$2 = _M0MPB5Iter24nextGsRPB4JsonE(_it);
      if (_bind$2 === undefined) {
        break;
      } else {
        const _Some = _bind$2;
        const _x = _Some;
        const _path = _x._0;
        const _source = _x._1;
        path = _path;
        source = _source;
        break _L;
      }
    }
    const _bind$2 = _M0FP217zhengxin_2dcoding4scss11clean__path(path);
    let path$2;
    if (_bind$2.$tag === 1) {
      const _ok = _bind$2;
      path$2 = _ok._0;
    } else {
      return _bind$2;
    }
    const _bind$3 = ".scss";
    if (!_M0MPC16string6String11has__suffix(path$2, new _M0TPC16string10StringView(_bind$3, 0, _bind$3.length))) {
      return new _M0DTPC16result6ResultGRP217zhengxin_2dcoding4scss11CompilationRP217zhengxin_2dcoding4scss10ParseErrorE3Err(new _M0DTPC15error5Error47zhengxin_2dcoding_2fscss_2eParseError_2eInvalid("virtual sources must use .scss"));
    }
    if (source.length > 100000) {
      return new _M0DTPC16result6ResultGRP217zhengxin_2dcoding4scss11CompilationRP217zhengxin_2dcoding4scss10ParseErrorE3Err(new _M0DTPC15error5Error47zhengxin_2dcoding_2fscss_2eParseError_2eInvalid("source limit"));
    }
    size.val = size.val + source.length | 0;
    if (size.val > 2000000) {
      return new _M0DTPC16result6ResultGRP217zhengxin_2dcoding4scss11CompilationRP217zhengxin_2dcoding4scss10ParseErrorE3Err(new _M0DTPC15error5Error47zhengxin_2dcoding_2fscss_2eParseError_2eInvalid("project source limit"));
    }
    if (_M0MPB3Map8containsGssE(evaluation.files, path$2)) {
      return new _M0DTPC16result6ResultGRP217zhengxin_2dcoding4scss11CompilationRP217zhengxin_2dcoding4scss10ParseErrorE3Err(new _M0DTPC15error5Error47zhengxin_2dcoding_2fscss_2eParseError_2eInvalid("duplicate canonical file path"));
    }
    _M0MPB3Map3setGssE(evaluation.files, path$2, source);
    continue;
  }
  const _bind$2 = _M0FP217zhengxin_2dcoding4scss11clean__path(entry);
  let _tmp;
  if (_bind$2.$tag === 1) {
    const _ok = _bind$2;
    _tmp = _ok._0;
  } else {
    return _bind$2;
  }
  const _tmp$2 = _tmp;
  const _bind$3 = [];
  const _bind$4 = _M0MP217zhengxin_2dcoding4scss10Evaluation18load__file_2einner(evaluation, _tmp$2, _M0MPB3Map3MapGsRP217zhengxin_2dcoding4scss9SassValueE(new _M0TPB9ArrayViewGUsRP217zhengxin_2dcoding4scss9SassValueEE(_bind$3, 0, 0), undefined), true);
  if (_bind$4.$tag === 1) {
    const _ok = _bind$4;
    _ok._0;
  } else {
    return _bind$4;
  }
  const _bind$5 = _M0MP217zhengxin_2dcoding4scss10Evaluation11render__css(evaluation);
  let _tmp$3;
  if (_bind$5.$tag === 1) {
    const _ok = _bind$5;
    _tmp$3 = _ok._0;
  } else {
    return _bind$5;
  }
  return new _M0DTPC16result6ResultGRP217zhengxin_2dcoding4scss11CompilationRP217zhengxin_2dcoding4scss10ParseErrorE2Ok(new _M0TP217zhengxin_2dcoding4scss11Compilation(_tmp$3, evaluation.order, evaluation.diagnostics));
}
function _M0FP217zhengxin_2dcoding4scss7compile(source) {
  const _bind$2 = [{ _0: "input.scss", _1: source }];
  const _bind$3 = _M0FP217zhengxin_2dcoding4scss14compile__files("input.scss", _M0MPB3Map3MapGssE(new _M0TPB9ArrayViewGUssEE(_bind$2, 0, 1), undefined));
  let _tmp;
  if (_bind$3.$tag === 1) {
    const _ok = _bind$3;
    _tmp = _ok._0;
  } else {
    return _bind$3;
  }
  return new _M0DTPC16result6ResultGsRP217zhengxin_2dcoding4scss10ParseErrorE2Ok(_tmp.css);
}
function _M0FP417zhengxin_2dcoding4scss3cmd3web3run(input) {
  let _try_err;
  _L: {
    const _bind$2 = _M0FP217zhengxin_2dcoding4scss7compile(input);
    if (_bind$2.$tag === 1) {
      const _ok = _bind$2;
      return _ok._0;
    } else {
      const _err = _bind$2;
      _try_err = _err._0;
      break _L;
    }
  }
  const e = _try_err;
  return `ERROR: ${_M0IP016_24default__implPB4Show10to__stringGRPC15debug4ReprE(_M0MPC15debug4Repr4ReprGRP217zhengxin_2dcoding4scss10ParseErrorE(e))}`;
}
function _M0FP417zhengxin_2dcoding4scss3cmd3web7project(input) {
  let _try_err;
  _L: {
    const _bind$2 = _M0FPC14json13parse_2einner(new _M0TPC16string10StringView(input, 0, input.length), 1024);
    let value;
    if (_bind$2.$tag === 1) {
      const _ok = _bind$2;
      value = _ok._0;
    } else {
      const _err = _bind$2;
      _try_err = _err._0;
      break _L;
    }
    let entry;
    let files;
    _L$2: {
      _L$3: {
        let entry$2;
        let raw;
        _L$4: {
          if (value.$tag === 6) {
            const _Object = value;
            const _x = _Object._0;
            const _x$2 = _M0MPB3Map3getGsRPB4JsonE(_x, "entry");
            if (_x$2 === undefined) {
              break _L$3;
            } else {
              const _Some = _x$2;
              const _x$3 = _Some;
              if (_x$3.$tag === 4) {
                const _String = _x$3;
                const _entry = _String._0;
                const _x$4 = _M0MPB3Map3getGsRPB4JsonE(_x, "files");
                if (_x$4 === undefined) {
                  break _L$3;
                } else {
                  const _Some$2 = _x$4;
                  const _x$5 = _Some$2;
                  if (_x$5.$tag === 6) {
                    const _Object$2 = _x$5;
                    const _raw = _Object$2._0;
                    entry$2 = _entry;
                    raw = _raw;
                    break _L$4;
                  } else {
                    break _L$3;
                  }
                }
              } else {
                break _L$3;
              }
            }
          } else {
            break _L$3;
          }
        }
        const _bind$3 = [];
        const files$2 = _M0MPB3Map3MapGssE(new _M0TPB9ArrayViewGUssEE(_bind$3, 0, 0), undefined);
        const _it = _M0MPB3Map5iter2GsRPB4JsonE(raw);
        while (true) {
          let name;
          let source;
          _L$5: {
            const _bind$4 = _M0MPB5Iter24nextGsRPB4JsonE(_it);
            if (_bind$4 === undefined) {
              break;
            } else {
              const _Some = _bind$4;
              const _x = _Some;
              const _name = _x._0;
              const _source = _x._1;
              name = _name;
              source = _source;
              break _L$5;
            }
          }
          let text;
          _L$6: {
            if (source.$tag === 4) {
              const _String = source;
              const _text = _String._0;
              text = _text;
              break _L$6;
            } else {
              return "ERROR: file source must be string";
            }
          }
          _M0MPB3Map3setGssE(files$2, name, text);
          continue;
        }
        entry = entry$2;
        files = files$2;
        break _L$2;
      }
      return "ERROR: expected entry and files";
    }
    const _bind$3 = _M0FP217zhengxin_2dcoding4scss14compile__files(entry, files);
    let result;
    if (_bind$3.$tag === 1) {
      const _ok = _bind$3;
      result = _ok._0;
    } else {
      const _err = _bind$3;
      _try_err = _err._0;
      break _L;
    }
    const _bind$4 = [{ _0: "css", _1: _M0MPC14json4Json6string(result.css) }, { _0: "loadedFiles", _1: _M0MPC14json4Json5array(_M0MPC15array5Array3mapGsRPB4JsonE(result.loaded_files, _M0MPC14json4Json6string)) }, { _0: "diagnostics", _1: _M0MPC14json4Json5array(_M0MPC15array5Array3mapGsRPB4JsonE(result.diagnostics, _M0MPC14json4Json6string)) }];
    return _M0MPC14json4Json17stringify_2einner(_M0MPC14json4Json6object(_M0MPB3Map3MapGsRPB4JsonE(new _M0TPB9ArrayViewGUsRPB4JsonEE(_bind$4, 0, 3), undefined)), false, 0, undefined);
  }
  const error = _try_err;
  return `ERROR: ${_M0IP016_24default__implPB4Show10to__stringGRPC15debug4ReprE(_M0MPC15debug4Repr4ReprGRPC15error5ErrorE(error))}`;
}
(() => {
})();
export { _M0FP417zhengxin_2dcoding4scss3cmd3web3run as run, _M0FP417zhengxin_2dcoding4scss3cmd3web7project as project }
//# sourceMappingURL=web.js.map
