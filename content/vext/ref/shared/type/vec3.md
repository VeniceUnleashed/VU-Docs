---
title: Vec3
---

## Summary

### Constructors

|  |
| --- |
| **[Vec3](#constructor-0)**() |
| **[Vec3](#constructor-1)**(x: float, y: float, z: float) |
| **[Vec3](#constructor-2)**(data: table) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "x" >}} | float |
| {{< prop "y" >}} | float |
| {{< prop "z" >}} | float |
| {{< prop "magnitude" true >}} | float |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Dot](#dot)**(with: [Vec3](/vext/ref/shared/type/vec3)) | float |
| **[Cross](#cross)**(with: [Vec3](/vext/ref/shared/type/vec3)) | [Vec3](/vext/ref/shared/type/vec3) |
| **[Normalize](#normalize)**() | [Vec3](/vext/ref/shared/type/vec3) |
| **[Distance](#distance)**(to: [Vec3](/vext/ref/shared/type/vec3)) | float |
| **[MoveTowards](#movetowards)**(to: [Vec3](/vext/ref/shared/type/vec3), maxDistance: float) | [Vec3](/vext/ref/shared/type/vec3) |
| **[Clone](#clone)**() | [Vec3](/vext/ref/shared/type/vec3) |

### Operators

| Operator | Rhs | Returns |
| -------- | --- | ------- |
| **[+](#op-add)** | [Vec3](/vext/ref/shared/type/vec3) | [Vec3](/vext/ref/shared/type/vec3) |
| **[-](#op-sub)** | [Vec3](/vext/ref/shared/type/vec3) | [Vec3](/vext/ref/shared/type/vec3) |
| **[\*](#op-mult)** | [Vec3](/vext/ref/shared/type/vec3) | [Vec3](/vext/ref/shared/type/vec3) |
| **[\*](#op-mult-1)** | float | [Vec3](/vext/ref/shared/type/vec3) |
| **[/](#op-div)** | [Vec3](/vext/ref/shared/type/vec3) | [Vec3](/vext/ref/shared/type/vec3) |
| **[/](#op-div-1)** | float | [Vec3](/vext/ref/shared/type/vec3) |
| **[==](#op-eq)** | [Vec3](/vext/ref/shared/type/vec3) | bool |
| **[<](#op-lt)** | [Vec3](/vext/ref/shared/type/vec3) | bool |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "Vec3" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |
| {{< static "Vec3" "back" >}} | [Vec3](/vext/ref/shared/type/vec3) |
| {{< static "Vec3" "down" >}} | [Vec3](/vext/ref/shared/type/vec3) |
| {{< static "Vec3" "forward" >}} | [Vec3](/vext/ref/shared/type/vec3) |
| {{< static "Vec3" "left" >}} | [Vec3](/vext/ref/shared/type/vec3) |
| {{< static "Vec3" "negativeInfinity" >}} | [Vec3](/vext/ref/shared/type/vec3) |
| {{< static "Vec3" "one" >}} | [Vec3](/vext/ref/shared/type/vec3) |
| {{< static "Vec3" "positiveInfinity" >}} | [Vec3](/vext/ref/shared/type/vec3) |
| {{< static "Vec3" "right" >}} | [Vec3](/vext/ref/shared/type/vec3) |
| {{< static "Vec3" "up" >}} | [Vec3](/vext/ref/shared/type/vec3) |
| {{< static "Vec3" "zero" >}} | [Vec3](/vext/ref/shared/type/vec3) |

## Constructors

### Vec3 {#constructor-0}

> **Vec3**()

### Vec3 {#constructor-1}

> **Vec3**(x: float, y: float, z: float)

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **x** | float |  |
| **y** | float |  |
| **z** | float |  |

### Vec3 {#constructor-2}

> **Vec3**(data: table)

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

### {{% prop-heading "magnitude" true %}}

> **float**

## Methods

### Dot {#dot}

> **Dot**(with: [Vec3](/vext/ref/shared/type/vec3)): float

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **with** | [Vec3](/vext/ref/shared/type/vec3) |  |

#### Returns

| Type | Description |
| ---- | ----------- |
| **float** |  |

### Cross {#cross}

> **Cross**(with: [Vec3](/vext/ref/shared/type/vec3)): [Vec3](/vext/ref/shared/type/vec3)

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **with** | [Vec3](/vext/ref/shared/type/vec3) |  |

#### Returns

| Type | Description |
| ---- | ----------- |
| **[Vec3](/vext/ref/shared/type/vec3)** |  |

### Normalize {#normalize}

> **Normalize**(): [Vec3](/vext/ref/shared/type/vec3)

#### Returns

| Type | Description |
| ---- | ----------- |
| **[Vec3](/vext/ref/shared/type/vec3)** |  |

### Distance {#distance}

> **Distance**(to: [Vec3](/vext/ref/shared/type/vec3)): float

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **to** | [Vec3](/vext/ref/shared/type/vec3) |  |

#### Returns

| Type | Description |
| ---- | ----------- |
| **float** |  |

### MoveTowards {#movetowards}

> **MoveTowards**(to: [Vec3](/vext/ref/shared/type/vec3), maxDistance: float): [Vec3](/vext/ref/shared/type/vec3)

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **to** | [Vec3](/vext/ref/shared/type/vec3) |  |
| **maxDistance** | float |  |

#### Returns

| Type | Description |
| ---- | ----------- |
| **[Vec3](/vext/ref/shared/type/vec3)** |  |

### Clone {#clone}

> **Clone**(): [Vec3](/vext/ref/shared/type/vec3)

#### Returns

| Type | Description |
| ---- | ----------- |
| **[Vec3](/vext/ref/shared/type/vec3)** |  |

## Operators

### operator+ {#op-add}

> operator+(rhs: [Vec3](/vext/ref/shared/type/vec3)): [Vec3](/vext/ref/shared/type/vec3)

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **rhs** | [Vec3](/vext/ref/shared/type/vec3) |  |
#### Returns

| Type | Description |
| ---- | ----------- |
| **[Vec3](/vext/ref/shared/type/vec3)** |  |

### operator- {#op-sub}

> operator-(rhs: [Vec3](/vext/ref/shared/type/vec3)): [Vec3](/vext/ref/shared/type/vec3)

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **rhs** | [Vec3](/vext/ref/shared/type/vec3) |  |
#### Returns

| Type | Description |
| ---- | ----------- |
| **[Vec3](/vext/ref/shared/type/vec3)** |  |

### operator\* {#op-mult}

> operator\*(rhs: [Vec3](/vext/ref/shared/type/vec3)): [Vec3](/vext/ref/shared/type/vec3)

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **rhs** | [Vec3](/vext/ref/shared/type/vec3) |  |
#### Returns

| Type | Description |
| ---- | ----------- |
| **[Vec3](/vext/ref/shared/type/vec3)** |  |

### operator\* {#op-mult-1}

> operator\*(rhs: float): [Vec3](/vext/ref/shared/type/vec3)

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **rhs** | float |  |
#### Returns

| Type | Description |
| ---- | ----------- |
| **[Vec3](/vext/ref/shared/type/vec3)** |  |

### operator/ {#op-div}

> operator/(rhs: [Vec3](/vext/ref/shared/type/vec3)): [Vec3](/vext/ref/shared/type/vec3)

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **rhs** | [Vec3](/vext/ref/shared/type/vec3) |  |
#### Returns

| Type | Description |
| ---- | ----------- |
| **[Vec3](/vext/ref/shared/type/vec3)** |  |

### operator/ {#op-div-1}

> operator/(rhs: float): [Vec3](/vext/ref/shared/type/vec3)

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **rhs** | float |  |
#### Returns

| Type | Description |
| ---- | ----------- |
| **[Vec3](/vext/ref/shared/type/vec3)** |  |

### operator== {#op-eq}

> operator==(rhs: [Vec3](/vext/ref/shared/type/vec3)): bool

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **rhs** | [Vec3](/vext/ref/shared/type/vec3) |  |
#### Returns

| Type | Description |
| ---- | ----------- |
| **bool** |  |

### operator< {#op-lt}

> operator<(rhs: [Vec3](/vext/ref/shared/type/vec3)): bool

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **rhs** | [Vec3](/vext/ref/shared/type/vec3) |  |
#### Returns

| Type | Description |
| ---- | ----------- |
| **bool** |  |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

### {{% static-heading "back" %}}

> **[Vec3](/vext/ref/shared/type/vec3)**

### {{% static-heading "down" %}}

> **[Vec3](/vext/ref/shared/type/vec3)**

### {{% static-heading "forward" %}}

> **[Vec3](/vext/ref/shared/type/vec3)**

### {{% static-heading "left" %}}

> **[Vec3](/vext/ref/shared/type/vec3)**

### {{% static-heading "negativeInfinity" %}}

> **[Vec3](/vext/ref/shared/type/vec3)**

### {{% static-heading "one" %}}

> **[Vec3](/vext/ref/shared/type/vec3)**

### {{% static-heading "positiveInfinity" %}}

> **[Vec3](/vext/ref/shared/type/vec3)**

### {{% static-heading "right" %}}

> **[Vec3](/vext/ref/shared/type/vec3)**

### {{% static-heading "up" %}}

> **[Vec3](/vext/ref/shared/type/vec3)**

### {{% static-heading "zero" %}}

> **[Vec3](/vext/ref/shared/type/vec3)**

