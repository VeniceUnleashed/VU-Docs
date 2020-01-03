---
title: UIManageServerPresetsCompData
---
### Base Classes

[UIComponentData](/vext/ref/fb/uicomponentdata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                              | Description                                                                                                                                       |
| ---------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| UIManageServerPresetsCompData()                                                          | Create a new instance of this container type.                                                                                                     |
| UIManageServerPresetsCompData(UIManageServerPresetsCompData other)                       | Create a reference copy of an instance of the same type.                                                                                          |
| UIManageServerPresetsCompData([UIComponentData](/vext/ref/fb/uicomponentdata/) other)                  | Upcast an instance of type [UIComponentData](/vext/ref/fb/uicomponentdata/) to [UIManageServerPresetsCompData](/vext/ref/fb/uimanageserverpresetscompdata/).                  |
| UIManageServerPresetsCompData([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [UIManageServerPresetsCompData](/vext/ref/fb/uimanageserverpresetscompdata/).                                      |
| UIManageServerPresetsCompData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [UIManageServerPresetsCompData](/vext/ref/fb/uimanageserverpresetscompdata/). |

## Methods

| Type                                                           | Name            | Parameters                                     |
| -------------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [UIManageServerPresetsCompData](/vext/ref/fb/uimanageserverpresetscompdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [UIManageServerPresetsCompData](/vext/ref/fb/uimanageserverpresetscompdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
