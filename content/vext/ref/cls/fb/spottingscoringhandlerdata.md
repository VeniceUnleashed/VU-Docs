---
title: SpottingScoringHandlerData (Frostbite Container)
---
### Base Classes

[ScoringHandlerData](ScoringHandlerData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                           | Description                                                                                                                                 |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| SpottingScoringHandlerData()                                                          | Create a new instance of this container type.                                                                                               |
| SpottingScoringHandlerData(SpottingScoringHandlerData other)                          | Create a reference copy of an instance of the same type.                                                                                    |
| SpottingScoringHandlerData([ScoringHandlerData](ScoringHandlerData) other)            | Upcast an instance of type [ScoringHandlerData](ScoringHandlerData) to [SpottingScoringHandlerData](SpottingScoringHandlerData).            |
| SpottingScoringHandlerData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [SpottingScoringHandlerData](SpottingScoringHandlerData). |

## Methods

| Type                                                     | Name            | Parameters                                     |
| -------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [SpottingScoringHandlerData](SpottingScoringHandlerData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [SpottingScoringHandlerData](SpottingScoringHandlerData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
