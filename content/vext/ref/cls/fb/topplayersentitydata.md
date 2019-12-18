---
title: TopPlayersEntityData (Frostbite Container)
---
### Base Classes

[EntityData](EntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                     | Description                                                                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| TopPlayersEntityData()                                                          | Create a new instance of this container type.                                                                                   |
| TopPlayersEntityData(TopPlayersEntityData other)                                | Create a reference copy of an instance of the same type.                                                                        |
| TopPlayersEntityData([EntityData](EntityData) other)                            | Upcast an instance of type [EntityData](EntityData) to [TopPlayersEntityData](TopPlayersEntityData).                            |
| TopPlayersEntityData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [TopPlayersEntityData](TopPlayersEntityData).                    |
| TopPlayersEntityData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [TopPlayersEntityData](TopPlayersEntityData).              |
| TopPlayersEntityData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [TopPlayersEntityData](TopPlayersEntityData). |

## Methods

| Type                                         | Name            | Parameters                                     |
| -------------------------------------------- | --------------- | ---------------------------------------------- |
| [TopPlayersEntityData](TopPlayersEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [TopPlayersEntityData](TopPlayersEntityData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
