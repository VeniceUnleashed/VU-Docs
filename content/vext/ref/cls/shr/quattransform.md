---
title: QuatTransform (Shared Class)
---
## Description

## Constructors

| Constructor                                                                                                                                              | Description                                              |
| -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------- |
| [QuatTransform](/vext/ref/cls/shr/quattransform)()                                                                                                    |                                                          |
| [QuatTransform](/vext/ref/cls/shr/quattransform)([QuatTransform](/vext/ref/cls/shr/quattransform) **ref**)                                         | Create a reference copy of an instance of the same type. |
| [QuatTransform](/vext/ref/cls/shr/quattransform)([Quat](/vext/ref/cls/shr/quat) **rotation**, [Vec4](/vext/ref/cls/shr/vec4) **transAndScale**) |                                                          |

## Properties

| Name          | Type                              | Writable | Description |
| ------------- | --------------------------------- | -------- | ----------- |
| rotation      | [Quat](/vext/ref/cls/shr/quat) |          |             |
| transAndScale | [Vec4](/vext/ref/cls/shr/vec4) |          |             |

## Operators

| Operator | Parameters                                                    |
| -------- | ------------------------------------------------------------- |
| \==      | [QuatTransform](/vext/ref/cls/shr/quattransform) **other** |
| string   |                                                               |

## Methods

| Type                                                    | Name                                    | Parameters |
| ------------------------------------------------------- | --------------------------------------- | ---------- |
| [QuatTransform](/vext/ref/cls/shr/quattransform)     | [Clone](#clone)                         |            |
| [LinearTransform](/vext/ref/cls/shr/lineartransform) | [ToLinearTransform](#tolineartransform) |            |

### Clone

> [QuatTransform](/vext/ref/cls/shr/quattransform) **Clone**()

### ToLinearTransform

> [LinearTransform](/vext/ref/cls/shr/lineartransform) **ToLinearTransform**()
