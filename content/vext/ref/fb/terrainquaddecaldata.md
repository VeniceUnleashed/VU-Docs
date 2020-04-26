---
title: TerrainQuadDecalData
---

Inherits from [VisualVectorShapeData](/vext/ref/fb/visualvectorshapedata)

## Summary

### Constructors

|  |
| --- |
| **[TerrainQuadDecalData](#constructor-0)**() |
| **[TerrainQuadDecalData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[TerrainQuadDecalData](#constructor-2)**(other: [VisualVectorShapeData](/vext/ref/fb/visualvectorshapedata)) |
| **[TerrainQuadDecalData](#constructor-3)**(other: [VectorShapeData](/vext/ref/fb/vectorshapedata)) |
| **[TerrainQuadDecalData](#constructor-4)**(other: [BaseShapeData](/vext/ref/fb/baseshapedata)) |
| **[TerrainQuadDecalData](#constructor-5)**(other: [GameObjectData](/vext/ref/fb/gameobjectdata)) |
| **[TerrainQuadDecalData](#constructor-6)**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer)) |
| **[TerrainQuadDecalData](#constructor-7)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "userMasks" >}} | [Vec4](/vext/ref/shared/type/vec4) |
| {{< prop "shader3dZOnly" >}} | [SurfaceShaderBaseAsset](/vext/ref/fb/surfaceshaderbaseasset) \| nil |
| {{< prop "shader2d" >}} | [SurfaceShaderBaseAsset](/vext/ref/fb/surfaceshaderbaseasset) \| nil |
| {{< prop "atlasTileTemplate" >}} | [TerrainQuadDecalAtlasTileTemplateData](/vext/ref/fb/terrainquaddecalatlastiletemplatedata) \| nil |
| {{< prop "atlasTile" >}} | [TerrainQuadDecalAtlasTile](/vext/ref/fb/terrainquaddecalatlastile) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "TerrainQuadDecalData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### TerrainQuadDecalData {#constructor-0}

> **TerrainQuadDecalData**()

Creates a new [TerrainQuadDecalData](/vext/ref/fb/terrainquaddecaldata) frostbite instance.

### TerrainQuadDecalData {#constructor-1}

> **TerrainQuadDecalData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [TerrainQuadDecalData](/vext/ref/fb/terrainquaddecaldata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### TerrainQuadDecalData {#constructor-2}

> **TerrainQuadDecalData**(other: [VisualVectorShapeData](/vext/ref/fb/visualvectorshapedata))

Casts an instance of type [VisualVectorShapeData](/vext/ref/fb/visualvectorshapedata) to [TerrainQuadDecalData](/vext/ref/fb/terrainquaddecaldata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [VisualVectorShapeData](/vext/ref/fb/visualvectorshapedata) | The instance to cast to [TerrainQuadDecalData](/vext/ref/fb/terrainquaddecaldata). |

### TerrainQuadDecalData {#constructor-3}

> **TerrainQuadDecalData**(other: [VectorShapeData](/vext/ref/fb/vectorshapedata))

Casts an instance of type [VectorShapeData](/vext/ref/fb/vectorshapedata) to [TerrainQuadDecalData](/vext/ref/fb/terrainquaddecaldata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [VectorShapeData](/vext/ref/fb/vectorshapedata) | The instance to cast to [TerrainQuadDecalData](/vext/ref/fb/terrainquaddecaldata). |

### TerrainQuadDecalData {#constructor-4}

> **TerrainQuadDecalData**(other: [BaseShapeData](/vext/ref/fb/baseshapedata))

Casts an instance of type [BaseShapeData](/vext/ref/fb/baseshapedata) to [TerrainQuadDecalData](/vext/ref/fb/terrainquaddecaldata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [BaseShapeData](/vext/ref/fb/baseshapedata) | The instance to cast to [TerrainQuadDecalData](/vext/ref/fb/terrainquaddecaldata). |

### TerrainQuadDecalData {#constructor-5}

> **TerrainQuadDecalData**(other: [GameObjectData](/vext/ref/fb/gameobjectdata))

Casts an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata) to [TerrainQuadDecalData](/vext/ref/fb/terrainquaddecaldata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameObjectData](/vext/ref/fb/gameobjectdata) | The instance to cast to [TerrainQuadDecalData](/vext/ref/fb/terrainquaddecaldata). |

### TerrainQuadDecalData {#constructor-6}

> **TerrainQuadDecalData**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer))

Casts an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer) to [TerrainQuadDecalData](/vext/ref/fb/terrainquaddecaldata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameDataContainer](/vext/ref/fb/gamedatacontainer) | The instance to cast to [TerrainQuadDecalData](/vext/ref/fb/terrainquaddecaldata). |

### TerrainQuadDecalData {#constructor-7}

> **TerrainQuadDecalData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [TerrainQuadDecalData](/vext/ref/fb/terrainquaddecaldata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [TerrainQuadDecalData](/vext/ref/fb/terrainquaddecaldata). |

## Properties

### {{% prop-heading "userMasks" %}}

> **[Vec4](/vext/ref/shared/type/vec4)**

### {{% prop-heading "shader3dZOnly" %}}

> **[SurfaceShaderBaseAsset](/vext/ref/fb/surfaceshaderbaseasset)** \| **nil**

### {{% prop-heading "shader2d" %}}

> **[SurfaceShaderBaseAsset](/vext/ref/fb/surfaceshaderbaseasset)** \| **nil**

### {{% prop-heading "atlasTileTemplate" %}}

> **[TerrainQuadDecalAtlasTileTemplateData](/vext/ref/fb/terrainquaddecalatlastiletemplatedata)** \| **nil**

### {{% prop-heading "atlasTile" %}}

> **[TerrainQuadDecalAtlasTile](/vext/ref/fb/terrainquaddecalatlastile)**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [TerrainQuadDecalData](/vext/ref/fb/terrainquaddecaldata) type.

