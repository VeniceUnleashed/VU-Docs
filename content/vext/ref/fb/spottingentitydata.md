---
title: SpottingEntityData
---
### Base Classes

[EntityData](/vext/ref/fb/entitydata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                   | Description                                                                                                                 |
| ----------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| SpottingEntityData()                                                          | Create a new instance of this container type.                                                                               |
| SpottingEntityData(SpottingEntityData other)                                  | Create a reference copy of an instance of the same type.                                                                    |
| SpottingEntityData([EntityData](/vext/ref/fb/entitydata/) other)                            | Upcast an instance of type [EntityData](/vext/ref/fb/entitydata/) to [SpottingEntityData](/vext/ref/fb/spottingentitydata/).                            |
| SpottingEntityData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [SpottingEntityData](/vext/ref/fb/spottingentitydata/).                    |
| SpottingEntityData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [SpottingEntityData](/vext/ref/fb/spottingentitydata/).              |
| SpottingEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [SpottingEntityData](/vext/ref/fb/spottingentitydata/). |

## Properties

| Name       | Type             | Description |
| ---------- | ---------------- | ----------- |
| realm      | [Realm](/vext/ref/fb/realm/)   |             |
| teamToSpot | [TeamId](/vext/ref/fb/teamid/) |             |
| enabled    | bool             |             |

## Methods

| Type                                     | Name            | Parameters                                     |
| ---------------------------------------- | --------------- | ---------------------------------------------- |
| [SpottingEntityData](/vext/ref/fb/spottingentitydata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [SpottingEntityData](/vext/ref/fb/spottingentitydata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
