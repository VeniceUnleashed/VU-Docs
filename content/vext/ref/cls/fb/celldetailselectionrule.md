---
title: CellDetailSelectionRule (Frostbite Container)
---
### Base Classes

[PackagingRule](PackagingRule)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                        | Description                                                                                                                           |
| ---------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| CellDetailSelectionRule()                                                          | Create a new instance of this container type.                                                                                         |
| CellDetailSelectionRule(CellDetailSelectionRule other)                             | Create a reference copy of an instance of the same type.                                                                              |
| CellDetailSelectionRule([PackagingRule](PackagingRule) other)                      | Upcast an instance of type [PackagingRule](PackagingRule) to [CellDetailSelectionRule](CellDetailSelectionRule).                      |
| CellDetailSelectionRule([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [CellDetailSelectionRule](CellDetailSelectionRule).                                      |
| CellDetailSelectionRule([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [CellDetailSelectionRule](CellDetailSelectionRule). |

## Properties

| Name   | Type                                         | Description |
| ------ | -------------------------------------------- | ----------- |
| detail | [PackagingDetailLevel](PackagingDetailLevel) |             |

## Methods

| Type                                               | Name            | Parameters                                     |
| -------------------------------------------------- | --------------- | ---------------------------------------------- |
| [CellDetailSelectionRule](CellDetailSelectionRule) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [CellDetailSelectionRule](CellDetailSelectionRule) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
