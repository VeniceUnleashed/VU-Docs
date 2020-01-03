---
title: VeniceExplosionEntityData
---
### Base Classes

[ExplosionEntityData](ExplosionEntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                          | Description                                                                                                                               |
| ------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------- |
| VeniceExplosionEntityData()                                                          | Create a new instance of this container type.                                                                                             |
| VeniceExplosionEntityData(VeniceExplosionEntityData other)                           | Create a reference copy of an instance of the same type.                                                                                  |
| VeniceExplosionEntityData([ExplosionEntityData](ExplosionEntityData) other)          | Upcast an instance of type [ExplosionEntityData](ExplosionEntityData) to [VeniceExplosionEntityData](VeniceExplosionEntityData).          |
| VeniceExplosionEntityData([GameEntityData](GameEntityData) other)                    | Upcast an instance of type [GameEntityData](GameEntityData) to [VeniceExplosionEntityData](VeniceExplosionEntityData).                    |
| VeniceExplosionEntityData([SpatialEntityData](SpatialEntityData) other)              | Upcast an instance of type [SpatialEntityData](SpatialEntityData) to [VeniceExplosionEntityData](VeniceExplosionEntityData).              |
| VeniceExplosionEntityData([EntityData](EntityData) other)                            | Upcast an instance of type [EntityData](EntityData) to [VeniceExplosionEntityData](VeniceExplosionEntityData).                            |
| VeniceExplosionEntityData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [VeniceExplosionEntityData](VeniceExplosionEntityData).                    |
| VeniceExplosionEntityData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [VeniceExplosionEntityData](VeniceExplosionEntityData).              |
| VeniceExplosionEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [VeniceExplosionEntityData](VeniceExplosionEntityData). |

## Properties

| Name                 | Type   | Description |
| -------------------- | ------ | ----------- |
| unspottableTime      | number |             |
| unspotsOnExplode     | bool   |             |
| spotsOnExplode       | bool   |             |
| isCausingSuppression | bool   |             |

## Methods

| Type                                                   | Name            | Parameters                                     |
| ------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [VeniceExplosionEntityData](VeniceExplosionEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [VeniceExplosionEntityData](VeniceExplosionEntityData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
