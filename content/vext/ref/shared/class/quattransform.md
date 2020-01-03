---
title: QuatTransform
---
## Description

## Constructors

| Constructor                                                                                                                                              | Description                                              |
| -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------- |
| [QuatTransform](/vext/ref/shared/class/quattransform)()                                                                                                    |                                                          |
| [QuatTransform](/vext/ref/shared/class/quattransform)([QuatTransform](/vext/ref/shared/class/quattransform) **ref**)                                         | Create a reference copy of an instance of the same type. |
| [QuatTransform](/vext/ref/shared/class/quattransform)([Quat](/vext/ref/shared/class/quat) **rotation**, [Vec4](/vext/ref/shared/class/vec4) **transAndScale**) |                                                          |

## Properties

| Name          | Type                              | Writable | Description |
| ------------- | --------------------------------- | -------- | ----------- |
| rotation      | [Quat](/vext/ref/shared/class/quat) |          |             |
| transAndScale | [Vec4](/vext/ref/shared/class/vec4) |          |             |

## Operators

| Operator | Parameters                                                    |
| -------- | ------------------------------------------------------------- |
| \==      | [QuatTransform](/vext/ref/shared/class/quattransform) **other** |
| string   |                                                               |

## Methods

| Type                                                    | Name                                    | Parameters |
| ------------------------------------------------------- | --------------------------------------- | ---------- |
| [QuatTransform](/vext/ref/shared/class/quattransform)     | [Clone](#clone)                         |            |
| [LinearTransform](/vext/ref/shared/class/lineartransform) | [ToLinearTransform](#tolineartransform) |            |

### Clone

> [QuatTransform](/vext/ref/shared/class/quattransform) **Clone**()

### ToLinearTransform

> [LinearTransform](/vext/ref/shared/class/lineartransform) **ToLinearTransform**()
