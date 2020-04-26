---
title: BreakableModelEntityData
---

Inherits from [GamePhysicsEntityData](/vext/ref/fb/gamephysicsentitydata)

## Summary

### Constructors

|  |
| --- |
| **[BreakableModelEntityData](#constructor-0)**() |
| **[BreakableModelEntityData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[BreakableModelEntityData](#constructor-2)**(other: [GamePhysicsEntityData](/vext/ref/fb/gamephysicsentitydata)) |
| **[BreakableModelEntityData](#constructor-3)**(other: [GameEntityData](/vext/ref/fb/gameentitydata)) |
| **[BreakableModelEntityData](#constructor-4)**(other: [SpatialEntityData](/vext/ref/fb/spatialentitydata)) |
| **[BreakableModelEntityData](#constructor-5)**(other: [EntityData](/vext/ref/fb/entitydata)) |
| **[BreakableModelEntityData](#constructor-6)**(other: [GameObjectData](/vext/ref/fb/gameobjectdata)) |
| **[BreakableModelEntityData](#constructor-7)**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer)) |
| **[BreakableModelEntityData](#constructor-8)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "decalVolumeShader" >}} | [SurfaceShaderBaseAsset](/vext/ref/fb/surfaceshaderbaseasset) \| nil |
| {{< prop "decalVolumeScaleFactor" >}} | float |
| {{< prop "mesh" >}} | [MeshAsset](/vext/ref/fb/meshasset) \| nil |
| {{< prop "boneCount" >}} | int |
| {{< prop "edgeModelLightMapData" >}} | [EdgeModelLightMapData](/vext/ref/fb/edgemodellightmapdata) \| nil |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "BreakableModelEntityData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### BreakableModelEntityData {#constructor-0}

> **BreakableModelEntityData**()

Creates a new [BreakableModelEntityData](/vext/ref/fb/breakablemodelentitydata) frostbite instance.

### BreakableModelEntityData {#constructor-1}

> **BreakableModelEntityData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [BreakableModelEntityData](/vext/ref/fb/breakablemodelentitydata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### BreakableModelEntityData {#constructor-2}

> **BreakableModelEntityData**(other: [GamePhysicsEntityData](/vext/ref/fb/gamephysicsentitydata))

Casts an instance of type [GamePhysicsEntityData](/vext/ref/fb/gamephysicsentitydata) to [BreakableModelEntityData](/vext/ref/fb/breakablemodelentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GamePhysicsEntityData](/vext/ref/fb/gamephysicsentitydata) | The instance to cast to [BreakableModelEntityData](/vext/ref/fb/breakablemodelentitydata). |

### BreakableModelEntityData {#constructor-3}

> **BreakableModelEntityData**(other: [GameEntityData](/vext/ref/fb/gameentitydata))

Casts an instance of type [GameEntityData](/vext/ref/fb/gameentitydata) to [BreakableModelEntityData](/vext/ref/fb/breakablemodelentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameEntityData](/vext/ref/fb/gameentitydata) | The instance to cast to [BreakableModelEntityData](/vext/ref/fb/breakablemodelentitydata). |

### BreakableModelEntityData {#constructor-4}

> **BreakableModelEntityData**(other: [SpatialEntityData](/vext/ref/fb/spatialentitydata))

Casts an instance of type [SpatialEntityData](/vext/ref/fb/spatialentitydata) to [BreakableModelEntityData](/vext/ref/fb/breakablemodelentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [SpatialEntityData](/vext/ref/fb/spatialentitydata) | The instance to cast to [BreakableModelEntityData](/vext/ref/fb/breakablemodelentitydata). |

### BreakableModelEntityData {#constructor-5}

> **BreakableModelEntityData**(other: [EntityData](/vext/ref/fb/entitydata))

Casts an instance of type [EntityData](/vext/ref/fb/entitydata) to [BreakableModelEntityData](/vext/ref/fb/breakablemodelentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [EntityData](/vext/ref/fb/entitydata) | The instance to cast to [BreakableModelEntityData](/vext/ref/fb/breakablemodelentitydata). |

### BreakableModelEntityData {#constructor-6}

> **BreakableModelEntityData**(other: [GameObjectData](/vext/ref/fb/gameobjectdata))

Casts an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata) to [BreakableModelEntityData](/vext/ref/fb/breakablemodelentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameObjectData](/vext/ref/fb/gameobjectdata) | The instance to cast to [BreakableModelEntityData](/vext/ref/fb/breakablemodelentitydata). |

### BreakableModelEntityData {#constructor-7}

> **BreakableModelEntityData**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer))

Casts an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer) to [BreakableModelEntityData](/vext/ref/fb/breakablemodelentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameDataContainer](/vext/ref/fb/gamedatacontainer) | The instance to cast to [BreakableModelEntityData](/vext/ref/fb/breakablemodelentitydata). |

### BreakableModelEntityData {#constructor-8}

> **BreakableModelEntityData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [BreakableModelEntityData](/vext/ref/fb/breakablemodelentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [BreakableModelEntityData](/vext/ref/fb/breakablemodelentitydata). |

## Properties

### {{% prop-heading "decalVolumeShader" %}}

> **[SurfaceShaderBaseAsset](/vext/ref/fb/surfaceshaderbaseasset)** \| **nil**

### {{% prop-heading "decalVolumeScaleFactor" %}}

> **float**

### {{% prop-heading "mesh" %}}

> **[MeshAsset](/vext/ref/fb/meshasset)** \| **nil**

### {{% prop-heading "boneCount" %}}

> **int**

### {{% prop-heading "edgeModelLightMapData" %}}

> **[EdgeModelLightMapData](/vext/ref/fb/edgemodellightmapdata)** \| **nil**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [BreakableModelEntityData](/vext/ref/fb/breakablemodelentitydata) type.

