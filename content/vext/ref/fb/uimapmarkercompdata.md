---
title: UIMapmarkerCompData
---
### Base Classes

[UIComponentData](/vext/ref/fb/uicomponentdata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                    | Description                                                                                                                   |
| ------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| UIMapmarkerCompData()                                                          | Create a new instance of this container type.                                                                                 |
| UIMapmarkerCompData(UIMapmarkerCompData other)                                 | Create a reference copy of an instance of the same type.                                                                      |
| UIMapmarkerCompData([UIComponentData](/vext/ref/fb/uicomponentdata/) other)                  | Upcast an instance of type [UIComponentData](/vext/ref/fb/uicomponentdata/) to [UIMapmarkerCompData](/vext/ref/fb/uimapmarkercompdata/).                  |
| UIMapmarkerCompData([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [UIMapmarkerCompData](/vext/ref/fb/uimapmarkercompdata/).                                      |
| UIMapmarkerCompData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [UIMapmarkerCompData](/vext/ref/fb/uimapmarkercompdata/). |

## Properties

| Name               | Type       | Description |
| ------------------ | ---------- | ----------- |
| proximityIntervals | number\[\] |             |

## Methods

| Type                                       | Name            | Parameters                                     |
| ------------------------------------------ | --------------- | ---------------------------------------------- |
| [UIMapmarkerCompData](/vext/ref/fb/uimapmarkercompdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [UIMapmarkerCompData](/vext/ref/fb/uimapmarkercompdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
