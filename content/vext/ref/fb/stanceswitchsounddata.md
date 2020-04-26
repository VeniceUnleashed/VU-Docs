---
title: StanceSwitchSoundData
---


## Summary
### Constructors
| |
| ----------- |
| **[StanceSwitchSoundData](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "stanceSwitchSound" >}} | [SoundAsset](/vext/ref/fb/soundasset) \| nil |
| {{< prop "validStances" >}} | int[] |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [StanceSwitchSoundData](/vext/ref/fb/stanceswitchsounddata) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "StanceSwitchSoundData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### StanceSwitchSoundData {#constructor-0}
> **StanceSwitchSoundData**()

Creates a new [StanceSwitchSoundData](/vext/ref/fb/stanceswitchsounddata) frostbite structure.

## Properties
### {{% prop-heading "stanceSwitchSound" %}}
> **[SoundAsset](/vext/ref/fb/soundasset)** | **nil**

### {{% prop-heading "validStances" %}}
> **int**[]

## Methods
### Clone
> **Clone**(): [StanceSwitchSoundData](/vext/ref/fb/stanceswitchsounddata)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[StanceSwitchSoundData](/vext/ref/fb/stanceswitchsounddata)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [StanceSwitchSoundData](/vext/ref/fb/stanceswitchsounddata) type.

