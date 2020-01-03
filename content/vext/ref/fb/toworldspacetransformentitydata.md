---
title: ToWorldSpaceTransformEntityData
---
### Base Classes

[EntityData](EntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                                | Description                                                                                                                                           |
| ------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| ToWorldSpaceTransformEntityData()                                                          | Create a new instance of this container type.                                                                                                         |
| ToWorldSpaceTransformEntityData(ToWorldSpaceTransformEntityData other)                     | Create a reference copy of an instance of the same type.                                                                                              |
| ToWorldSpaceTransformEntityData([EntityData](EntityData) other)                            | Upcast an instance of type [EntityData](EntityData) to [ToWorldSpaceTransformEntityData](ToWorldSpaceTransformEntityData).                            |
| ToWorldSpaceTransformEntityData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [ToWorldSpaceTransformEntityData](ToWorldSpaceTransformEntityData).                    |
| ToWorldSpaceTransformEntityData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [ToWorldSpaceTransformEntityData](ToWorldSpaceTransformEntityData).              |
| ToWorldSpaceTransformEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [ToWorldSpaceTransformEntityData](ToWorldSpaceTransformEntityData). |

## Properties

| Name  | Type                                                    | Description |
| ----- | ------------------------------------------------------- | ----------- |
| in1   | [LinearTransform](/vext/ref/shared/class/lineartransform) |             |
| realm | [Realm](Realm)                                          |             |

## Methods

| Type                                                               | Name            | Parameters                                     |
| ------------------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [ToWorldSpaceTransformEntityData](ToWorldSpaceTransformEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [ToWorldSpaceTransformEntityData](ToWorldSpaceTransformEntityData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
