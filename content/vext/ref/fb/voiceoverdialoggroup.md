---
title: VoiceOverDialogGroup
---

Inherits from [DataContainer](/vext/ref/shared/type/datacontainer)

## Summary

### Constructors

|  |
| --- |
| **[VoiceOverDialogGroup](#constructor-0)**() |
| **[VoiceOverDialogGroup](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[VoiceOverDialogGroup](#constructor-2)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "sound" >}} | [SoundAsset](/vext/ref/fb/soundasset) \| nil |
| {{< prop "tracks" >}} | [VoiceOverDialogTrack](/vext/ref/fb/voiceoverdialogtrack)[] |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "VoiceOverDialogGroup" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### VoiceOverDialogGroup {#constructor-0}

> **VoiceOverDialogGroup**()

Creates a new [VoiceOverDialogGroup](/vext/ref/fb/voiceoverdialoggroup) frostbite instance.

### VoiceOverDialogGroup {#constructor-1}

> **VoiceOverDialogGroup**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [VoiceOverDialogGroup](/vext/ref/fb/voiceoverdialoggroup) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### VoiceOverDialogGroup {#constructor-2}

> **VoiceOverDialogGroup**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [VoiceOverDialogGroup](/vext/ref/fb/voiceoverdialoggroup). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [VoiceOverDialogGroup](/vext/ref/fb/voiceoverdialoggroup). |

## Properties

### {{% prop-heading "sound" %}}

> **[SoundAsset](/vext/ref/fb/soundasset)** \| **nil**

### {{% prop-heading "tracks" %}}

> **[VoiceOverDialogTrack](/vext/ref/fb/voiceoverdialogtrack)**[]

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [VoiceOverDialogGroup](/vext/ref/fb/voiceoverdialoggroup) type.

