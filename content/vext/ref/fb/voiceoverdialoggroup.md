---
title: VoiceOverDialogGroup
---

Inherits from 
[DataContainer](/vext/ref/shared/class/datacontainer)

## Summary
### Constructors
| |
| ----------- |
| **[VoiceOverDialogGroup](#constructor-0)**() |
| **[VoiceOverDialogGroup](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[VoiceOverDialogGroup](#constructor-2)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "sound" >}} | [SoundAsset](/vext/ref/fb/soundasset) \| nil |
| {{< prop "tracks" >}} | [VoiceOverDialogTrack](/vext/ref/fb/voiceoverdialogtrack)[] |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "VoiceOverDialogGroup" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### VoiceOverDialogGroup {#constructor-0}
> **VoiceOverDialogGroup**()

Creates a new [VoiceOverDialogGroup](/vext/ref/fb/voiceoverdialoggroup) frostbite instance.

### VoiceOverDialogGroup {#constructor-1}
> **VoiceOverDialogGroup**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [VoiceOverDialogGroup](/vext/ref/fb/voiceoverdialoggroup) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### VoiceOverDialogGroup {#constructor-2}
> **VoiceOverDialogGroup**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [VoiceOverDialogGroup](/vext/ref/fb/voiceoverdialoggroup). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [VoiceOverDialogGroup](/vext/ref/fb/voiceoverdialoggroup). |

## Properties
### {{% prop-heading "sound" %}}
> **[SoundAsset](/vext/ref/fb/soundasset)** | **nil**

### {{% prop-heading "tracks" %}}
> **[VoiceOverDialogTrack](/vext/ref/fb/voiceoverdialogtrack)**[]

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [VoiceOverDialogGroup](/vext/ref/fb/voiceoverdialoggroup) type.

