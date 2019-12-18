---
title: UIManageMapsCompData (Frostbite Container)
---
### Base Classes

[UIComponentData](UIComponentData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                     | Description                                                                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| UIManageMapsCompData()                                                          | Create a new instance of this container type.                                                                                   |
| UIManageMapsCompData(UIManageMapsCompData other)                                | Create a reference copy of an instance of the same type.                                                                        |
| UIManageMapsCompData([UIComponentData](UIComponentData) other)                  | Upcast an instance of type [UIComponentData](UIComponentData) to [UIManageMapsCompData](UIManageMapsCompData).                  |
| UIManageMapsCompData([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [UIManageMapsCompData](UIManageMapsCompData).                                      |
| UIManageMapsCompData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [UIManageMapsCompData](UIManageMapsCompData). |

## Methods

| Type                                         | Name            | Parameters                                     |
| -------------------------------------------- | --------------- | ---------------------------------------------- |
| [UIManageMapsCompData](UIManageMapsCompData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [UIManageMapsCompData](UIManageMapsCompData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
