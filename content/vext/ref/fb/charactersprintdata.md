---
title: CharacterSprintData
---
### Base Classes

[DataContainer](/vext/ref/shared/class/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                    | Description                                                                                                                   |
| ------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| CharacterSprintData()                                                          | Create a new instance of this container type.                                                                                 |
| CharacterSprintData(CharacterSprintData other)                                 | Create a reference copy of an instance of the same type.                                                                      |
| CharacterSprintData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [CharacterSprintData](/vext/ref/fb/charactersprintdata/). |

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
| [CharacterSprintData](/vext/ref/fb/charactersprintdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [CharacterSprintData](/vext/ref/fb/charactersprintdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
