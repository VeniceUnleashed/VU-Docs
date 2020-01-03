---
title: SyncedSequenceEntityData
---
### Base Classes

[SequenceEntityData](/vext/ref/fb/sequenceentitydata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                         | Description                                                                                                                             |
| ----------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| SyncedSequenceEntityData()                                                          | Create a new instance of this container type.                                                                                           |
| SyncedSequenceEntityData(SyncedSequenceEntityData other)                            | Create a reference copy of an instance of the same type.                                                                                |
| SyncedSequenceEntityData([SequenceEntityData](/vext/ref/fb/sequenceentitydata/) other)            | Upcast an instance of type [SequenceEntityData](/vext/ref/fb/sequenceentitydata/) to [SyncedSequenceEntityData](/vext/ref/fb/syncedsequenceentitydata/).            |
| SyncedSequenceEntityData([EntityData](/vext/ref/fb/entitydata/) other)                            | Upcast an instance of type [EntityData](/vext/ref/fb/entitydata/) to [SyncedSequenceEntityData](/vext/ref/fb/syncedsequenceentitydata/).                            |
| SyncedSequenceEntityData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [SyncedSequenceEntityData](/vext/ref/fb/syncedsequenceentitydata/).                    |
| SyncedSequenceEntityData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [SyncedSequenceEntityData](/vext/ref/fb/syncedsequenceentitydata/).              |
| SyncedSequenceEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [SyncedSequenceEntityData](/vext/ref/fb/syncedsequenceentitydata/). |

## Properties

| Name            | Type | Description |
| --------------- | ---- | ----------- |
| interpolateTime | bool |             |

## Methods

| Type                                                 | Name            | Parameters                                     |
| ---------------------------------------------------- | --------------- | ---------------------------------------------- |
| [SyncedSequenceEntityData](/vext/ref/fb/syncedsequenceentitydata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [SyncedSequenceEntityData](/vext/ref/fb/syncedsequenceentitydata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
