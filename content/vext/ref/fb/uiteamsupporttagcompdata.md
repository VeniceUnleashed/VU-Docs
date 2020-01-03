---
title: UITeamSupportTagCompData
---
### Base Classes

[UI3dIconCompData](/vext/ref/fb/ui3diconcompdata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                         | Description                                                                                                                             |
| ----------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| UITeamSupportTagCompData()                                                          | Create a new instance of this container type.                                                                                           |
| UITeamSupportTagCompData(UITeamSupportTagCompData other)                            | Create a reference copy of an instance of the same type.                                                                                |
| UITeamSupportTagCompData([UI3dIconCompData](/vext/ref/fb/ui3diconcompdata/) other)                | Upcast an instance of type [UI3dIconCompData](/vext/ref/fb/ui3diconcompdata/) to [UITeamSupportTagCompData](/vext/ref/fb/uiteamsupporttagcompdata/).                |
| UITeamSupportTagCompData([UIComponentData](/vext/ref/fb/uicomponentdata/) other)                  | Upcast an instance of type [UIComponentData](/vext/ref/fb/uicomponentdata/) to [UITeamSupportTagCompData](/vext/ref/fb/uiteamsupporttagcompdata/).                  |
| UITeamSupportTagCompData([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [UITeamSupportTagCompData](/vext/ref/fb/uiteamsupporttagcompdata/).                                      |
| UITeamSupportTagCompData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [UITeamSupportTagCompData](/vext/ref/fb/uiteamsupporttagcompdata/). |

## Methods

| Type                                                 | Name            | Parameters                                     |
| ---------------------------------------------------- | --------------- | ---------------------------------------------- |
| [UITeamSupportTagCompData](/vext/ref/fb/uiteamsupporttagcompdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [UITeamSupportTagCompData](/vext/ref/fb/uiteamsupporttagcompdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
