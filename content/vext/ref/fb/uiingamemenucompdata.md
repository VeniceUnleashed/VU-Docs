---
title: UIIngameMenuCompData
---
### Base Classes

[UIComponentData](/vext/ref/fb/uicomponentdata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                     | Description                                                                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| UIIngameMenuCompData()                                                          | Create a new instance of this container type.                                                                                   |
| UIIngameMenuCompData(UIIngameMenuCompData other)                                | Create a reference copy of an instance of the same type.                                                                        |
| UIIngameMenuCompData([UIComponentData](/vext/ref/fb/uicomponentdata/) other)                  | Upcast an instance of type [UIComponentData](/vext/ref/fb/uicomponentdata/) to [UIIngameMenuCompData](/vext/ref/fb/uiingamemenucompdata/).                  |
| UIIngameMenuCompData([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [UIIngameMenuCompData](/vext/ref/fb/uiingamemenucompdata/).                                      |
| UIIngameMenuCompData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [UIIngameMenuCompData](/vext/ref/fb/uiingamemenucompdata/). |

## Methods

| Type                                         | Name            | Parameters                                     |
| -------------------------------------------- | --------------- | ---------------------------------------------- |
| [UIIngameMenuCompData](/vext/ref/fb/uiingamemenucompdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [UIIngameMenuCompData](/vext/ref/fb/uiingamemenucompdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
