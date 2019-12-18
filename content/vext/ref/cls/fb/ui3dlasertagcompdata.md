---
title: UI3dLaserTagCompData (Frostbite Container)
---
### Base Classes

[UI3dIconCompData](UI3dIconCompData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                     | Description                                                                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| UI3dLaserTagCompData()                                                          | Create a new instance of this container type.                                                                                   |
| UI3dLaserTagCompData(UI3dLaserTagCompData other)                                | Create a reference copy of an instance of the same type.                                                                        |
| UI3dLaserTagCompData([UI3dIconCompData](UI3dIconCompData) other)                | Upcast an instance of type [UI3dIconCompData](UI3dIconCompData) to [UI3dLaserTagCompData](UI3dLaserTagCompData).                |
| UI3dLaserTagCompData([UIComponentData](UIComponentData) other)                  | Upcast an instance of type [UIComponentData](UIComponentData) to [UI3dLaserTagCompData](UI3dLaserTagCompData).                  |
| UI3dLaserTagCompData([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [UI3dLaserTagCompData](UI3dLaserTagCompData).                                      |
| UI3dLaserTagCompData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [UI3dLaserTagCompData](UI3dLaserTagCompData). |

## Methods

| Type                                         | Name            | Parameters                                     |
| -------------------------------------------- | --------------- | ---------------------------------------------- |
| [UI3dLaserTagCompData](UI3dLaserTagCompData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [UI3dLaserTagCompData](UI3dLaserTagCompData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
