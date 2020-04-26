---
title: Minimap2DEntityData
---

Inherits from [GameEntityData](/vext/ref/fb/gameentitydata)

## Summary

### Constructors

|  |
| --- |
| **[Minimap2DEntityData](#constructor-0)**() |
| **[Minimap2DEntityData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[Minimap2DEntityData](#constructor-2)**(other: [GameEntityData](/vext/ref/fb/gameentitydata)) |
| **[Minimap2DEntityData](#constructor-3)**(other: [SpatialEntityData](/vext/ref/fb/spatialentitydata)) |
| **[Minimap2DEntityData](#constructor-4)**(other: [EntityData](/vext/ref/fb/entitydata)) |
| **[Minimap2DEntityData](#constructor-5)**(other: [GameObjectData](/vext/ref/fb/gameobjectdata)) |
| **[Minimap2DEntityData](#constructor-6)**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer)) |
| **[Minimap2DEntityData](#constructor-7)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "cameraTransform" >}} | [Vec3](/vext/ref/shared/type/vec3) |
| {{< prop "imageHeight" >}} | int |
| {{< prop "imageWidth" >}} | int |
| {{< prop "antialiasMultiplier" >}} | int |
| {{< prop "terrainHeight" >}} | int |
| {{< prop "fov" >}} | int |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "Minimap2DEntityData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### Minimap2DEntityData {#constructor-0}

> **Minimap2DEntityData**()

Creates a new [Minimap2DEntityData](/vext/ref/fb/minimap2dentitydata) frostbite instance.

### Minimap2DEntityData {#constructor-1}

> **Minimap2DEntityData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [Minimap2DEntityData](/vext/ref/fb/minimap2dentitydata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### Minimap2DEntityData {#constructor-2}

> **Minimap2DEntityData**(other: [GameEntityData](/vext/ref/fb/gameentitydata))

Casts an instance of type [GameEntityData](/vext/ref/fb/gameentitydata) to [Minimap2DEntityData](/vext/ref/fb/minimap2dentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameEntityData](/vext/ref/fb/gameentitydata) | The instance to cast to [Minimap2DEntityData](/vext/ref/fb/minimap2dentitydata). |

### Minimap2DEntityData {#constructor-3}

> **Minimap2DEntityData**(other: [SpatialEntityData](/vext/ref/fb/spatialentitydata))

Casts an instance of type [SpatialEntityData](/vext/ref/fb/spatialentitydata) to [Minimap2DEntityData](/vext/ref/fb/minimap2dentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [SpatialEntityData](/vext/ref/fb/spatialentitydata) | The instance to cast to [Minimap2DEntityData](/vext/ref/fb/minimap2dentitydata). |

### Minimap2DEntityData {#constructor-4}

> **Minimap2DEntityData**(other: [EntityData](/vext/ref/fb/entitydata))

Casts an instance of type [EntityData](/vext/ref/fb/entitydata) to [Minimap2DEntityData](/vext/ref/fb/minimap2dentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [EntityData](/vext/ref/fb/entitydata) | The instance to cast to [Minimap2DEntityData](/vext/ref/fb/minimap2dentitydata). |

### Minimap2DEntityData {#constructor-5}

> **Minimap2DEntityData**(other: [GameObjectData](/vext/ref/fb/gameobjectdata))

Casts an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata) to [Minimap2DEntityData](/vext/ref/fb/minimap2dentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameObjectData](/vext/ref/fb/gameobjectdata) | The instance to cast to [Minimap2DEntityData](/vext/ref/fb/minimap2dentitydata). |

### Minimap2DEntityData {#constructor-6}

> **Minimap2DEntityData**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer))

Casts an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer) to [Minimap2DEntityData](/vext/ref/fb/minimap2dentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameDataContainer](/vext/ref/fb/gamedatacontainer) | The instance to cast to [Minimap2DEntityData](/vext/ref/fb/minimap2dentitydata). |

### Minimap2DEntityData {#constructor-7}

> **Minimap2DEntityData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [Minimap2DEntityData](/vext/ref/fb/minimap2dentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [Minimap2DEntityData](/vext/ref/fb/minimap2dentitydata). |

## Properties

### {{% prop-heading "cameraTransform" %}}

> **[Vec3](/vext/ref/shared/type/vec3)**

### {{% prop-heading "imageHeight" %}}

> **int**

### {{% prop-heading "imageWidth" %}}

> **int**

### {{% prop-heading "antialiasMultiplier" %}}

> **int**

### {{% prop-heading "terrainHeight" %}}

> **int**

### {{% prop-heading "fov" %}}

> **int**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [Minimap2DEntityData](/vext/ref/fb/minimap2dentitydata) type.

