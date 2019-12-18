---
title: PlayerTakeOverTriggerEntityData (Frostbite Container)
---
### Base Classes

[GameEntityData](GameEntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                                | Description                                                                                                                                           |
| ------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| PlayerTakeOverTriggerEntityData()                                                          | Create a new instance of this container type.                                                                                                         |
| PlayerTakeOverTriggerEntityData(PlayerTakeOverTriggerEntityData other)                     | Create a reference copy of an instance of the same type.                                                                                              |
| PlayerTakeOverTriggerEntityData([GameEntityData](GameEntityData) other)                    | Upcast an instance of type [GameEntityData](GameEntityData) to [PlayerTakeOverTriggerEntityData](PlayerTakeOverTriggerEntityData).                    |
| PlayerTakeOverTriggerEntityData([SpatialEntityData](SpatialEntityData) other)              | Upcast an instance of type [SpatialEntityData](SpatialEntityData) to [PlayerTakeOverTriggerEntityData](PlayerTakeOverTriggerEntityData).              |
| PlayerTakeOverTriggerEntityData([EntityData](EntityData) other)                            | Upcast an instance of type [EntityData](EntityData) to [PlayerTakeOverTriggerEntityData](PlayerTakeOverTriggerEntityData).                            |
| PlayerTakeOverTriggerEntityData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [PlayerTakeOverTriggerEntityData](PlayerTakeOverTriggerEntityData).                    |
| PlayerTakeOverTriggerEntityData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [PlayerTakeOverTriggerEntityData](PlayerTakeOverTriggerEntityData).              |
| PlayerTakeOverTriggerEntityData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [PlayerTakeOverTriggerEntityData](PlayerTakeOverTriggerEntityData). |

## Properties

| Name              | Type             | Description |
| ----------------- | ---------------- | ----------- |
| teamId            | [TeamId](TeamId) |             |
| timeToLoseControl | number           |             |

## Methods

| Type                                                               | Name            | Parameters                                     |
| ------------------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [PlayerTakeOverTriggerEntityData](PlayerTakeOverTriggerEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [PlayerTakeOverTriggerEntityData](PlayerTakeOverTriggerEntityData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
