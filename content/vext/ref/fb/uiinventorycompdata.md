---
title: UIInventoryCompData
---
### Base Classes

[UIComponentData](UIComponentData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                    | Description                                                                                                                   |
| ------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| UIInventoryCompData()                                                          | Create a new instance of this container type.                                                                                 |
| UIInventoryCompData(UIInventoryCompData other)                                 | Create a reference copy of an instance of the same type.                                                                      |
| UIInventoryCompData([UIComponentData](UIComponentData) other)                  | Upcast an instance of type [UIComponentData](UIComponentData) to [UIInventoryCompData](UIInventoryCompData).                  |
| UIInventoryCompData([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [UIInventoryCompData](UIInventoryCompData).                                      |
| UIInventoryCompData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [UIInventoryCompData](UIInventoryCompData). |

## Methods

| Type                                       | Name            | Parameters                                     |
| ------------------------------------------ | --------------- | ---------------------------------------------- |
| [UIInventoryCompData](UIInventoryCompData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [UIInventoryCompData](UIInventoryCompData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
