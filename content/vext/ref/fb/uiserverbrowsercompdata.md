---
title: UIServerBrowserCompData
---
### Base Classes

[UIComponentData](/vext/ref/fb/uicomponentdata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                        | Description                                                                                                                           |
| ---------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| UIServerBrowserCompData()                                                          | Create a new instance of this container type.                                                                                         |
| UIServerBrowserCompData(UIServerBrowserCompData other)                             | Create a reference copy of an instance of the same type.                                                                              |
| UIServerBrowserCompData([UIComponentData](/vext/ref/fb/uicomponentdata/) other)                  | Upcast an instance of type [UIComponentData](/vext/ref/fb/uicomponentdata/) to [UIServerBrowserCompData](/vext/ref/fb/uiserverbrowsercompdata/).                  |
| UIServerBrowserCompData([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [UIServerBrowserCompData](/vext/ref/fb/uiserverbrowsercompdata/).                                      |
| UIServerBrowserCompData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [UIServerBrowserCompData](/vext/ref/fb/uiserverbrowsercompdata/). |

## Methods

| Type                                               | Name            | Parameters                                     |
| -------------------------------------------------- | --------------- | ---------------------------------------------- |
| [UIServerBrowserCompData](/vext/ref/fb/uiserverbrowsercompdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [UIServerBrowserCompData](/vext/ref/fb/uiserverbrowsercompdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
