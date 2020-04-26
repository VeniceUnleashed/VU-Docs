---
title: RotateToHitData
---


## Summary
### Constructors
| |
| ----------- |
| **[RotateToHitData](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "rotationSpeedFactor" >}} | float |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [RotateToHitData](/vext/ref/fb/rotatetohitdata) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "RotateToHitData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### RotateToHitData {#constructor-0}
> **RotateToHitData**()

Creates a new [RotateToHitData](/vext/ref/fb/rotatetohitdata) frostbite structure.

## Properties
### {{% prop-heading "rotationSpeedFactor" %}}
> **float**

## Methods
### Clone
> **Clone**(): [RotateToHitData](/vext/ref/fb/rotatetohitdata)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[RotateToHitData](/vext/ref/fb/rotatetohitdata)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [RotateToHitData](/vext/ref/fb/rotatetohitdata) type.

