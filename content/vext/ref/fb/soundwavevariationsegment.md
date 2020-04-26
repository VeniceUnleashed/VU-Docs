---
title: SoundWaveVariationSegment
---


## Summary
### Constructors
| |
| ----------- |
| **[SoundWaveVariationSegment](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "samplesOffset" >}} | int |
| {{< prop "seekTableOffset" >}} | int |
| {{< prop "segmentLength" >}} | float |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [SoundWaveVariationSegment](/vext/ref/fb/soundwavevariationsegment) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "SoundWaveVariationSegment" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### SoundWaveVariationSegment {#constructor-0}
> **SoundWaveVariationSegment**()

Creates a new [SoundWaveVariationSegment](/vext/ref/fb/soundwavevariationsegment) frostbite structure.

## Properties
### {{% prop-heading "samplesOffset" %}}
> **int**

### {{% prop-heading "seekTableOffset" %}}
> **int**

### {{% prop-heading "segmentLength" %}}
> **float**

## Methods
### Clone
> **Clone**(): [SoundWaveVariationSegment](/vext/ref/fb/soundwavevariationsegment)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[SoundWaveVariationSegment](/vext/ref/fb/soundwavevariationsegment)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [SoundWaveVariationSegment](/vext/ref/fb/soundwavevariationsegment) type.

