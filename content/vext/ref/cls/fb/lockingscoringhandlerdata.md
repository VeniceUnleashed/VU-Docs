---
title: LockingScoringHandlerData (Frostbite Container)
---
### Base Classes

[ScoringHandlerData](ScoringHandlerData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                          | Description                                                                                                                               |
| ------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------- |
| LockingScoringHandlerData()                                                          | Create a new instance of this container type.                                                                                             |
| LockingScoringHandlerData(LockingScoringHandlerData other)                           | Create a reference copy of an instance of the same type.                                                                                  |
| LockingScoringHandlerData([ScoringHandlerData](ScoringHandlerData) other)            | Upcast an instance of type [ScoringHandlerData](ScoringHandlerData) to [LockingScoringHandlerData](LockingScoringHandlerData).            |
| LockingScoringHandlerData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [LockingScoringHandlerData](LockingScoringHandlerData). |

## Properties

| Name              | Type   | Description |
| ----------------- | ------ | ----------- |
| hotVehicleTimeout | number |             |

## Methods

| Type                                                   | Name            | Parameters                                     |
| ------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [LockingScoringHandlerData](LockingScoringHandlerData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [LockingScoringHandlerData](LockingScoringHandlerData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
