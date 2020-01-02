---
title: UICapturepointtagCompData
---
### Base Classes

[UI3dIconCompData](UI3dIconCompData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                          | Description                                                                                                                               |
| ------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------- |
| UICapturepointtagCompData()                                                          | Create a new instance of this container type.                                                                                             |
| UICapturepointtagCompData(UICapturepointtagCompData other)                           | Create a reference copy of an instance of the same type.                                                                                  |
| UICapturepointtagCompData([UI3dIconCompData](UI3dIconCompData) other)                | Upcast an instance of type [UI3dIconCompData](UI3dIconCompData) to [UICapturepointtagCompData](UICapturepointtagCompData).                |
| UICapturepointtagCompData([UIComponentData](UIComponentData) other)                  | Upcast an instance of type [UIComponentData](UIComponentData) to [UICapturepointtagCompData](UICapturepointtagCompData).                  |
| UICapturepointtagCompData([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [UICapturepointtagCompData](UICapturepointtagCompData).                                      |
| UICapturepointtagCompData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [UICapturepointtagCompData](UICapturepointtagCompData). |

## Methods

| Type                                                   | Name            | Parameters                                     |
| ------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [UICapturepointtagCompData](UICapturepointtagCompData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [UICapturepointtagCompData](UICapturepointtagCompData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
