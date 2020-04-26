---
title: TerrainQuadDecalAtlasTile
---

## Summary

### Constructors

|  |
| --- |
| **[TerrainQuadDecalAtlasTile](#constructor-0)**() |
| **[TerrainQuadDecalAtlasTile](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "tileIndexX" >}} | int |
| {{< prop "tileIndexY" >}} | int |
| {{< prop "tileCountX" >}} | int |
| {{< prop "tileCountY" >}} | int |
| {{< prop "flipX" >}} | bool |
| {{< prop "flipY" >}} | bool |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [TerrainQuadDecalAtlasTile](/vext/ref/fb/terrainquaddecalatlastile) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "TerrainQuadDecalAtlasTile" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### TerrainQuadDecalAtlasTile {#constructor-0}

> **TerrainQuadDecalAtlasTile**()

Creates a new [TerrainQuadDecalAtlasTile](/vext/ref/fb/terrainquaddecalatlastile) frostbite instance.

### TerrainQuadDecalAtlasTile {#constructor-1}

> **TerrainQuadDecalAtlasTile**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [TerrainQuadDecalAtlasTile](/vext/ref/fb/terrainquaddecalatlastile) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "tileIndexX" %}}

> **int**

### {{% prop-heading "tileIndexY" %}}

> **int**

### {{% prop-heading "tileCountX" %}}

> **int**

### {{% prop-heading "tileCountY" %}}

> **int**

### {{% prop-heading "flipX" %}}

> **bool**

### {{% prop-heading "flipY" %}}

> **bool**

## Methods

### Clone {#clone}

> **Clone**(): [TerrainQuadDecalAtlasTile](/vext/ref/fb/terrainquaddecalatlastile)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[TerrainQuadDecalAtlasTile](/vext/ref/fb/terrainquaddecalatlastile)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [TerrainQuadDecalAtlasTile](/vext/ref/fb/terrainquaddecalatlastile) type.

