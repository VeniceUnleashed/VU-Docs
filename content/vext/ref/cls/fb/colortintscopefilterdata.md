---
title: ColorTintScopeFilterData (Frostbite Container)
---
### Base Classes

[ScopeFilterData](ScopeFilterData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                         | Description                                                                                                                             |
| ----------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| ColorTintScopeFilterData()                                                          | Create a new instance of this container type.                                                                                           |
| ColorTintScopeFilterData(ColorTintScopeFilterData other)                            | Create a reference copy of an instance of the same type.                                                                                |
| ColorTintScopeFilterData([ScopeFilterData](ScopeFilterData) other)                  | Upcast an instance of type [ScopeFilterData](ScopeFilterData) to [ColorTintScopeFilterData](ColorTintScopeFilterData).                  |
| ColorTintScopeFilterData([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [ColorTintScopeFilterData](ColorTintScopeFilterData).                                      |
| ColorTintScopeFilterData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [ColorTintScopeFilterData](ColorTintScopeFilterData). |

## Properties

| Name          | Type                           | Description |
| ------------- | ------------------------------ | ----------- |
| colorTintData | [ColorTintData](ColorTintData) |             |

## Methods

| Type                                                 | Name            | Parameters                                     |
| ---------------------------------------------------- | --------------- | ---------------------------------------------- |
| [ColorTintScopeFilterData](ColorTintScopeFilterData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [ColorTintScopeFilterData](ColorTintScopeFilterData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
