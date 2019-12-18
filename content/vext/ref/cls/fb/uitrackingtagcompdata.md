---
title: UITrackingtagCompData (Frostbite Container)
---
### Base Classes

[UI3dIconCompData](UI3dIconCompData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                      | Description                                                                                                                       |
| -------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| UITrackingtagCompData()                                                          | Create a new instance of this container type.                                                                                     |
| UITrackingtagCompData(UITrackingtagCompData other)                               | Create a reference copy of an instance of the same type.                                                                          |
| UITrackingtagCompData([UI3dIconCompData](UI3dIconCompData) other)                | Upcast an instance of type [UI3dIconCompData](UI3dIconCompData) to [UITrackingtagCompData](UITrackingtagCompData).                |
| UITrackingtagCompData([UIComponentData](UIComponentData) other)                  | Upcast an instance of type [UIComponentData](UIComponentData) to [UITrackingtagCompData](UITrackingtagCompData).                  |
| UITrackingtagCompData([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [UITrackingtagCompData](UITrackingtagCompData).                                      |
| UITrackingtagCompData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [UITrackingtagCompData](UITrackingtagCompData). |

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
| [UITrackingtagCompData](UITrackingtagCompData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [UITrackingtagCompData](UITrackingtagCompData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
