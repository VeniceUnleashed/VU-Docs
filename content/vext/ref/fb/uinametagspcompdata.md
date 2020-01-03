---
title: UINametagSPCompData
---
### Base Classes

[UINametagCompData](/vext/ref/fb/uinametagcompdata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                    | Description                                                                                                                   |
| ------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| UINametagSPCompData()                                                          | Create a new instance of this container type.                                                                                 |
| UINametagSPCompData(UINametagSPCompData other)                                 | Create a reference copy of an instance of the same type.                                                                      |
| UINametagSPCompData([UINametagCompData](/vext/ref/fb/uinametagcompdata/) other)              | Upcast an instance of type [UINametagCompData](/vext/ref/fb/uinametagcompdata/) to [UINametagSPCompData](/vext/ref/fb/uinametagspcompdata/).              |
| UINametagSPCompData([UI3dIconCompData](/vext/ref/fb/ui3diconcompdata/) other)                | Upcast an instance of type [UI3dIconCompData](/vext/ref/fb/ui3diconcompdata/) to [UINametagSPCompData](/vext/ref/fb/uinametagspcompdata/).                |
| UINametagSPCompData([UIComponentData](/vext/ref/fb/uicomponentdata/) other)                  | Upcast an instance of type [UIComponentData](/vext/ref/fb/uicomponentdata/) to [UINametagSPCompData](/vext/ref/fb/uinametagspcompdata/).                  |
| UINametagSPCompData([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [UINametagSPCompData](/vext/ref/fb/uinametagspcompdata/).                                      |
| UINametagSPCompData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [UINametagSPCompData](/vext/ref/fb/uinametagspcompdata/). |

## Methods

| Type                                       | Name            | Parameters                                     |
| ------------------------------------------ | --------------- | ---------------------------------------------- |
| [UINametagSPCompData](/vext/ref/fb/uinametagspcompdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [UINametagSPCompData](/vext/ref/fb/uinametagspcompdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
