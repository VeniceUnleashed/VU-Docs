---
title: SpecialMoveInterpolatedPoint
---


## Summary
### Constructors
| |
| ----------- |
| **[SpecialMoveInterpolatedPoint](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "value" >}} | [Vec3](/vext/ref/shared/class/vec3) |
| {{< prop "time" >}} | float |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [SpecialMoveInterpolatedPoint](/vext/ref/fb/specialmoveinterpolatedpoint) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "SpecialMoveInterpolatedPoint" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### SpecialMoveInterpolatedPoint {#constructor-0}
> **SpecialMoveInterpolatedPoint**()

Creates a new [SpecialMoveInterpolatedPoint](/vext/ref/fb/specialmoveinterpolatedpoint) frostbite structure.

## Properties
### {{% prop-heading "value" %}}
> **[Vec3](/vext/ref/shared/class/vec3)**

### {{% prop-heading "time" %}}
> **float**

## Methods
### Clone
> **Clone**(): [SpecialMoveInterpolatedPoint](/vext/ref/fb/specialmoveinterpolatedpoint)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[SpecialMoveInterpolatedPoint](/vext/ref/fb/specialmoveinterpolatedpoint)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [SpecialMoveInterpolatedPoint](/vext/ref/fb/specialmoveinterpolatedpoint) type.

