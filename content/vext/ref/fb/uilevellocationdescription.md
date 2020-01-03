---
title: UILevelLocationDescription
---
### Base Classes

[UIItemDescription](/vext/ref/fb/uiitemdescription/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                           | Description                                                                                                                                 |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| UILevelLocationDescription()                                                          | Create a new instance of this container type.                                                                                               |
| UILevelLocationDescription(UILevelLocationDescription other)                          | Create a reference copy of an instance of the same type.                                                                                    |
| UILevelLocationDescription([UIItemDescription](/vext/ref/fb/uiitemdescription/) other)              | Upcast an instance of type [UIItemDescription](/vext/ref/fb/uiitemdescription/) to [UILevelLocationDescription](/vext/ref/fb/uilevellocationdescription/).              |
| UILevelLocationDescription([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [UILevelLocationDescription](/vext/ref/fb/uilevellocationdescription/). |

## Properties

| Name        | Type   | Description |
| ----------- | ------ | ----------- |
| name        | string |             |
| description | string |             |
| texturePath | string |             |

## Methods

| Type                                                     | Name            | Parameters                                     |
| -------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [UILevelLocationDescription](/vext/ref/fb/uilevellocationdescription/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [UILevelLocationDescription](/vext/ref/fb/uilevellocationdescription/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
