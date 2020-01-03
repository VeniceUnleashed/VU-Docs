---
title: SoundScopeData
---
### Base Classes

[DataContainer](/vext/ref/shared/class/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                               | Description                                                                                                         |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| SoundScopeData()                                                          | Create a new instance of this container type.                                                                       |
| SoundScopeData(SoundScopeData other)                                      | Create a reference copy of an instance of the same type.                                                            |
| SoundScopeData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [SoundScopeData](SoundScopeData). |

## Properties

| Name            | Type                                             | Description |
| --------------- | ------------------------------------------------ | ----------- |
| name            | string                                           |             |
| defaultStrategy | [SoundScopeStrategyData](SoundScopeStrategyData) |             |

## Methods

| Type                             | Name            | Parameters                                     |
| -------------------------------- | --------------- | ---------------------------------------------- |
| [SoundScopeData](SoundScopeData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [SoundScopeData](SoundScopeData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
