---
title: SoldierMeshData
---

## Summary

### Constructors

|  |
| --- |
| **[SoldierMeshData](#constructor-0)**() |
| **[SoldierMeshData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "mesh" >}} | [SkinnedMeshAsset](/vext/ref/fb/skinnedmeshasset) \| nil |
| {{< prop "meshBlueprint" >}} | [ObjectBlueprint](/vext/ref/fb/objectblueprint) \| nil |
| {{< prop "randomGroup" >}} | int |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [SoldierMeshData](/vext/ref/fb/soldiermeshdata) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "SoldierMeshData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### SoldierMeshData {#constructor-0}

> **SoldierMeshData**()

Creates a new [SoldierMeshData](/vext/ref/fb/soldiermeshdata) frostbite instance.

### SoldierMeshData {#constructor-1}

> **SoldierMeshData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [SoldierMeshData](/vext/ref/fb/soldiermeshdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "mesh" %}}

> **[SkinnedMeshAsset](/vext/ref/fb/skinnedmeshasset)** \| **nil**

### {{% prop-heading "meshBlueprint" %}}

> **[ObjectBlueprint](/vext/ref/fb/objectblueprint)** \| **nil**

### {{% prop-heading "randomGroup" %}}

> **int**

## Methods

### Clone {#clone}

> **Clone**(): [SoldierMeshData](/vext/ref/fb/soldiermeshdata)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[SoldierMeshData](/vext/ref/fb/soldiermeshdata)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [SoldierMeshData](/vext/ref/fb/soldiermeshdata) type.

