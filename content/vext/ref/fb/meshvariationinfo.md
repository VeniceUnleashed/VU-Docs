---
title: MeshVariationInfo
---

## Summary

### Constructors

|  |
| --- |
| **[MeshVariationInfo](#constructor-0)**() |
| **[MeshVariationInfo](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "meshAsset" >}} | [MeshAsset](/vext/ref/fb/meshasset) \| nil |
| {{< prop "origMeshAsset" >}} | [MeshAsset](/vext/ref/fb/meshasset) \| nil |
| {{< prop "variationAsset" >}} | [ObjectVariation](/vext/ref/fb/objectvariation) \| nil |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [MeshVariationInfo](/vext/ref/fb/meshvariationinfo) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "MeshVariationInfo" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### MeshVariationInfo {#constructor-0}

> **MeshVariationInfo**()

Creates a new [MeshVariationInfo](/vext/ref/fb/meshvariationinfo) frostbite instance.

### MeshVariationInfo {#constructor-1}

> **MeshVariationInfo**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [MeshVariationInfo](/vext/ref/fb/meshvariationinfo) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "meshAsset" %}}

> **[MeshAsset](/vext/ref/fb/meshasset)** \| **nil**

### {{% prop-heading "origMeshAsset" %}}

> **[MeshAsset](/vext/ref/fb/meshasset)** \| **nil**

### {{% prop-heading "variationAsset" %}}

> **[ObjectVariation](/vext/ref/fb/objectvariation)** \| **nil**

## Methods

### Clone {#clone}

> **Clone**(): [MeshVariationInfo](/vext/ref/fb/meshvariationinfo)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[MeshVariationInfo](/vext/ref/fb/meshvariationinfo)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [MeshVariationInfo](/vext/ref/fb/meshvariationinfo) type.

