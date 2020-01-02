---
title: UILoadLevelCompData
---
### Base Classes

[UIComponentData](UIComponentData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                    | Description                                                                                                                   |
| ------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| UILoadLevelCompData()                                                          | Create a new instance of this container type.                                                                                 |
| UILoadLevelCompData(UILoadLevelCompData other)                                 | Create a reference copy of an instance of the same type.                                                                      |
| UILoadLevelCompData([UIComponentData](UIComponentData) other)                  | Upcast an instance of type [UIComponentData](UIComponentData) to [UILoadLevelCompData](UILoadLevelCompData).                  |
| UILoadLevelCompData([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [UILoadLevelCompData](UILoadLevelCompData).                                      |
| UILoadLevelCompData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [UILoadLevelCompData](UILoadLevelCompData). |

## Methods

| Type                                       | Name            | Parameters                                     |
| ------------------------------------------ | --------------- | ---------------------------------------------- |
| [UILoadLevelCompData](UILoadLevelCompData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [UILoadLevelCompData](UILoadLevelCompData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
