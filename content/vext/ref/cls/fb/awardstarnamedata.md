---
title: AwardStarNameData (Frostbite Container)
---
### Base Classes

[DataContainer](/vext/ref/cls/shr/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                  | Description                                                                                                               |
| ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| AwardStarNameData()                                                          | Create a new instance of this container type.                                                                             |
| AwardStarNameData(AwardStarNameData other)                                   | Create a reference copy of an instance of the same type.                                                                  |
| AwardStarNameData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [AwardStarNameData](AwardStarNameData). |

## Properties

| Name          | Type                                               | Description |
| ------------- | -------------------------------------------------- | ----------- |
| nameInstances | [AwardStarNameInstance](AwardStarNameInstance)\[\] |             |

## Methods

| Type                                   | Name            | Parameters                                     |
| -------------------------------------- | --------------- | ---------------------------------------------- |
| [AwardStarNameData](AwardStarNameData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [AwardStarNameData](AwardStarNameData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
