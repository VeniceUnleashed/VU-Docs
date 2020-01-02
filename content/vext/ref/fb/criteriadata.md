---
title: CriteriaData
---
### Base Classes

[DataContainer](/vext/ref/shared/class/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                             | Description                                                                                                     |
| ----------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| CriteriaData()                                                          | Create a new instance of this container type.                                                                   |
| CriteriaData(CriteriaData other)                                        | Create a reference copy of an instance of the same type.                                                        |
| CriteriaData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [CriteriaData](CriteriaData). |

## Properties

| Name            | Type                                               | Description |
| --------------- | -------------------------------------------------- | ----------- |
| completionValue | number                                             |             |
| gateList        | [CriteriaGateList](CriteriaGateList)               |             |
| measuring       | [StatEvent](StatEvent)                             |             |
| paramX          | [StatsCategoryBaseData](StatsCategoryBaseData)     |             |
| paramY          | [StatsCategoryBaseData](StatsCategoryBaseData)     |             |
| orParamsX       | [StatsCategoryBaseData](StatsCategoryBaseData)\[\] |             |
| criteriaType    | [CriteriaType](CriteriaType)                       |             |
| descriptionSid  | string                                             |             |
| scaleFactor     | number                                             |             |
| scale           | number                                             |             |
| shouldSummarize | bool                                               |             |
| shouldHide      | bool                                               |             |
| countEvents     | bool                                               |             |

## Methods

| Type                         | Name            | Parameters                                     |
| ---------------------------- | --------------- | ---------------------------------------------- |
| [CriteriaData](CriteriaData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [CriteriaData](CriteriaData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
