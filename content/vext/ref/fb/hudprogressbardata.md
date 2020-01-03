---
title: HudProgressbarData
---
### Base Classes

[UIPartData](/vext/ref/fb/uipartdata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                   | Description                                                                                                                 |
| ----------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| HudProgressbarData()                                                          | Create a new instance of this container type.                                                                               |
| HudProgressbarData(HudProgressbarData other)                                  | Create a reference copy of an instance of the same type.                                                                    |
| HudProgressbarData([UIPartData](/vext/ref/fb/uipartdata/) other)                            | Upcast an instance of type [UIPartData](/vext/ref/fb/uipartdata/) to [HudProgressbarData](/vext/ref/fb/hudprogressbardata/).                            |
| HudProgressbarData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [HudProgressbarData](/vext/ref/fb/hudprogressbardata/). |

## Properties

| Name         | Type                         | Description |
| ------------ | ---------------------------- | ----------- |
| progressType | [ProgressType](/vext/ref/fb/progresstype/) |             |

## Methods

| Type                                     | Name            | Parameters                                     |
| ---------------------------------------- | --------------- | ---------------------------------------------- |
| [HudProgressbarData](/vext/ref/fb/hudprogressbardata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [HudProgressbarData](/vext/ref/fb/hudprogressbardata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
