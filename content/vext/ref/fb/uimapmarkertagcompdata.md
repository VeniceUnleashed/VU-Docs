---
title: UIMapmarkertagCompData
---
### Base Classes

[UI3dIconCompData](/vext/ref/fb/ui3diconcompdata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                       | Description                                                                                                                         |
| --------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| UIMapmarkertagCompData()                                                          | Create a new instance of this container type.                                                                                       |
| UIMapmarkertagCompData(UIMapmarkertagCompData other)                              | Create a reference copy of an instance of the same type.                                                                            |
| UIMapmarkertagCompData([UI3dIconCompData](/vext/ref/fb/ui3diconcompdata/) other)                | Upcast an instance of type [UI3dIconCompData](/vext/ref/fb/ui3diconcompdata/) to [UIMapmarkertagCompData](/vext/ref/fb/uimapmarkertagcompdata/).                |
| UIMapmarkertagCompData([UIComponentData](/vext/ref/fb/uicomponentdata/) other)                  | Upcast an instance of type [UIComponentData](/vext/ref/fb/uicomponentdata/) to [UIMapmarkertagCompData](/vext/ref/fb/uimapmarkertagcompdata/).                  |
| UIMapmarkertagCompData([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [UIMapmarkertagCompData](/vext/ref/fb/uimapmarkertagcompdata/).                                      |
| UIMapmarkertagCompData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [UIMapmarkertagCompData](/vext/ref/fb/uimapmarkertagcompdata/). |

## Methods

| Type                                             | Name            | Parameters                                     |
| ------------------------------------------------ | --------------- | ---------------------------------------------- |
| [UIMapmarkertagCompData](/vext/ref/fb/uimapmarkertagcompdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [UIMapmarkertagCompData](/vext/ref/fb/uimapmarkertagcompdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
