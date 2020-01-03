---
title: AwardStarNameData
---
### Base Classes

[DataContainer](/vext/ref/shared/class/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                  | Description                                                                                                               |
| ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| AwardStarNameData()                                                          | Create a new instance of this container type.                                                                             |
| AwardStarNameData(AwardStarNameData other)                                   | Create a reference copy of an instance of the same type.                                                                  |
| AwardStarNameData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [AwardStarNameData](/vext/ref/fb/awardstarnamedata/). |

## Properties

| Name          | Type                                               | Description |
| ------------- | -------------------------------------------------- | ----------- |
| nameInstances | [AwardStarNameInstance](/vext/ref/fb/awardstarnameinstance/)\[\] |             |

## Methods

| Type                                   | Name            | Parameters                                     |
| -------------------------------------- | --------------- | ---------------------------------------------- |
| [AwardStarNameData](/vext/ref/fb/awardstarnamedata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [AwardStarNameData](/vext/ref/fb/awardstarnamedata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
