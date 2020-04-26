---
title: VoiceOverDialogTakeMapping
---


## Summary
### Constructors
| |
| ----------- |
| **[VoiceOverDialogTakeMapping](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "takeControlMin" >}} | float |
| {{< prop "takeControlMax" >}} | float |
| {{< prop "takeIndex" >}} | int |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [VoiceOverDialogTakeMapping](/vext/ref/fb/voiceoverdialogtakemapping) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "VoiceOverDialogTakeMapping" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### VoiceOverDialogTakeMapping {#constructor-0}
> **VoiceOverDialogTakeMapping**()

Creates a new [VoiceOverDialogTakeMapping](/vext/ref/fb/voiceoverdialogtakemapping) frostbite structure.

## Properties
### {{% prop-heading "takeControlMin" %}}
> **float**

### {{% prop-heading "takeControlMax" %}}
> **float**

### {{% prop-heading "takeIndex" %}}
> **int**

## Methods
### Clone
> **Clone**(): [VoiceOverDialogTakeMapping](/vext/ref/fb/voiceoverdialogtakemapping)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[VoiceOverDialogTakeMapping](/vext/ref/fb/voiceoverdialogtakemapping)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [VoiceOverDialogTakeMapping](/vext/ref/fb/voiceoverdialogtakemapping) type.

