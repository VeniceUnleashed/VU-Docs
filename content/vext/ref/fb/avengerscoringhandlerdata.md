---
title: AvengerScoringHandlerData
---
### Base Classes

[ScoringHandlerData](ScoringHandlerData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                          | Description                                                                                                                               |
| ------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------- |
| AvengerScoringHandlerData()                                                          | Create a new instance of this container type.                                                                                             |
| AvengerScoringHandlerData(AvengerScoringHandlerData other)                           | Create a reference copy of an instance of the same type.                                                                                  |
| AvengerScoringHandlerData([ScoringHandlerData](ScoringHandlerData) other)            | Upcast an instance of type [ScoringHandlerData](ScoringHandlerData) to [AvengerScoringHandlerData](AvengerScoringHandlerData).            |
| AvengerScoringHandlerData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [AvengerScoringHandlerData](AvengerScoringHandlerData). |

## Properties

| Name               | Type   | Description |
| ------------------ | ------ | ----------- |
| avengerKillTimeout | number |             |

## Methods

| Type                                                   | Name            | Parameters                                     |
| ------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [AvengerScoringHandlerData](AvengerScoringHandlerData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [AvengerScoringHandlerData](AvengerScoringHandlerData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
