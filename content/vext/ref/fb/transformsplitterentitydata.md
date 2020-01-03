---
title: TransformSplitterEntityData
---
### Base Classes

[EntityData](EntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                            | Description                                                                                                                                   |
| -------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| TransformSplitterEntityData()                                                          | Create a new instance of this container type.                                                                                                 |
| TransformSplitterEntityData(TransformSplitterEntityData other)                         | Create a reference copy of an instance of the same type.                                                                                      |
| TransformSplitterEntityData([EntityData](EntityData) other)                            | Upcast an instance of type [EntityData](EntityData) to [TransformSplitterEntityData](TransformSplitterEntityData).                            |
| TransformSplitterEntityData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [TransformSplitterEntityData](TransformSplitterEntityData).                    |
| TransformSplitterEntityData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [TransformSplitterEntityData](TransformSplitterEntityData).              |
| TransformSplitterEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [TransformSplitterEntityData](TransformSplitterEntityData). |

## Properties

| Name      | Type                                                    | Description |
| --------- | ------------------------------------------------------- | ----------- |
| transform | [LinearTransform](/vext/ref/shared/class/lineartransform) |             |
| realm     | [Realm](Realm)                                          |             |

## Methods

| Type                                                       | Name            | Parameters                                     |
| ---------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [TransformSplitterEntityData](TransformSplitterEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [TransformSplitterEntityData](TransformSplitterEntityData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
