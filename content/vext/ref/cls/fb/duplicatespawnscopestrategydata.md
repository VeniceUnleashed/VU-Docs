---
title: DuplicateSpawnScopeStrategyData (Frostbite Container)
---
### Base Classes

[SoundScopeStrategyData](SoundScopeStrategyData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                                | Description                                                                                                                                           |
| ------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| DuplicateSpawnScopeStrategyData()                                                          | Create a new instance of this container type.                                                                                                         |
| DuplicateSpawnScopeStrategyData(DuplicateSpawnScopeStrategyData other)                     | Create a reference copy of an instance of the same type.                                                                                              |
| DuplicateSpawnScopeStrategyData([SoundScopeStrategyData](SoundScopeStrategyData) other)    | Upcast an instance of type [SoundScopeStrategyData](SoundScopeStrategyData) to [DuplicateSpawnScopeStrategyData](DuplicateSpawnScopeStrategyData).    |
| DuplicateSpawnScopeStrategyData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [DuplicateSpawnScopeStrategyData](DuplicateSpawnScopeStrategyData). |

## Properties

| Name         | Type   | Description |
| ------------ | ------ | ----------- |
| time         | number |             |
| distance     | number |             |
| closestCount | number |             |
| groupTypes   | bool   |             |

## Methods

| Type                                                               | Name            | Parameters                                     |
| ------------------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [DuplicateSpawnScopeStrategyData](DuplicateSpawnScopeStrategyData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [DuplicateSpawnScopeStrategyData](DuplicateSpawnScopeStrategyData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
