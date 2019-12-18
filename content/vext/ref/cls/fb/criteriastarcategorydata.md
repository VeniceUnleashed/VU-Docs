---
title: CriteriaStarCategoryData (Frostbite Container)
---
### Base Classes

[DataContainer](/vext/ref/cls/shr/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                         | Description                                                                                                                             |
| ----------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| CriteriaStarCategoryData()                                                          | Create a new instance of this container type.                                                                                           |
| CriteriaStarCategoryData(CriteriaStarCategoryData other)                            | Create a reference copy of an instance of the same type.                                                                                |
| CriteriaStarCategoryData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [CriteriaStarCategoryData](CriteriaStarCategoryData). |

## Properties

| Name              | Type                                                             | Description |
| ----------------- | ---------------------------------------------------------------- | ----------- |
| criteriaInstances | [CriteriaStarCategoryInstance](CriteriaStarCategoryInstance)\[\] |             |

## Methods

| Type                                                 | Name            | Parameters                                     |
| ---------------------------------------------------- | --------------- | ---------------------------------------------- |
| [CriteriaStarCategoryData](CriteriaStarCategoryData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [CriteriaStarCategoryData](CriteriaStarCategoryData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
