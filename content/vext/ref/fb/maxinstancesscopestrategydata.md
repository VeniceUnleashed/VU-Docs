---
title: MaxInstancesScopeStrategyData
---
### Base Classes

[SoundScopeStrategyData](SoundScopeStrategyData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                              | Description                                                                                                                                       |
| ---------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| MaxInstancesScopeStrategyData()                                                          | Create a new instance of this container type.                                                                                                     |
| MaxInstancesScopeStrategyData(MaxInstancesScopeStrategyData other)                       | Create a reference copy of an instance of the same type.                                                                                          |
| MaxInstancesScopeStrategyData([SoundScopeStrategyData](SoundScopeStrategyData) other)    | Upcast an instance of type [SoundScopeStrategyData](SoundScopeStrategyData) to [MaxInstancesScopeStrategyData](MaxInstancesScopeStrategyData).    |
| MaxInstancesScopeStrategyData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [MaxInstancesScopeStrategyData](MaxInstancesScopeStrategyData). |

## Properties

| Name       | Type   | Description |
| ---------- | ------ | ----------- |
| count      | number |             |
| keepOldest | bool   |             |

## Methods

| Type                                                           | Name            | Parameters                                     |
| -------------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [MaxInstancesScopeStrategyData](MaxInstancesScopeStrategyData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [MaxInstancesScopeStrategyData](MaxInstancesScopeStrategyData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
