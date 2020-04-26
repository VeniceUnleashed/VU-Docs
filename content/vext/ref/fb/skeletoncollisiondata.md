---
title: SkeletonCollisionData
---

Inherits from 
[DataContainer](/vext/ref/shared/class/datacontainer)

## Summary
### Constructors
| |
| ----------- |
| **[SkeletonCollisionData](#constructor-0)**() |
| **[SkeletonCollisionData](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[SkeletonCollisionData](#constructor-2)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "skeletonAsset" >}} | [SkeletonAsset](/vext/ref/fb/skeletonasset) \| nil |
| {{< prop "boneCollisionData" >}} | [BoneCollisionData](/vext/ref/fb/bonecollisiondata)[] |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "SkeletonCollisionData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### SkeletonCollisionData {#constructor-0}
> **SkeletonCollisionData**()

Creates a new [SkeletonCollisionData](/vext/ref/fb/skeletoncollisiondata) frostbite instance.

### SkeletonCollisionData {#constructor-1}
> **SkeletonCollisionData**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [SkeletonCollisionData](/vext/ref/fb/skeletoncollisiondata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### SkeletonCollisionData {#constructor-2}
> **SkeletonCollisionData**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [SkeletonCollisionData](/vext/ref/fb/skeletoncollisiondata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [SkeletonCollisionData](/vext/ref/fb/skeletoncollisiondata). |

## Properties
### {{% prop-heading "skeletonAsset" %}}
> **[SkeletonAsset](/vext/ref/fb/skeletonasset)** | **nil**

### {{% prop-heading "boneCollisionData" %}}
> **[BoneCollisionData](/vext/ref/fb/bonecollisiondata)**[]

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [SkeletonCollisionData](/vext/ref/fb/skeletoncollisiondata) type.

