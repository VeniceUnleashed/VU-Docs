---
title: CancelOrderEntityData
---
### Base Classes

[BFOrderEntityData](/vext/ref/fb/bforderentitydata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                      | Description                                                                                                                       |
| -------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| CancelOrderEntityData()                                                          | Create a new instance of this container type.                                                                                     |
| CancelOrderEntityData(CancelOrderEntityData other)                               | Create a reference copy of an instance of the same type.                                                                          |
| CancelOrderEntityData([BFOrderEntityData](/vext/ref/fb/bforderentitydata/) other)              | Upcast an instance of type [BFOrderEntityData](/vext/ref/fb/bforderentitydata/) to [CancelOrderEntityData](/vext/ref/fb/cancelorderentitydata/).              |
| CancelOrderEntityData([OrderEntityData](/vext/ref/fb/orderentitydata/) other)                  | Upcast an instance of type [OrderEntityData](/vext/ref/fb/orderentitydata/) to [CancelOrderEntityData](/vext/ref/fb/cancelorderentitydata/).                  |
| CancelOrderEntityData([EntityData](/vext/ref/fb/entitydata/) other)                            | Upcast an instance of type [EntityData](/vext/ref/fb/entitydata/) to [CancelOrderEntityData](/vext/ref/fb/cancelorderentitydata/).                            |
| CancelOrderEntityData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [CancelOrderEntityData](/vext/ref/fb/cancelorderentitydata/).                    |
| CancelOrderEntityData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [CancelOrderEntityData](/vext/ref/fb/cancelorderentitydata/).              |
| CancelOrderEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [CancelOrderEntityData](/vext/ref/fb/cancelorderentitydata/). |

## Methods

| Type                                           | Name            | Parameters                                     |
| ---------------------------------------------- | --------------- | ---------------------------------------------- |
| [CancelOrderEntityData](/vext/ref/fb/cancelorderentitydata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [CancelOrderEntityData](/vext/ref/fb/cancelorderentitydata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
