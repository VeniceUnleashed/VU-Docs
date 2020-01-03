---
title: CellDetailSelectionRule
---
### Base Classes

[PackagingRule](/vext/ref/fb/packagingrule/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                        | Description                                                                                                                           |
| ---------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| CellDetailSelectionRule()                                                          | Create a new instance of this container type.                                                                                         |
| CellDetailSelectionRule(CellDetailSelectionRule other)                             | Create a reference copy of an instance of the same type.                                                                              |
| CellDetailSelectionRule([PackagingRule](/vext/ref/fb/packagingrule/) other)                      | Upcast an instance of type [PackagingRule](/vext/ref/fb/packagingrule/) to [CellDetailSelectionRule](/vext/ref/fb/celldetailselectionrule/).                      |
| CellDetailSelectionRule([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [CellDetailSelectionRule](/vext/ref/fb/celldetailselectionrule/).                                      |
| CellDetailSelectionRule([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [CellDetailSelectionRule](/vext/ref/fb/celldetailselectionrule/). |

## Properties

| Name   | Type                                         | Description |
| ------ | -------------------------------------------- | ----------- |
| detail | [PackagingDetailLevel](/vext/ref/fb/packagingdetaillevel/) |             |

## Methods

| Type                                               | Name            | Parameters                                     |
| -------------------------------------------------- | --------------- | ---------------------------------------------- |
| [CellDetailSelectionRule](/vext/ref/fb/celldetailselectionrule/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [CellDetailSelectionRule](/vext/ref/fb/celldetailselectionrule/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
