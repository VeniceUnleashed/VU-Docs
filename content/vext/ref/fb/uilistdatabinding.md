---
title: UIListDataBinding
---
### Base Classes

[UIDataBinding](/vext/ref/fb/uidatabinding/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                  | Description                                                                                                               |
| ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| UIListDataBinding()                                                          | Create a new instance of this container type.                                                                             |
| UIListDataBinding(UIListDataBinding other)                                   | Create a reference copy of an instance of the same type.                                                                  |
| UIListDataBinding([UIDataBinding](/vext/ref/fb/uidatabinding/) other)                      | Upcast an instance of type [UIDataBinding](/vext/ref/fb/uidatabinding/) to [UIListDataBinding](/vext/ref/fb/uilistdatabinding/).                      |
| UIListDataBinding([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [UIListDataBinding](/vext/ref/fb/uilistdatabinding/). |

## Properties

| Name                       | Type                                         | Description |
| -------------------------- | -------------------------------------------- | ----------- |
| listIndex                  | number                                       |             |
| listQuery                  | [UIDataSourceInfo](/vext/ref/fb/uidatasourceinfo/)         |             |
| staticItems                | [StaticListItem](/vext/ref/fb/staticlistitem/)\[\]         |             |
| emptyRowType               | [UIListEmptyRowType](/vext/ref/fb/uilistemptyrowtype/)     |             |
| defaultHighlightedRow      | [DefaultSelectionItem](/vext/ref/fb/defaultselectionitem/) |             |
| rowType                    | [UIListRowType](/vext/ref/fb/uilistrowtype/)               |             |
| navigationType             | [UIListNavigationType](/vext/ref/fb/uilistnavigationtype/) |             |
| navigationTypeSource       | [UIDataSourceInfo](/vext/ref/fb/uidatasourceinfo/)         |             |
| rowSpacing                 | number                                       |             |
| unFocusMode                | [UIListUnFocusMode](/vext/ref/fb/uilistunfocusmode/)       |             |
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
| [UIListDataBinding](/vext/ref/fb/uilistdatabinding/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [UIListDataBinding](/vext/ref/fb/uilistdatabinding/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
