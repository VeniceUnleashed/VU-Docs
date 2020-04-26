---
title: SoldierHeadCollisionPoseData
---


## Summary
### Constructors
| |
| ----------- |
| **[SoldierHeadCollisionPoseData](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "idleOffset" >}} | [Vec3](/vext/ref/shared/class/vec3) |
| {{< prop "movingForwardOffset" >}} | [Vec3](/vext/ref/shared/class/vec3) |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [SoldierHeadCollisionPoseData](/vext/ref/fb/soldierheadcollisionposedata) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "SoldierHeadCollisionPoseData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### SoldierHeadCollisionPoseData {#constructor-0}
> **SoldierHeadCollisionPoseData**()

Creates a new [SoldierHeadCollisionPoseData](/vext/ref/fb/soldierheadcollisionposedata) frostbite structure.

## Properties
### {{% prop-heading "idleOffset" %}}
> **[Vec3](/vext/ref/shared/class/vec3)**

### {{% prop-heading "movingForwardOffset" %}}
> **[Vec3](/vext/ref/shared/class/vec3)**

## Methods
### Clone
> **Clone**(): [SoldierHeadCollisionPoseData](/vext/ref/fb/soldierheadcollisionposedata)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[SoldierHeadCollisionPoseData](/vext/ref/fb/soldierheadcollisionposedata)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [SoldierHeadCollisionPoseData](/vext/ref/fb/soldierheadcollisionposedata) type.

