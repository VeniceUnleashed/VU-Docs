---
title: FollowClosestHumanOrderEntityData
---
### Base Classes

[FollowPlayerOrderEntityData](/vext/ref/fb/followplayerorderentitydata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                                         | Description                                                                                                                                                      |
| --------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| FollowClosestHumanOrderEntityData()                                                                 | Create a new instance of this container type.                                                                                                                    |
| FollowClosestHumanOrderEntityData(FollowClosestHumanOrderEntityData other)                          | Create a reference copy of an instance of the same type.                                                                                                         |
| FollowClosestHumanOrderEntityData([FollowPlayerOrderEntityData](/vext/ref/fb/followplayerorderentitydata/) other) | Upcast an instance of type [FollowPlayerOrderEntityData](/vext/ref/fb/followplayerorderentitydata/) to [FollowClosestHumanOrderEntityData](/vext/ref/fb/followclosesthumanorderentitydata/). |
| FollowClosestHumanOrderEntityData([BFOrderEntityData](/vext/ref/fb/bforderentitydata/) other)                     | Upcast an instance of type [BFOrderEntityData](/vext/ref/fb/bforderentitydata/) to [FollowClosestHumanOrderEntityData](/vext/ref/fb/followclosesthumanorderentitydata/).                     |
| FollowClosestHumanOrderEntityData([OrderEntityData](/vext/ref/fb/orderentitydata/) other)                         | Upcast an instance of type [OrderEntityData](/vext/ref/fb/orderentitydata/) to [FollowClosestHumanOrderEntityData](/vext/ref/fb/followclosesthumanorderentitydata/).                         |
| FollowClosestHumanOrderEntityData([EntityData](/vext/ref/fb/entitydata/) other)                                   | Upcast an instance of type [EntityData](/vext/ref/fb/entitydata/) to [FollowClosestHumanOrderEntityData](/vext/ref/fb/followclosesthumanorderentitydata/).                                   |
| FollowClosestHumanOrderEntityData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                           | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [FollowClosestHumanOrderEntityData](/vext/ref/fb/followclosesthumanorderentitydata/).                           |
| FollowClosestHumanOrderEntityData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)                     | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [FollowClosestHumanOrderEntityData](/vext/ref/fb/followclosesthumanorderentitydata/).                     |
| FollowClosestHumanOrderEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other)        | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [FollowClosestHumanOrderEntityData](/vext/ref/fb/followclosesthumanorderentitydata/).        |

## Methods

| Type                                                                   | Name            | Parameters                                     |
| ---------------------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [FollowClosestHumanOrderEntityData](/vext/ref/fb/followclosesthumanorderentitydata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [FollowClosestHumanOrderEntityData](/vext/ref/fb/followclosesthumanorderentitydata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
