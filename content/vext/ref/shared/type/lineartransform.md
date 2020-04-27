---
title: LinearTransform
---

## Summary

### Constructors

|  |
| --- |
| **[LinearTransform](#constructor-0)**() |
| **[LinearTransform](#constructor-1)**(scale: float) |
| **[LinearTransform](#constructor-2)**(left: [Vec3](/vext/ref/shared/type/vec3), up: [Vec3](/vext/ref/shared/type/vec3), forward: [Vec3](/vext/ref/shared/type/vec3), trans: [Vec3](/vext/ref/shared/type/vec3)) |
| **[LinearTransform](#constructor-3)**(data: table) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "left" >}} | [Vec3](/vext/ref/shared/type/vec3) |
| {{< prop "up" >}} | [Vec3](/vext/ref/shared/type/vec3) |
| {{< prop "forward" >}} | [Vec3](/vext/ref/shared/type/vec3) |
| {{< prop "trans" >}} | [Vec3](/vext/ref/shared/type/vec3) |

### Methods

| Method | Returns |
| ------ | ------- |
| **[LookAtTransform](#lookattransform)**(camera: [Vec3](/vext/ref/shared/type/vec3), world: [Vec3](/vext/ref/shared/type/vec3)) | void |
| **[ToQuatTransform](#toquattransform)**(hasScale: bool) | [QuatTransform](/vext/ref/shared/type/quattransform) |
| **[Translate](#translate)**(trans: [Vec3](/vext/ref/shared/type/vec3)) | void |
| **[Inverse](#inverse)**() | [LinearTransform](/vext/ref/shared/type/lineartransform) |
| **[Clone](#clone)**() | [LinearTransform](/vext/ref/shared/type/lineartransform) |

### Operators

| Operator | Rhs | Returns |
| -------- | --- | ------- |
| **[+](#op-add)** | [LinearTransform](/vext/ref/shared/type/lineartransform) | [LinearTransform](/vext/ref/shared/type/lineartransform) |
| **[-](#op-sub)** | [LinearTransform](/vext/ref/shared/type/lineartransform) | [LinearTransform](/vext/ref/shared/type/lineartransform) |
| **[\*](#op-mult)** | [LinearTransform](/vext/ref/shared/type/lineartransform) | [LinearTransform](/vext/ref/shared/type/lineartransform) |
| **[\*](#op-mult-1)** | float | [LinearTransform](/vext/ref/shared/type/lineartransform) |
| **[\*](#op-mult-2)** | [Vec3](/vext/ref/shared/type/vec3) | [Vec3](/vext/ref/shared/type/vec3) |
| **[\*](#op-mult-3)** | [Vec4](/vext/ref/shared/type/vec4) | [Vec3](/vext/ref/shared/type/vec3) |
| **[==](#op-eq)** | [LinearTransform](/vext/ref/shared/type/lineartransform) | bool |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "LinearTransform" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### LinearTransform {#constructor-0}

> **LinearTransform**()

### LinearTransform {#constructor-1}

> **LinearTransform**(scale: float)

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **scale** | float |  |

### LinearTransform {#constructor-2}

> **LinearTransform**(left: [Vec3](/vext/ref/shared/type/vec3), up: [Vec3](/vext/ref/shared/type/vec3), forward: [Vec3](/vext/ref/shared/type/vec3), trans: [Vec3](/vext/ref/shared/type/vec3))

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **left** | [Vec3](/vext/ref/shared/type/vec3) |  |
| **up** | [Vec3](/vext/ref/shared/type/vec3) |  |
| **forward** | [Vec3](/vext/ref/shared/type/vec3) |  |
| **trans** | [Vec3](/vext/ref/shared/type/vec3) |  |

### LinearTransform {#constructor-3}

> **LinearTransform**(data: table)

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **data** | table |  |

## Properties

### {{% prop-heading "left" %}}

> **[Vec3](/vext/ref/shared/type/vec3)**

### {{% prop-heading "up" %}}

> **[Vec3](/vext/ref/shared/type/vec3)**

### {{% prop-heading "forward" %}}

> **[Vec3](/vext/ref/shared/type/vec3)**

### {{% prop-heading "trans" %}}

> **[Vec3](/vext/ref/shared/type/vec3)**

## Methods

### LookAtTransform {#lookattransform}

> **LookAtTransform**(camera: [Vec3](/vext/ref/shared/type/vec3), world: [Vec3](/vext/ref/shared/type/vec3))

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **camera** | [Vec3](/vext/ref/shared/type/vec3) |  |
| **world** | [Vec3](/vext/ref/shared/type/vec3) |  |

### ToQuatTransform {#toquattransform}

> **ToQuatTransform**(hasScale: bool): [QuatTransform](/vext/ref/shared/type/quattransform)

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **hasScale** | bool |  |

#### Returns

| Type | Description |
| ---- | ----------- |
| **[QuatTransform](/vext/ref/shared/type/quattransform)** |  |

### Translate {#translate}

> **Translate**(trans: [Vec3](/vext/ref/shared/type/vec3))

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **trans** | [Vec3](/vext/ref/shared/type/vec3) |  |

### Inverse {#inverse}

> **Inverse**(): [LinearTransform](/vext/ref/shared/type/lineartransform)

#### Returns

| Type | Description |
| ---- | ----------- |
| **[LinearTransform](/vext/ref/shared/type/lineartransform)** |  |

### Clone {#clone}

> **Clone**(): [LinearTransform](/vext/ref/shared/type/lineartransform)

#### Returns

| Type | Description |
| ---- | ----------- |
| **[LinearTransform](/vext/ref/shared/type/lineartransform)** |  |

## Operators

### operator+ {#op-add}

> operator+(rhs: [LinearTransform](/vext/ref/shared/type/lineartransform)): [LinearTransform](/vext/ref/shared/type/lineartransform)

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **rhs** | [LinearTransform](/vext/ref/shared/type/lineartransform) |  |
#### Returns

| Type | Description |
| ---- | ----------- |
| **[LinearTransform](/vext/ref/shared/type/lineartransform)** |  |

### operator- {#op-sub}

> operator-(rhs: [LinearTransform](/vext/ref/shared/type/lineartransform)): [LinearTransform](/vext/ref/shared/type/lineartransform)

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **rhs** | [LinearTransform](/vext/ref/shared/type/lineartransform) |  |
#### Returns

| Type | Description |
| ---- | ----------- |
| **[LinearTransform](/vext/ref/shared/type/lineartransform)** |  |

### operator\* {#op-mult}

> operator\*(rhs: [LinearTransform](/vext/ref/shared/type/lineartransform)): [LinearTransform](/vext/ref/shared/type/lineartransform)

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **rhs** | [LinearTransform](/vext/ref/shared/type/lineartransform) |  |
#### Returns

| Type | Description |
| ---- | ----------- |
| **[LinearTransform](/vext/ref/shared/type/lineartransform)** |  |

### operator\* {#op-mult-1}

> operator\*(rhs: float): [LinearTransform](/vext/ref/shared/type/lineartransform)

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **rhs** | float |  |
#### Returns

| Type | Description |
| ---- | ----------- |
| **[LinearTransform](/vext/ref/shared/type/lineartransform)** |  |

### operator\* {#op-mult-2}

> operator\*(rhs: [Vec3](/vext/ref/shared/type/vec3)): [Vec3](/vext/ref/shared/type/vec3)

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **rhs** | [Vec3](/vext/ref/shared/type/vec3) |  |
#### Returns

| Type | Description |
| ---- | ----------- |
| **[Vec3](/vext/ref/shared/type/vec3)** |  |

### operator\* {#op-mult-3}

> operator\*(rhs: [Vec4](/vext/ref/shared/type/vec4)): [Vec3](/vext/ref/shared/type/vec3)

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **rhs** | [Vec4](/vext/ref/shared/type/vec4) |  |
#### Returns

| Type | Description |
| ---- | ----------- |
| **[Vec3](/vext/ref/shared/type/vec3)** |  |

### operator== {#op-eq}

> operator==(rhs: [LinearTransform](/vext/ref/shared/type/lineartransform)): bool

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **rhs** | [LinearTransform](/vext/ref/shared/type/lineartransform) |  |
#### Returns

| Type | Description |
| ---- | ----------- |
| **bool** |  |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

