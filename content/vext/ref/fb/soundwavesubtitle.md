---
title: SoundWaveSubtitle
---


## Summary
### Constructors
| |
| ----------- |
| **[SoundWaveSubtitle](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "time" >}} | float |
| {{< prop "stringIndex" >}} | int |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [SoundWaveSubtitle](/vext/ref/fb/soundwavesubtitle) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "SoundWaveSubtitle" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### SoundWaveSubtitle {#constructor-0}
> **SoundWaveSubtitle**()

Creates a new [SoundWaveSubtitle](/vext/ref/fb/soundwavesubtitle) frostbite structure.

## Properties
### {{% prop-heading "time" %}}
> **float**

### {{% prop-heading "stringIndex" %}}
> **int**

## Methods
### Clone
> **Clone**(): [SoundWaveSubtitle](/vext/ref/fb/soundwavesubtitle)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[SoundWaveSubtitle](/vext/ref/fb/soundwavesubtitle)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [SoundWaveSubtitle](/vext/ref/fb/soundwavesubtitle) type.

