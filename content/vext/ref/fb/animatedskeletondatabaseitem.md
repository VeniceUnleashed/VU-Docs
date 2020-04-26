---
title: AnimatedSkeletonDatabaseItem
---


## Summary
### Constructors
| |
| ----------- |
| **[AnimatedSkeletonDatabaseItem](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "asset" >}} | [SkeletonAsset](/vext/ref/fb/skeletonasset) \| nil |
| {{< prop "names" >}} | int[] |
| {{< prop "soldierCollision" >}} | [SkeletonCollisionData](/vext/ref/fb/skeletoncollisiondata) \| nil |
| {{< prop "ragdollCollision" >}} | [SkeletonCollisionData](/vext/ref/fb/skeletoncollisiondata) \| nil |
| {{< prop "ragdoll" >}} | [RagdollAsset](/vext/ref/fb/ragdollasset) \| nil |
| {{< prop "specialBones" >}} | string[] |
| {{< prop "hipBone" >}} | string |
| {{< prop "headBone" >}} | string |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [AnimatedSkeletonDatabaseItem](/vext/ref/fb/animatedskeletondatabaseitem) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "AnimatedSkeletonDatabaseItem" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### AnimatedSkeletonDatabaseItem {#constructor-0}
> **AnimatedSkeletonDatabaseItem**()

Creates a new [AnimatedSkeletonDatabaseItem](/vext/ref/fb/animatedskeletondatabaseitem) frostbite structure.

## Properties
### {{% prop-heading "asset" %}}
> **[SkeletonAsset](/vext/ref/fb/skeletonasset)** | **nil**

### {{% prop-heading "names" %}}
> **int**[]

### {{% prop-heading "soldierCollision" %}}
> **[SkeletonCollisionData](/vext/ref/fb/skeletoncollisiondata)** | **nil**

### {{% prop-heading "ragdollCollision" %}}
> **[SkeletonCollisionData](/vext/ref/fb/skeletoncollisiondata)** | **nil**

### {{% prop-heading "ragdoll" %}}
> **[RagdollAsset](/vext/ref/fb/ragdollasset)** | **nil**

### {{% prop-heading "specialBones" %}}
> **string**[]

### {{% prop-heading "hipBone" %}}
> **string**

### {{% prop-heading "headBone" %}}
> **string**

## Methods
### Clone
> **Clone**(): [AnimatedSkeletonDatabaseItem](/vext/ref/fb/animatedskeletondatabaseitem)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[AnimatedSkeletonDatabaseItem](/vext/ref/fb/animatedskeletondatabaseitem)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [AnimatedSkeletonDatabaseItem](/vext/ref/fb/animatedskeletondatabaseitem) type.

