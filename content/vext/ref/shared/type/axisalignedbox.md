---
title: AxisAlignedBox
---

## Summary

### Constructors

|  |
| --- |
| **[AxisAlignedBox](#constructor-0)**() |
| **[AxisAlignedBox](#constructor-1)**(min: [Vec3](/vext/ref/shared/type/vec3), max: [Vec3](/vext/ref/shared/type/vec3)) |
| **[AxisAlignedBox](#constructor-2)**(data: table) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "min" >}} | [Vec3](/vext/ref/shared/type/vec3) |
| {{< prop "max" >}} | [Vec3](/vext/ref/shared/type/vec3) |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [AxisAlignedBox](/vext/ref/shared/type/axisalignedbox) |

### Operators

| Operator | Rhs | Returns |
| -------- | --- | ------- |
| **[==](#op-eq)** | [AxisAlignedBox](/vext/ref/shared/type/axisalignedbox) | bool |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "AxisAlignedBox" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### AxisAlignedBox {#constructor-0}

> **AxisAlignedBox**()

### AxisAlignedBox {#constructor-1}

> **AxisAlignedBox**(min: [Vec3](/vext/ref/shared/type/vec3), max: [Vec3](/vext/ref/shared/type/vec3))

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **min** | [Vec3](/vext/ref/shared/type/vec3) |  |
| **max** | [Vec3](/vext/ref/shared/type/vec3) |  |

### AxisAlignedBox {#constructor-2}

> **AxisAlignedBox**(data: table)

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **data** | table |  |

## Properties

### {{% prop-heading "min" %}}

> **[Vec3](/vext/ref/shared/type/vec3)**

### {{% prop-heading "max" %}}

> **[Vec3](/vext/ref/shared/type/vec3)**

## Methods

### Clone {#clone}

> **Clone**(): [AxisAlignedBox](/vext/ref/shared/type/axisalignedbox)

#### Returns

| Type | Description |
| ---- | ----------- |
| **[AxisAlignedBox](/vext/ref/shared/type/axisalignedbox)** |  |

## Operators

### operator== {#op-eq}

> operator==(rhs: [AxisAlignedBox](/vext/ref/shared/type/axisalignedbox)): bool

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **rhs** | [AxisAlignedBox](/vext/ref/shared/type/axisalignedbox) |  |
#### Returns

| Type | Description |
| ---- | ----------- |
| **bool** |  |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

