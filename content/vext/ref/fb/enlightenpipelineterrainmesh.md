---
title: EnlightenPipelineTerrainMesh
---

## Summary

### Constructors

|  |
| --- |
| **[EnlightenPipelineTerrainMesh](#constructor-0)**() |
| **[EnlightenPipelineTerrainMesh](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "uvTranslation" >}} | [Vec2](/vext/ref/shared/type/vec2) |
| {{< prop "boundingBox" >}} | [AxisAlignedBox](/vext/ref/shared/type/axisalignedbox) |
| {{< prop "uvTransform" >}} | [Vec4](/vext/ref/shared/type/vec4) |
| {{< prop "lightMapResolution" >}} | int |
| {{< prop "terrainMeshName" >}} | string |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [EnlightenPipelineTerrainMesh](/vext/ref/fb/enlightenpipelineterrainmesh) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "EnlightenPipelineTerrainMesh" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### EnlightenPipelineTerrainMesh {#constructor-0}

> **EnlightenPipelineTerrainMesh**()

Creates a new [EnlightenPipelineTerrainMesh](/vext/ref/fb/enlightenpipelineterrainmesh) frostbite instance.

### EnlightenPipelineTerrainMesh {#constructor-1}

> **EnlightenPipelineTerrainMesh**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [EnlightenPipelineTerrainMesh](/vext/ref/fb/enlightenpipelineterrainmesh) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "uvTranslation" %}}

> **[Vec2](/vext/ref/shared/type/vec2)**

### {{% prop-heading "boundingBox" %}}

> **[AxisAlignedBox](/vext/ref/shared/type/axisalignedbox)**

### {{% prop-heading "uvTransform" %}}

> **[Vec4](/vext/ref/shared/type/vec4)**

### {{% prop-heading "lightMapResolution" %}}

> **int**

### {{% prop-heading "terrainMeshName" %}}

> **string**

## Methods

### Clone {#clone}

> **Clone**(): [EnlightenPipelineTerrainMesh](/vext/ref/fb/enlightenpipelineterrainmesh)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[EnlightenPipelineTerrainMesh](/vext/ref/fb/enlightenpipelineterrainmesh)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [EnlightenPipelineTerrainMesh](/vext/ref/fb/enlightenpipelineterrainmesh) type.

