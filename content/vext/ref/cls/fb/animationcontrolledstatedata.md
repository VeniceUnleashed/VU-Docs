---
title: AnimationControlledStateData (Frostbite Container)
---
### Base Classes

[CharacterStateData](CharacterStateData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                             | Description                                                                                                                                     |
| --------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| AnimationControlledStateData()                                                          | Create a new instance of this container type.                                                                                                   |
| AnimationControlledStateData(AnimationControlledStateData other)                        | Create a reference copy of an instance of the same type.                                                                                        |
| AnimationControlledStateData([CharacterStateData](CharacterStateData) other)            | Upcast an instance of type [CharacterStateData](CharacterStateData) to [AnimationControlledStateData](AnimationControlledStateData).            |
| AnimationControlledStateData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [AnimationControlledStateData](AnimationControlledStateData). |

## Properties

| Name              | Type   | Description |
| ----------------- | ------ | ----------- |
| upNormalTolerance | number |             |

## Methods

| Type                                                         | Name            | Parameters                                     |
| ------------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [AnimationControlledStateData](AnimationControlledStateData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [AnimationControlledStateData](AnimationControlledStateData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
