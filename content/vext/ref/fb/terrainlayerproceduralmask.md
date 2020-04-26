---
title: TerrainLayerProceduralMask
---

## Summary

### Constructors

|  |
| --- |
| **[TerrainLayerProceduralMask](#constructor-0)**() |
| **[TerrainLayerProceduralMask](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "altitudeMin" >}} | float |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [TerrainLayerProceduralMask](/vext/ref/fb/terrainlayerproceduralmask) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "TerrainLayerProceduralMask" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### TerrainLayerProceduralMask {#constructor-0}

> **TerrainLayerProceduralMask**()

Creates a new [TerrainLayerProceduralMask](/vext/ref/fb/terrainlayerproceduralmask) frostbite instance.

### TerrainLayerProceduralMask {#constructor-1}

> **TerrainLayerProceduralMask**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [TerrainLayerProceduralMask](/vext/ref/fb/terrainlayerproceduralmask) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "altitudeMin" %}}

> **float**

## Methods

### Clone {#clone}

> **Clone**(): [TerrainLayerProceduralMask](/vext/ref/fb/terrainlayerproceduralmask)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[TerrainLayerProceduralMask](/vext/ref/fb/terrainlayerproceduralmask)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [TerrainLayerProceduralMask](/vext/ref/fb/terrainlayerproceduralmask) type.

