---
title: UITrackingtagCompData
---
### Base Classes

[UI3dIconCompData](/vext/ref/fb/ui3diconcompdata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                      | Description                                                                                                                       |
| -------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| UITrackingtagCompData()                                                          | Create a new instance of this container type.                                                                                     |
| UITrackingtagCompData(UITrackingtagCompData other)                               | Create a reference copy of an instance of the same type.                                                                          |
| UITrackingtagCompData([UI3dIconCompData](/vext/ref/fb/ui3diconcompdata/) other)                | Upcast an instance of type [UI3dIconCompData](/vext/ref/fb/ui3diconcompdata/) to [UITrackingtagCompData](/vext/ref/fb/uitrackingtagcompdata/).                |
| UITrackingtagCompData([UIComponentData](/vext/ref/fb/uicomponentdata/) other)                  | Upcast an instance of type [UIComponentData](/vext/ref/fb/uicomponentdata/) to [UITrackingtagCompData](/vext/ref/fb/uitrackingtagcompdata/).                  |
| UITrackingtagCompData([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [UITrackingtagCompData](/vext/ref/fb/uitrackingtagcompdata/).                                      |
| UITrackingtagCompData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [UITrackingtagCompData](/vext/ref/fb/uitrackingtagcompdata/). |

## Properties

| Name                           | Type | Description |
| ------------------------------ | ---- | ----------- |
| showUnlockedLockAlways         | bool |             |
| showUnlockedLockOnRadar        | bool |             |
| showUnlockedLockOnHeat         | bool |             |
| showUnlockedLockOnLaserPainted | bool |             |

## Methods

| Type                                           | Name            | Parameters                                     |
| ---------------------------------------------- | --------------- | ---------------------------------------------- |
| [UITrackingtagCompData](/vext/ref/fb/uitrackingtagcompdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [UITrackingtagCompData](/vext/ref/fb/uitrackingtagcompdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
