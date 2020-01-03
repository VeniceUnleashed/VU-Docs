---
title: CountDownEntityData
---
### Base Classes

[EntityData](/vext/ref/fb/entitydata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                    | Description                                                                                                                   |
| ------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| CountDownEntityData()                                                          | Create a new instance of this container type.                                                                                 |
| CountDownEntityData(CountDownEntityData other)                                 | Create a reference copy of an instance of the same type.                                                                      |
| CountDownEntityData([EntityData](/vext/ref/fb/entitydata/) other)                            | Upcast an instance of type [EntityData](/vext/ref/fb/entitydata/) to [CountDownEntityData](/vext/ref/fb/countdownentitydata/).                            |
| CountDownEntityData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [CountDownEntityData](/vext/ref/fb/countdownentitydata/).                    |
| CountDownEntityData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [CountDownEntityData](/vext/ref/fb/countdownentitydata/).              |
| CountDownEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [CountDownEntityData](/vext/ref/fb/countdownentitydata/). |

## Properties

| Name       | Type           | Description |
| ---------- | -------------- | ----------- |
| startValue | number         |             |
| realm      | [Realm](/vext/ref/fb/realm/) |             |
| runOnce    | bool           |             |

## Methods

| Type                                       | Name            | Parameters                                     |
| ------------------------------------------ | --------------- | ---------------------------------------------- |
| [CountDownEntityData](/vext/ref/fb/countdownentitydata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [CountDownEntityData](/vext/ref/fb/countdownentitydata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
