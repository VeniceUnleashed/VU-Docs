---
title: DestroyLevelCommandEntityData (Frostbite Container)
---
### Base Classes

[GameEntityData](GameEntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                              | Description                                                                                                                                       |
| ---------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| DestroyLevelCommandEntityData()                                                          | Create a new instance of this container type.                                                                                                     |
| DestroyLevelCommandEntityData(DestroyLevelCommandEntityData other)                       | Create a reference copy of an instance of the same type.                                                                                          |
| DestroyLevelCommandEntityData([GameEntityData](GameEntityData) other)                    | Upcast an instance of type [GameEntityData](GameEntityData) to [DestroyLevelCommandEntityData](DestroyLevelCommandEntityData).                    |
| DestroyLevelCommandEntityData([SpatialEntityData](SpatialEntityData) other)              | Upcast an instance of type [SpatialEntityData](SpatialEntityData) to [DestroyLevelCommandEntityData](DestroyLevelCommandEntityData).              |
| DestroyLevelCommandEntityData([EntityData](EntityData) other)                            | Upcast an instance of type [EntityData](EntityData) to [DestroyLevelCommandEntityData](DestroyLevelCommandEntityData).                            |
| DestroyLevelCommandEntityData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [DestroyLevelCommandEntityData](DestroyLevelCommandEntityData).                    |
| DestroyLevelCommandEntityData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [DestroyLevelCommandEntityData](DestroyLevelCommandEntityData).              |
| DestroyLevelCommandEntityData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [DestroyLevelCommandEntityData](DestroyLevelCommandEntityData). |

## Properties

| Name                           | Type   | Description |
| ------------------------------ | ------ | ----------- |
| instanceCountDestroyedPerFrame | number |             |
| destroyDelay                   | number |             |

## Methods

| Type                                                           | Name            | Parameters                                     |
| -------------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [DestroyLevelCommandEntityData](DestroyLevelCommandEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [DestroyLevelCommandEntityData](DestroyLevelCommandEntityData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
