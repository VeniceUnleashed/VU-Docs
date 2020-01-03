---
title: SyncedTransformEntityData
---
### Base Classes

[EntityData](/vext/ref/fb/entitydata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                          | Description                                                                                                                               |
| ------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------- |
| SyncedTransformEntityData()                                                          | Create a new instance of this container type.                                                                                             |
| SyncedTransformEntityData(SyncedTransformEntityData other)                           | Create a reference copy of an instance of the same type.                                                                                  |
| SyncedTransformEntityData([EntityData](/vext/ref/fb/entitydata/) other)                            | Upcast an instance of type [EntityData](/vext/ref/fb/entitydata/) to [SyncedTransformEntityData](/vext/ref/fb/syncedtransformentitydata/).                            |
| SyncedTransformEntityData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [SyncedTransformEntityData](/vext/ref/fb/syncedtransformentitydata/).                    |
| SyncedTransformEntityData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [SyncedTransformEntityData](/vext/ref/fb/syncedtransformentitydata/).              |
| SyncedTransformEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [SyncedTransformEntityData](/vext/ref/fb/syncedtransformentitydata/). |

## Properties

| Name        | Type                                                    | Description |
| ----------- | ------------------------------------------------------- | ----------- |
| inValue     | [LinearTransform](/vext/ref/shared/class/lineartransform) |             |
| interpolate | bool                                                    |             |

## Methods

| Type                                                   | Name            | Parameters                                     |
| ------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [SyncedTransformEntityData](/vext/ref/fb/syncedtransformentitydata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [SyncedTransformEntityData](/vext/ref/fb/syncedtransformentitydata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
