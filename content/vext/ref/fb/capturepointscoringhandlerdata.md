---
title: CapturePointScoringHandlerData
---
### Base Classes

[ScoringHandlerData](/vext/ref/fb/scoringhandlerdata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                               | Description                                                                                                                                         |
| ----------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| CapturePointScoringHandlerData()                                                          | Create a new instance of this container type.                                                                                                       |
| CapturePointScoringHandlerData(CapturePointScoringHandlerData other)                      | Create a reference copy of an instance of the same type.                                                                                            |
| CapturePointScoringHandlerData([ScoringHandlerData](/vext/ref/fb/scoringhandlerdata/) other)            | Upcast an instance of type [ScoringHandlerData](/vext/ref/fb/scoringhandlerdata/) to [CapturePointScoringHandlerData](/vext/ref/fb/capturepointscoringhandlerdata/).            |
| CapturePointScoringHandlerData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [CapturePointScoringHandlerData](/vext/ref/fb/capturepointscoringhandlerdata/). |

## Properties

| Name              | Type   | Description |
| ----------------- | ------ | ----------- |
| squadCappingBonus | number |             |

## Methods

| Type                                                             | Name            | Parameters                                     |
| ---------------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [CapturePointScoringHandlerData](/vext/ref/fb/capturepointscoringhandlerdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [CapturePointScoringHandlerData](/vext/ref/fb/capturepointscoringhandlerdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
