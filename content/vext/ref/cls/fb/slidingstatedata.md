---
title: SlidingStateData (Frostbite Container)
---
### Base Classes

[CharacterStateData](CharacterStateData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                 | Description                                                                                                             |
| --------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| SlidingStateData()                                                          | Create a new instance of this container type.                                                                           |
| SlidingStateData(SlidingStateData other)                                    | Create a reference copy of an instance of the same type.                                                                |
| SlidingStateData([CharacterStateData](CharacterStateData) other)            | Upcast an instance of type [CharacterStateData](CharacterStateData) to [SlidingStateData](SlidingStateData).            |
| SlidingStateData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [SlidingStateData](SlidingStateData). |

## Properties

| Name                 | Type   | Description |
| -------------------- | ------ | ----------- |
| horizontalInputScale | number |             |
| gravityScale         | number |             |

## Methods

| Type                                 | Name            | Parameters                                     |
| ------------------------------------ | --------------- | ---------------------------------------------- |
| [SlidingStateData](SlidingStateData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [SlidingStateData](SlidingStateData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
