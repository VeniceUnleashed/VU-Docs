---
title: SpectatorReplayEntityData
---
### Base Classes

[EntityData](EntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                          | Description                                                                                                                               |
| ------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------- |
| SpectatorReplayEntityData()                                                          | Create a new instance of this container type.                                                                                             |
| SpectatorReplayEntityData(SpectatorReplayEntityData other)                           | Create a reference copy of an instance of the same type.                                                                                  |
| SpectatorReplayEntityData([EntityData](EntityData) other)                            | Upcast an instance of type [EntityData](EntityData) to [SpectatorReplayEntityData](SpectatorReplayEntityData).                            |
| SpectatorReplayEntityData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [SpectatorReplayEntityData](SpectatorReplayEntityData).                    |
| SpectatorReplayEntityData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [SpectatorReplayEntityData](SpectatorReplayEntityData).              |
| SpectatorReplayEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [SpectatorReplayEntityData](SpectatorReplayEntityData). |

## Methods

| Type                                                   | Name            | Parameters                                     |
| ------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [SpectatorReplayEntityData](SpectatorReplayEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [SpectatorReplayEntityData](SpectatorReplayEntityData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
