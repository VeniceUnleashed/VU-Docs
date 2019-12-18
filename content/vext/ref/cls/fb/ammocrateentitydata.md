---
title: AmmoCrateEntityData (Frostbite Container)
---
### Base Classes

[GameEntityData](GameEntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                    | Description                                                                                                                   |
| ------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| AmmoCrateEntityData()                                                          | Create a new instance of this container type.                                                                                 |
| AmmoCrateEntityData(AmmoCrateEntityData other)                                 | Create a reference copy of an instance of the same type.                                                                      |
| AmmoCrateEntityData([GameEntityData](GameEntityData) other)                    | Upcast an instance of type [GameEntityData](GameEntityData) to [AmmoCrateEntityData](AmmoCrateEntityData).                    |
| AmmoCrateEntityData([SpatialEntityData](SpatialEntityData) other)              | Upcast an instance of type [SpatialEntityData](SpatialEntityData) to [AmmoCrateEntityData](AmmoCrateEntityData).              |
| AmmoCrateEntityData([EntityData](EntityData) other)                            | Upcast an instance of type [EntityData](EntityData) to [AmmoCrateEntityData](AmmoCrateEntityData).                            |
| AmmoCrateEntityData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [AmmoCrateEntityData](AmmoCrateEntityData).                    |
| AmmoCrateEntityData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [AmmoCrateEntityData](AmmoCrateEntityData).              |
| AmmoCrateEntityData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [AmmoCrateEntityData](AmmoCrateEntityData). |

## Properties

| Name            | Type                                           | Description |
| --------------- | ---------------------------------------------- | ----------- |
| marker          | [MapMarkerEntityData](MapMarkerEntityData)     |             |
| model           | [StaticModelEntityData](StaticModelEntityData) |             |
| refillDelay     | number                                         |             |
| radius          | number                                         |             |
| enableReplenish | bool                                           |             |

## Methods

| Type                                       | Name            | Parameters                                     |
| ------------------------------------------ | --------------- | ---------------------------------------------- |
| [AmmoCrateEntityData](AmmoCrateEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [AmmoCrateEntityData](AmmoCrateEntityData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
