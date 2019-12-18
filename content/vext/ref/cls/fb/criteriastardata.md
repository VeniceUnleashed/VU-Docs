---
title: CriteriaStarData (Frostbite Container)
---
### Base Classes

[CriteriaData](CriteriaData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                 | Description                                                                                                             |
| --------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| CriteriaStarData()                                                          | Create a new instance of this container type.                                                                           |
| CriteriaStarData(CriteriaStarData other)                                    | Create a reference copy of an instance of the same type.                                                                |
| CriteriaStarData([CriteriaData](CriteriaData) other)                        | Upcast an instance of type [CriteriaData](CriteriaData) to [CriteriaStarData](CriteriaStarData).                        |
| CriteriaStarData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [CriteriaStarData](CriteriaStarData). |

## Properties

| Name         | Type                                                 | Description |
| ------------ | ---------------------------------------------------- | ----------- |
| starTemplate | [CriteriaStarCategoryData](CriteriaStarCategoryData) |             |

## Methods

| Type                                 | Name            | Parameters                                     |
| ------------------------------------ | --------------- | ---------------------------------------------- |
| [CriteriaStarData](CriteriaStarData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [CriteriaStarData](CriteriaStarData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
