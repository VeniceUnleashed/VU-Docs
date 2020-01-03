---
title: LockingScoringHandlerData
---
### Base Classes

[ScoringHandlerData](/vext/ref/fb/scoringhandlerdata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                          | Description                                                                                                                               |
| ------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------- |
| LockingScoringHandlerData()                                                          | Create a new instance of this container type.                                                                                             |
| LockingScoringHandlerData(LockingScoringHandlerData other)                           | Create a reference copy of an instance of the same type.                                                                                  |
| LockingScoringHandlerData([ScoringHandlerData](/vext/ref/fb/scoringhandlerdata/) other)            | Upcast an instance of type [ScoringHandlerData](/vext/ref/fb/scoringhandlerdata/) to [LockingScoringHandlerData](/vext/ref/fb/lockingscoringhandlerdata/).            |
| LockingScoringHandlerData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [LockingScoringHandlerData](/vext/ref/fb/lockingscoringhandlerdata/). |

## Properties

| Name              | Type   | Description |
| ----------------- | ------ | ----------- |
| hotVehicleTimeout | number |             |

## Methods

| Type                                                   | Name            | Parameters                                     |
| ------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [LockingScoringHandlerData](/vext/ref/fb/lockingscoringhandlerdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [LockingScoringHandlerData](/vext/ref/fb/lockingscoringhandlerdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
