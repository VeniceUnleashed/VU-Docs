---
title: SoundWaveLocalizationInfo
---

## Summary

### Constructors

|  |
| --- |
| **[SoundWaveLocalizationInfo](#constructor-0)**() |
| **[SoundWaveLocalizationInfo](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "language" >}} | [AudioLanguage](/vext/ref/fb/audiolanguage) \| nil |
| {{< prop "firstVariationIndex" >}} | int |
| {{< prop "variationCount" >}} | int |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [SoundWaveLocalizationInfo](/vext/ref/fb/soundwavelocalizationinfo) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "SoundWaveLocalizationInfo" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### SoundWaveLocalizationInfo {#constructor-0}

> **SoundWaveLocalizationInfo**()

Creates a new [SoundWaveLocalizationInfo](/vext/ref/fb/soundwavelocalizationinfo) frostbite instance.

### SoundWaveLocalizationInfo {#constructor-1}

> **SoundWaveLocalizationInfo**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [SoundWaveLocalizationInfo](/vext/ref/fb/soundwavelocalizationinfo) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "language" %}}

> **[AudioLanguage](/vext/ref/fb/audiolanguage)** \| **nil**

### {{% prop-heading "firstVariationIndex" %}}

> **int**

### {{% prop-heading "variationCount" %}}

> **int**

## Methods

### Clone {#clone}

> **Clone**(): [SoundWaveLocalizationInfo](/vext/ref/fb/soundwavelocalizationinfo)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[SoundWaveLocalizationInfo](/vext/ref/fb/soundwavelocalizationinfo)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [SoundWaveLocalizationInfo](/vext/ref/fb/soundwavelocalizationinfo) type.

