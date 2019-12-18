---
title: SuppressionScoringHandlerData (Frostbite Container)
---
### Base Classes

[ScoringHandlerData](ScoringHandlerData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                              | Description                                                                                                                                       |
| ---------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| SuppressionScoringHandlerData()                                                          | Create a new instance of this container type.                                                                                                     |
| SuppressionScoringHandlerData(SuppressionScoringHandlerData other)                       | Create a reference copy of an instance of the same type.                                                                                          |
| SuppressionScoringHandlerData([ScoringHandlerData](ScoringHandlerData) other)            | Upcast an instance of type [ScoringHandlerData](ScoringHandlerData) to [SuppressionScoringHandlerData](SuppressionScoringHandlerData).            |
| SuppressionScoringHandlerData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [SuppressionScoringHandlerData](SuppressionScoringHandlerData). |

## Properties

| Name                      | Type   | Description |
| ------------------------- | ------ | ----------- |
| suppressionAmountLimit    | number |             |
| timeSinceSuppressionLimit | number |             |

## Methods

| Type                                                           | Name            | Parameters                                     |
| -------------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [SuppressionScoringHandlerData](SuppressionScoringHandlerData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [SuppressionScoringHandlerData](SuppressionScoringHandlerData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
