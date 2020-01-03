---
title: SyncedFloatEntityData
---
### Base Classes

[EntityData](/vext/ref/fb/entitydata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                      | Description                                                                                                                       |
| -------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| SyncedFloatEntityData()                                                          | Create a new instance of this container type.                                                                                     |
| SyncedFloatEntityData(SyncedFloatEntityData other)                               | Create a reference copy of an instance of the same type.                                                                          |
| SyncedFloatEntityData([EntityData](/vext/ref/fb/entitydata/) other)                            | Upcast an instance of type [EntityData](/vext/ref/fb/entitydata/) to [SyncedFloatEntityData](/vext/ref/fb/syncedfloatentitydata/).                            |
| SyncedFloatEntityData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [SyncedFloatEntityData](/vext/ref/fb/syncedfloatentitydata/).                    |
| SyncedFloatEntityData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [SyncedFloatEntityData](/vext/ref/fb/syncedfloatentitydata/).              |
| SyncedFloatEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [SyncedFloatEntityData](/vext/ref/fb/syncedfloatentitydata/). |

## Properties

| Name    | Type   | Description |
| ------- | ------ | ----------- |
| inValue | number |             |

## Methods

| Type                                           | Name            | Parameters                                     |
| ---------------------------------------------- | --------------- | ---------------------------------------------- |
| [SyncedFloatEntityData](/vext/ref/fb/syncedfloatentitydata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [SyncedFloatEntityData](/vext/ref/fb/syncedfloatentitydata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
