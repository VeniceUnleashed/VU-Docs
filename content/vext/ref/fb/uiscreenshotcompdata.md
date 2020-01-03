---
title: UIScreenshotCompData
---
### Base Classes

[UIComponentData](/vext/ref/fb/uicomponentdata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                     | Description                                                                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| UIScreenshotCompData()                                                          | Create a new instance of this container type.                                                                                   |
| UIScreenshotCompData(UIScreenshotCompData other)                                | Create a reference copy of an instance of the same type.                                                                        |
| UIScreenshotCompData([UIComponentData](/vext/ref/fb/uicomponentdata/) other)                  | Upcast an instance of type [UIComponentData](/vext/ref/fb/uicomponentdata/) to [UIScreenshotCompData](/vext/ref/fb/uiscreenshotcompdata/).                  |
| UIScreenshotCompData([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [UIScreenshotCompData](/vext/ref/fb/uiscreenshotcompdata/).                                      |
| UIScreenshotCompData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [UIScreenshotCompData](/vext/ref/fb/uiscreenshotcompdata/). |

## Properties

| Name              | Type                                 | Description |
| ----------------- | ------------------------------------ | ----------- |
| resizeImageWidth  | number                               |             |
| screenshotInfos   | [ScreenshotInfo](/vext/ref/fb/screenshotinfo/)\[\] |             |
| resizeImageHeight | number                               |             |
| autoResizeImage   | bool                                 |             |

## Methods

| Type                                         | Name            | Parameters                                     |
| -------------------------------------------- | --------------- | ---------------------------------------------- |
| [UIScreenshotCompData](/vext/ref/fb/uiscreenshotcompdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [UIScreenshotCompData](/vext/ref/fb/uiscreenshotcompdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
