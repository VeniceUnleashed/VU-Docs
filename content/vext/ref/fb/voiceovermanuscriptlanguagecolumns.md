---
title: VoiceOverManuscriptLanguageColumns
---

## Summary

### Constructors

|  |
| --- |
| **[VoiceOverManuscriptLanguageColumns](#constructor-0)**() |
| **[VoiceOverManuscriptLanguageColumns](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "language" >}} | [AudioLanguage](/vext/ref/fb/audiolanguage) \| nil |
| {{< prop "textColumn" >}} | string |
| {{< prop "subtitleOffsetColumn" >}} | string |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [VoiceOverManuscriptLanguageColumns](/vext/ref/fb/voiceovermanuscriptlanguagecolumns) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "VoiceOverManuscriptLanguageColumns" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### VoiceOverManuscriptLanguageColumns {#constructor-0}

> **VoiceOverManuscriptLanguageColumns**()

Creates a new [VoiceOverManuscriptLanguageColumns](/vext/ref/fb/voiceovermanuscriptlanguagecolumns) frostbite instance.

### VoiceOverManuscriptLanguageColumns {#constructor-1}

> **VoiceOverManuscriptLanguageColumns**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [VoiceOverManuscriptLanguageColumns](/vext/ref/fb/voiceovermanuscriptlanguagecolumns) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "language" %}}

> **[AudioLanguage](/vext/ref/fb/audiolanguage)** \| **nil**

### {{% prop-heading "textColumn" %}}

> **string**

### {{% prop-heading "subtitleOffsetColumn" %}}

> **string**

## Methods

### Clone {#clone}

> **Clone**(): [VoiceOverManuscriptLanguageColumns](/vext/ref/fb/voiceovermanuscriptlanguagecolumns)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[VoiceOverManuscriptLanguageColumns](/vext/ref/fb/voiceovermanuscriptlanguagecolumns)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [VoiceOverManuscriptLanguageColumns](/vext/ref/fb/voiceovermanuscriptlanguagecolumns) type.

