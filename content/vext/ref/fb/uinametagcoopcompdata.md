---
title: UINametagCoopCompData
---
### Base Classes

[UINametagCompData](UINametagCompData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                      | Description                                                                                                                       |
| -------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| UINametagCoopCompData()                                                          | Create a new instance of this container type.                                                                                     |
| UINametagCoopCompData(UINametagCoopCompData other)                               | Create a reference copy of an instance of the same type.                                                                          |
| UINametagCoopCompData([UINametagCompData](UINametagCompData) other)              | Upcast an instance of type [UINametagCompData](UINametagCompData) to [UINametagCoopCompData](UINametagCoopCompData).              |
| UINametagCoopCompData([UI3dIconCompData](UI3dIconCompData) other)                | Upcast an instance of type [UI3dIconCompData](UI3dIconCompData) to [UINametagCoopCompData](UINametagCoopCompData).                |
| UINametagCoopCompData([UIComponentData](UIComponentData) other)                  | Upcast an instance of type [UIComponentData](UIComponentData) to [UINametagCoopCompData](UINametagCoopCompData).                  |
| UINametagCoopCompData([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [UINametagCoopCompData](UINametagCoopCompData).                                      |
| UINametagCoopCompData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [UINametagCoopCompData](UINametagCoopCompData). |

## Methods

| Type                                           | Name            | Parameters                                     |
| ---------------------------------------------- | --------------- | ---------------------------------------------- |
| [UINametagCoopCompData](UINametagCoopCompData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [UINametagCoopCompData](UINametagCoopCompData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
