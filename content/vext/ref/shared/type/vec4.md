---
title: Vec4
---

## Summary

### Constructors

|  |
| --- |
| **[Vec4](#constructor-0)**() |
| **[Vec4](#constructor-1)**(x: float, y: float, z: float, w: float) |
| **[Vec4](#constructor-2)**(data: table) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "x" >}} | float |
| {{< prop "y" >}} | float |
| {{< prop "z" >}} | float |
| {{< prop "w" >}} | float |
| {{< prop "magnitude" true >}} | float |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Distance](#distance)**(to: [Vec4](/vext/ref/shared/type/vec4)) | float |
| **[Clone](#clone)**() | [Vec4](/vext/ref/shared/type/vec4) |

### Operators

| Operator | Rhs | Returns |
| -------- | --- | ------- |
| **[+](#op-add)** | [Vec4](/vext/ref/shared/type/vec4) | [Vec4](/vext/ref/shared/type/vec4) |
| **[-](#op-sub)** | [Vec4](/vext/ref/shared/type/vec4) | [Vec4](/vext/ref/shared/type/vec4) |
| **[\*](#op-mult)** | [Vec4](/vext/ref/shared/type/vec4) | [Vec4](/vext/ref/shared/type/vec4) |
| **[\*](#op-mult-1)** | float | [Vec4](/vext/ref/shared/type/vec4) |
| **[/](#op-div)** | [Vec4](/vext/ref/shared/type/vec4) | [Vec4](/vext/ref/shared/type/vec4) |
| **[/](#op-div-1)** | float | [Vec4](/vext/ref/shared/type/vec4) |
| **[==](#op-eq)** | [Vec4](/vext/ref/shared/type/vec4) | bool |
| **[<](#op-lt)** | [Vec4](/vext/ref/shared/type/vec4) | bool |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "Vec4" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |
| {{< static "Vec4" "negativeInfinity" >}} | [Vec4](/vext/ref/shared/type/vec4) |
| {{< static "Vec4" "one" >}} | [Vec4](/vext/ref/shared/type/vec4) |
| {{< static "Vec4" "positiveInfinity" >}} | [Vec4](/vext/ref/shared/type/vec4) |
| {{< static "Vec4" "zero" >}} | [Vec4](/vext/ref/shared/type/vec4) |

## Constructors

### Vec4 {#constructor-0}

> **Vec4**()

### Vec4 {#constructor-1}

> **Vec4**(x: float, y: float, z: float, w: float)

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **x** | float |  |
| **y** | float |  |
| **z** | float |  |
| **w** | float |  |

### Vec4 {#constructor-2}

> **Vec4**(data: table)

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

### {{% prop-heading "magnitude" true %}}

> **float**

## Methods

### Distance {#distance}

> **Distance**(to: [Vec4](/vext/ref/shared/type/vec4)): float

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **to** | [Vec4](/vext/ref/shared/type/vec4) |  |

#### Returns

| Type | Description |
| ---- | ----------- |
| **float** |  |

### Clone {#clone}

> **Clone**(): [Vec4](/vext/ref/shared/type/vec4)

#### Returns

| Type | Description |
| ---- | ----------- |
| **[Vec4](/vext/ref/shared/type/vec4)** |  |

## Operators

### operator+ {#op-add}

> operator+(rhs: [Vec4](/vext/ref/shared/type/vec4)): [Vec4](/vext/ref/shared/type/vec4)

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **rhs** | [Vec4](/vext/ref/shared/type/vec4) |  |
#### Returns

| Type | Description |
| ---- | ----------- |
| **[Vec4](/vext/ref/shared/type/vec4)** |  |

### operator- {#op-sub}

> operator-(rhs: [Vec4](/vext/ref/shared/type/vec4)): [Vec4](/vext/ref/shared/type/vec4)

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **rhs** | [Vec4](/vext/ref/shared/type/vec4) |  |
#### Returns

| Type | Description |
| ---- | ----------- |
| **[Vec4](/vext/ref/shared/type/vec4)** |  |

### operator\* {#op-mult}

> operator\*(rhs: [Vec4](/vext/ref/shared/type/vec4)): [Vec4](/vext/ref/shared/type/vec4)

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **rhs** | [Vec4](/vext/ref/shared/type/vec4) |  |
#### Returns

| Type | Description |
| ---- | ----------- |
| **[Vec4](/vext/ref/shared/type/vec4)** |  |

### operator\* {#op-mult-1}

> operator\*(rhs: float): [Vec4](/vext/ref/shared/type/vec4)

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **rhs** | float |  |
#### Returns

| Type | Description |
| ---- | ----------- |
| **[Vec4](/vext/ref/shared/type/vec4)** |  |

### operator/ {#op-div}

> operator/(rhs: [Vec4](/vext/ref/shared/type/vec4)): [Vec4](/vext/ref/shared/type/vec4)

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **rhs** | [Vec4](/vext/ref/shared/type/vec4) |  |
#### Returns

| Type | Description |
| ---- | ----------- |
| **[Vec4](/vext/ref/shared/type/vec4)** |  |

### operator/ {#op-div-1}

> operator/(rhs: float): [Vec4](/vext/ref/shared/type/vec4)

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **rhs** | float |  |
#### Returns

| Type | Description |
| ---- | ----------- |
| **[Vec4](/vext/ref/shared/type/vec4)** |  |

### operator== {#op-eq}

> operator==(rhs: [Vec4](/vext/ref/shared/type/vec4)): bool

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **rhs** | [Vec4](/vext/ref/shared/type/vec4) |  |
#### Returns

| Type | Description |
| ---- | ----------- |
| **bool** |  |

### operator< {#op-lt}

> operator<(rhs: [Vec4](/vext/ref/shared/type/vec4)): bool

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **rhs** | [Vec4](/vext/ref/shared/type/vec4) |  |
#### Returns

| Type | Description |
| ---- | ----------- |
| **bool** |  |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

### {{% static-heading "negativeInfinity" %}}

> **[Vec4](/vext/ref/shared/type/vec4)**

### {{% static-heading "one" %}}

> **[Vec4](/vext/ref/shared/type/vec4)**

### {{% static-heading "positiveInfinity" %}}

> **[Vec4](/vext/ref/shared/type/vec4)**

### {{% static-heading "zero" %}}

> **[Vec4](/vext/ref/shared/type/vec4)**

