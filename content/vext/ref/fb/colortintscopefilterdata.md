---
title: ColorTintScopeFilterData
---
### Base Classes

[ScopeFilterData](/vext/ref/fb/scopefilterdata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                         | Description                                                                                                                             |
| ----------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| ColorTintScopeFilterData()                                                          | Create a new instance of this container type.                                                                                           |
| ColorTintScopeFilterData(ColorTintScopeFilterData other)                            | Create a reference copy of an instance of the same type.                                                                                |
| ColorTintScopeFilterData([ScopeFilterData](/vext/ref/fb/scopefilterdata/) other)                  | Upcast an instance of type [ScopeFilterData](/vext/ref/fb/scopefilterdata/) to [ColorTintScopeFilterData](/vext/ref/fb/colortintscopefilterdata/).                  |
| ColorTintScopeFilterData([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [ColorTintScopeFilterData](/vext/ref/fb/colortintscopefilterdata/).                                      |
| ColorTintScopeFilterData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [ColorTintScopeFilterData](/vext/ref/fb/colortintscopefilterdata/). |

## Properties

| Name          | Type                           | Description |
| ------------- | ------------------------------ | ----------- |
| colorTintData | [ColorTintData](/vext/ref/fb/colortintdata/) |             |

## Methods

| Type                                                 | Name            | Parameters                                     |
| ---------------------------------------------------- | --------------- | ---------------------------------------------- |
| [ColorTintScopeFilterData](/vext/ref/fb/colortintscopefilterdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [ColorTintScopeFilterData](/vext/ref/fb/colortintscopefilterdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
