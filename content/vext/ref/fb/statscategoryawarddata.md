---
title: StatsCategoryAwardData
---
### Base Classes

[StatsCategoryGuidData](StatsCategoryGuidData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                       | Description                                                                                                                         |
| --------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| StatsCategoryAwardData()                                                          | Create a new instance of this container type.                                                                                       |
| StatsCategoryAwardData(StatsCategoryAwardData other)                              | Create a reference copy of an instance of the same type.                                                                            |
| StatsCategoryAwardData([StatsCategoryGuidData](StatsCategoryGuidData) other)      | Upcast an instance of type [StatsCategoryGuidData](StatsCategoryGuidData) to [StatsCategoryAwardData](StatsCategoryAwardData).      |
| StatsCategoryAwardData([StatsCategoryBaseData](StatsCategoryBaseData) other)      | Upcast an instance of type [StatsCategoryBaseData](StatsCategoryBaseData) to [StatsCategoryAwardData](StatsCategoryAwardData).      |
| StatsCategoryAwardData([TreeNodeBase](TreeNodeBase) other)                        | Upcast an instance of type [TreeNodeBase](TreeNodeBase) to [StatsCategoryAwardData](StatsCategoryAwardData).                        |
| StatsCategoryAwardData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [StatsCategoryAwardData](StatsCategoryAwardData). |

## Methods

| Type                                             | Name            | Parameters                                     |
| ------------------------------------------------ | --------------- | ---------------------------------------------- |
| [StatsCategoryAwardData](StatsCategoryAwardData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [StatsCategoryAwardData](StatsCategoryAwardData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
