---
title: VoiceOverDialogTake
---

## Summary

### Constructors

|  |
| --- |
| **[VoiceOverDialogTake](#constructor-0)**() |
| **[VoiceOverDialogTake](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "wave" >}} | [SoundWaveAsset](/vext/ref/fb/soundwaveasset) \| nil |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [VoiceOverDialogTake](/vext/ref/fb/voiceoverdialogtake) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "VoiceOverDialogTake" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### VoiceOverDialogTake {#constructor-0}

> **VoiceOverDialogTake**()

Creates a new [VoiceOverDialogTake](/vext/ref/fb/voiceoverdialogtake) frostbite instance.

### VoiceOverDialogTake {#constructor-1}

> **VoiceOverDialogTake**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [VoiceOverDialogTake](/vext/ref/fb/voiceoverdialogtake) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "wave" %}}

> **[SoundWaveAsset](/vext/ref/fb/soundwaveasset)** \| **nil**

## Methods

### Clone {#clone}

> **Clone**(): [VoiceOverDialogTake](/vext/ref/fb/voiceoverdialogtake)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[VoiceOverDialogTake](/vext/ref/fb/voiceoverdialogtake)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [VoiceOverDialogTake](/vext/ref/fb/voiceoverdialogtake) type.

