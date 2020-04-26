---
title: AudioLanguageMapping
---

## Summary

### Constructors

|  |
| --- |
| **[AudioLanguageMapping](#constructor-0)**() |
| **[AudioLanguageMapping](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "source" >}} | [AudioLanguage](/vext/ref/fb/audiolanguage) \| nil |
| {{< prop "target" >}} | [AudioLanguage](/vext/ref/fb/audiolanguage) \| nil |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [AudioLanguageMapping](/vext/ref/fb/audiolanguagemapping) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "AudioLanguageMapping" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### AudioLanguageMapping {#constructor-0}

> **AudioLanguageMapping**()

Creates a new [AudioLanguageMapping](/vext/ref/fb/audiolanguagemapping) frostbite instance.

### AudioLanguageMapping {#constructor-1}

> **AudioLanguageMapping**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [AudioLanguageMapping](/vext/ref/fb/audiolanguagemapping) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "source" %}}

> **[AudioLanguage](/vext/ref/fb/audiolanguage)** \| **nil**

### {{% prop-heading "target" %}}

> **[AudioLanguage](/vext/ref/fb/audiolanguage)** \| **nil**

## Methods

### Clone {#clone}

> **Clone**(): [AudioLanguageMapping](/vext/ref/fb/audiolanguagemapping)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[AudioLanguageMapping](/vext/ref/fb/audiolanguagemapping)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [AudioLanguageMapping](/vext/ref/fb/audiolanguagemapping) type.

