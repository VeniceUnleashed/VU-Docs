---
title: VoiceOverDialogTake
---


## Summary
### Constructors
| |
| ----------- |
| **[VoiceOverDialogTake](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "wave" >}} | [SoundWaveAsset](/vext/ref/fb/soundwaveasset) \| nil |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [VoiceOverDialogTake](/vext/ref/fb/voiceoverdialogtake) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "VoiceOverDialogTake" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### VoiceOverDialogTake {#constructor-0}
> **VoiceOverDialogTake**()

Creates a new [VoiceOverDialogTake](/vext/ref/fb/voiceoverdialogtake) frostbite structure.

## Properties
### {{% prop-heading "wave" %}}
> **[SoundWaveAsset](/vext/ref/fb/soundwaveasset)** | **nil**

## Methods
### Clone
> **Clone**(): [VoiceOverDialogTake](/vext/ref/fb/voiceoverdialogtake)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[VoiceOverDialogTake](/vext/ref/fb/voiceoverdialogtake)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [VoiceOverDialogTake](/vext/ref/fb/voiceoverdialogtake) type.

