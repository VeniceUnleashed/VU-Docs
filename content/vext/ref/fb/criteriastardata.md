---
title: CriteriaStarData
---
### Base Classes

[CriteriaData](/vext/ref/fb/criteriadata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                 | Description                                                                                                             |
| --------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| CriteriaStarData()                                                          | Create a new instance of this container type.                                                                           |
| CriteriaStarData(CriteriaStarData other)                                    | Create a reference copy of an instance of the same type.                                                                |
| CriteriaStarData([CriteriaData](/vext/ref/fb/criteriadata/) other)                        | Upcast an instance of type [CriteriaData](/vext/ref/fb/criteriadata/) to [CriteriaStarData](/vext/ref/fb/criteriastardata/).                        |
| CriteriaStarData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [CriteriaStarData](/vext/ref/fb/criteriastardata/). |

## Properties

| Name         | Type                                                 | Description |
| ------------ | ---------------------------------------------------- | ----------- |
| starTemplate | [CriteriaStarCategoryData](/vext/ref/fb/criteriastarcategorydata/) |             |

## Methods

| Type                                 | Name            | Parameters                                     |
| ------------------------------------ | --------------- | ---------------------------------------------- |
| [CriteriaStarData](/vext/ref/fb/criteriastardata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [CriteriaStarData](/vext/ref/fb/criteriastardata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
