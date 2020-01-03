---
title: PlayerFilterEntityData
---
### Base Classes

[EntityData](/vext/ref/fb/entitydata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                       | Description                                                                                                                         |
| --------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| PlayerFilterEntityData()                                                          | Create a new instance of this container type.                                                                                       |
| PlayerFilterEntityData(PlayerFilterEntityData other)                              | Create a reference copy of an instance of the same type.                                                                            |
| PlayerFilterEntityData([EntityData](/vext/ref/fb/entitydata/) other)                            | Upcast an instance of type [EntityData](/vext/ref/fb/entitydata/) to [PlayerFilterEntityData](/vext/ref/fb/playerfilterentitydata/).                            |
| PlayerFilterEntityData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [PlayerFilterEntityData](/vext/ref/fb/playerfilterentitydata/).                    |
| PlayerFilterEntityData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [PlayerFilterEntityData](/vext/ref/fb/playerfilterentitydata/).              |
| PlayerFilterEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [PlayerFilterEntityData](/vext/ref/fb/playerfilterentitydata/). |

## Properties

| Name                | Type           | Description |
| ------------------- | -------------- | ----------- |
| realm               | [Realm](/vext/ref/fb/realm/) |             |
| invertFilter        | bool           |             |
| forwardToSpectators | bool           |             |

## Methods

| Type                                             | Name            | Parameters                                     |
| ------------------------------------------------ | --------------- | ---------------------------------------------- |
| [PlayerFilterEntityData](/vext/ref/fb/playerfilterentitydata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [PlayerFilterEntityData](/vext/ref/fb/playerfilterentitydata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
