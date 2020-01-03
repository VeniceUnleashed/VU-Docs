---
title: BFTargetEvaluatorComponentData
---
### Base Classes

[TargetEvaluatorComponentData](TargetEvaluatorComponentData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                                        | Description                                                                                                                                                  |
| -------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| BFTargetEvaluatorComponentData()                                                                   | Create a new instance of this container type.                                                                                                                |
| BFTargetEvaluatorComponentData(BFTargetEvaluatorComponentData other)                               | Create a reference copy of an instance of the same type.                                                                                                     |
| BFTargetEvaluatorComponentData([TargetEvaluatorComponentData](TargetEvaluatorComponentData) other) | Upcast an instance of type [TargetEvaluatorComponentData](TargetEvaluatorComponentData) to [BFTargetEvaluatorComponentData](BFTargetEvaluatorComponentData). |
| BFTargetEvaluatorComponentData([ComponentData](ComponentData) other)                               | Upcast an instance of type [ComponentData](ComponentData) to [BFTargetEvaluatorComponentData](BFTargetEvaluatorComponentData).                               |
| BFTargetEvaluatorComponentData([GameObjectData](GameObjectData) other)                             | Upcast an instance of type [GameObjectData](GameObjectData) to [BFTargetEvaluatorComponentData](BFTargetEvaluatorComponentData).                             |
| BFTargetEvaluatorComponentData([GameDataContainer](GameDataContainer) other)                       | Upcast an instance of type [GameDataContainer](GameDataContainer) to [BFTargetEvaluatorComponentData](BFTargetEvaluatorComponentData).                       |
| BFTargetEvaluatorComponentData([DataContainer](/vext/ref/shared/class/datacontainer) other)          | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [BFTargetEvaluatorComponentData](BFTargetEvaluatorComponentData).          |

## Properties

| Name     | Type                                                         | Description |
| -------- | ------------------------------------------------------------ | ----------- |
| settings | [TargetEvaluationConstantData](TargetEvaluationConstantData) |             |

## Methods

| Type                                                             | Name            | Parameters                                     |
| ---------------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [BFTargetEvaluatorComponentData](BFTargetEvaluatorComponentData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [BFTargetEvaluatorComponentData](BFTargetEvaluatorComponentData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
