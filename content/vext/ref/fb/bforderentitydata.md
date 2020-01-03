---
title: BFOrderEntityData
---
### Base Classes

[OrderEntityData](/vext/ref/fb/orderentitydata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                  | Description                                                                                                               |
| ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| BFOrderEntityData()                                                          | Create a new instance of this container type.                                                                             |
| BFOrderEntityData(BFOrderEntityData other)                                   | Create a reference copy of an instance of the same type.                                                                  |
| BFOrderEntityData([OrderEntityData](/vext/ref/fb/orderentitydata/) other)                  | Upcast an instance of type [OrderEntityData](/vext/ref/fb/orderentitydata/) to [BFOrderEntityData](/vext/ref/fb/bforderentitydata/).                  |
| BFOrderEntityData([EntityData](/vext/ref/fb/entitydata/) other)                            | Upcast an instance of type [EntityData](/vext/ref/fb/entitydata/) to [BFOrderEntityData](/vext/ref/fb/bforderentitydata/).                            |
| BFOrderEntityData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [BFOrderEntityData](/vext/ref/fb/bforderentitydata/).                    |
| BFOrderEntityData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [BFOrderEntityData](/vext/ref/fb/bforderentitydata/).              |
| BFOrderEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [BFOrderEntityData](/vext/ref/fb/bforderentitydata/). |

## Properties

| Name            | Type | Description |
| --------------- | ---- | ----------- |
| forbiddenToFire | bool |             |

## Methods

| Type                                   | Name            | Parameters                                     |
| -------------------------------------- | --------------- | ---------------------------------------------- |
| [BFOrderEntityData](/vext/ref/fb/bforderentitydata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [BFOrderEntityData](/vext/ref/fb/bforderentitydata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
