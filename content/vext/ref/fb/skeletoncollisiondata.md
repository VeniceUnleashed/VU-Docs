---
title: SkeletonCollisionData
---

Inherits from [DataContainer](/vext/ref/shared/type/datacontainer)

## Summary

### Constructors

|  |
| --- |
| **[SkeletonCollisionData](#constructor-0)**() |
| **[SkeletonCollisionData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[SkeletonCollisionData](#constructor-2)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "skeletonAsset" >}} | [SkeletonAsset](/vext/ref/fb/skeletonasset) \| nil |
| {{< prop "boneCollisionData" >}} | [BoneCollisionData](/vext/ref/fb/bonecollisiondata)[] |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "SkeletonCollisionData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### SkeletonCollisionData {#constructor-0}

> **SkeletonCollisionData**()

Creates a new [SkeletonCollisionData](/vext/ref/fb/skeletoncollisiondata) frostbite instance.

### SkeletonCollisionData {#constructor-1}

> **SkeletonCollisionData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [SkeletonCollisionData](/vext/ref/fb/skeletoncollisiondata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### SkeletonCollisionData {#constructor-2}

> **SkeletonCollisionData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [SkeletonCollisionData](/vext/ref/fb/skeletoncollisiondata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [SkeletonCollisionData](/vext/ref/fb/skeletoncollisiondata). |

## Properties

### {{% prop-heading "skeletonAsset" %}}

> **[SkeletonAsset](/vext/ref/fb/skeletonasset)** \| **nil**

### {{% prop-heading "boneCollisionData" %}}

> **[BoneCollisionData](/vext/ref/fb/bonecollisiondata)**[]

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [SkeletonCollisionData](/vext/ref/fb/skeletoncollisiondata) type.

