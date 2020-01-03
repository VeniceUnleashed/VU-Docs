---
title: SpottingScoringHandlerData
---
### Base Classes

[ScoringHandlerData](/vext/ref/fb/scoringhandlerdata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                           | Description                                                                                                                                 |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| SpottingScoringHandlerData()                                                          | Create a new instance of this container type.                                                                                               |
| SpottingScoringHandlerData(SpottingScoringHandlerData other)                          | Create a reference copy of an instance of the same type.                                                                                    |
| SpottingScoringHandlerData([ScoringHandlerData](/vext/ref/fb/scoringhandlerdata/) other)            | Upcast an instance of type [ScoringHandlerData](/vext/ref/fb/scoringhandlerdata/) to [SpottingScoringHandlerData](/vext/ref/fb/spottingscoringhandlerdata/).            |
| SpottingScoringHandlerData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [SpottingScoringHandlerData](/vext/ref/fb/spottingscoringhandlerdata/). |

## Methods

| Type                                                     | Name            | Parameters                                     |
| -------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [SpottingScoringHandlerData](/vext/ref/fb/spottingscoringhandlerdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [SpottingScoringHandlerData](/vext/ref/fb/spottingscoringhandlerdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
