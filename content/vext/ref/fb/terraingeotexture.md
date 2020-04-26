---
title: TerrainGeoTexture
---

## Summary

### Constructors

|  |
| --- |
| **[TerrainGeoTexture](#constructor-0)**() |
| **[TerrainGeoTexture](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [TerrainGeoTexture](/vext/ref/fb/terraingeotexture) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "TerrainGeoTexture" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### TerrainGeoTexture {#constructor-0}

> **TerrainGeoTexture**()

Creates a new [TerrainGeoTexture](/vext/ref/fb/terraingeotexture) frostbite instance.

### TerrainGeoTexture {#constructor-1}

> **TerrainGeoTexture**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [TerrainGeoTexture](/vext/ref/fb/terraingeotexture) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Methods

### Clone {#clone}

> **Clone**(): [TerrainGeoTexture](/vext/ref/fb/terraingeotexture)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[TerrainGeoTexture](/vext/ref/fb/terraingeotexture)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [TerrainGeoTexture](/vext/ref/fb/terraingeotexture) type.

