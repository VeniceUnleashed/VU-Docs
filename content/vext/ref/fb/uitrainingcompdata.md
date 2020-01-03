---
title: UITrainingCompData
---
### Base Classes

[UIComponentData](UIComponentData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                   | Description                                                                                                                 |
| ----------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| UITrainingCompData()                                                          | Create a new instance of this container type.                                                                               |
| UITrainingCompData(UITrainingCompData other)                                  | Create a reference copy of an instance of the same type.                                                                    |
| UITrainingCompData([UIComponentData](UIComponentData) other)                  | Upcast an instance of type [UIComponentData](UIComponentData) to [UITrainingCompData](UITrainingCompData).                  |
| UITrainingCompData([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [UITrainingCompData](UITrainingCompData).                                      |
| UITrainingCompData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [UITrainingCompData](UITrainingCompData). |

## Methods

| Type                                     | Name            | Parameters                                     |
| ---------------------------------------- | --------------- | ---------------------------------------------- |
| [UITrainingCompData](UITrainingCompData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [UITrainingCompData](UITrainingCompData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
