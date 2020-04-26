---
title: VoiceOverPronunciation
---

Inherits from [DataContainer](/vext/ref/shared/type/datacontainer)

## Summary

### Constructors

|  |
| --- |
| **[VoiceOverPronunciation](#constructor-0)**() |
| **[VoiceOverPronunciation](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[VoiceOverPronunciation](#constructor-2)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "name" >}} | string |
| {{< prop "primaryLanguage" >}} | [AudioLanguage](/vext/ref/fb/audiolanguage) \| nil |
| {{< prop "secondaryLanguage" >}} | [AudioLanguage](/vext/ref/fb/audiolanguage) \| nil |
| {{< prop "secondaryFallback" >}} | [VoiceOverPronunciationFallback](/vext/ref/fb/voiceoverpronunciationfallback) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "VoiceOverPronunciation" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### VoiceOverPronunciation {#constructor-0}

> **VoiceOverPronunciation**()

Creates a new [VoiceOverPronunciation](/vext/ref/fb/voiceoverpronunciation) frostbite instance.

### VoiceOverPronunciation {#constructor-1}

> **VoiceOverPronunciation**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [VoiceOverPronunciation](/vext/ref/fb/voiceoverpronunciation) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### VoiceOverPronunciation {#constructor-2}

> **VoiceOverPronunciation**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [VoiceOverPronunciation](/vext/ref/fb/voiceoverpronunciation). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [VoiceOverPronunciation](/vext/ref/fb/voiceoverpronunciation). |

## Properties

### {{% prop-heading "name" %}}

> **string**

### {{% prop-heading "primaryLanguage" %}}

> **[AudioLanguage](/vext/ref/fb/audiolanguage)** \| **nil**

### {{% prop-heading "secondaryLanguage" %}}

> **[AudioLanguage](/vext/ref/fb/audiolanguage)** \| **nil**

### {{% prop-heading "secondaryFallback" %}}

> **[VoiceOverPronunciationFallback](/vext/ref/fb/voiceoverpronunciationfallback)**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [VoiceOverPronunciation](/vext/ref/fb/voiceoverpronunciation) type.

