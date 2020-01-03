---
title: MaxInstancesScopeStrategyData
---
### Base Classes

[SoundScopeStrategyData](/vext/ref/fb/soundscopestrategydata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                              | Description                                                                                                                                       |
| ---------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| MaxInstancesScopeStrategyData()                                                          | Create a new instance of this container type.                                                                                                     |
| MaxInstancesScopeStrategyData(MaxInstancesScopeStrategyData other)                       | Create a reference copy of an instance of the same type.                                                                                          |
| MaxInstancesScopeStrategyData([SoundScopeStrategyData](/vext/ref/fb/soundscopestrategydata/) other)    | Upcast an instance of type [SoundScopeStrategyData](/vext/ref/fb/soundscopestrategydata/) to [MaxInstancesScopeStrategyData](/vext/ref/fb/maxinstancesscopestrategydata/).    |
| MaxInstancesScopeStrategyData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [MaxInstancesScopeStrategyData](/vext/ref/fb/maxinstancesscopestrategydata/). |

## Properties

| Name       | Type   | Description |
| ---------- | ------ | ----------- |
| count      | number |             |
| keepOldest | bool   |             |

## Methods

| Type                                                           | Name            | Parameters                                     |
| -------------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [MaxInstancesScopeStrategyData](/vext/ref/fb/maxinstancesscopestrategydata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [MaxInstancesScopeStrategyData](/vext/ref/fb/maxinstancesscopestrategydata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
