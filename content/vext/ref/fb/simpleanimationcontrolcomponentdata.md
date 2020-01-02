---
title: SimpleAnimationControlComponentData
---
### Base Classes

[ComponentData](ComponentData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                                    | Description                                                                                                                                                   |
| ---------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| SimpleAnimationControlComponentData()                                                          | Create a new instance of this container type.                                                                                                                 |
| SimpleAnimationControlComponentData(SimpleAnimationControlComponentData other)                 | Create a reference copy of an instance of the same type.                                                                                                      |
| SimpleAnimationControlComponentData([ComponentData](ComponentData) other)                      | Upcast an instance of type [ComponentData](ComponentData) to [SimpleAnimationControlComponentData](SimpleAnimationControlComponentData).                      |
| SimpleAnimationControlComponentData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [SimpleAnimationControlComponentData](SimpleAnimationControlComponentData).                    |
| SimpleAnimationControlComponentData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [SimpleAnimationControlComponentData](SimpleAnimationControlComponentData).              |
| SimpleAnimationControlComponentData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [SimpleAnimationControlComponentData](SimpleAnimationControlComponentData). |

## Properties

| Name                         | Type                                                           | Description |
| ---------------------------- | -------------------------------------------------------------- | ----------- |
| binding                      | [SimpleAnimationControlBinding](SimpleAnimationControlBinding) |             |
| animationEntitySpacePriority | number                                                         |             |
| run                          | bool                                                           |             |

## Methods

| Type                                                                       | Name            | Parameters                                     |
| -------------------------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [SimpleAnimationControlComponentData](SimpleAnimationControlComponentData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [SimpleAnimationControlComponentData](SimpleAnimationControlComponentData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
