---
title: FollowAISoldierOrderEntityData
---
### Base Classes

[FollowPlayerOrderEntityData](/vext/ref/fb/followplayerorderentitydata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                                      | Description                                                                                                                                                |
| ------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| FollowAISoldierOrderEntityData()                                                                 | Create a new instance of this container type.                                                                                                              |
| FollowAISoldierOrderEntityData(FollowAISoldierOrderEntityData other)                             | Create a reference copy of an instance of the same type.                                                                                                   |
| FollowAISoldierOrderEntityData([FollowPlayerOrderEntityData](/vext/ref/fb/followplayerorderentitydata/) other) | Upcast an instance of type [FollowPlayerOrderEntityData](/vext/ref/fb/followplayerorderentitydata/) to [FollowAISoldierOrderEntityData](/vext/ref/fb/followaisoldierorderentitydata/). |
| FollowAISoldierOrderEntityData([BFOrderEntityData](/vext/ref/fb/bforderentitydata/) other)                     | Upcast an instance of type [BFOrderEntityData](/vext/ref/fb/bforderentitydata/) to [FollowAISoldierOrderEntityData](/vext/ref/fb/followaisoldierorderentitydata/).                     |
| FollowAISoldierOrderEntityData([OrderEntityData](/vext/ref/fb/orderentitydata/) other)                         | Upcast an instance of type [OrderEntityData](/vext/ref/fb/orderentitydata/) to [FollowAISoldierOrderEntityData](/vext/ref/fb/followaisoldierorderentitydata/).                         |
| FollowAISoldierOrderEntityData([EntityData](/vext/ref/fb/entitydata/) other)                                   | Upcast an instance of type [EntityData](/vext/ref/fb/entitydata/) to [FollowAISoldierOrderEntityData](/vext/ref/fb/followaisoldierorderentitydata/).                                   |
| FollowAISoldierOrderEntityData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                           | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [FollowAISoldierOrderEntityData](/vext/ref/fb/followaisoldierorderentitydata/).                           |
| FollowAISoldierOrderEntityData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)                     | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [FollowAISoldierOrderEntityData](/vext/ref/fb/followaisoldierorderentitydata/).                     |
| FollowAISoldierOrderEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other)        | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [FollowAISoldierOrderEntityData](/vext/ref/fb/followaisoldierorderentitydata/).        |

## Methods

| Type                                                             | Name            | Parameters                                     |
| ---------------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [FollowAISoldierOrderEntityData](/vext/ref/fb/followaisoldierorderentitydata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [FollowAISoldierOrderEntityData](/vext/ref/fb/followaisoldierorderentitydata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
