---
title: StanceCameraData
---


## Summary
### Constructors
| |
| ----------- |
| **[StanceCameraData](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "validStances" >}} | int[] |
| {{< prop "defaultCameraForStances" >}} | int[] |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [StanceCameraData](/vext/ref/fb/stancecameradata) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "StanceCameraData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### StanceCameraData {#constructor-0}
> **StanceCameraData**()

Creates a new [StanceCameraData](/vext/ref/fb/stancecameradata) frostbite structure.

## Properties
### {{% prop-heading "validStances" %}}
> **int**[]

### {{% prop-heading "defaultCameraForStances" %}}
> **int**[]

## Methods
### Clone
> **Clone**(): [StanceCameraData](/vext/ref/fb/stancecameradata)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[StanceCameraData](/vext/ref/fb/stancecameradata)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [StanceCameraData](/vext/ref/fb/stancecameradata) type.

