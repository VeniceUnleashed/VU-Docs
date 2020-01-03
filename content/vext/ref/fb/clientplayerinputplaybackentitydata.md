---
title: ClientPlayerInputPlaybackEntityData
---
### Base Classes

[EntityData](/vext/ref/fb/entitydata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                                    | Description                                                                                                                                                   |
| ---------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ClientPlayerInputPlaybackEntityData()                                                          | Create a new instance of this container type.                                                                                                                 |
| ClientPlayerInputPlaybackEntityData(ClientPlayerInputPlaybackEntityData other)                 | Create a reference copy of an instance of the same type.                                                                                                      |
| ClientPlayerInputPlaybackEntityData([EntityData](/vext/ref/fb/entitydata/) other)                            | Upcast an instance of type [EntityData](/vext/ref/fb/entitydata/) to [ClientPlayerInputPlaybackEntityData](/vext/ref/fb/clientplayerinputplaybackentitydata/).                            |
| ClientPlayerInputPlaybackEntityData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [ClientPlayerInputPlaybackEntityData](/vext/ref/fb/clientplayerinputplaybackentitydata/).                    |
| ClientPlayerInputPlaybackEntityData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [ClientPlayerInputPlaybackEntityData](/vext/ref/fb/clientplayerinputplaybackentitydata/).              |
| ClientPlayerInputPlaybackEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [ClientPlayerInputPlaybackEntityData](/vext/ref/fb/clientplayerinputplaybackentitydata/). |

## Properties

| Name     | Type           | Description |
| -------- | -------------- | ----------- |
| realm    | [Realm](/vext/ref/fb/realm/) |             |
| fileName | string         |             |

## Methods

| Type                                                                       | Name            | Parameters                                     |
| -------------------------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [ClientPlayerInputPlaybackEntityData](/vext/ref/fb/clientplayerinputplaybackentitydata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [ClientPlayerInputPlaybackEntityData](/vext/ref/fb/clientplayerinputplaybackentitydata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
