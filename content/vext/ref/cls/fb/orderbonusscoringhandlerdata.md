---
title: OrderBonusScoringHandlerData (Frostbite Container)
---
### Base Classes

[ScoringHandlerData](ScoringHandlerData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                             | Description                                                                                                                                     |
| --------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| OrderBonusScoringHandlerData()                                                          | Create a new instance of this container type.                                                                                                   |
| OrderBonusScoringHandlerData(OrderBonusScoringHandlerData other)                        | Create a reference copy of an instance of the same type.                                                                                        |
| OrderBonusScoringHandlerData([ScoringHandlerData](ScoringHandlerData) other)            | Upcast an instance of type [ScoringHandlerData](ScoringHandlerData) to [OrderBonusScoringHandlerData](OrderBonusScoringHandlerData).            |
| OrderBonusScoringHandlerData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [OrderBonusScoringHandlerData](OrderBonusScoringHandlerData). |

## Methods

| Type                                                         | Name            | Parameters                                     |
| ------------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [OrderBonusScoringHandlerData](OrderBonusScoringHandlerData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [OrderBonusScoringHandlerData](OrderBonusScoringHandlerData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
