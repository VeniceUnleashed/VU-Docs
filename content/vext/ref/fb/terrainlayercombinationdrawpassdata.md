---
title: TerrainLayerCombinationDrawPassData
---

## Summary

### Constructors

|  |
| --- |
| **[TerrainLayerCombinationDrawPassData](#constructor-0)**() |
| **[TerrainLayerCombinationDrawPassData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [TerrainLayerCombinationDrawPassData](/vext/ref/fb/terrainlayercombinationdrawpassdata) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "TerrainLayerCombinationDrawPassData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### TerrainLayerCombinationDrawPassData {#constructor-0}

> **TerrainLayerCombinationDrawPassData**()

Creates a new [TerrainLayerCombinationDrawPassData](/vext/ref/fb/terrainlayercombinationdrawpassdata) frostbite instance.

### TerrainLayerCombinationDrawPassData {#constructor-1}

> **TerrainLayerCombinationDrawPassData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [TerrainLayerCombinationDrawPassData](/vext/ref/fb/terrainlayercombinationdrawpassdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Methods

### Clone {#clone}

> **Clone**(): [TerrainLayerCombinationDrawPassData](/vext/ref/fb/terrainlayercombinationdrawpassdata)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[TerrainLayerCombinationDrawPassData](/vext/ref/fb/terrainlayercombinationdrawpassdata)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [TerrainLayerCombinationDrawPassData](/vext/ref/fb/terrainlayercombinationdrawpassdata) type.

