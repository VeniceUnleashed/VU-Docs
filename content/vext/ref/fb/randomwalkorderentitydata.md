---
title: RandomWalkOrderEntityData
---
### Base Classes

[BFOrderEntityData](/vext/ref/fb/bforderentitydata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                          | Description                                                                                                                               |
| ------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------- |
| RandomWalkOrderEntityData()                                                          | Create a new instance of this container type.                                                                                             |
| RandomWalkOrderEntityData(RandomWalkOrderEntityData other)                           | Create a reference copy of an instance of the same type.                                                                                  |
| RandomWalkOrderEntityData([BFOrderEntityData](/vext/ref/fb/bforderentitydata/) other)              | Upcast an instance of type [BFOrderEntityData](/vext/ref/fb/bforderentitydata/) to [RandomWalkOrderEntityData](/vext/ref/fb/randomwalkorderentitydata/).              |
| RandomWalkOrderEntityData([OrderEntityData](/vext/ref/fb/orderentitydata/) other)                  | Upcast an instance of type [OrderEntityData](/vext/ref/fb/orderentitydata/) to [RandomWalkOrderEntityData](/vext/ref/fb/randomwalkorderentitydata/).                  |
| RandomWalkOrderEntityData([EntityData](/vext/ref/fb/entitydata/) other)                            | Upcast an instance of type [EntityData](/vext/ref/fb/entitydata/) to [RandomWalkOrderEntityData](/vext/ref/fb/randomwalkorderentitydata/).                            |
| RandomWalkOrderEntityData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [RandomWalkOrderEntityData](/vext/ref/fb/randomwalkorderentitydata/).                    |
| RandomWalkOrderEntityData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [RandomWalkOrderEntityData](/vext/ref/fb/randomwalkorderentitydata/).              |
| RandomWalkOrderEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [RandomWalkOrderEntityData](/vext/ref/fb/randomwalkorderentitydata/). |

## Properties

| Name            | Type | Description |
| --------------- | ---- | ----------- |
| combatForbidden | bool |             |

## Methods

| Type                                                   | Name            | Parameters                                     |
| ------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [RandomWalkOrderEntityData](/vext/ref/fb/randomwalkorderentitydata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [RandomWalkOrderEntityData](/vext/ref/fb/randomwalkorderentitydata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
