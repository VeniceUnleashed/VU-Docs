---
title: ClosestInstancesScopeStrategyData
---
### Base Classes

[SoundScopeStrategyData](/vext/ref/fb/soundscopestrategydata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                                  | Description                                                                                                                                               |
| -------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ClosestInstancesScopeStrategyData()                                                          | Create a new instance of this container type.                                                                                                             |
| ClosestInstancesScopeStrategyData(ClosestInstancesScopeStrategyData other)                   | Create a reference copy of an instance of the same type.                                                                                                  |
| ClosestInstancesScopeStrategyData([SoundScopeStrategyData](/vext/ref/fb/soundscopestrategydata/) other)    | Upcast an instance of type [SoundScopeStrategyData](/vext/ref/fb/soundscopestrategydata/) to [ClosestInstancesScopeStrategyData](/vext/ref/fb/closestinstancesscopestrategydata/).    |
| ClosestInstancesScopeStrategyData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [ClosestInstancesScopeStrategyData](/vext/ref/fb/closestinstancesscopestrategydata/). |

## Properties

| Name  | Type   | Description |
| ----- | ------ | ----------- |
| count | number |             |

## Methods

| Type                                                                   | Name            | Parameters                                     |
| ---------------------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [ClosestInstancesScopeStrategyData](/vext/ref/fb/closestinstancesscopestrategydata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [ClosestInstancesScopeStrategyData](/vext/ref/fb/closestinstancesscopestrategydata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
