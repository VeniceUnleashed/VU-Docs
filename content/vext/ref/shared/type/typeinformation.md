---
title: TypeInformation
---

## Summary

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "name" true >}} | string |
| {{< prop "super" true >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) \| nil |
| {{< prop "elementType" true >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) \| nil |
| {{< prop "fields" true >}} | [FieldInformation](/vext/ref/shared/type/fieldinformation)[] |
| {{< prop "array" true >}} | bool |
| {{< prop "enum" true >}} | bool |

### Operators

| Operator | Rhs | Returns |
| -------- | --- | ------- |
| **[==](#op-eq)** | [TypeInformation](/vext/ref/shared/type/typeinformation) | bool |

## Properties

### {{% prop-heading "name" true %}}

> **string**

### {{% prop-heading "super" true %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)** \| **nil**

### {{% prop-heading "elementType" true %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)** \| **nil**

### {{% prop-heading "fields" true %}}

> **[FieldInformation](/vext/ref/shared/type/fieldinformation)**[]

### {{% prop-heading "array" true %}}

> **bool**

### {{% prop-heading "enum" true %}}

> **bool**

## Operators

### operator== {#op-eq}

> operator==(rhs: [TypeInformation](/vext/ref/shared/type/typeinformation)): bool

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **rhs** | [TypeInformation](/vext/ref/shared/type/typeinformation) |  |
#### Returns

| Type | Description |
| ---- | ----------- |
| **bool** |  |

