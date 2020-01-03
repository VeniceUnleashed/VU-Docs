---
title: SpectatorReplayEntityData
---
### Base Classes

[EntityData](/vext/ref/fb/entitydata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                          | Description                                                                                                                               |
| ------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------- |
| SpectatorReplayEntityData()                                                          | Create a new instance of this container type.                                                                                             |
| SpectatorReplayEntityData(SpectatorReplayEntityData other)                           | Create a reference copy of an instance of the same type.                                                                                  |
| SpectatorReplayEntityData([EntityData](/vext/ref/fb/entitydata/) other)                            | Upcast an instance of type [EntityData](/vext/ref/fb/entitydata/) to [SpectatorReplayEntityData](/vext/ref/fb/spectatorreplayentitydata/).                            |
| SpectatorReplayEntityData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [SpectatorReplayEntityData](/vext/ref/fb/spectatorreplayentitydata/).                    |
| SpectatorReplayEntityData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [SpectatorReplayEntityData](/vext/ref/fb/spectatorreplayentitydata/).              |
| SpectatorReplayEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [SpectatorReplayEntityData](/vext/ref/fb/spectatorreplayentitydata/). |

## Methods

| Type                                                   | Name            | Parameters                                     |
| ------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [SpectatorReplayEntityData](/vext/ref/fb/spectatorreplayentitydata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [SpectatorReplayEntityData](/vext/ref/fb/spectatorreplayentitydata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
