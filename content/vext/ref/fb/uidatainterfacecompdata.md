---
title: UIDataInterfaceCompData
---
### Base Classes

[UIComponentData](/vext/ref/fb/uicomponentdata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                        | Description                                                                                                                           |
| ---------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| UIDataInterfaceCompData()                                                          | Create a new instance of this container type.                                                                                         |
| UIDataInterfaceCompData(UIDataInterfaceCompData other)                             | Create a reference copy of an instance of the same type.                                                                              |
| UIDataInterfaceCompData([UIComponentData](/vext/ref/fb/uicomponentdata/) other)                  | Upcast an instance of type [UIComponentData](/vext/ref/fb/uicomponentdata/) to [UIDataInterfaceCompData](/vext/ref/fb/uidatainterfacecompdata/).                  |
| UIDataInterfaceCompData([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [UIDataInterfaceCompData](/vext/ref/fb/uidatainterfacecompdata/).                                      |
| UIDataInterfaceCompData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [UIDataInterfaceCompData](/vext/ref/fb/uidatainterfacecompdata/). |

## Methods

| Type                                               | Name            | Parameters                                     |
| -------------------------------------------------- | --------------- | ---------------------------------------------- |
| [UIDataInterfaceCompData](/vext/ref/fb/uidatainterfacecompdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [UIDataInterfaceCompData](/vext/ref/fb/uidatainterfacecompdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
