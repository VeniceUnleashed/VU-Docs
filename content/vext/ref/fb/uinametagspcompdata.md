---
title: UINametagSPCompData
---
### Base Classes

[UINametagCompData](UINametagCompData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                    | Description                                                                                                                   |
| ------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| UINametagSPCompData()                                                          | Create a new instance of this container type.                                                                                 |
| UINametagSPCompData(UINametagSPCompData other)                                 | Create a reference copy of an instance of the same type.                                                                      |
| UINametagSPCompData([UINametagCompData](UINametagCompData) other)              | Upcast an instance of type [UINametagCompData](UINametagCompData) to [UINametagSPCompData](UINametagSPCompData).              |
| UINametagSPCompData([UI3dIconCompData](UI3dIconCompData) other)                | Upcast an instance of type [UI3dIconCompData](UI3dIconCompData) to [UINametagSPCompData](UINametagSPCompData).                |
| UINametagSPCompData([UIComponentData](UIComponentData) other)                  | Upcast an instance of type [UIComponentData](UIComponentData) to [UINametagSPCompData](UINametagSPCompData).                  |
| UINametagSPCompData([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [UINametagSPCompData](UINametagSPCompData).                                      |
| UINametagSPCompData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [UINametagSPCompData](UINametagSPCompData). |

## Methods

| Type                                       | Name            | Parameters                                     |
| ------------------------------------------ | --------------- | ---------------------------------------------- |
| [UINametagSPCompData](UINametagSPCompData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [UINametagSPCompData](UINametagSPCompData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
