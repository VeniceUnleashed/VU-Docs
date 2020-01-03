---
title: CriteriaStarCategoryData
---
### Base Classes

[DataContainer](/vext/ref/shared/class/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                         | Description                                                                                                                             |
| ----------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| CriteriaStarCategoryData()                                                          | Create a new instance of this container type.                                                                                           |
| CriteriaStarCategoryData(CriteriaStarCategoryData other)                            | Create a reference copy of an instance of the same type.                                                                                |
| CriteriaStarCategoryData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [CriteriaStarCategoryData](/vext/ref/fb/criteriastarcategorydata/). |

## Properties

| Name              | Type                                                             | Description |
| ----------------- | ---------------------------------------------------------------- | ----------- |
| criteriaInstances | [CriteriaStarCategoryInstance](/vext/ref/fb/criteriastarcategoryinstance/)\[\] |             |

## Methods

| Type                                                 | Name            | Parameters                                     |
| ---------------------------------------------------- | --------------- | ---------------------------------------------- |
| [CriteriaStarCategoryData](/vext/ref/fb/criteriastarcategorydata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [CriteriaStarCategoryData](/vext/ref/fb/criteriastarcategorydata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
