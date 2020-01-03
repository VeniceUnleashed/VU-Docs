---
title: AlignmentData
---
### Base Classes

[DataContainer](/vext/ref/shared/class/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                              | Description                                                                                                       |
| ------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------- |
| AlignmentData()                                                          | Create a new instance of this container type.                                                                     |
| AlignmentData(AlignmentData other)                                       | Create a reference copy of an instance of the same type.                                                          |
| AlignmentData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [AlignmentData](AlignmentData). |

## Properties

| Name          | Type                                         | Description |
| ------------- | -------------------------------------------- | ----------- |
| alignAction   | [EntryInputActionEnum](EntryInputActionEnum) |             |
| stopTolerance | number                                       |             |
| speed         | number                                       |             |

## Methods

| Type                           | Name            | Parameters                                     |
| ------------------------------ | --------------- | ---------------------------------------------- |
| [AlignmentData](AlignmentData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [AlignmentData](AlignmentData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
