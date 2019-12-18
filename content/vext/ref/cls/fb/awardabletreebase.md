---
title: AwardableTreeBase (Frostbite Container)
---
### Base Classes

[TreeBase](TreeBase)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                  | Description                                                                                                               |
| ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| AwardableTreeBase()                                                          | Create a new instance of this container type.                                                                             |
| AwardableTreeBase(AwardableTreeBase other)                                   | Create a reference copy of an instance of the same type.                                                                  |
| AwardableTreeBase([TreeBase](TreeBase) other)                                | Upcast an instance of type [TreeBase](TreeBase) to [AwardableTreeBase](AwardableTreeBase).                                |
| AwardableTreeBase([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [AwardableTreeBase](AwardableTreeBase).                                      |
| AwardableTreeBase([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [AwardableTreeBase](AwardableTreeBase). |

## Properties

| Name                       | Type                                                     | Description |
| -------------------------- | -------------------------------------------------------- | ----------- |
| statCategoryTreeCollection | [StatCategoryTreeCollection](StatCategoryTreeCollection) |             |
| generalCriteria            | [CriteriaData](CriteriaData)\[\]                         |             |
| generalStatistics          | bool                                                     |             |

## Methods

| Type                                   | Name            | Parameters                                     |
| -------------------------------------- | --------------- | ---------------------------------------------- |
| [AwardableTreeBase](AwardableTreeBase) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [AwardableTreeBase](AwardableTreeBase) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
