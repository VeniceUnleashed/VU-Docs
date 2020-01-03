---
title: UIListDataBinding
---
### Base Classes

[UIDataBinding](UIDataBinding)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                  | Description                                                                                                               |
| ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| UIListDataBinding()                                                          | Create a new instance of this container type.                                                                             |
| UIListDataBinding(UIListDataBinding other)                                   | Create a reference copy of an instance of the same type.                                                                  |
| UIListDataBinding([UIDataBinding](UIDataBinding) other)                      | Upcast an instance of type [UIDataBinding](UIDataBinding) to [UIListDataBinding](UIListDataBinding).                      |
| UIListDataBinding([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [UIListDataBinding](UIListDataBinding). |

## Properties

| Name                       | Type                                         | Description |
| -------------------------- | -------------------------------------------- | ----------- |
| listIndex                  | number                                       |             |
| listQuery                  | [UIDataSourceInfo](UIDataSourceInfo)         |             |
| staticItems                | [StaticListItem](StaticListItem)\[\]         |             |
| emptyRowType               | [UIListEmptyRowType](UIListEmptyRowType)     |             |
| defaultHighlightedRow      | [DefaultSelectionItem](DefaultSelectionItem) |             |
| rowType                    | [UIListRowType](UIListRowType)               |             |
| navigationType             | [UIListNavigationType](UIListNavigationType) |             |
| navigationTypeSource       | [UIDataSourceInfo](UIDataSourceInfo)         |             |
| rowSpacing                 | number                                       |             |
| unFocusMode                | [UIListUnFocusMode](UIListUnFocusMode)       |             |
| disabledRows               | string                                       |             |
| clearListAtNavigationEvent | bool                                         |             |
| sendIndexWithEvent         | bool                                         |             |
| screenRotationEnabled      | bool                                         |             |
| use3DSelection             | bool                                         |             |
| fireHighlightOnMouseOut    | bool                                         |             |
| dataIncludesButtonLayout   | bool                                         |             |
| visible                    | bool                                         |             |
| spinnerEnabled             | bool                                         |             |
| useScrollBar               | bool                                         |             |
| highLightOnUpdate          | bool                                         |             |
| keepScrollOffset           | bool                                         |             |

## Methods

| Type                                   | Name            | Parameters                                     |
| -------------------------------------- | --------------- | ---------------------------------------------- |
| [UIListDataBinding](UIListDataBinding) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [UIListDataBinding](UIListDataBinding) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
