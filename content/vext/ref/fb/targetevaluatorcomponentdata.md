---
title: TargetEvaluatorComponentData
---
### Base Classes

[ComponentData](ComponentData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                             | Description                                                                                                                                     |
| --------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| TargetEvaluatorComponentData()                                                          | Create a new instance of this container type.                                                                                                   |
| TargetEvaluatorComponentData(TargetEvaluatorComponentData other)                        | Create a reference copy of an instance of the same type.                                                                                        |
| TargetEvaluatorComponentData([ComponentData](ComponentData) other)                      | Upcast an instance of type [ComponentData](ComponentData) to [TargetEvaluatorComponentData](TargetEvaluatorComponentData).                      |
| TargetEvaluatorComponentData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [TargetEvaluatorComponentData](TargetEvaluatorComponentData).                    |
| TargetEvaluatorComponentData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [TargetEvaluatorComponentData](TargetEvaluatorComponentData).              |
| TargetEvaluatorComponentData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [TargetEvaluatorComponentData](TargetEvaluatorComponentData). |

## Properties

| Name           | Type   | Description |
| -------------- | ------ | ----------- |
| updateInterval | number |             |

## Methods

| Type                                                         | Name            | Parameters                                     |
| ------------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [TargetEvaluatorComponentData](TargetEvaluatorComponentData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [TargetEvaluatorComponentData](TargetEvaluatorComponentData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
