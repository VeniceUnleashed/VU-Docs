---
title: CoopLobbyEntityData (Frostbite Container)
---
### Base Classes

[GameEntityData](GameEntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                    | Description                                                                                                                   |
| ------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| CoopLobbyEntityData()                                                          | Create a new instance of this container type.                                                                                 |
| CoopLobbyEntityData(CoopLobbyEntityData other)                                 | Create a reference copy of an instance of the same type.                                                                      |
| CoopLobbyEntityData([GameEntityData](GameEntityData) other)                    | Upcast an instance of type [GameEntityData](GameEntityData) to [CoopLobbyEntityData](CoopLobbyEntityData).                    |
| CoopLobbyEntityData([SpatialEntityData](SpatialEntityData) other)              | Upcast an instance of type [SpatialEntityData](SpatialEntityData) to [CoopLobbyEntityData](CoopLobbyEntityData).              |
| CoopLobbyEntityData([EntityData](EntityData) other)                            | Upcast an instance of type [EntityData](EntityData) to [CoopLobbyEntityData](CoopLobbyEntityData).                            |
| CoopLobbyEntityData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [CoopLobbyEntityData](CoopLobbyEntityData).                    |
| CoopLobbyEntityData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [CoopLobbyEntityData](CoopLobbyEntityData).              |
| CoopLobbyEntityData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [CoopLobbyEntityData](CoopLobbyEntityData). |

## Properties

| Name                    | Type   | Description |
| ----------------------- | ------ | ----------- |
| clientConnectionTimeout | number |             |
| isInGame                | bool   |             |

## Methods

| Type                                       | Name            | Parameters                                     |
| ------------------------------------------ | --------------- | ---------------------------------------------- |
| [CoopLobbyEntityData](CoopLobbyEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [CoopLobbyEntityData](CoopLobbyEntityData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
