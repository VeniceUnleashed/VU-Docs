---
title: AnimationControlledStateData
---
### Base Classes

[CharacterStateData](/vext/ref/fb/characterstatedata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                             | Description                                                                                                                                     |
| --------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| AnimationControlledStateData()                                                          | Create a new instance of this container type.                                                                                                   |
| AnimationControlledStateData(AnimationControlledStateData other)                        | Create a reference copy of an instance of the same type.                                                                                        |
| AnimationControlledStateData([CharacterStateData](/vext/ref/fb/characterstatedata/) other)            | Upcast an instance of type [CharacterStateData](/vext/ref/fb/characterstatedata/) to [AnimationControlledStateData](/vext/ref/fb/animationcontrolledstatedata/).            |
| AnimationControlledStateData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [AnimationControlledStateData](/vext/ref/fb/animationcontrolledstatedata/). |

## Properties

| Name              | Type   | Description |
| ----------------- | ------ | ----------- |
| upNormalTolerance | number |             |

## Methods

| Type                                                         | Name            | Parameters                                     |
| ------------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [AnimationControlledStateData](/vext/ref/fb/animationcontrolledstatedata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [AnimationControlledStateData](/vext/ref/fb/animationcontrolledstatedata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
