---
title: CharacterSprintData (Frostbite Container)
---
### Base Classes

[DataContainer](/vext/ref/cls/shr/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                    | Description                                                                                                                   |
| ------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| CharacterSprintData()                                                          | Create a new instance of this container type.                                                                                 |
| CharacterSprintData(CharacterSprintData other)                                 | Create a reference copy of an instance of the same type.                                                                      |
| CharacterSprintData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [CharacterSprintData](CharacterSprintData). |

## Properties

| Name                         | Type   | Description |
| ---------------------------- | ------ | ----------- |
| sprintPowerDecreasePerSecond | number |             |
| sprintPowerIncreasePerSecond | number |             |
| sprintMinimumPower           | number |             |
| allowContinousSprinting      | bool   |             |

## Methods

| Type                                       | Name            | Parameters                                     |
| ------------------------------------------ | --------------- | ---------------------------------------------- |
| [CharacterSprintData](CharacterSprintData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [CharacterSprintData](CharacterSprintData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
