---
title: SpecialMoveStateData
---


## Summary
### Constructors
| |
| ----------- |
| **[SpecialMoveStateData](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "minHeightScale" >}} | float |
| {{< prop "optimumDistanceFromObject" >}} | float |
| {{< prop "optimumHeightOfObject" >}} | float |
| {{< prop "optimumLengthOfObject" >}} | float |
| {{< prop "maxDistanceScale" >}} | float |
| {{< prop "minDistanceScale" >}} | float |
| {{< prop "maxHeightScale" >}} | float |
| {{< prop "motionPoints" >}} | [SpecialMoveInterpolatedPoint](/vext/ref/fb/specialmoveinterpolatedpoint)[] |
| {{< prop "maxObjectLengthScale" >}} | float |
| {{< prop "minObjectLengthScale" >}} | float |
| {{< prop "exitAnimationDrivenStateVelocity" >}} | float |
| {{< prop "resetPose" >}} | [SpecialMovesPoseType](/vext/ref/fb/specialmovesposetype) |
| {{< prop "overridePose" >}} | [SpecialMovesPoseType](/vext/ref/fb/specialmovesposetype) |
| {{< prop "gravityPoints" >}} | [SpecialMoveInterpolatedPoint](/vext/ref/fb/specialmoveinterpolatedpoint)[] |
| {{< prop "keepInitialSoldierDirection" >}} | bool |
| {{< prop "scaleWithDistanceToObject" >}} | bool |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [SpecialMoveStateData](/vext/ref/fb/specialmovestatedata) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "SpecialMoveStateData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### SpecialMoveStateData {#constructor-0}
> **SpecialMoveStateData**()

Creates a new [SpecialMoveStateData](/vext/ref/fb/specialmovestatedata) frostbite structure.

## Properties
### {{% prop-heading "minHeightScale" %}}
> **float**

### {{% prop-heading "optimumDistanceFromObject" %}}
> **float**

### {{% prop-heading "optimumHeightOfObject" %}}
> **float**

### {{% prop-heading "optimumLengthOfObject" %}}
> **float**

### {{% prop-heading "maxDistanceScale" %}}
> **float**

### {{% prop-heading "minDistanceScale" %}}
> **float**

### {{% prop-heading "maxHeightScale" %}}
> **float**

### {{% prop-heading "motionPoints" %}}
> **[SpecialMoveInterpolatedPoint](/vext/ref/fb/specialmoveinterpolatedpoint)**[]

### {{% prop-heading "maxObjectLengthScale" %}}
> **float**

### {{% prop-heading "minObjectLengthScale" %}}
> **float**

### {{% prop-heading "exitAnimationDrivenStateVelocity" %}}
> **float**

### {{% prop-heading "resetPose" %}}
> **[SpecialMovesPoseType](/vext/ref/fb/specialmovesposetype)**

### {{% prop-heading "overridePose" %}}
> **[SpecialMovesPoseType](/vext/ref/fb/specialmovesposetype)**

### {{% prop-heading "gravityPoints" %}}
> **[SpecialMoveInterpolatedPoint](/vext/ref/fb/specialmoveinterpolatedpoint)**[]

### {{% prop-heading "keepInitialSoldierDirection" %}}
> **bool**

### {{% prop-heading "scaleWithDistanceToObject" %}}
> **bool**

## Methods
### Clone
> **Clone**(): [SpecialMoveStateData](/vext/ref/fb/specialmovestatedata)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[SpecialMoveStateData](/vext/ref/fb/specialmovestatedata)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [SpecialMoveStateData](/vext/ref/fb/specialmovestatedata) type.

