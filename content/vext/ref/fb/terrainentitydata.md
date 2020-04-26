---
title: TerrainEntityData
---

Inherits from 
[GamePhysicsEntityData](/vext/ref/fb/gamephysicsentitydata)

## Summary
### Constructors
| |
| ----------- |
| **[TerrainEntityData](#constructor-0)**() |
| **[TerrainEntityData](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[TerrainEntityData](#constructor-2)**(other: [GamePhysicsEntityData](/vext/ref/fb/gamephysicsentitydata)) |
| **[TerrainEntityData](#constructor-3)**(other: [GameEntityData](/vext/ref/fb/gameentitydata)) |
| **[TerrainEntityData](#constructor-4)**(other: [SpatialEntityData](/vext/ref/fb/spatialentitydata)) |
| **[TerrainEntityData](#constructor-5)**(other: [EntityData](/vext/ref/fb/entitydata)) |
| **[TerrainEntityData](#constructor-6)**(other: [GameObjectData](/vext/ref/fb/gameobjectdata)) |
| **[TerrainEntityData](#constructor-7)**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer)) |
| **[TerrainEntityData](#constructor-8)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "terrainAsset" >}} | [TerrainData](/vext/ref/fb/terraindata) \| nil |
| {{< prop "waterMaterial" >}} | [MaterialContainerPair](/vext/ref/fb/materialcontainerpair) \| nil |
| {{< prop "visible" >}} | bool |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "TerrainEntityData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### TerrainEntityData {#constructor-0}
> **TerrainEntityData**()

Creates a new [TerrainEntityData](/vext/ref/fb/terrainentitydata) frostbite instance.

### TerrainEntityData {#constructor-1}
> **TerrainEntityData**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [TerrainEntityData](/vext/ref/fb/terrainentitydata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### TerrainEntityData {#constructor-2}
> **TerrainEntityData**(other: [GamePhysicsEntityData](/vext/ref/fb/gamephysicsentitydata))

Casts an instance of type [GamePhysicsEntityData](/vext/ref/fb/gamephysicsentitydata) to [TerrainEntityData](/vext/ref/fb/terrainentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GamePhysicsEntityData](/vext/ref/fb/gamephysicsentitydata) | The instance to cast to [TerrainEntityData](/vext/ref/fb/terrainentitydata). |

### TerrainEntityData {#constructor-3}
> **TerrainEntityData**(other: [GameEntityData](/vext/ref/fb/gameentitydata))

Casts an instance of type [GameEntityData](/vext/ref/fb/gameentitydata) to [TerrainEntityData](/vext/ref/fb/terrainentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameEntityData](/vext/ref/fb/gameentitydata) | The instance to cast to [TerrainEntityData](/vext/ref/fb/terrainentitydata). |

### TerrainEntityData {#constructor-4}
> **TerrainEntityData**(other: [SpatialEntityData](/vext/ref/fb/spatialentitydata))

Casts an instance of type [SpatialEntityData](/vext/ref/fb/spatialentitydata) to [TerrainEntityData](/vext/ref/fb/terrainentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [SpatialEntityData](/vext/ref/fb/spatialentitydata) | The instance to cast to [TerrainEntityData](/vext/ref/fb/terrainentitydata). |

### TerrainEntityData {#constructor-5}
> **TerrainEntityData**(other: [EntityData](/vext/ref/fb/entitydata))

Casts an instance of type [EntityData](/vext/ref/fb/entitydata) to [TerrainEntityData](/vext/ref/fb/terrainentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [EntityData](/vext/ref/fb/entitydata) | The instance to cast to [TerrainEntityData](/vext/ref/fb/terrainentitydata). |

### TerrainEntityData {#constructor-6}
> **TerrainEntityData**(other: [GameObjectData](/vext/ref/fb/gameobjectdata))

Casts an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata) to [TerrainEntityData](/vext/ref/fb/terrainentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameObjectData](/vext/ref/fb/gameobjectdata) | The instance to cast to [TerrainEntityData](/vext/ref/fb/terrainentitydata). |

### TerrainEntityData {#constructor-7}
> **TerrainEntityData**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer))

Casts an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer) to [TerrainEntityData](/vext/ref/fb/terrainentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameDataContainer](/vext/ref/fb/gamedatacontainer) | The instance to cast to [TerrainEntityData](/vext/ref/fb/terrainentitydata). |

### TerrainEntityData {#constructor-8}
> **TerrainEntityData**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [TerrainEntityData](/vext/ref/fb/terrainentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [TerrainEntityData](/vext/ref/fb/terrainentitydata). |

## Properties
### {{% prop-heading "terrainAsset" %}}
> **[TerrainData](/vext/ref/fb/terraindata)** | **nil**

### {{% prop-heading "waterMaterial" %}}
> **[MaterialContainerPair](/vext/ref/fb/materialcontainerpair)** | **nil**

### {{% prop-heading "visible" %}}
> **bool**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [TerrainEntityData](/vext/ref/fb/terrainentitydata) type.

