---
title: NestedList (Frostbite Structure)
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                  | Description                                              |
| ---------------------------- | -------------------------------------------------------- |
| NestedList()                 | Create a new instance of this structure type.            |
| NestedList(NestedList other) | Create a reference copy of a structure of the same type. |

## Properties

| Name                | Type                                         | Description |
| ------------------- | -------------------------------------------- | ----------- |
| label               | string                                       |             |
| index               | string                                       |             |
| listDataSource      | [UIDataSourceInfo](UIDataSourceInfo)         |             |
| dynamicShowList     | [UIDataSourceInfo](UIDataSourceInfo)         |             |
| staticItems         | string\[\]                                   |             |
| defaultHighlighted  | [DefaultSelectionItem](DefaultSelectionItem) |             |
| rowType             | [UIListRowType](UIListRowType)               |             |
| useAsNormalListRows | bool                                         |             |
| hiddenOnPC          | bool                                         |             |
| hiddenOnXenon       | bool                                         |             |
| highLightOnUpdate   | bool                                         |             |

## Methods

| Type                     | Name            | Parameters |
| ------------------------ | --------------- | ---------- |
| [NestedList](NestedList) | [Clone](#clone) |            |

### Clone

> [NestedList](NestedList) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone).
