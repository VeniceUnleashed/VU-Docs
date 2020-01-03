---
title: SlidingStateData
---
### Base Classes

[CharacterStateData](/vext/ref/fb/characterstatedata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                 | Description                                                                                                             |
| --------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| SlidingStateData()                                                          | Create a new instance of this container type.                                                                           |
| SlidingStateData(SlidingStateData other)                                    | Create a reference copy of an instance of the same type.                                                                |
| SlidingStateData([CharacterStateData](/vext/ref/fb/characterstatedata/) other)            | Upcast an instance of type [CharacterStateData](/vext/ref/fb/characterstatedata/) to [SlidingStateData](/vext/ref/fb/slidingstatedata/).            |
| SlidingStateData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [SlidingStateData](/vext/ref/fb/slidingstatedata/). |

## Properties

| Name                 | Type   | Description |
| -------------------- | ------ | ----------- |
| horizontalInputScale | number |             |
| gravityScale         | number |             |

## Methods

| Type                                 | Name            | Parameters                                     |
| ------------------------------------ | --------------- | ---------------------------------------------- |
| [SlidingStateData](/vext/ref/fb/slidingstatedata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [SlidingStateData](/vext/ref/fb/slidingstatedata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
