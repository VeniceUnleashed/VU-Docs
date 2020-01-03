---
title: AimAtOrderEntityData
---
### Base Classes

[BFOrderEntityData](/vext/ref/fb/bforderentitydata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                     | Description                                                                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| AimAtOrderEntityData()                                                          | Create a new instance of this container type.                                                                                   |
| AimAtOrderEntityData(AimAtOrderEntityData other)                                | Create a reference copy of an instance of the same type.                                                                        |
| AimAtOrderEntityData([BFOrderEntityData](/vext/ref/fb/bforderentitydata/) other)              | Upcast an instance of type [BFOrderEntityData](/vext/ref/fb/bforderentitydata/) to [AimAtOrderEntityData](/vext/ref/fb/aimatorderentitydata/).              |
| AimAtOrderEntityData([OrderEntityData](/vext/ref/fb/orderentitydata/) other)                  | Upcast an instance of type [OrderEntityData](/vext/ref/fb/orderentitydata/) to [AimAtOrderEntityData](/vext/ref/fb/aimatorderentitydata/).                  |
| AimAtOrderEntityData([EntityData](/vext/ref/fb/entitydata/) other)                            | Upcast an instance of type [EntityData](/vext/ref/fb/entitydata/) to [AimAtOrderEntityData](/vext/ref/fb/aimatorderentitydata/).                            |
| AimAtOrderEntityData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [AimAtOrderEntityData](/vext/ref/fb/aimatorderentitydata/).                    |
| AimAtOrderEntityData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [AimAtOrderEntityData](/vext/ref/fb/aimatorderentitydata/).              |
| AimAtOrderEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [AimAtOrderEntityData](/vext/ref/fb/aimatorderentitydata/). |

## Methods

| Type                                         | Name            | Parameters                                     |
| -------------------------------------------- | --------------- | ---------------------------------------------- |
| [AimAtOrderEntityData](/vext/ref/fb/aimatorderentitydata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [AimAtOrderEntityData](/vext/ref/fb/aimatorderentitydata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
