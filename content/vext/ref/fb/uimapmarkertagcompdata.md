---
title: UIMapmarkertagCompData
---
### Base Classes

[UI3dIconCompData](UI3dIconCompData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                       | Description                                                                                                                         |
| --------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| UIMapmarkertagCompData()                                                          | Create a new instance of this container type.                                                                                       |
| UIMapmarkertagCompData(UIMapmarkertagCompData other)                              | Create a reference copy of an instance of the same type.                                                                            |
| UIMapmarkertagCompData([UI3dIconCompData](UI3dIconCompData) other)                | Upcast an instance of type [UI3dIconCompData](UI3dIconCompData) to [UIMapmarkertagCompData](UIMapmarkertagCompData).                |
| UIMapmarkertagCompData([UIComponentData](UIComponentData) other)                  | Upcast an instance of type [UIComponentData](UIComponentData) to [UIMapmarkertagCompData](UIMapmarkertagCompData).                  |
| UIMapmarkertagCompData([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [UIMapmarkertagCompData](UIMapmarkertagCompData).                                      |
| UIMapmarkertagCompData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [UIMapmarkertagCompData](UIMapmarkertagCompData). |

## Methods

| Type                                             | Name            | Parameters                                     |
| ------------------------------------------------ | --------------- | ---------------------------------------------- |
| [UIMapmarkertagCompData](UIMapmarkertagCompData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [UIMapmarkertagCompData](UIMapmarkertagCompData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
