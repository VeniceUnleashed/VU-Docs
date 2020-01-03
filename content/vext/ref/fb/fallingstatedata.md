---
title: FallingStateData
---
### Base Classes

[CharacterStateData](CharacterStateData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                 | Description                                                                                                             |
| --------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| FallingStateData()                                                          | Create a new instance of this container type.                                                                           |
| FallingStateData(FallingStateData other)                                    | Create a reference copy of an instance of the same type.                                                                |
| FallingStateData([CharacterStateData](CharacterStateData) other)            | Upcast an instance of type [CharacterStateData](CharacterStateData) to [FallingStateData](FallingStateData).            |
| FallingStateData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [FallingStateData](FallingStateData). |

## Methods

| Type                                 | Name            | Parameters                                     |
| ------------------------------------ | --------------- | ---------------------------------------------- |
| [FallingStateData](FallingStateData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [FallingStateData](FallingStateData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
