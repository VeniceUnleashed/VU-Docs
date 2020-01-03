---
title: AreaProximityEntityData
---
### Base Classes

[EntityData](/vext/ref/fb/entitydata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                        | Description                                                                                                                           |
| ---------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| AreaProximityEntityData()                                                          | Create a new instance of this container type.                                                                                         |
| AreaProximityEntityData(AreaProximityEntityData other)                             | Create a reference copy of an instance of the same type.                                                                              |
| AreaProximityEntityData([EntityData](/vext/ref/fb/entitydata/) other)                            | Upcast an instance of type [EntityData](/vext/ref/fb/entitydata/) to [AreaProximityEntityData](/vext/ref/fb/areaproximityentitydata/).                            |
| AreaProximityEntityData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [AreaProximityEntityData](/vext/ref/fb/areaproximityentitydata/).                    |
| AreaProximityEntityData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [AreaProximityEntityData](/vext/ref/fb/areaproximityentitydata/).              |
| AreaProximityEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [AreaProximityEntityData](/vext/ref/fb/areaproximityentitydata/). |

## Properties

| Name              | Type                     | Description |
| ----------------- | ------------------------ | ----------- |
| realm             | [Realm](/vext/ref/fb/realm/)           |             |
| proximityDistance | number                   |             |
| updatePass        | [UpdatePass](/vext/ref/fb/updatepass/) |             |
| autoStart         | bool                     |             |

## Methods

| Type                                               | Name            | Parameters                                     |
| -------------------------------------------------- | --------------- | ---------------------------------------------- |
| [AreaProximityEntityData](/vext/ref/fb/areaproximityentitydata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [AreaProximityEntityData](/vext/ref/fb/areaproximityentitydata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
