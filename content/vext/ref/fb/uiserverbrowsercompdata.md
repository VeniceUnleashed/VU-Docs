---
title: UIServerBrowserCompData
---
### Base Classes

[UIComponentData](UIComponentData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                        | Description                                                                                                                           |
| ---------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| UIServerBrowserCompData()                                                          | Create a new instance of this container type.                                                                                         |
| UIServerBrowserCompData(UIServerBrowserCompData other)                             | Create a reference copy of an instance of the same type.                                                                              |
| UIServerBrowserCompData([UIComponentData](UIComponentData) other)                  | Upcast an instance of type [UIComponentData](UIComponentData) to [UIServerBrowserCompData](UIServerBrowserCompData).                  |
| UIServerBrowserCompData([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [UIServerBrowserCompData](UIServerBrowserCompData).                                      |
| UIServerBrowserCompData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [UIServerBrowserCompData](UIServerBrowserCompData). |

## Methods

| Type                                               | Name            | Parameters                                     |
| -------------------------------------------------- | --------------- | ---------------------------------------------- |
| [UIServerBrowserCompData](UIServerBrowserCompData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [UIServerBrowserCompData](UIServerBrowserCompData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
