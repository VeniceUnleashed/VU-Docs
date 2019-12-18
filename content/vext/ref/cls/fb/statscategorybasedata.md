---
title: StatsCategoryBaseData (Frostbite Container)
---
### Base Classes

[TreeNodeBase](TreeNodeBase)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                      | Description                                                                                                                       |
| -------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| StatsCategoryBaseData()                                                          | Create a new instance of this container type.                                                                                     |
| StatsCategoryBaseData(StatsCategoryBaseData other)                               | Create a reference copy of an instance of the same type.                                                                          |
| StatsCategoryBaseData([TreeNodeBase](TreeNodeBase) other)                        | Upcast an instance of type [TreeNodeBase](TreeNodeBase) to [StatsCategoryBaseData](StatsCategoryBaseData).                        |
| StatsCategoryBaseData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [StatsCategoryBaseData](StatsCategoryBaseData). |

## Properties

| Name              | Type                                               | Description |
| ----------------- | -------------------------------------------------- | ----------- |
| baseSubCategories | [StatsCategoryBaseData](StatsCategoryBaseData)\[\] |             |
| code              | string                                             |             |

## Methods

| Type                                           | Name            | Parameters                                     |
| ---------------------------------------------- | --------------- | ---------------------------------------------- |
| [StatsCategoryBaseData](StatsCategoryBaseData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [StatsCategoryBaseData](StatsCategoryBaseData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
