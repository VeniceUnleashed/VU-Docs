---
title: FriendZoneEntityData
---
### Base Classes

[EntityData](/vext/ref/fb/entitydata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                     | Description                                                                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| FriendZoneEntityData()                                                          | Create a new instance of this container type.                                                                                   |
| FriendZoneEntityData(FriendZoneEntityData other)                                | Create a reference copy of an instance of the same type.                                                                        |
| FriendZoneEntityData([EntityData](/vext/ref/fb/entitydata/) other)                            | Upcast an instance of type [EntityData](/vext/ref/fb/entitydata/) to [FriendZoneEntityData](/vext/ref/fb/friendzoneentitydata/).                            |
| FriendZoneEntityData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [FriendZoneEntityData](/vext/ref/fb/friendzoneentitydata/).                    |
| FriendZoneEntityData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [FriendZoneEntityData](/vext/ref/fb/friendzoneentitydata/).              |
| FriendZoneEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [FriendZoneEntityData](/vext/ref/fb/friendzoneentitydata/). |

## Properties

| Name                    | Type   | Description |
| ----------------------- | ------ | ----------- |
| enemyWeight             | number |             |
| friendlyWeight          | number |             |
| corpsTimeout            | number |             |
| corpsWeight             | number |             |
| countCorpsesForAllTeams | bool   |             |
| initialZoneRandomized   | bool   |             |

## Methods

| Type                                         | Name            | Parameters                                     |
| -------------------------------------------- | --------------- | ---------------------------------------------- |
| [FriendZoneEntityData](/vext/ref/fb/friendzoneentitydata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [FriendZoneEntityData](/vext/ref/fb/friendzoneentitydata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
