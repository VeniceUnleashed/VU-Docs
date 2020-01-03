---
title: OrderBonusScoringHandlerData
---
### Base Classes

[ScoringHandlerData](/vext/ref/fb/scoringhandlerdata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                             | Description                                                                                                                                     |
| --------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| OrderBonusScoringHandlerData()                                                          | Create a new instance of this container type.                                                                                                   |
| OrderBonusScoringHandlerData(OrderBonusScoringHandlerData other)                        | Create a reference copy of an instance of the same type.                                                                                        |
| OrderBonusScoringHandlerData([ScoringHandlerData](/vext/ref/fb/scoringhandlerdata/) other)            | Upcast an instance of type [ScoringHandlerData](/vext/ref/fb/scoringhandlerdata/) to [OrderBonusScoringHandlerData](/vext/ref/fb/orderbonusscoringhandlerdata/).            |
| OrderBonusScoringHandlerData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [OrderBonusScoringHandlerData](/vext/ref/fb/orderbonusscoringhandlerdata/). |

## Methods

| Type                                                         | Name            | Parameters                                     |
| ------------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [OrderBonusScoringHandlerData](/vext/ref/fb/orderbonusscoringhandlerdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [OrderBonusScoringHandlerData](/vext/ref/fb/orderbonusscoringhandlerdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
