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
| AlignmentData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [AlignmentData](/vext/ref/fb/alignmentdata/). |

## Properties

| Name          | Type                                         | Description |
| ------------- | -------------------------------------------- | ----------- |
| alignAction   | [EntryInputActionEnum](/vext/ref/fb/entryinputactionenum/) |             |
| stopTolerance | number                                       |             |
| speed         | number                                       |             |

## Methods

| Type                           | Name            | Parameters                                     |
| ------------------------------ | --------------- | ---------------------------------------------- |
| [AlignmentData](/vext/ref/fb/alignmentdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [AlignmentData](/vext/ref/fb/alignmentdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
