---
title: SyncedTransformEntityData
---
### Base Classes

[EntityData](EntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                          | Description                                                                                                                               |
| ------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------- |
| SyncedTransformEntityData()                                                          | Create a new instance of this container type.                                                                                             |
| SyncedTransformEntityData(SyncedTransformEntityData other)                           | Create a reference copy of an instance of the same type.                                                                                  |
| SyncedTransformEntityData([EntityData](EntityData) other)                            | Upcast an instance of type [EntityData](EntityData) to [SyncedTransformEntityData](SyncedTransformEntityData).                            |
| SyncedTransformEntityData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [SyncedTransformEntityData](SyncedTransformEntityData).                    |
| SyncedTransformEntityData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [SyncedTransformEntityData](SyncedTransformEntityData).              |
| SyncedTransformEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [SyncedTransformEntityData](SyncedTransformEntityData). |

## Properties

| Name        | Type                                                    | Description |
| ----------- | ------------------------------------------------------- | ----------- |
| inValue     | [LinearTransform](/vext/ref/shared/class/lineartransform) |             |
| interpolate | bool                                                    |             |

## Methods

| Type                                                   | Name            | Parameters                                     |
| ------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [SyncedTransformEntityData](SyncedTransformEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [SyncedTransformEntityData](SyncedTransformEntityData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
