---
title: CTFScoringHandlerData
---
### Base Classes

[ScoringHandlerData](/vext/ref/fb/scoringhandlerdata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                      | Description                                                                                                                       |
| -------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| CTFScoringHandlerData()                                                          | Create a new instance of this container type.                                                                                     |
| CTFScoringHandlerData(CTFScoringHandlerData other)                               | Create a reference copy of an instance of the same type.                                                                          |
| CTFScoringHandlerData([ScoringHandlerData](/vext/ref/fb/scoringhandlerdata/) other)            | Upcast an instance of type [ScoringHandlerData](/vext/ref/fb/scoringhandlerdata/) to [CTFScoringHandlerData](/vext/ref/fb/ctfscoringhandlerdata/).            |
| CTFScoringHandlerData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [CTFScoringHandlerData](/vext/ref/fb/ctfscoringhandlerdata/). |

## Properties

| Name                    | Type   | Description |
| ----------------------- | ------ | ----------- |
| maxTeams                | number |             |
| pickUpAssistRadius      | number |             |
| captureAssistRadius     | number |             |
| enemyThreatRadius       | number |             |
| enemySuppressionTimeout | number |             |

## Methods

| Type                                           | Name            | Parameters                                     |
| ---------------------------------------------- | --------------- | ---------------------------------------------- |
| [CTFScoringHandlerData](/vext/ref/fb/ctfscoringhandlerdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [CTFScoringHandlerData](/vext/ref/fb/ctfscoringhandlerdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
