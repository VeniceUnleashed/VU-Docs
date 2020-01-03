---
title: FollowPlayerOrderEntityData
---
### Base Classes

[BFOrderEntityData](/vext/ref/fb/bforderentitydata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                            | Description                                                                                                                                   |
| -------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| FollowPlayerOrderEntityData()                                                          | Create a new instance of this container type.                                                                                                 |
| FollowPlayerOrderEntityData(FollowPlayerOrderEntityData other)                         | Create a reference copy of an instance of the same type.                                                                                      |
| FollowPlayerOrderEntityData([BFOrderEntityData](/vext/ref/fb/bforderentitydata/) other)              | Upcast an instance of type [BFOrderEntityData](/vext/ref/fb/bforderentitydata/) to [FollowPlayerOrderEntityData](/vext/ref/fb/followplayerorderentitydata/).              |
| FollowPlayerOrderEntityData([OrderEntityData](/vext/ref/fb/orderentitydata/) other)                  | Upcast an instance of type [OrderEntityData](/vext/ref/fb/orderentitydata/) to [FollowPlayerOrderEntityData](/vext/ref/fb/followplayerorderentitydata/).                  |
| FollowPlayerOrderEntityData([EntityData](/vext/ref/fb/entitydata/) other)                            | Upcast an instance of type [EntityData](/vext/ref/fb/entitydata/) to [FollowPlayerOrderEntityData](/vext/ref/fb/followplayerorderentitydata/).                            |
| FollowPlayerOrderEntityData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [FollowPlayerOrderEntityData](/vext/ref/fb/followplayerorderentitydata/).                    |
| FollowPlayerOrderEntityData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [FollowPlayerOrderEntityData](/vext/ref/fb/followplayerorderentitydata/).              |
| FollowPlayerOrderEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [FollowPlayerOrderEntityData](/vext/ref/fb/followplayerorderentitydata/). |

## Properties

| Name            | Type                           | Description |
| --------------- | ------------------------------ | ----------- |
| formation       | [FormationData](/vext/ref/fb/formationdata/) |             |
| combatForbidden | bool                           |             |

## Methods

| Type                                                       | Name            | Parameters                                     |
| ---------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [FollowPlayerOrderEntityData](/vext/ref/fb/followplayerorderentitydata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [FollowPlayerOrderEntityData](/vext/ref/fb/followplayerorderentitydata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
