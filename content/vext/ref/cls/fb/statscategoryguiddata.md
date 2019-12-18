---
title: StatsCategoryGuidData (Frostbite Container)
---
### Base Classes

[StatsCategoryBaseData](StatsCategoryBaseData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                      | Description                                                                                                                       |
| -------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| StatsCategoryGuidData()                                                          | Create a new instance of this container type.                                                                                     |
| StatsCategoryGuidData(StatsCategoryGuidData other)                               | Create a reference copy of an instance of the same type.                                                                          |
| StatsCategoryGuidData([StatsCategoryBaseData](StatsCategoryBaseData) other)      | Upcast an instance of type [StatsCategoryBaseData](StatsCategoryBaseData) to [StatsCategoryGuidData](StatsCategoryGuidData).      |
| StatsCategoryGuidData([TreeNodeBase](TreeNodeBase) other)                        | Upcast an instance of type [TreeNodeBase](TreeNodeBase) to [StatsCategoryGuidData](StatsCategoryGuidData).                        |
| StatsCategoryGuidData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [StatsCategoryGuidData](StatsCategoryGuidData). |

## Properties

| Name                | Type                                  | Description |
| ------------------- | ------------------------------------- | ----------- |
| objectInstanceGuids | [Guid](/vext/ref/cls/shr/Guid)\[\] |             |

## Methods

| Type                                           | Name            | Parameters                                     |
| ---------------------------------------------- | --------------- | ---------------------------------------------- |
| [StatsCategoryGuidData](StatsCategoryGuidData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [StatsCategoryGuidData](StatsCategoryGuidData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
