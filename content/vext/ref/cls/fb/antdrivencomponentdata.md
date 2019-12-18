---
title: AntDrivenComponentData (Frostbite Container)
---
### Base Classes

[ComponentData](ComponentData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                       | Description                                                                                                                         |
| --------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| AntDrivenComponentData()                                                          | Create a new instance of this container type.                                                                                       |
| AntDrivenComponentData(AntDrivenComponentData other)                              | Create a reference copy of an instance of the same type.                                                                            |
| AntDrivenComponentData([ComponentData](ComponentData) other)                      | Upcast an instance of type [ComponentData](ComponentData) to [AntDrivenComponentData](AntDrivenComponentData).                      |
| AntDrivenComponentData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [AntDrivenComponentData](AntDrivenComponentData).                    |
| AntDrivenComponentData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [AntDrivenComponentData](AntDrivenComponentData).              |
| AntDrivenComponentData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [AntDrivenComponentData](AntDrivenComponentData). |

## Properties

| Name               | Type                                             | Description |
| ------------------ | ------------------------------------------------ | ----------- |
| characterGameState | [AnimationDrivenBinding](AnimationDrivenBinding) |             |

## Methods

| Type                                             | Name            | Parameters                                     |
| ------------------------------------------------ | --------------- | ---------------------------------------------- |
| [AntDrivenComponentData](AntDrivenComponentData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [AntDrivenComponentData](AntDrivenComponentData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
