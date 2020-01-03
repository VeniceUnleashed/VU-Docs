---
title: RoundOverEntityData
---
### Base Classes

[EntityData](/vext/ref/fb/entitydata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                    | Description                                                                                                                   |
| ------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| RoundOverEntityData()                                                          | Create a new instance of this container type.                                                                                 |
| RoundOverEntityData(RoundOverEntityData other)                                 | Create a reference copy of an instance of the same type.                                                                      |
| RoundOverEntityData([EntityData](/vext/ref/fb/entitydata/) other)                            | Upcast an instance of type [EntityData](/vext/ref/fb/entitydata/) to [RoundOverEntityData](/vext/ref/fb/roundoverentitydata/).                            |
| RoundOverEntityData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [RoundOverEntityData](/vext/ref/fb/roundoverentitydata/).                    |
| RoundOverEntityData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [RoundOverEntityData](/vext/ref/fb/roundoverentitydata/).              |
| RoundOverEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [RoundOverEntityData](/vext/ref/fb/roundoverentitydata/). |

## Properties

| Name | Type             | Description |
| ---- | ---------------- | ----------- |
| team | [TeamId](/vext/ref/fb/teamid/) |             |

## Methods

| Type                                       | Name            | Parameters                                     |
| ------------------------------------------ | --------------- | ---------------------------------------------- |
| [RoundOverEntityData](/vext/ref/fb/roundoverentitydata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [RoundOverEntityData](/vext/ref/fb/roundoverentitydata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
