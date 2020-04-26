---
title: UITextDatabase
---

Inherits from [Asset](/vext/ref/fb/asset)

## Summary

### Constructors

|  |
| --- |
| **[UITextDatabase](#constructor-0)**() |
| **[UITextDatabase](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[UITextDatabase](#constructor-2)**(other: [Asset](/vext/ref/fb/asset)) |
| **[UITextDatabase](#constructor-3)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "language" >}} | [LanguageFormat](/vext/ref/fb/languageformat) |
| {{< prop "binaryChunk" >}} | [Guid](/vext/ref/shared/type/guid) |
| {{< prop "binaryChunkSize" >}} | int |
| {{< prop "histogramChunk" >}} | [Guid](/vext/ref/shared/type/guid) |
| {{< prop "histogramChunkSize" >}} | int |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "UITextDatabase" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### UITextDatabase {#constructor-0}

> **UITextDatabase**()

Creates a new [UITextDatabase](/vext/ref/fb/uitextdatabase) frostbite instance.

### UITextDatabase {#constructor-1}

> **UITextDatabase**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [UITextDatabase](/vext/ref/fb/uitextdatabase) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### UITextDatabase {#constructor-2}

> **UITextDatabase**(other: [Asset](/vext/ref/fb/asset))

Casts an instance of type [Asset](/vext/ref/fb/asset) to [UITextDatabase](/vext/ref/fb/uitextdatabase). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [Asset](/vext/ref/fb/asset) | The instance to cast to [UITextDatabase](/vext/ref/fb/uitextdatabase). |

### UITextDatabase {#constructor-3}

> **UITextDatabase**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [UITextDatabase](/vext/ref/fb/uitextdatabase). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [UITextDatabase](/vext/ref/fb/uitextdatabase). |

## Properties

### {{% prop-heading "language" %}}

> **[LanguageFormat](/vext/ref/fb/languageformat)**

### {{% prop-heading "binaryChunk" %}}

> **[Guid](/vext/ref/shared/type/guid)**

### {{% prop-heading "binaryChunkSize" %}}

> **int**

### {{% prop-heading "histogramChunk" %}}

> **[Guid](/vext/ref/shared/type/guid)**

### {{% prop-heading "histogramChunkSize" %}}

> **int**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [UITextDatabase](/vext/ref/fb/uitextdatabase) type.

