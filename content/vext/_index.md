---
title: VeniceEXT
weight: 5
---

As we briefly mentioned in the [Modding overview](/modding/) page, VeniceEXT is VU's scripting system. It's what lets you modify control game behavior, allowing you to create new experiences. If you want to know how to use VeniceEXT to create mods, refer to the [Your first mod](/modding/your-first-mod/) guide and the more in-depth [VeniceEXT guides](/vext/guides/). You can also find a full VeniceEXT API reference [here](/vext/ref/).

## Lua engine

VeniceEXT is a Lua-based scripting system using Lua 5.4. That means that (for the most part) it follows everything outlined in the [Lua 5.4 reference manual](https://www.lua.org/manual/5.4/). However, there are some differences which we'll explain here.

### Available libraries

Not all Lua standard libraries are available by default, and some may have some features disabled. More specifically, the following libraries are available:

- `table`
- `string`
- `math`
- `os`
- `coroutine`
- `package`
- `utf8`

The following library methods / properties are **not** available:

- `dofile`
- `load`
- `loadfile`
- `string.dump`
- `package.config`
- `package.cpath`
- `package.loadlib`
- `package.path`
- `package.searchpath`
- `os.execute`
- `os.exit`
- `os.getenv`
- `os.remove`
- `os.rename`
- `os.setlocale`
- `os.tmpname`

It should be noted that while the `package` library is present, the `require` call works differently from standard Lua. For more information refer to the [Splitting your code](/vext/guides/code-splitting/) guide.

### Added functionality

VeniceEXT also introduces some additional functionality in the form of additional library methods or other built-in functionality. More specifically, the following library methods have been added:

#### `string.starts(a: string, b: string): bool`

Returns `true` if string `a` starts with string `b`. Returns `false` otherwise.

#### `string.ends(a: string, b: string): bool`

Returns `true` if string `a` ends with string `b`. Returns `false` otherwise.

#### `json.encode(value: any): string | (nil, string)`

Returns a JSON encoding of the provided `value`. The following value types are supported:

- `bool`
- `int`
- `float`
- `string`
- `nil`
- [Vec2](/vext/ref/shared/type/vec2/)
- [Vec3](/vext/ref/shared/type/vec3/)
- [Vec4](/vext/ref/shared/type/vec4/)
- [Quat](/vext/ref/shared/type/quat/)
- [LinearTransform](/vext/ref/shared/type/lineartransform/)
- [QuatTransform](/vext/ref/shared/type/quattransform/)
- [AxisAlignedBox](/vext/ref/shared/type/axisalignedbox/)
- [Guid](/vext/ref/shared/type/guid/)
- A `table` of with any of the above types as values (or another `table`)

If the value could not be encoded then this function will return `nil` followed by an error message.

#### `json.decode(value: string): any | (nil, string)`

Decodes a JSON string `value` into a Lua value or table. If decoding fails, this function will return `nil` followed by an error message.