---
title: Quat
---

## Summary

### Constructors

|  |
| --- |
| **[Quat](#constructor-0)**() |
| **[Quat](#constructor-1)**(x: float, y: float, z: float, w: float) |
| **[Quat](#constructor-2)**(eulerAngles: [Vec3](/vext/ref/shared/type/vec3)) |
| **[Quat](#constructor-3)**(forward: [Vec3](/vext/ref/shared/type/vec3), up: [Vec3](/vext/ref/shared/type/vec3)) |
| **[Quat](#constructor-4)**(data: table) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "x" >}} | float |
| {{< prop "y" >}} | float |
| {{< prop "z" >}} | float |
| {{< prop "w" >}} | float |
| {{< prop "length" true >}} | float |
| {{< prop "lengthSquared" true >}} | float |

### Methods

| Method | Returns |
| ------ | ------- |
| **[ToEuler](#toeuler)**() | [Vec3](/vext/ref/shared/type/vec3) |
| **[Normalize](#normalize)**() | [Quat](/vext/ref/shared/type/quat) |
| **[Dot](#dot)**(other: [Quat](/vext/ref/shared/type/quat)) | float |
| **[Angle](#angle)**(other: [Quat](/vext/ref/shared/type/quat)) | float |
| **[RotateTowards](#rotatetowards)**(to: [Quat](/vext/ref/shared/type/quat), maxDegreesDelta: float) | [Quat](/vext/ref/shared/type/quat) |
| **[Slerp](#slerp)**(to: [Quat](/vext/ref/shared/type/quat), t: float) | [Quat](/vext/ref/shared/type/quat) |
| **[SlerpUnclamped](#slerpunclamped)**(to: [Quat](/vext/ref/shared/type/quat), t: float) | [Quat](/vext/ref/shared/type/quat) |
| **[Clone](#clone)**() | [Quat](/vext/ref/shared/type/quat) |

### Operators

| Operator | Rhs | Returns |
| -------- | --- | ------- |
| **[\*](#op-mult)** | [Quat](/vext/ref/shared/type/quat) | [Quat](/vext/ref/shared/type/quat) |
| **[==](#op-eq)** | [Quat](/vext/ref/shared/type/quat) | bool |

## Constructors

### Quat {#constructor-0}

> **Quat**()

### Quat {#constructor-1}

> **Quat**(x: float, y: float, z: float, w: float)

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **x** | float |  |
| **y** | float |  |
| **z** | float |  |
| **w** | float |  |

### Quat {#constructor-2}

> **Quat**(eulerAngles: [Vec3](/vext/ref/shared/type/vec3))

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **eulerAngles** | [Vec3](/vext/ref/shared/type/vec3) |  |

### Quat {#constructor-3}

> **Quat**(forward: [Vec3](/vext/ref/shared/type/vec3), up: [Vec3](/vext/ref/shared/type/vec3))

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **forward** | [Vec3](/vext/ref/shared/type/vec3) |  |
| **up** | [Vec3](/vext/ref/shared/type/vec3) |  |

### Quat {#constructor-4}

> **Quat**(data: table)

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **data** | table |  |

## Properties

### {{% prop-heading "x" %}}

> **float**

### {{% prop-heading "y" %}}

> **float**

### {{% prop-heading "z" %}}

> **float**

### {{% prop-heading "w" %}}

> **float**

### {{% prop-heading "length" true %}}

> **float**

### {{% prop-heading "lengthSquared" true %}}

> **float**

## Methods

### ToEuler {#toeuler}

> **ToEuler**(): [Vec3](/vext/ref/shared/type/vec3)

#### Returns

| Type | Description |
| ---- | ----------- |
| **[Vec3](/vext/ref/shared/type/vec3)** |  |

### Normalize {#normalize}

> **Normalize**(): [Quat](/vext/ref/shared/type/quat)

#### Returns

| Type | Description |
| ---- | ----------- |
| **[Quat](/vext/ref/shared/type/quat)** |  |

### Dot {#dot}

> **Dot**(other: [Quat](/vext/ref/shared/type/quat)): float

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [Quat](/vext/ref/shared/type/quat) |  |

#### Returns

| Type | Description |
| ---- | ----------- |
| **float** |  |

### Angle {#angle}

> **Angle**(other: [Quat](/vext/ref/shared/type/quat)): float

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [Quat](/vext/ref/shared/type/quat) |  |

#### Returns

| Type | Description |
| ---- | ----------- |
| **float** |  |

### RotateTowards {#rotatetowards}

> **RotateTowards**(to: [Quat](/vext/ref/shared/type/quat), maxDegreesDelta: float): [Quat](/vext/ref/shared/type/quat)

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **to** | [Quat](/vext/ref/shared/type/quat) |  |
| **maxDegreesDelta** | float |  |

#### Returns

| Type | Description |
| ---- | ----------- |
| **[Quat](/vext/ref/shared/type/quat)** |  |

### Slerp {#slerp}

> **Slerp**(to: [Quat](/vext/ref/shared/type/quat), t: float): [Quat](/vext/ref/shared/type/quat)

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **to** | [Quat](/vext/ref/shared/type/quat) |  |
| **t** | float |  |

#### Returns

| Type | Description |
| ---- | ----------- |
| **[Quat](/vext/ref/shared/type/quat)** |  |

### SlerpUnclamped {#slerpunclamped}

> **SlerpUnclamped**(to: [Quat](/vext/ref/shared/type/quat), t: float): [Quat](/vext/ref/shared/type/quat)

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **to** | [Quat](/vext/ref/shared/type/quat) |  |
| **t** | float |  |

#### Returns

| Type | Description |
| ---- | ----------- |
| **[Quat](/vext/ref/shared/type/quat)** |  |

### Clone {#clone}

> **Clone**(): [Quat](/vext/ref/shared/type/quat)

#### Returns

| Type | Description |
| ---- | ----------- |
| **[Quat](/vext/ref/shared/type/quat)** |  |

## Operators

### operator\* {#op-mult}

> operator\*(rhs: [Quat](/vext/ref/shared/type/quat)): [Quat](/vext/ref/shared/type/quat)

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **rhs** | [Quat](/vext/ref/shared/type/quat) |  |
#### Returns

| Type | Description |
| ---- | ----------- |
| **[Quat](/vext/ref/shared/type/quat)** |  |

### operator== {#op-eq}

> operator==(rhs: [Quat](/vext/ref/shared/type/quat)): bool

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **rhs** | [Quat](/vext/ref/shared/type/quat) |  |
#### Returns

| Type | Description |
| ---- | ----------- |
| **bool** |  |

