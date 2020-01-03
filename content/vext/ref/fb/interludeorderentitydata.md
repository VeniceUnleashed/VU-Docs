---
title: InterludeOrderEntityData
---
### Base Classes

[BFOrderEntityData](/vext/ref/fb/bforderentitydata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                         | Description                                                                                                                             |
| ----------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| InterludeOrderEntityData()                                                          | Create a new instance of this container type.                                                                                           |
| InterludeOrderEntityData(InterludeOrderEntityData other)                            | Create a reference copy of an instance of the same type.                                                                                |
| InterludeOrderEntityData([BFOrderEntityData](/vext/ref/fb/bforderentitydata/) other)              | Upcast an instance of type [BFOrderEntityData](/vext/ref/fb/bforderentitydata/) to [InterludeOrderEntityData](/vext/ref/fb/interludeorderentitydata/).              |
| InterludeOrderEntityData([OrderEntityData](/vext/ref/fb/orderentitydata/) other)                  | Upcast an instance of type [OrderEntityData](/vext/ref/fb/orderentitydata/) to [InterludeOrderEntityData](/vext/ref/fb/interludeorderentitydata/).                  |
| InterludeOrderEntityData([EntityData](/vext/ref/fb/entitydata/) other)                            | Upcast an instance of type [EntityData](/vext/ref/fb/entitydata/) to [InterludeOrderEntityData](/vext/ref/fb/interludeorderentitydata/).                            |
| InterludeOrderEntityData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [InterludeOrderEntityData](/vext/ref/fb/interludeorderentitydata/).                    |
| InterludeOrderEntityData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [InterludeOrderEntityData](/vext/ref/fb/interludeorderentitydata/).              |
| InterludeOrderEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [InterludeOrderEntityData](/vext/ref/fb/interludeorderentitydata/). |

## Properties

| Name       | Type | Description |
| ---------- | ---- | ----------- |
| isCutscene | bool |             |
| crouch     | bool |             |

## Methods

| Type                                                 | Name            | Parameters                                     |
| ---------------------------------------------------- | --------------- | ---------------------------------------------- |
| [InterludeOrderEntityData](/vext/ref/fb/interludeorderentitydata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [InterludeOrderEntityData](/vext/ref/fb/interludeorderentitydata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
