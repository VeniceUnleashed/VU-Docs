---
title: SoundScopeSetupData
---
### Base Classes

[DataContainer](/vext/ref/shared/class/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                    | Description                                                                                                                   |
| ------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| SoundScopeSetupData()                                                          | Create a new instance of this container type.                                                                                 |
| SoundScopeSetupData(SoundScopeSetupData other)                                 | Create a reference copy of an instance of the same type.                                                                      |
| SoundScopeSetupData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [SoundScopeSetupData](SoundScopeSetupData). |

## Properties

| Name     | Type                                                       | Description |
| -------- | ---------------------------------------------------------- | ----------- |
| name     | string                                                     |             |
| mappings | [SoundScopeStrategyMapping](SoundScopeStrategyMapping)\[\] |             |

## Methods

| Type                                       | Name            | Parameters                                     |
| ------------------------------------------ | --------------- | ---------------------------------------------- |
| [SoundScopeSetupData](SoundScopeSetupData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [SoundScopeSetupData](SoundScopeSetupData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
