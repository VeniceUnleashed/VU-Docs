---
title: UI3dLaserTagCompData
---
### Base Classes

[UI3dIconCompData](/vext/ref/fb/ui3diconcompdata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                     | Description                                                                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| UI3dLaserTagCompData()                                                          | Create a new instance of this container type.                                                                                   |
| UI3dLaserTagCompData(UI3dLaserTagCompData other)                                | Create a reference copy of an instance of the same type.                                                                        |
| UI3dLaserTagCompData([UI3dIconCompData](/vext/ref/fb/ui3diconcompdata/) other)                | Upcast an instance of type [UI3dIconCompData](/vext/ref/fb/ui3diconcompdata/) to [UI3dLaserTagCompData](/vext/ref/fb/ui3dlasertagcompdata/).                |
| UI3dLaserTagCompData([UIComponentData](/vext/ref/fb/uicomponentdata/) other)                  | Upcast an instance of type [UIComponentData](/vext/ref/fb/uicomponentdata/) to [UI3dLaserTagCompData](/vext/ref/fb/ui3dlasertagcompdata/).                  |
| UI3dLaserTagCompData([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [UI3dLaserTagCompData](/vext/ref/fb/ui3dlasertagcompdata/).                                      |
| UI3dLaserTagCompData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [UI3dLaserTagCompData](/vext/ref/fb/ui3dlasertagcompdata/). |

## Methods

| Type                                         | Name            | Parameters                                     |
| -------------------------------------------- | --------------- | ---------------------------------------------- |
| [UI3dLaserTagCompData](/vext/ref/fb/ui3dlasertagcompdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [UI3dLaserTagCompData](/vext/ref/fb/ui3dlasertagcompdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
