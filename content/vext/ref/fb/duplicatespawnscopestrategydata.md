---
title: DuplicateSpawnScopeStrategyData
---
### Base Classes

[SoundScopeStrategyData](/vext/ref/fb/soundscopestrategydata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                                | Description                                                                                                                                           |
| ------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| DuplicateSpawnScopeStrategyData()                                                          | Create a new instance of this container type.                                                                                                         |
| DuplicateSpawnScopeStrategyData(DuplicateSpawnScopeStrategyData other)                     | Create a reference copy of an instance of the same type.                                                                                              |
| DuplicateSpawnScopeStrategyData([SoundScopeStrategyData](/vext/ref/fb/soundscopestrategydata/) other)    | Upcast an instance of type [SoundScopeStrategyData](/vext/ref/fb/soundscopestrategydata/) to [DuplicateSpawnScopeStrategyData](/vext/ref/fb/duplicatespawnscopestrategydata/).    |
| DuplicateSpawnScopeStrategyData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [DuplicateSpawnScopeStrategyData](/vext/ref/fb/duplicatespawnscopestrategydata/). |

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
| [DuplicateSpawnScopeStrategyData](/vext/ref/fb/duplicatespawnscopestrategydata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [DuplicateSpawnScopeStrategyData](/vext/ref/fb/duplicatespawnscopestrategydata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
