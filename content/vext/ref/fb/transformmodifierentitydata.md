---
title: TransformModifierEntityData
---
### Base Classes

[EntityData](EntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                            | Description                                                                                                                                   |
| -------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| TransformModifierEntityData()                                                          | Create a new instance of this container type.                                                                                                 |
| TransformModifierEntityData(TransformModifierEntityData other)                         | Create a reference copy of an instance of the same type.                                                                                      |
| TransformModifierEntityData([EntityData](EntityData) other)                            | Upcast an instance of type [EntityData](EntityData) to [TransformModifierEntityData](TransformModifierEntityData).                            |
| TransformModifierEntityData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [TransformModifierEntityData](TransformModifierEntityData).                    |
| TransformModifierEntityData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [TransformModifierEntityData](TransformModifierEntityData).              |
| TransformModifierEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [TransformModifierEntityData](TransformModifierEntityData). |

## Properties

| Name          | Type                                                    | Description |
| ------------- | ------------------------------------------------------- | ----------- |
| inValue       | [LinearTransform](/vext/ref/shared/class/LinearTransform) |             |
| realm         | [Realm](Realm)                                          |             |
| left          | [ModifierAxis](ModifierAxis)                            |             |
| up            | [ModifierAxis](ModifierAxis)                            |             |
| forward       | [ModifierAxis](ModifierAxis)                            |             |
| invertLeft    | bool                                                    |             |
| invertUp      | bool                                                    |             |
| invertForward | bool                                                    |             |

## Methods

| Type                                                       | Name            | Parameters                                     |
| ---------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [TransformModifierEntityData](TransformModifierEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [TransformModifierEntityData](TransformModifierEntityData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
