---
title: UIInteractionCompData
---
### Base Classes

[UI3dIconCompData](/vext/ref/fb/ui3diconcompdata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                      | Description                                                                                                                       |
| -------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| UIInteractionCompData()                                                          | Create a new instance of this container type.                                                                                     |
| UIInteractionCompData(UIInteractionCompData other)                               | Create a reference copy of an instance of the same type.                                                                          |
| UIInteractionCompData([UI3dIconCompData](/vext/ref/fb/ui3diconcompdata/) other)                | Upcast an instance of type [UI3dIconCompData](/vext/ref/fb/ui3diconcompdata/) to [UIInteractionCompData](/vext/ref/fb/uiinteractioncompdata/).                |
| UIInteractionCompData([UIComponentData](/vext/ref/fb/uicomponentdata/) other)                  | Upcast an instance of type [UIComponentData](/vext/ref/fb/uicomponentdata/) to [UIInteractionCompData](/vext/ref/fb/uiinteractioncompdata/).                  |
| UIInteractionCompData([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [UIInteractionCompData](/vext/ref/fb/uiinteractioncompdata/).                                      |
| UIInteractionCompData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [UIInteractionCompData](/vext/ref/fb/uiinteractioncompdata/). |

## Properties

| Name               | Type   | Description |
| ------------------ | ------ | ----------- |
| repairSnapDistance | number |             |
| repairSnapCircle   | bool   |             |
| pickupShrinkSnap   | bool   |             |

## Methods

| Type                                           | Name            | Parameters                                     |
| ---------------------------------------------- | --------------- | ---------------------------------------------- |
| [UIInteractionCompData](/vext/ref/fb/uiinteractioncompdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [UIInteractionCompData](/vext/ref/fb/uiinteractioncompdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
