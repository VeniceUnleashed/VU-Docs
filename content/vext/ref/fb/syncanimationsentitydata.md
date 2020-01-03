---
title: SyncAnimationsEntityData
---
### Base Classes

[EntityData](/vext/ref/fb/entitydata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                         | Description                                                                                                                             |
| ----------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| SyncAnimationsEntityData()                                                          | Create a new instance of this container type.                                                                                           |
| SyncAnimationsEntityData(SyncAnimationsEntityData other)                            | Create a reference copy of an instance of the same type.                                                                                |
| SyncAnimationsEntityData([EntityData](/vext/ref/fb/entitydata/) other)                            | Upcast an instance of type [EntityData](/vext/ref/fb/entitydata/) to [SyncAnimationsEntityData](/vext/ref/fb/syncanimationsentitydata/).                            |
| SyncAnimationsEntityData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [SyncAnimationsEntityData](/vext/ref/fb/syncanimationsentitydata/).                    |
| SyncAnimationsEntityData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [SyncAnimationsEntityData](/vext/ref/fb/syncanimationsentitydata/).              |
| SyncAnimationsEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [SyncAnimationsEntityData](/vext/ref/fb/syncanimationsentitydata/). |

## Properties

| Name              | Type   | Description |
| ----------------- | ------ | ----------- |
| externalTime      | number |             |
| nearEndEventTime  | number |             |
| startServerPaused | bool   |             |

## Methods

| Type                                                 | Name            | Parameters                                     |
| ---------------------------------------------------- | --------------- | ---------------------------------------------- |
| [SyncAnimationsEntityData](/vext/ref/fb/syncanimationsentitydata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [SyncAnimationsEntityData](/vext/ref/fb/syncanimationsentitydata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
