---
title: UINestedListDataBinding (Frostbite Container)
---
### Base Classes

[UIDataBinding](UIDataBinding)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                        | Description                                                                                                                           |
| ---------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| UINestedListDataBinding()                                                          | Create a new instance of this container type.                                                                                         |
| UINestedListDataBinding(UINestedListDataBinding other)                             | Create a reference copy of an instance of the same type.                                                                              |
| UINestedListDataBinding([UIDataBinding](UIDataBinding) other)                      | Upcast an instance of type [UIDataBinding](UIDataBinding) to [UINestedListDataBinding](UINestedListDataBinding).                      |
| UINestedListDataBinding([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [UINestedListDataBinding](UINestedListDataBinding). |

## Properties

| Name                       | Type                                         | Description |
| -------------------------- | -------------------------------------------- | ----------- |
| listIndex                  | number                                       |             |
| nestedLists                | [NestedList](NestedList)\[\]                 |             |
| rowSpacing                 | number                                       |             |
| defaultHighlightedRow      | [DefaultSelectionItem](DefaultSelectionItem) |             |
| navigationType             | [UIListNavigationType](UIListNavigationType) |             |
| rowType                    | [UIListRowType](UIListRowType)               |             |
| emptyRowType               | [UIListEmptyRowType](UIListEmptyRowType)     |             |
| selectorWidth              | number                                       |             |
| visibility                 | [UIDataSourceInfo](UIDataSourceInfo)         |             |
| sendIndexWithEvent         | bool                                         |             |
| useScrollBar               | bool                                         |             |
| dataIncludesButtonLayout   | bool                                         |             |
| clearListAtNavigationEvent | bool                                         |             |
| use3DSelection             | bool                                         |             |
| invertVisible              | bool                                         |             |
| visible                    | bool                                         |             |
| screenRotationEnabled      | bool                                         |             |
| highLightOnUpdate          | bool                                         |             |
| keepScrollOffset           | bool                                         |             |

## Methods

| Type                                               | Name            | Parameters                                     |
| -------------------------------------------------- | --------------- | ---------------------------------------------- |
| [UINestedListDataBinding](UINestedListDataBinding) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [UINestedListDataBinding](UINestedListDataBinding) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
