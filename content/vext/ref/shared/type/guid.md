---
title: Guid
---

## Summary

### Constructors

|  |
| --- |
| **[Guid](#constructor-0)**(guid: string, format: string = 'D') |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "a" true >}} | int |
| {{< prop "b" true >}} | int |
| {{< prop "c" true >}} | int |
| {{< prop "d" true >}} | int |
| {{< prop "e" true >}} | int |
| {{< prop "f" true >}} | int |
| {{< prop "g" true >}} | int |
| {{< prop "h" true >}} | int |
| {{< prop "i" true >}} | int |
| {{< prop "j" true >}} | int |
| {{< prop "k" true >}} | int |

### Methods

| Method | Returns |
| ------ | ------- |
| **[ToString](#tostring)**(format: string = 'D') | string |
| **[Clone](#clone)**() | [Guid](/vext/ref/shared/type/guid) |

### Operators

| Operator | Rhs | Returns |
| -------- | --- | ------- |
| **[==](#op-eq)** | [Guid](/vext/ref/shared/type/guid) | bool |

## Constructors

### Guid {#constructor-0}

> **Guid**(guid: string, format: string = 'D')

Parses a GUID string into a [Guid](/vext/ref/shared/type/guid) type. The `format` parameter can be one of the following values and dictates how to parse the string:
  - `D`: GUID with dashes (eg. `68F0A461-A947-40E1-BEC4-992EFDFF3735`)
  - `N`: GUID without dashes (eg. `68F0A461A94740E1BEC4992EFDFF3735`)
  - `B`: GUID with dashes and braces (eg. `{68F0A461-A947-40E1-BEC4-992EFDFF3735}`)
  - `P`: GUID with dashes and parentheses (eg. `(68F0A461-A947-40E1-BEC4-992EFDFF3735)`)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | string |  |
| **format** | string | The format the GUID string is in. |

## Properties

### {{% prop-heading "a" true %}}

> **int**

### {{% prop-heading "b" true %}}

> **int**

### {{% prop-heading "c" true %}}

> **int**

### {{% prop-heading "d" true %}}

> **int**

### {{% prop-heading "e" true %}}

> **int**

### {{% prop-heading "f" true %}}

> **int**

### {{% prop-heading "g" true %}}

> **int**

### {{% prop-heading "h" true %}}

> **int**

### {{% prop-heading "i" true %}}

> **int**

### {{% prop-heading "j" true %}}

> **int**

### {{% prop-heading "k" true %}}

> **int**

## Methods

### ToString {#tostring}

> **ToString**(format: string = 'D'): string

Converts the [Guid](/vext/ref/shared/type/guid) to its string representation. The `format` parameter can be one of the following values:
- `D`: GUID with dashes (eg. `68F0A461-A947-40E1-BEC4-992EFDFF3735`)
- `N`: GUID without dashes (eg. `68F0A461A94740E1BEC4992EFDFF3735`)
- `B`: GUID with dashes and braces (eg. `{68F0A461-A947-40E1-BEC4-992EFDFF3735}`)
- `P`: GUID with dashes and parentheses (eg. `(68F0A461-A947-40E1-BEC4-992EFDFF3735)`)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **format** | string | The way to format the GUID string. |

#### Returns

| Type | Description |
| ---- | ----------- |
| **string** |  |

### Clone {#clone}

> **Clone**(): [Guid](/vext/ref/shared/type/guid)

#### Returns

| Type | Description |
| ---- | ----------- |
| **[Guid](/vext/ref/shared/type/guid)** |  |

## Operators

### operator== {#op-eq}

> operator==(rhs: [Guid](/vext/ref/shared/type/guid)): bool

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **rhs** | [Guid](/vext/ref/shared/type/guid) |  |
#### Returns

| Type | Description |
| ---- | ----------- |
| **bool** |  |

