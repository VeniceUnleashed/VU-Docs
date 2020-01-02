---
title: AnimatedTransformEntityData
---
### Base Classes

[EntityData](EntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                            | Description                                                                                                                                   |
| -------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| AnimatedTransformEntityData()                                                          | Create a new instance of this container type.                                                                                                 |
| AnimatedTransformEntityData(AnimatedTransformEntityData other)                         | Create a reference copy of an instance of the same type.                                                                                      |
| AnimatedTransformEntityData([EntityData](EntityData) other)                            | Upcast an instance of type [EntityData](EntityData) to [AnimatedTransformEntityData](AnimatedTransformEntityData).                            |
| AnimatedTransformEntityData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [AnimatedTransformEntityData](AnimatedTransformEntityData).                    |
| AnimatedTransformEntityData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [AnimatedTransformEntityData](AnimatedTransformEntityData).              |
| AnimatedTransformEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [AnimatedTransformEntityData](AnimatedTransformEntityData). |

## Properties

| Name         | Type             | Description |
| ------------ | ---------------- | ----------- |
| animatable   | [AntRef](AntRef) |             |
| externalTime | number           |             |
| controller   | [AntRef](AntRef) |             |
| boneName     | string           |             |

## Methods

| Type                                                       | Name            | Parameters                                     |
| ---------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [AnimatedTransformEntityData](AnimatedTransformEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [AnimatedTransformEntityData](AnimatedTransformEntityData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
