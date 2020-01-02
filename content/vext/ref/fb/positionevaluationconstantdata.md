---
title: PositionEvaluationConstantData
---
### Base Classes

[Asset](Asset)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                               | Description                                                                                                                                         |
| ----------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| PositionEvaluationConstantData()                                                          | Create a new instance of this container type.                                                                                                       |
| PositionEvaluationConstantData(PositionEvaluationConstantData other)                      | Create a reference copy of an instance of the same type.                                                                                            |
| PositionEvaluationConstantData([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [PositionEvaluationConstantData](PositionEvaluationConstantData).                                      |
| PositionEvaluationConstantData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [PositionEvaluationConstantData](PositionEvaluationConstantData). |

## Properties

| Name                        | Type   | Description |
| --------------------------- | ------ | ----------- |
| ownRandomPositionsRadius    | number |             |
| leaderRandomPositionsRadius | number |             |

## Methods

| Type                                                             | Name            | Parameters                                     |
| ---------------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [PositionEvaluationConstantData](PositionEvaluationConstantData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [PositionEvaluationConstantData](PositionEvaluationConstantData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
