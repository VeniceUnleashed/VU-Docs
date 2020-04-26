---
title: SubSkeleton
---


## Summary
### Constructors
| |
| ----------- |
| **[SubSkeleton](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "skeleton" >}} | [SkeletonAsset](/vext/ref/fb/skeletonasset) \| nil |
| {{< prop "boneMap" >}} | int[] |
| {{< prop "transformMap" >}} | [LinearTransform](/vext/ref/shared/class/lineartransform)[] |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [SubSkeleton](/vext/ref/fb/subskeleton) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "SubSkeleton" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### SubSkeleton {#constructor-0}
> **SubSkeleton**()

Creates a new [SubSkeleton](/vext/ref/fb/subskeleton) frostbite structure.

## Properties
### {{% prop-heading "skeleton" %}}
> **[SkeletonAsset](/vext/ref/fb/skeletonasset)** | **nil**

### {{% prop-heading "boneMap" %}}
> **int**[]

### {{% prop-heading "transformMap" %}}
> **[LinearTransform](/vext/ref/shared/class/lineartransform)**[]

## Methods
### Clone
> **Clone**(): [SubSkeleton](/vext/ref/fb/subskeleton)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[SubSkeleton](/vext/ref/fb/subskeleton)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [SubSkeleton](/vext/ref/fb/subskeleton) type.

