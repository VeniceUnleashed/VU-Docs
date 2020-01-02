---
title: AnimatedDestructionComponentData
---
### Base Classes

[AntAnimatableComponentData](AntAnimatableComponentData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                                      | Description                                                                                                                                                  |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| AnimatedDestructionComponentData()                                                               | Create a new instance of this container type.                                                                                                                |
| AnimatedDestructionComponentData(AnimatedDestructionComponentData other)                         | Create a reference copy of an instance of the same type.                                                                                                     |
| AnimatedDestructionComponentData([AntAnimatableComponentData](AntAnimatableComponentData) other) | Upcast an instance of type [AntAnimatableComponentData](AntAnimatableComponentData) to [AnimatedDestructionComponentData](AnimatedDestructionComponentData). |
| AnimatedDestructionComponentData([ComponentData](ComponentData) other)                           | Upcast an instance of type [ComponentData](ComponentData) to [AnimatedDestructionComponentData](AnimatedDestructionComponentData).                           |
| AnimatedDestructionComponentData([GameObjectData](GameObjectData) other)                         | Upcast an instance of type [GameObjectData](GameObjectData) to [AnimatedDestructionComponentData](AnimatedDestructionComponentData).                         |
| AnimatedDestructionComponentData([GameDataContainer](GameDataContainer) other)                   | Upcast an instance of type [GameDataContainer](GameDataContainer) to [AnimatedDestructionComponentData](AnimatedDestructionComponentData).                   |
| AnimatedDestructionComponentData([DataContainer](/vext/ref/shared/class/datacontainer) other)      | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [AnimatedDestructionComponentData](AnimatedDestructionComponentData).      |

## Methods

| Type                                                                 | Name            | Parameters                                     |
| -------------------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [AnimatedDestructionComponentData](AnimatedDestructionComponentData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [AnimatedDestructionComponentData](AnimatedDestructionComponentData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
