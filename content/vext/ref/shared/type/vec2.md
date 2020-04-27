---
title: Vec2
---

## Summary

### Constructors

|  |
| --- |
| **[Vec2](#constructor-0)**() |
| **[Vec2](#constructor-1)**(x: float, y: float) |
| **[Vec2](#constructor-2)**(data: table) |

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
| **[Distance](#distance)**(to: [Vec2](/vext/ref/shared/type/vec2)) | float |
| **[Clone](#clone)**() | [Vec2](/vext/ref/shared/type/vec2) |

### Operators

| Operator | Rhs | Returns |
| -------- | --- | ------- |
| **[+](#op-add)** | [Vec2](/vext/ref/shared/type/vec2) | [Vec2](/vext/ref/shared/type/vec2) |
| **[-](#op-sub)** | [Vec2](/vext/ref/shared/type/vec2) | [Vec2](/vext/ref/shared/type/vec2) |
| **[\*](#op-mult)** | [Vec2](/vext/ref/shared/type/vec2) | [Vec2](/vext/ref/shared/type/vec2) |
| **[\*](#op-mult-1)** | float | [Vec2](/vext/ref/shared/type/vec2) |
| **[/](#op-div)** | [Vec2](/vext/ref/shared/type/vec2) | [Vec2](/vext/ref/shared/type/vec2) |
| **[/](#op-div-1)** | float | [Vec2](/vext/ref/shared/type/vec2) |
| **[==](#op-eq)** | [Vec2](/vext/ref/shared/type/vec2) | bool |
| **[<](#op-lt)** | [Vec2](/vext/ref/shared/type/vec2) | bool |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "Vec2" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |
| {{< static "Vec2" "down" >}} | [Vec2](/vext/ref/shared/type/vec2) |
| {{< static "Vec2" "left" >}} | [Vec2](/vext/ref/shared/type/vec2) |
| {{< static "Vec2" "negativeInfinity" >}} | [Vec2](/vext/ref/shared/type/vec2) |
| {{< static "Vec2" "one" >}} | [Vec2](/vext/ref/shared/type/vec2) |
| {{< static "Vec2" "positiveInfinity" >}} | [Vec2](/vext/ref/shared/type/vec2) |
| {{< static "Vec2" "right" >}} | [Vec2](/vext/ref/shared/type/vec2) |
| {{< static "Vec2" "up" >}} | [Vec2](/vext/ref/shared/type/vec2) |
| {{< static "Vec2" "zero" >}} | [Vec2](/vext/ref/shared/type/vec2) |

## Constructors

### Vec2 {#constructor-0}

> **Vec2**()

### Vec2 {#constructor-1}

> **Vec2**(x: float, y: float)

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **x** | float |  |
| **y** | float |  |

### Vec2 {#constructor-2}

> **Vec2**(data: table)

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

### Distance {#distance}

> **Distance**(to: [Vec2](/vext/ref/shared/type/vec2)): float

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **to** | [Vec2](/vext/ref/shared/type/vec2) |  |

#### Returns

| Type | Description |
| ---- | ----------- |
| **float** |  |

### Clone {#clone}

> **Clone**(): [Vec2](/vext/ref/shared/type/vec2)

#### Returns

| Type | Description |
| ---- | ----------- |
| **[Vec2](/vext/ref/shared/type/vec2)** |  |

## Operators

### operator+ {#op-add}

> operator+(rhs: [Vec2](/vext/ref/shared/type/vec2)): [Vec2](/vext/ref/shared/type/vec2)

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **rhs** | [Vec2](/vext/ref/shared/type/vec2) |  |
#### Returns

| Type | Description |
| ---- | ----------- |
| **[Vec2](/vext/ref/shared/type/vec2)** |  |

### operator- {#op-sub}

> operator-(rhs: [Vec2](/vext/ref/shared/type/vec2)): [Vec2](/vext/ref/shared/type/vec2)

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **rhs** | [Vec2](/vext/ref/shared/type/vec2) |  |
#### Returns

| Type | Description |
| ---- | ----------- |
| **[Vec2](/vext/ref/shared/type/vec2)** |  |

### operator\* {#op-mult}

> operator\*(rhs: [Vec2](/vext/ref/shared/type/vec2)): [Vec2](/vext/ref/shared/type/vec2)

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **rhs** | [Vec2](/vext/ref/shared/type/vec2) |  |
#### Returns

| Type | Description |
| ---- | ----------- |
| **[Vec2](/vext/ref/shared/type/vec2)** |  |

### operator\* {#op-mult-1}

> operator\*(rhs: float): [Vec2](/vext/ref/shared/type/vec2)

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **rhs** | float |  |
#### Returns

| Type | Description |
| ---- | ----------- |
| **[Vec2](/vext/ref/shared/type/vec2)** |  |

### operator/ {#op-div}

> operator/(rhs: [Vec2](/vext/ref/shared/type/vec2)): [Vec2](/vext/ref/shared/type/vec2)

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **rhs** | [Vec2](/vext/ref/shared/type/vec2) |  |
#### Returns

| Type | Description |
| ---- | ----------- |
| **[Vec2](/vext/ref/shared/type/vec2)** |  |

### operator/ {#op-div-1}

> operator/(rhs: float): [Vec2](/vext/ref/shared/type/vec2)

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **rhs** | float |  |
#### Returns

| Type | Description |
| ---- | ----------- |
| **[Vec2](/vext/ref/shared/type/vec2)** |  |

### operator== {#op-eq}

> operator==(rhs: [Vec2](/vext/ref/shared/type/vec2)): bool

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **rhs** | [Vec2](/vext/ref/shared/type/vec2) |  |
#### Returns

| Type | Description |
| ---- | ----------- |
| **bool** |  |

### operator< {#op-lt}

> operator<(rhs: [Vec2](/vext/ref/shared/type/vec2)): bool

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **rhs** | [Vec2](/vext/ref/shared/type/vec2) |  |
#### Returns

| Type | Description |
| ---- | ----------- |
| **bool** |  |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

### {{% static-heading "down" %}}

> **[Vec2](/vext/ref/shared/type/vec2)**

### {{% static-heading "left" %}}

> **[Vec2](/vext/ref/shared/type/vec2)**

### {{% static-heading "negativeInfinity" %}}

> **[Vec2](/vext/ref/shared/type/vec2)**

### {{% static-heading "one" %}}

> **[Vec2](/vext/ref/shared/type/vec2)**

### {{% static-heading "positiveInfinity" %}}

> **[Vec2](/vext/ref/shared/type/vec2)**

### {{% static-heading "right" %}}

> **[Vec2](/vext/ref/shared/type/vec2)**

### {{% static-heading "up" %}}

> **[Vec2](/vext/ref/shared/type/vec2)**

### {{% static-heading "zero" %}}

> **[Vec2](/vext/ref/shared/type/vec2)**

