---
title: PositionEvaluationConstantData
---
### Base Classes

[Asset](/vext/ref/fb/asset/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                               | Description                                                                                                                                         |
| ----------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| PositionEvaluationConstantData()                                                          | Create a new instance of this container type.                                                                                                       |
| PositionEvaluationConstantData(PositionEvaluationConstantData other)                      | Create a reference copy of an instance of the same type.                                                                                            |
| PositionEvaluationConstantData([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [PositionEvaluationConstantData](/vext/ref/fb/positionevaluationconstantdata/).                                      |
| PositionEvaluationConstantData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [PositionEvaluationConstantData](/vext/ref/fb/positionevaluationconstantdata/). |

## Properties

| Name                        | Type   | Description |
| --------------------------- | ------ | ----------- |
| ownRandomPositionsRadius    | number |             |
| leaderRandomPositionsRadius | number |             |

## Methods

| Type                                                             | Name            | Parameters                                     |
| ---------------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [PositionEvaluationConstantData](/vext/ref/fb/positionevaluationconstantdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [PositionEvaluationConstantData](/vext/ref/fb/positionevaluationconstantdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
