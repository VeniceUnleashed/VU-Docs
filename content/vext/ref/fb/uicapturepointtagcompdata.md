---
title: UICapturepointtagCompData
---
### Base Classes

[UI3dIconCompData](/vext/ref/fb/ui3diconcompdata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                          | Description                                                                                                                               |
| ------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------- |
| UICapturepointtagCompData()                                                          | Create a new instance of this container type.                                                                                             |
| UICapturepointtagCompData(UICapturepointtagCompData other)                           | Create a reference copy of an instance of the same type.                                                                                  |
| UICapturepointtagCompData([UI3dIconCompData](/vext/ref/fb/ui3diconcompdata/) other)                | Upcast an instance of type [UI3dIconCompData](/vext/ref/fb/ui3diconcompdata/) to [UICapturepointtagCompData](/vext/ref/fb/uicapturepointtagcompdata/).                |
| UICapturepointtagCompData([UIComponentData](/vext/ref/fb/uicomponentdata/) other)                  | Upcast an instance of type [UIComponentData](/vext/ref/fb/uicomponentdata/) to [UICapturepointtagCompData](/vext/ref/fb/uicapturepointtagcompdata/).                  |
| UICapturepointtagCompData([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [UICapturepointtagCompData](/vext/ref/fb/uicapturepointtagcompdata/).                                      |
| UICapturepointtagCompData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [UICapturepointtagCompData](/vext/ref/fb/uicapturepointtagcompdata/). |

## Methods

| Type                                                   | Name            | Parameters                                     |
| ------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [UICapturepointtagCompData](/vext/ref/fb/uicapturepointtagcompdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [UICapturepointtagCompData](/vext/ref/fb/uicapturepointtagcompdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
