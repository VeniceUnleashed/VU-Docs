---
title: SwimmingStateData
---
### Base Classes

[CharacterStateData](CharacterStateData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                  | Description                                                                                                               |
| ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| SwimmingStateData()                                                          | Create a new instance of this container type.                                                                             |
| SwimmingStateData(SwimmingStateData other)                                   | Create a reference copy of an instance of the same type.                                                                  |
| SwimmingStateData([CharacterStateData](CharacterStateData) other)            | Upcast an instance of type [CharacterStateData](CharacterStateData) to [SwimmingStateData](SwimmingStateData).            |
| SwimmingStateData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [SwimmingStateData](SwimmingStateData). |

## Properties

| Name           | Type   | Description |
| -------------- | ------ | ----------- |
| bodyUnderWater | number |             |

## Methods

| Type                                   | Name            | Parameters                                     |
| -------------------------------------- | --------------- | ---------------------------------------------- |
| [SwimmingStateData](SwimmingStateData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [SwimmingStateData](SwimmingStateData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
