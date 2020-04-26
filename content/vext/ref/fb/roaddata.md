---
title: RoadData
---

Inherits from [RibbonData](/vext/ref/fb/ribbondata)

## Summary

### Constructors

|  |
| --- |
| **[RoadData](#constructor-0)**() |
| **[RoadData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[RoadData](#constructor-2)**(other: [RibbonData](/vext/ref/fb/ribbondata)) |
| **[RoadData](#constructor-3)**(other: [VisualVectorShapeData](/vext/ref/fb/visualvectorshapedata)) |
| **[RoadData](#constructor-4)**(other: [VectorShapeData](/vext/ref/fb/vectorshapedata)) |
| **[RoadData](#constructor-5)**(other: [BaseShapeData](/vext/ref/fb/baseshapedata)) |
| **[RoadData](#constructor-6)**(other: [GameObjectData](/vext/ref/fb/gameobjectdata)) |
| **[RoadData](#constructor-7)**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer)) |
| **[RoadData](#constructor-8)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "shader2d" >}} | [SurfaceShaderBaseAsset](/vext/ref/fb/surfaceshaderbaseasset) \| nil |
| {{< prop "shader3dZOnly" >}} | [SurfaceShaderBaseAsset](/vext/ref/fb/surfaceshaderbaseasset) \| nil |
| {{< prop "uvTileFactor" >}} | float |
| {{< prop "stickToTerrain" >}} | bool |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "RoadData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### RoadData {#constructor-0}

> **RoadData**()

Creates a new [RoadData](/vext/ref/fb/roaddata) frostbite instance.

### RoadData {#constructor-1}

> **RoadData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [RoadData](/vext/ref/fb/roaddata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### RoadData {#constructor-2}

> **RoadData**(other: [RibbonData](/vext/ref/fb/ribbondata))

Casts an instance of type [RibbonData](/vext/ref/fb/ribbondata) to [RoadData](/vext/ref/fb/roaddata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [RibbonData](/vext/ref/fb/ribbondata) | The instance to cast to [RoadData](/vext/ref/fb/roaddata). |

### RoadData {#constructor-3}

> **RoadData**(other: [VisualVectorShapeData](/vext/ref/fb/visualvectorshapedata))

Casts an instance of type [VisualVectorShapeData](/vext/ref/fb/visualvectorshapedata) to [RoadData](/vext/ref/fb/roaddata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [VisualVectorShapeData](/vext/ref/fb/visualvectorshapedata) | The instance to cast to [RoadData](/vext/ref/fb/roaddata). |

### RoadData {#constructor-4}

> **RoadData**(other: [VectorShapeData](/vext/ref/fb/vectorshapedata))

Casts an instance of type [VectorShapeData](/vext/ref/fb/vectorshapedata) to [RoadData](/vext/ref/fb/roaddata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [VectorShapeData](/vext/ref/fb/vectorshapedata) | The instance to cast to [RoadData](/vext/ref/fb/roaddata). |

### RoadData {#constructor-5}

> **RoadData**(other: [BaseShapeData](/vext/ref/fb/baseshapedata))

Casts an instance of type [BaseShapeData](/vext/ref/fb/baseshapedata) to [RoadData](/vext/ref/fb/roaddata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [BaseShapeData](/vext/ref/fb/baseshapedata) | The instance to cast to [RoadData](/vext/ref/fb/roaddata). |

### RoadData {#constructor-6}

> **RoadData**(other: [GameObjectData](/vext/ref/fb/gameobjectdata))

Casts an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata) to [RoadData](/vext/ref/fb/roaddata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameObjectData](/vext/ref/fb/gameobjectdata) | The instance to cast to [RoadData](/vext/ref/fb/roaddata). |

### RoadData {#constructor-7}

> **RoadData**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer))

Casts an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer) to [RoadData](/vext/ref/fb/roaddata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameDataContainer](/vext/ref/fb/gamedatacontainer) | The instance to cast to [RoadData](/vext/ref/fb/roaddata). |

### RoadData {#constructor-8}

> **RoadData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [RoadData](/vext/ref/fb/roaddata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [RoadData](/vext/ref/fb/roaddata). |

## Properties

### {{% prop-heading "shader2d" %}}

> **[SurfaceShaderBaseAsset](/vext/ref/fb/surfaceshaderbaseasset)** \| **nil**

### {{% prop-heading "shader3dZOnly" %}}

> **[SurfaceShaderBaseAsset](/vext/ref/fb/surfaceshaderbaseasset)** \| **nil**

### {{% prop-heading "uvTileFactor" %}}

> **float**

### {{% prop-heading "stickToTerrain" %}}

> **bool**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [RoadData](/vext/ref/fb/roaddata) type.

