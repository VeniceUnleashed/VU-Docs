---
title: StopWatchEntityData
---
### Base Classes

[EntityData](/vext/ref/fb/entitydata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                    | Description                                                                                                                   |
| ------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| StopWatchEntityData()                                                          | Create a new instance of this container type.                                                                                 |
| StopWatchEntityData(StopWatchEntityData other)                                 | Create a reference copy of an instance of the same type.                                                                      |
| StopWatchEntityData([EntityData](/vext/ref/fb/entitydata/) other)                            | Upcast an instance of type [EntityData](/vext/ref/fb/entitydata/) to [StopWatchEntityData](/vext/ref/fb/stopwatchentitydata/).                            |
| StopWatchEntityData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [StopWatchEntityData](/vext/ref/fb/stopwatchentitydata/).                    |
| StopWatchEntityData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [StopWatchEntityData](/vext/ref/fb/stopwatchentitydata/).              |
| StopWatchEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [StopWatchEntityData](/vext/ref/fb/stopwatchentitydata/). |

## Properties

| Name          | Type                     | Description |
| ------------- | ------------------------ | ----------- |
| realm         | [Realm](/vext/ref/fb/realm/)           |             |
| updatePass    | [UpdatePass](/vext/ref/fb/updatepass/) |             |
| multiplier    | number                   |             |
| triggerOnTime | number                   |             |

## Methods

| Type                                       | Name            | Parameters                                     |
| ------------------------------------------ | --------------- | ---------------------------------------------- |
| [StopWatchEntityData](/vext/ref/fb/stopwatchentitydata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [StopWatchEntityData](/vext/ref/fb/stopwatchentitydata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
