---
title: SubSkeleton
---

## Summary

### Constructors

|  |
| --- |
| **[SubSkeleton](#constructor-0)**() |
| **[SubSkeleton](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "skeleton" >}} | [SkeletonAsset](/vext/ref/fb/skeletonasset) \| nil |
| {{< prop "boneMap" >}} | int[] |
| {{< prop "transformMap" >}} | [LinearTransform](/vext/ref/shared/type/lineartransform)[] |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [SubSkeleton](/vext/ref/fb/subskeleton) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "SubSkeleton" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### SubSkeleton {#constructor-0}

> **SubSkeleton**()

Creates a new [SubSkeleton](/vext/ref/fb/subskeleton) frostbite instance.

### SubSkeleton {#constructor-1}

> **SubSkeleton**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [SubSkeleton](/vext/ref/fb/subskeleton) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "skeleton" %}}

> **[SkeletonAsset](/vext/ref/fb/skeletonasset)** \| **nil**

### {{% prop-heading "boneMap" %}}

> **int**[]

### {{% prop-heading "transformMap" %}}

> **[LinearTransform](/vext/ref/shared/type/lineartransform)**[]

## Methods

### Clone {#clone}

> **Clone**(): [SubSkeleton](/vext/ref/fb/subskeleton)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[SubSkeleton](/vext/ref/fb/subskeleton)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [SubSkeleton](/vext/ref/fb/subskeleton) type.

