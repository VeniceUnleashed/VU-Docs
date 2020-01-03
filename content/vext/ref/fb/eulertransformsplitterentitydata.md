---
title: EulerTransformSplitterEntityData
---
### Base Classes

[EntityData](EntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                                 | Description                                                                                                                                             |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| EulerTransformSplitterEntityData()                                                          | Create a new instance of this container type.                                                                                                           |
| EulerTransformSplitterEntityData(EulerTransformSplitterEntityData other)                    | Create a reference copy of an instance of the same type.                                                                                                |
| EulerTransformSplitterEntityData([EntityData](EntityData) other)                            | Upcast an instance of type [EntityData](EntityData) to [EulerTransformSplitterEntityData](EulerTransformSplitterEntityData).                            |
| EulerTransformSplitterEntityData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [EulerTransformSplitterEntityData](EulerTransformSplitterEntityData).                    |
| EulerTransformSplitterEntityData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [EulerTransformSplitterEntityData](EulerTransformSplitterEntityData).              |
| EulerTransformSplitterEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [EulerTransformSplitterEntityData](EulerTransformSplitterEntityData). |

## Properties

| Name      | Type                                                    | Description |
| --------- | ------------------------------------------------------- | ----------- |
| transform | [LinearTransform](/vext/ref/shared/class/LinearTransform) |             |
| realm     | [Realm](Realm)                                          |             |

## Methods

| Type                                                                 | Name            | Parameters                                     |
| -------------------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [EulerTransformSplitterEntityData](EulerTransformSplitterEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [EulerTransformSplitterEntityData](EulerTransformSplitterEntityData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
