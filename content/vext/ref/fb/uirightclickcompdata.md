---
title: UIRightClickCompData
---
### Base Classes

[UIComponentData](UIComponentData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                     | Description                                                                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| UIRightClickCompData()                                                          | Create a new instance of this container type.                                                                                   |
| UIRightClickCompData(UIRightClickCompData other)                                | Create a reference copy of an instance of the same type.                                                                        |
| UIRightClickCompData([UIComponentData](UIComponentData) other)                  | Upcast an instance of type [UIComponentData](UIComponentData) to [UIRightClickCompData](UIRightClickCompData).                  |
| UIRightClickCompData([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [UIRightClickCompData](UIRightClickCompData).                                      |
| UIRightClickCompData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [UIRightClickCompData](UIRightClickCompData). |

## Methods

| Type                                         | Name            | Parameters                                     |
| -------------------------------------------- | --------------- | ---------------------------------------------- |
| [UIRightClickCompData](UIRightClickCompData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [UIRightClickCompData](UIRightClickCompData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
