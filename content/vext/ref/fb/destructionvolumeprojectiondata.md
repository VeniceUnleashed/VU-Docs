---
title: DestructionVolumeProjectionData
---


## Summary
### Constructors
| |
| ----------- |
| **[DestructionVolumeProjectionData](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "normal" >}} | [Vec3](/vext/ref/shared/class/vec3) |
| {{< prop "tangentAngle" >}} | float |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [DestructionVolumeProjectionData](/vext/ref/fb/destructionvolumeprojectiondata) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "DestructionVolumeProjectionData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### DestructionVolumeProjectionData {#constructor-0}
> **DestructionVolumeProjectionData**()

Creates a new [DestructionVolumeProjectionData](/vext/ref/fb/destructionvolumeprojectiondata) frostbite structure.

## Properties
### {{% prop-heading "normal" %}}
> **[Vec3](/vext/ref/shared/class/vec3)**

### {{% prop-heading "tangentAngle" %}}
> **float**

## Methods
### Clone
> **Clone**(): [DestructionVolumeProjectionData](/vext/ref/fb/destructionvolumeprojectiondata)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[DestructionVolumeProjectionData](/vext/ref/fb/destructionvolumeprojectiondata)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [DestructionVolumeProjectionData](/vext/ref/fb/destructionvolumeprojectiondata) type.

