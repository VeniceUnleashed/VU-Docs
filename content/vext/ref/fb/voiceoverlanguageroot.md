---
title: VoiceOverLanguageRoot
---

Inherits from [DataContainer](/vext/ref/shared/type/datacontainer)

## Summary

### Constructors

|  |
| --- |
| **[VoiceOverLanguageRoot](#constructor-0)**() |
| **[VoiceOverLanguageRoot](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[VoiceOverLanguageRoot](#constructor-2)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "language" >}} | [AudioLanguage](/vext/ref/fb/audiolanguage) \| nil |
| {{< prop "path" >}} | string |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "VoiceOverLanguageRoot" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### VoiceOverLanguageRoot {#constructor-0}

> **VoiceOverLanguageRoot**()

Creates a new [VoiceOverLanguageRoot](/vext/ref/fb/voiceoverlanguageroot) frostbite instance.

### VoiceOverLanguageRoot {#constructor-1}

> **VoiceOverLanguageRoot**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [VoiceOverLanguageRoot](/vext/ref/fb/voiceoverlanguageroot) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### VoiceOverLanguageRoot {#constructor-2}

> **VoiceOverLanguageRoot**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [VoiceOverLanguageRoot](/vext/ref/fb/voiceoverlanguageroot). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [VoiceOverLanguageRoot](/vext/ref/fb/voiceoverlanguageroot). |

## Properties

### {{% prop-heading "language" %}}

> **[AudioLanguage](/vext/ref/fb/audiolanguage)** \| **nil**

### {{% prop-heading "path" %}}

> **string**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [VoiceOverLanguageRoot](/vext/ref/fb/voiceoverlanguageroot) type.

