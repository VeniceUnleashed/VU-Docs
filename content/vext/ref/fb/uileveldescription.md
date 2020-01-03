---
title: UILevelDescription
---
### Base Classes

[UIItemDescription](/vext/ref/fb/uiitemdescription/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                   | Description                                                                                                                 |
| ----------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| UILevelDescription()                                                          | Create a new instance of this container type.                                                                               |
| UILevelDescription(UILevelDescription other)                                  | Create a reference copy of an instance of the same type.                                                                    |
| UILevelDescription([UIItemDescription](/vext/ref/fb/uiitemdescription/) other)              | Upcast an instance of type [UIItemDescription](/vext/ref/fb/uiitemdescription/) to [UILevelDescription](/vext/ref/fb/uileveldescription/).              |
| UILevelDescription([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [UILevelDescription](/vext/ref/fb/uileveldescription/). |

## Properties

| Name                 | Type   | Description |
| -------------------- | ------ | ----------- |
| levelName            | string |             |
| texturePath          | string |             |
| thumbnailTexturePath | string |             |

## Methods

| Type                                     | Name            | Parameters                                     |
| ---------------------------------------- | --------------- | ---------------------------------------------- |
| [UILevelDescription](/vext/ref/fb/uileveldescription/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [UILevelDescription](/vext/ref/fb/uileveldescription/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
