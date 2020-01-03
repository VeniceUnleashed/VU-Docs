---
title: TransformEntityData
---
### Base Classes

[EntityData](EntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                    | Description                                                                                                                   |
| ------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| TransformEntityData()                                                          | Create a new instance of this container type.                                                                                 |
| TransformEntityData(TransformEntityData other)                                 | Create a reference copy of an instance of the same type.                                                                      |
| TransformEntityData([EntityData](EntityData) other)                            | Upcast an instance of type [EntityData](EntityData) to [TransformEntityData](TransformEntityData).                            |
| TransformEntityData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [TransformEntityData](TransformEntityData).                    |
| TransformEntityData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [TransformEntityData](TransformEntityData).              |
| TransformEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [TransformEntityData](TransformEntityData). |

## Properties

| Name             | Type                                                    | Description |
| ---------------- | ------------------------------------------------------- | ----------- |
| defaultTransform | [LinearTransform](/vext/ref/shared/class/lineartransform) |             |
| realm            | [Realm](Realm)                                          |             |

## Methods

| Type                                       | Name            | Parameters                                     |
| ------------------------------------------ | --------------- | ---------------------------------------------- |
| [TransformEntityData](TransformEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [TransformEntityData](TransformEntityData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
