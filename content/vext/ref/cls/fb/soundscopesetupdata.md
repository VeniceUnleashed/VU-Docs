---
title: SoundScopeSetupData (Frostbite Container)
---
### Base Classes

[DataContainer](/vext/ref/cls/shr/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                    | Description                                                                                                                   |
| ------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| SoundScopeSetupData()                                                          | Create a new instance of this container type.                                                                                 |
| SoundScopeSetupData(SoundScopeSetupData other)                                 | Create a reference copy of an instance of the same type.                                                                      |
| SoundScopeSetupData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [SoundScopeSetupData](SoundScopeSetupData). |

## Properties

| Name     | Type                                                       | Description |
| -------- | ---------------------------------------------------------- | ----------- |
| name     | string                                                     |             |
| mappings | [SoundScopeStrategyMapping](SoundScopeStrategyMapping)\[\] |             |

## Methods

| Type                                       | Name            | Parameters                                     |
| ------------------------------------------ | --------------- | ---------------------------------------------- |
| [SoundScopeSetupData](SoundScopeSetupData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [SoundScopeSetupData](SoundScopeSetupData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
