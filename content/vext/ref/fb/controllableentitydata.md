---
title: ControllableEntityData
---
### Base Classes

[GamePhysicsEntityData](GamePhysicsEntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                       | Description                                                                                                                         |
| --------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| ControllableEntityData()                                                          | Create a new instance of this container type.                                                                                       |
| ControllableEntityData(ControllableEntityData other)                              | Create a reference copy of an instance of the same type.                                                                            |
| ControllableEntityData([GamePhysicsEntityData](GamePhysicsEntityData) other)      | Upcast an instance of type [GamePhysicsEntityData](GamePhysicsEntityData) to [ControllableEntityData](ControllableEntityData).      |
| ControllableEntityData([GameEntityData](GameEntityData) other)                    | Upcast an instance of type [GameEntityData](GameEntityData) to [ControllableEntityData](ControllableEntityData).                    |
| ControllableEntityData([SpatialEntityData](SpatialEntityData) other)              | Upcast an instance of type [SpatialEntityData](SpatialEntityData) to [ControllableEntityData](ControllableEntityData).              |
| ControllableEntityData([EntityData](EntityData) other)                            | Upcast an instance of type [EntityData](EntityData) to [ControllableEntityData](ControllableEntityData).                            |
| ControllableEntityData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [ControllableEntityData](ControllableEntityData).                    |
| ControllableEntityData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [ControllableEntityData](ControllableEntityData).              |
| ControllableEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [ControllableEntityData](ControllableEntityData). |

## Properties

| Name                       | Type                                           | Description |
| -------------------------- | ---------------------------------------------- | ----------- |
| lowHealthThreshold         | number                                         |             |
| defaultTeam                | [TeamId](TeamId)                               |             |
| materialPair               | [MaterialContainerPair](MaterialContainerPair) |             |
| resetTeamOnLastPlayerExits | bool                                           |             |
| fakeImmortal               | bool                                           |             |
| usePrediction              | bool                                           |             |
| immortal                   | bool                                           |             |
| forceForegroundRendering   | bool                                           |             |

## Methods

| Type                                             | Name            | Parameters                                     |
| ------------------------------------------------ | --------------- | ---------------------------------------------- |
| [ControllableEntityData](ControllableEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [ControllableEntityData](ControllableEntityData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
