---
title: DestroyAllInSquadScoringHandlerData (Frostbite Container)
---
### Base Classes

[ScoringHandlerData](ScoringHandlerData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                                    | Description                                                                                                                                                   |
| ---------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DestroyAllInSquadScoringHandlerData()                                                          | Create a new instance of this container type.                                                                                                                 |
| DestroyAllInSquadScoringHandlerData(DestroyAllInSquadScoringHandlerData other)                 | Create a reference copy of an instance of the same type.                                                                                                      |
| DestroyAllInSquadScoringHandlerData([ScoringHandlerData](ScoringHandlerData) other)            | Upcast an instance of type [ScoringHandlerData](ScoringHandlerData) to [DestroyAllInSquadScoringHandlerData](DestroyAllInSquadScoringHandlerData).            |
| DestroyAllInSquadScoringHandlerData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [DestroyAllInSquadScoringHandlerData](DestroyAllInSquadScoringHandlerData). |

## Methods

| Type                                                                       | Name            | Parameters                                     |
| -------------------------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [DestroyAllInSquadScoringHandlerData](DestroyAllInSquadScoringHandlerData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [DestroyAllInSquadScoringHandlerData](DestroyAllInSquadScoringHandlerData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
