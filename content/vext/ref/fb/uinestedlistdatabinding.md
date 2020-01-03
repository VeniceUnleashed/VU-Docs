---
title: UINestedListDataBinding
---
### Base Classes

[UIDataBinding](/vext/ref/fb/uidatabinding/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                        | Description                                                                                                                           |
| ---------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| UINestedListDataBinding()                                                          | Create a new instance of this container type.                                                                                         |
| UINestedListDataBinding(UINestedListDataBinding other)                             | Create a reference copy of an instance of the same type.                                                                              |
| UINestedListDataBinding([UIDataBinding](/vext/ref/fb/uidatabinding/) other)                      | Upcast an instance of type [UIDataBinding](/vext/ref/fb/uidatabinding/) to [UINestedListDataBinding](/vext/ref/fb/uinestedlistdatabinding/).                      |
| UINestedListDataBinding([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [UINestedListDataBinding](/vext/ref/fb/uinestedlistdatabinding/). |

## Properties

| Name                       | Type                                         | Description |
| -------------------------- | -------------------------------------------- | ----------- |
| listIndex                  | number                                       |             |
| nestedLists                | [NestedList](/vext/ref/fb/nestedlist/)\[\]                 |             |
| rowSpacing                 | number                                       |             |
| defaultHighlightedRow      | [DefaultSelectionItem](/vext/ref/fb/defaultselectionitem/) |             |
| navigationType             | [UIListNavigationType](/vext/ref/fb/uilistnavigationtype/) |             |
| rowType                    | [UIListRowType](/vext/ref/fb/uilistrowtype/)               |             |
| emptyRowType               | [UIListEmptyRowType](/vext/ref/fb/uilistemptyrowtype/)     |             |
| selectorWidth              | number                                       |             |
| visibility                 | [UIDataSourceInfo](/vext/ref/fb/uidatasourceinfo/)         |             |
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
| [UINestedListDataBinding](/vext/ref/fb/uinestedlistdatabinding/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [UINestedListDataBinding](/vext/ref/fb/uinestedlistdatabinding/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
