---
title: AudioLanguagesDependancyObject
---

Inherits from [DataContainer](/vext/ref/shared/type/datacontainer)

## Summary

### Constructors

|  |
| --- |
| **[AudioLanguagesDependancyObject](#constructor-0)**() |
| **[AudioLanguagesDependancyObject](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[AudioLanguagesDependancyObject](#constructor-2)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "audioLanguages" >}} | [AudioLanguage](/vext/ref/fb/audiolanguage)[] |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "AudioLanguagesDependancyObject" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### AudioLanguagesDependancyObject {#constructor-0}

> **AudioLanguagesDependancyObject**()

Creates a new [AudioLanguagesDependancyObject](/vext/ref/fb/audiolanguagesdependancyobject) frostbite instance.

### AudioLanguagesDependancyObject {#constructor-1}

> **AudioLanguagesDependancyObject**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [AudioLanguagesDependancyObject](/vext/ref/fb/audiolanguagesdependancyobject) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### AudioLanguagesDependancyObject {#constructor-2}

> **AudioLanguagesDependancyObject**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [AudioLanguagesDependancyObject](/vext/ref/fb/audiolanguagesdependancyobject). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [AudioLanguagesDependancyObject](/vext/ref/fb/audiolanguagesdependancyobject). |

## Properties

### {{% prop-heading "audioLanguages" %}}

> **[AudioLanguage](/vext/ref/fb/audiolanguage)**[]

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [AudioLanguagesDependancyObject](/vext/ref/fb/audiolanguagesdependancyobject) type.

