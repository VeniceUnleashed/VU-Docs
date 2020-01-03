---
title: KyotoPlayerAliveFilterEntityData
---
### Base Classes

[EntityData](/vext/ref/fb/entitydata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                                 | Description                                                                                                                                             |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| KyotoPlayerAliveFilterEntityData()                                                          | Create a new instance of this container type.                                                                                                           |
| KyotoPlayerAliveFilterEntityData(KyotoPlayerAliveFilterEntityData other)                    | Create a reference copy of an instance of the same type.                                                                                                |
| KyotoPlayerAliveFilterEntityData([EntityData](/vext/ref/fb/entitydata/) other)                            | Upcast an instance of type [EntityData](/vext/ref/fb/entitydata/) to [KyotoPlayerAliveFilterEntityData](/vext/ref/fb/kyotoplayeralivefilterentitydata/).                            |
| KyotoPlayerAliveFilterEntityData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [KyotoPlayerAliveFilterEntityData](/vext/ref/fb/kyotoplayeralivefilterentitydata/).                    |
| KyotoPlayerAliveFilterEntityData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [KyotoPlayerAliveFilterEntityData](/vext/ref/fb/kyotoplayeralivefilterentitydata/).              |
| KyotoPlayerAliveFilterEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [KyotoPlayerAliveFilterEntityData](/vext/ref/fb/kyotoplayeralivefilterentitydata/). |

## Methods

| Type                                                                 | Name            | Parameters                                     |
| -------------------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [KyotoPlayerAliveFilterEntityData](/vext/ref/fb/kyotoplayeralivefilterentitydata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [KyotoPlayerAliveFilterEntityData](/vext/ref/fb/kyotoplayeralivefilterentitydata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
