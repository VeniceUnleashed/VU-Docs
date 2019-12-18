---
title: ClosestInstancesScopeStrategyData (Frostbite Container)
---
### Base Classes

[SoundScopeStrategyData](SoundScopeStrategyData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                                  | Description                                                                                                                                               |
| -------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ClosestInstancesScopeStrategyData()                                                          | Create a new instance of this container type.                                                                                                             |
| ClosestInstancesScopeStrategyData(ClosestInstancesScopeStrategyData other)                   | Create a reference copy of an instance of the same type.                                                                                                  |
| ClosestInstancesScopeStrategyData([SoundScopeStrategyData](SoundScopeStrategyData) other)    | Upcast an instance of type [SoundScopeStrategyData](SoundScopeStrategyData) to [ClosestInstancesScopeStrategyData](ClosestInstancesScopeStrategyData).    |
| ClosestInstancesScopeStrategyData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [ClosestInstancesScopeStrategyData](ClosestInstancesScopeStrategyData). |

## Properties

| Name  | Type   | Description |
| ----- | ------ | ----------- |
| count | number |             |

## Methods

| Type                                                                   | Name            | Parameters                                     |
| ---------------------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [ClosestInstancesScopeStrategyData](ClosestInstancesScopeStrategyData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [ClosestInstancesScopeStrategyData](ClosestInstancesScopeStrategyData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
