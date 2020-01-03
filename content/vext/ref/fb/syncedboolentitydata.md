---
title: SyncedBoolEntityData
---
### Base Classes

[EntityData](/vext/ref/fb/entitydata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                     | Description                                                                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| SyncedBoolEntityData()                                                          | Create a new instance of this container type.                                                                                   |
| SyncedBoolEntityData(SyncedBoolEntityData other)                                | Create a reference copy of an instance of the same type.                                                                        |
| SyncedBoolEntityData([EntityData](/vext/ref/fb/entitydata/) other)                            | Upcast an instance of type [EntityData](/vext/ref/fb/entitydata/) to [SyncedBoolEntityData](/vext/ref/fb/syncedboolentitydata/).                            |
| SyncedBoolEntityData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [SyncedBoolEntityData](/vext/ref/fb/syncedboolentitydata/).                    |
| SyncedBoolEntityData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [SyncedBoolEntityData](/vext/ref/fb/syncedboolentitydata/).              |
| SyncedBoolEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [SyncedBoolEntityData](/vext/ref/fb/syncedboolentitydata/). |

## Properties

| Name    | Type | Description |
| ------- | ---- | ----------- |
| inValue | bool |             |

## Methods

| Type                                         | Name            | Parameters                                     |
| -------------------------------------------- | --------------- | ---------------------------------------------- |
| [SyncedBoolEntityData](/vext/ref/fb/syncedboolentitydata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [SyncedBoolEntityData](/vext/ref/fb/syncedboolentitydata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
