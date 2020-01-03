---
title: UIAlerttagCompData
---
### Base Classes

[UI3dIconCompData](UI3dIconCompData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                   | Description                                                                                                                 |
| ----------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| UIAlerttagCompData()                                                          | Create a new instance of this container type.                                                                               |
| UIAlerttagCompData(UIAlerttagCompData other)                                  | Create a reference copy of an instance of the same type.                                                                    |
| UIAlerttagCompData([UI3dIconCompData](UI3dIconCompData) other)                | Upcast an instance of type [UI3dIconCompData](UI3dIconCompData) to [UIAlerttagCompData](UIAlerttagCompData).                |
| UIAlerttagCompData([UIComponentData](UIComponentData) other)                  | Upcast an instance of type [UIComponentData](UIComponentData) to [UIAlerttagCompData](UIAlerttagCompData).                  |
| UIAlerttagCompData([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [UIAlerttagCompData](UIAlerttagCompData).                                      |
| UIAlerttagCompData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [UIAlerttagCompData](UIAlerttagCompData). |

## Methods

| Type                                     | Name            | Parameters                                     |
| ---------------------------------------- | --------------- | ---------------------------------------------- |
| [UIAlerttagCompData](UIAlerttagCompData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [UIAlerttagCompData](UIAlerttagCompData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
