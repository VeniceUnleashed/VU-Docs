---
title: QuatTransform
---

## Summary

### Constructors

|  |
| --- |
| **[QuatTransform](#constructor-0)**() |
| **[QuatTransform](#constructor-1)**(rotation: [Quat](/vext/ref/shared/type/quat), transAndScale: [Vec4](/vext/ref/shared/type/vec4)) |
| **[QuatTransform](#constructor-2)**(data: table) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "rotation" >}} | [Quat](/vext/ref/shared/type/quat) |
| {{< prop "transAndScale" >}} | [Vec4](/vext/ref/shared/type/vec4) |

### Methods

| Method | Returns |
| ------ | ------- |
| **[ToLinearTransform](#tolineartransform)**() | [LinearTransform](/vext/ref/shared/type/lineartransform) |
| **[Clone](#clone)**() | [QuatTransform](/vext/ref/shared/type/quattransform) |

### Operators

| Operator | Rhs | Returns |
| -------- | --- | ------- |
| **[==](#op-eq)** | [QuatTransform](/vext/ref/shared/type/quattransform) | bool |

## Constructors

### QuatTransform {#constructor-0}

> **QuatTransform**()

### QuatTransform {#constructor-1}

> **QuatTransform**(rotation: [Quat](/vext/ref/shared/type/quat), transAndScale: [Vec4](/vext/ref/shared/type/vec4))

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **rotation** | [Quat](/vext/ref/shared/type/quat) |  |
| **transAndScale** | [Vec4](/vext/ref/shared/type/vec4) |  |

### QuatTransform {#constructor-2}

> **QuatTransform**(data: table)

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **data** | table |  |

## Properties

### {{% prop-heading "rotation" %}}

> **[Quat](/vext/ref/shared/type/quat)**

### {{% prop-heading "transAndScale" %}}

> **[Vec4](/vext/ref/shared/type/vec4)**

## Methods

### ToLinearTransform {#tolineartransform}

> **ToLinearTransform**(): [LinearTransform](/vext/ref/shared/type/lineartransform)

#### Returns

| Type | Description |
| ---- | ----------- |
| **[LinearTransform](/vext/ref/shared/type/lineartransform)** |  |

### Clone {#clone}

> **Clone**(): [QuatTransform](/vext/ref/shared/type/quattransform)

#### Returns

| Type | Description |
| ---- | ----------- |
| **[QuatTransform](/vext/ref/shared/type/quattransform)** |  |

## Operators

### operator== {#op-eq}

> operator==(rhs: [QuatTransform](/vext/ref/shared/type/quattransform)): bool

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **rhs** | [QuatTransform](/vext/ref/shared/type/quattransform) |  |
#### Returns

| Type | Description |
| ---- | ----------- |
| **bool** |  |

