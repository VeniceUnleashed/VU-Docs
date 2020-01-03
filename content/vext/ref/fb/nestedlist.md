---
title: NestedList
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
| listDataSource      | [UIDataSourceInfo](/vext/ref/fb/uidatasourceinfo/)         |             |
| dynamicShowList     | [UIDataSourceInfo](/vext/ref/fb/uidatasourceinfo/)         |             |
| staticItems         | string\[\]                                   |             |
| defaultHighlighted  | [DefaultSelectionItem](/vext/ref/fb/defaultselectionitem/) |             |
| rowType             | [UIListRowType](/vext/ref/fb/uilistrowtype/)               |             |
| useAsNormalListRows | bool                                         |             |
| hiddenOnPC          | bool                                         |             |
| hiddenOnXenon       | bool                                         |             |
| highLightOnUpdate   | bool                                         |             |

## Methods

| Type                     | Name            | Parameters |
| ------------------------ | --------------- | ---------- |
| [NestedList](/vext/ref/fb/nestedlist/) | [Clone](#clone) |            |

### Clone

> [NestedList](/vext/ref/fb/nestedlist/) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
