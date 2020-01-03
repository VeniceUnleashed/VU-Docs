---
title: UINametagCoopCompData
---
### Base Classes

[UINametagCompData](/vext/ref/fb/uinametagcompdata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                      | Description                                                                                                                       |
| -------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| UINametagCoopCompData()                                                          | Create a new instance of this container type.                                                                                     |
| UINametagCoopCompData(UINametagCoopCompData other)                               | Create a reference copy of an instance of the same type.                                                                          |
| UINametagCoopCompData([UINametagCompData](/vext/ref/fb/uinametagcompdata/) other)              | Upcast an instance of type [UINametagCompData](/vext/ref/fb/uinametagcompdata/) to [UINametagCoopCompData](/vext/ref/fb/uinametagcoopcompdata/).              |
| UINametagCoopCompData([UI3dIconCompData](/vext/ref/fb/ui3diconcompdata/) other)                | Upcast an instance of type [UI3dIconCompData](/vext/ref/fb/ui3diconcompdata/) to [UINametagCoopCompData](/vext/ref/fb/uinametagcoopcompdata/).                |
| UINametagCoopCompData([UIComponentData](/vext/ref/fb/uicomponentdata/) other)                  | Upcast an instance of type [UIComponentData](/vext/ref/fb/uicomponentdata/) to [UINametagCoopCompData](/vext/ref/fb/uinametagcoopcompdata/).                  |
| UINametagCoopCompData([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [UINametagCoopCompData](/vext/ref/fb/uinametagcoopcompdata/).                                      |
| UINametagCoopCompData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [UINametagCoopCompData](/vext/ref/fb/uinametagcoopcompdata/). |

## Methods

| Type                                           | Name            | Parameters                                     |
| ---------------------------------------------- | --------------- | ---------------------------------------------- |
| [UINametagCoopCompData](/vext/ref/fb/uinametagcoopcompdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [UINametagCoopCompData](/vext/ref/fb/uinametagcoopcompdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
