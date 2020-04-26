---
title: FaceAnimationWaveMapping
---


## Summary
### Constructors
| |
| ----------- |
| **[FaceAnimationWaveMapping](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "waveNameHash" >}} | int |
| {{< prop "antEnumValue" >}} | int |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [FaceAnimationWaveMapping](/vext/ref/fb/faceanimationwavemapping) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "FaceAnimationWaveMapping" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### FaceAnimationWaveMapping {#constructor-0}
> **FaceAnimationWaveMapping**()

Creates a new [FaceAnimationWaveMapping](/vext/ref/fb/faceanimationwavemapping) frostbite structure.

## Properties
### {{% prop-heading "waveNameHash" %}}
> **int**

### {{% prop-heading "antEnumValue" %}}
> **int**

## Methods
### Clone
> **Clone**(): [FaceAnimationWaveMapping](/vext/ref/fb/faceanimationwavemapping)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[FaceAnimationWaveMapping](/vext/ref/fb/faceanimationwavemapping)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [FaceAnimationWaveMapping](/vext/ref/fb/faceanimationwavemapping) type.

