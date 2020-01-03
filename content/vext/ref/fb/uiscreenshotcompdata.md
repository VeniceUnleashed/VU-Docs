---
title: UIScreenshotCompData
---
### Base Classes

[UIComponentData](UIComponentData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                     | Description                                                                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| UIScreenshotCompData()                                                          | Create a new instance of this container type.                                                                                   |
| UIScreenshotCompData(UIScreenshotCompData other)                                | Create a reference copy of an instance of the same type.                                                                        |
| UIScreenshotCompData([UIComponentData](UIComponentData) other)                  | Upcast an instance of type [UIComponentData](UIComponentData) to [UIScreenshotCompData](UIScreenshotCompData).                  |
| UIScreenshotCompData([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [UIScreenshotCompData](UIScreenshotCompData).                                      |
| UIScreenshotCompData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [UIScreenshotCompData](UIScreenshotCompData). |

## Properties

| Name              | Type                                 | Description |
| ----------------- | ------------------------------------ | ----------- |
| resizeImageWidth  | number                               |             |
| screenshotInfos   | [ScreenshotInfo](ScreenshotInfo)\[\] |             |
| resizeImageHeight | number                               |             |
| autoResizeImage   | bool                                 |             |

## Methods

| Type                                         | Name            | Parameters                                     |
| -------------------------------------------- | --------------- | ---------------------------------------------- |
| [UIScreenshotCompData](UIScreenshotCompData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [UIScreenshotCompData](UIScreenshotCompData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
