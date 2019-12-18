---
title: CapturePointScoringHandlerData (Frostbite Container)
---
### Base Classes

[ScoringHandlerData](ScoringHandlerData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                               | Description                                                                                                                                         |
| ----------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| CapturePointScoringHandlerData()                                                          | Create a new instance of this container type.                                                                                                       |
| CapturePointScoringHandlerData(CapturePointScoringHandlerData other)                      | Create a reference copy of an instance of the same type.                                                                                            |
| CapturePointScoringHandlerData([ScoringHandlerData](ScoringHandlerData) other)            | Upcast an instance of type [ScoringHandlerData](ScoringHandlerData) to [CapturePointScoringHandlerData](CapturePointScoringHandlerData).            |
| CapturePointScoringHandlerData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [CapturePointScoringHandlerData](CapturePointScoringHandlerData). |

## Properties

| Name              | Type   | Description |
| ----------------- | ------ | ----------- |
| squadCappingBonus | number |             |

## Methods

| Type                                                             | Name            | Parameters                                     |
| ---------------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [CapturePointScoringHandlerData](CapturePointScoringHandlerData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [CapturePointScoringHandlerData](CapturePointScoringHandlerData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
