---
title: HoldGroundOrderEntityData
---
### Base Classes

[BFOrderEntityData](/vext/ref/fb/bforderentitydata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                          | Description                                                                                                                               |
| ------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------- |
| HoldGroundOrderEntityData()                                                          | Create a new instance of this container type.                                                                                             |
| HoldGroundOrderEntityData(HoldGroundOrderEntityData other)                           | Create a reference copy of an instance of the same type.                                                                                  |
| HoldGroundOrderEntityData([BFOrderEntityData](/vext/ref/fb/bforderentitydata/) other)              | Upcast an instance of type [BFOrderEntityData](/vext/ref/fb/bforderentitydata/) to [HoldGroundOrderEntityData](/vext/ref/fb/holdgroundorderentitydata/).              |
| HoldGroundOrderEntityData([OrderEntityData](/vext/ref/fb/orderentitydata/) other)                  | Upcast an instance of type [OrderEntityData](/vext/ref/fb/orderentitydata/) to [HoldGroundOrderEntityData](/vext/ref/fb/holdgroundorderentitydata/).                  |
| HoldGroundOrderEntityData([EntityData](/vext/ref/fb/entitydata/) other)                            | Upcast an instance of type [EntityData](/vext/ref/fb/entitydata/) to [HoldGroundOrderEntityData](/vext/ref/fb/holdgroundorderentitydata/).                            |
| HoldGroundOrderEntityData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [HoldGroundOrderEntityData](/vext/ref/fb/holdgroundorderentitydata/).                    |
| HoldGroundOrderEntityData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [HoldGroundOrderEntityData](/vext/ref/fb/holdgroundorderentitydata/).              |
| HoldGroundOrderEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [HoldGroundOrderEntityData](/vext/ref/fb/holdgroundorderentitydata/). |

## Methods

| Type                                                   | Name            | Parameters                                     |
| ------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [HoldGroundOrderEntityData](/vext/ref/fb/holdgroundorderentitydata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [HoldGroundOrderEntityData](/vext/ref/fb/holdgroundorderentitydata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
