---
title: DestroyAllInSquadScoringHandlerData
---
### Base Classes

[ScoringHandlerData](/vext/ref/fb/scoringhandlerdata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                                    | Description                                                                                                                                                   |
| ---------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DestroyAllInSquadScoringHandlerData()                                                          | Create a new instance of this container type.                                                                                                                 |
| DestroyAllInSquadScoringHandlerData(DestroyAllInSquadScoringHandlerData other)                 | Create a reference copy of an instance of the same type.                                                                                                      |
| DestroyAllInSquadScoringHandlerData([ScoringHandlerData](/vext/ref/fb/scoringhandlerdata/) other)            | Upcast an instance of type [ScoringHandlerData](/vext/ref/fb/scoringhandlerdata/) to [DestroyAllInSquadScoringHandlerData](/vext/ref/fb/destroyallinsquadscoringhandlerdata/).            |
| DestroyAllInSquadScoringHandlerData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [DestroyAllInSquadScoringHandlerData](/vext/ref/fb/destroyallinsquadscoringhandlerdata/). |

## Methods

| Type                                                                       | Name            | Parameters                                     |
| -------------------------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [DestroyAllInSquadScoringHandlerData](/vext/ref/fb/destroyallinsquadscoringhandlerdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [DestroyAllInSquadScoringHandlerData](/vext/ref/fb/destroyallinsquadscoringhandlerdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
