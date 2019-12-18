---
title: TransformSplitterEntityData (Frostbite Container)
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
| TransformSplitterEntityData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [TransformSplitterEntityData](TransformSplitterEntityData). |

## Properties

| Name      | Type                                                    | Description |
| --------- | ------------------------------------------------------- | ----------- |
| transform | [LinearTransform](/vext/ref/cls/shr/LinearTransform) |             |
| realm     | [Realm](Realm)                                          |             |

## Methods

| Type                                                       | Name            | Parameters                                     |
| ---------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [TransformSplitterEntityData](TransformSplitterEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [TransformSplitterEntityData](TransformSplitterEntityData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
