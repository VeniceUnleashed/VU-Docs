---
title: UILoadLevelCompData
---
### Base Classes

[UIComponentData](/vext/ref/fb/uicomponentdata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                    | Description                                                                                                                   |
| ------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| UILoadLevelCompData()                                                          | Create a new instance of this container type.                                                                                 |
| UILoadLevelCompData(UILoadLevelCompData other)                                 | Create a reference copy of an instance of the same type.                                                                      |
| UILoadLevelCompData([UIComponentData](/vext/ref/fb/uicomponentdata/) other)                  | Upcast an instance of type [UIComponentData](/vext/ref/fb/uicomponentdata/) to [UILoadLevelCompData](/vext/ref/fb/uiloadlevelcompdata/).                  |
| UILoadLevelCompData([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [UILoadLevelCompData](/vext/ref/fb/uiloadlevelcompdata/).                                      |
| UILoadLevelCompData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [UILoadLevelCompData](/vext/ref/fb/uiloadlevelcompdata/). |

## Methods

| Type                                       | Name            | Parameters                                     |
| ------------------------------------------ | --------------- | ---------------------------------------------- |
| [UILoadLevelCompData](/vext/ref/fb/uiloadlevelcompdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [UILoadLevelCompData](/vext/ref/fb/uiloadlevelcompdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
